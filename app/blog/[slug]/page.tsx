import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts, getBlogPost } from '@/lib/blog-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/65 to-charcoal/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-clay mb-5 font-medium">
            {post.category}
          </p>

          <h1 className="font-serif text-4xl lg:text-5xl text-cream font-light leading-tight text-balance">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <article className="py-20 lg:py-28 bg-cream">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          {/* Lead */}
          <p className="font-serif text-xl text-charcoal leading-relaxed text-pretty mb-10 font-light border-l-2 border-clay pl-6">
            {post.excerpt}
          </p>

          {/* Sections */}
          {post.sections.map((section, idx) => (
            <div key={idx} className="mb-10">
              {section.title && (
                <h2 className="font-serif text-2xl text-charcoal font-medium mb-5 mt-10">
                  {section.title}
                </h2>
              )}
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="font-sans text-base text-muted-foreground leading-relaxed text-pretty mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </article>

      {/* Back + more articles */}
      <section className="py-16 lg:py-20 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 text-primary font-sans text-sm font-medium group"
            >
              <span className="w-6 h-px bg-primary group-hover:w-10 transition-all duration-300" />
              <span className="border-b border-primary/40 group-hover:border-primary transition-colors duration-200 pb-px">
                Összes cikk
              </span>
            </Link>
            <p className="font-sans text-xs uppercase tracking-widest text-sage font-medium hidden sm:block">
              További anyagok
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPosts.map((other) => (
              <Link key={other.slug} href={`/blog/${other.slug}`} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden mb-4">
                  <Image
                    src={other.image}
                    alt={other.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="font-sans text-xs uppercase tracking-widest text-sage mb-1.5 font-medium">
                  {other.category}
                </p>
                <h3 className="font-serif text-lg text-charcoal font-medium leading-snug group-hover:text-primary transition-colors duration-200 text-balance">
                  {other.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
