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
  <PageSection id="experience" wide>
    <!-- Ordered list: newest first, so the order itself carries meaning. -->
    <ol class="grid grid-cols-3 gap-16">
      <li v-for="(job, index) in jobs" :key="job.company" class="relative flex gap-5">
        <!-- Dashed connector with a dot, across the gap to the next job. -->
        <span
          v-if="index < jobs.length - 1"
          aria-hidden="true"
          class="absolute top-7 left-full w-16 border-t-2 border-dashed border-line"
        >
          <span
            class="absolute -top-1.25 left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent"
          />
        </span>

        <div class="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent/10">
          <img :src="job.icon" alt="" class="size-6 dark:invert" />
        </div>

        <div>
          <p class="text-sm font-semibold text-accent tabular-nums">
            <time :datetime="job.start">{{ monthYear(job.start) }}</time>
            –
            <time :datetime="job.end">{{ monthYear(job.end) }}</time>
          </p>
          <h3 class="mt-1 text-lg font-semibold">{{ localize(job.role) }}</h3>
          <p class="text-sm font-medium text-accent">{{ job.company }}</p>
          <p class="mt-3 text-sm leading-relaxed text-fg-muted">{{ localize(job.summary) }}</p>
        </div>
      </li>
    </ol>
  </PageSection>
</template>
