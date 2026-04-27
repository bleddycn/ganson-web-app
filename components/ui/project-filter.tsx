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
  residential: 'Residential',
  'hotel-leisure': 'Hotel, Leisure & Student',
}

const statusOptions: { value: ProjectStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'current', label: 'Current' },
  { value: 'completed', label: 'Completed' },
]

interface ProjectFilterProps {
  projects: readonly Project[]
}

const PAGE_SIZE = 9

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeSector, setActiveSector] = useState<Sector | 'all'>('all')
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(0)

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filteredProjects = projects
    .filter((p) => {
      const sectorMatch = activeSector === 'all' || p.sector === activeSector
      const statusMatch = activeStatus === 'all' || p.status === activeStatus
      const searchMatch =
        normalizedQuery === '' || p.title.toLowerCase().includes(normalizedQuery)
      return sectorMatch && statusMatch && searchMatch
    })
    .sort((a, b) => {
      // All Sectors view: current projects first, then completed (each group by year desc).
      // Specific sector view: pure chronological — newest first.
      if (activeSector === 'all') {
        if (a.status === 'current' && b.status !== 'current') return -1
        if (a.status !== 'current' && b.status === 'current') return 1
      }
      return parseInt(b.year, 10) - parseInt(a.year, 10)
    })

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE)
  const paginatedProjects = filteredProjects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-12 space-y-5">
        {/* Search */}
        <div className="mx-auto max-w-sm">
          <label className="relative flex items-center border-b border-navy/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 shrink-0 text-mid-grey"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.3-4.3m0 0a7 7 0 10-9.9-9.9 7 7 0 009.9 9.9z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setPage(0) }}
              placeholder="Search projects"
              aria-label="Search projects by name"
              className="w-full bg-transparent px-3 py-2.5 font-body text-sm text-navy caret-brand-red placeholder:text-mid-grey/70 focus:outline-none focus-visible:outline-none focus:ring-0"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setPage(0) }}
                className="shrink-0 p-1 text-mid-grey transition-colors hover:text-brand-red"
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </label>
        </div>

        {/* Status pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => { setActiveStatus(option.value); setPage(0) }}
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
            onClick={() => { setActiveSector('all'); setPage(0) }}
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
              onClick={() => { setActiveSector(sector.value as Sector); setPage(0) }}
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
          {paginatedProjects.map((project) => (
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

                {/* Subtle bottom shadow for status badge contrast at top */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy/40 to-transparent" />

                {/* Status indicator badge — top right */}
                <div className="absolute right-4 top-4 z-10">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm',
                      project.status === 'current'
                        ? 'bg-emerald-500/90 text-white'
                        : 'bg-dark-grey/85 text-white/90'
                    )}
                  >
                    <span
                      className={cn(
                        'h-1.5 w-1.5 rounded-full',
                        project.status === 'current'
                          ? 'animate-pulse bg-white'
                          : 'bg-white/60'
                      )}
                    />
                    {project.status === 'current' ? 'Current' : 'Completed'}
                  </span>
                </div>

                {/* Frosted info bar — text gets dedicated readable surface */}
                <div className="absolute bottom-0 left-0 right-0 z-10 bg-navy/55 px-6 py-5 backdrop-blur-md">
                  <span className="mb-1 inline-block font-body text-xs uppercase tracking-wider text-brand-red-light">
                    {sectorLabels[project.sector] ?? project.sector}
                  </span>
                  <h3 className="truncate font-display text-xl text-white">
                    {project.title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-3 overflow-hidden font-body text-sm text-cream/90">
                    <span className="truncate">{project.client}</span>
                    <span className="shrink-0 text-brand-red-light" aria-hidden="true">
                      &middot;
                    </span>
                    <span className="shrink-0">{project.location}</span>
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
            {normalizedQuery
              ? `No projects found matching "${searchQuery.trim()}".`
              : 'No projects found matching these filters.'}
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-sm border transition-all duration-300',
              page === 0
                ? 'cursor-not-allowed border-sand text-light-grey'
                : 'border-navy/20 text-navy hover:border-brand-red hover:bg-brand-red hover:text-white'
            )}
            aria-label="Previous page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-sm font-body text-sm font-medium transition-all duration-300',
                page === i
                  ? 'bg-brand-red text-white'
                  : 'border border-navy/20 text-navy hover:border-brand-red hover:text-brand-red'
              )}
            >
              {i + 1}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-sm border transition-all duration-300',
              page === totalPages - 1
                ? 'cursor-not-allowed border-sand text-light-grey'
                : 'border-navy/20 text-navy hover:border-brand-red hover:bg-brand-red hover:text-white'
            )}
            aria-label="Next page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
