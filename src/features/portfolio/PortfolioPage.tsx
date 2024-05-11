import type { Component } from 'solid-js'
import { HeroSection } from '~/components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'

export const PortfolioPage: Component = () => (
  <>
    <HeroSection
      imgUrl="/images/portfolio/portfolio-hero-bg.webp"
      class="-mx-24 text-balance max-lg:-mx-12 max-md:-mx-6"
    >
      <h2 class="max-w-[700px] text-5xl max-md:text-3xl">
        “Architektura polega na zachowaniu trzech zasad: trwałości, użyteczności
        i piękna.” -Witruwiusz
      </h2>
      <p class="font-secondary max-w-[700px] text-sm font-normal normal-case text-white/50">
        W naszej pracowni każdy projekt jest inny, dostosowany do potrzeb
        odbiorcy. Projektujemy obiekty z myślą o funkcjonalności, a dbałość o
        każdy detal podnosi walory estetyczne kreowanej przestrzeni.
      </p>
    </HeroSection>
    <ProjectsSection />
  </>
)
