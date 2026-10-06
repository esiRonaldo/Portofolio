<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { locales, setLocale } from '../i18n'

const { t, locale } = useI18n()

// Language names in their own language, so each is recognisable whatever the current language.
const names = { en: 'English', de: 'Deutsch' } as const
</script>

<template>
  <!-- EN | DE: the current language is highlighted and aria-pressed. `lang` lets screen readers
       pronounce each name right. -->
  <div
    role="group"
    :aria-label="t('language.label')"
    class="flex items-center gap-1 text-sm font-medium"
  >
    <img src="/icons/languages.svg" alt="" class="mr-1 size-4 opacity-70 dark:invert" />
    <template v-for="(code, index) in locales" :key="code">
      <span v-if="index > 0" aria-hidden="true" class="text-line-strong">|</span>
      <button
        type="button"
        :lang="code"
        :aria-label="names[code]"
        :aria-pressed="locale === code"
        class="inline-flex h-9 items-center rounded-md px-2 transition-colors duration-200"
        :class="
          locale === code ? 'text-accent' : 'text-fg-muted hover:bg-surface-raised hover:text-fg'
        "
        @click="setLocale(code)"
      >
        {{ code.toUpperCase() }}
      </button>
    </template>
  </div>
</template>
