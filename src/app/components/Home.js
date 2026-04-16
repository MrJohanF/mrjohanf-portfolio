import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home({ t, isMobile, isLoaded, handleSectionChange }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 200, duration: 0.3 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 20, stiffness: 300, duration: 0.25 },
    },
  }

  // Divide el nombre en palabras para el split-text reveal. La última
  // palabra se renderiza en Fraunces italic para crear contraste editorial.
  const nameParts = t.home.name.split(' ')
  const lastWordIndex = nameParts.length - 1

  return (
    <motion.div
      className={`relative text-center organic-transition w-full ${
        isLoaded ? 'animate-fade-up' : 'opacity-0'
      } ${isMobile ? 'px-4' : 'px-6'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decoraciones editoriales laterales (solo desktop). Dan asimetría y
       * contextualizan el hero sin necesidad de un retrato, convirtiendo la
       * pieza en algo que se lee como un "document cover". */}
      {!isMobile && (
        <>
          <motion.div
            aria-hidden="true"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col items-start gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-white/35"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <span className="w-8 h-px bg-white/20" />
            <div className="flex flex-col gap-1">
              <span className="text-white/60">2026</span>
              <span>Portfolio</span>
              <span className="text-white/25">— v2.1</span>
            </div>
            <span className="w-8 h-px bg-white/20" />
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col items-end gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-white/35"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <span className="w-8 h-px bg-white/20" />
            <div className="flex flex-col gap-1 items-end">
              <span className="text-white/60">04°42′N</span>
              <span className="text-white/60">74°04′W</span>
              <span className="text-white/25">— Bogotá</span>
            </div>
            <span className="w-8 h-px bg-white/20" />
          </motion.div>
        </>
      )}

      {/* Monograma JF de fondo: glyph grande en Fraunces italic muy tenue.
       * Sirve como marca decorativa detrás del nombre, reforzando el estilo
       * editorial. Hereda la tipografía serif y es puramente decorativo. */}
      {!isMobile && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] font-serif italic text-white/[0.025] select-none leading-none whitespace-nowrap"
          style={{ fontSize: 'clamp(20rem, 32vw, 40rem)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        >
          JF
        </motion.span>
      )}

      <div className="relative max-w-4xl mx-auto">
        {/* Eyebrow / kicker editorial */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-5"
          variants={itemVariants}
        >
          <span
            aria-hidden="true"
            className="h-px w-8 bg-white/25"
          />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/50">
            {t.home.greeting}
          </span>
          <span
            aria-hidden="true"
            className="h-px w-8 bg-white/25"
          />
        </motion.div>

        {/* Nombre — split-text reveal con mezcla de Inter y Fraunces italic */}
        <motion.h1
          className={`font-light tracking-[-0.04em] text-white leading-[0.95] text-balance ${
            isMobile
              ? 'text-[3.5rem] mb-6'
              : 'text-6xl md:text-7xl lg:text-[7.5rem] mb-7 md:mb-9'
          }`}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.05 },
            },
          }}
          aria-label={t.home.name}
        >
          {nameParts.map((word, i) => {
            const isLast = i === lastWordIndex && nameParts.length > 1
            return (
              <span
                key={`${word}-${i}`}
                className={`inline-block overflow-hidden align-bottom ${
                  i < lastWordIndex ? 'mr-[0.22em]' : ''
                }`}
                aria-hidden="true"
              >
                <motion.span
                  className={`inline-block ${
                    isLast ? 'font-serif italic font-normal' : ''
                  }`}
                  variants={{
                    hidden: { y: '110%' },
                    visible: {
                      y: '0%',
                      transition: {
                        type: 'spring',
                        damping: 22,
                        stiffness: 160,
                        mass: 0.9,
                      },
                    },
                  }}
                >
                  {word}
                </motion.span>
              </span>
            )
          })}
        </motion.h1>

        {/* Título + highlight */}
        <motion.p
          className={`text-white/70 font-light mx-auto tracking-tight ${
            isMobile
              ? 'text-base max-w-sm mb-4'
              : 'text-lg md:text-xl lg:text-[1.35rem] max-w-3xl mb-5'
          }`}
          variants={itemVariants}
        >
          <span>{t.home.title}</span>{' '}
          <span className="font-serif italic text-white tracking-tight">
            {t.home.titleHighlight}
          </span>
          <span className="text-white/70">.</span>
        </motion.p>

        {/* Subtítulo */}
        <motion.p
          className={`text-white/50 mx-auto leading-relaxed ${
            isMobile
              ? 'text-sm max-w-sm mb-9'
              : 'text-sm md:text-base max-w-2xl mb-11'
          }`}
          variants={itemVariants}
        >
          {t.home.subtitle}
        </motion.p>

        {/* CTAs con jerarquía clara: primario = pill blanco, secundario = ghost con flecha */}
        <motion.div
          className={`flex items-center justify-center ${
            isMobile ? 'flex-col gap-4' : 'flex-row gap-5'
          }`}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.1 },
            },
          }}
        >
          <motion.button
            onClick={() => handleSectionChange('projects')}
            className={`group flex items-center justify-center gap-2 bg-white text-black rounded-full font-medium organic-transition shadow-[0_8px_30px_rgb(255,255,255,0.12)] hover:shadow-[0_10px_40px_rgb(255,255,255,0.2)] ${
              isMobile
                ? 'px-7 py-3.5 text-sm w-full max-w-xs'
                : 'px-8 py-3.5 md:px-9 md:py-4 text-sm md:text-base'
            }`}
            variants={buttonVariants}
            whileHover={{
              scale: 1.03,
              y: -2,
              transition: { type: 'spring', damping: 15, stiffness: 300 },
            }}
            whileTap={{
              scale: 0.97,
              transition: { type: 'spring', damping: 15, stiffness: 400 },
            }}
          >
            <span>{t.home.viewWork}</span>
            <ArrowRightIcon
              className={`group-hover:translate-x-1 organic-transition ${
                isMobile ? 'w-4 h-4' : 'w-4 h-4 md:w-5 md:h-5'
              }`}
            />
          </motion.button>

          {/* CTA secundario: texto puro con subrayado animado, sin borde */}
          <motion.button
            onClick={() => handleSectionChange('contact')}
            className={`group relative inline-flex items-center gap-2 text-white/75 hover:text-white organic-transition ${
              isMobile ? 'text-sm py-2' : 'text-sm md:text-base py-2'
            }`}
            variants={buttonVariants}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative">
              {t.home.contact}
              <span
                aria-hidden="true"
                className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-current group-hover:scale-x-100 transition-transform duration-500 ease-out"
              />
            </span>
            <ArrowRightIcon
              className={`-rotate-45 group-hover:rotate-0 group-hover:translate-x-0.5 organic-transition ${
                isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'
              }`}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
