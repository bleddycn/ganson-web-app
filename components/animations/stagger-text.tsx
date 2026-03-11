'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StaggerTextProps {
  text: string
  className?: string
  lineClassNames?: string[]
  delay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'p'
  separator?: React.ReactNode
}

const wordVariants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay: i * 0.08,
    },
  }),
}

export default function StaggerText({
  text,
  className,
  lineClassNames,
  delay = 0,
  tag: Tag = 'h1',
  separator,
}: StaggerTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Split by | for explicit line breaks, then by space for words
  const lines = text.split('|')
  let wordIndex = 0

  return (
    <div ref={ref}>
      <Tag className={cn('flex flex-wrap', className)}>
        {lines.map((line, lineIdx) => {
          const words = line.trim().split(' ')
          const lineClass = lineClassNames?.[lineIdx]
          const elements = words.map((word) => {
            const i = wordIndex++
            return (
              <span key={i} className={cn('mr-[0.25em] inline-block overflow-x-visible overflow-y-hidden pb-[0.15em]', lineClass)}>
                <motion.span
                  className="inline-block"
                  custom={i + delay / 0.08}
                  variants={wordVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  {word}
                </motion.span>
              </span>
            )
          })
          // Add separator or line break between lines
          if (lineIdx < lines.length - 1) {
            if (separator) {
              elements.push(
                <span key={`sep-${lineIdx}`} className="flex w-full items-center">
                  <motion.span
                    className="inline-block"
                    initial={{ width: 0, opacity: 0 }}
                    animate={isInView ? { width: 'auto', opacity: 1 } : { width: 0, opacity: 0 }}
                    transition={{ duration: 0.6, delay: (wordIndex + delay / 0.08) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {separator}
                  </motion.span>
                </span>
              )
            } else {
              elements.push(<span key={`br-${lineIdx}`} className="w-full" />)
            }
          }
          return elements
        })}
      </Tag>
    </div>
  )
}
