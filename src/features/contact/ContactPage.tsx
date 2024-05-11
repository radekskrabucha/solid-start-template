import type { Component } from 'solid-js'
import { HeroSection } from '~/components/HeroSection'
import { ContactFormSection } from './components/ContactFormSection'
import { ContactInformationSection } from './components/ContactInformationSection'

export const ContactPage: Component = () => (
  <>
    <HeroSection imgUrl="/images/contact/contact.webp">
      Skontaktuj się z nami!
    </HeroSection>
    <ContactInformationSection />
    <ContactFormSection />
  </>
)
