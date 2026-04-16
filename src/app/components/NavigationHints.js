import { motion, AnimatePresence } from 'framer-motion'

const pillBase =
  'fixed bottom-6 left-1/2 -translate-x-1/2 z-30 text-white/60 text-xs flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20'

export default function NavigationHints({
  isMobile,
  currentSection,
  isMouseInSlider,
  t
}) {
  return (
    <AnimatePresence>
      {!isMobile && !isMouseInSlider && (
        <motion.div
          key="desktop-hint"
          className={pillBase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <span>{t.navigation.scrollSections}</span>
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm leading-none"
          >
            ↕
          </motion.span>
        </motion.div>
      )}

      {!isMobile && isMouseInSlider && (
        <motion.div
          key="slider-hint"
          className={pillBase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <span>{t.navigation.scrollHorizontal}</span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm leading-none"
          >
            ↔
          </motion.span>
        </motion.div>
      )}

      {/* Mobile navigation hint */}
      {isMobile && (
        <motion.div
          key="mobile-hint"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 text-white/60 text-[11px] text-center px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10"
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
