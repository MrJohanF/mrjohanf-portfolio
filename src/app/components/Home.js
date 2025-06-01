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
      className={`text-center space-y-8 md:space-y-12 organic-transition ${
        isLoaded ? 'animate-fade-up' : 'opacity-0'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={`space-y-6 ${isMobile ? 'px-2' : ''}`}>
        <div className="inline-block">
          <motion.p 
            className={`text-white/60 ${
              isMobile ? 'text-lg' : 'text-lg'
            } font-medium mb-4 animate-float-subtle`}
            variants={itemVariants}
          >
            {t.home.greeting}
          </motion.p>
          
          <motion.h1 
            className={`${
              isMobile ? 'text-5xl leading-tight' : 'text-6xl md:text-8xl'
            } font-light tracking-tight mb-6`}
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
        
        <motion.p 
          className={`${
            isMobile ? 'text-xl leading-relaxed px-2' : 'text-2xl md:text-3xl'
          } text-white/80 font-light leading-relaxed max-w-4xl mx-auto`}
          variants={itemVariants}
        >
          {t.home.title}
          <span className="text-white block mt-2"> {t.home.titleHighlight}</span>
        </motion.p>
        
        <motion.p 
          className={`${
            isMobile ? 'text-base px-4 leading-relaxed' : 'text-lg'
          } text-white/60 max-w-2xl mx-auto`}
          variants={itemVariants}
        >
          {t.home.subtitle}
        </motion.p>
      </div>

      <motion.div 
        className={`flex flex-col gap-4 ${
          isMobile ? 'pt-8 px-4 pb-16' : 'sm:flex-row pt-8'
        } items-center justify-center`}
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
          className={`group flex items-center justify-center space-x-3 bg-white text-black ${
            isMobile ? 'px-8 py-4 text-base w-full max-w-sm' : 'px-8 py-4'
          } rounded-full font-medium hover-lift organic-transition shadow-lg`}
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
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 organic-transition" />
        </motion.button>
        
        <motion.button
          onClick={() => handleSectionChange('contact')}
          className={`flex items-center justify-center space-x-3 border border-white/20 ${
            isMobile ? 'px-8 py-4 text-base w-full max-w-sm' : 'px-8 py-4'
          } rounded-full font-medium hover:border-white/40 hover:bg-white/5 organic-transition`}
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