import { motion } from 'framer-motion'

export default function SectionIndicator({ navigation, currentSection, handleSectionChange }) {
  return (
    <motion.div 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="space-y-3">
        {navigation.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => handleSectionChange(item.id)}
            className={`block w-2 h-8 rounded-full organic-transition ${
              currentSection === item.id ? 'bg-white' : 'bg-white/20 hover:bg-white/40'
            }`}
            title={item.label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 + index * 0.1, type: "spring", damping: 15 }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </motion.div>
  )
} 