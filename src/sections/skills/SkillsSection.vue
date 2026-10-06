<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'
import { certifications, darkLogos, skillGroups, skillIcons, type SkillGroup } from './skills'

const { t } = useI18n()

// The main focus gets its own full-width row with larger chips; the rest share a row below.
const primaryGroups = skillGroups.filter((group) => group.primary)
const otherGroups = skillGroups.filter((group) => !group.primary)

// Reveal order (--i): each group starts 3 steps after the previous one, its chips follow one by one.
// The CSS caps the delay, so long groups still finish quickly.
function groupStep(group: SkillGroup): number {
  return 1 + skillGroups.indexOf(group) * 3
}
const certificationsStep = 1 + skillGroups.length * 3
</script>

<template>
  <PageSection id="skills">
    <div class="space-y-12">
      <div v-for="group in primaryGroups" :key="group.id">
        <h3
          data-reveal
          :style="{ '--i': groupStep(group) }"
          class="flex items-center gap-3 text-title"
        >
          <img :src="group.icon" alt="" class="size-5 opacity-80 dark:invert" />
          {{ t(`skills.groups.${group.id}`) }}
          <span class="rounded-full bg-accent-subtle px-2.5 py-0.5 text-sm font-medium text-accent">
            {{ t('skills.primary') }}
          </span>
        </h3>
        <!-- Not interactive: the hover only gives visual feedback, the chips aren't focusable. -->
        <ul class="mt-5 flex flex-wrap gap-3">
          <li
            v-for="(skill, index) in group.items"
            :key="skill"
            data-reveal
            :style="{ '--i': groupStep(group) + 1 + index }"
            class="group flex items-center gap-2.5 rounded-lg border border-accent/30 bg-accent-subtle px-4 py-2 font-medium transition duration-200 ease-out-soft hover:border-accent/60 hover:bg-accent/15 motion-safe:hover:-translate-y-0.5"
          >
            <img
              v-if="skillIcons[skill]"
              :src="`/icons/skills/${skillIcons[skill]}.svg`"
              alt=""
              class="size-5 transition-transform duration-200 ease-out-soft motion-safe:group-hover:scale-110"
              :class="{ 'dark:invert': darkLogos.includes(skill) }"
            />
            {{ skill }}
          </li>
        </ul>
      </div>

      <div class="grid grid-cols-2 gap-12">
        <div v-for="group in otherGroups" :key="group.id">
          <h3
            data-reveal
            :style="{ '--i': groupStep(group) }"
            class="flex items-center gap-3 font-semibold"
          >
            <img :src="group.icon" alt="" class="size-5 opacity-80 dark:invert" />
            {{ t(`skills.groups.${group.id}`) }}
          </h3>
          <ul class="mt-4 flex flex-wrap gap-2 text-sm">
            <li
              v-for="(skill, index) in group.items"
              :key="skill"
              data-reveal
              :style="{ '--i': groupStep(group) + 1 + index }"
              class="group flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 transition duration-200 ease-out-soft hover:border-line-strong/60 hover:bg-surface-raised motion-safe:hover:-translate-y-0.5"
            >
              <img
                v-if="skillIcons[skill]"
                :src="`/icons/skills/${skillIcons[skill]}.svg`"
                alt=""
                class="size-4 transition-transform duration-200 ease-out-soft motion-safe:group-hover:scale-110"
                :class="{ 'dark:invert': darkLogos.includes(skill) }"
              />
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3
          data-reveal
          :style="{ '--i': certificationsStep }"
          class="flex items-center gap-3 font-semibold"
        >
          <img src="/icons/award.svg" alt="" class="size-5 opacity-80 dark:invert" />
          {{ t('skills.certifications') }}
        </h3>
        <ul class="mt-4 grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-fg-muted">
          <li
            v-for="(certification, index) in certifications"
            :key="certification"
            data-reveal
            :style="{ '--i': certificationsStep + 1 + index }"
            class="flex gap-3 before:mt-2 before:size-1.5 before:shrink-0 before:rounded-full before:bg-accent/60"
          >
            {{ certification }}
          </li>
        </ul>
      </div>
    </div>
  </PageSection>
</template>
