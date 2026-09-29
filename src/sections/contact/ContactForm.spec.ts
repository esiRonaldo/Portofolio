import { describe, it, expect } from 'vitest'
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
      expect(wrapper.find(`#contact-${field}`).exists()).toBe(true)
    }
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

  it('confirms a valid message', async () => {
    const wrapper = mount(ContactForm)
    await fill(wrapper, 'Alex', 'alex@example.com', 'Hello, nice portfolio!')
    await wrapper.get('form').trigger('submit')

    expect(wrapper.find('[aria-invalid="true"]').exists()).toBe(false)
    expect(wrapper.get('[role="status"]').text()).toContain("Sending isn't connected yet")
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
