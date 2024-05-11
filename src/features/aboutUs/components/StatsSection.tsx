import { StatTile } from './StatTile'

export const StatsSection = () => (
  <section class="layout-section !flex-row items-center gap-12 max-md:!flex-col">
    <div class="grid flex-1 grid-cols-2 gap-6 max-sm:grid-cols-1">
      <StatTile
        label="Szczęśliwych klientów"
        value="100%"
      />
      <StatTile
        label="Ukończonych projektów"
        value="40+"
      />
    </div>
    <div class="flex-1 text-white/50">
      <p>
        <strong>Kaes Architekci</strong> to lubelska pracownia architektoniczna
        działająca na rynku krajowym.
        <br />
        <br />
        Zajmujemy się <strong>projektowaniem architektury i wnętrz</strong> o
        różnych funkcjach prywatnych i komercyjnych.
        <br />
        <br />
        Tworzymy <strong>nieszablonowe idee </strong>
        nadające przestrzeni{' '}
        <strong>estetyczny, funkcjonalny i indywidualny charakter</strong>.
        Każdy projekt wykonujemy od podstaw wkładając w to maksimum
        zaangażowania. W procesie projektowym uwzględniamy potrzeby i możliwości
        finansowe inwestora. W etapie projektowym współpracujemy z licznymi
        regionalnymi firmami, podwykonawcami i producentami wspierając przy tym
        lokalne przedsiębiorstwa.
        <br />
        <br />
        <strong>Z miłą chęcią podejmiemy się nowych wyzwań!</strong>
      </p>
    </div>
  </section>
)
