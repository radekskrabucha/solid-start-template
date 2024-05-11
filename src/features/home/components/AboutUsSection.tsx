import type { Component } from 'solid-js'
import { buttonVariants } from '~/components/Button'
import { Image } from '~/components/Image'
import { Link } from '~/components/Link'
import { AppNameFull, InternalLink } from '~/config/app'
import { AboutStatTile } from './AboutStatTile'

export const AboutUsSection: Component = () => (
  <section class="layout-section !grid grid-cols-2 items-center gap-20 max-lg:grid-cols-1">
    <div class="flex flex-col gap-6">
      <h3 class="text-primary  text-lg uppercase leading-normal tracking-[10px]">
        o nas
      </h3>
      <h2 class="font-main text-3xl font-bold capitalize">nasze biuro</h2>
      <p class="text-balance text-white/50">
        <strong>{AppNameFull}</strong> to lubelska pracownia architektoniczna
        działająca na rynku krajowym.
        <br />
        <br />
        Zajmujemy się <strong>projektowaniem architektury i wnętrz</strong> o
        różnych funkcjach prywatnych i komercyjnych.
        <br />
        <br />
        Tworzymy <strong>nieszablonowe idee</strong> nadające przestrzeni
        <strong> estetyczny, funkcjonalny i indywidualny charakter</strong>.
        Każdy projekt wykonujemy od podstaw wkładając w to maksimum
        zaangażowania. W procesie projektowym uwzględniamy
        <strong> indywidualnie potrzeby odbiorcy</strong>. Dbamy o to, by
        funkcjonalność i piękno budziły satysfakcję przez długie lata.
      </p>
      <Link
        class={buttonVariants({ class: 'max-w-44' })}
        href={InternalLink.about}
      >
        zobacz więcej
      </Link>
    </div>

    <div class="relative flex aspect-[14/10] h-full w-full flex-1 max-md:h-auto max-sm:aspect-[12/10]">
      <div class="dotted-bg absolute -top-10 left-10 h-full w-full" />
      <Image
        src="/images/homepage/home-about.webp"
        class="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div class="absolute -bottom-10 -left-10 grid grid-cols-2 gap-4 max-lg:-bottom-4 max-lg:-left-4 max-sm:-bottom-3 max-sm:-left-3">
        <AboutStatTile
          label="Szczęśliwych klientów"
          value="100%"
          class="bg-primary text-black"
        />
        <AboutStatTile
          label="Ukończonych projektów"
          value="40+"
          class="bg-background text-white"
        />
      </div>
    </div>
  </section>
)
