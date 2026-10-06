<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// The core technologies, with the logos from the Skills section.
const coreStack = [
  { name: 'Vue.js', icon: 'vuejs' },
  { name: 'Angular', icon: 'angular' },
  { name: 'JavaScript/TypeScript', icon: 'typescript' },
  { name: 'Node.js', icon: 'nodejs' },
]
</script>

<template>
  <section
    id="hero"
    aria-labelledby="hero-title"
    class="grid grid-cols-12 items-center gap-12 pt-20 pb-16"
  >
    <div class="col-span-7 motion-safe:animate-rise">
      <p
        class="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-subtle px-3 py-1 text-sm font-medium text-accent"
      >
        <span aria-hidden="true" class="size-2 rounded-full bg-accent ring-4 ring-accent/20"></span>
        {{ t('hero.status') }}
      </p>

      <h1 id="hero-title" class="mt-6 text-display">Ehsan Fani</h1>
      <p class="mt-4 text-xl text-fg-muted">{{ t('hero.role') }}</p>
      <p class="mt-6 max-w-xl text-lead">{{ t('hero.summary') }}</p>

      <div class="mt-8 flex max-w-xl items-center gap-4 text-sm">
        <p id="hero-core" class="shrink-0 text-fg-muted">{{ t('hero.coreLabel') }}</p>
        <!-- Slider: two identical lists in a row, moved left by one list's width, then repeated.
             The copy is hidden from screen readers. Pauses on hover; static under reduced motion. -->
        <div class="overflow-hidden mask-x-from-85% mask-x-to-100% motion-reduce:mask-none">
          <div class="flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused]">
            <ul
              v-for="copy in [false, true]"
              :key="String(copy)"
              :aria-labelledby="copy ? undefined : 'hero-core'"
              :aria-hidden="copy || undefined"
              class="flex"
              :class="{ 'motion-reduce:hidden': copy }"
            >
              <li
                v-for="tech in coreStack"
                :key="tech.name"
                class="mr-2 flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1 font-medium whitespace-nowrap"
              >
                <img :src="`/icons/skills/${tech.icon}.svg`" alt="" class="size-4" />
                {{ tech.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-10 flex items-center gap-4">
        <a
          href="#experience"
          class="rounded-lg bg-accent px-5 py-2.5 font-medium text-on-accent transition duration-200 ease-out-soft hover:bg-accent-hover motion-safe:hover:-translate-y-0.5"
        >
          {{ t('hero.primaryCta') }}
        </a>
        <a
          href="#contact"
          class="group inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 font-medium transition-colors duration-200 hover:border-line-strong"
        >
          {{ t('hero.secondaryCta') }}
          <img
            src="/icons/arrow-right.svg"
            alt=""
            class="size-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5 motion-reduce:transition-none dark:invert"
          />
        </a>
      </div>
    </div>

    <!-- Offset accent panel behind the photo (decorative). -->
    <div class="relative col-span-5 motion-safe:animate-rise motion-safe:[animation-delay:120ms]">
      <div
        aria-hidden="true"
        class="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-accent-subtle"
      ></div>
      <!-- width/height reserve the space before the image loads (no layout shift); high priority: it's the main image. -->
      <img
        src="/images/portrait.jpg"
        alt="Ehsan Fani"
        width="860"
        height="676"
        fetchpriority="high"
        class="relative w-full rounded-3xl border border-line"
      />
    </div>
  </section>
</template>
