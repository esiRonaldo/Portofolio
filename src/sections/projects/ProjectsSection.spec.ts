import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import ProjectsSection from './ProjectsSection.vue'
import { projects } from './projects'

describe('ProjectsSection', () => {
  it('shows each project as an article with title, summary, highlights and technologies', () => {
    const articles = mount(ProjectsSection).findAll('article')
    expect(articles).toHaveLength(projects.length)

    projects.forEach((project, index) => {
      const article = articles[index]
      const lists = article?.findAll('ul') ?? []

      expect(article?.get('h3').text()).toBe(project.title.en)
      expect(article?.text()).toContain(project.summary.en)
      expect(article?.get('h4').text()).toBe('What it shows')
      expect(lists[0]?.findAll('li')).toHaveLength(project.highlights.en.length)
      expect(lists[1]?.findAll('li').map((li) => li.text())).toEqual(project.stack)
      expect(lists[1]?.attributes('aria-label')).toBe('Technologies')
    })
  })

  it('has the same number of highlights in both languages', () => {
    for (const project of projects)
      expect(project.highlights.de).toHaveLength(project.highlights.en.length)
  })

  it('shows German content after switching the language', async () => {
    const wrapper = mount(ProjectsSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    const article = wrapper.get('article')
    expect(article.get('h3').text()).toBe('Dieses Portfolio')
    expect(article.get('h4').text()).toBe('Was es zeigt')
    expect(article.text()).toContain('selbst gehostete Schrift')
  })
})
