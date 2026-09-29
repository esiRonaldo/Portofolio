<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { SectionId } from './sections'

// Temporary: stands in for sections that aren't built yet. Delete once all sections exist.
defineProps<{ id: SectionId }>()

const { t } = useI18n()
</script>

<template>
  <section
    :id="id"
    :aria-labelledby="`${id}-title`"
    class="min-h-[80vh] border-t border-line py-24"
  >
    <h2 :id="`${id}-title`" class="text-3xl font-semibold tracking-tight">
      {{ t(`nav.${id}`) }}
    </h2>
  </section>
</template>
