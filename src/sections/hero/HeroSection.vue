<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { socialLinks } from '../../profile'

const { t } = useI18n()
const facts = ['experience', 'frontend', 'backend', 'location'] as const
</script>

<template>
  <section
    id="hero"
    aria-labelledby="hero-title"
    class="grid grid-cols-12 items-center gap-12 py-24"
  >
    <div class="col-span-7 motion-safe:animate-rise">
      <p
        class="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
      >
        <span aria-hidden="true" class="size-2 rounded-full bg-accent"></span>
        {{ t('hero.status') }}
      </p>

      <h1 id="hero-title" class="mt-6 text-6xl font-semibold tracking-tight">Ehsan Fani</h1>
      <p class="mt-3 text-2xl text-fg-muted">{{ t('hero.role') }}</p>
      <p class="mt-6 max-w-xl text-lg leading-relaxed">{{ t('hero.summary') }}</p>

      <div class="mt-10 flex items-center gap-6">
        <a
          href="#experience"
          class="rounded-md bg-accent px-5 py-2.5 font-medium text-on-accent hover:opacity-90"
        >
          {{ t('hero.primaryCta') }}
        </a>
        <a href="#contact" class="font-medium hover:text-accent">
          {{ t('hero.secondaryCta') }} <span aria-hidden="true">→</span>
        </a>
      </div>

      <ul :aria-label="t('hero.linksLabel')" class="mt-8 flex gap-6 text-sm">
        <li v-for="link in socialLinks" :key="link.name">
          <a :href="link.href" class="text-fg-muted underline underline-offset-4 hover:text-fg">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>

    <dl
      class="col-span-5 divide-y divide-line rounded-xl border border-line bg-surface px-6 py-2 motion-safe:animate-rise motion-safe:[animation-delay:120ms]"
    >
      <div v-for="fact in facts" :key="fact" class="grid grid-cols-3 gap-4 py-4">
        <dt class="text-sm text-fg-muted">{{ t(`hero.facts.${fact}.label`) }}</dt>
        <dd class="col-span-2 text-sm font-medium">{{ t(`hero.facts.${fact}.value`) }}</dd>
      </div>
    </dl>
  </section>
</template>
