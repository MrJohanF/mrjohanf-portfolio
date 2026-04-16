/* src/app/page.js */
'use client'

import { useState, useEffect, useRef } from 'react'
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  CpuChipIcon,
  EnvelopeIcon,
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

const SECTION_ORDER = ['home', 'about', 'projects', 'skills', 'contact']

// Wheel/scroll tuning
const WHEEL_COOLDOWN_MS = 600      // tiempo mínimo entre cambios de sección
const INERTIA_RESET_MS = 180       // si no llegan eventos en este tiempo, se reinicia el acumulador
const TRACKPAD_THRESHOLD = 90      // delta acumulado para disparar con trackpad
const MOUSE_THRESHOLD = 40         // delta acumulado para disparar con rueda mecánica
const TRACKPAD_DELTA_HINT = 50     // deltas pequeños suelen ser trackpad

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [language, setLanguage] = useState('es')
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // Refs para manejo de scroll sin re-renders
  const isNavigatingRef = useRef(false)
  const deltaAccumulatorRef = useRef(0)
  const lastWheelTimeRef = useRef(0)
  const currentSectionRef = useRef(currentSection)
  const cooldownTimerRef = useRef(null)

  // Mantener ref sincronizado con el estado
  useEffect(() => {
    currentSectionRef.current = currentSection
  }, [currentSection])

  // Detección responsive / touch
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      const isTouchDevice =
        'ontouchstart' in window || navigator.maxTouchPoints > 0
      setIsMobile(width < 768 || isTouchDevice)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const t = translations[language]

  // Cargar idioma guardado o detectar del navegador al primer render
  useEffect(() => {
    try {
      const stored = localStorage.getItem('portfolio-lang')
      if (stored === 'es' || stored === 'en') {
        setLanguage(stored)
        return
      }
      const browserLang = navigator.language?.toLowerCase() || ''
      setLanguage(browserLang.startsWith('es') ? 'es' : 'en')
    } catch {
      // localStorage puede fallar en modo privado / SSR
    }
  }, [])

  // Mantener <html lang> sincronizado y persistir selección
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
    try {
      localStorage.setItem('portfolio-lang', language)
    } catch {
      // ignorar
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  // Navegación entre secciones con clamp en los extremos (sin wrap)
  const navigateSection = (direction) => {
    const idx = SECTION_ORDER.indexOf(currentSectionRef.current)
    const nextIdx = direction === 'down' ? idx + 1 : idx - 1
    if (nextIdx < 0 || nextIdx >= SECTION_ORDER.length) return false
    setCurrentSection(SECTION_ORDER[nextIdx])
    return true
  }

  // Wheel: solo desktop
  useEffect(() => {
    if (isMobile) return

    const handleWheel = (e) => {
      e.preventDefault()

      const now = performance.now()
      const dt = now - lastWheelTimeRef.current
      lastWheelTimeRef.current = now

      // Durante el cooldown drenamos toda la inercia restante del trackpad
      if (isNavigatingRef.current) {
        deltaAccumulatorRef.current = 0
        return
      }

      // Pausa larga → nuevo gesto, reiniciamos acumulador
      if (dt > INERTIA_RESET_MS) {
        deltaAccumulatorRef.current = 0
      }

      // Gesto dominante horizontal → no cambiamos sección
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) * 1.5) return

      // Heurística trackpad: deltas pequeños o fraccionales
      const isTrackpadGesture =
        Math.abs(e.deltaY) < TRACKPAD_DELTA_HINT || e.deltaY % 1 !== 0

      deltaAccumulatorRef.current += e.deltaY

      const threshold = isTrackpadGesture
        ? TRACKPAD_THRESHOLD
        : MOUSE_THRESHOLD

      if (Math.abs(deltaAccumulatorRef.current) >= threshold) {
        const direction = deltaAccumulatorRef.current > 0 ? 'down' : 'up'
        const didNavigate = navigateSection(direction)
        deltaAccumulatorRef.current = 0

        if (didNavigate) {
          isNavigatingRef.current = true
          if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current)
          cooldownTimerRef.current = setTimeout(() => {
            isNavigatingRef.current = false
            deltaAccumulatorRef.current = 0
          }, WHEEL_COOLDOWN_MS)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current)
    }
  }, [isMobile])

  // Navegación por teclado (desktop)
  useEffect(() => {
    if (isMobile) return

    const handleKey = (e) => {
      // No interceptar cuando el usuario escribe
      const tag = e.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) {
        return
      }

      if (
        e.key === 'ArrowDown' ||
        e.key === 'PageDown' ||
        e.key === ' '
      ) {
        e.preventDefault()
        navigateSection('down')
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        navigateSection('up')
      } else if (e.key === 'Home') {
        e.preventDefault()
        setCurrentSection(SECTION_ORDER[0])
      } else if (e.key === 'End') {
        e.preventDefault()
        setCurrentSection(SECTION_ORDER[SECTION_ORDER.length - 1])
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isMobile])

  // Swipe vertical en mobile entre secciones
  useEffect(() => {
    if (!isMobile) return

    let startY = 0
    let startX = 0
    let startTime = 0
    let startScrollTop = 0

    const MIN_SWIPE_DISTANCE = 70
    const MAX_SWIPE_TIME = 500
    const MAX_HORIZONTAL_DEVIATION = 60

    const getScroller = () => document.querySelector('main')

    const handleTouchStart = (e) => {
      const touch = e.touches[0]
      startY = touch.clientY
      startX = touch.clientX
      startTime = performance.now()
      const scroller = getScroller()
      startScrollTop = scroller ? scroller.scrollTop : 0
    }

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0]
      const dy = touch.clientY - startY
      const dx = touch.clientX - startX
      const dt = performance.now() - startTime
      const scroller = getScroller()

      if (!scroller) return
      if (dt > MAX_SWIPE_TIME) return
      if (Math.abs(dx) > MAX_HORIZONTAL_DEVIATION) return
      if (Math.abs(dy) < MIN_SWIPE_DISTANCE) return

      // Solo cambiar de sección si estamos en el borde del scroll interno
      const atTop = startScrollTop <= 2
      const atBottom =
        startScrollTop + scroller.clientHeight >= scroller.scrollHeight - 2

      if (dy < 0 && atBottom) {
        // swipe hacia arriba en el fondo → siguiente sección
        navigateSection('down')
      } else if (dy > 0 && atTop) {
        // swipe hacia abajo desde el tope → sección anterior
        navigateSection('up')
      }
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isMobile])

  // Cerrar menú móvil al cambiar de sección + reset de acumulador
  useEffect(() => {
    setShowMobileMenu(false)
    deltaAccumulatorRef.current = 0
  }, [currentSection])

  const navigation = [
    { id: 'home', label: t.nav.home, icon: HomeIcon },
    { id: 'about', label: t.nav.about, icon: UserIcon },
    { id: 'projects', label: t.nav.projects, icon: CodeBracketIcon },
    { id: 'skills', label: t.nav.skills, icon: CpuChipIcon },
    { id: 'contact', label: t.nav.contact, icon: EnvelopeIcon },
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
    } catch (error) {
      console.error('Error downloading CV:', error)
    }
  }

  return (
    <div className="h-screen w-full animated-gradient text-white overflow-hidden relative">
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

      <FloatingParticles isMobile={isMobile} />

      <main
        className={`h-full ${
          isMobile
            ? 'pt-20 pb-20 px-4 overflow-y-auto'
            : 'pt-24 pb-24 pl-6 pr-20 overflow-hidden'
        }`}
      >
        <div
          className={`${
            isMobile ? 'min-h-full' : 'h-full'
          } flex items-center justify-center`}
        >
          <div className="w-full max-w-7xl">
            {currentSection === 'home' && (
              <Home
                t={t}
                isMobile={isMobile}
                isLoaded={isLoaded}
                handleSectionChange={handleSectionChange}
              />
            )}

            {currentSection === 'about' && (
              <About t={t} isMobile={isMobile} />
            )}

            {currentSection === 'projects' && (
              <Projects
                t={t}
                isMobile={isMobile}
                handleProjectClick={handleProjectClick}
                projects={projects}
              />
            )}

            {currentSection === 'skills' && (
              <Skills t={t} isMobile={isMobile} skills={skills} />
            )}

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

      {!isMobile && (
        <SectionIndicator
          navigation={navigation}
          currentSection={currentSection}
          handleSectionChange={handleSectionChange}
        />
      )}

      <NavigationHints isMobile={isMobile} t={t} />
    </div>
  )
}
