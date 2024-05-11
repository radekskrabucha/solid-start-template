import { OfferTile } from './OfferTile'

export const OfferTable = () => (
  <div class="border-primary grid grid-cols-3 self-stretch border max-lg:grid-cols-1">
    <OfferTile price="60-120 zł/m2">
      <h3 class="font-main min-h-24 text-xl font-medium capitalize max-lg:min-h-auto">
        Projekt koncepcyjny
      </h3>
      <ul class="list-disc space-y-1 text-left text-white/50">
        <li>2-3 aranżacje danej przestrzeni</li>
        <li>moodboard z inspiracjami</li>
        <li>wizualizacja 3D (możliwość 1-krotnego wprowadzenia poprawek)</li>
        <li>
          podstawowe propozycje materiałowe wraz z opisem założeń projektowych
        </li>
      </ul>
    </OfferTile>
    <OfferTile price="120-200 zł/m2">
      <h3 class="font-main min-h-24 text-xl font-medium capitalize max-lg:min-h-auto">
        Projekt kompleksowy
      </h3>
      <ul class="list-disc space-y-1 text-left text-white/50">
        <li>5 aranżacji danej przestrzeni</li>
        <li>moodboard z inspiracjami</li>
        <li>wizualizacja 3D (możliwość 3-krotnego wprowadzenia poprawek)</li>
        <li>lista wyposażenia</li>
        <li>szczegółowe rysunki wykonawcze</li>
        <li>wizyta na budowie raz w tygodniu</li>
        <li>osobista pomoc przy wyborze materiałów wykończeniowych</li>
      </ul>
      <h4 class="text-primary font-medium">
        Najczęstszy wybór naszych klientów!
      </h4>
    </OfferTile>
    <OfferTile price="od 250 zł/m2">
      <div class="min-h-24 max-lg:min-h-auto">
        <h3 class="font-main text-xl font-medium capitalize">
          Projekt kompleksowy z nadzorem
        </h3>
        <span>(Okolice Warszawy i Lublina)</span>
      </div>
      <ul class="list-disc space-y-1 text-left text-white/50">
        <li>2-3 aranżacje danej przestrzeni</li>
        <li>moodboard z inspiracjami</li>
        <li>wizualizacja 3D (możliwość 1-krotnego wprowadzenia poprawek)</li>
        <li>
          podstawowe propozycje materiałowe wraz z opisem założeń projektowych
        </li>
      </ul>
    </OfferTile>
  </div>
)
