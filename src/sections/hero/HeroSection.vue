<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { socialLinks } from '../../profile'

const { t } = useI18n()
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

      <ul :aria-label="t('hero.linksLabel')" class="mt-8 -ml-2 flex gap-2">
        <li v-for="link in socialLinks" :key="link.name">
          <a :href="link.href" :title="link.name" class="block rounded-md p-2 hover:bg-surface">
            <img :src="link.icon" :alt="link.name" class="size-5 dark:invert" />
          </a>
        </li>
      </ul>
    </div>

    <!-- width/height reserve the space before the image loads (no layout shift); high priority: it's the main image. -->
    <img
      src="/images/portrait.jpg"
      alt="Ehsan Fani"
      width="860"
      height="676"
      fetchpriority="high"
      class="col-span-5 w-full rounded-2xl border border-line motion-safe:animate-rise motion-safe:[animation-delay:120ms]"
    />
  </section>
</template>
