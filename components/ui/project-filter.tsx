'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { sectors } from '@/lib/constants'
import type { Project, Sector } from '@/lib/types'

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

interface ProjectFilterProps {
  projects: readonly Project[]
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeSector, setActiveSector] = useState<Sector | 'all'>('all')

  const filteredProjects =
    activeSector === 'all'
      ? projects
      : projects.filter((p) => p.sector === activeSector)

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-12 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveSector('all')}
          className={cn(
            'rounded-sm px-5 py-2.5 font-body text-sm font-medium transition-colors duration-300',
            activeSector === 'all'
              ? 'bg-brand-red text-white'
              : 'border border-navy/20 bg-transparent text-navy hover:border-navy/40'
          )}
        >
          All
        </button>
        {sectors.map((sector) => (
          <button
            key={sector.value}
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
            No projects found in this sector.
          </p>
        </div>
      )}
    </div>
  )
}
