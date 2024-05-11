import { Link } from '~/components/Link'
import { InternalLink } from '~/config/app'
import { InteriorSectionId } from '../constants'
import { OfferTable } from './OfferTable'
import { SectionHero } from './SectionHero'

export const InteriorSection = () => (
  <section
    class="layout-section !max-w-6xl items-center gap-12 text-balance text-center"
    id={InteriorSectionId}
  >
    <SectionHero
      title="Oferta projektowa wnętrza"
      imageLabel="wnętrza"
      imgUrl="/images/homepage/contact.webp"
      isOdd
    >
      Projektujemy wnętrza prywatne i komercyjne. W projektowaniu kierujemy się
      współczesnymi, trendami, przejrzystymi rozwiązaniami i nowatorskimi
      pomysłami.
    </SectionHero>
    <OfferTable />

    <h3 class="font-main text-xl font-medium">
      Szczegółowa oferta przygotowywana jest indywidualnie na podstawie rozmowy
      z inwestorem oraz analizie obszaru inwestycji.
    </h3>

    <div class="flex flex-col gap-6">
      <h4 class="font-main text-primary text-lg font-medium capitalize">
        Warto wiedzieć
      </h4>
      <p class="text-white/50">
        Przyjmujemy zlecenia na projekty całej przestrzeni budynków prywatnych i
        komercyjnych, ale również zlecenia polegające na zaprojektowaniu
        poszczególnych pomieszczeń.
      </p>
    </div>

    <div class="flex flex-col gap-6">
      <h4 class="font-main text-primary text-lg font-medium capitalize">
        Współpracujemy on-line
      </h4>
      <p class="text-white/50">
        Możesz zgłosić się do nas po projekt niezależnie od tego, w którym
        miejscu się znajdujesz. Działamy w całej Polsce. W celu zapoznania się
        ze szczegółowymi informacjami zapraszamy do kontaktu.
      </p>
    </div>

    <h3 class="font-main text-xl font-medium">
      Jak wyglądają poszczególne elementy projektu wnętrz?
    </h3>

    <div class="flex flex-col gap-6">
      <h4 class="font-main text-primary text-lg font-medium capitalize">
        Moodboardy
      </h4>
      <p class="text-white/50">
        Zawierają różne zestawienia proponowanych kolorów, mebli i materiałów,
        które mogą zostać użyte w projekcie. Ułatwia to podjęcie decyzji we
        wstępnej fazie projektu i pokazuje dalszy kierunek projektu.
      </p>
    </div>

    <div class="flex flex-col gap-6">
      <h4 class="font-main text-primary text-lg font-medium capitalize">
        Aranżacje przestrzeni
      </h4>
      <p class="text-white/50">
        Rysunki linearne 2d, podobne do rzutów proponowanych przez deweloperów,
        ale bardziej szczegółowe. Pokazują w skali rozmieszczenie mebli oraz
        wyposażenia, zwykle w 3-4 wariantach.
      </p>
    </div>

    <div class="flex flex-col gap-6">
      <h4 class="font-main text-primary text-lg font-medium capitalize">
        Wizualizacje
      </h4>
      <p class="text-white/50">
        Komputerowo generowane obrazy, które mają pokazać ogólny koncept
        projektowy w sposób imitujący zdjęcia przyszłej realizacji. Wizualizacje
        obrazują pomysły na wnętrze, jego kolorystykę, wybrane materiały, meble
        oraz oświetlenie.
      </p>
    </div>

    <div class="flex flex-col gap-6">
      <h4 class="font-main text-primary text-lg font-medium capitalize">
        Rysunki wykonawcze
      </h4>
      <p class="text-white/50">
        Rysunki techniczne / wykonawcze to płaskie rysunki 2d, które mają za
        zadanie doprecyzować informacje zawarte na wizualizacjach. W ich ramach
        powstają dokładne projekty m.in. elektryki, układu sztukaterii ściennej
        czy mebli na zamówienie.
      </p>
    </div>

    <div class="flex flex-col gap-6">
      <h4 class="font-main text-primary text-lg font-medium capitalize">
        Lista wyposażenia
      </h4>
      <p class="text-white/50">
        Zwana też specyfikacją. Jest to długa tabela zawierająca listę produktów
        i materiałów, które Architekt poleca Inwestorowi do kupienia, by
        zrealizować projekt.
      </p>
    </div>

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
