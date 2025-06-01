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
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  ShoppingCartIcon,
  GlobeAmericasIcon,
  FilmIcon,
  SunIcon,
  ClipboardDocumentListIcon,
  CpuChipIcon as AIIcon,
  LanguageIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import Home from './components/Home'
import Navigation from './components/Navigation'

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

  const translations = {
    es: {
      nav: {
        home: 'Inicio',
        about: 'Acerca',
        projects: 'Trabajo',
        skills: 'Skills',
        contact: 'Contacto'
      },
      home: {
        greeting: 'Hola, soy',
        name: 'Johan Fernández',
        title: 'Desarrollador Full Stack especializado en crear',
        titleHighlight: 'experiencias digitales excepcionales',
        subtitle: 'Combinando diseño elegante con código limpio para crear aplicaciones modernas y eficientes.',
        viewWork: 'Ver mi trabajo',
        contact: 'Contactar'
      },
      about: {
        title: 'Acerca de mí',
        p1: 'Con más de 5 años de experiencia en desarrollo, me especializo en crear aplicaciones modernas que combinan diseño elegante con funcionalidad robusta.',
        p2: 'Mi filosofía se centra en la simplicidad, la performance y la experiencia del usuario. Creo firmemente que las mejores soluciones son las más eficientes.',
        p3: 'Trabajo principalmente con React, Angular, Java, .Net y Node.js, pero siempre estoy explorando nuevas tecnologías que puedan aportar valor a mis proyectos.',
        stats: {
          projects: 'Proyectos',
          years: 'Años',
          clients: 'Clientes',
          dedication: 'Dedicación'
        },
        currently: 'Actualmente',
        activities: [
          '🚀 Explorando Web3 y Blockchain',
          '🎨 Perfeccionando habilidades de UI/UX',
          '📚 Aprendiendo Machine Learning'
        ]
      },
      projects: {
        title: 'Portfolio',
        items: [
          {
            title: "E-Commerce Compensar",
            description: "Plataforma completa de comercio electrónico con Java y microservicios. Sistema de pagos integrado con Stripe, gestión avanzada de inventario y dashboard de análisis en tiempo real.",
            category: "Aplicación Desktop",
            status: "Activo"
          },
          {
            title: "Gestión de Tareas",
            description: "Aplicación de gestión de tareas con colaboración en tiempo real. Incluye notificaciones push, asignación inteligente de tareas y reportes de productividad avanzados.",
            category: "Productividad",
            status: "Desarrollo"
          },
          {
            title: "Páramo de Guerrero",
            description: "El proyecto páramo-de-guerrero es una aplicación web moderna diseñada para monitorear y optimizar la salud de las plantas utilizando inteligencia artificial y datos de sensores.",
            category: "Aplicación Web",
            status: "Completado"
          },
          {
            title: "MyWhereToGo",
            description: "MyWhereToGo es una plataforma web integral diseñada para facilitar el descubrimiento, la reseña y la reserva de lugares como restaurantes, atracciones y diversos puntos de interés.",
            category: "Aplicación Web",
            status: "Completado"
          },
          {
            title: "Aplicación de Películas",
            description: "Una aplicación de películas moderna y responsive construida con Next.js 13, con detalles de películas, trailers, reseñas y más. La aplicación utiliza la API de The Movie Database (TMDB) para obtener datos de películas.",
            category: "Aplicación Web",
            status: "Completado"
          },
          {
            title: "Plataforma E-Commerce",
            description: "Una plataforma de comercio electrónico segura con sistema de autenticación",
            category: "Aplicación Web",
            status: "Completado"
          }
        ],
        buttons: {
          demo: 'Demo',
          code: 'Código'
        }
      },
      skills: {
        title: 'Habilidades',
        subtitle: 'Tecnologías y herramientas que domino',
        additional: 'Herramientas adicionales',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          database: 'Database',
          devops: 'DevOps'
        }
      },
      contact: {
        title: 'Conversemos',
        subtitle: 'Siempre estoy interesado en nuevos proyectos y oportunidades de colaboración.',
        downloadCV: 'Descargar CV'
      },
      navigation: {
        scrollSections: 'Scroll para navegar entre secciones',
        scrollProjects: 'Scroll para cambiar sección • Entra al área para navegar proyectos',
        scrollHorizontal: 'Scroll horizontal para navegar proyectos',
        tapNavigation: 'Toca la navegación para cambiar de sección'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Work',
        skills: 'Skills',
        contact: 'Contact'
      },
      home: {
        greeting: 'Hello, Im',
        name: 'Johan Fernández',
        title: 'Full Stack Developer specialized in creating',
        titleHighlight: 'exceptional digital experiences',
        subtitle: 'Combining elegant design with clean code to create modern and efficient applications.',
        viewWork: 'View my work',
        contact: 'Contact'
      },
      about: {
        title: 'About me',
        p1: 'With over 5 years of experience in development, I specialize in creating modern applications that combine elegant design with robust functionality.',
        p2: 'My philosophy focuses on simplicity, performance, and user experience. I firmly believe that the best solutions are the most efficient ones.',
        p3: 'I work primarily with React, Angular, Java, .Net and Node.js, but Im always exploring new technologies that can add value to my projects.',
        stats: {
          projects: 'Projects',
          years: 'Years',
          clients: 'Clients',
          dedication: 'Dedication'
        },
        currently: 'Currently',
        activities: [
          '🚀 Exploring Web3 and Blockchain',
          '🎨 Perfecting UI/UX skills',
          '📚 Learning Machine Learning'
        ]
      },
      projects: {
        title: 'Portfolio',
        items: [
          {
            title: "E-Commerce Compensar",
            description: "Complete e-commerce platform built with Java and microservices. Integrated payment system with Stripe, advanced inventory management and real-time analytics dashboard.",
            category: "Desktop App",
            status: "Active"
          },
          {
            title: "Task Management",
            description: "Task management application with real-time collaboration. Includes push notifications, intelligent task assignment and advanced productivity reports.",
            category: "Productivity",
            status: "Development"
          },
          {
            title: "Paramo de Guerrero",
            description: "The paramo-de-guerrero project is a modern web application designed to monitor and optimize plant health using artificial intelligence and sensor data.",
            category: "Web App",
            status: "Completed"
          },
          {
            title: "MyWhereToGo",
            description: "MyWhereToGo is a comprehensive web platform designed to facilitate the discovery, review, and booking of places such as restaurants, attractions, and various points of interest.",
            category: "Web App",
            status: "Completed"
          },
          {
            title: "Movie App",
            description: "A modern and responsive movie application built with Next.js 13, featuring movie details, trailers, reviews, and more. The application uses The Movie Database (TMDB) API to fetch movie data.",
            category: "Web App",
            status: "Completed"
          },
          {
            title: "E-Commerce Platform",
            description: "A secure E-commerce platform with authentication system",
            category: "Web App",
            status: "Completed"
          }
        ],
        buttons: {
          demo: 'Demo',
          code: 'Code'
        }
      },
      skills: {
        title: 'Skills',
        subtitle: 'Technologies and tools I master',
        additional: 'Additional tools',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          database: 'Database',
          devops: 'DevOps'
        }
      },
      contact: {
        title: 'Lets talk',
        subtitle: 'Im always interested in new projects and collaboration opportunities.',
        downloadCV: 'Download CV'
      },
      navigation: {
        scrollSections: 'Scroll to navigate between sections',
        scrollProjects: 'Scroll to change section • Enter area to navigate projects',
        scrollHorizontal: 'Horizontal scroll to navigate projects',
        tapNavigation: 'Tap navigation to change sections'
      }
    }
  }

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
      
      {/* Partículas flotantes animadas - Reduced on mobile for performance */}
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
              />
            )}

            {/* Sección Skills - Mobile optimized */}
            {currentSection === 'skills' && (
              <Skills t={t} isMobile={isMobile} />
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

      {/* Indicador de sección animado - Desktop only */}
      {!isMobile && (
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
      )}

      {/* Indicadores de navegación dinámicos - Desktop only */}
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
    </div>
  )
}