<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <p class="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-fg-muted">
      © {{ year }} Ehsan Fani
    </p>
  </footer>
</template>
