<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <!-- pb-20 on phones: keeps the text clear of the floating back-to-top button. -->
    <p class="mx-auto max-w-6xl px-4 pt-8 pb-20 text-center text-sm text-fg-muted sm:px-6 sm:pb-8">
      © {{ year }} Ehsan Fani | {{ t('footer.rights') }}
    </p>
  </footer>
</template>
