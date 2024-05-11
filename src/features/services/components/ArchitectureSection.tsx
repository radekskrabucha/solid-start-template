import { Link } from '~/components/Link'
import { InternalLink } from '~/config/app'
import { ArchitectureSectionId } from '../constants'
import { SectionHero } from './SectionHero'

export const ArchitectureSection = () => (
  <section
    class="layout-section !max-w-6xl items-center gap-12 text-balance text-center"
    id={ArchitectureSectionId}
  >
    <SectionHero
      title="Oferta projektowa architektura"
      imageLabel="architektura"
      imgUrl="/images/homepage/services.webp"
    >
      Projektujemy architekturę o <strong>różnorodnej funkcji i skali</strong>,
      w tym różnego rodzaju remonty, przebudowy i rozbudowy budynków. Kierujemy
      się współczesnymi trendami, przejrzystymi rozwiązaniami i nowatorskimi
      pomysłami.
      <br />
      <br />
      Każdy z naszych projektów oparty jest na dogłębnej analizie sytuacji wokół
      terenu inwestycji. Bazując na rozmowach z inwestorem dostosowujemy
      projektowany budynek do jego własnych potrzeb. Analizując kontekst
      miejsca, tworzymy obiekty współgrające z otoczeniem. W naszym procesie
      projektowym inwestycje uzyskują{' '}
      <strong>tożsamość i indywidualny charakter</strong>.
    </SectionHero>
    <h3 class="font-main text-xl font-medium">
      Projektujemy obiekty prywatne i komercyjne
    </h3>
    <p class="text-white/50">
      Projektujemy architekturę o różnorodnej formie i skali, dzięki czemu
      możemy rozwijać się w nowych kierunkach. W pracy kreatywnej doceniamy
      każdy nowy temat!
      <br />
      <br />
      Po dogłębnej analizie i burzy mózgów odnajdujemy pomysł, który
      przekształcamy w kompleksową dokumentację projektową.{' '}
      <strong>
        Szczegółowa oferta przygotowywana jest indywidualnie na podstawie
        rozmowy z inwestorem oraz analizie terenu opracowania
      </strong>
      .
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
