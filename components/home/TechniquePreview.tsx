import Image from 'next/image'
import Link from 'next/link'

const highlights = [
  { num: '01', label: 'Adogatás', desc: 'Technikai szempontok és gyakorlatok' },
  { num: '02', label: 'Alapütések', desc: 'Tenyeres, fonák, szelet' },
  { num: '03', label: 'Játéktaktika', desc: 'Stratégiák a pályán' },
]

export default function TechniquePreview() {
  return (
    <section className="bg-background overflow-hidden" aria-label="Technika előnézet">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Image — full bleed right */}
          <div className="relative h-80 lg:h-auto lg:min-h-[580px] overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/technique-tennis.jpg"
              alt="Teniszütő és labda közelről egy agyagpályán"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Offset label */}
            <div className="absolute bottom-6 left-6 bg-charcoal/80 backdrop-blur-sm px-4 py-3">
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-clay">Mesterség</p>
            </div>
          </div>

          {/* Text */}
          <div className="px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-clay" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-sage font-medium">
                Technika
              </p>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal font-light leading-tight text-balance mb-10">
              Játéktechnika<br />
              <span className="text-primary italic">és edzés</span>
            </h2>

            <ul className="flex flex-col gap-0 mb-10 border-t border-border">
              {highlights.map((item) => (
                <li key={item.label} className="flex items-center gap-5 py-5 border-b border-border">
                  <span className="font-sans text-xs text-muted-foreground/40 w-6 shrink-0">{item.num}</span>
                  <div className="flex-1">
                    <p className="font-serif text-lg text-charcoal font-medium">{item.label}</p>
                    <p className="font-sans text-xs text-muted-foreground mt-0.5 tracking-wide">{item.desc}</p>
                  </div>
                  <span className="w-4 h-px bg-border shrink-0" />
                </li>
              ))}
            </ul>

            <Link
              href="/technique"
              className="group inline-flex items-center gap-3 text-primary font-sans text-sm font-medium w-fit"
            >
              <span className="border-b border-primary/30 group-hover:border-primary transition-colors duration-300 pb-px">
                Technika felfedezése
              </span>
              <span className="w-5 h-px bg-primary group-hover:w-9 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
