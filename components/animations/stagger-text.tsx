'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StaggerTextProps {
  text: string
  className?: string
  delay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'p'
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
  delay = 0,
  tag: Tag = 'h1',
}: StaggerTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const words = text.split(' ')

  return (
    <div ref={ref}>
      <Tag className={cn('flex flex-wrap', className)}>
        {words.map((word, i) => (
          <span key={i} className="mr-[0.25em] inline-block overflow-hidden">
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
        ))}
      </Tag>
    </div>
  )
}
