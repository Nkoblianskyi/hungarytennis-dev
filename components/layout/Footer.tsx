import Link from 'next/link'

const footerSections = [
  {
    heading: 'Navigáció',
    links: [
      { href: '/', label: 'Főoldal' },
      { href: '/history', label: 'Történelem' },
      { href: '/rules', label: 'Szabályok' },
      { href: '/equipment', label: 'Felszerelés' },
    ],
  },
  {
    heading: 'Tartalom',
    links: [
      { href: '/technique', label: 'Technika' },
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'Rólunk' },
    ],
  },
  {
    heading: 'Jogi',
    links: [
      { href: '/cookie-policy', label: 'Cookie-szabályzat' },
      { href: '/privacy-policy', label: 'Adatvédelmi irányelvek' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal" role="contentinfo">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-clay/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main grid */}
        <div className="pt-16 pb-12 grid grid-cols-1 lg:grid-cols-5 gap-12 border-b border-cream/8">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link
              href="/"
              className="flex items-end gap-2.5 select-none w-fit"
              aria-label="Hungary Tennis — főoldal"
            >
              <div className="flex items-center justify-center w-9 h-9 border border-cream/20 text-cream/70 shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M2 3v12M2 9h14M16 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold text-cream tracking-[-0.03em]">
                  Hungary
                </span>
                <span className="font-sans text-[10px] font-light tracking-[0.25em] uppercase text-clay -mt-0.5">
                  Tennis
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-cream/45 leading-relaxed max-w-xs">
              Információs forrás a magyarországi nagy teniszről — minden a játékról, a technikáról és a versenyekről.
            </p>

            <a
              href="mailto:info@hungarytennis.com"
              className="font-sans text-xs text-cream/35 hover:text-clay transition-colors duration-200 tracking-wide w-fit"
            >
              info@hungarytennis.com
            </a>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {footerSections.map((section) => (
              <div key={section.heading}>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-clay/70 mb-5 font-medium">
                  {section.heading}
                </p>
                <ul className="flex flex-col gap-3.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-sans text-sm text-cream/50 hover:text-cream/85 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-cream/25">
            &copy; {new Date().getFullYear()} hungarytennis.com. Minden jog fenntartva.
          </p>
          <p className="font-sans text-xs text-cream/20 tracking-wide">
            Általános tájékoztatás a magyarországi teniszről
          </p>
        </div>
      </div>
    </footer>
  )
}
