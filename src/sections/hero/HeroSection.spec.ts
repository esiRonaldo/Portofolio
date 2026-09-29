import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
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

  it('shows German text after switching the language', async () => {
    const wrapper = mount(HeroSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Softwareentwickler (Frontend/Fullstack)')
    expect(wrapper.get('a[href="#experience"]').text()).toBe('Erfahrung ansehen')
  })
})
