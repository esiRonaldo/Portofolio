import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { socialLinks } from '../../profile'
import ContactSection from './ContactSection.vue'

describe('ContactSection', () => {
  it('links every profile with a named icon and shows no email address', () => {
    const wrapper = mount(ContactSection)
    const links = wrapper.get('form').findAll('li a')

    expect(links.map((a) => [a.get('img').attributes('alt'), a.attributes('href')])).toEqual(
      socialLinks.map((link) => [link.name, link.href]),
    )
    expect(wrapper.find('a[href^="mailto:"]').exists()).toBe(false)
  })

  it('has a link back to the top of the page', () => {
    const link = mount(ContactSection).get('a[href="#hero"]')
    expect(link.get('img').attributes('alt')).toBe('Back to top')
  })

  it('contains the contact form', () => {
    expect(mount(ContactSection).find('form').exists()).toBe(true)
  })
})
