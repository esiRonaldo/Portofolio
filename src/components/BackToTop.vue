<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

// Floating link back to the hero, shown only once the hero has left the viewport.
const { t } = useI18n()
const visible = ref(false)
let observer: IntersectionObserver | undefined

onMounted(() => {
  const hero = document.getElementById('hero')
  if (!hero) return
  observer = new IntersectionObserver(([entry]) => {
    if (entry) visible.value = !entry.isIntersecting
  })
  observer.observe(hero)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <!-- Removed from the DOM while hidden, so it's never focusable when it can't be seen. -->
  <Transition
    enter-from-class="opacity-0 motion-safe:translate-y-2"
    leave-to-class="opacity-0 motion-safe:translate-y-2"
    enter-active-class="transition duration-300 ease-out-soft"
    leave-active-class="transition duration-200 ease-out-soft"
  >
    <a
      v-if="visible"
      href="#hero"
      :aria-label="t('a11y.backToTop')"
      :title="t('a11y.backToTop')"
      class="group fixed right-6 bottom-6 z-30 flex size-11 items-center justify-center rounded-full border border-line bg-surface-raised shadow-sm transition duration-200 ease-out-soft hover:border-accent motion-safe:hover:-translate-y-0.5"
    >
      <img src="/icons/arrow-up.svg" alt="" class="size-5 dark:invert" />
    </a>
  </Transition>
</template>
