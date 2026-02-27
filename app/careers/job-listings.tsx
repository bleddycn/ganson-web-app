'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { JobListing } from '@/lib/types'

interface JobListingsProps {
  jobs: readonly JobListing[]
}

export default function JobListings({ jobs }: JobListingsProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  function toggle(slug: string) {
    setOpenSlug((prev) => (prev === slug ? null : slug))
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => {
        const isOpen = openSlug === job.slug
        const excerpt =
          job.description.length > 150
            ? job.description.slice(0, 150) + '...'
            : job.description

        return (
          <div
            key={job.slug}
            className="border border-sand bg-white p-6 transition-colors"
          >
            {/* Header — always visible */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-xl text-navy">{job.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-sand px-3 py-1 font-body text-sm text-dark-grey">
                    {job.location}
                  </span>
                  <span className="inline-block rounded-full bg-sand px-3 py-1 font-body text-sm capitalize text-dark-grey">
                    {job.type}
                  </span>
                  <span className="inline-block rounded-full bg-sand px-3 py-1 font-body text-sm text-dark-grey">
                    {job.department}
                  </span>
                </div>
              </div>
            </div>

            {/* Excerpt */}
            {!isOpen && (
              <p className="mt-4 font-body text-sm leading-relaxed text-dark-grey">
                {excerpt}
              </p>
            )}

            {/* Expand/collapse button */}
            <button
              onClick={() => toggle(job.slug)}
              className="mt-4 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-red transition-colors hover:text-navy"
              aria-expanded={isOpen}
            >
              {isOpen ? 'Hide Details' : 'View Details'}
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>

            {/* Expanded content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 border-t border-sand pt-6">
                    {/* Full description */}
                    <p className="font-body text-base leading-relaxed text-dark-grey">
                      {job.description}
                    </p>

                    {/* Requirements */}
                    <div className="mt-6">
                      <h4 className="font-display text-lg text-navy">
                        Requirements
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {job.requirements.map((req, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 font-body text-sm text-dark-grey"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mt-6">
                      <h4 className="font-display text-lg text-navy">
                        Benefits
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {job.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 font-body text-sm text-dark-grey"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Apply button */}
                    <div className="mt-8">
                      <a
                        href={`mailto:careers@ganson.ie?subject=Application: ${job.title}`}
                        className="inline-flex items-center justify-center bg-brand-red px-8 py-4 font-body text-sm font-medium text-white transition-colors duration-300 hover:bg-brand-red-dark"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
