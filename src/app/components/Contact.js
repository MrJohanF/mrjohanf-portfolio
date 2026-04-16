import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { contactInfo } from '../data/contact'
import SpotlightCard from './SpotlightCard'

export default function Contact({ t, isMobile, handleContactClick, handleDownloadCV }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
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

  return (
    <motion.div
      className="text-center animate-fade-up"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={isMobile ? 'mb-12' : 'mb-16'}
        variants={headerVariants}
      >
        <motion.h2
          className={`${
            isMobile ? 'text-3xl' : 'text-5xl md:text-6xl'
          } font-light mb-4 md:mb-6`}
          variants={headerVariants}
        >
          {t.contact.title}
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
            isMobile ? 'text-base px-4' : 'text-xl'
          } text-white/80 max-w-2xl mx-auto leading-relaxed`}
          variants={headerVariants}
        >
          {t.contact.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        className={`grid ${
          isMobile
            ? 'grid-cols-1 gap-4 max-w-sm mx-auto mb-12'
            : 'grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16'
        }`}
        variants={cardsContainerVariants}
      >
        {contactInfo.map((contact) => {
          const Icon = contact.icon
          return (
            <SpotlightCard
              as={motion.button}
              size={280}
              key={contact.id}
              onClick={() => handleContactClick(contact.action)}
              aria-label={`${contact.label}: ${contact.value}`}
              className={`group flex items-start gap-4 w-full ${
                isMobile ? 'p-4' : 'p-6'
              } border border-white/10 rounded-2xl hover:border-white/30 hover:bg-white/5 hover-lift organic-transition text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60`}
              variants={cardVariants}
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
                className={`flex-shrink-0 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 organic-transition ${
                  isMobile ? 'w-10 h-10' : 'w-12 h-12'
                }`}
              >
                <Icon className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} text-white/80 group-hover:text-white organic-transition`} />
              </span>

              <span className="min-w-0 flex-1">
                <span
                  className={`block text-white/60 ${
                    isMobile ? 'text-xs' : 'text-sm'
                  } mb-1`}
                >
                  {contact.label}
                </span>
                <span
                  className={`block font-medium truncate group-hover:text-white organic-transition ${
                    isMobile ? 'text-sm' : 'text-base'
                  }`}
                >
                  {contact.value}
                </span>
              </span>
            </SpotlightCard>
          )
        })}
      </motion.div>

      <motion.button
        onClick={handleDownloadCV}
        aria-label={t.contact.downloadCV}
        className={`inline-flex items-center gap-2 bg-white text-black ${
          isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'
        } rounded-full font-medium hover-lift organic-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
        variants={buttonVariants}
        whileHover={{
          scale: 1.05,
          transition: { type: 'spring', damping: 15, stiffness: 300 },
        }}
        whileTap={{
          scale: 0.95,
          transition: { type: 'spring', damping: 15, stiffness: 400 },
        }}
      >
        <ArrowDownTrayIcon className={isMobile ? 'w-4 h-4' : 'w-5 h-5'} />
        <span>{t.contact.downloadCV}</span>
      </motion.button>
    </motion.div>
  )
}
