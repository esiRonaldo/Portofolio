<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <!-- Hidden until focused with the keyboard, then jumps past the header. -->
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2"
  >
    {{ t('a11y.skipToContent') }}
  </a>

  <!-- <header> (step 6) and <footer> come with their content, not as empty landmarks. -->
  <main id="main" class="mx-auto max-w-6xl px-6 py-24">
    <h1 class="text-4xl font-semibold tracking-tight">Ehsan Fani</h1>
    <p class="mt-4 text-fg-muted">{{ t('app.placeholder') }}</p>
  </main>
</template>
