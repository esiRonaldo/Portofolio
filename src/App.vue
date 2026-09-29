<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SiteHeader from './components/SiteHeader.vue'
import { useActiveSection } from './composables/useActiveSection'
import AboutSection from './sections/about/AboutSection.vue'
import ContactSection from './sections/contact/ContactSection.vue'
import ExperienceSection from './sections/experience/ExperienceSection.vue'
import HeroSection from './sections/hero/HeroSection.vue'
import ProjectsSection from './sections/projects/ProjectsSection.vue'
import SkillsSection from './sections/skills/SkillsSection.vue'
import { sections } from './sections/sections'

const { t } = useI18n()
const activeSection = useActiveSection(sections)
</script>

<template>
  <!-- Hidden until focused with the keyboard, then jumps past the header. -->
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2"
  >
    {{ t('a11y.skipToContent') }}
  </a>

  <SiteHeader :active-section="activeSection" />

  <main id="main" class="mx-auto max-w-6xl px-6">
    <HeroSection />

    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
</template>
