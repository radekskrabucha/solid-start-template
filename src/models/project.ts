export type Project = {
  title: string
  tag: string
  imageUrl: string
  href: string
  details: {
    type: 'RichText'
  }
}

export type FeaturedProject = Pick<
  Project,
  'title' | 'tag' | 'imageUrl' | 'href'
>
