import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
  globalIgnores(['dist/**', 'coverage/**']),

  // Vue template rules that catch real bugs (no formatting rules — that's Prettier's job).
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
)
