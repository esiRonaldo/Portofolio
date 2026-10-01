<script setup lang="ts">
import PageSection from '../../components/PageSection.vue'
import { localize } from '../../i18n'
import { jobs } from './experience'

/** '2022-04' → '04/2022' (same format as the CV, in both languages). */
function monthYear(value: string): string {
  const [year, month] = value.split('-')
  return `${month}/${year}`
}
</script>

<template>
  <PageSection id="experience">
    <!-- Ordered list: newest first, so the order itself carries meaning. -->
    <ol class="grid grid-cols-3 gap-16">
      <li
        v-for="(job, index) in jobs"
        :key="job.company"
        data-reveal
        :style="{ '--i': index + 1 }"
        class="relative flex gap-5"
      >
        <!-- Connector from this node to the next one (across the column gap). Its own element,
             so it can later "draw" itself with a scale-x animation. -->
        <span
          v-if="index < jobs.length - 1"
          aria-hidden="true"
          class="absolute top-7 left-14 -right-16 h-px origin-left bg-line-strong/40"
        />

        <div
          class="relative flex size-14 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-surface ring-4 ring-canvas"
        >
          <img :src="job.icon" alt="" class="size-6 dark:invert" />
        </div>

        <div class="pt-1">
          <p class="text-sm text-fg-muted tabular-nums">
            <time :datetime="job.start">{{ monthYear(job.start) }}</time>
            –
            <time :datetime="job.end">{{ monthYear(job.end) }}</time>
          </p>
          <h3 class="mt-2 text-title">{{ localize(job.role) }}</h3>
          <p class="text-sm font-medium text-accent">{{ job.company }}</p>
          <p class="mt-3 text-sm leading-relaxed text-fg-muted">{{ localize(job.summary) }}</p>
        </div>
      </li>
    </ol>
  </PageSection>
</template>
