import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Rólunk',
  description:
    'Hungary Tennis — információs forrás a magyarországi teniszről. Tudjon meg többet rólunk és lépjen kapcsolatba velünk.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <Image
          src="/images/about-tennis.jpg"
          alt="Panorámás kilátás Magyarországra a Dunával és Budapesttel naplementekor"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-clay mb-5 font-medium">
            Rólunk
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl text-cream font-light leading-tight text-balance mb-2">
            Hungary Tennis
          </h1>
          <p className="font-serif text-2xl lg:text-3xl text-clay font-light text-balance mb-6">
            Információs forrás
          </p>
          <div className="w-10 h-px bg-clay mx-auto mb-6" />
          <p className="font-sans text-base lg:text-lg text-cream/70 leading-relaxed text-pretty max-w-2xl mx-auto">
            Minden a magyarországi teniszről egy helyen — azoknak, akik szeretik a sportot.
          </p>
        </div>
      </section>

      {/* About section */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-sage mb-4 font-medium">Amit csinálunk</p>
            <h2 className="font-serif text-4xl text-charcoal font-light leading-tight text-balance mb-6">
              Küldetésünk
            </h2>
            <div className="w-10 h-px bg-clay mb-8" />
            <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty mb-5">
              A Hungary Tennis egy független információs forrás, amely a magyarországi tenisznek
              szenteli magát. Általános információkat gyűjtünk és teszünk közzé a sportról:
              történetéről, szabályairól, technikájáról és a magyar teniszmozgalom sajátosságairól.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty mb-5">
              Célunk, hogy a teniszt szélesebb közönség számára hozzáférhetőbbé és érthetőbbé tegyük.
              Nem képviselünk semmilyen szervezetet, klubot vagy kereskedelmi struktúrát, csupán
              megbízható általános tájékoztatást nyújtunk.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty">
              Ha kérdése vagy javaslata van, esetleg anyagot szeretne küldeni publikálásra,
              használja az alábbi kapcsolatfelvételi űrlapot.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {[
              { label: 'Általános információk', desc: 'Csak ellenőrzött tények, kereskedelmi érdekek és reklámanyagok nélkül.' },
              { label: 'Mindenki számára elérhető', desc: 'Az anyagok érthetők kezdőknek és tapasztalt teniszrajongóknak egyaránt.' },
              { label: 'Márkakapcsolat nélkül', desc: 'Nem reklámozunk és nem ajánlunk konkrét termékeket vagy szolgáltatásokat.' },
              { label: 'Magyarország a középpontban', desc: 'Fókusz a magyarországi teniszmozgalomra, figyelembe véve a helyi sajátosságokat.' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 py-5 border-b border-border last:border-0">
                <span className="w-4 h-px bg-clay mt-3 shrink-0" />
                <div>
                  <p className="font-serif text-lg text-charcoal font-medium mb-1">{item.label}</p>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-20 lg:py-28 bg-secondary" id="contact">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-widest text-sage mb-3 font-medium">Kapcsolatfelvétel</p>
            <h2 className="font-serif text-4xl text-charcoal font-light text-balance">Írjon nekünk</h2>
            <p className="font-sans text-base text-muted-foreground mt-4 text-pretty max-w-xl mx-auto">
              Kérdése vagy javaslata van? Töltse ki az alábbi űrlapot, és e-mail-ben válaszolunk.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
