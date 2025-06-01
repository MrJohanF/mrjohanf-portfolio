import { motion, AnimatePresence } from 'framer-motion'

export default function NavigationHints({ 
  isMobile, 
  currentSection, 
  isMouseInSlider, 
  t 
}) {
  return (
    <AnimatePresence>
      {!isMobile && currentSection !== 'projects' && !isMouseInSlider && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm flex items-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <span>{t.navigation.scrollSections}</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
          >
            ↕️
          </motion.div>
        </motion.div>
      )}

      {!isMobile && currentSection === 'projects' && !isMouseInSlider && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm flex items-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <span>{t.navigation.scrollProjects}</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
          >
            ⬇️
          </motion.div>
        </motion.div>
      )}

      {!isMobile && isMouseInSlider && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm flex items-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <span>{t.navigation.scrollHorizontal}</span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
          >
            ↔️
          </motion.div>
        </motion.div>
      )}

      {/* Mobile navigation hint */}
      {isMobile && (
        <motion.div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <span>{t.navigation.tapNavigation}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 