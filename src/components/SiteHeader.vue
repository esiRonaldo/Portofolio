<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { sections, type SectionId } from '../sections/sections'
import LanguageSwitch from './LanguageSwitch.vue'
import ThemeToggle from './ThemeToggle.vue'

defineProps<{ activeSection: SectionId | null }>()

const { t } = useI18n()
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <a href="#hero" class="font-semibold tracking-tight">Ehsan Fani</a>

      <div class="flex items-center gap-8">
        <nav :aria-label="t('nav.label')">
          <ul class="flex gap-6 text-sm">
            <li v-for="id in sections" :key="id">
              <!-- The highlight is driven by aria-current, so what we see = what screen readers hear. -->
              <a
                :href="`#${id}`"
                :aria-current="id === activeSection ? 'true' : undefined"
                class="group relative py-2 text-fg-muted transition-colors duration-200 hover:text-fg aria-[current=true]:text-fg"
              >
                {{ t(`nav.${id}`) }}
                <!-- Indicator bar: grows from the center when the link becomes current. -->
                <span
                  aria-hidden="true"
                  class="absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-out-soft group-aria-[current=true]:scale-x-100 motion-reduce:transition-none"
                />
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-1 border-l border-line pl-6">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>
