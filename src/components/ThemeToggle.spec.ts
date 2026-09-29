import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ThemeToggle from './ThemeToggle.vue'

describe('ThemeToggle', () => {
  it('turns the dark theme on and off', async () => {
    const button = mount(ThemeToggle).get('button')
    const html = document.documentElement

    expect(button.attributes('aria-label')).toBe('Dark theme')
    expect(button.attributes('aria-pressed')).toBe('false')

    await button.trigger('click')
    expect(button.attributes('aria-pressed')).toBe('true')
    expect(html.classList.contains('dark')).toBe(true)

    await button.trigger('click')
    expect(button.attributes('aria-pressed')).toBe('false')
    expect(html.classList.contains('dark')).toBe(false)
  })
})
