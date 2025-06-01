import { motion } from 'framer-motion'

export default function Contact({ t, isMobile, handleContactClick, handleDownloadCV }) {
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

  // Header content variants
  const headerVariants = {
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

  // Contact cards container variants - Like the buttons in Home
  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // ← Same stagger timing as Home buttons
        delayChildren: 0.1
      }
    }
  }

  // Individual contact card variants - Like buttonVariants in Home
  const cardVariants = {
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

  // Download button variants
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
        duration: 0.3
      }
    }
  }

  return (
    <motion.div 
      className="text-center animate-fade-up"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div 
        className={isMobile ? 'mb-12' : 'mb-16'}
        variants={headerVariants}
      >
        <motion.h2 
          className={`${
            isMobile ? 'text-3xl' : 'text-5xl md:text-6xl'
          } font-light mb-4 md:mb-6`}
          variants={headerVariants}
        >
          {t.contact.title}
        </motion.h2>
        
        <motion.div 
          className="w-12 h-0.5 bg-white/60 mx-auto mb-6 md:mb-8"
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
        
        <motion.p 
          className={`${
            isMobile ? 'text-base px-4' : 'text-xl'
          } text-white/80 max-w-2xl mx-auto leading-relaxed`}
          variants={headerVariants}
        >
          {t.contact.subtitle}
        </motion.p>
      </motion.div>
      
      {/* Contact Cards - Staggered like Home buttons */}
      <motion.div 
        className={`grid ${
          isMobile 
            ? 'grid-cols-1 gap-4 max-w-sm mx-auto mb-12' 
            : 'grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16'
        }`}
        variants={cardsContainerVariants}
      >
        {[
          { label: 'Email', value: 'johan_harol@outlook.com', action: 'mailto:johan_harol@outlook.com' },
          { label: 'LinkedIn', value: 'linkedin.com/in/mrjohanf', action: 'https://linkedin.com/in/mrjohanf' },
          { label: 'GitHub', value: 'github.com/mrjohanf', action: 'https://github.com/mrjohanf' }
        ].map((contact, index) => (
          <motion.button
            key={contact.label}
            onClick={() => handleContactClick(contact.action)}
            className={`block w-full ${
              isMobile ? 'p-4' : 'p-8'
            } border border-white/10 rounded-2xl hover:border-white/30 hover-lift organic-transition text-left`}
            variants={cardVariants} // ← Same pattern as Home buttonVariants
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", damping: 15, stiffness: 300 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { type: "spring", damping: 15, stiffness: 400 }
            }}
          >
            <motion.div 
              className={`text-white/60 ${
                isMobile ? 'text-xs' : 'text-sm'
              } mb-2`}
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.8 }}
            >
              {contact.label}
            </motion.div>
            <motion.div 
              className={`font-medium ${
                isMobile ? 'text-sm' : ''
              }`}
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 1, x: 2 }}
            >
              {contact.value}
            </motion.div>
          </motion.button>
        ))}
      </motion.div>
      
      {/* Download CV Button */}
      <motion.button 
        onClick={handleDownloadCV}
        className={`bg-white text-black ${
          isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'
        } rounded-full font-medium hover-lift organic-transition`}
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
        {t.contact.downloadCV}
      </motion.button>
    </motion.div>
  )
}