<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale, type Locale } from '../i18n'

const { t, locale } = useI18n()
const target = computed<Locale>(() => (locale.value === 'de' ? 'en' : 'de'))
</script>

<template>
  <!-- Shows the other language in that language; `lang` lets screen readers pronounce it right. -->
  <button
    type="button"
    :lang="target"
    class="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-fg-muted hover:bg-surface hover:text-fg"
    @click="setLocale(target)"
  >
    <img src="/icons/globe.svg" alt="" class="size-4 dark:invert" />
    {{ t('language.switch') }}
  </button>
</template>
