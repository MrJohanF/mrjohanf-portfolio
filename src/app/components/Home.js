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
        // Espaciado más controlado y responsivo
        isMobile 
          ? 'space-y-6 px-4' 
          : 'space-y-6 lg:space-y-8 xl:space-y-10 px-6'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Contenedor principal con mejor control de espacios */}
      <div className="max-w-5xl mx-auto">
        <div className={`space-y-4 ${isMobile ? '' : 'lg:space-y-6'}`}>
          
          {/* Saludo */}
          <motion.p 
            className={`text-white/60 font-medium animate-float-subtle ${
              isMobile 
                ? 'text-base' 
                : 'text-sm md:text-base lg:text-lg'
            }`}
            variants={itemVariants}
          >
            {t.home.greeting}
          </motion.p>
          
          {/* Nombre - Tamaños más moderados */}
          <motion.h1 
            className={`font-light tracking-tight ${
              isMobile 
                ? 'text-4xl leading-tight' 
                : 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
            } ${
              // Espaciado inferior más controlado
              isMobile ? 'mb-4' : 'mb-4 lg:mb-6'
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
        
        {/* Título principal - Mejor escalado */}
        <motion.p 
          className={`text-white/90 font-light leading-relaxed mx-auto ${
            isMobile 
              ? 'text-lg px-2 max-w-sm' 
              : 'text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl'
          }`}
          variants={itemVariants}
        >
          {t.home.title}
          <span className="text-white block mt-2"> 
            {t.home.titleHighlight}
          </span>
        </motion.p>
        
        {/* Subtítulo - Más compacto */}
        <motion.p 
          className={`text-white/60 mx-auto ${
            isMobile 
              ? 'text-sm px-4 leading-relaxed max-w-xs' 
              : 'text-sm md:text-base lg:text-lg max-w-2xl'
          }`}
          variants={itemVariants}
        >
          {t.home.subtitle}
        </motion.p>
      </div>

      {/* Botones - Espaciado mejorado */}
      <motion.div 
        className={`flex items-center justify-center ${
          isMobile 
            ? 'flex-col gap-3 pt-6 px-4 pb-8' 
            : 'flex-col sm:flex-row gap-4 pt-6 lg:pt-8'
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
              ? 'px-6 py-3 text-sm w-full max-w-xs' 
              : 'px-6 py-3 md:px-8 md:py-4 text-sm md:text-base'
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
          <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 organic-transition" />
        </motion.button>
        
        <motion.button
          onClick={() => handleSectionChange('contact')}
          className={`flex items-center justify-center space-x-3 border border-white/20 rounded-full font-medium hover:border-white/40 hover:bg-white/5 organic-transition ${
            isMobile 
              ? 'px-6 py-3 text-sm w-full max-w-xs' 
              : 'px-6 py-3 md:px-8 md:py-4 text-sm md:text-base'
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
    </motion.div>
  )
}