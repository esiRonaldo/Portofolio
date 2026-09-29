import { beforeEach } from 'vitest'
import { config } from '@vue/test-utils'
import { i18n, setLocale } from './i18n'

// Every mounted component gets i18n, like in main.ts.
config.global.plugins = [i18n]

// Each test starts in English, light theme, with empty storage.
beforeEach(() => {
  setLocale('en')
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})
