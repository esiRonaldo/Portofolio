<script setup lang="ts">
import { ref, useId } from 'vue'
import { useI18n } from 'vue-i18n'
import { localize } from '../../i18n'
import type { ExperienceEntry } from './experience'

// One timeline entry. Below lg: [node | dates + content]. On lg: [dates | node | content].
defineProps<{ entry: ExperienceEntry }>()

const { t } = useI18n()

const isExpanded = ref(false)
// Unique per entry, for the aria links between title, details and button.
const idPrefix = useId()

/** '2022-04' → '04/2022' (same format as the CV, in both languages). */
function monthYear(value: string): string {
  const [year, month] = value.split('-')
  return `${month}/${year}`
}
</script>

<template>
  <li
    data-reveal
    class="group relative grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-5 lg:grid-cols-[10rem_3.5rem_minmax(0,1fr)] lg:gap-x-8"
  >
    <!-- Connector down to the next node (none after the last entry). Its x is the node's center: 1.75rem,
         on lg 10rem + 2rem gap + 1.75rem. -->
    <span
      aria-hidden="true"
      class="absolute top-14 -bottom-10 left-7 w-px bg-line-strong/40 group-last:hidden lg:left-[13.75rem]"
    />

    <div
      class="relative row-span-2 flex size-14 items-center justify-center self-start rounded-full border border-accent/40 bg-surface ring-4 ring-canvas lg:col-start-2 lg:row-span-1 lg:row-start-1"
    >
      <img :src="entry.icon" alt="" class="size-6 dark:invert" />
    </div>

    <div
      class="col-start-2 flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 lg:col-start-1 lg:row-start-1 lg:flex-col lg:items-end lg:pt-1.5"
    >
      <p class="text-sm text-fg-muted tabular-nums">
        <time :datetime="entry.start">{{ monthYear(entry.start) }}</time>
        –
        <time :datetime="entry.end">{{ monthYear(entry.end) }}</time>
      </p>
      <span
        v-if="entry.isInProgress"
        class="rounded-full bg-accent-subtle px-2.5 py-0.5 text-sm font-medium text-on-accent-subtle"
      >
        {{ t('experience.inProgress') }}
      </span>
    </div>

    <div class="col-start-2 mt-2 lg:col-start-3 lg:row-start-1 lg:mt-0 lg:pt-1">
      <p
        v-if="entry.kind === 'course'"
        class="mb-1 text-xs font-semibold tracking-wider text-fg-muted uppercase"
      >
        {{ t('experience.category') }}
      </p>
      <h3 :id="`${idPrefix}-title`" class="text-title">{{ localize(entry.role) }}</h3>
      <p class="text-sm font-medium text-accent">{{ entry.organization }}</p>
      <p
        class="mt-3 max-w-[70ch] text-sm leading-relaxed text-fg-muted"
        :class="{ 'line-clamp-3': entry.details && !isExpanded }"
      >
        {{ localize(entry.summary) }}
      </p>

      <template v-if="entry.focus">
        <p :id="`${idPrefix}-focus`" class="mt-4 text-sm font-medium">
          {{ t('experience.focusLabel') }}
        </p>
        <ul :aria-labelledby="`${idPrefix}-focus`" class="mt-2 flex flex-wrap gap-2 text-sm">
          <li
            v-for="topic in localize(entry.focus)"
            :key="topic"
            class="rounded-md border border-line bg-surface px-2.5 py-0.5 text-fg-muted"
          >
            {{ topic }}
          </li>
        </ul>
      </template>

      <template v-if="entry.details">
        <!-- Height animates via grid rows 0fr → 1fr: no fixed heights, so longer German text never clips.
             Collapsed details are inert: out of the tab order and the accessibility tree.
             `|| undefined` removes the attribute when open; a rendered inert="false" would still be inert. -->
        <div
          :id="`${idPrefix}-details`"
          class="grid ease-out-soft motion-safe:transition-[grid-template-rows] motion-safe:duration-200"
          :class="isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          :inert="!isExpanded || undefined"
        >
          <div class="overflow-hidden">
            <ul
              class="mt-3 max-w-[70ch] list-disc space-y-2 pl-5 text-sm leading-relaxed text-fg-muted marker:text-accent"
            >
              <li v-for="detail in localize(entry.details)" :key="detail">{{ detail }}</li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          :aria-expanded="isExpanded"
          :aria-controls="`${idPrefix}-details`"
          :aria-describedby="`${idPrefix}-title`"
          class="mt-3 inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-accent transition-colors duration-150 ease-out-soft hover:text-accent-hover"
          @click="isExpanded = !isExpanded"
        >
          {{ isExpanded ? t('experience.showLess') : t('experience.showMore') }}
          <!-- Inline so the chevron takes the button's text color (Lucide chevron-down, ISC). -->
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4 ease-out-soft motion-safe:transition-transform motion-safe:duration-200"
            :class="{ 'rotate-180': isExpanded }"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </template>
    </div>
  </li>
</template>
