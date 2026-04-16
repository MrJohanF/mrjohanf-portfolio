import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home({ t, isMobile, isLoaded, handleSectionChange }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.3
      }
    }
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        duration: 0.25
      }
    }
  }

  return (
    <motion.div
      className={`text-center organic-transition w-full ${
        isLoaded ? 'animate-fade-up' : 'opacity-0'
      } ${isMobile ? 'px-4' : 'px-6'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">

        {/* Saludo */}
        <motion.p
          className={`text-white/60 font-medium mb-3 ${
            isMobile ? 'text-base' : 'text-base md:text-lg'
          }`}
          variants={itemVariants}
        >
          {t.home.greeting}
        </motion.p>

        {/* Nombre */}
        <motion.h1
          className={`font-light tracking-tight text-white leading-[1.05] ${
            isMobile
              ? 'text-5xl mb-6'
              : 'text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8'
          }`}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.96 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                damping: 20,
                stiffness: 150,
                duration: 0.4
              }
            }
          }}
        >
          {t.home.name}
        </motion.h1>

        {/* Divisor sutil */}
        <motion.div
          className={`h-0.5 bg-white/40 mx-auto ${
            isMobile ? 'w-12 mb-6' : 'w-16 mb-8'
          }`}
          variants={itemVariants}
        />

        {/* Título principal */}
        <motion.div
          className={`text-white/80 font-light mx-auto ${
            isMobile
              ? 'text-base max-w-sm mb-5'
              : 'text-lg md:text-xl lg:text-2xl max-w-3xl mb-6'
          }`}
          variants={itemVariants}
        >
          <span>{t.home.title} </span>
          <span className="text-white">{t.home.titleHighlight}</span>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          className={`text-white/60 mx-auto leading-relaxed ${
            isMobile
              ? 'text-sm max-w-sm mb-8'
              : 'text-sm md:text-base max-w-2xl mb-10'
          }`}
          variants={itemVariants}
        >
          {t.home.subtitle}
        </motion.p>

        {/* Botones */}
        <motion.div
          className={`flex items-center justify-center ${
            isMobile ? 'flex-col gap-3' : 'flex-row gap-4'
          }`}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
              }
            }
          }}
        >
          <motion.button
            onClick={() => handleSectionChange('projects')}
            className={`group flex items-center justify-center gap-2 bg-white text-black rounded-full font-medium hover-lift organic-transition shadow-lg ${
              isMobile
                ? 'px-7 py-3.5 text-sm w-full max-w-xs'
                : 'px-7 py-3 md:px-8 md:py-3.5 text-sm md:text-base'
            }`}
            variants={buttonVariants}
            whileHover={{
              scale: 1.04,
              transition: { type: "spring", damping: 15, stiffness: 300 }
            }}
            whileTap={{
              scale: 0.96,
              transition: { type: "spring", damping: 15, stiffness: 400 }
            }}
          >
            <span>{t.home.viewWork}</span>
            <ArrowRightIcon
              className={`group-hover:translate-x-1 organic-transition ${
                isMobile ? 'w-4 h-4' : 'w-4 h-4 md:w-5 md:h-5'
              }`}
            />
          </motion.button>

          <motion.button
            onClick={() => handleSectionChange('contact')}
            className={`flex items-center justify-center border border-white/30 text-white rounded-full font-medium hover:border-white/50 hover:bg-white/10 organic-transition ${
              isMobile
                ? 'px-7 py-3.5 text-sm w-full max-w-xs'
                : 'px-7 py-3 md:px-8 md:py-3.5 text-sm md:text-base'
            }`}
            variants={buttonVariants}
            whileHover={{
              scale: 1.04,
              transition: { type: "spring", damping: 15, stiffness: 300 }
            }}
            whileTap={{
              scale: 0.96,
              transition: { type: "spring", damping: 15, stiffness: 400 }
            }}
          >
            <span>{t.home.contact}</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
