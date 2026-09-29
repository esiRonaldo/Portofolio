import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import { socialLinks } from '../../profile'
import HeroSection from './HeroSection.vue'

describe('HeroSection', () => {
  it('introduces the name, role and summary', () => {
    const wrapper = mount(HeroSection)

    expect(wrapper.get('h1').text()).toBe('Ehsan Fani')
    expect(wrapper.text()).toContain('Software Developer (Frontend/Fullstack)')
    expect(wrapper.text()).toContain('Open to new roles')
  })

  it('links the calls to action to the experience and contact sections', () => {
    const wrapper = mount(HeroSection)

    expect(wrapper.get('a[href="#experience"]').text()).toBe('View experience')
    expect(wrapper.get('a[href="#contact"]').text()).toContain('Contact')
  })

  it('links to every public profile', () => {
    const links = mount(HeroSection).findAll('ul a')

    expect(links.map((link) => [link.text(), link.attributes('href')])).toEqual(
      socialLinks.map((link) => [link.name, link.href]),
    )
  })

  it('pairs each fact label with its value', () => {
    const wrapper = mount(HeroSection)
    const facts = wrapper
      .findAll('dl > div')
      .map((row) => [row.get('dt').text(), row.get('dd').text()])

    expect(facts).toContainEqual(['Experience', '5+ years'])
    expect(facts).toContainEqual(['Location', 'Cologne, Germany'])
  })

  it('shows German text after switching the language', async () => {
    const wrapper = mount(HeroSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Softwareentwickler (Frontend/Fullstack)')
    expect(wrapper.get('a[href="#experience"]').text()).toBe('Erfahrung ansehen')
  })
})
