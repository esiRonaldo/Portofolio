import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import ContactForm from './ContactForm.vue'

function fill(wrapper: ReturnType<typeof mount>, name: string, email: string, message: string) {
  return Promise.all([
    wrapper.get('#contact-name').setValue(name),
    wrapper.get('#contact-email').setValue(email),
    wrapper.get('#contact-message').setValue(message),
  ])
}

describe('ContactForm', () => {
  it('labels every field', () => {
    const wrapper = mount(ContactForm)
    for (const [field, label] of [
      ['name', 'Name'],
      ['email', 'Email'],
      ['message', 'Message'],
    ]) {
      expect(wrapper.get(`label[for="contact-${field}"]`).text()).toBe(label)
      expect(wrapper.get(`#contact-${field}`).attributes('required')).toBeDefined()
    }
  })

  it('submits with a button named by its text', () => {
    expect(mount(ContactForm).get('button[type="submit"]').text()).toBe('Submit')
  })

  it('shows linked errors on an empty submit and focuses the first invalid field', async () => {
    const wrapper = mount(ContactForm, { attachTo: document.body })
    await wrapper.get('form').trigger('submit')
    await flushPromises()

    const name = wrapper.get('#contact-name')
    expect(name.attributes('aria-invalid')).toBe('true')
    expect(wrapper.get(`#${name.attributes('aria-describedby')}`).text()).toBe(
      'Please fill in this field.',
    )
    expect(wrapper.findAll('[aria-invalid="true"]')).toHaveLength(3)
    expect(document.activeElement).toBe(name.element)
    wrapper.unmount()
  })

  it('explains invalid email and too short message', async () => {
    const wrapper = mount(ContactForm)
    await fill(wrapper, 'Alex', 'not-an-email', 'Hi')
    await wrapper.get('form').trigger('submit')

    expect(wrapper.get('#contact-name').attributes('aria-invalid')).toBeUndefined()
    expect(wrapper.get('#contact-email-error').text()).toBe('Please enter a valid email address.')
    expect(wrapper.get('#contact-message-error').text()).toBe(
      'Please write at least 10 characters.',
    )
  })

  it('clears an error once the field is fixed', async () => {
    const wrapper = mount(ContactForm)
    await wrapper.get('form').trigger('submit')
    await wrapper.get('#contact-name').setValue('Alex')

    expect(wrapper.get('#contact-name').attributes('aria-invalid')).toBeUndefined()
    expect(wrapper.find('#contact-name-error').exists()).toBe(false)
  })

  it('says sending is not connected while no endpoint is configured', async () => {
    vi.stubEnv('VITE_CONTACT_ENDPOINT', '')
    const fetch = vi.fn()
    vi.stubGlobal('fetch', fetch)
    const wrapper = mount(ContactForm)
    await fill(wrapper, 'Alex', 'alex@example.com', 'Hello, nice portfolio!')
    await wrapper.get('form').trigger('submit')

    expect(wrapper.find('[aria-invalid="true"]').exists()).toBe(false)
    expect(wrapper.get('[role="status"]').text()).toContain("Sending isn't connected yet")
    expect(fetch).not.toHaveBeenCalled()
  })

  describe('with an endpoint', () => {
    const endpoint = 'https://formspree.io/f/test-form'

    function stubFetch(result: Promise<Partial<Response>>) {
      vi.stubEnv('VITE_CONTACT_ENDPOINT', endpoint)
      const fetch = vi.fn(() => result)
      vi.stubGlobal('fetch', fetch)
      return fetch
    }

    it('posts the message as JSON, confirms it and clears the fields', async () => {
      const fetch = stubFetch(Promise.resolve({ ok: true }))
      const wrapper = mount(ContactForm)
      await fill(wrapper, 'Alex', 'alex@example.com', 'Hello, nice portfolio!')
      await wrapper.get('form').trigger('submit')
      await flushPromises()

      expect(fetch).toHaveBeenCalledOnce()
      const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit]
      expect(url).toBe(endpoint)
      expect(init.method).toBe('POST')
      expect(JSON.parse(String(init.body))).toEqual({
        name: 'Alex',
        email: 'alex@example.com',
        message: 'Hello, nice portfolio!',
        _gotcha: '',
      })
      expect(wrapper.get('[role="status"]').text()).toBe(
        "Thanks! Your message has been sent. I'll get back to you soon.",
      )
      expect(wrapper.get<HTMLInputElement>('#contact-name').element.value).toBe('')
    })

    it('shows that it is sending and ignores a second submit meanwhile', async () => {
      const fetch = stubFetch(new Promise(() => {}))
      const wrapper = mount(ContactForm)
      await fill(wrapper, 'Alex', 'alex@example.com', 'Hello, nice portfolio!')
      await wrapper.get('form').trigger('submit')
      await wrapper.get('form').trigger('submit')

      const button = wrapper.get('button[type="submit"]')
      expect(button.text()).toBe('Sending…')
      expect(button.attributes('aria-disabled')).toBe('true')
      expect(fetch).toHaveBeenCalledOnce()
    })

    for (const [failure, result] of [
      ['an error response', () => Promise.resolve({ ok: false })],
      ['a network error', () => Promise.reject(new TypeError('Failed to fetch'))],
    ] as const) {
      it(`explains ${failure} and keeps the typed message`, async () => {
        stubFetch(result())
        const wrapper = mount(ContactForm)
        await fill(wrapper, 'Alex', 'alex@example.com', 'Hello, nice portfolio!')
        await wrapper.get('form').trigger('submit')
        await flushPromises()

        expect(wrapper.get('[role="status"]').text()).toContain("couldn't be sent")
        expect(wrapper.get<HTMLTextAreaElement>('#contact-message').element.value).toBe(
          'Hello, nice portfolio!',
        )
        expect(wrapper.get('button[type="submit"]').attributes('aria-disabled')).toBeUndefined()
      })
    }

    it('sends nothing while the form is invalid', async () => {
      const fetch = stubFetch(Promise.resolve({ ok: true }))
      const wrapper = mount(ContactForm)
      await wrapper.get('form').trigger('submit')
      await flushPromises()

      expect(fetch).not.toHaveBeenCalled()
    })
  })

  it('shows German labels and errors after switching the language', async () => {
    const wrapper = mount(ContactForm)
    await wrapper.get('form').trigger('submit')
    setLocale('de')
    await wrapper.vm.$nextTick()

    expect(wrapper.get('label[for="contact-message"]').text()).toBe('Nachricht')
    expect(wrapper.get('#contact-name-error').text()).toBe('Bitte füllen Sie dieses Feld aus.')
  })
})
