<script setup lang="ts">
import PageSection from '../../components/PageSection.vue'
import { experienceEntries } from './experience'
import TimelineItem from './TimelineItem.vue'
</script>

<template>
  <PageSection id="experience">
    <!-- Ordered list: newest first, so the order itself carries meaning. --i staggers the reveal. -->
    <ol class="grid gap-10">
      <TimelineItem
        v-for="(entry, index) in experienceEntries"
        :key="entry.organization"
        :entry="entry"
        :style="{ '--i': index + 1 }"
      />
    </ol>
  </PageSection>
</template>
