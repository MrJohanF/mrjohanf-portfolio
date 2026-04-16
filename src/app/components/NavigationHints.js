import { motion, AnimatePresence } from 'framer-motion'

const pillBase =
  'fixed bottom-6 left-1/2 -translate-x-1/2 z-30 text-white/60 text-xs flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20'

const kbdClass =
  'inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded border border-white/15 bg-white/5 text-[10px] text-white/70 font-medium leading-none'

export default function NavigationHints({ isMobile, t }) {
  return (
    <AnimatePresence>
      {!isMobile && (
        <motion.div
          key="desktop-hint"
          className={pillBase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <span>{t.navigation.scrollSections}</span>
          <span className="hidden md:inline text-white/30">·</span>
          <span className="hidden md:inline-flex items-center gap-1">
            <span className={kbdClass}>↑</span>
            <span className={kbdClass}>↓</span>
          </span>
        </motion.div>
      )}

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
