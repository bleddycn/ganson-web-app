'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/animations/scroll-reveal'

export default function AboutTeaser() {
  return (
    <section className="section-dark noise-overlay py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
          {/* Left — image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image
                src="/assets/about/about-teaser.jpg"
                alt="Ganson construction team on site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </ScrollReveal>

          {/* Right — text content */}
          <div className="lg:pl-8">
            <ScrollReveal delay={0.1}>
              <span className="mb-4 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
                ABOUT GANSON
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-3xl text-white md:text-4xl">
                Two decades of building excellence
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-6 font-body leading-relaxed text-cream">
                Founded in 2004 by Paul McQuaid and David Rogers, both graduates
                of Queen&apos;s University Belfast&apos;s Civil Engineering
                programme, Ganson has grown from a specialist contractor to one
                of Ireland&apos;s most respected building and civil engineering
                firms.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="mt-4 font-body leading-relaxed text-cream">
                With offices in Balbriggan, Co. Dublin and Castlewellan, Co.
                Down, we deliver projects across healthcare, education,
                commercial, retail, tourism, high-tech, refurbishment and civil
                engineering — maintaining a 100% credit rating throughout.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Link
                href="/about"
                className="mt-8 inline-block font-body text-lg font-medium text-brand-red transition-all hover:underline"
              >
                Read our story &rarr;
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
