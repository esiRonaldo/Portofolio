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
    <ol class="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
      <li
        v-for="(job, index) in jobs"
        :key="job.company"
        data-reveal
        :style="{ '--i': index + 1 }"
        class="relative flex gap-5"
      >
        <!-- Connector from this node to the next one: down to the next job below lg, across the column gap on lg.
             Its own element, so it can later "draw" itself with a scale animation. -->
        <span
          v-if="index < jobs.length - 1"
          aria-hidden="true"
          class="absolute top-14 -bottom-10 left-7 w-px bg-line-strong/40 lg:top-7 lg:-right-16 lg:bottom-auto lg:left-14 lg:h-px lg:w-auto lg:origin-left"
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
