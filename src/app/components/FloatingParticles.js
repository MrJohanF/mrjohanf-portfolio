import { motion } from 'framer-motion'

export default function FloatingParticles({ isMobile }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(isMobile ? 8 : 25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            opacity: 0 
          }}
          animate={{ 
            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}
    </div>
  )
} 