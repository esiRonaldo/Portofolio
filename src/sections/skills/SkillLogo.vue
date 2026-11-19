<script setup lang="ts">
import { computed } from 'vue'
import { skillLogos } from './skills'

// A skill's logo, or nothing when the skill has none. Decorative (empty alt): the name is shown next to it.
// Size and hover effects come from the parent's class.
const props = defineProps<{ skill: string }>()

const logo = computed(() => skillLogos[props.skill])
</script>

<template>
  <img
    v-if="logo"
    :src="`/icons/skills/${logo.file}.svg`"
    alt=""
    :class="{ 'dark:invert': logo.invertInDark }"
  />
</template>
