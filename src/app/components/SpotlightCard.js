'use client'

import { useRef, useCallback } from 'react'

export default function SpotlightCard({
  as: Tag = 'div',
  className = '',
  size = 380,
  color = 'rgba(255, 255, 255, 0.12)',
  children,
  ...rest
}) {
  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }, [])

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight ${className}`}
      style={{ '--spot-size': `${size}px`, '--spot-color': color }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
