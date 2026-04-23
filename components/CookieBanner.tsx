'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const COOKIE_KEY = 'ht_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    try { localStorage.setItem(COOKIE_KEY, 'accepted') } catch { /* noop */ }
    setVisible(false)
  }

  const decline = () => {
    try { localStorage.setItem(COOKIE_KEY, 'declined') } catch { /* noop */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Értesítés a cookie-k használatáról"
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-cream/10',
        'transform transition-transform duration-500'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <p className="font-sans text-sm text-cream/70 leading-relaxed text-pretty max-w-xl">
          Ez a weboldal cookie-kat használ a megfelelő működés biztosítása érdekében.
          A böngészés folytatásával Ön elfogadja a{' '}
          <Link href="/cookie-policy" className="text-clay hover:text-cream transition-colors duration-200 underline underline-offset-2">
            Cookie-szabályzatunkat
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-sans text-xs text-cream/50 hover:text-cream transition-colors duration-200 px-4 py-2.5 border border-cream/10 hover:border-cream/30"
          >
            Elutasítás
          </button>
          <button
            onClick={accept}
            className="font-sans text-xs text-primary-foreground bg-primary hover:bg-forest transition-colors duration-200 px-5 py-2.5 font-medium"
          >
            Elfogadás
          </button>
        </div>
      </div>
    </div>
  )
}
