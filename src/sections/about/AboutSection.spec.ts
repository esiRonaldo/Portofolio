import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import AboutSection from './AboutSection.vue'

describe('AboutSection', () => {
  it('is a labelled section with an About heading', () => {
    const wrapper = mount(AboutSection)
    const section = wrapper.get('section#about')

    expect(section.attributes('aria-labelledby')).toBe('about-title')
    expect(wrapper.get('h2#about-title').text()).toBe('About')
  })

  it('lists both degrees under Education and the spoken languages', () => {
    const wrapper = mount(AboutSection)
    const education = wrapper.findAll('dl > div')[0]
    const languages = wrapper.findAll('dl > div')[1]

    expect(education?.get('dt').text()).toBe('Education')
    expect(education?.findAll('dd')).toHaveLength(2)
    expect(languages?.get('dd').text()).toBe('English (fluent), German (B2), Persian (native)')
  })

  it('shows German text after switching the language', async () => {
    const wrapper = mount(AboutSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    expect(wrapper.get('h2').text()).toBe('Über mich')
    expect(wrapper.text()).toContain('Softwareentwickler in Köln')
  })
})
