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

  return (
    <motion.div 
      className={`${isMobile ? 'space-y-8' : 'animate-slide-up'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={isMobile ? 'mb-8 text-center' : 'mb-16'}>
        <motion.h2 
          className={`${
            isMobile ? 'text-4xl mb-4' : 'text-5xl md:text-6xl mb-6'
          } font-light`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t.skills.title}
        </motion.h2>
        <motion.div 
          className={`${isMobile ? 'w-16 mx-auto' : 'w-12'} h-0.5 bg-white/60 mb-4`}
          initial={{ width: 0 }}
          animate={{ width: isMobile ? 64 : 48 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <motion.p 
          className={`text-white/60 ${
            isMobile ? 'text-base px-2' : 'text-lg'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t.skills.subtitle}
        </motion.p>
      </div>
      
      <div className={`grid grid-cols-1 ${
        isMobile 
          ? 'gap-6 px-2' 
          : 'md:grid-cols-2 gap-12 max-w-4xl'
      }`}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`space-y-4 ${
              isMobile ? 'bg-white/5 p-4 rounded-2xl backdrop-blur-sm' : ''
            }`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
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
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ 
                  delay: 1 + index * 0.1, 
                  duration: 1,
                  ease: "easeOut"
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className={`${
          isMobile ? 'mt-10 pt-8' : 'mt-16 pt-12'
        } border-t border-white/10`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <h3 className={`${
          isMobile ? 'text-2xl mb-6 text-center' : 'text-2xl mb-8'
        } font-light`}>{t.skills.additional}</h3>
        
        <div className={`grid ${
          isMobile 
            ? 'grid-cols-1 gap-6' 
            : 'grid-cols-2 md:grid-cols-4 gap-8'
        }`}>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + groupIndex * 0.1 }}
            >
              <h4 className={`font-medium text-white/90 ${
                isMobile ? 'text-lg text-center mb-4' : ''
              }`}>{group.category}</h4>
              <div className={`space-y-3 ${
                isMobile ? 'text-center' : 'space-y-2'
              }`}>
                {group.tools.map((tool, toolIndex) => (
                  <motion.div 
                    key={tool} 
                    className={`${
                      isMobile 
                        ? 'text-sm text-white/70 bg-white/5 px-3 py-2 rounded-full inline-block mx-1 mb-2' 
                        : 'text-sm text-white/60'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.9 + groupIndex * 0.1 + toolIndex * 0.05 }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}