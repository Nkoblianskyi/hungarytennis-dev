import Image from 'next/image'
import Link from 'next/link'

export default function HistoryPreview() {
  return (
    <section className="bg-cream overflow-hidden" aria-label="Történelem előnézet">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Image — full bleed left */}
          <div className="relative h-80 lg:h-auto lg:min-h-[600px] overflow-hidden">
            <Image
              src="/images/history-tennis.jpg"
              alt="Archív fénykép egy 20. századi teniszpályáról Magyarországon"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cream/30 hidden lg:block" />
          </div>

          {/* Text — padded right */}
          <div className="px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-clay" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-sage font-medium">
                Fejezet
              </p>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal font-light leading-tight text-balance mb-8">
              A tenisz<br />
              <span className="text-primary italic">története</span><br />
              Magyarországon
            </h2>

            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4 text-pretty">
              A tenisz a XIX. század végén jelent meg Magyarországon, amikor az első pályák megnyíltak Budapesten. A játék gyorsan népszerűvé vált az arisztokrácia és a városi értelmiség körében.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-10 text-pretty">
              A XX. század folyamán a magyar tenisz felemelkedéseket és hanyatlásokat élt meg, de mindig az ország sportéletének szerves részét alkotta.
            </p>

            <Link
              href="/history"
              className="group inline-flex items-center gap-3 text-primary font-sans text-sm font-medium w-fit"
            >
              <span className="border-b border-primary/30 group-hover:border-primary transition-colors duration-300 pb-px">
                Teljes történelem olvasása
              </span>
              <span className="w-5 h-px bg-primary group-hover:w-9 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
