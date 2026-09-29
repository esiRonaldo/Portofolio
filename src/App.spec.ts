import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from './i18n'
import App from './App.vue'

describe('App', () => {
  it('has a skip link that points to the main content', () => {
    const wrapper = mount(App)
    const skipLink = wrapper.get('a[href="#main"]')

    expect(skipLink.text()).toBe('Skip to content')
    expect(wrapper.find('main#main').exists()).toBe(true)
  })

  it('has exactly one h1', () => {
    expect(mount(App).findAll('h1')).toHaveLength(1)
  })

  it('shows German text after switching the language', async () => {
    const wrapper = mount(App)
    setLocale('de')
    await wrapper.vm.$nextTick()

    expect(wrapper.get('a[href="#main"]').text()).toBe('Zum Inhalt springen')
  })
})
