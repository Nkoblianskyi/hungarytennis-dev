import type { Metadata } from 'next'
import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Játéktechnika és edzési tanácsok',
  description:
    'Részletes útmutató a nagy tenisz technikájához: ütések, adogatás, mozgás és edzési tanácsok minden szintnek.',
}

const strokes = [
  {
    name: 'Tenyeres',
    category: 'Alapütés',
    description:
      'A tenyeres a tenisz legerősebb és leggyakrabban használt ütése. Az irányítókézzel hajtják végre a jobb oldalon (jobbkezesek esetén). A modern tenyeres jelentős topspint alkalmaz, amely kontrollt és aktív pattanást biztosít.',
    tips: [
      'Korai vállforgatással kezdje az előkészítést',
      'A szabad kezet tartsa az egyensúly érdekében',
      'A csukló a labda fölött gurul az érintés pillanatában',
      'A lendületet a vállán fejezze be',
    ],
  },
  {
    name: 'Fonák',
    category: 'Alapütés',
    description:
      'A fonákot a bal oldalon hajtják végre (jobbkezesek esetén). Létezik egykezes és kétkezes változata. A kétkezes fonák stabilabb és erősebb, az egykezes változatosabb és jobb szeletet tesz lehetővé.',
    tips: [
      'Kétkezes esetén a bal kéz adja az erőt',
      'Enyhén hajlított térdek az előkészítésnél',
      'Az érintés a test előtt történik',
      'A lábak helyes pozíciója meghatározza a pontosságot',
    ],
  },
  {
    name: 'Adogatás',
    category: 'Labda beadása',
    description:
      'Az adogatás az egyetlen elem a mérkőzésben, ahol a játékos teljesen uralja a helyzetet. Megkülönböztetünk sima (gyors), kick és szelet adogatást. Mindegyiknek megvannak a maga taktikai előnyei a helyzettől és az ellenfélől függően.',
    tips: [
      'A stabil labdafeldobás kulcsfontosságú',
      'Az ütő teljes mozgása felfelé és előre',
      'Testsúlyátvitel az ütés pillanatában',
      'Az adogatás változatossága dezorientálja az ellenfelet',
    ],
  },
  {
    name: 'Röptézés',
    category: 'Hálónál való játék',
    description:
      'A röptét a hálónál hajtják végre, a labda pattanása nélkül. Gyors reakciót és határozott technikát igényel. Az agresszív röpte lezárja a labdamenetet, a védelmi röpte visszajuttatja a nehéz labdákat.',
    tips: [
      'Az ütőt maga előtt tartsa készenléti pozícióban',
      'Minimális lendület — csupán "helyezze el" a labdát',
      'Fokozatosan közelítsen a hálóhoz',
      'Nézzen a labdára az utolsó pillanatig',
    ],
  },
  {
    name: 'Smash',
    category: 'Támadó ütés',
    description:
      'A smash a fej fölötti ütés, amellyel a labdamenetet az ellenfél felső labdájakor fejezik be. Technikailag hasonló az adogatáshoz, de mozgás közben és labdafeldobás nélkül hajtják végre.',
    tips: [
      'Forduljon oldalt a lehető legkorábban',
      'A szabad kézzel mutasson a labdára a célzáshoz',
      'A legmagasabb ponton üssön',
      'Végrehajtás közben ne dőljön hátra',
    ],
  },
  {
    name: 'Szelet és csepp',
    category: 'Változatosság',
    description:
      'A szelet visszafelé forgó ütemet jelent, amellyel a labda alacsonyan repül és pattanás után is alacsonyan marad. A csepp egy váratlan rövid labda, amely az ellenfelet a hálóhoz vonzza.',
    tips: [
      'Az ütő fentről lefelé mozog szögben',
      'Az ütőlap nyitott érintéskor',
      'Használja a játék ritmusának megváltoztatásához',
      'A csepp hatékony mély ütések sorozata után',
    ],
  },
]

const movementTips = [
  {
    title: 'Kiindulóhelyzet',
    body: 'Minden ütés után térjen vissza az alapvonal közepére. Vállszélességű lábállás, enyhén hajlított térdek, a súly az elülső lábfejrészen — így készen áll bármely irányba mozdulni.',
  },
  {
    title: 'Hasított lépés',
    body: 'Az ellenfél ütésének pillanatában tegyen egy kis hasítást — mindkét lábra egyszerre ugorjon. Ez aktiválja az izmokat és lerövidíti a reakcióidőt a következő labdára.',
  },
  {
    title: 'Keresztező lépés',
    body: 'Hosszú labdáknál használjon keresztező lépést (lábak keresztezése oldalirányú mozgásnál). Ez gyorsabb az összetevő lépésnél nagy távolságokon.',
  },
  {
    title: 'Pozíció visszaszerzése',
    body: 'Az ütés után azonnal kezdje meg a mozgást vissza a közép felé. Ne maradjon a helyén az ütés végrehajtása után — ez a mozgás gyakran a megnyert és elveszített pont közötti különbség.',
  },
]

