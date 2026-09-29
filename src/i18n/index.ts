import { createI18n } from 'vue-i18n'
import { readStorage, writeStorage } from '../utils/storage'
import en from './en'
import de from './de'

export const locales = ['en', 'de'] as const
export type Locale = (typeof locales)[number]

/** A value that exists in every language, e.g. `{ en: 'Developer', de: 'Entwickler' }`. */
export type Localized<T = string> = Record<Locale, T>

const STORAGE_KEY = 'locale'

function isLocale(value: string | null): value is Locale {
  return value !== null && (locales as readonly string[]).includes(value)
}

const saved = readStorage(STORAGE_KEY)
const initialLocale: Locale = isLocale(saved) ? saved : 'en'

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages: { en, de },
})

document.documentElement.lang = initialLocale

export function setLocale(locale: Locale): void {
  i18n.global.locale.value = locale
  document.documentElement.lang = locale
  writeStorage(STORAGE_KEY, locale)
}
