import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'A tenisz története Magyarországon',
  description:
    'A magyarországi nagy tenisz teljes története — a XIX. század végi első pályáktól napjainkig.',
}

const timeline = [
  {
    period: '1880-as évek',
    title: 'Az első pályák Budapesten',
    body: 'A tenisz a XIX. század végén jelent meg Magyarországon, a brit szabadidős sportok iránti lelkesedés hullámával együtt. Az első pályákat Budapesten, magánbirtokokon és előkelő körökben építették meg. A játék hamarosan a divatos életmód szimbólumává vált az arisztokrácia és az értelmiség körében.',
  },
  {
    period: '1900-as évek',
    title: 'Az első szervezett versenyek',
    body: 'A XX. század elején a tenisz kilépett a szűk körből. Szervezett versenyek kezdtek megjelenni, ahol amatőrök mérhették össze tudásukat. A budapesti parkok és a nyilvánosan elérhető pályák fokozatosan megnyitották a játékot a szélesebb közönség előtt.',
  },
  {
    period: '1920–1940-es évek',
    title: 'Virágzás a két világháború között',
    body: 'A háborúk közötti időszak a magyar tenisz aranykorává vált. A klubkultúra felvirágzott, a játék színvonala jelentősen emelkedett. A magyar teniszezők elkezdtek részt venni nemzetközi versenyeken, és elnyerték az elismerést az ország határain túl is.',
  },
  {
    period: '1950–1970-es évek',
    title: 'A szocialista korszak: tenisz új körülmények között',
    body: 'A szocialista rendszer körülményei között a tenisz sportként tovább élt, bár megváltozott formában. A klubstruktúra átalakult, de a tömeges testnevelési programok megalapozták a fiatal sportolók nevelését. Megjelentek az első rendszeres utánpótlásképzési programok.',
  },
  {
    period: '1980-as évek',
    title: 'Reformok és nyitás',
    body: 'A magyar társadalom fokozatos nyitása az 1980-as évek végén a teniszre is kihatott. A nemzetközi kapcsolatok teljes mértékben visszaálltak, a magyar játékosok hozzáférést kaptak a modern edzésmódszerekhez és az európai tornákhoz.',
  },
  {
    period: '1990-es évektől napjainkig',
    title: 'A modern tenisz Magyarországon',
    body: 'A rendszerváltás után a magyar tenisz fejlődésének új szakasza kezdődött. Magán teniszközpontok, fejlett amatőr liga és aktív nemzetközi részvétel — mindezek együtt alkotják a mai teniszmozgalom képét az országban. A tenisz a különböző korcsoportok körében az egyik legnépszerűbb sport maradt.',
  },
]

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Fejezet"
        title="A tenisz"
        subtitle="Magyarországon"
        description="Több mint száz év hagyomány, szenvedély és mesterség a pályákon Budapesttől az ország legkisebb városaiig."
        image="/images/history-tennis.jpg"
        imageAlt="Vintage fénykép egy klasszikus teniszpályáról a 20. század elejéről"
      />

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-lg text-muted-foreground leading-relaxed text-pretty mb-6">
            Magyarország azon országok közé tartozik, ahol a tenisz nem csupán sport, hanem saját identitással rendelkező kulturális jelenség. Az elegáns pályáktól a Duna partján a modern fedett centrekig — ez a játék mindig megtalálta rajongóit.
          </p>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed text-pretty">
            Több mint száz éven át a magyar tenisz felemelkedéseket és hanyatlásokat élt meg, alkalmazkodott a különböző társadalmi feltételekhez, és megőrizte lényegét minden változáson keresztül.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-background" aria-label="A tenisz fejlődésének idővonala">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="font-sans text-xs uppercase tracking-widest text-sage mb-3 font-medium">
              Kronológia
            </p>
            <h2 className="font-serif text-4xl text-charcoal font-light text-balance">
              A fejlődés főbb mérföldkövei
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            <div className="flex flex-col gap-16">
              {timeline.map((item, idx) => (
                <div
                  key={item.period}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start ${
                    idx % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'
                  }`}
                >
                  <div className={idx % 2 === 0 ? 'md:text-right' : ''}>
                    <span className="inline-block font-sans text-xs uppercase tracking-widest text-clay font-medium mb-2">
                      {item.period}
                    </span>
                    <h3 className="font-serif text-2xl text-charcoal font-medium mb-3 text-balance">
                      {item.title}
                    </h3>
                    <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty">
                      {item.body}
                    </p>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-clay ring-4 ring-background" />
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing image */}
      <section className="relative h-72 lg:h-96 overflow-hidden">
        <Image
          src="/images/hero-tennis.jpg"
          alt="Teniszpálya Magyarországon ma"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
          <blockquote className="text-center max-w-xl px-6">
            <p className="font-serif text-2xl lg:text-3xl text-cream font-light italic text-balance">
              &ldquo;A tenisz Magyarországon több mint sport. Kulturális örökségünk szerves része.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>
    </>
  )
}
