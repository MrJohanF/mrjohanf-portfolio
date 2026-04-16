'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Cursor decorativo para desktop: un dot pequeño que sigue al mouse 1:1
 * y un anillo grande con inercia. Al entrar en elementos interactivos, el
 * anillo crece y cambia de estado. No oculta el cursor nativo para mantener
 * accesibilidad y legibilidad de cursores específicos (text, resize, etc.).
 *
 * Se desactiva automáticamente en:
 *  - dispositivos touch / mobile
 *  - usuarios con prefers-reduced-motion
 */
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor="pointer"]'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)

  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  // Anillo con ligera inercia
  const ringX = useSpring(dotX, { stiffness: 250, damping: 28, mass: 0.5 })
  const ringY = useSpring(dotY, { stiffness: 250, damping: 28, mass: 0.5 })

  const hasMouseRef = useRef(false)

  useEffect(() => {
    const isTouch =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isFinePointer =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches

    if (isTouch || prefersReduced || !isFinePointer) return

    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const handleMove = (e) => {
      hasMouseRef.current = true
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      if (!isActive) setIsActive(true)

      // Detectar si el target o alguno de sus ancestros es interactivo
      const target = e.target
      const interactive = target?.closest?.(INTERACTIVE_SELECTOR)
      setIsHoveringInteractive(Boolean(interactive))
    }

    const handleLeave = () => setIsActive(false)
    const handleEnter = () => {
      if (hasMouseRef.current) setIsActive(true)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [enabled, dotX, dotY, isActive])

  if (!enabled) return null

  return (
    <>
      {/* Dot interior — sigue al mouse 1:1 */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full bg-white"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
          width: 6,
          height: 6,
        }}
        animate={{
          scale: isActive ? (isHoveringInteractive ? 0 : 1) : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />

      {/* Anillo exterior — sigue con inercia y crece en interactivos */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full border border-white"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
          width: 32,
          height: 32,
        }}
        animate={{
          scale: isActive ? (isHoveringInteractive ? 1.6 : 1) : 0,
          opacity: isActive ? (isHoveringInteractive ? 0.9 : 0.5) : 0,
          borderWidth: isHoveringInteractive ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      />
    </>
  )
}
