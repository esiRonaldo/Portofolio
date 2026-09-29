import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LanguageSwitch from './LanguageSwitch.vue'

describe('LanguageSwitch', () => {
  it('offers the other language and switches to it', async () => {
    const button = mount(LanguageSwitch).get('button')

    expect(button.text()).toBe('Deutsch')
    expect(button.attributes('lang')).toBe('de')

    await button.trigger('click')
    expect(document.documentElement.lang).toBe('de')
    expect(button.text()).toBe('English')
    expect(button.attributes('lang')).toBe('en')
  })
})
