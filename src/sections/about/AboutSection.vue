<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'

const { t } = useI18n()
</script>

<template>
  <PageSection id="about">
    <div class="max-w-2xl space-y-4 text-lg leading-relaxed">
      <p>{{ t('about.intro') }}</p>
      <p>{{ t('about.teamwork') }}</p>
    </div>

    <dl class="mt-10 grid grid-cols-2 gap-8 text-sm">
      <div>
        <dt class="text-fg-muted">{{ t('about.education.label') }}</dt>
        <!-- A term can have several descriptions: one per degree. -->
        <dd class="mt-2 font-medium">{{ t('about.education.master') }}</dd>
        <dd class="mt-1 font-medium">{{ t('about.education.bachelor') }}</dd>
      </div>
      <div>
        <dt class="text-fg-muted">{{ t('about.languages.label') }}</dt>
        <dd class="mt-2 font-medium">{{ t('about.languages.value') }}</dd>
      </div>
    </dl>
  </PageSection>
</template>
