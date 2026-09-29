<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { localize } from '../../i18n'
import { certifications, skillGroups, type Skill } from './skills'

const { t } = useI18n()

function skillName(skill: Skill): string {
  return typeof skill === 'string' ? skill : localize(skill)
}
</script>

<template>
  <section
    id="skills"
    aria-labelledby="skills-title"
    class="grid grid-cols-12 gap-12 border-t border-line py-24"
  >
    <h2 id="skills-title" class="col-span-4 text-3xl font-semibold tracking-tight">
      {{ t('nav.skills') }}
    </h2>

    <div class="col-span-8 space-y-10">
      <div v-for="group in skillGroups" :key="group.id">
        <h3 class="flex items-center gap-3 font-semibold">
          {{ t(`skills.groups.${group.id}`) }}
          <span
            v-if="group.primary"
            class="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
          >
            {{ t('skills.primary') }}
          </span>
        </h3>
        <ul class="mt-3 flex flex-wrap gap-2 text-sm">
          <li
            v-for="skill in group.items"
            :key="skillName(skill)"
            class="rounded-md border px-3 py-1"
            :class="group.primary ? 'border-accent/40 bg-accent/10' : 'border-line bg-surface'"
          >
            {{ skillName(skill) }}
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold">{{ t('skills.certifications') }}</h3>
        <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm text-fg-muted marker:text-line">
          <li v-for="certification in certifications" :key="certification">
            {{ certification }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
