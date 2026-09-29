import { describe, it, expect } from 'vitest'
import { useTheme } from './useTheme'

describe('useTheme', () => {
  it('toggles the dark class on <html> and remembers the choice', () => {
    const { theme, toggle } = useTheme()
    const html = document.documentElement

    toggle()
    expect(theme.value).toBe('dark')
    expect(html.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')

    toggle()
    expect(theme.value).toBe('light')
    expect(html.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('shares one theme between all callers', () => {
    const first = useTheme()
    const second = useTheme()

    first.toggle()
    expect(second.theme.value).toBe(first.theme.value)
    first.toggle()
  })
})
