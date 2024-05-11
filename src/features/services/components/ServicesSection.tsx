import type { Component } from 'solid-js'
import { Icon } from '~/components/Icon'
import { InternalLink } from '~/config/app'
import { ServiceTile } from '~/features/home'
import {
  ArchitectureSectionId,
  DocumentationSectionId,
  InteriorSectionId
} from '../constants'

const getOfferHashLink = (hash: string) => `${InternalLink.offer}#${hash}`

export const ServicesSection: Component = () => (
  <section class="layout-section text-primary !grid grid-cols-3 justify-center gap-6 max-lg:grid-cols-1 md:!pt-32">
    <ServiceTile
      title="Architektura"
      description="Projektujemy obiekty w każdej skali. Przygotowujemy koncepcje architektoniczne i całe projekty budynków."
      href={getOfferHashLink(ArchitectureSectionId)}
      imgUrl="/images/homepage/services.webp"
    >
      <Icon
        id="architecture-plan"
        class="fill-primary h-16 w-16"
      />
    </ServiceTile>
    <ServiceTile
      title="Wnętrza"
      description="Projektujemy wnętrza prywatne i komercyjne. Współpracujemy z firmami, podwykonawcami i producentami."
      href={getOfferHashLink(InteriorSectionId)}
      imgUrl="/images/homepage/contact.webp"
    >
      <Icon
        id="interior"
        class="fill-primary h-16 w-16"
      />
    </ServiceTile>
    <ServiceTile
      title="Dokumentacja projektowa"
      description="Wykonujemy dokumentacje projektowe dla biur architektonicznych w całym kraju. Wykonujemy dokumentację na każdym etapie projektowym."
      href={getOfferHashLink(DocumentationSectionId)}
      imgUrl="/images/homepage/documentation.webp"
    >
      <Icon
        id="home"
        class="fill-primary h-16 w-16"
      />
    </ServiceTile>
  </section>
)
