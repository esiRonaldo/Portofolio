import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SiteFooter from './SiteFooter.vue'

describe('SiteFooter', () => {
  it('shows the copyright with the current year', () => {
    expect(mount(SiteFooter).get('footer').text()).toBe(
      `© ${new Date().getFullYear()} Ehsan Fani | All rights reserved.`,
    )
  })
})
