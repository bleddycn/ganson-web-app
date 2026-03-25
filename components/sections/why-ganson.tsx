'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { useInView } from 'framer-motion'
import ScrollReveal from '@/components/animations/scroll-reveal'
import { cn } from '@/lib/utils'

interface Stat {
  value: number
  prefix?: string
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    value: 430,
    prefix: '\u20ac',
    suffix: 'm+',
    label: 'Capital Value of Current Works',
    description:
      'Managing over \u20ac400m of project capital value across Ireland and the UK.',
  },
  {
    value: 130,
    prefix: '\u20ac',
    suffix: 'm+',
    label: 'Annual Workload',
    description:
      'Yearly revenues in excess of \u20ac130m, and set up to continue to grow.',
  },
  {
    value: 130,
    suffix: '+',
    label: 'Workforce',
    description:
      'A workforce of over 130 delivering excellence across every project.',
  },
]

function useCounter(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return count
}

function StatPillar({
  stat,
  delay,
  isInView,
}: {
  stat: Stat
  delay: number
  isInView: boolean
}) {
  const count = useCounter(stat.value, isInView)

  return (
    <ScrollReveal delay={delay}>
      <div className="flex flex-col">
        <span className="font-display text-5xl font-medium text-brand-red md:text-6xl lg:text-7xl">
          {stat.prefix ?? ''}
          {count}
          {stat.suffix}
        </span>
        <span className="mt-4 font-body text-lg font-medium text-navy md:text-xl">
          {stat.label}
        </span>
        <p className="mt-2 max-w-xs font-body text-sm text-dark-grey">
          {stat.description}
        </p>
      </div>
    </ScrollReveal>
  )
}

export default function WhyGanson() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="section-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <ScrollReveal>
          <span className="mb-4 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
            WHY GANSON
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl text-navy md:text-5xl">
            The Ganson standard, quantified
          </h2>
        </ScrollReveal>

        {/* Stats — asymmetric staggered layout */}
        <div
          ref={sectionRef}
          className="mt-16 grid grid-cols-1 gap-16 md:mt-24 md:grid-cols-3 md:gap-8 lg:gap-12"
        >
          {/* First stat — aligned to top */}
          <div className="md:pt-0">
            <StatPillar stat={stats[0]} delay={0} isInView={isInView} />
          </div>

          {/* Second stat — offset down for visual rhythm */}
          <div className="md:pt-24 lg:pt-32">
            <StatPillar stat={stats[1]} delay={0.15} isInView={isInView} />
          </div>

          {/* Third stat — offset further down */}
          <div className="md:pt-48 lg:pt-56">
            <StatPillar stat={stats[2]} delay={0.3} isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  )
}
