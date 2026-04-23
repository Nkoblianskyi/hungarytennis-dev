import Image from 'next/image'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  description: string
  image: string
  imageAlt: string
}

export default function PageHero({ eyebrow, title, subtitle, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden" aria-label="Oldal fejléce">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-clay mb-5 font-medium">
            {eyebrow}
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl text-cream font-light leading-tight text-balance mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="font-serif text-5xl lg:text-6xl text-clay font-light leading-tight text-balance mb-6">
              {subtitle}
            </p>
          )}
          <div className="w-10 h-px bg-clay mx-auto mb-6" />
          <p className="font-sans text-base lg:text-lg text-cream/75 leading-relaxed text-pretty max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
