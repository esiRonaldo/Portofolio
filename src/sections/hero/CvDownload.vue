<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// The CVs in public/cv/ are not in Git (gitignored, uploaded with the website). Language names in their own language.
const cvFiles = [
  { lang: 'en', name: 'English', file: 'Ehsan-Fani-CV-EN.pdf' },
  { lang: 'de', name: 'Deutsch', file: 'Ehsan-Fani-Lebenslauf-DE.pdf' },
] as const

const open = ref(false)
const root = useTemplateRef('root')
const toggle = useTemplateRef('toggle')

function close(returnFocus = false) {
  open.value = false
  if (returnFocus) toggle.value?.focus()
}

// Close when focus moves outside (Tab) or on a click outside. The click check is needed too:
// Safari doesn't focus buttons on click, so there may be no focusout.
function onFocusOut(event: FocusEvent) {
  if (!root.value?.contains(event.relatedTarget as Node | null)) close()
}

function onPointerDown(event: PointerEvent) {
  if (open.value && !root.value?.contains(event.target as Node)) close()
}

onMounted(() => document.addEventListener('pointerdown', onPointerDown))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onPointerDown))
</script>

<template>
  <div ref="root" class="relative" @focusout="onFocusOut" @keydown.esc="close(true)">
    <button
      ref="toggle"
      type="button"
      :aria-expanded="open"
      aria-controls="cv-options"
      class="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-on-accent transition duration-200 ease-out-soft hover:bg-accent-hover motion-safe:hover:-translate-y-0.5"
      @click="open = !open"
    >
      <img src="/icons/download.svg" alt="" class="size-4 invert dark:invert-0" />
      {{ t('hero.cv') }}
      <img
        src="/icons/chevron-down.svg"
        alt=""
        class="size-4 invert transition-transform duration-200 ease-out-soft motion-reduce:transition-none dark:invert-0"
        :class="{ 'rotate-180': open }"
      />
    </button>

    <Transition
      enter-from-class="motion-safe:-translate-y-1 motion-safe:opacity-0"
      leave-to-class="motion-safe:-translate-y-1 motion-safe:opacity-0"
      enter-active-class="motion-safe:transition motion-safe:duration-150 motion-safe:ease-out-soft"
      leave-active-class="motion-safe:transition motion-safe:duration-100 motion-safe:ease-out-soft"
    >
      <ul
        v-show="open"
        id="cv-options"
        class="absolute top-full left-0 z-10 mt-2 min-w-full rounded-lg border border-line bg-surface-raised p-1 shadow-lg"
      >
        <li v-for="cv in cvFiles" :key="cv.lang">
          <a
            :href="`/cv/${cv.file}`"
            :download="cv.file"
            :hreflang="cv.lang"
            :lang="cv.lang"
            type="application/pdf"
            class="flex items-center justify-between gap-6 rounded-md px-3 py-2 font-medium whitespace-nowrap transition-colors duration-200 hover:bg-accent-subtle"
            @click="close()"
          >
            {{ cv.name }}
            <span class="text-sm text-fg-muted">PDF</span>
          </a>
        </li>
      </ul>
    </Transition>
  </div>
</template>
