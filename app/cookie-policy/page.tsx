import type { Metadata } from 'next'
import PolicyLayout from '@/components/layout/PolicyLayout'

export const metadata: Metadata = {
  title: 'Cookie-szabályzat',
  description: 'Információ a cookie-k használatáról a hungarytennis.com weboldalon.',
}

export default function CookiePolicyPage() {
  const updated = new Date().toLocaleDateString('hu-HU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <PolicyLayout title="Cookie-szabályzat" updated={updated}>
      <h2>1. Mik azok a cookie-k</h2>
      <p>
        A cookie-k kis szövegfájlok, amelyek a böngészőjében tárolódnak a weboldalak látogatásakor.
        Lehetővé teszik a weboldalak számára, hogy emlékezzenek az Ön tevékenységeire és
        beállításaira egy adott időtartamra, ezáltal kényelmesebb böngészési élményt nyújtva.
      </p>

      <h2>2. Milyen cookie-kat használunk</h2>
      <p>A hungarytennis.com weboldal a következő cookie-kategóriákat alkalmazza:</p>

      <h3>Szükséges cookie-k</h3>
      <p>
        Ezek a fájlok elengedhetetlenek a weboldal megfelelő működéséhez. Nem gyűjtenek személyes
        adatokat, és nem kapcsolhatók ki. Ezek közé tartozik a cookie-beállítási döntését tároló fájl.
      </p>

      <h3>Analitikai cookie-k</h3>
      <p>
        Ezek a fájlok segítenek megérteni, hogyan használják a látogatók az oldalt. Az összes
        összegyűjtött információ anonim és összesített. Kizárólag a tartalom minőségének és a
        navigáció egyszerűsítésének javítására használjuk.
      </p>

      <h2>3. Cookie-beállítások kezelése</h2>
      <p>
        Bármikor megváltoztathatja cookie-beállításait. Ezt közvetlenül böngészője beállításain
        keresztül teheti meg. A szükséges cookie-k kikapcsolása befolyásolhatja az oldal egyes
        funkcióinak megfelelő működését.
      </p>
      <p>
        A legtöbb modern böngésző lehetőséget biztosít a cookie-k megtekintésére, blokkolására
        vagy törlésére a beállítások menüjén keresztül. A részletes útmutatóért tekintse meg
        böngészője dokumentációját.
      </p>

      <h2>4. Harmadik fél cookie-jai</h2>
      <p>
        Weboldalunk egyes funkciói harmadik fél szolgáltatásainak cookie-jait használhatják
        (például analitikai platformok). Ezeknek a szolgáltatóknak saját adatvédelmi szabályzataik
        vannak, amelyekre nincs befolyásunk.
      </p>

      <h2>5. A szabályzat módosítása</h2>
      <p>
        Fenntartjuk a jogot, hogy módosítsuk ezt a Cookie-szabályzatot. A hatályos verzió mindig
        ezen az oldalon érhető el. A frissítés dátuma automatikusan kerül feltüntetésre.
      </p>

      <h2>6. Kapcsolat</h2>
      <p>
        Ha kérdése van a cookie-k használatával kapcsolatban, kérjük, lépjen kapcsolatba velünk:{' '}
        <a href="mailto:info@hungarytennis.com" className="text-primary hover:underline">
          info@hungarytennis.com
        </a>
        .
      </p>
    </PolicyLayout>
  )
}
