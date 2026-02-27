'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'

export default function Hero() {
  return (
    <section className="noise-overlay relative flex min-h-screen items-center overflow-hidden bg-navy">
      {/* Decorative triangle mark — large, semi-transparent background element */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 items-center justify-center lg:flex">
        <svg
          viewBox="0 0 400 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[80vh] w-auto opacity-[0.04]"
        >
          <path
            d="M200 0L400 460H0L200 0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-12 lg:px-16">
        <div className="max-w-2xl lg:max-w-[50%]">
          {/* Category label */}
          <ScrollReveal delay={0.1}>
            <span className="mb-6 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              Building &amp; Civil Engineering
            </span>
          </ScrollReveal>

          {/* Main headline */}
          <StaggerText
            text="Building Ireland's Future"
            className="text-5xl text-white md:text-7xl lg:text-8xl"
            tag="h1"
            delay={0.2}
          />

          {/* Subtitle */}
          <ScrollReveal delay={0.5} className="mt-6">
            <p className="max-w-lg text-lg leading-relaxed text-cream">
              Over two decades of construction excellence across healthcare,
              education, commercial and civil engineering.
            </p>
          </ScrollReveal>

          {/* CTA buttons */}
          <ScrollReveal delay={0.7} className="mt-10">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center bg-brand-red px-8 py-4 font-body text-sm font-medium text-white transition-colors duration-300 hover:bg-brand-red-dark"
              >
                View Our Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/30 px-8 py-4 font-body text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ScrollReveal delay={1.2}>
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-xs uppercase tracking-wider text-white/50">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white/50"
              >
                <path
                  d="M10 4L10 16M10 16L4 10M10 16L16 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
