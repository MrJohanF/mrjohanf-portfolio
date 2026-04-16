'use client'

import { motion } from 'framer-motion'
import { useLocalTime } from '../hooks/useLocalTime'

export default function StatusBadge({ t, language, isMobile }) {
  const locale = language === 'es' ? 'es-CO' : 'en-US'
  const time = useLocalTime('America/Bogota', locale)

  if (isMobile) return null

  return (
    <motion.div
      className="fixed bottom-8 left-8 z-40 flex items-center gap-3 bg-white/5 glass-minimal border border-white/10 rounded-full pl-3 pr-4 py-2 text-xs"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, type: 'spring', damping: 24, stiffness: 200 }}
    >
      <span className="relative flex items-center">
        <span
          className="status-dot w-1.5 h-1.5 rounded-full"
          style={{ background: 'var(--color-accent, #7dd3c0)' }}
          aria-hidden="true"
        />
      </span>
      <span className="text-white/80 font-medium">{t.status.available}</span>
      <span className="w-px h-3 bg-white/15" aria-hidden="true" />
      <span className="text-white/50 tabular-nums font-mono tracking-tight">
        {t.status.location} · {time || '--:--'}
      </span>
    </motion.div>
  )
}
