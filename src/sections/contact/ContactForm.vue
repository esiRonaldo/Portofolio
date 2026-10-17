<script setup lang="ts">
import { nextTick, reactive, ref, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { socialLinks } from '../../profile'

// Sends through Formspree, to the endpoint in VITE_CONTACT_ENDPOINT (see .env.example). Without it, a valid
// form only shows a "not connected yet" note, so the site works before the service is set up.

const fields = ['name', 'email', 'message'] as const
type Field = (typeof fields)[number]
type ErrorKey = 'required' | 'email' | 'tooShort'
type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unavailable'

const { t } = useI18n()
const form = useTemplateRef('form')
const values = reactive<Record<Field, string>>({ name: '', email: '', message: '' })
// Error keys, not texts, so the messages follow a language switch.
const errors = ref<Partial<Record<Field, ErrorKey>>>({})
const status = ref<Status>('idle')
// Spam honeypot: hidden from people, but bots fill it in; Formspree drops submissions where it's set.
const gotcha = ref('')

function check(field: Field): ErrorKey | undefined {
  const value = values[field].trim()
  if (!value) {
    return 'required'
  }
  if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'email'
  }
  if (field === 'message' && value.length < 10) {
    return 'tooShort'
  }
}

// Once a field shows an error, re-check it while typing so the error goes away when fixed.
function recheck(field: Field) {
  if (errors.value[field]) {
    errors.value[field] = check(field)
  }
}

// Attributes shared by the input and the textarea.
function controlAttrs(field: Field) {
  const error = errors.value[field]
  return {
    id: `contact-${field}`,
    name: field,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `contact-${field}-error` : undefined,
    // Native `required` tells assistive tech up front; `novalidate` on the form keeps our own messages.
    required: true,
    class:
      'mt-2 block w-full rounded-lg border border-line-strong bg-canvas px-3.5 py-2.5 transition-colors duration-200 focus:border-accent aria-invalid:border-danger',
  }
}

async function submit() {
  if (status.value === 'sending') return
  status.value = 'idle'
  errors.value = Object.fromEntries(fields.map((field) => [field, check(field)]))

  if (fields.some((field) => errors.value[field])) {
    await nextTick()
    form.value?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
    return
  }

  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
  if (!endpoint) {
    status.value = 'unavailable'
    return
  }

  status.value = 'sending'
  let isSuccessful = false
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values, _gotcha: gotcha.value }),
    })
    isSuccessful = response.ok
  } catch {
    // A network error counts as a failure, just like an error response.
    isSuccessful = false
  }

  status.value = isSuccessful ? 'sent' : 'error'
  // On failure the text stays, so nothing typed is lost.
  if (isSuccessful) {
    for (const field of fields) {
      values[field] = ''
    }
  }
}
</script>

<template>
  <form
    ref="form"
    novalidate
    class="rounded-2xl border border-line bg-surface p-6 lg:p-8"
    @submit.prevent="submit"
  >
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div v-for="field in fields" :key="field" :class="{ 'sm:col-span-2': field === 'message' }">
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

    <input
      v-model="gotcha"
      type="text"
      name="_gotcha"
      tabindex="-1"
      autocomplete="off"
      class="hidden"
    />

    <div class="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
      <!-- aria-disabled (not disabled) while sending, so keyboard focus stays on the button. -->
      <button
        type="submit"
        :aria-disabled="status === 'sending' || undefined"
        class="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-on-accent transition-colors duration-200 hover:bg-accent-hover aria-disabled:cursor-wait aria-disabled:opacity-70"
      >
        {{ t(status === 'sending' ? 'contact.sending' : 'contact.submit') }}
        <!-- Black icon: white on the dark teal (light theme), stays dark on the light teal (dark theme). -->
        <img
          src="/icons/send.svg"
          alt=""
          class="size-4 invert transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5 motion-reduce:transition-none dark:invert-0"
        />
      </button>
      <!-- Always rendered, so screen readers announce the text when it appears.
           On phones it moves to its own line below, so the button and the profile links share one row. -->
      <p
        role="status"
        class="text-sm max-sm:order-last max-sm:w-full"
        :class="status === 'error' ? 'text-danger' : 'text-fg-muted'"
      >
        <template v-if="status === 'sent' || status === 'error' || status === 'unavailable'">
          {{ t(`contact.${status}`) }}
        </template>
      </p>

      <!-- Profile links, icon-only: the img alt names each link. Only GitHub's logo is black → inverted in dark.
           They open in a new tab, so a half-filled form isn't lost; screen readers hear that via the sr-only text. -->
      <ul class="ml-auto flex gap-2">
        <li v-for="link in socialLinks" :key="link.name">
          <a
            :href="link.href"
            :title="link.name"
            target="_blank"
            rel="noopener noreferrer"
            class="flex size-11 items-center justify-center rounded-lg border border-line bg-canvas transition duration-200 ease-out-soft hover:border-line-strong/60 motion-safe:hover:-translate-y-0.5"
          >
            <img
              :src="link.icon"
              :alt="link.name"
              class="size-5"
              :class="{ 'dark:invert': link.name === 'GitHub' }"
            />
            <span class="sr-only">{{ t('a11y.newTab') }}</span>
          </a>
        </li>
      </ul>
    </div>
  </form>
</template>
