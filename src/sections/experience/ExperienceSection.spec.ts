import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import ExperienceSection from './ExperienceSection.vue'
import { jobs } from './experience'

function jobItems(wrapper: ReturnType<typeof mount>) {
  return wrapper.findAll('ol > li')
}

describe('ExperienceSection', () => {
  it('lists every job as an ordered list, newest first', () => {
    const items = jobItems(mount(ExperienceSection))

    expect(items.map((item) => item.get('h3').text())).toEqual([
      'Technical Consultant',
      'Junior Software Developer',
      'Software Development Intern',
    ])

    const starts = jobs.map((job) => job.start)
    expect(starts).toEqual([...starts].sort().reverse())
  })

  it('shows company, location and machine-readable dates', () => {
    const first = jobItems(mount(ExperienceSection))[0]
    const times = first?.findAll('time') ?? []

    expect(first?.text()).toContain('NTT DATA Deutschland SE · Cologne')
    expect(times.map((time) => [time.attributes('datetime'), time.text()])).toEqual([
      ['2022-04', '04/2022'],
      ['2025-12', '12/2025'],
    ])
  })

  it('shows all highlights and technologies of each job', () => {
    const items = jobItems(mount(ExperienceSection))

    jobs.forEach((job, index) => {
      const lists = items[index]?.findAll('ul') ?? []
      expect(lists[0]?.findAll('li')).toHaveLength(job.highlights.en.length)
      expect(lists[1]?.findAll('li').map((li) => li.text())).toEqual(job.stack)
      expect(lists[1]?.attributes('aria-label')).toBe('Technologies')
    })
  })

  it('has the same number of highlights in both languages', () => {
    for (const job of jobs) expect(job.highlights.de).toHaveLength(job.highlights.en.length)
  })

  it('shows German roles, locations and highlights after switching the language', async () => {
    const wrapper = mount(ExperienceSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    const second = jobItems(wrapper)[1]
    expect(second?.get('h3').text()).toBe('Junior Softwareentwickler')
    expect(second?.text()).toContain('Ben Hur GmbH · Köln')
    expect(second?.text()).toContain('Bestell-Kiosk-Frontends')
  })
})
