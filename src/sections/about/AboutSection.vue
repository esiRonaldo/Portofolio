<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../../components/PageSection.vue'

const { t } = useI18n()
</script>

<template>
  <PageSection id="about">
    <div data-reveal style="--i: 1" class="max-w-2xl space-y-4 text-lead">
      <p>{{ t('about.intro') }}</p>
      <p>{{ t('about.teamwork') }}</p>
    </div>

    <dl data-reveal style="--i: 2" class="mt-10 grid grid-cols-2 gap-8 text-sm leading-relaxed">
      <div>
        <dt class="font-medium text-fg-muted">{{ t('about.education.label') }}</dt>
        <!-- A term can have several descriptions: one per degree. -->
        <dd class="mt-3 font-medium">{{ t('about.education.master') }}</dd>
        <dd class="mt-1.5 font-medium">{{ t('about.education.bachelor') }}</dd>
      </div>
      <div>
        <dt class="font-medium text-fg-muted">{{ t('about.languages.label') }}</dt>
        <dd class="mt-3 font-medium">{{ t('about.languages.value') }}</dd>
      </div>
    </dl>
  </PageSection>
</template>
