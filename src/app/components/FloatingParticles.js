'use client'

import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function FloatingParticles({ isMobile }) {
  const prefersReducedMotion = useReducedMotion()
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const update = () =>
      setDimensions({ w: window.innerWidth, h: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Menos partículas en mobile; cero con reduced-motion
  const count = prefersReducedMotion ? 0 : isMobile ? 6 : 18

  const particles = useMemo(() => {
    if (!count || !dimensions.w) return []
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 2 + 1 // 1-3 px
      return {
        id: i,
        left: Math.random() * 100, // %
        top: Math.random() * 100,  // %
        size,
        duration: Math.random() * 8 + 10, // 10-18s
        delay: -Math.random() * 10,       // evita que arranquen todas a la vez
        opacity: Math.random() * 0.3 + 0.1,
      }
    })
  }, [count, dimensions.w, dimensions.h])

  if (!particles.length) return null

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-white float-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  )
}
