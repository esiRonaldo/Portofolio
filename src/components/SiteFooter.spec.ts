import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../i18n'
import { email, socialLinks } from '../profile'
import SiteFooter from './SiteFooter.vue'

describe('SiteFooter', () => {
  it('shows the copyright with the current year', () => {
    expect(mount(SiteFooter).get('footer').text()).toContain(
      `© ${new Date().getFullYear()} Ehsan Fani`,
    )
  })

  it('links to email and every profile', () => {
    const list = mount(SiteFooter).get('ul[aria-label="Contact & profiles"]')
    const hrefs = list.findAll('a').map((a) => a.attributes('href'))

    expect(hrefs).toEqual([`mailto:${email}`, ...socialLinks.map((link) => link.href)])
  })

  it('has a link back to the top of the page', () => {
    const link = mount(SiteFooter).get('a[href="#hero"]')
    expect(link.text()).toContain('Back to top')
  })

  it('shows German labels after switching the language', async () => {
    const wrapper = mount(SiteFooter)
    setLocale('de')
    await wrapper.vm.$nextTick()

    expect(wrapper.get('a[href="#hero"]').text()).toContain('Nach oben')
    expect(wrapper.find('ul[aria-label="Kontakt & Profile"]').exists()).toBe(true)
  })
})
