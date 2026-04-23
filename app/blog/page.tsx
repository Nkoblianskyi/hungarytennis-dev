import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Blog — cikkek a magyarországi teniszről',
  description:
    'Cikkek a magyarországi teniszről: technika, edzés, felszerelés, szezon és versenyek.',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Cikkek"
        subtitle="a teniszről"
        description="Hasznos anyagok a játékról, a technikáról, a felkészülésről és a magyarországi teniszéletről."
        image="/images/blog-clay-courts.jpg"
        imageAlt="Magyarországi teniszpályák meleg fényben"
      />

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* Featured article */}
          <div className="mb-20">
            <p className="font-sans text-xs uppercase tracking-widest text-sage mb-6 font-medium">
              Kiemelt cikk
            </p>
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-sage mb-3 font-medium">
                  {featured.category}
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl text-charcoal font-light leading-snug group-hover:text-primary transition-colors duration-200 text-balance mb-5">
                  {featured.title}
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed text-pretty mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs text-primary uppercase tracking-widest">Cikk olvasása</span>
                  <span className="w-6 h-px bg-primary group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-16" />

          {/* Remaining articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="font-sans text-xs uppercase tracking-widest text-sage mb-2 font-medium">
                  {post.category}
                </p>
                <h3 className="font-serif text-xl text-charcoal font-medium leading-snug group-hover:text-primary transition-colors duration-200 text-balance mb-3 flex-1">
                  {post.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs text-primary uppercase tracking-widest">Olvasás</span>
                  <span className="w-4 h-px bg-primary group-hover:w-8 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
