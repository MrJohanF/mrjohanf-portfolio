import { motion } from 'framer-motion'

export default function About({ t, isMobile }) {
  // Container animation with stagger
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

  // Text content variants
  const textVariants = {
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

  // Stats container variants
  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  // Individual stat variants
  const statVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
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

  // Activities variants
  const activitiesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.05
      }
    }
  }

  const activityVariants = {
    hidden: { 
      opacity: 0, 
      x: -15,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 250,
        duration: 0.2
      }
    }
  }

  return (
    <motion.div 
      className={`${
        isMobile 
          ? 'space-y-8' 
          : 'grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'
      } animate-slide-up`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Column - Text Content */}
      <div className="space-y-6 md:space-y-8">
        <motion.div variants={textVariants}>
          <h2 className={`${
            isMobile ? 'text-3xl' : 'text-5xl md:text-6xl'
          } font-light mb-4 md:mb-6`}>{t.about.title}</h2>
          
          <motion.div 
            className="w-12 h-0.5 bg-white/60 mb-6 md:mb-8"
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { 
                width: 48, 
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 200,
                  duration: 0.4
                }
              }
            }}
          />
        </motion.div>
        
        <motion.div 
          className={`space-y-4 md:space-y-6 ${
            isMobile ? 'text-base' : 'text-lg'
          } text-white/80 leading-relaxed`}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.06,
                delayChildren: 0.05
              }
            }
          }}
        >
          <motion.p variants={textVariants}>{t.about.p1}</motion.p>
          <motion.p variants={textVariants}>{t.about.p2}</motion.p>
          <motion.p variants={textVariants}>{t.about.p3}</motion.p>
        </motion.div>
      </div>
      
      {/* Right Column - Stats and Activities */}
      <motion.div 
        className={isMobile ? 'mt-8' : 'lg:pl-16'}
        variants={{
          hidden: { opacity: 0, x: 20 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: {
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.3
            }
          }
        }}
      >
        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-6 md:gap-8"
          variants={statsContainerVariants}
        >
          {[
            { number: '60+', label: t.about.stats.projects },
            { number: '5+', label: t.about.stats.years },
            { number: '25+', label: t.about.stats.clients },
            { number: '100%', label: t.about.stats.dedication }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center"
              variants={statVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", damping: 15, stiffness: 300 }
              }}
            >
              <div className={`${
                isMobile ? 'text-2xl' : 'text-4xl'
              } font-light mb-2`}>{stat.number}</div>
              <div className={`text-white/60 ${
                isMobile ? 'text-xs' : 'text-sm'
              }`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Currently Section */}
        <motion.div 
          className={`${
            isMobile ? 'mt-8 pt-6' : 'mt-12 pt-8'
          } border-t border-white/10`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.3,
                delay: 0.2
              }
            }
          }}
        >
          <motion.h3 
            className={`${
              isMobile ? 'text-lg' : 'text-xl'
            } font-medium mb-3 md:mb-4`}
            variants={textVariants}
          >
            {t.about.currently}
          </motion.h3>
          
          <motion.div 
            className={`space-y-2 md:space-y-3 text-white/70 ${
              isMobile ? 'text-sm' : ''
            }`}
            variants={activitiesVariants}
          >
            {t.about.activities.map((activity, index) => (
              <motion.p 
                key={index}
                variants={activityVariants}
                whileHover={{ 
                  x: 5,
                  transition: { type: "spring", damping: 15, stiffness: 300 }
                }}
              >
                {activity}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}