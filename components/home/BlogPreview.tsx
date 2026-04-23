import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export default function BlogPreview() {
  const [featured, ...rest] = blogPosts
  const preview = rest.slice(0, 2)

  return (
    <section className="bg-secondary" aria-label="Blog előnézet">
      {/* Header row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 lg:pt-28 pb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-clay" />
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-sage font-medium">Blog</p>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal font-light">
            Legújabb cikkek
          </h2>
        </div>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-3 text-primary font-sans text-sm font-medium shrink-0"
        >
          <span className="border-b border-primary/30 group-hover:border-primary transition-colors duration-300 pb-px">
            Összes cikk
          </span>
          <span className="w-5 h-px bg-primary group-hover:w-9 transition-all duration-300" />
        </Link>
      </div>

      {/* Featured article — wide */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-12">
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-5 gap-0 border border-border overflow-hidden"
        >
          <div className="relative lg:col-span-3 aspect-[16/10] lg:aspect-auto lg:min-h-[340px] overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
          <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between bg-cream">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-sage mb-3 font-medium">
                {featured.category}
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl text-charcoal font-light leading-tight group-hover:text-primary transition-colors duration-300 text-balance mb-4">
                {featured.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty line-clamp-4">
                {featured.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border">
              <span className="font-sans text-xs text-primary uppercase tracking-[0.15em]">Olvasás</span>
              <span className="w-4 h-px bg-primary group-hover:w-8 transition-all duration-300" />
            </div>
          </div>
        </Link>
      </div>

      {/* Secondary articles */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 grid grid-cols-1 md:grid-cols-2 gap-6">
        {preview.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex gap-5 border border-border p-5 bg-cream hover:border-primary/30 transition-colors duration-300"
          >
            <div className="relative w-24 h-24 shrink-0 overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="96px"
              />
            </div>
            <div className="flex flex-col justify-between py-0.5 flex-1 min-w-0">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-sage mb-1.5 font-medium">
                  {post.category}
                </p>
                <h3 className="font-serif text-lg text-charcoal font-medium leading-snug group-hover:text-primary transition-colors duration-200 text-balance line-clamp-2">
                  {post.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-sans text-xs text-primary uppercase tracking-[0.1em]">Olvasás</span>
                <span className="w-3 h-px bg-primary group-hover:w-6 transition-all duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
