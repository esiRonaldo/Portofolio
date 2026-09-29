<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'
import { localize } from '../../i18n'
import { certifications, darkLogos, skillGroups, skillIcons, type Skill } from './skills'

const { t } = useI18n()

function skillName(skill: Skill): string {
  return typeof skill === 'string' ? skill : localize(skill)
}

// Icons are keyed by the English name, so they don't depend on the current language.
function englishName(skill: Skill): string {
  return typeof skill === 'string' ? skill : skill.en
}
</script>

<template>
  <PageSection id="skills">
    <div class="space-y-10">
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
            class="flex items-center gap-2 rounded-md border px-3 py-1"
            :class="group.primary ? 'border-accent/40 bg-accent/10' : 'border-line bg-surface'"
          >
            <img
              v-if="skillIcons[englishName(skill)]"
              :src="`/icons/skills/${skillIcons[englishName(skill)]}.svg`"
              alt=""
              class="size-4"
              :class="{ 'dark:invert': darkLogos.includes(englishName(skill)) }"
            />
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
  </PageSection>
</template>
