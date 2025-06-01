import { motion, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon, 
  UserIcon, 
  CodeBracketIcon, 
  CpuChipIcon, 
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
  LanguageIcon
} from '@heroicons/react/24/outline'

export default function Navigation({ 
  isMobile, 
  currentSection, 
  handleSectionChange, 
  showMobileMenu, 
  setShowMobileMenu,
  language,
  toggleLanguage,
  t
}) {
  const navigation = [
    { id: 'home', label: t.nav.home, icon: HomeIcon },
    { id: 'about', label: t.nav.about, icon: UserIcon },
    { id: 'projects', label: t.nav.projects, icon: CodeBracketIcon },
    { id: 'skills', label: t.nav.skills, icon: CpuChipIcon },
    { id: 'contact', label: t.nav.contact, icon: EnvelopeIcon }
  ]

  return (
    <>
      {/* Language Switcher - Mobile optimized */}
      <motion.div 
        className={`fixed ${isMobile ? 'top-4 right-4 z-[60]' : 'top-8 right-8 z-50'}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", damping: 20 }}
      >
        <button
          onClick={toggleLanguage}
          className={`flex items-center space-x-2 bg-white/5 glass-minimal rounded-full ${
            isMobile ? 'p-3' : 'p-3'
          } border border-white/10 hover:bg-white/10 hover:border-white/20 organic-transition group min-w-[60px] justify-center`}
          title={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
        >
          <LanguageIcon className={`${isMobile ? 'w-4 h-4' : 'w-4 h-4'} text-white/70 group-hover:text-white organic-transition`} />
          <span className={`${isMobile ? 'text-sm' : 'text-sm'} font-medium text-white/70 group-hover:text-white organic-transition`}>
            {language === 'es' ? 'EN' : 'ES'}
          </span>
        </button>
      </motion.div>

      {/* Mobile Navigation */}
      {isMobile ? (
        <>
          {/* Mobile Menu Button */}
          <motion.button
            className="fixed top-4 left-4 z-[60] bg-white/5 glass-minimal rounded-full p-3 border border-white/10"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", damping: 20 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMobileMenu ? (
              <XMarkIcon className="w-5 h-5 text-white" />
            ) : (
              <Bars3Icon className="w-5 h-5 text-white" />
            )}
          </motion.button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {showMobileMenu && (
              <motion.div
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowMobileMenu(false)}
              >
                <motion.div
                  className="flex flex-col items-center justify-center h-full space-y-8"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", damping: 20 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {navigation.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleSectionChange(item.id)}
                        className={`flex items-center space-x-4 px-8 py-4 rounded-full text-lg font-medium organic-transition ${
                          currentSection === item.id 
                            ? 'bg-white text-black' 
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        } min-w-[200px] justify-start`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-6 h-6" />
                        <span>{item.label}</span>
                      </motion.button>
                    )
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        /* Desktop Navigation */
        <motion.nav 
          className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring", damping: 20 }}
        >
          <div className="flex items-center space-x-1 bg-white/5 glass-minimal rounded-full p-1 border border-white/10">
            {navigation.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleSectionChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium organic-transition ${
                    currentSection === item.id 
                      ? 'bg-white text-black' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.7 + index * 0.1, 
                    type: "spring", 
                    damping: 15,
                    stiffness: 200 
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:block">{item.label}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.nav>
      )}
    </>
  )
} 