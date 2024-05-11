import type { Component } from 'solid-js'
import { buttonVariants } from '~/components/Button'
import { Image } from '~/components/Image'
import { Link } from '~/components/Link'
import { InternalLink } from '~/config/app'

export const HeroSection: Component = () => (
  <section class="bg-background flex max-h-[calc(100dvh-66px)] w-full flex-1 flex-col max-md:min-h-dvh">
    <div class="relative ml-24 flex min-h-dvh flex-col max-lg:ml-10 max-md:ml-0 max-md:min-h-dvh">
      <Image
        src="/images/homepage/home-hero.webp"
        class="absolute inset-0 h-full w-full bg-black/50 object-cover object-center"
      />

      <div class="z-[1] flex flex-1 flex-col bg-black/50">
        <div class="layout-section flex-1 justify-center gap-6">
          <h2 class="font-main text-6xl font-bold max-lg:text-5xl max-md:text-4xl">
            Architektura | Wnętrza | Design
          </h2>
          <p class="max-w-xl">
            Projektujemy architekturę i wnętrza. Tworzymy nieszablonowe idee
            nadające przestrzeni estetyczny, funkcjonalny i indywidualny
            charakter.
          </p>
          <Link
            href={InternalLink.portfolio}
            class={buttonVariants({ class: 'max-w-44' })}
          >
            Zobacz portfolio
          </Link>
        </div>
      </div>
    </div>
  </section>
)
