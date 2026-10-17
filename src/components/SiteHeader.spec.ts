import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../i18n'
import SiteHeader from './SiteHeader.vue'

function currentLinks(wrapper: ReturnType<typeof mount>) {
  return wrapper
    .findAll('nav a')
    .filter((link) => link.attributes('aria-current') === 'true')
    .map((link) => link.text())
}

describe('SiteHeader', () => {
  it('links to every section with translated labels', () => {
    const wrapper = mount(SiteHeader, { props: { activeSection: null } })
    const links = wrapper.findAll('nav a')

    expect(links.map((link) => link.text())).toEqual([
      'About',
      'Experience',
      'Learning',
      'Projects',
      'Skills',
      'Contact',
    ])
    expect(links.map((link) => link.attributes('href'))).toEqual([
      '#about',
      '#experience',
      '#learning',
      '#projects',
      '#skills',
      '#contact',
    ])
  })

  describe('menu button (below lg)', () => {
    it('opens and closes the nav it controls', async () => {
      const wrapper = mount(SiteHeader, { props: { activeSection: null } })
      const button = wrapper.get('button[aria-controls="site-menu"]')

      expect(wrapper.find('nav#site-menu').exists()).toBe(true)
      expect(button.attributes('aria-label')).toBe('Menu')
      expect(button.attributes('aria-expanded')).toBe('false')

      await button.trigger('click')
      expect(button.attributes('aria-expanded')).toBe('true')

      await button.trigger('click')
      expect(button.attributes('aria-expanded')).toBe('false')
    })

    it('closes when a link is chosen', async () => {
      const wrapper = mount(SiteHeader, { props: { activeSection: null } })
      const button = wrapper.get('button[aria-controls="site-menu"]')

      await button.trigger('click')
      await wrapper.get('nav a[href="#projects"]').trigger('click')
      expect(button.attributes('aria-expanded')).toBe('false')
    })

    it('closes on Escape and puts focus back on the button', async () => {
      const wrapper = mount(SiteHeader, {
        props: { activeSection: null },
        attachTo: document.body,
      })
      const button = wrapper.get('button[aria-controls="site-menu"]')

      await button.trigger('click')
      const link = wrapper.get<HTMLAnchorElement>('nav a[href="#about"]')
      link.element.focus()
      await link.trigger('keydown', { key: 'Escape' })

      expect(button.attributes('aria-expanded')).toBe('false')
      expect(document.activeElement).toBe(button.element)
      wrapper.unmount()
    })

    it('has a German label after switching the language', async () => {
      const wrapper = mount(SiteHeader, { props: { activeSection: null } })
      setLocale('de')
      await wrapper.vm.$nextTick()

      expect(wrapper.get('button[aria-controls="site-menu"]').attributes('aria-label')).toBe('Menü')
    })
  })

  it('marks only the active section as current', async () => {
    const wrapper = mount(SiteHeader, { props: { activeSection: null } })
    expect(currentLinks(wrapper)).toEqual([])

    await wrapper.setProps({ activeSection: 'experience' })
    expect(currentLinks(wrapper)).toEqual(['Experience'])
  })
})
