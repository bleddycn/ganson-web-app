import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import { news } from '@/lib/data/news'

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = news.find((a) => a.slug === slug)
  return {
    title: article?.title,
    description: article?.excerpt,
  }
}

export function generateStaticParams() {
  return news.map((a) => ({ slug: a.slug }))
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = news.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const paragraphs = article.content.split('\n\n')
  const relatedArticles = news.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <>
      {/* Title Block */}
      <section className="bg-navy pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal delay={0.1}>
            <span className="font-body text-xs uppercase tracking-wider text-brand-red-light">
              {article.category}
            </span>
          </ScrollReveal>
          <StaggerText
            text={article.title}
            className="mt-3 max-w-4xl text-3xl text-white md:text-5xl lg:text-6xl"
            tag="h1"
            delay={0.2}
          />
          <ScrollReveal delay={0.5}>
            <span className="mt-4 inline-block font-body text-sm text-cream/80">
              {formatDate(article.date)}
            </span>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-light pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          {/* Lead image — first element of the story */}
          <div className="relative aspect-[16/9] overflow-hidden bg-sand">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl px-6 md:mt-16 md:px-12 lg:px-16">
          <ScrollReveal>
            <p className="mb-8 font-body text-sm text-mid-grey">
              By {article.author} &middot; {formatDate(article.date)}
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <p
                  className={
                    i === 0
                      ? 'font-body text-xl font-medium leading-relaxed text-navy'
                      : 'font-body text-lg leading-relaxed text-dark-grey'
                  }
                >
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-light border-t border-sand py-16">
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <h2 className="mb-10 font-display text-3xl text-navy md:text-4xl">
                More News
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedArticles.map((related, i) => (
                <ScrollReveal key={related.slug} delay={0.1 * (i + 1)}>
                  <Link
                    href={`/news/${related.slug}`}
                    className="group block overflow-hidden border border-sand bg-white"
                  >
                    <div className="relative aspect-[16/9] bg-sand">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <span className="font-body text-sm text-mid-grey">
                        {formatDate(related.date)}
                      </span>
                      <span className="ml-3 font-body text-xs uppercase tracking-wider text-brand-red">
                        {related.category}
                      </span>
                      <h3 className="mt-2 font-display text-xl text-navy transition-colors duration-300 group-hover:text-brand-red">
                        {related.title}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-dark-grey line-clamp-3">
                        {related.excerpt}
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
      )}
    </>
  )
}
