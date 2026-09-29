import { readonly, ref } from 'vue'
import { writeStorage } from '../utils/storage'

export type Theme = 'light' | 'dark'

// Module-level state: every component that calls useTheme() shares this one ref.
// The inline script in index.html has already set the class, so we read it from there.
const theme = ref<Theme>(document.documentElement.classList.contains('dark') ? 'dark' : 'light')

function setTheme(value: Theme): void {
  theme.value = value
  document.documentElement.classList.toggle('dark', value === 'dark')
  writeStorage('theme', value)
}

export function useTheme() {
  return {
    theme: readonly(theme),
    toggle: () => setTheme(theme.value === 'dark' ? 'light' : 'dark'),
  }
}
