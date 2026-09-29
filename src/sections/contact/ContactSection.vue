<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'
import { socialLinks } from '../../profile'
import ContactForm from './ContactForm.vue'

const { t } = useI18n()
</script>

<template>
  <PageSection id="contact">
    <p class="max-w-2xl text-lg leading-relaxed">{{ t('contact.intro') }}</p>

    <ul :aria-label="t('contact.channelsLabel')" class="mt-6 -ml-2 flex gap-2">
      <li v-for="link in socialLinks" :key="link.name">
        <a :href="link.href" :title="link.name" class="block rounded-md p-2 hover:bg-surface">
          <img :src="link.icon" :alt="link.name" class="size-5 dark:invert" />
        </a>
      </li>
    </ul>

    <ContactForm class="mt-12" />
  </PageSection>
</template>
