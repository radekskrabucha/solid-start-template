import { createQuery } from '@tanstack/solid-query'
import { Index, type Component } from 'solid-js'
import { InternalLink } from '~/config/app'
import { getFeaturedProjects } from '../actions'
import { FeaturedProject } from './FeaturedProject'

export const FeaturedProjectsSection: Component = () => {
  const getFeaturedProjectsQuery = createQuery(() => ({
    queryKey: ['getFeaturedProjects'],
    queryFn: getFeaturedProjects,
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
    <section class="layout-section relative !flex-row !p-0 max-lg:!flex-col">
      <Index each={getFeaturedProjectsQuery.data}>
        {(project, index) => (
          <FeaturedProject
            {...project()}
            noHidden={index === 0}
          />
        )}
      </Index>
    </section>
  )
}
