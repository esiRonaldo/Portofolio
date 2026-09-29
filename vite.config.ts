import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// Vitest's defineConfig = Vite's defineConfig + the `test` option.
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  define: {
    // vue-i18n: we only use the Composition API, so drop the legacy API code from the bundle.
    __VUE_I18N_LEGACY_API__: false,
  },
  test: {
    environment: 'jsdom',
  },
})
