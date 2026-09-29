<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'
import { email, socialLinks } from '../../profile'
import ContactForm from './ContactForm.vue'

const { t } = useI18n()
</script>

<template>
  <PageSection id="contact">
    <p class="max-w-2xl text-lg leading-relaxed">{{ t('contact.intro') }}</p>

    <ul
      :aria-label="t('contact.channelsLabel')"
      class="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3"
    >
      <li>
        <span class="text-sm text-fg-muted">{{ t('contact.emailLabel') }}:</span>
        <a :href="`mailto:${email}`" class="ml-2 font-medium underline underline-offset-4">
          {{ email }}
        </a>
      </li>
      <li v-for="link in socialLinks" :key="link.name">
        <a :href="link.href" :title="link.name" class="block rounded-md p-2 hover:bg-surface">
          <img :src="link.icon" :alt="link.name" class="size-5 dark:invert" />
        </a>
      </li>
    </ul>

    <ContactForm class="mt-12" />
  </PageSection>
</template>
