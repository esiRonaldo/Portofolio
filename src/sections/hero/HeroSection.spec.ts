import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import HeroSection from './HeroSection.vue'

describe('HeroSection', () => {
  it('introduces the name, role and summary', () => {
    const wrapper = mount(HeroSection)

    expect(wrapper.get('h1').text()).toBe('Ehsan Fani')
    expect(wrapper.text()).toContain('Frontend Software Engineer | Full-Stack Experience')
    expect(wrapper.text()).toContain('Open to new roles')
  })

  it('offers the CV download next to the contact button', () => {
    expect(mount(HeroSection).get('button[aria-expanded]').text()).toBe('Download CV')
  })

  it('links the contact button to the contact section', () => {
    expect(mount(HeroSection).get('a[href="#contact"]').text()).toBe('Contact')
  })

  it('lists the core stack once for screen readers, the slider copy is hidden', () => {
    // The core-stack lists: the labelled one and its hidden copy (the CV options are a list too).
    const lists = mount(HeroSection)
      .findAll('ul')
      .filter(
        (ul) => ul.attributes('aria-labelledby') === 'hero-core' || ul.attributes('aria-hidden'),
      )
    const [list, copy] = lists

    expect(lists).toHaveLength(2)
    expect(list?.findAll('li').map((item) => item.text())).toEqual([
      'Vue.js',
      'Angular',
      'JavaScript/TypeScript',
      'Node.js',
    ])
    expect(copy?.attributes('aria-hidden')).toBe('true')
  })

  it('shows German text after switching the language', async () => {
    const wrapper = mount(HeroSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Frontend Software Engineer | Fullstack-Erfahrung')
    expect(wrapper.get('button[aria-expanded]').text()).toBe('Lebenslauf')
    expect(wrapper.get('a[href="#contact"]').text()).toBe('Kontakt')
  })
})
