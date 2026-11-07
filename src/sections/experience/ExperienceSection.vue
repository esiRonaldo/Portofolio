<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'
import { localize } from '../../i18n'
import { jobs } from './experience'

const { t } = useI18n()

/** '2022-04' → '04/2022' (same format as the CV, in both languages). */
function monthYear(value: string): string {
  const [year, month] = value.split('-')
  return `${month}/${year}`
}

// Indexes of the entries whose details are open; each entry toggles on its own.
const expanded = reactive(new Set<number>())

function toggle(index: number): void {
  if (expanded.has(index)) {
    expanded.delete(index)
  } else {
    expanded.add(index)
  }
}
</script>

<template>
  <PageSection id="experience">
    <!-- Ordered list: newest first, so the order itself carries meaning.
         Below lg: [node | dates + content]. On lg: [dates | node | content]. -->
    <ol class="grid gap-10">
      <li
        v-for="(job, index) in jobs"
        :key="job.company"
        data-reveal
        :style="{ '--i': index + 1 }"
        class="relative grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-5 lg:grid-cols-[10rem_3.5rem_minmax(0,1fr)] lg:gap-x-8"
      >
        <!-- Connector down to the next node. Its x is the node's center: 1.75rem, on lg 10rem + 2rem gap + 1.75rem. -->
        <span
          v-if="index < jobs.length - 1"
          aria-hidden="true"
          class="absolute top-14 -bottom-10 left-7 w-px bg-line-strong/40 lg:left-[13.75rem]"
        />

        <div
          class="relative row-span-2 flex size-14 items-center justify-center self-start rounded-full border border-accent/40 bg-surface ring-4 ring-canvas lg:col-start-2 lg:row-span-1 lg:row-start-1"
        >
          <img :src="job.icon" alt="" class="size-6 dark:invert" />
        </div>

        <div
          class="col-start-2 flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 lg:col-start-1 lg:row-start-1 lg:flex-col lg:items-end lg:pt-1.5"
        >
          <p class="text-sm text-fg-muted tabular-nums">
            <time :datetime="job.start">{{ monthYear(job.start) }}</time>
            –
            <time :datetime="job.end">{{ monthYear(job.end) }}</time>
          </p>
          <span
            v-if="job.isInProgress"
            class="rounded-full bg-accent-subtle px-2.5 py-0.5 text-sm font-medium text-on-accent-subtle"
          >
            {{ t('experience.inProgress') }}
          </span>
        </div>

        <div class="col-start-2 mt-2 lg:col-start-3 lg:row-start-1 lg:mt-0 lg:pt-1">
          <p
            v-if="job.kind === 'course'"
            class="mb-1 text-xs font-semibold tracking-wider text-fg-muted uppercase"
          >
            {{ t('experience.category') }}
          </p>
          <h3 :id="`experience-${index}-title`" class="text-title">{{ localize(job.role) }}</h3>
          <p class="text-sm font-medium text-accent">{{ job.company }}</p>
          <p
            class="mt-3 max-w-[70ch] text-sm leading-relaxed text-fg-muted"
            :class="{ 'line-clamp-3': job.details && !expanded.has(index) }"
          >
            {{ localize(job.summary) }}
          </p>

          <template v-if="job.focus">
            <p :id="`experience-${index}-focus`" class="mt-4 text-sm font-medium">
              {{ t('experience.focusLabel') }}
            </p>
            <ul
              :aria-labelledby="`experience-${index}-focus`"
              class="mt-2 flex flex-wrap gap-2 text-sm"
            >
              <li
                v-for="topic in localize(job.focus)"
                :key="topic"
                class="rounded-md border border-line bg-surface px-2.5 py-0.5 text-fg-muted"
              >
                {{ topic }}
              </li>
            </ul>
          </template>

          <template v-if="job.details">
            <!-- Height animates via grid rows 0fr → 1fr: no fixed heights, so longer German text never clips.
                 Collapsed details are inert: out of the tab order and the accessibility tree.
                 `|| undefined` removes the attribute when open; a rendered inert="false" would still be inert. -->
            <div
              :id="`experience-${index}-details`"
              class="grid ease-out-soft motion-safe:transition-[grid-template-rows] motion-safe:duration-200"
              :class="expanded.has(index) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
              :inert="!expanded.has(index) || undefined"
            >
              <div class="overflow-hidden">
                <ul
                  class="mt-3 max-w-[70ch] list-disc space-y-2 pl-5 text-sm leading-relaxed text-fg-muted marker:text-accent"
                >
                  <li v-for="detail in localize(job.details)" :key="detail">{{ detail }}</li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              :aria-expanded="expanded.has(index)"
              :aria-controls="`experience-${index}-details`"
              :aria-describedby="`experience-${index}-title`"
              class="mt-3 inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-accent transition-colors duration-150 ease-out-soft hover:text-accent-hover"
              @click="toggle(index)"
            >
              {{ expanded.has(index) ? t('experience.showLess') : t('experience.showMore') }}
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
                :class="{ 'rotate-180': expanded.has(index) }"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </template>
        </div>
      </li>
    </ol>
  </PageSection>
</template>
