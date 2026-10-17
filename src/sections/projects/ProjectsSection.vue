<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'
import { localize } from '../../i18n'
import { projects } from './projects'

const { t } = useI18n()
</script>

<template>
  <PageSection id="projects">
    <ul class="space-y-8">
      <li v-for="(project, index) in projects" :key="project.title.en">
        <article
          data-reveal
          :style="{ '--i': index + 1 }"
          class="grid grid-cols-1 gap-6 rounded-2xl border border-line bg-surface p-6 transition duration-200 ease-out-soft hover:border-line-strong/60 hover:shadow-sm motion-safe:hover:-translate-y-0.5 lg:grid-cols-12 lg:gap-10 lg:p-8"
        >
          <img
            v-if="project.image"
            :src="project.image.src"
            :alt="localize(project.image.alt)"
            class="rounded-xl border border-line lg:col-span-12"
          />

          <div class="flex flex-col lg:col-span-5">
            <p v-if="project.industry" class="mb-2 text-sm font-medium text-accent">
              {{ localize(project.industry) }}
            </p>
            <h3 class="text-title">{{ localize(project.title) }}</h3>

            <ul :aria-label="t('projects.stackLabel')" class="mt-6 flex flex-wrap gap-2 text-sm">
              <li
                v-for="tech in project.stack"
                :key="tech"
                class="rounded-md border border-line bg-canvas px-2.5 py-0.5 text-fg-muted"
              >
                {{ tech }}
              </li>
            </ul>

            <div v-if="project.links" class="mt-auto flex gap-6 pt-8 text-sm font-medium">
              <a
                v-if="project.links.source"
                :href="project.links.source"
                class="text-accent hover:text-accent-hover"
              >
                {{ t('projects.source') }}
              </a>
              <a
                v-if="project.links.demo"
                :href="project.links.demo"
                class="text-accent hover:text-accent-hover"
              >
                {{ t('projects.demo') }}
              </a>
            </div>
          </div>

          <p class="leading-relaxed text-fg-muted lg:col-span-7">{{ localize(project.summary) }}</p>
        </article>
      </li>
    </ul>
  </PageSection>
</template>
