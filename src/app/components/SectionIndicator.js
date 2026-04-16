'use client'

import { motion } from 'framer-motion'

export default function SectionIndicator({
  navigation,
  currentSection,
  handleSectionChange,
}) {
  const total = navigation.length
  const activeIndex = Math.max(
    0,
    navigation.findIndex((n) => n.id === currentSection)
  )
  const progress = total > 1 ? activeIndex / (total - 1) : 0

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <motion.nav
      aria-label="Indicador de sección"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center select-none"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      {/* Contador superior: 01 / 05 */}
      <div className="flex items-center gap-1 mb-4 font-mono text-[10px] tracking-[0.18em] text-white/70 tabular-nums">
        <motion.span
          key={activeIndex}
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="text-white"
        >
          {pad(activeIndex + 1)}
        </motion.span>
        <span className="text-white/30">/</span>
        <span className="text-white/40">{pad(total)}</span>
      </div>

      {/* Track vertical con progress + puntos clicables */}
      <div className="relative flex flex-col items-center py-2">
        {/* Línea base */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/12"
        />
        {/* Progress fill */}
        <motion.div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-white"
          initial={false}
          animate={{ height: `${progress * 100}%` }}
          transition={{ type: 'spring', damping: 26, stiffness: 180 }}
        />

        <ol className="relative flex flex-col gap-5 list-none">
          {navigation.map((item, index) => {
            const isActive = currentSection === item.id
            const isPassed = index < activeIndex
            return (
              <li key={item.id} className="relative flex items-center justify-end">
                <motion.button
                  onClick={() => handleSectionChange(item.id)}
                  aria-label={`Ir a sección ${item.label}`}
                  aria-current={isActive ? 'page' : undefined}
                  className="group relative flex items-center justify-center w-6 h-6 focus-visible:outline-none"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1 + index * 0.08,
                    type: 'spring',
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.15 }}
                >
                  {/* Halo activo */}
                  {isActive && (
                    <motion.span
                      layoutId="section-halo"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/30"
                      transition={{ type: 'spring', damping: 22, stiffness: 260 }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Punto */}
                  <span
                    aria-hidden="true"
                    className={`relative rounded-full organic-transition ${
                      isActive
                        ? 'w-2.5 h-2.5 bg-white'
                        : isPassed
                        ? 'w-1.5 h-1.5 bg-white/80'
                        : 'w-1.5 h-1.5 bg-white/30 group-hover:bg-white/60'
                    }`}
                  />

                  {/* Label al hover (a la izquierda) */}
                  <span
                    aria-hidden="true"
                    className="absolute right-full mr-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider uppercase text-white whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none"
                  >
                    {item.label}
                  </span>
                </motion.button>
              </li>
            )
          })}
        </ol>
      </div>
    </motion.nav>
  )
}
