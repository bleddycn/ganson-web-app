'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [startIndex, setStartIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
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

  // Lightbox controls
  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex)
  const closeLightbox = () => setLightboxIndex(null)

  const lightboxNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % images.length)
    }
  }, [lightboxIndex, images.length])

  const lightboxPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length)
    }
  }, [lightboxIndex, images.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') lightboxNext()
      if (e.key === 'ArrowLeft') lightboxPrev()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxIndex, lightboxNext, lightboxPrev])

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
              <button
                type="button"
                onClick={() => openLightbox(startIndex + i)}
                className="group relative block w-full aspect-[4/3] overflow-hidden rounded-sm cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`${title} — gallery image ${startIndex + i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors duration-300 group-hover:bg-navy/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                  </svg>
                </div>
              </button>
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-6 top-6 z-50 flex h-11 w-11 items-center justify-center rounded-sm text-white/70 transition-colors duration-200 hover:text-white"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute left-6 top-6 z-50 font-body text-sm text-white/60">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Previous button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); lightboxPrev() }}
              className="absolute left-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-sm text-white/60 transition-colors duration-200 hover:text-white md:left-6"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative mx-16 h-[80vh] w-full max-w-6xl md:mx-24"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={`${title} — image ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Next button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); lightboxNext() }}
              className="absolute right-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-sm text-white/60 transition-colors duration-200 hover:text-white md:right-6"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
