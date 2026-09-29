import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import { email, socialLinks } from '../../profile'
import ContactSection from './ContactSection.vue'

describe('ContactSection', () => {
  it('lists email and profile links as contact channels', () => {
    const channels = mount(ContactSection).get('ul[aria-label="Contact channels"]')
    const links = channels
      .findAll('a')
      .map((a) => [
        a.find('img').exists() ? a.get('img').attributes('alt') : a.text(),
        a.attributes('href'),
      ])

    expect(links).toEqual([
      [email, `mailto:${email}`],
      ...socialLinks.map((link) => [link.name, link.href]),
    ])
  })

  it('contains the contact form', () => {
    expect(mount(ContactSection).get('form').attributes('aria-labelledby')).toBe(
      'contact-form-title',
    )
  })

  it('shows the German intro after switching the language', async () => {
    const wrapper = mount(ContactSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Am schnellsten erreichen Sie mich per E-Mail.')
  })
})
