<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section
    id="about"
    aria-labelledby="about-title"
    class="grid grid-cols-12 gap-12 border-t border-line py-24"
  >
    <h2 id="about-title" class="col-span-4 text-3xl font-semibold tracking-tight">
      {{ t('nav.about') }}
    </h2>

    <div class="col-span-8">
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
    </div>
  </section>
</template>
