'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { sectors } from '@/lib/constants'
import type { Project, Sector, ProjectStatus } from '@/lib/types'

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

const statusOptions: { value: ProjectStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'current', label: 'Current' },
  { value: 'completed', label: 'Completed' },
]

interface ProjectFilterProps {
  projects: readonly Project[]
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeSector, setActiveSector] = useState<Sector | 'all'>('all')
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | 'all'>('all')

  const filteredProjects = projects.filter((p) => {
    const sectorMatch = activeSector === 'all' || p.sector === activeSector
    const statusMatch = activeStatus === 'all' || p.status === activeStatus
    return sectorMatch && statusMatch
  })

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-12 space-y-5">
        {/* Status pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setActiveStatus(option.value)}
              className={cn(
                'rounded-sm px-5 py-2.5 font-body text-sm font-medium transition-colors duration-300',
                activeStatus === option.value
                  ? option.value === 'current'
                    ? 'bg-emerald-500/90 text-white'
                    : option.value === 'completed'
                      ? 'bg-mid-grey text-white'
                      : 'bg-navy text-white'
                  : 'border border-navy/12 bg-transparent text-navy hover:border-navy/30'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-sand" />

        {/* Sector pills */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveSector('all')}
            className={cn(
              'rounded-sm px-5 py-2.5 font-body text-sm font-medium transition-colors duration-300',
              activeSector === 'all'
                ? 'bg-brand-red text-white'
                : 'border border-navy/20 bg-transparent text-navy hover:border-navy/40'
            )}
          >
            All Sectors
          </button>
          {sectors.map((sector) => (
            <button
              key={sector.value}
              type="button"
              onClick={() => setActiveSector(sector.value as Sector)}
              className={cn(
                'rounded-sm px-5 py-2.5 font-body text-sm font-medium transition-colors duration-300',
                activeSector === sector.value
                  ? 'bg-brand-red text-white'
                  : 'border border-navy/20 bg-transparent text-navy hover:border-navy/40'
              )}
            >
              {sector.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-sm"
              >
                {/* Background image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-opacity duration-500 group-hover:from-navy/80 group-hover:via-navy/30" />

                {/* Status indicator badge — top right */}
                <div className="absolute right-4 top-4 z-10">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm',
                      project.status === 'current'
                        ? 'bg-emerald-500/90 text-white'
                        : 'bg-white/15 text-white/70'
                    )}
                  >
                    <span
                      className={cn(
                        'h-1.5 w-1.5 rounded-full',
                        project.status === 'current'
                          ? 'animate-pulse bg-white'
                          : 'bg-white/50'
                      )}
                    />
                    {project.status === 'current' ? 'Current' : 'Completed'}
                  </span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                  <span className="mb-2 inline-block font-body text-xs uppercase tracking-wider text-brand-red">
                    {sectorLabels[project.sector] ?? project.sector}
                  </span>
                  <h3 className="font-display text-xl text-white">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 font-body text-sm text-cream/80">
                    <span>{project.client}</span>
                    <span className="text-brand-red" aria-hidden="true">
                      &middot;
                    </span>
                    <span>{project.value}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="py-24 text-center">
          <p className="font-body text-lg text-mid-grey">
            No projects found matching these filters.
          </p>
        </div>
      )}
    </div>
  )
}
