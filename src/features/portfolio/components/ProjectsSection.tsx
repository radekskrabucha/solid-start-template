import { createQuery } from '@tanstack/solid-query'
import { For } from 'solid-js'
import { InternalLink } from '~/config/app'
import { getPortfolioProjects } from '~/features/home'
import { ProjectCard } from './ProjectCard'

export const ProjectsSection = () => {
  const getPortfolioProjectsQuery = createQuery(() => ({
    queryKey: ['getPortfolioProjects'],
    queryFn: getPortfolioProjects,
    throwOnError: true,
    select: data =>
      data.items.map(item => ({
        href: `${InternalLink.portfolio}/${item.fields.slug}`,
        imageUrl: `https:${item.fields.mainImage?.fields.file?.url}`,
        tag: item.fields.category,
        title: item.fields.title
      }))
  }))

  return (
    <section class="layout-section !grid grid-cols-3 gap-12 max-lg:grid-cols-2 max-md:grid-cols-1">
      <For each={getPortfolioProjectsQuery.data}>
        {project => <ProjectCard {...project} />}
      </For>
    </section>
  )
}
