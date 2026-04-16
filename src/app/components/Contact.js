'use client'

import { motion } from 'framer-motion'
import {
  ArrowDownTrayIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline'
import { contactInfo } from '../data/contact'
import SpotlightCard from './SpotlightCard'

export default function Contact({ t, isMobile, handleContactClick, handleDownloadCV }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 200, duration: 0.3 },
    },
  }

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 20, stiffness: 300, duration: 0.25 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 20, stiffness: 300, duration: 0.3 },
    },
  }

  // Divide el título en palabras y rinde la última en Fraunces italic
  const titleWords = t.contact.title.split(' ')
  const lastWord = titleWords.pop()

  return (
    <motion.div
      className="text-center animate-fade-up"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={isMobile ? 'mb-10' : 'mb-14'}
        variants={headerVariants}
      >
        <motion.div
          className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/40 mb-3"
          variants={headerVariants}
        >
          05 — {t.nav.contact}
        </motion.div>

        <motion.h2
          className={`${
            isMobile ? 'text-4xl' : 'text-5xl md:text-6xl'
          } font-light mb-4 md:mb-6 tracking-tight`}
          variants={headerVariants}
        >
          {titleWords.length > 0 && <span>{titleWords.join(' ')} </span>}
          <span className="font-serif italic font-normal text-white">
            {lastWord}
          </span>
        </motion.h2>

        <motion.div
          className="w-12 h-0.5 bg-white/60 mx-auto mb-6 md:mb-8"
          variants={{
            hidden: { width: 0, opacity: 0 },
            visible: {
              width: 48,
              opacity: 1,
              transition: { type: 'spring', damping: 20, stiffness: 200, duration: 0.4 },
            },
          }}
        />

        <motion.p
          className={`${
            isMobile ? 'text-base px-4' : 'text-lg md:text-xl'
          } text-white/70 max-w-2xl mx-auto leading-relaxed`}
          variants={headerVariants}
        >
          {t.contact.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        className={`grid ${
          isMobile
            ? 'grid-cols-1 gap-3 max-w-sm mx-auto mb-10'
            : 'grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-14'
        }`}
        variants={cardsContainerVariants}
      >
        {contactInfo.map((contact) => {
          const Icon = contact.icon
          return (
            <motion.div key={contact.id} variants={cardVariants}>
              <SpotlightCard
                as="button"
                size={280}
                color={`${contact.brandColor}20`}
                onClick={() => handleContactClick(contact.action)}
                aria-label={`${contact.label}: ${contact.value}`}
                className={`group relative flex items-start gap-4 w-full ${
                  isMobile ? 'p-4' : 'p-5'
                } border border-white/10 rounded-2xl hover:border-white/25 hover:-translate-y-1 organic-transition text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 overflow-hidden`}
                style={{
                  // Se usa como variable CSS para que el glow tome el color de marca
                  '--brand-color': contact.brandColor,
                }}
              >
                {/* Glow de marca que aparece al hover (blob difuminado) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${contact.brandColor} 0%, transparent 70%)`,
                    filter: 'blur(30px)',
                  }}
                />

                <span
                  className={`relative flex-shrink-0 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 organic-transition ${
                    isMobile ? 'w-10 h-10' : 'w-11 h-11'
                  }`}
                >
                  <Icon
                    className={`${isMobile ? 'w-5 h-5' : 'w-5 h-5'} text-white/70 group-hover:text-[var(--brand-color)] organic-transition`}
                    aria-hidden="true"
                  />
                </span>

                <span className="relative min-w-0 flex-1 flex flex-col">
                  <span
                    className={`font-mono text-[10px] tracking-[0.18em] uppercase text-white/45 ${
                      isMobile ? '' : 'mb-1'
                    }`}
                  >
                    {contact.label}
                  </span>
                  <span
                    className={`font-medium truncate text-white/85 group-hover:text-white organic-transition ${
                      isMobile ? 'text-sm' : 'text-[15px]'
                    }`}
                  >
                    {contact.value}
                  </span>
                </span>

                <ArrowUpRightIcon
                  className="relative flex-shrink-0 w-4 h-4 text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 organic-transition self-center"
                  aria-hidden="true"
                />
              </SpotlightCard>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Botón CV — estética ghost diferenciada del CTA primario del hero */}
      <motion.button
        onClick={handleDownloadCV}
        aria-label={t.contact.downloadCV}
        className={`group relative inline-flex items-center gap-3 text-white/90 hover:text-white rounded-full border border-white/20 hover:border-white/40 bg-white/[0.03] hover:bg-white/[0.08] organic-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
          isMobile ? 'px-5 py-3 text-sm' : 'px-6 py-3.5 text-sm'
        }`}
        variants={buttonVariants}
        whileHover={{
          scale: 1.03,
          transition: { type: 'spring', damping: 15, stiffness: 300 },
        }}
        whileTap={{
          scale: 0.97,
          transition: { type: 'spring', damping: 15, stiffness: 400 },
        }}
      >
        <span
          aria-hidden="true"
          className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 organic-transition"
        >
          <ArrowDownTrayIcon className="w-3.5 h-3.5 group-hover:translate-y-0.5 organic-transition" />
        </span>
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
          {t.contact.downloadCV}
        </span>
        <span
          aria-hidden="true"
          className="font-mono text-[10px] text-white/40 tracking-wider"
        >
          · PDF
        </span>
      </motion.button>
    </motion.div>
  )
}
