/* src/app/components/Skills.js */
import { motion } from 'framer-motion'

export default function Skills({ t, isMobile }) {
  const skills = [
    { name: "Angular & React", level: 95 },
    { name: "JavaScript ES6+", level: 92 },
    { name: "Node.js & Express", level: 88 },
    { name: "Java & .Net", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Database Design", level: 85 }
  ]

  // Container animation with stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1
      }
    }
  }

  // Header item animations
  const headerItemVariants = {
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

  // Skills container variants
  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  // Individual skill variants
  const skillVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        duration: 0.25
      }
    }
  }

  // Tools section variants
  const toolsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.05
      }
    }
  }

  const toolGroupVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 250,
        duration: 0.25
      }
    }
  }

  const toolItemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
        duration: 0.2
      }
    }
  }

  return (
    <motion.div 
      className={`${isMobile ? 'space-y-8' : 'animate-slide-up'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={isMobile ? 'mb-8 text-center' : 'mb-16'}>
        <motion.h2 
          className={`${
            isMobile ? 'text-4xl mb-4' : 'text-5xl md:text-6xl mb-6'
          } font-light`}
          variants={headerItemVariants}
        >
          {t.skills.title}
        </motion.h2>
        
        <motion.div 
          className={`${isMobile ? 'w-16 mx-auto' : 'w-12'} h-0.5 bg-white/60 mb-4`}
          variants={{
            hidden: { width: 0, opacity: 0 },
            visible: { 
              width: isMobile ? 64 : 48, 
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
        
        <motion.p 
          className={`text-white/60 ${
            isMobile ? 'text-base px-2' : 'text-lg'
          }`}
          variants={headerItemVariants}
        >
          {t.skills.subtitle}
        </motion.p>
      </div>
      
      <motion.div 
        className={`grid grid-cols-1 ${
          isMobile 
            ? 'gap-6 px-2' 
            : 'md:grid-cols-2 gap-12 max-w-4xl'
        }`}
        variants={skillsContainerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`space-y-4 ${
              isMobile ? 'bg-white/5 p-4 rounded-2xl backdrop-blur-sm' : ''
            }`}
            variants={skillVariants}
          >
            <div className="flex justify-between items-center">
              <span className={`${
                isMobile ? 'text-base font-medium' : 'text-lg font-medium'
              }`}>{skill.name}</span>
              <span className={`text-white/60 ${
                isMobile ? 'text-sm font-medium' : ''
              }`}>{skill.level}%</span>
            </div>
            <div className={`${
              isMobile ? 'h-2' : 'h-1'
            } bg-white/10 rounded-full overflow-hidden`}>
              <motion.div
                className="h-full bg-gradient-to-r from-white to-white/80 rounded-full"
                initial={{ width: 0, opacity: 0.8 }}
                animate={{ width: `${skill.level}%`, opacity: 1 }}
                transition={{ 
                  delay: 0.2 + index * 0.05,
                  type: "spring",
                  damping: 25,
                  stiffness: 150,
                  duration: 0.5
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className={`${
          isMobile ? 'mt-10 pt-8' : 'mt-16 pt-12'
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
              delay: 0.3
            }
          }
        }}
      >
        <motion.h3 
          className={`${
            isMobile ? 'text-2xl mb-6 text-center' : 'text-2xl mb-8'
          } font-light`}
          variants={headerItemVariants}
        >
          {t.skills.additional}
        </motion.h3>
        
        <motion.div 
          className={`grid ${
            isMobile 
              ? 'grid-cols-1 gap-6' 
              : 'grid-cols-2 md:grid-cols-4 gap-8'
          }`}
          variants={toolsContainerVariants}
        >
          {[
            { category: t.skills.categories.frontend, tools: ['Zustand', 'Next.js', 'Vue.js', 'Tailwind'] },
            { category: t.skills.categories.backend, tools: ['Node.js', 'Express', 'Java', '.Net'] },
            { category: t.skills.categories.database, tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Mysql'] },
            { category: t.skills.categories.devops, tools: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'] }
          ].map((group, groupIndex) => (
            <motion.div 
              key={group.category} 
              className={`space-y-4 ${
                isMobile 
                  ? 'bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-white/10' 
                  : ''
              }`}
              variants={toolGroupVariants}
            >
              <h4 className={`font-medium text-white/90 ${
                isMobile ? 'text-lg text-center mb-4' : ''
              }`}>{group.category}</h4>
              
              <motion.div 
                className={`space-y-3 ${
                  isMobile ? 'text-center' : 'space-y-2'
                }`}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.03,
                      delayChildren: 0.05
                    }
                  }
                }}
              >
                {group.tools.map((tool, toolIndex) => (
                  <motion.div 
                    key={tool} 
                    className={`${
                      isMobile 
                        ? 'text-sm text-white/70 bg-white/5 px-3 py-2 rounded-full inline-block mx-1 mb-2' 
                        : 'text-sm text-white/60'
                    }`}
                    variants={toolItemVariants}
                  >
                    {tool}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}