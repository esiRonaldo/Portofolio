<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { SectionId } from '../sections/sections'

// Shared layout for the page sections: heading in the left 4 columns, content (slot) in the right 8.
// The heading is the section's nav label, so the two can't drift apart.
defineProps<{ id: SectionId }>()

const { t } = useI18n()
</script>

<template>
  <section
    :id="id"
    :aria-labelledby="`${id}-title`"
    class="grid grid-cols-12 gap-12 border-t border-line py-24"
  >
    <h2 :id="`${id}-title`" class="col-span-4 text-3xl font-semibold tracking-tight">
      {{ t(`nav.${id}`) }}
    </h2>
    <div class="col-span-8">
      <slot />
    </div>
  </section>
</template>
