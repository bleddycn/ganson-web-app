'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 3

  const canGoNext = startIndex + visibleCount < images.length
  const canGoPrev = startIndex > 0

  const goNext = useCallback(() => {
    if (canGoNext) {
      setStartIndex((prev) => Math.min(prev + 1, images.length - visibleCount))
    }
  }, [canGoNext, images.length])

  const goPrev = useCallback(() => {
    if (canGoPrev) {
      setStartIndex((prev) => Math.max(prev - 1, 0))
    }
  }, [canGoPrev])

  const visibleImages = images.slice(startIndex, startIndex + visibleCount)
  const showArrows = images.length > visibleCount

  return (
    <div className="relative">
      {/* Gallery grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleImages.map((img, i) => (
            <motion.div
              key={`${startIndex}-${i}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={img}
                  alt={`${title} — gallery image ${startIndex + i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {showArrows && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-sm border transition-all duration-300',
              canGoPrev
                ? 'border-navy/20 text-navy hover:border-brand-red hover:bg-brand-red hover:text-white'
                : 'cursor-not-allowed border-sand text-light-grey'
            )}
            aria-label="Previous images"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Progress indicator */}
          <span className="font-body text-sm text-mid-grey">
            {startIndex + 1}&ndash;{Math.min(startIndex + visibleCount, images.length)} of{' '}
            {images.length}
          </span>

          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-sm border transition-all duration-300',
              canGoNext
                ? 'border-navy/20 text-navy hover:border-brand-red hover:bg-brand-red hover:text-white'
                : 'cursor-not-allowed border-sand text-light-grey'
            )}
            aria-label="Next images"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
