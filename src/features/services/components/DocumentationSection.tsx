import { Link } from '~/components/Link'
import { InternalLink } from '~/config/app'
import { DocumentationSectionId } from '../constants'
import { SectionHero } from './SectionHero'

export const DocumentationSection = () => (
  <section
    class="layout-section !max-w-6xl items-center gap-12 text-balance text-center"
    id={DocumentationSectionId}
  >
    <SectionHero
      title="Oferta dokumentacja projektowa"
      imageLabel="dokumentacja"
      imgUrl="/images/homepage/documentation.webp"
    >
      W zakresie usług oferowanych przez nasze biuro znajduje się wsparcie
      techniczne w procesie projektowym dla biur o dużej wydajności. Oferujemy
      pomoc w procesie projektowym na etapie inwentaryzacji, koncepcji,
      projekcie budowlanym, technicznym oraz wykonawczym.
    </SectionHero>
    <p class="text-white/50">
      Gwarantujemy kompleksowe i rzetelne opracowanie dokumentacji projektowej
      branży architektury i wnętrz. Wykonujemy modele 3D oraz tworzymy
      fotorealistyczne wizualizację.
    </p>
    <h3 class="font-main text-xl font-medium">
      W celu zapoznania się ze szczegółową ofertą{' '}
      <Link
        href={InternalLink.contact}
        class="underline"
      >
        skontaktuj się z nami!{' '}
      </Link>
    </h3>
  </section>
)
