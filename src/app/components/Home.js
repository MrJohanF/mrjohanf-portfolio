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
        // Espaciado general mejorado
        isMobile 
          ? 'px-4 py-8' 
          : 'px-6 py-12'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Contenedor principal con mejor control de espacios */}
      <div className="max-w-5xl mx-auto">
        
        {/* Sección de saludo y nombre */}
        <div className={`${isMobile ? 'space-y-6' : 'space-y-8 lg:space-y-10'}`}>
          
          {/* Saludo - Tamaño aumentado */}
          <motion.p 
            className={`text-white/70 font-medium animate-float-subtle ${
              isMobile 
                ? 'text-lg' 
                : 'text-lg md:text-xl lg:text-2xl'
            }`}
            variants={itemVariants}
          >
            {t.home.greeting}
          </motion.p>
          
          {/* Nombre - Con mejor espaciado inferior */}
          <motion.h1 
            className={`font-light tracking-tight text-white ${
              isMobile 
                ? 'text-4xl leading-tight' 
                : 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight'
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
        
        {/* Sección de título principal - Espaciado mejorado */}
        <div className={`${isMobile ? 'mt-8 mb-6' : 'mt-12 lg:mt-16 mb-8 lg:mb-10'}`}>
          <motion.div 
            className={`text-white/90 font-light mx-auto ${
              isMobile 
                ? 'text-lg px-2 max-w-sm' 
                : 'text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl'
            }`}
            variants={itemVariants}
          >
            {/* Primera línea del título */}
            <div className="leading-relaxed">
              {t.home.title}
            </div>
            {/* Segunda línea con espaciado reducido */}
            <div className={`text-white leading-relaxed ${isMobile ? 'mt-1' : 'mt-2'}`}>
              {t.home.titleHighlight}
            </div>
          </motion.div>
        </div>
        
        {/* Subtítulo - Tamaño y contraste mejorados */}
        <motion.div 
          className={`${isMobile ? 'mb-10' : 'mb-12 lg:mb-16'}`}
          variants={itemVariants}
        >
          <p 
            className={`text-white/75 mx-auto leading-relaxed ${
              isMobile 
                ? 'text-base px-4 max-w-sm' 
                : 'text-base md:text-lg lg:text-xl max-w-3xl'
            }`}
          >
            {t.home.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Botones - Espaciado significativamente mejorado */}
      <motion.div 
        className={`flex items-center justify-center ${
          isMobile 
            ? 'flex-col gap-4 pt-2 px-4 pb-12' 
            : 'flex-col sm:flex-row gap-6 lg:gap-8 pt-4'
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
              : 'px-7 py-4 md:px-9 md:py-5 text-base md:text-lg'
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
          <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 organic-transition" />
        </motion.button>
        
        <motion.button
          onClick={() => handleSectionChange('contact')}
          className={`flex items-center justify-center space-x-3 border border-white/30 text-white rounded-full font-medium hover:border-white/50 hover:bg-white/10 organic-transition ${
            isMobile 
              ? 'px-7 py-4 text-base w-full max-w-xs' 
              : 'px-7 py-4 md:px-9 md:py-5 text-base md:text-lg'
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
      
      {/* Espaciado inferior adicional */}
      <div className={`${isMobile ? 'h-8' : 'h-16'}`}></div>
    </motion.div>
  )
}