import type { ReactNode } from 'react'

interface PolicyLayoutProps {
  title: string
  updated: string
  children: ReactNode
}

export default function PolicyLayout({ title, updated, children }: PolicyLayoutProps) {
  return (
    <>
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-charcoal/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-clay mb-5 font-medium">
            Jogi tudnivalók
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl text-cream font-light leading-tight text-balance mb-6">
            {title}
          </h1>
          <div className="w-10 h-px bg-clay mx-auto mb-6" />
          <p className="font-sans text-sm text-cream/60 tracking-wide">
            Utolsó frissítés: {updated}
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <article
          className="
            max-w-3xl mx-auto px-6 lg:px-10 font-sans text-base text-muted-foreground leading-relaxed
            [&_h2]:font-serif [&_h2]:text-2xl lg:[&_h2]:text-3xl [&_h2]:text-charcoal [&_h2]:font-light
            [&_h2]:leading-tight [&_h2]:text-balance [&_h2]:mt-12 [&_h2]:mb-5 [&_h2:first-child]:mt-0
            [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-charcoal [&_h3]:font-medium
            [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:mb-5 [&_p]:text-pretty
            [&_ul]:mb-5 [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2
            [&_li]:list-disc [&_li]:marker:text-clay [&_li]:pl-1
            [&_strong]:text-charcoal [&_strong]:font-medium
          "
        >
          {children}
        </article>
      </section>
    </>
  )
}
