<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'
import ContactForm from './ContactForm.vue'

const { t } = useI18n()
</script>

<template>
  <PageSection id="contact">
    <ContactForm />

    <!-- Contact is the last section, so the way back up lives here. -->
    <div class="mt-12 flex justify-end">
      <a href="#hero" :title="t('contact.backToTop')" class="rounded-full hover:bg-surface">
        <img src="/icons/arrow-up.svg" :alt="t('contact.backToTop')" class="size-9 dark:invert" />
      </a>
    </div>
  </PageSection>
</template>
