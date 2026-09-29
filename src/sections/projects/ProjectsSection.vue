<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'
import { localize } from '../../i18n'
import { projects } from './projects'

const { t } = useI18n()
</script>

<template>
  <PageSection id="projects">
    <ul class="space-y-12">
      <li v-for="project in projects" :key="project.title.en">
        <article class="rounded-xl border border-line bg-surface p-8">
          <h3 class="text-lg font-semibold">{{ localize(project.title) }}</h3>
          <p class="mt-2 leading-relaxed text-fg-muted">{{ localize(project.summary) }}</p>

          <h4 class="mt-6 text-sm font-semibold">{{ t('projects.highlightsLabel') }}</h4>
          <ul class="mt-3 list-disc space-y-2 pl-5 leading-relaxed marker:text-line">
            <li v-for="highlight in localize(project.highlights)" :key="highlight">
              {{ highlight }}
            </li>
          </ul>

          <ul :aria-label="t('projects.stackLabel')" class="mt-6 flex flex-wrap gap-2 text-xs">
            <li
              v-for="tech in project.stack"
              :key="tech"
              class="rounded-md border border-line bg-canvas px-2 py-0.5 text-fg-muted"
            >
              {{ tech }}
            </li>
          </ul>
        </article>
      </li>
    </ul>
  </PageSection>
</template>
