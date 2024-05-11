import type { Component } from 'solid-js'
import { AboutUsSection } from './components/AboutUsSection'
import { CeoSection } from './components/CeoSection'
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'

export const HomePage: Component = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <FeaturedProjectsSection />
    <AboutUsSection />
    <CeoSection />
  </>
)
