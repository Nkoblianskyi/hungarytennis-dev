import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden" aria-label="Főoldali banner">
      <Image
        src="/images/hero-tennis.jpg"
        alt="Teniszpálya Magyarországon természeti környezetben"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/45 to-charcoal/75" />

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-px bg-clay" />
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-clay font-medium">
            hungarytennis.com
          </p>
          <span className="w-8 h-px bg-clay" />
        </div>

        {/* Heading */}
        <h1 className="font-serif font-light leading-[1.05] text-balance mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl text-cream">
            Nagy tenisz
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-clay mt-1">
            Magyarországon
          </span>
        </h1>

        {/* Divider */}
        <div className="w-12 h-px bg-clay/60 mb-8" />

        {/* Description */}
        <p className="font-sans text-base lg:text-lg text-cream/65 leading-relaxed max-w-xl text-pretty">
          Magyarország gazdag teniszhagyománnyal rendelkezik, amely több mint száz évre nyúlik vissza. Az első budapesti pályáktól a modern versenyekig.
        </p>
      </div>

      {/* Bottom stat strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-cream/10 hidden lg:flex">
        <div className="max-w-7xl mx-auto px-12 flex">
          {[
            { num: '100+', label: 'év hagyomány' },
            { num: '4', label: 'pályatípus' },
            { num: '7', label: 'hónapos szezon' },
          ].map((stat, i) => (
            <div key={stat.label} className={`py-5 pr-12 ${i > 0 ? 'pl-12 border-l border-cream/10' : ''}`}>
              <p className="font-serif text-2xl text-cream/80 font-light">{stat.num}</p>
              <p className="font-sans text-xs text-cream/40 tracking-wide mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
