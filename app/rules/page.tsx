import type { Metadata } from 'next'
import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Játékszabályok és tornák formátumai',
  description:
    'A nagy tenisz alapszabályai, a pontszámítási rendszer és a népszerű versenyformátumok.',
}

const scoringRules = [
  {
    term: 'Gém',
    def: 'A legkisebb pontszámítási egység. A pontokat így számolják: 0, 15, 30, 40, gém. 40:40-es egyenlőségnél "deuce" van, és a nyeréshez két egymást követő pontot kell megszerezni.',
  },
  {
    term: 'Szett',
    def: 'Az a játékos nyeri a szettet, aki először nyer 6 gémet legalább 2-es előnnyel. 6:6-os állásnál általában rövidítést (tie-break) játszanak 7 pontig, 2 pontos előnnyel.',
  },
  {
    term: 'Mérkőzés',
    def: 'A legtöbb mérkőzést 2 nyert szett 3-ból (három szettig) vagy 3 nyert szett 5-ből (a legfontosabb versenyeken) formátumban játsszák. A mérkőzés győztese az, aki először éri el a szükséges szettszámot.',
  },
  {
    term: 'Tie-break',
    def: 'Rövidítés 6:6-os szettállásnál. A játékosok felváltva adogatnak (először 1, majd 2 adogatás). Az nyeri, aki először éri el a 7 pontot legalább 2-es előnnyel. Egyes tornákon a döntő szettben 10 pontig tartó match tie-break-et alkalmaznak.',
  },
]

const courtTypes = [
  {
    type: 'Salakpálya',
    desc: 'Lassú borítás, a labda lassan és magasan pattan. Fizikai állóképességet és türelmet igényel. Magyarország legelterjedtebb pályatípusa.',
    traits: ['Lassú játék', 'Taktikai labdamenetek', 'Csúszásvédelem'],
  },
  {
    type: 'Keménypálya',
    desc: 'Közepes játéksebesség, egyenletes és kiszámítható pattanás. A legtöbb fedett pálya és teniszközpont ezt a típust alkalmazza.',
    traits: ['Stabil pattanás', 'Minden stílusnak megfelelő', 'Egész éves játék'],
  },
  {
    type: 'Füves pálya',
    desc: 'A leggyorsabb borítástípus, alacsony pattanással. Különleges mozgástechnikát és agresszívabb játékstílust igényel. Magyarországon ritka.',
    traits: ['Gyors játék', 'Alacsony pattanás', 'Szezonális használat'],
  },
  {
    type: 'Szintetikus pálya',
    desc: 'Fedett létesítményekben elterjedt megoldás. Egyenletes felület stabil játékjellemzőkkel, az időjárástól függetlenül.',
    traits: ['Egész éves játék', 'Minimális karbantartás', 'Stabil körülmények'],
  },
]

const formats = [
  {
    name: 'Kieséses rendszer',
    description: 'Minden vereség kizárja a játékost a tornáról. A nagy versenyek legelterjedtebb formátuma.',
    pros: ['Nagy tét minden mérkőzésen', 'Hatékony lebonyolítás sok résztvevővel'],
    cons: ['Egy gyenge mérkőzés és kiesés', 'Kevesebb játékidő minden résztvevőnek'],
  },
  {
    name: 'Körmérkőzéses rendszer',
    description: 'Mindenki játszik mindenki ellen. Az eredmények alapján pontokat számolnak és meghatározzák a döntősöket.',
    pros: ['Igazságosabb eredmény', 'Több mérkőzés minden résztvevőnek'],
    cons: ['Több időt igényel', 'Szervezetileg összetettebb'],
  },
  {
    name: 'Csapatformátum',
    description: 'Csapatok közötti versengés. Az a csapat nyeri a mérkőzést, amelynek játékosai összességében több mérkőzést nyertek.',
    pros: ['Csapatszellem és támogatás', 'Változatos párharcok egy rendezvényen'],
    cons: ['Összetett összeállítás és sorrendmeghatározás', 'Az eredmény több játékostól függ'],
  },
]

export default function RulesPage() {
  return (
    <>
      <PageHero
        eyebrow="Szabályok"
        title="Játékszabályok"
        subtitle="és versenyformátumok"
        description="A pontszámítástól a pályatípusokon át a versenyformátumokig — minden, amit a nagy tenisz megértéséhez tudni kell."
        image="/images/hero-tennis.jpg"
        imageAlt="Teniszpálya madártávlatból"
      />

      {/* Scoring */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-widest text-sage mb-3 font-medium">Alapok</p>
            <h2 className="font-serif text-4xl text-charcoal font-light text-balance">Pontszámítási rendszer</h2>
          </div>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scoringRules.map((item) => (
              <div key={item.term} className="border-l-2 border-clay pl-6 py-2">
                <dt className="font-serif text-xl text-charcoal font-medium mb-2">{item.term}</dt>
                <dd className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty">{item.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Court types */}
      <section className="py-20 lg:py-28 bg-forest">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-widest text-clay mb-3 font-medium">Borítástípusok</p>
            <h2 className="font-serif text-4xl text-cream font-light text-balance">A teniszpályák típusai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courtTypes.map((c) => (
              <div key={c.type} className="bg-charcoal/30 p-8">
                <h3 className="font-serif text-xl text-cream font-medium mb-3">{c.type}</h3>
                <p className="font-sans text-sm text-cream/60 leading-relaxed mb-5 text-pretty">{c.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {c.traits.map((t) => (
                    <li key={t} className="font-sans text-xs text-clay border border-clay/30 px-3 py-1">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament formats */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-widest text-sage mb-3 font-medium">Formátumok</p>
            <h2 className="font-serif text-4xl text-charcoal font-light text-balance">Versenyformátumok</h2>
          </div>
          <div className="flex flex-col gap-8">
            {formats.map((f, idx) => (
              <div key={f.name} className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start py-8 border-b border-border last:border-0">
                <div className="lg:col-span-1">
                  <span className="font-sans text-xs text-muted-foreground mb-1 block">0{idx + 1}</span>
                  <h3 className="font-serif text-2xl text-charcoal font-medium">{f.name}</h3>
                </div>
                <div className="lg:col-span-2">
                  <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5 text-pretty">{f.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-xs uppercase tracking-widest text-sage mb-2 font-medium">Előnyök</p>
                      <ul className="flex flex-col gap-1.5">
                        {f.pros.map((p) => (
                          <li key={p} className="font-sans text-sm text-muted-foreground flex gap-2">
                            <span className="w-3 h-px bg-sage mt-2.5 shrink-0" />{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-widest text-clay mb-2 font-medium">Nehézségek</p>
                      <ul className="flex flex-col gap-1.5">
                        {f.cons.map((c) => (
                          <li key={c} className="font-sans text-sm text-muted-foreground flex gap-2">
                            <span className="w-3 h-px bg-clay mt-2.5 shrink-0" />{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
