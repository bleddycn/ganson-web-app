'use client'

import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedProjects } from '@/lib/data/projects'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import { cn } from '@/lib/utils'

const sectorLabels: Record<string, string> = {
  healthcare: 'Healthcare',
  education: 'Education',
  commercial: 'Commercial',
  retail: 'Retail',
  tourism: 'Tourism',
  'high-tech': 'High-Tech',
  refurbishment: 'Refurbishment',
  'civil-engineering': 'Civil Engineering',
}

export default function FeaturedProjects() {
  const projects = getFeaturedProjects()

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

        {/* Asymmetric project grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2">
          {/* Card 1 — large, spans left column, both rows */}
          {projects[0] && (
            <ScrollReveal
              delay={0.1}
              className="lg:row-span-2"
            >
              <ProjectCard
                project={projects[0]}
                className="h-[400px] lg:h-full"
              />
            </ScrollReveal>
          )}

          {/* Card 2 — medium, right column top */}
          {projects[1] && (
            <ScrollReveal delay={0.2}>
              <ProjectCard
                project={projects[1]}
                className="h-[400px] lg:h-[340px]"
              />
            </ScrollReveal>
          )}

          {/* Card 3 — medium, right column bottom */}
          {projects[2] && (
            <ScrollReveal delay={0.3}>
              <ProjectCard
                project={projects[2]}
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
  project: ReturnType<typeof getFeaturedProjects>[number]
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
      {/* Background image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-opacity duration-500 group-hover:from-navy/80 group-hover:via-navy/30" />

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
        <span className="mb-2 inline-block font-body text-xs uppercase tracking-wider text-brand-red">
          {sectorLabels[project.sector] ?? project.sector}
        </span>
        <h3 className="font-display text-2xl text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 font-body text-sm text-cream">
          {project.value}
        </p>
      </div>
    </Link>
  )
}
