<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { SectionId } from '../sections/sections'

// Shared layout for the page sections: heading on top, content (slot) across the full width.
// The heading is the section's nav label, so the two can't drift apart.
defineProps<{ id: SectionId }>()

const { t } = useI18n()
</script>

<template>
  <section :id="id" :aria-labelledby="`${id}-title`" class="border-t border-line py-24">
    <h2 :id="`${id}-title`" class="text-3xl font-semibold tracking-tight">
      {{ t(`nav.${id}`) }}
    </h2>
    <div class="mt-12">
      <slot />
    </div>
  </section>
</template>
