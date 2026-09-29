<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { socialLinks } from '../profile'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-10 text-sm text-fg-muted"
    >
      <div class="flex items-center gap-6">
        <p>© {{ year }} Ehsan Fani</p>
        <p class="flex items-center gap-1.5">
          <img src="/icons/map-pin.svg" alt="" class="size-4 dark:invert" />
          {{ t('footer.location') }}
        </p>
      </div>

      <ul :aria-label="t('footer.linksLabel')" class="flex gap-2">
        <li v-for="link in socialLinks" :key="link.name">
          <a :href="link.href" :title="link.name" class="block rounded-md p-2 hover:bg-surface">
            <img :src="link.icon" :alt="link.name" class="size-5 dark:invert" />
          </a>
        </li>
      </ul>

      <a href="#hero" class="hover:text-fg">
        {{ t('footer.backToTop') }} <span aria-hidden="true">↑</span>
      </a>
    </div>
  </footer>
</template>
