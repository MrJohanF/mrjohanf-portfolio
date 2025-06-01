/* src/app/page.js */
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon, 
  UserIcon, 
  CodeBracketIcon, 
  CpuChipIcon, 
  EnvelopeIcon,
  CpuChipIcon as AIIcon,
  LanguageIcon,
} from '@heroicons/react/24/outline'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import Home from './components/Home'
import Navigation from './components/Navigation'
import SectionIndicator from './components/SectionIndicator'
import NavigationHints from './components/NavigationHints'
import FloatingParticles from './components/FloatingParticles'
import { projects } from './data/projects'
import { skills } from './data/skills'
import { translations } from './data/translations'

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollX, setScrollX] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [isMouseInSlider, setIsMouseInSlider] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [language, setLanguage] = useState('es')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const sliderRef = useRef(null)
  const sliderContainerRef = useRef(null)

  // Check if device is mobile with better detection
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      setIsMobile(width < 768 || isTouchDevice)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const t = translations[language]

  // Array con el orden de las secciones para navegación
  const sectionOrder = ['home', 'about', 'projects', 'skills', 'contact']

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Función para cambiar idioma
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  // Función para navegar entre secciones
  const navigateSection = (direction) => {
    const currentIndex = sectionOrder.indexOf(currentSection)
    let nextIndex
    
    if (direction === 'down') {
      nextIndex = (currentIndex + 1) % sectionOrder.length
    } else {
      nextIndex = (currentIndex - 1 + sectionOrder.length) % sectionOrder.length
    }
    
    setCurrentSection(sectionOrder[nextIndex])
  }

  // Event listener para navegación con scroll - Disabled on mobile
  useEffect(() => {
    if (isMobile) return // Disable scroll navigation on mobile
    
    let isScrolling = false
    
    const handleWheel = (e) => {
      // Si estamos en proyectos Y el mouse está dentro del slider, scroll horizontal
      if (currentSection === 'projects' && isMouseInSlider) {
        e.preventDefault()
        const newScrollX = scrollX + e.deltaY
        const clampedScrollX = Math.max(0, Math.min(newScrollX, maxScroll))
        setScrollX(clampedScrollX)
        return
      }
      
      // Para otras secciones O cuando el mouse está fuera del slider, navegación vertical
      e.preventDefault()
      
      if (isScrolling) return
      
      isScrolling = true
      
      if (e.deltaY > 0) {
        navigateSection('down')
      } else {
        navigateSection('up')
      }
      
      setTimeout(() => {
        isScrolling = false
      }, 800)
    }
    
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [currentSection, scrollX, maxScroll, isMouseInSlider, isMobile])

  // Calcular el máximo scroll cuando cambie el contenido
  useEffect(() => {
    if (sliderRef.current && currentSection === 'projects') {
      const containerWidth = sliderRef.current.parentElement.offsetWidth
      const contentWidth = sliderRef.current.scrollWidth
      const extraPadding = isMobile ? 50 : 100
      setMaxScroll(Math.max(0, contentWidth - containerWidth + extraPadding))
    }
  }, [currentSection, isMobile])

  // Reset slider state cuando salimos de proyectos
  useEffect(() => {
    if (currentSection !== 'projects') {
      setScrollX(0)
      setIsMouseInSlider(false)
    }
  }, [currentSection])

  // Close mobile menu when section changes
  useEffect(() => {
    setShowMobileMenu(false)
  }, [currentSection])

  const navigation = [
    { id: 'home', label: t.nav.home, icon: HomeIcon },
    { id: 'about', label: t.nav.about, icon: UserIcon },
    { id: 'projects', label: t.nav.projects, icon: CodeBracketIcon },
    { id: 'skills', label: t.nav.skills, icon: CpuChipIcon },
    { id: 'contact', label: t.nav.contact, icon: EnvelopeIcon }
  ]

  const handleSectionChange = (section) => {
    setCurrentSection(section)
  }

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleContactClick = (action) => {
    if (action.startsWith('mailto:')) {
      window.location.href = action
    } else {
      window.open(action, '_blank', 'noopener,noreferrer')
    }
  }

  const handleDownloadCV = () => {
    try {
      const fileName = language === 'es' ? 'CVes.pdf' : 'CVen.pdf'
      const link = document.createElement('a')
      link.href = `/${fileName}`
      link.download = fileName
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      console.log(`Downloading ${fileName}...`)
    } catch (error) {
      console.error('Error downloading CV:', error)
    }
  }

  // Navegación con botones en slider
  const slideLeft = () => {
    const slideDistance = isMobile ? 300 : 400
    const newScrollX = Math.max(0, scrollX - slideDistance)
    setScrollX(newScrollX)
  }

  const slideRight = () => {
    const slideDistance = isMobile ? 300 : 400
    const newScrollX = Math.min(maxScroll, scrollX + slideDistance)
    setScrollX(newScrollX)
  }

  // Handlers para detectar mouse en slider (disabled on mobile)
  const handleSliderMouseEnter = () => {
    if (!isMobile) setIsMouseInSlider(true)
  }

  const handleSliderMouseLeave = () => {
    if (!isMobile) setIsMouseInSlider(false)
  }

  return (
    <div className="h-screen w-full animated-gradient text-white overflow-hidden relative">
      
      {/* Navigation Component */}
      <Navigation 
        isMobile={isMobile}
        currentSection={currentSection}
        handleSectionChange={handleSectionChange}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        language={language}
        toggleLanguage={toggleLanguage}
        t={t}
      />
      
      {/* Floating Particles */}
      <FloatingParticles isMobile={isMobile} />
      
      {/* Contenido principal - Better mobile optimization */}
      <main className={`h-full ${
        isMobile 
          ? 'pt-20 pb-6 px-4 overflow-y-auto' 
          : 'pt-24 pb-8 pl-6 pr-20 overflow-hidden'
      }`}>
        <div className={`${isMobile ? 'min-h-full' : 'h-full'} flex items-center justify-center`}>
          <div className="w-full max-w-7xl">
            
            {/* Sección Inicio - Better mobile optimization */}
            {currentSection === 'home' && (
              <Home 
                t={t}
                isMobile={isMobile}
                isLoaded={isLoaded}
                handleSectionChange={handleSectionChange}
              />
            )}

            {/* Sección Acerca - Mobile optimized */}
            {currentSection === 'about' && (
              <About t={t} isMobile={isMobile} />
            )}

            {/* Sección Proyectos - Mobile optimized */}
            {currentSection === 'projects' && (
              <Projects 
                t={t}
                isMobile={isMobile}
                scrollX={scrollX}
                maxScroll={maxScroll}
                isMouseInSlider={isMouseInSlider}
                handleSliderMouseEnter={handleSliderMouseEnter}
                handleSliderMouseLeave={handleSliderMouseLeave}
                slideLeft={slideLeft}
                slideRight={slideRight}
                handleProjectClick={handleProjectClick}
                sliderRef={sliderRef}
                projects={projects}
              />
            )}

            {/* Sección Skills - Mobile optimized */}
            {currentSection === 'skills' && (
              <Skills t={t} isMobile={isMobile} skills={skills} />
            )}

            {/* Sección Contacto - Mobile optimized */}
            {currentSection === 'contact' && (
              <Contact 
                t={t} 
                isMobile={isMobile} 
                handleContactClick={handleContactClick}
                handleDownloadCV={handleDownloadCV}
              />
            )}
          </div>
        </div>
      </main>

      {/* Section Indicator - Desktop only */}
      {!isMobile && (
        <SectionIndicator 
          navigation={navigation}
          currentSection={currentSection}
          handleSectionChange={handleSectionChange}
        />
      )}

      {/* Navigation Hints */}
      <NavigationHints 
        isMobile={isMobile}
        currentSection={currentSection}
        isMouseInSlider={isMouseInSlider}
        t={t}
      />
    </div>
  )
}