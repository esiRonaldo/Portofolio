<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { email, socialLinks } from '../profile'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-10 text-sm text-fg-muted"
    >
      <p>© {{ year }} Ehsan Fani</p>

      <ul :aria-label="t('footer.linksLabel')" class="flex gap-6">
        <li>
          <a :href="`mailto:${email}`" class="underline underline-offset-4 hover:text-fg">
            {{ t('contact.emailLabel') }}
          </a>
        </li>
        <li v-for="link in socialLinks" :key="link.name">
          <a :href="link.href" class="underline underline-offset-4 hover:text-fg">
            {{ link.name }}
          </a>
        </li>
      </ul>

      <a href="#hero" class="hover:text-fg">
        {{ t('footer.backToTop') }} <span aria-hidden="true">↑</span>
      </a>
    </div>
  </footer>
</template>
