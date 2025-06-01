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

  // Translations object (keeping existing translations)
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
      // ... (keeping existing English translations)
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

  const projects = [
    {
      id: 1,
      tech: ["Java", "Spring Boot", "MySQL", "ChartFX", "AWS"],
      year: "2024",
      demo: "https://github.com/MrJohanF/tiendacompensar",
      github: "https://github.com/MrJohanF/tiendacompensar",
      icon: ShoppingCartIcon,
    },
    {
      id: 2,
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      year: "2024",
      demo: "https://demo2.com",
      github: "https://github.com/mrjohanf/taskmanager",
      icon: ClipboardDocumentListIcon,
    },
    {
      id: 3,
      tech: ["Next.js", "React.js", "Tailwind CSS", "Java", "Docker"],
      year: "2024",
      demo: "https://paramo-de-guerrero.vercel.app/",
      github: "https://github.com/MrJohanF/paramo-de-guerrero",
      icon: SunIcon,
    },
    {
      id: 4,
      tech: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand ", "Cloudinary ", "Mapbox-gl", "Prisma (ORM)", "Redis (Cache)", "PostgreSQL", "JWT", "Heroku/Vercel", "Vercel", "GitHub Actions"],
      year: "2025",
      demo: "https://mywheretogo.com/",
      github: "https://github.com/mrjohanf/mywhereto",
      icon: GlobeAmericasIcon,
    },
    {
      id: 5,
      tech: ["Tailwind CSS", "Next.js", "React", "Framer Motion", "Lucide React", "TMDB API" ],
      year: "2024",
      demo: "https://movies-olive-kappa.vercel.app/",
      github: "https://github.com/MrJohanF/movies",
      icon: FilmIcon,
    },
    {
      id: 6,
      tech: ["Next.js", "Prisma ORM", "Tailwind CSS", "JWT", "Bcrypt", "Zod Validator"],
      year: "2025",
      demo: "https://ucommerce.live/",
      github: "https://github.com/MrJohanF/e-commerce",
      icon: ShoppingCartIcon,
    }
  ]

  const skills = [
    { name: "Angular & React", level: 95 },
    { name: "JavaScript ES6+", level: 92 },
    { name: "Node.js & Express", level: 88 },
    { name: "Java & .Net", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Database Design", level: 85 }
  ]

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
              <motion.div 
                className={`text-center space-y-8 md:space-y-12 organic-transition ${
                  isLoaded ? 'animate-fade-up' : 'opacity-0'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className={`space-y-6 ${isMobile ? 'px-2' : ''}`}>
                  <div className="inline-block">
                    <motion.p 
                      className={`text-white/60 ${
                        isMobile ? 'text-lg' : 'text-lg'
                      } font-medium mb-4 animate-float-subtle`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {t.home.greeting}
                    </motion.p>
                    <motion.h1 
                      className={`${
                        isMobile ? 'text-5xl leading-tight' : 'text-6xl md:text-8xl'
                      } font-light tracking-tight mb-6`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {t.home.name}
                    </motion.h1>
                  </div>
                  
                  <motion.p 
                    className={`${
                      isMobile ? 'text-xl leading-relaxed px-2' : 'text-2xl md:text-3xl'
                    } text-white/80 font-light leading-relaxed max-w-4xl mx-auto`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    {t.home.title}
                    <span className="text-white block mt-2"> {t.home.titleHighlight}</span>
                  </motion.p>
                  
                  <motion.p 
                    className={`${
                      isMobile ? 'text-base px-4 leading-relaxed' : 'text-lg'
                    } text-white/60 max-w-2xl mx-auto`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    {t.home.subtitle}
                  </motion.p>
                </div>

                <motion.div 
                  className={`flex flex-col gap-4 ${
                    isMobile ? 'pt-8 px-4' : 'sm:flex-row pt-8'
                  } items-center justify-center`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <motion.button
                    onClick={() => handleSectionChange('projects')}
                    className={`group flex items-center justify-center space-x-3 bg-white text-black ${
                      isMobile ? 'px-8 py-4 text-base w-full max-w-sm' : 'px-8 py-4'
                    } rounded-full font-medium hover-lift organic-transition shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{t.home.viewWork}</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 organic-transition" />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleSectionChange('contact')}
                    className={`flex items-center justify-center space-x-3 border border-white/20 ${
                      isMobile ? 'px-8 py-4 text-base w-full max-w-sm' : 'px-8 py-4'
                    } rounded-full font-medium hover:border-white/40 hover:bg-white/5 organic-transition`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{t.home.contact}</span>
                  </motion.button>
                </motion.div>
              </motion.div>
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