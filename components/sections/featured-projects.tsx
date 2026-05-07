'use client'

import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/data/projects'
import type { Project } from '@/lib/types'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import { cn } from '@/lib/utils'

const sectorLabels: Record<string, string> = {
  healthcare: 'Healthcare',
  education: 'Education',
  commercial: 'Commercial',
  residential: 'Residential',
  'hotel-leisure': 'Hotel, Leisure & Student',
}

const FEATURED_ORDER = [
  'the-keep',
  'st-lawrence-o-tooles-dublin',
  'circle-housing-inchicore',
] as const

export default function FeaturedProjects() {
  const orderedProjects = FEATURED_ORDER
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => p !== undefined)

  return (
    <section className="noise-overlay relative bg-navy py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <ScrollReveal>
            <span className="mb-4 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              Selected Work
            </span>
          </ScrollReveal>
          <StaggerText
            text="Projects that define us"
            className="text-4xl text-white md:text-6xl"
            tag="h2"
            delay={0.1}
          />
        </div>

        {/* Asymmetric grid — hero left, 2 stacked right */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2">
          {/* Hero — The Keep, spans both rows on the left */}
          {orderedProjects[0] && (
            <ScrollReveal delay={0.1} className="lg:row-span-2">
              <ProjectCard
                project={orderedProjects[0]}
                className="h-[400px] lg:h-full"
              />
            </ScrollReveal>
          )}

          {/* Right column — 2 stacked tiles */}
          {orderedProjects[1] && (
            <ScrollReveal delay={0.2}>
              <ProjectCard
                project={orderedProjects[1]}
                className="h-[400px] lg:h-[340px]"
              />
            </ScrollReveal>
          )}
          {orderedProjects[2] && (
            <ScrollReveal delay={0.3}>
              <ProjectCard
                project={orderedProjects[2]}
                className="h-[400px] lg:h-[340px]"
              />
            </ScrollReveal>
          )}
        </div>

        {/* View all projects link */}
        <ScrollReveal delay={0.4} className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-body text-lg text-white transition-colors duration-300 hover:text-brand-red"
          >
            View all projects
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  className,
}: {
  project: Project
  className?: string
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        'group relative block overflow-hidden rounded-sm',
        className
      )}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
      />

      {/* Frosted info bar — text gets dedicated readable surface */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-navy/55 px-5 py-4 backdrop-blur-md md:px-6 md:py-5">
        <span className="mb-0.5 inline-block font-body text-[10px] uppercase tracking-wider text-brand-red-light">
          {sectorLabels[project.sector] ?? project.sector}
        </span>
        <h3 className="font-display text-lg text-white md:text-xl">
          {project.title}
        </h3>
        <p className="mt-0.5 font-body text-xs text-cream/90">
          {project.client} &middot; {project.location}
        </p>
      </div>
    </Link>
  )
}
