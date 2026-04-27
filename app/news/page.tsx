import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import { news } from '@/lib/data/news'

export const metadata = {
  title: 'News',
  description: 'Latest news and updates from Ganson Building & Civil Engineering.',
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function NewsPage() {
  const [featured, ...rest] = news

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-32 md:py-40">
        <Image
          src="/assets/heroes/news-hero.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="noise-overlay pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal delay={0.1}>
            <span className="mb-6 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              News &amp; Updates
            </span>
          </ScrollReveal>

          <StaggerText
            text="Latest from Ganson"
            className="max-w-3xl text-4xl text-white md:text-6xl lg:text-7xl"
            tag="h1"
            delay={0.2}
          />
        </div>
      </section>

      {/* News Grid */}
      <section className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          {/* Featured Article */}
          <ScrollReveal>
            <Link
              href={`/news/${featured.slug}`}
              className="group block overflow-hidden border border-sand bg-white"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-[16/9] bg-sand md:aspect-auto md:min-h-[320px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <span className="font-body text-sm text-mid-grey">
                    {formatDate(featured.date)}
                  </span>
                  <span className="mt-2 font-body text-xs uppercase tracking-wider text-brand-red">
                    {featured.category}
                  </span>
                  <h2 className="mt-3 font-display text-2xl text-navy transition-colors duration-300 group-hover:text-brand-red md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 font-body text-base leading-relaxed text-dark-grey line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <span className="mt-4 inline-block font-body text-sm font-medium text-brand-red transition-colors duration-300 group-hover:text-brand-red-dark">
                    Read more &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Remaining Articles Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={0.1 * (i + 1)}>
                <Link
                  href={`/news/${article.slug}`}
                  className="group block overflow-hidden border border-sand bg-white"
                >
                  <div className="relative aspect-[16/9] bg-sand">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-body text-sm text-mid-grey">
                      {formatDate(article.date)}
                    </span>
                    <span className="ml-3 font-body text-xs uppercase tracking-wider text-brand-red">
                      {article.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl text-navy transition-colors duration-300 group-hover:text-brand-red">
                      {article.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-dark-grey line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-block font-body text-sm font-medium text-brand-red transition-colors duration-300 group-hover:text-brand-red-dark">
                      Read more &rarr;
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
