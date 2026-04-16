import { motion } from 'framer-motion'

export default function SectionIndicator({
  navigation,
  currentSection,
  handleSectionChange,
}) {
  return (
    <motion.nav
      aria-label="Indicador de sección"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <ol className="space-y-3 list-none">
        {navigation.map((item, index) => {
          const isActive = currentSection === item.id
          return (
            <li key={item.id}>
              <motion.button
                onClick={() => handleSectionChange(item.id)}
                aria-label={`Ir a sección ${item.label}`}
                aria-current={isActive ? 'page' : undefined}
                className={`block w-2 h-8 rounded-full organic-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                  isActive ? 'bg-white' : 'bg-white/20 hover:bg-white/40'
                }`}
                title={item.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  type: 'spring',
                  damping: 15,
                }}
                whileHover={{ scale: 1.2 }}
              />
            </li>
          )
        })}
      </ol>
    </motion.nav>
  )
}
