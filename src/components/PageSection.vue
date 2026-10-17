<script setup lang="ts">
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import type { SectionId } from '../sections/sections'

// Shared layout for the page sections: heading on top, content (slot) across the full width.
// The heading is the section's nav label, so the two can't drift apart, unless a section needs
// a longer heading than fits in the nav (`title`).
defineProps<{ id: SectionId; title?: string }>()

const { t } = useI18n()

// Reveal once: when the section first comes on screen, data-revealed starts the entrance animation
// of every [data-reveal] element inside (CSS in main.css).
const section = useTemplateRef('section')
const revealed = ref(false)
let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return
      revealed.value = true
      observer?.disconnect()
    },
    { threshold: 0.15 },
  )
  if (section.value) observer.observe(section.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section
    :id="id"
    ref="section"
    :aria-labelledby="`${id}-title`"
    :data-revealed="revealed || undefined"
    class="py-20"
  >
    <h2 :id="`${id}-title`" data-reveal class="text-heading">
      {{ title ?? t(`nav.${id}`) }}
    </h2>
    <div class="mt-10">
      <slot />
    </div>
  </section>
</template>
