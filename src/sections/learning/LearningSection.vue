<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'
import { localize } from '../../i18n'
import { course } from './learning'

const { t } = useI18n()

/** '2026-10' → '10/2026' (same format as the Experience timeline). */
function monthYear(value: string): string {
  const [year, month] = value.split('-')
  return `${month}/${year}`
}
</script>

<template>
  <PageSection id="learning" :title="t('learning.title')">
    <article
      data-reveal
      style="--i: 1"
      class="grid grid-cols-12 gap-10 rounded-2xl border border-line bg-surface p-8 transition duration-200 ease-out-soft hover:border-line-strong/60 hover:shadow-sm motion-safe:hover:-translate-y-0.5"
    >
      <div class="col-span-5">
        <p class="mb-2 text-sm font-medium text-accent">{{ course.provider }}</p>
        <h3 class="text-title">{{ localize(course.title) }}</h3>
        <div class="mt-4 flex items-center gap-3">
          <p class="text-sm text-fg-muted tabular-nums">
            <time :datetime="course.start">{{ monthYear(course.start) }}</time>
            –
            <time :datetime="course.end">{{ monthYear(course.end) }}</time>
          </p>
          <span
            class="rounded-full bg-accent-subtle px-2.5 py-0.5 text-sm font-medium text-on-accent-subtle"
          >
            {{ t('learning.inProgress') }}
          </span>
        </div>
      </div>

      <div class="col-span-7">
        <p class="leading-relaxed text-fg-muted">{{ localize(course.summary) }}</p>
        <p id="learning-focus" class="mt-6 text-sm font-medium">{{ t('learning.focusLabel') }}</p>
        <ul aria-labelledby="learning-focus" class="mt-3 flex flex-wrap gap-2 text-sm">
          <li
            v-for="topic in localize(course.focus)"
            :key="topic"
            class="rounded-md border border-line bg-canvas px-2.5 py-0.5 text-fg-muted"
          >
            {{ topic }}
          </li>
        </ul>
      </div>
    </article>
  </PageSection>
</template>
