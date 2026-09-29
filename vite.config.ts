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
    setupFiles: ['src/test-setup.ts'],
    // Node 25+ has its own (empty) localStorage that hides jsdom's working one. Turn it off.
    execArgv: ['--no-experimental-webstorage'],
    // Undo vi.spyOn() mocks after each test, so one test's fake can't leak into the next.
    restoreMocks: true,
  },
})
