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
          class="grid grid-cols-12 gap-10 rounded-2xl border border-line bg-surface p-8 transition duration-200 ease-out-soft hover:border-line-strong/60 hover:shadow-sm motion-safe:hover:-translate-y-0.5"
        >
          <img
            v-if="project.image"
            :src="project.image.src"
            :alt="localize(project.image.alt)"
            class="col-span-12 rounded-xl border border-line"
          />

          <div class="col-span-5 flex flex-col">
            <p class="text-sm font-medium text-accent">{{ t('projects.eyebrow') }}</p>
            <h3 class="mt-2 text-title">{{ localize(project.title) }}</h3>
            <p class="mt-3 text-fg-muted">{{ localize(project.summary) }}</p>

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

          <div class="col-span-7">
            <h4 class="text-sm font-semibold">{{ t('projects.highlightsLabel') }}</h4>
            <ul class="mt-4 space-y-4">
              <li
                v-for="highlight in project.highlights"
                :key="highlight.title.en"
                class="flex gap-3"
              >
                <span
                  class="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-subtle"
                >
                  <img src="/icons/check.svg" alt="" class="size-3.5 dark:invert" />
                </span>
                <div>
                  <p class="font-medium">{{ localize(highlight.title) }}</p>
                  <p class="mt-0.5 text-sm leading-relaxed text-fg-muted">
                    {{ localize(highlight.detail) }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </li>
    </ul>
  </PageSection>
</template>
