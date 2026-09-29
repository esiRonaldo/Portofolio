import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { socialLinks } from '../../profile'
import ContactSection from './ContactSection.vue'

describe('ContactSection', () => {
  it('links every profile by name and shows no email address', () => {
    const wrapper = mount(ContactSection)
    const links = wrapper.findAll('li a')

    expect(wrapper.findAll('h3').map((h) => h.text())).toContain('Find me on')
    expect(links.map((a) => [a.text(), a.attributes('href')])).toEqual(
      socialLinks.map((link) => [link.name, link.href]),
    )
    expect(wrapper.find('a[href^="mailto:"]').exists()).toBe(false)
  })

  it('has a link back to the top of the page', () => {
    const link = mount(ContactSection).get('a[href="#hero"]')
    expect(link.get('img').attributes('alt')).toBe('Back to top')
  })

  it('contains the contact form', () => {
    expect(mount(ContactSection).get('form').attributes('aria-labelledby')).toBe(
      'contact-form-title',
    )
  })
})
