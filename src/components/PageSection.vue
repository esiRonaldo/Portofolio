<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { SectionId } from '../sections/sections'

// Shared layout for the page sections: heading in the left 4 columns, content (slot) in the right 8.
// `wide`: heading on top, content across the full width (e.g. the Experience timeline).
// The heading is the section's nav label, so the two can't drift apart.
defineProps<{ id: SectionId; wide?: boolean }>()

const { t } = useI18n()
</script>

<template>
  <section
    :id="id"
    :aria-labelledby="`${id}-title`"
    class="border-t border-line py-24"
    :class="{ 'grid grid-cols-12 gap-12': !wide }"
  >
    <h2
      :id="`${id}-title`"
      class="text-3xl font-semibold tracking-tight"
      :class="{ 'col-span-4': !wide }"
    >
      {{ t(`nav.${id}`) }}
    </h2>
    <div :class="wide ? 'mt-12' : 'col-span-8'">
      <slot />
    </div>
  </section>
</template>
