import { beforeEach, vi } from 'vitest'
import { config } from '@vue/test-utils'
import { i18n, setLocale } from './i18n'

// Every mounted component gets i18n, like in main.ts.
config.global.plugins = [i18n]

// jsdom has no IntersectionObserver; this stand-in does nothing. Tests can stub their own.
class NoopIntersectionObserver {
  observe() {}
  disconnect() {}
}

// Each test starts in English, light theme, with empty storage.
beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', NoopIntersectionObserver)
  setLocale('en')
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})
