import { describe, it, expect } from 'vitest'
import { i18n, setLocale } from '.'

describe('setLocale', () => {
  it('switches the texts, the page language and remembers the choice', () => {
    setLocale('de')

    expect(i18n.global.t('a11y.skipToContent')).toBe('Zum Inhalt springen')
    expect(document.documentElement.lang).toBe('de')
    expect(localStorage.getItem('locale')).toBe('de')
  })
})
