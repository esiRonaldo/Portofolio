<script setup lang="ts">
import { nextTick, reactive, ref, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { socialLinks } from '../../profile'

// UI and validation only: no sending mechanism is chosen yet. A valid form just shows a note.

const fields = ['name', 'email', 'message'] as const
type Field = (typeof fields)[number]
type ErrorKey = 'required' | 'email' | 'tooShort'

const { t } = useI18n()
const form = useTemplateRef('form')
const values = reactive<Record<Field, string>>({ name: '', email: '', message: '' })
// Error keys, not texts, so the messages follow a language switch.
const errors = ref<Partial<Record<Field, ErrorKey>>>({})
const sent = ref(false)

function check(field: Field): ErrorKey | undefined {
  const value = values[field].trim()
  if (!value) return 'required'
  if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'email'
  if (field === 'message' && value.length < 10) return 'tooShort'
}

// Once a field shows an error, re-check it while typing so the error goes away when fixed.
function recheck(field: Field) {
  if (errors.value[field]) errors.value[field] = check(field)
}

// Attributes shared by the input and the textarea.
function controlAttrs(field: Field) {
  const error = errors.value[field]
  return {
    id: `contact-${field}`,
    name: field,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `contact-${field}-error` : undefined,
    class:
      'mt-2 block w-full rounded-md border border-line bg-canvas px-3 py-2 aria-invalid:border-danger',
  }
}

async function submit() {
  sent.value = false
  errors.value = Object.fromEntries(fields.map((field) => [field, check(field)]))

  if (fields.some((field) => errors.value[field])) {
    await nextTick()
    form.value?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
    return
  }

  sent.value = true
}
</script>

<template>
  <form
    ref="form"
    novalidate
    class="rounded-xl border border-line bg-surface p-8"
    @submit.prevent="submit"
  >
    <div class="grid grid-cols-2 gap-6">
      <div v-for="field in fields" :key="field" :class="{ 'col-span-2': field === 'message' }">
        <label :for="`contact-${field}`" class="block text-sm font-medium">
          {{ t(`contact.fields.${field}`) }}
        </label>
        <textarea
          v-if="field === 'message'"
          v-model="values[field]"
          v-bind="controlAttrs(field)"
          rows="6"
          @input="recheck(field)"
        />
        <input
          v-else
          v-model="values[field]"
          v-bind="controlAttrs(field)"
          :type="field === 'email' ? 'email' : 'text'"
          :autocomplete="field"
          @input="recheck(field)"
        />
        <p v-if="errors[field]" :id="`contact-${field}-error`" class="mt-2 text-sm text-danger">
          {{ t(`contact.errors.${errors[field]}`) }}
        </p>
      </div>
    </div>

    <div class="mt-6 flex items-center gap-6">
      <button
        type="submit"
        class="rounded-md bg-accent px-5 py-2.5 font-medium text-on-accent hover:opacity-90"
      >
        {{ t('contact.submit') }}
      </button>
      <!-- Always rendered, so screen readers announce the text when it appears. -->
      <p role="status" class="text-sm text-fg-muted">
        <template v-if="sent">{{ t('contact.sent') }}</template>
      </p>

      <!-- Profile links, icon-only: the img alt names each link. Only GitHub's logo is black → inverted in dark. -->
      <ul class="ml-auto flex gap-1">
        <li v-for="link in socialLinks" :key="link.name">
          <a :href="link.href" :title="link.name" class="block rounded-md p-2 hover:bg-canvas">
            <img
              :src="link.icon"
              :alt="link.name"
              class="size-6"
              :class="{ 'dark:invert': link.name === 'GitHub' }"
            />
          </a>
        </li>
      </ul>
    </div>
  </form>
</template>
