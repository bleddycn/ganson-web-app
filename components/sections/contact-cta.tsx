'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'

export default function ContactCTA() {
  return (
    <section className="noise-overlay bg-navy-dark py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 lg:px-16 text-center">
        {/* Headline */}
        <StaggerText
          text="Let's build something together"
          className="justify-center text-4xl text-white md:text-6xl"
          tag="h2"
        />

        {/* Subtitle */}
        <ScrollReveal delay={0.3} className="mt-6">
          <p className="font-body text-lg text-cream">
            Get in touch to discuss your next project.
          </p>
        </ScrollReveal>

        {/* Contact button */}
        <ScrollReveal delay={0.5} className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-brand-red px-10 py-4 font-body text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:bg-brand-red-dark"
          >
            Contact Us
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
