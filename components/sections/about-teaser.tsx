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
                Twenty Years of Construction Excellence
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-6 font-body leading-relaxed text-cream">
                At Ganson, our expertise is built on two decades of precision,
                stability, and a forward-thinking approach to the built
                environment. As one of Ireland&apos;s most progressive
                contractors, we bridge the gap between traditional craftsmanship
                and modern engineering.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="mt-4 font-body leading-relaxed text-cream">
                Driven by a client focus, we recognise that no two projects are
                identical. We maintain the operational agility to pivot with
                project demands and the technical scale to deliver excellence
                across healthcare, education, residential, commercial, and
                hospitality sectors.
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
