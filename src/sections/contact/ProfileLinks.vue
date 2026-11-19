<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { socialLinks } from '../../profile'

const { t } = useI18n()
</script>

<template>
  <!-- Icon-only: the img alt names each link. Black logos are inverted in dark.
       They open in a new tab, so a half-filled form isn't lost; screen readers hear that via the sr-only text. -->
  <ul class="flex gap-2">
    <li v-for="link in socialLinks" :key="link.name">
      <a
        :href="link.href"
        :title="link.name"
        target="_blank"
        rel="noopener noreferrer"
        class="flex size-11 items-center justify-center rounded-lg border border-line bg-canvas transition duration-200 ease-out-soft hover:border-line-strong/60 motion-safe:hover:-translate-y-0.5"
      >
        <img
          :src="link.icon"
          :alt="link.name"
          class="size-5"
          :class="{ 'dark:invert': link.invertInDark }"
        />
        <span class="sr-only">{{ t('a11y.newTab') }}</span>
      </a>
    </li>
  </ul>
</template>
