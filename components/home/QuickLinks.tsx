import Link from 'next/link'

const tiles = [
  {
    href: '/rules',
    num: '01',
    title: 'Játékszabályok',
    subtitle: 'Formátumok és előírások',
    description: 'A nagy tenisz alapszabályai, a tornák formátumai és a pontszámítási rendszer.',
  },
  {
    href: '/equipment',
    num: '02',
    title: 'Felszerelés',
    subtitle: 'Eszközök és kellékek',
    description: 'Minden az ütőkről, a labdákról, a pályákról és egyéb teniszfelszerelésekről.',
  },
]

export default function QuickLinks() {
  return (
    <section className="bg-forest" aria-label="Gyors linkek">
      {/* Header strip */}
      <div className="border-b border-cream/10 px-6 lg:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-clay/70 mb-2 font-medium">
              Tudjon meg többet
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-cream font-light">
              A nagy teniszről
            </h2>
          </div>
          <p className="font-sans text-xs text-cream/30 tracking-wide max-w-xs text-right hidden sm:block">
            Általános információ felszerelésről és szabályokról
          </p>
        </div>
      </div>

      {/* Tiles */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-cream/10">
          {tiles.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="group p-10 lg:p-14 flex flex-col justify-between min-h-72 hover:bg-charcoal/30 transition-colors duration-400"
            >
              <div className="flex flex-col gap-5">
                <span className="font-sans text-4xl font-light text-cream/10 leading-none select-none">
                  {tile.num}
                </span>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-clay/70 mb-2 font-medium">
                    {tile.subtitle}
                  </p>
                  <h3 className="font-serif text-3xl lg:text-4xl text-cream font-light leading-tight">
                    {tile.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-cream/45 leading-relaxed text-pretty max-w-xs">
                  {tile.description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-cream/10">
                <span className="font-sans text-xs text-clay uppercase tracking-[0.15em]">
                  Tovább
                </span>
                <span className="w-5 h-px bg-clay group-hover:w-10 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
