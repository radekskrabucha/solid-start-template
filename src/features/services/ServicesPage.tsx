import type { Component } from 'solid-js'
import { HeroSection } from '~/components/HeroSection'
import { ArchitectureSection } from './components/ArchitectureSection'
import { DocumentationSection } from './components/DocumentationSection'
import { InteriorSection } from './components/InteriorSection'
import { ServicesSection } from './components/ServicesSection'

export const ServicesPage: Component = () => (
  <>
    <HeroSection imgUrl="/images/services/services-hero.webp">
      Nasza oferta
    </HeroSection>
    <ServicesSection />
    <ArchitectureSection />
    <InteriorSection />
    <DocumentationSection />
  </>
)
