import { motion } from 'framer-motion'
import {
  RocketLaunchIcon,
  PaintBrushIcon,
  BookOpenIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline'
import SpotlightCard from './SpotlightCard'

const ACTIVITY_ICONS = {
  rocket: RocketLaunchIcon,
  design: PaintBrushIcon,
  learning: BookOpenIcon,
}

export default function About({ t, isMobile }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 200, duration: 0.3 },
    },
  }

  const bentoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  }

  const bentoItemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 22, stiffness: 260, duration: 0.25 },
    },
  }

  const stats = [
    { number: '60+',  label: t.about.stats.projects,   featured: true },
    { number: '5+',   label: t.about.stats.years,      featured: false },
    { number: '25+',  label: t.about.stats.clients,    featured: false },
    { number: '100%', label: t.about.stats.dedication, featured: false },
  ]

  return (
    <motion.div
      className={`${
        isMobile
          ? 'space-y-8 pb-16'
          : 'grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-16 items-center'
      } animate-slide-up`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Columna izquierda — texto editorial */}
      <div className="space-y-6 md:space-y-8">
        <motion.div variants={textVariants}>
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/40 mb-3">
            02 — {t.about.title}
          </div>

          <h2
            className={`${
              isMobile ? 'text-4xl' : 'text-5xl md:text-6xl'
            } font-light mb-4 md:mb-6 tracking-tight leading-[1.05]`}
          >
            <span className="font-serif italic font-normal text-white/90">
              {t.about.title.split(' ')[0]}
            </span>
            {t.about.title.split(' ').slice(1).length > 0 && (
              <span> {t.about.title.split(' ').slice(1).join(' ')}</span>
            )}
          </h2>

          <motion.div
            className="w-12 h-0.5 bg-white/60 mb-6 md:mb-8"
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: 48,
                opacity: 1,
                transition: { type: 'spring', damping: 20, stiffness: 200, duration: 0.4 },
              },
            }}
          />
        </motion.div>

        <motion.div
          className={`space-y-4 md:space-y-5 ${
            isMobile ? 'text-base' : 'text-lg'
          } text-white/75 leading-relaxed`}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06, delayChildren: 0.05 },
            },
          }}
        >
          <motion.p variants={textVariants}>{t.about.p1}</motion.p>
          <motion.p variants={textVariants}>{t.about.p2}</motion.p>
          <motion.p variants={textVariants} className="text-white/60">
            {t.about.p3}
          </motion.p>
        </motion.div>
      </div>

      {/* Columna derecha — bento asimétrico */}
      <motion.div
        className={isMobile ? 'mt-4' : ''}
        variants={{
          hidden: { opacity: 0, x: 20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', damping: 25, stiffness: 200, duration: 0.3 },
          },
        }}
      >
        <motion.div
          className={`grid ${
            isMobile
              ? 'grid-cols-3 gap-2.5'
              : 'grid-cols-3 gap-3 auto-rows-[minmax(110px,auto)]'
          }`}
          variants={bentoContainerVariants}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={bentoItemVariants}
              whileHover={{
                scale: 1.02,
                transition: { type: 'spring', damping: 20, stiffness: 300 },
              }}
              className={
                // El featured ocupa las 3 columnas en mobile y 2 en desktop
                stat.featured
                  ? isMobile
                    ? 'col-span-3'
                    : 'col-span-2 row-span-1'
                  : ''
              }
            >
              <SpotlightCard
                size={260}
                color={
                  stat.featured
                    ? 'rgba(125, 211, 192, 0.14)'
                    : 'rgba(255, 255, 255, 0.10)'
                }
                className={`relative h-full rounded-2xl border organic-transition ${
                  stat.featured
                    ? 'border-white/15 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent p-5 md:p-6 flex flex-col justify-between'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20 p-3.5 md:p-5 flex flex-col justify-between min-h-[100px]'
                }`}
              >
                <div
                  className={`font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase truncate ${
                    stat.featured ? 'text-[var(--color-accent)]/80' : 'text-white/45'
                  }`}
                >
                  {stat.featured
                    ? `${String(i + 1).padStart(2, '0')} · ${stat.label}`
                    : stat.label}
                </div>

                <div
                  className={`font-light text-white tabular-nums leading-none mt-4 md:mt-6 ${
                    stat.featured
                      ? isMobile
                        ? 'text-6xl'
                        : 'text-6xl md:text-7xl'
                      : isMobile
                        ? 'text-2xl'
                        : 'text-4xl md:text-5xl'
                  }`}
                >
                  {stat.number}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}

          {/* "Actualmente" — tarjeta que ocupa el ancho completo */}
          <motion.div
            className="col-span-3 mt-1 md:mt-2"
            variants={bentoItemVariants}
          >
            <SpotlightCard
              size={380}
              color="rgba(139, 92, 246, 0.10)"
              className="rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 organic-transition p-5 md:p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`font-light ${
                    isMobile ? 'text-lg' : 'text-xl'
                  } flex items-baseline gap-2`}
                >
                  <span className="font-serif italic font-normal text-white">
                    {t.about.currently}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[10px] font-mono tracking-[0.22em] uppercase text-white/35"
                  >
                    / now
                  </span>
                </h3>

                <motion.div
                  aria-hidden="true"
                  className="relative w-2 h-2 rounded-full"
                  style={{ background: 'var(--color-accent)' }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              <ul className={`grid ${isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-3 gap-3'}`}>
                {t.about.activities.map((activity, idx) => {
                  const Icon = ACTIVITY_ICONS[activity.icon]
                  return (
                    <motion.li
                      key={idx}
                      className={`group flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-2.5 hover:bg-white/[0.06] hover:border-white/15 organic-transition ${
                        isMobile ? '' : 'min-h-[48px]'
                      }`}
                      whileHover={{ x: isMobile ? 4 : 0, y: isMobile ? 0 : -2 }}
                      transition={{ type: 'spring', damping: 18, stiffness: 300 }}
                    >
                      {Icon && (
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-white/[0.08] organic-transition">
                          <Icon className="w-[14px] h-[14px] text-white/70 group-hover:text-white organic-transition" />
                        </span>
                      )}
                      <span className="text-sm text-white/75 group-hover:text-white organic-transition min-w-0 flex-1 truncate">
                        {activity.text}
                      </span>
                      <ArrowUpRightIcon
                        className="w-3.5 h-3.5 text-white/25 group-hover:text-white/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 organic-transition"
                        aria-hidden="true"
                      />
                    </motion.li>
                  )
                })}
              </ul>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
