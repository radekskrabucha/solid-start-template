import type { Component } from 'solid-js'
import { Icon } from '~/components/Icon'
import { InternalLink } from '~/config/app'
import { ServiceTile } from '~/features/home'

export const ServicesSection: Component = () => (
  <section class="layout-section items-center gap-16">
    <h2 class="font-main text-4xl font-bold capitalize">
      Zajmujemy się projektowaniem
    </h2>
    <div class="grid grid-cols-3 justify-center gap-6 max-lg:grid-cols-1">
      <ServiceTile
        title="Architektura"
        description="Projektujemy obiekty w każdej skali. Przygotowujemy koncepcje architektoniczne i całe projekty budynków."
        href={InternalLink.offer}
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
        href={InternalLink.offer}
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
        href={InternalLink.offer}
        imgUrl="/images/homepage/documentation.webp"
      >
        <Icon
          id="home"
          class="fill-primary h-16 w-16"
        />
      </ServiceTile>
    </div>
  </section>
)
