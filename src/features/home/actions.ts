import * as contentful from 'contentful'
import { contentfulClient } from '~/lib/contentful'

type FeaturedProjectsContentfulResponse = {
  contentTypeId: 'portfolioProject'
  fields: {
    category: contentful.EntryFieldTypes.Text
    featured: contentful.EntryFieldTypes.Boolean
    slug: contentful.EntryFieldTypes.Text
    title: contentful.EntryFieldTypes.Text
    mainImage: contentful.EntryFieldTypes.AssetLink
    details: contentful.EntryFieldTypes.RichText
  }
}

export const getFeaturedProjects = () => {
  'use server'
  return contentfulClient.withoutUnresolvableLinks.getEntries<FeaturedProjectsContentfulResponse>(
    {
      content_type: 'portfolioProject',
      'fields.featured': true,
      limit: 4,
      locale: 'pl'
    }
  )
}

export const getPortfolioProjects = () => {
  return contentfulClient.withoutUnresolvableLinks.getEntries<FeaturedProjectsContentfulResponse>(
    {
      content_type: 'portfolioProject',
      limit: 24,
      locale: 'pl'
    }
  )
}
export const getPortfolioProject = (slug: string) => {
  return contentfulClient.getEntries<FeaturedProjectsContentfulResponse>({
    content_type: 'portfolioProject',
    limit: 1,
    locale: 'pl',
    'fields.slug': slug
  })
}
