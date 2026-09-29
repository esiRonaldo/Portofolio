import { describe, it, expect } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import { i18n } from '../i18n'
import HelloWorld from './HelloWorld.vue'

function getButton(wrapper: VueWrapper, text: string) {
  const button = wrapper.findAll('button').find((b) => b.text() === text)
  if (!button) throw new Error(`No button with text "${text}"`)
  return button
}

describe('HelloWorld', () => {
  it('switches the heading between English and German', async () => {
    const wrapper = mount(HelloWorld, { global: { plugins: [i18n] } })
    expect(wrapper.get('h1').text()).toBe('Get started')

    await getButton(wrapper, 'Deutsch').trigger('click')
    expect(wrapper.get('h1').text()).toBe('Los geht’s')

    await getButton(wrapper, 'English').trigger('click')
    expect(wrapper.get('h1').text()).toBe('Get started')
  })
})
