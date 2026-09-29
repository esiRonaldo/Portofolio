<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <p class="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-fg-muted">
      © {{ year }} Ehsan Fani | {{ t('footer.rights') }}
    </p>
  </footer>
</template>
