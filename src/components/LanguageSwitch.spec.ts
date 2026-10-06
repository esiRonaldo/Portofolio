import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../i18n'
import LanguageSwitch from './LanguageSwitch.vue'

describe('LanguageSwitch', () => {
  it('shows both languages, the current one pressed', () => {
    setLocale('en')
    const buttons = mount(LanguageSwitch).findAll('button')

    expect(
      buttons.map((button) => [
        button.text(),
        button.attributes('aria-label'),
        button.attributes('lang'),
        button.attributes('aria-pressed'),
      ]),
    ).toEqual([
      ['EN', 'English', 'en', 'true'],
      ['DE', 'Deutsch', 'de', 'false'],
    ])
  })

  it('switches the language on click', async () => {
    setLocale('en')
    const wrapper = mount(LanguageSwitch)
    const [en, de] = wrapper.findAll('button')

    await de?.trigger('click')

    expect(document.documentElement.lang).toBe('de')
    expect(de?.attributes('aria-pressed')).toBe('true')
    expect(en?.attributes('aria-pressed')).toBe('false')
    expect(wrapper.get('[role="group"]').attributes('aria-label')).toBe('Sprache')
  })
})
