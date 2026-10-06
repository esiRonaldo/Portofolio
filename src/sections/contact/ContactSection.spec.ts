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

  it('introduces the form with a short text', () => {
    expect(mount(ContactSection).text()).toContain("Let's connect.")
  })

  it('contains the contact form', () => {
    expect(mount(ContactSection).find('form').exists()).toBe(true)
  })
})
