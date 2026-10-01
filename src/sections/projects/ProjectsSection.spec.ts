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
      const stack = article?.get('ul[aria-label="Technologies"]')
      const highlights = article?.get('h4 + ul')

      expect(article?.get('h3').text()).toBe(project.title.en)
      expect(article?.text()).toContain(project.summary.en)
      expect(article?.get('h4').text()).toBe('Engineering highlights')
      expect(
        highlights?.findAll('li').map((li) => li.findAll('p').map((line) => line.text())),
      ).toEqual(project.highlights.map(({ title, detail }) => [title.en, detail.en]))
      expect(stack?.findAll('li').map((li) => li.text())).toEqual(project.stack)
    })
  })

  it('shows no source or demo links while none are set', () => {
    const wrapper = mount(ProjectsSection)

    expect(projects.some((project) => project.links)).toBe(false)
    expect(wrapper.find('article a').exists()).toBe(false)
  })

  it('shows German content after switching the language', async () => {
    const wrapper = mount(ProjectsSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    const article = wrapper.get('article')
    expect(article.get('h3').text()).toBe('Dieses Portfolio')
    expect(article.get('h4').text()).toBe('Technische Highlights')
    expect(article.text()).toContain('selbst gehostete Schrift')
  })
})
