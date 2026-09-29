<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SiteHeader from './components/SiteHeader.vue'
import { useActiveSection } from './composables/useActiveSection'
import HeroSection from './sections/hero/HeroSection.vue'
import { sections } from './sections/sections'

const { t } = useI18n()
const activeSection = useActiveSection(sections)
</script>

<template>
  <!-- Hidden until focused with the keyboard, then jumps past the header. -->
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2"
  >
    {{ t('a11y.skipToContent') }}
  </a>

  <SiteHeader :active-section="activeSection" />

  <main id="main" class="mx-auto max-w-6xl px-6">
    <HeroSection />

    <!-- Temporary placeholders, replaced by real section components in steps 8–11. -->
    <section
      v-for="id in sections"
      :id="id"
      :key="id"
      :aria-labelledby="`${id}-title`"
      class="min-h-[80vh] border-t border-line py-24"
    >
      <h2 :id="`${id}-title`" class="text-2xl font-semibold">{{ t(`nav.${id}`) }}</h2>
    </section>
  </main>
</template>
