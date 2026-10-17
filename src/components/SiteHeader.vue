<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { sections, type SectionId } from '../sections/sections'
import LanguageSwitch from './LanguageSwitch.vue'
import ThemeToggle from './ThemeToggle.vue'

defineProps<{ activeSection: SectionId | null }>()

const { t } = useI18n()

// Below lg the nav links don't fit (especially in German), so they open from a menu button.
const menuOpen = ref(false)
const menuButton = useTemplateRef('menuButton')

function closeMenu(returnFocus = false) {
  if (!menuOpen.value) return
  menuOpen.value = false
  if (returnFocus) {
    menuButton.value?.focus()
  }
}
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur"
    @keydown.esc="closeMenu(true)"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <a href="#hero" class="font-semibold tracking-tight">Ehsan Fani</a>

      <div class="flex items-center gap-1 lg:gap-8">
        <!-- One nav for all widths: a row on lg, a panel below the header bar while the menu is open. -->
        <nav
          id="site-menu"
          :aria-label="t('nav.label')"
          :class="{ hidden: !menuOpen }"
          class="absolute inset-x-0 top-16 border-b border-line bg-canvas lg:static lg:block lg:border-0 lg:bg-transparent"
        >
          <ul class="flex flex-col px-4 py-2 text-sm sm:px-6 lg:flex-row lg:gap-6 lg:p-0">
            <li v-for="id in sections" :key="id">
              <!-- The highlight is driven by aria-current, so what we see = what screen readers hear. -->
              <a
                :href="`#${id}`"
                :aria-current="id === activeSection ? 'true' : undefined"
                class="group relative py-2 text-fg-muted transition-colors duration-200 hover:text-fg aria-[current=true]:text-fg max-lg:block max-lg:py-3"
                @click="closeMenu()"
              >
                {{ t(`nav.${id}`) }}
                <!-- Indicator bar: grows from the center when the link becomes current. -->
                <span
                  aria-hidden="true"
                  class="absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-out-soft group-aria-[current=true]:scale-x-100 motion-reduce:transition-none max-lg:hidden"
                />
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-1 lg:border-l lg:border-line lg:pl-6">
          <LanguageSwitch />
          <ThemeToggle />
        </div>

        <button
          ref="menuButton"
          type="button"
          :aria-label="t('nav.menu')"
          :aria-expanded="menuOpen"
          aria-controls="site-menu"
          class="inline-flex size-9 items-center justify-center rounded-md transition-colors duration-200 hover:bg-surface-raised lg:hidden"
          @click="menuOpen = !menuOpen"
        >
          <img
            :src="menuOpen ? '/icons/x.svg' : '/icons/menu.svg'"
            alt=""
            class="size-5 dark:invert"
          />
        </button>
      </div>
    </div>
  </header>
</template>
