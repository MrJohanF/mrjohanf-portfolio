/* src/app/components/Skills.js */
import { motion } from 'framer-motion'
import SpotlightCard from './SpotlightCard'
import TechIcon, { hasTechIcon } from './TechIcon'

// Niveles: 'core' = stack principal, 'proficient' = sólido, 'familiar' = conocimiento funcional.
// Se prefiere etiquetar honestamente el dominio en lugar de usar porcentajes arbitrarios.
const SKILLS = [
  { name: 'Angular',       tier: 'core' },
  { name: 'React',         tier: 'core' },
  { name: 'JavaScript',    tier: 'core' },
  { name: 'TypeScript',    tier: 'core' },
  { name: 'Node.js',       tier: 'proficient' },
  { name: 'Express',       tier: 'proficient' },
  { name: 'Java',          tier: 'proficient' },
  { name: '.Net',          tier: 'proficient' },
  { name: 'UI/UX Design',  tier: 'familiar' },
  { name: 'PostgreSQL',    tier: 'familiar' },
]

const TIER_ORDER = ['core', 'proficient', 'familiar']

const TIER_STYLES = {
  core: {
    dot: 'bg-[var(--color-accent)]',
    badge: 'text-[var(--color-accent)] bg-[var(--color-accent)]/10 border-[var(--color-accent)]/25',
  },
  proficient: {
    dot: 'bg-white/80',
    badge: 'text-white/80 bg-white/[0.06] border-white/15',
  },
  familiar: {
    dot: 'bg-white/40',
    badge: 'text-white/55 bg-white/[0.03] border-white/10',
  },
}

export default function Skills({ t, isMobile }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  }

  const headerItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 200, duration: 0.3 },
    },
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 22, stiffness: 280, duration: 0.25 },
    },
  }

  const toolsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.05 },
    },
  }

  const toolGroupVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 250, duration: 0.25 },
    },
  }

  const toolItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', damping: 20, stiffness: 400, duration: 0.2 },
    },
  }

  // Agrupa skills por tier para mostrarlos en columnas separadas
  const grouped = TIER_ORDER.map((tier) => ({
    tier,
    label: t.skills.levels[tier],
    items: SKILLS.filter((s) => s.tier === tier),
  }))

  return (
    <motion.div
      className={`${isMobile ? 'space-y-8' : 'animate-slide-up'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <div className={isMobile ? 'mb-8 text-center' : 'mb-10'}>
        <motion.span
          className={`inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-3`}
          variants={headerItemVariants}
        >
          04 — {t.skills.title}
        </motion.span>

        <motion.h2
          className={`${
            isMobile ? 'text-[1.75rem] leading-tight mb-4' : 'text-5xl md:text-6xl mb-5'
          } font-light tracking-tight`}
          variants={headerItemVariants}
        >
          {t.skills.subtitle}
        </motion.h2>

        <motion.div
          className={`${isMobile ? 'w-16 mx-auto' : 'w-12'} h-0.5 bg-white/60`}
          variants={{
            hidden: { width: 0, opacity: 0 },
            visible: {
              width: isMobile ? 64 : 48,
              opacity: 1,
              transition: { type: 'spring', damping: 20, stiffness: 200, duration: 0.4 },
            },
          }}
        />
      </div>

      {/* Skills por nivel */}
      <motion.div
        className={`grid ${
          isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-3 gap-6 max-w-5xl'
        }`}
        variants={gridVariants}
      >
        {grouped.map((group) => {
          const styles = TIER_STYLES[group.tier]
          return (
            <motion.div
              key={group.tier}
              className="space-y-3"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${styles.dot}`}
                  aria-hidden="true"
                />
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/60">
                  {group.label}
                </span>
                <span className="font-mono text-[11px] text-white/25 ml-auto tabular-nums">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>

              <SpotlightCard
                size={260}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-1.5 hover:border-white/20 organic-transition"
              >
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/[0.04] organic-transition"
                  >
                    {hasTechIcon(skill.name) ? (
                      <TechIcon
                        name={skill.name}
                        className="w-4 h-4 text-white/70 group-hover/skill:text-white organic-transition"
                      />
                    ) : (
                      <span className="w-4 h-4 rounded-sm bg-white/10" aria-hidden="true" />
                    )}
                    <span className="text-sm text-white/85 group-hover/skill:text-white organic-transition">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </SpotlightCard>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Herramientas adicionales */}
      <motion.div
        className={`${
          isMobile ? 'mt-10 pt-8' : 'mt-10 pt-8'
        } border-t border-white/10`}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              damping: 25,
              stiffness: 200,
              duration: 0.3,
              delay: 0.3,
            },
          },
        }}
      >
        <motion.h3
          className={`${
            isMobile ? 'text-2xl mb-6 text-center' : 'text-xl mb-6'
          } font-light text-white/80`}
          variants={headerItemVariants}
        >
          {t.skills.additional}
        </motion.h3>

        <motion.div
          className={`grid ${
            isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-2 md:grid-cols-4 gap-6'
          }`}
          variants={toolsContainerVariants}
        >
          {[
            { category: t.skills.categories.frontend, tools: ['Zustand', 'Next.js', 'Vue.js', 'Tailwind'] },
            { category: t.skills.categories.backend,  tools: ['Node.js', 'Express', 'Java', '.Net'] },
            { category: t.skills.categories.database, tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Mysql'] },
            { category: t.skills.categories.devops,   tools: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'] },
          ].map((group) => (
            <motion.div
              key={group.category}
              className={`space-y-3 ${
                isMobile
                  ? 'bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-white/10'
                  : ''
              }`}
              variants={toolGroupVariants}
            >
              <h4
                className={`font-mono text-[11px] tracking-[0.18em] uppercase text-white/50 ${
                  isMobile ? 'text-center mb-4' : ''
                }`}
              >
                {group.category}
              </h4>

              <motion.div
                className={`flex flex-wrap gap-2 ${isMobile ? 'justify-center' : ''}`}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.03, delayChildren: 0.05 },
                  },
                }}
              >
                {group.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-full hover:bg-white/[0.08] hover:text-white hover:border-white/20 organic-transition"
                    variants={toolItemVariants}
                  >
                    {hasTechIcon(tool) && (
                      <TechIcon name={tool} className="w-3 h-3" />
                    )}
                    <span>{tool}</span>
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
