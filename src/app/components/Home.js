import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home({ t, isMobile, isLoaded, handleSectionChange }) {
  // Container animation with stagger for children
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

  // Item animations with spring physics
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

  // Button variants with more responsive feel
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
      className={`text-center organic-transition ${
        isLoaded ? 'animate-fade-up' : 'opacity-0'
      } ${
        // Espaciado específico para cada breakpoint
        isMobile 
          ? 'px-4 py-8' 
          : 'px-6 py-8 md:py-10 lg:py-14 xl:py-16'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Contenedor principal */}
      <div className="max-w-5xl mx-auto">
        
        {/* Sección de saludo y nombre */}
        <div className={`${
          isMobile 
            ? 'space-y-5' 
            : 'space-y-6 md:space-y-8 lg:space-y-12 xl:space-y-14'
        }`}>
          
          {/* Saludo - Tamaños específicos para portátil */}
          <motion.p 
            className={`text-white/70 font-medium animate-float-subtle ${
              isMobile 
                ? 'text-lg' 
                : 'text-base md:text-lg lg:text-xl xl:text-2xl'
            }`}
            variants={itemVariants}
          >
            {t.home.greeting}
          </motion.p>
          
          {/* Nombre - Escalado específico para portátil */}
          <motion.h1 
            className={`font-light tracking-tight text-white leading-tight ${
              isMobile 
                ? 'text-4xl' 
                : 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'
            }`}
            variants={{
              hidden: { 
                opacity: 0, 
                y: 30,
                scale: 0.95
              },
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
        </div>
        
        {/* Sección de título principal - Espaciado específico para portátil */}
        <div className={`${
          isMobile 
            ? 'mt-8 mb-6' 
            : 'mt-8 mb-6 md:mt-10 md:mb-8 lg:mt-16 lg:mb-12 xl:mt-20 xl:mb-14'
        }`}>
          <motion.div 
            className={`text-white/90 font-light mx-auto ${
              isMobile 
                ? 'text-lg px-2 max-w-sm' 
                : 'text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl max-w-4xl'
            }`}
            variants={itemVariants}
          >
            {/* Primera línea del título */}
            <div className="leading-relaxed">
              {t.home.title}
            </div>
            {/* Segunda línea con espaciado mínimo */}
            <div className="text-white leading-relaxed mt-1">
              {t.home.titleHighlight}
            </div>
          </motion.div>
        </div>
        
        {/* Subtítulo - Mejor contraste y tamaño para portátil */}
        <motion.div 
          className={`${
            isMobile 
              ? 'mb-10' 
              : 'mb-8 md:mb-10 lg:mb-14 xl:mb-16'
          }`}
          variants={itemVariants}
        >
          <p 
            className={`text-white/80 mx-auto leading-relaxed ${
              isMobile 
                ? 'text-base px-4 max-w-sm' 
                : 'text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl'
            }`}
          >
            {t.home.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Botones - Espaciado mejorado específicamente para portátil */}
      <motion.div 
        className={`flex items-center justify-center ${
          isMobile 
            ? 'flex-col gap-4 pt-2 px-4 pb-12' 
            : 'flex-col sm:flex-row gap-4 md:gap-5 lg:gap-8 xl:gap-10 pt-2 md:pt-4'
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
          className={`group flex items-center justify-center space-x-3 bg-white text-black rounded-full font-medium hover-lift organic-transition shadow-lg ${
            isMobile 
              ? 'px-7 py-4 text-base w-full max-w-xs' 
              : 'px-6 py-3 md:px-7 md:py-4 lg:px-8 lg:py-4 xl:px-9 xl:py-5 text-sm md:text-base lg:text-base xl:text-lg'
          }`}
          variants={buttonVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", damping: 15, stiffness: 300 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { type: "spring", damping: 15, stiffness: 400 }
          }}
        >
          <span>{t.home.viewWork}</span>
          <ArrowRightIcon className={`group-hover:translate-x-1 organic-transition ${
            isMobile ? 'w-5 h-5' : 'w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6'
          }`} />
        </motion.button>
        
        <motion.button
          onClick={() => handleSectionChange('contact')}
          className={`flex items-center justify-center space-x-3 border border-white/30 text-white rounded-full font-medium hover:border-white/50 hover:bg-white/10 organic-transition ${
            isMobile 
              ? 'px-7 py-4 text-base w-full max-w-xs' 
              : 'px-6 py-3 md:px-7 md:py-4 lg:px-8 lg:py-4 xl:px-9 xl:py-5 text-sm md:text-base lg:text-base xl:text-lg'
          }`}
          variants={buttonVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", damping: 15, stiffness: 300 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { type: "spring", damping: 15, stiffness: 400 }
          }}
        >
          <span>{t.home.contact}</span>
        </motion.button>
      </motion.div>
      
      {/* Espaciado inferior progresivo */}
      <div className={`${
        isMobile 
          ? 'h-8' 
          : 'h-8 md:h-12 lg:h-16 xl:h-20'
      }`}></div>
    </motion.div>
  )
}