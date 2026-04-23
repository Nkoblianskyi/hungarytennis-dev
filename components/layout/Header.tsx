'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/history', label: 'Történelem' },
  { href: '/rules', label: 'Szabályok' },
  { href: '/equipment', label: 'Felszerelés' },
  { href: '/technique', label: 'Technika' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Rólunk' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-cream/97 backdrop-blur-lg border-b border-border/60 shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

        {/* Wordmark — unique lockup */}
        <Link
          href="/"
          className="group flex items-end gap-2.5 select-none"
          aria-label="Hungary Tennis — főoldal"
        >
          {/* Monogram mark */}
          <div className={cn(
            'flex items-center justify-center w-9 h-9 border transition-colors duration-300 shrink-0',
            scrolled ? 'border-forest text-forest' : 'border-cream/70 text-cream/90'
          )}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 3v12M2 9h14M16 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          {/* Text lockup */}
          <div className="flex flex-col leading-none">
            <span className={cn(
              'font-serif text-xl font-semibold tracking-[-0.03em] transition-colors duration-300',
              scrolled ? 'text-charcoal' : 'text-cream'
            )}>
              Hungary
            </span>
            <span className={cn(
              'font-sans text-[10px] font-light tracking-[0.25em] uppercase transition-colors duration-300 -mt-0.5',
              scrolled ? 'text-clay' : 'text-clay'
            )}>
              Tennis
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Fő navigáció">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-sans text-[13px] font-medium tracking-wide transition-all duration-200 px-3.5 py-2 relative',
                  scrolled
                    ? isActive ? 'text-forest' : 'text-charcoal/70 hover:text-charcoal'
                    : isActive ? 'text-cream' : 'text-cream/65 hover:text-cream'
                )}
              >
                {link.label}
                {isActive && (
                  <span className={cn(
                    'absolute bottom-0 left-3.5 right-3.5 h-px',
                    scrolled ? 'bg-clay' : 'bg-clay'
                  )} />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className={cn(
            'lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 items-center',
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
          aria-expanded={menuOpen}
        >
          <span className={cn(
            'block h-px transition-all duration-300 origin-center',
            scrolled ? 'bg-charcoal' : 'bg-cream',
            menuOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5'
          )} />
          <span className={cn(
            'block h-px transition-all duration-300',
            scrolled ? 'bg-charcoal' : 'bg-cream',
            menuOpen ? 'w-0 opacity-0' : 'w-4'
          )} />
          <span className={cn(
            'block h-px transition-all duration-300 origin-center',
            scrolled ? 'bg-charcoal' : 'bg-cream',
            menuOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-5'
          )} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-400 bg-cream border-b border-border',
          menuOpen ? 'max-h-[500px]' : 'max-h-0'
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col px-6 py-2" aria-label="Mobil navigáció">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-sans text-sm font-medium py-4 border-b border-border/40 last:border-0 transition-colors duration-200 flex items-center justify-between',
                  isActive ? 'text-forest' : 'text-charcoal/70 hover:text-charcoal'
                )}
              >
                {link.label}
                {isActive && <span className="w-4 h-px bg-clay" />}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
