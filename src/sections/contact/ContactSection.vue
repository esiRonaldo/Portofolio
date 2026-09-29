<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'
import { socialLinks } from '../../profile'
import ContactForm from './ContactForm.vue'

const { t } = useI18n()
</script>

<template>
  <PageSection id="contact">
    <div class="grid grid-cols-12 gap-12">
      <ContactForm class="col-span-8" />

      <div class="col-span-4">
        <h3 class="text-lg font-semibold">{{ t('contact.channelsTitle') }}</h3>
        <ul class="mt-4 space-y-2">
          <li v-for="link in socialLinks" :key="link.name">
            <a
              :href="link.href"
              class="flex items-center gap-3 rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium hover:border-accent"
            >
              <!-- Brand colors; only GitHub's logo is black, so only it is inverted in the dark theme. -->
              <img
                :src="link.icon"
                alt=""
                class="size-5"
                :class="{ 'dark:invert': link.name === 'GitHub' }"
              />
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Contact is the last section, so the way back up lives here. -->
    <div class="mt-12 flex justify-end">
      <a href="#hero" :title="t('contact.backToTop')" class="rounded-full hover:bg-surface">
        <img src="/icons/arrow-up.svg" :alt="t('contact.backToTop')" class="size-9 dark:invert" />
      </a>
    </div>
  </PageSection>
</template>
