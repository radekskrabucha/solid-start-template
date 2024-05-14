import { Meta, Title } from '@solidjs/meta'
import { Show, type Component } from 'solid-js'
import { AppName } from '~/config/app'
import type { Undefinable } from '~/types/common'

type SeoProps = {
  title: Undefinable<string>
  description?: string
  imageUrl?: string
  siteUrl?: string
}

export const SEO: Component<SeoProps> = props => (
  <>
    <Show
      when={props.title}
      fallback={<Title>{getTitle()}</Title>}
    >
      <SEOTitle title={getTitle(props.title)} />
    </Show>

    <Show when={props.description}>
      <SEODescription description={props.description as string} />
    </Show>

    <Show when={props.imageUrl}>
      <Meta
        name="twitter:card"
        content="summary_large_image"
      />
      <Meta
        name="twitter:image"
        content={props.imageUrl}
      />
      <Meta
        name="og:image"
        content={props.imageUrl}
      />
    </Show>

    <Show when={props.siteUrl}>
      <Meta
        name="twitter:url"
        content={props.siteUrl}
      />
      <Meta
        name="og:url"
        content={props.siteUrl}
      />
    </Show>
  </>
)

type SEOTitleProps = {
  title: string
}
export const SEOTitle: Component<SEOTitleProps> = props => (
  <>
    <Title>{getTitle(props.title)}</Title>
    <Meta
      name="twitter:title"
      content={getTitle(props.title)}
    />
    <Meta
      name="og:title"
      content={getTitle(props.title)}
    />
  </>
)

type SEODescriptionProps = {
  description: string
}
export const SEODescription: Component<SEODescriptionProps> = props => (
  <>
    <Meta
      name="description"
      content={props.description}
    />
    <Meta
      name="twitter:description"
      content={props.description}
    />
    <Meta
      name="og:description"
      content={props.description}
    />
  </>
)

const getTitle = (title?: string) => (title ? `${title} | ${AppName}` : AppName)
