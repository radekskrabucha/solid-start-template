import type { Component } from 'solid-js'
import { HeroSection } from '~/components/HeroSection'
import { CeoSection } from '~/features/home'
import { ServicesSection } from './components/ServicesSection'
import { StatsSection } from './components/StatsSection'

export const AboutUsPage: Component = () => (
  <>
    <HeroSection imgUrl="/images/about-us/about-us.webp">
      Poznajmy się
    </HeroSection>
    <StatsSection />
    <ServicesSection />
    <CeoSection />
  </>
)
