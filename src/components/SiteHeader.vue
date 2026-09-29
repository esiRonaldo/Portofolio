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
                class="text-fg-muted underline-offset-8 hover:text-fg aria-[current=true]:text-fg aria-[current=true]:underline aria-[current=true]:decoration-accent aria-[current=true]:decoration-2"
              >
                {{ t(`nav.${id}`) }}
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
