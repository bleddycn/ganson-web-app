'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { TeamMember } from '@/lib/types'

interface TeamGridProps {
  members: readonly TeamMember[]
}

export default function TeamGrid({ members }: TeamGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const selected = selectedIndex !== null ? members[selectedIndex] : null

  const handleClick = (index: number) => {
    setSelectedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div>
      {/* Expanded detail panel */}
      <AnimatePresence mode="wait">
        {selected && selectedIndex !== null && (
          <motion.div
            key={selected.name}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-8 rounded-sm bg-navy p-6 md:grid-cols-[280px_1fr] md:p-8">
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sand">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className={cn('object-cover', selected.imageClassName)}
                  sizes="280px"
                />
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-2xl text-white md:text-3xl">
                  {selected.name}
                </h3>
                <p className="mt-1 font-body text-sm uppercase tracking-wider text-cream/70">
                  {selected.role}
                </p>
                <p className="mt-5 font-body text-base leading-relaxed text-cream/90">
                  {selected.bio}
                </p>
                {selected.qualifications && selected.qualifications.length > 0 && (
                  <ul className="mt-5 space-y-1 border-t border-white/10 pt-5">
                    {selected.qualifications.map((q) => (
                      <li key={q} className="font-body text-sm text-cream/60">
                        {q}
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="mt-6 flex h-8 w-8 items-center justify-center self-start rounded-full border border-white/15 text-cream/40 transition-all hover:border-white/30 hover:text-white"
                  aria-label="Close"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="1" y1="1" x2="11" y2="11" />
                    <line x1="11" y1="1" x2="1" y2="11" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            layout
            className="group cursor-pointer"
            onClick={() => handleClick(i)}
          >
            <div className="relative overflow-hidden rounded-sm">
              <div className="relative aspect-[4/5] bg-sand">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={cn('object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]', member.imageClassName)}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                />
                {/* Active indicator */}
                {selectedIndex === i && (
                  <div className="absolute inset-0 border-2 border-brand-red" />
                )}
              </div>
              <div className={`px-3 py-2.5 transition-colors duration-300 ${selectedIndex === i ? 'bg-brand-red' : 'bg-navy'}`}>
                <h3 className="font-display text-sm text-white">{member.name}</h3>
                <p className="font-body text-[11px] uppercase tracking-wider text-cream/70">
                  {member.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
