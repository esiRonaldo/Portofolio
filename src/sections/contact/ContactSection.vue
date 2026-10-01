<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'
import ContactForm from './ContactForm.vue'

const { t } = useI18n()
</script>

<template>
  <PageSection id="contact">
    <p data-reveal style="--i: 1" class="max-w-2xl text-lead text-fg-muted">
      {{ t('contact.intro') }}
    </p>
    <ContactForm data-reveal style="--i: 2" class="mt-8" />
  </PageSection>
</template>
