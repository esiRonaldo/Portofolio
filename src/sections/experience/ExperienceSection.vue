<script setup lang="ts">
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
</script>

<template>
  <PageSection id="experience">
    <!-- Ordered list: newest first, so the order itself carries meaning. -->
    <ol class="space-y-12 border-l border-line">
      <li v-for="job in jobs" :key="job.company" class="relative pl-8">
        <span
          aria-hidden="true"
          class="absolute top-2 -left-1.25 size-2.5 rounded-full bg-accent"
        />

        <div class="flex items-baseline justify-between gap-6">
          <h3 class="text-lg font-semibold">{{ localize(job.role) }}</h3>
          <p class="shrink-0 text-sm text-fg-muted tabular-nums">
            <time :datetime="job.start">{{ monthYear(job.start) }}</time>
            –
            <time :datetime="job.end">{{ monthYear(job.end) }}</time>
          </p>
        </div>
        <p class="mt-1 text-fg-muted">{{ job.company }} · {{ localize(job.location) }}</p>

        <ul class="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-line">
          <li v-for="highlight in localize(job.highlights)" :key="highlight">{{ highlight }}</li>
        </ul>

        <ul :aria-label="t('experience.stackLabel')" class="mt-4 flex flex-wrap gap-2 text-xs">
          <li
            v-for="tech in job.stack"
            :key="tech"
            class="rounded-md border border-line bg-surface px-2 py-0.5 text-fg-muted"
          >
            {{ tech }}
          </li>
        </ul>
      </li>
    </ol>
  </PageSection>
</template>
