import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Teniszfelszerelés és kellékek',
  description:
    'Minden a teniszfelszerelésről: ütők, labdák, pályák, cipők és egyéb játékhoz szükséges eszközök.',
}

const categories = [
  {
    title: 'Ütő',
    description:
      'A teniszező alapeszköze. Az ütő kiválasztásakor vegye figyelembe a fej méretét, súlyát, egyensúlyát és a keret anyagát. Kezdőknek nagyobb húrozott felületű ütők ajánlottak, amelyek megnövelik a hibatűrő zónát. A haladók kisebb fejű ütőket preferálnak a nagyobb pontosság érdekében.',
    specs: ['Fejméret: 95–115 négyzetinch', 'Súly: 260–310 g', 'Hossz: 68,5–73,7 cm', 'Húrfeszítés: 45–65 font'],
  },
  {
    title: 'Labda',
    description:
      'A hivatalos teniszlabdának pontos méret-, súly- és pattanási szabványai vannak. Nyílt pályákon kemény borítású vagy salakos labdákat használnak — ezek a szőrzet sűrűségében különböznek. A versenyeken használt labdákat a nyomás természetes csökkenése miatt rendszeresen cserélik.',
    specs: ['Átmérő: 6,54–6,86 cm', 'Súly: 56–59,4 g', 'Pattanás: 135–147 cm', 'Szín: sárga-zöld (hivatalos)'],
  },
  {
    title: 'Cipő',
    description:
      'A megfelelő teniszcipő kritikus fontosságú az egészség és a játékminőség szempontjából. Minden borítástípushoz külön modell létezik: mintás talpú salakhoz, lapos fűhöz, merev keménypályához. A cipőnek megbízható oldalirányú támaszt kell nyújtania.',
    specs: ['Talp: borításspecifikus', 'Bokatámasz', 'Amortizáció oldalirányú mozgásoknál', 'Könnyűség és szellőzés'],
  },
  {
    title: 'Húrok és feszítés',
    description:
      'A húrok lényegesen befolyásolják az ütő érzetét és a játék jellegét. A monofil húrok kontrollt biztosítanak, a poliészter húrok tartósságot és topspint, a természetes bél a legjobb érzetet. A feszítést a játékstílus és a játékos szintje határozza meg.',
    specs: ['Vastagság: 1,15–1,35 mm', 'Anyag: poliészter, nejlon, természetes bél', 'Feszítés: 22–30 kg', 'Csere: 40–60 játékóra után'],
  },
  {
    title: 'Ruházat és kiegészítők',
    description:
      'A nedvességet elvezető anyagú kényelmes ruházat lehetővé teszi a teljes koncentrációt a játékra. Az ütőmarkolat-pántok jobb fogást biztosítanak. A csuklópánt és a fejpánt véd az izzadástól. A könyök védelmére rugalmas bandázs is ajánlott.',
    specs: ['Anyag: nedvességelvezető poliészter', 'Kötelező: tartást biztosító zokni', 'Ajánlott: markolatpánt', 'Védelem: pántok és bandázsok'],
  },
  {
    title: 'Táska és kiegészítő felszerelés',
    description:
      'A tenisztáskának több ütőt, labdákat, ruházatot és személyes tárgyakat kell befogadnia. A hővédő ütőrekeszek megóvják a húrokat a hőmérséklet-ingadozásoktól. A labdatartó cső fenntartja a nyomást és meghosszabbítja az eltarthatóságot.',
    specs: ['Kapacitás: 6–12 ütő', 'Hővédő rekesz', 'Különálló ruhatár', 'Vízálló anyag'],
  },
]

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Felszerelés"
        title="Teniszeszközök"
        subtitle="és kellékek"
        description="A megfelelően kiválasztott felszerelés az alapja a kényelmes és hatékony pályán töltött játéknak."
        image="/images/equipment-tennis.jpg"
        imageAlt="Teniszfelszerelés: ütő és labdák fából készült felületen"
      />

      {/* Intro */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-lg text-muted-foreground leading-relaxed text-pretty">
            A minőségi felszerelés megválasztása közvetlenül befolyásolja a játék minőségét és az edzések élvezetét. Az alábbiakban bemutatjuk a teniszfelszerelés főbb kategóriáit a legfontosabb jellemzők leírásával.
          </p>
        </div>
      </section>

      {/* Equipment grid */}
      <section className="py-6 pb-24 lg:pb-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {categories.map((cat) => (
              <article key={cat.title} className="bg-cream p-8 lg:p-10 flex flex-col gap-5">
                <h2 className="font-serif text-2xl text-charcoal font-medium">{cat.title}</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty flex-1">
                  {cat.description}
                </p>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-sage mb-3 font-medium">
                    Jellemzők
                  </p>
                  <ul className="flex flex-col gap-2">
                    {cat.specs.map((s) => (
                      <li key={s} className="font-sans text-xs text-muted-foreground flex gap-2 items-start">
                        <span className="w-3 h-px bg-clay mt-2 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tips banner */}
      <section className="bg-forest py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-clay mb-4 font-medium">Tipp</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-cream font-light text-balance mb-6">
            A felszerelés karbantartása
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-left">
            {[
              { title: 'Tárolja megfelelően', body: 'Tartsa az ütőket hővédő táskában, közvetlen napfénytől és szélsőséges hőmérséklettől védve.' },
              { title: 'Cserélje a húrokat', body: 'A húrok rendszeres cseréje 30–50 játékóra után fenntartja az állandó érzetet és megelőzi a sérüléseket.' },
              { title: 'Gondoskodjon a cipőről', body: 'Minden salakos játék után tisztítsa meg a talpat, és cserélje le a cipőt az első kopásjelek megjelenésekor.' },
            ].map((tip) => (
              <div key={tip.title}>
                <h3 className="font-serif text-lg text-cream font-medium mb-2">{tip.title}</h3>
                <p className="font-sans text-sm text-cream/60 leading-relaxed text-pretty">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