export default function TechniquePage() {
  return (
    <>
      <PageHero
        eyebrow="Mesterség"
        title="Játéktechnika"
        subtitle="és edzés"
        description="Részletes útmutató a tenisztechnika minden aspektusához — az alapütésektől a pályán való mozgás taktikájáig."
        image="/images/technique-tennis.jpg"
        imageAlt="Teniszütő és labda közelről egy teniszpályán"
      />

      {/* Strokes */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="font-sans text-xs uppercase tracking-widest text-sage mb-3 font-medium">Ütések</p>
            <h2 className="font-serif text-4xl text-charcoal font-light text-balance">Technikai alapelemek</h2>
          </div>

          <div className="flex flex-col gap-0">
            {strokes.map((stroke, idx) => (
              <article
                key={stroke.name}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 py-12 border-b border-border last:border-0 items-start"
              >
                <div className="lg:col-span-1 flex lg:flex-col gap-4 lg:gap-2 items-baseline lg:items-start">
                  <span className="font-sans text-4xl font-light text-border">0{idx + 1}</span>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-clay font-medium">{stroke.category}</p>
                    <h3 className="font-serif text-2xl text-charcoal font-medium">{stroke.name}</h3>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty">
                    {stroke.description}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <p className="font-sans text-xs uppercase tracking-widest text-sage mb-3 font-medium">Kulcsmozzanatok</p>
                  <ul className="flex flex-col gap-2.5">
                    {stroke.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-3">
                        <span className="w-4 h-px bg-clay mt-2.5 shrink-0" />
                        <span className="font-sans text-sm text-muted-foreground leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Movement */}
      <section className="py-20 lg:py-28 bg-forest">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-widest text-clay mb-3 font-medium">Mozgás</p>
            <h2 className="font-serif text-4xl text-cream font-light text-balance">Mozgás a pályán</h2>
            <p className="font-sans text-base text-cream/60 mt-4 max-w-xl mx-auto text-pretty">
              A megfelelő mozgás az alap, amely nélkül még a legjobb ütéstechnika sem hozza meg az eredményt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {movementTips.map((tip) => (
              <div key={tip.title} className="bg-charcoal/25 p-8">
                <h3 className="font-serif text-xl text-cream font-medium mb-3">{tip.title}</h3>
                <p className="font-sans text-sm text-cream/60 leading-relaxed text-pretty">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training structure */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-widest text-sage mb-3 font-medium">Edzés</p>
            <h2 className="font-serif text-4xl text-charcoal font-light text-balance">Az edzésszakasz felépítése</h2>
          </div>
          <div className="flex flex-col gap-0">
            {[
              { time: '10 perc', phase: 'Bemelegítés', desc: 'Könnyű futás, nyújtás, néhány egyszerű ütés nyomás nélkül.' },
              { time: '20 perc', phase: 'Technikai munka', desc: 'Fókusz egy konkrét elemre: adogatás, tenyeres vagy fonák.' },
              { time: '20 perc', phase: 'Páros gyakorlás', desc: 'Labdamenetek partnerrel előre meghatározott taktikai feladattal.' },
              { time: '15 perc', phase: 'Játékhelyzetek', desc: 'Rövidített meccs vagy rövidítés a koncentráció fejlesztéséhez.' },
              { time: '5 perc', phase: 'Levezetés és nyújtás', desc: 'Gyengéd nyújtás az igénybe vett izomcsoportoknak a sérülések megelőzéséért.' },
            ].map((item, i) => (
              <div key={item.phase} className="flex gap-8 py-6 border-b border-border last:border-0 items-start">
                <span className="font-serif text-3xl text-border font-light w-16 shrink-0 pt-1">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 flex-1 items-start">
                  <div className="shrink-0">
                    <p className="font-sans text-xs uppercase tracking-widest text-clay font-medium">{item.time}</p>
                    <p className="font-serif text-xl text-charcoal font-medium">{item.phase}</p>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty pt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
