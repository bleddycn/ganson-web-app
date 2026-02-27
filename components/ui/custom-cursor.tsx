'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isPointerDevice, setIsPointerDevice] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Check for fine pointer device (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)')
    setIsPointerDevice(mediaQuery.matches)

    function handleMediaChange(e: MediaQueryListEvent) {
      setIsPointerDevice(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])

  useEffect(() => {
    if (!isPointerDevice) return

    // Add class to body to hide default cursor
    document.body.classList.add('custom-cursor-active')

    function handleMouseMove(e: MouseEvent) {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true)
      }
    }

    function handleMouseOut(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [isPointerDevice, cursorX, cursorY])

  if (!isPointerDevice) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 40 : 8,
          height: isHovering ? 40 : 8,
          borderWidth: isHovering ? 2 : 0,
          backgroundColor: isHovering
            ? 'transparent'
            : 'var(--color-brand-red)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="rounded-full border-brand-red"
        style={{
          borderColor: 'var(--color-brand-red)',
          borderStyle: 'solid',
        }}
      />
    </motion.div>
  )
}
