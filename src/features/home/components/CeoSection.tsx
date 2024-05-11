import type { Component } from 'solid-js'
import { Image } from '~/components/Image'
import { AppNameFull } from '~/config/app'

export const CeoSection: Component = () => (
  <section class="layout-section !flex-row items-center gap-16 max-md:!flex-col max-md:gap-10 max-md:text-center">
    <div class="hover:border-primary max-w-sm shrink-0 border border-white p-6 transition-colors max-lg:max-w-80">
      <Image
        src="/images/homepage/konrad-skrabucha.webp"
        class="w-full object-cover object-center"
      />
    </div>
    <p class="max-w-5xl text-balance text-white/50">
      Nazywam się Konrad Skrabucha i jestem założycielem i właścicielem pracowni
      architektonicznej <strong>{AppNameFull}</strong>. Z wykształcenia jestem
      <strong> architektem</strong>, ukończyłem studia wyższe na wydziale
      Budownictwa i Architektury na Politechnice Lubelskiej. Doświadczenie
      zawodowe zdobywam <strong>od 2016</strong> roku pracując w biurach
      projektowych na terenie rodzinnego miasta Lublin oraz współpracując z
      pracowniami m.in. z Warszawy i Poznania. Własną pracownię architektoniczną
      prowadzę
      <strong> nieprzerwanie</strong> od 2022 roku.
    </p>
  </section>
)
