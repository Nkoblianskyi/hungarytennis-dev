'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  consent: boolean
}

const subjects = [
  'Általános kérdés',
  'Tartalmi javaslat',
  'Technikai kérdés',
  'Egyéb',
]

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!form.name.trim()) newErrors.name = 'Adja meg a nevét'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Adjon meg érvényes e-mail-címet'
    if (!form.subject) newErrors.subject = 'Válasszon témát'
    if (!form.message.trim() || form.message.trim().length < 20)
      newErrors.message = 'Az üzenetnek legalább 20 karaktert kell tartalmaznia'
    if (!form.consent) newErrors.consent = 'A hozzájárulás megadása szükséges'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, consent: e.target.checked }))
    if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }))
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-2">
            Név
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className={cn(
              'w-full bg-cream border px-4 py-3 font-sans text-sm text-charcoal placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-colors',
              errors.name ? 'border-destructive' : 'border-border focus:border-primary'
            )}
            placeholder="Az Ön neve"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 font-sans text-xs text-destructive">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-2">
            E-mail-cím
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            className={cn(
              'w-full bg-cream border px-4 py-3 font-sans text-sm text-charcoal placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-colors',
              errors.email ? 'border-destructive' : 'border-border focus:border-primary'
            )}
            placeholder="your@email.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 font-sans text-xs text-destructive">{errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-2">
            Téma
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={cn(
              'w-full bg-cream border px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-primary transition-colors appearance-none',
              errors.subject ? 'border-destructive' : 'border-border focus:border-primary',
              !form.subject && 'text-muted-foreground/50'
            )}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            aria-invalid={!!errors.subject}
          >
            <option value="" disabled>Válasszon témát</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.subject && (
            <p id="subject-error" className="mt-1.5 font-sans text-xs text-destructive">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-2">
            Üzenet
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className={cn(
              'w-full bg-cream border px-4 py-3 font-sans text-sm text-charcoal placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none',
              errors.message ? 'border-destructive' : 'border-border focus:border-primary'
            )}
            placeholder="Az Ön üzenete..."
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 font-sans text-xs text-destructive">{errors.message}</p>
          )}
        </div>

        {/* Consent checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 shrink-0">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={form.consent}
                onChange={handleCheckbox}
                className="sr-only"
                aria-describedby={errors.consent ? 'consent-error' : undefined}
              />
              <div className={cn(
                'w-4 h-4 border transition-colors duration-200',
                form.consent ? 'bg-primary border-primary' : 'bg-cream border-border group-hover:border-primary/50',
                errors.consent && 'border-destructive'
              )}>
                {form.consent && (
                  <svg viewBox="0 0 16 16" fill="none" className="w-full h-full p-0.5" aria-hidden="true">
                    <path d="M3 8l3.5 3.5 6.5-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <span className="font-sans text-sm text-muted-foreground leading-relaxed">
              Hozzájárulok, hogy adataimat kizárólag a megkeresésemre való válaszadás céljából
              használják fel az{' '}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Adatvédelmi tájékoztató
              </a>
              {' '}szerint.
            </span>
          </label>
          {errors.consent && (
            <p id="consent-error" className="mt-1.5 font-sans text-xs text-destructive ml-7">{errors.consent}</p>
          )}
        </div>

        {/* Email info */}
        <p className="font-sans text-xs text-muted-foreground">
          Az üzenet erre a címre kerül elküldésre:{' '}
          <span className="text-charcoal font-medium">info@hungarytennis.com</span>
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="self-start inline-flex items-center gap-3 bg-primary text-primary-foreground font-sans text-sm font-medium px-8 py-3.5 hover:bg-forest transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="w-3 h-3 border border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Küldés folyamatban...
            </>
          ) : (
            'Üzenet elküldése'
          )}
        </button>
      </form>

      {/* Success popup overlay */}
      {submitted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={() => setSubmitted(false)}
            aria-hidden="true"
          />

          {/* Card */}
          <div className="relative bg-cream max-w-md w-full p-10 text-center shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-charcoal transition-colors"
              aria-label="Bezárás"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="w-10 h-px bg-clay mx-auto mb-6" />
            <h3 id="popup-title" className="font-serif text-2xl text-charcoal font-medium mb-3">
              Üzenet elküldve
            </h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty mb-8">
              Köszönjük megkeresését. Megkaptuk üzenetét, és hamarosan válaszolunk
              a megadott e-mail-címre.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-sans text-sm font-medium px-7 py-3 hover:bg-forest transition-colors duration-200"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}
    </>
  )
}
