import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import { socialLinks } from '../../profile'
import ContactSection from './ContactSection.vue'

describe('ContactSection', () => {
  it('links every profile and shows no email address', () => {
    const wrapper = mount(ContactSection)
    const links = wrapper.get('ul[aria-label="Contact channels"]').findAll('a')

    expect(links.map((a) => [a.get('img').attributes('alt'), a.attributes('href')])).toEqual(
      socialLinks.map((link) => [link.name, link.href]),
    )
    expect(wrapper.find('a[href^="mailto:"]').exists()).toBe(false)
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

    expect(wrapper.text()).toContain('Am schnellsten erreichen Sie mich über LinkedIn oder XING.')
  })
})
