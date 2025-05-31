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
  WrenchScrewdriverIcon,
  CpuChipIcon as AIIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LanguageIcon,
} from '@heroicons/react/24/outline'



export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollX, setScrollX] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [isMouseInSlider, setIsMouseInSlider] = useState(false)
  const [language, setLanguage] = useState('es')
  const sliderRef = useRef(null)
  const sliderContainerRef = useRef(null)

  // Translations object
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
        scrollHorizontal: 'Scroll horizontal para navegar proyectos'
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
        scrollHorizontal: 'Horizontal scroll to navigate projects'
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

  // Event listener para navegación con scroll
  useEffect(() => {
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
  }, [currentSection, scrollX, maxScroll, isMouseInSlider])

  // Calcular el máximo scroll cuando cambie el contenido
  useEffect(() => {
    if (sliderRef.current && currentSection === 'projects') {
      const containerWidth = sliderRef.current.parentElement.offsetWidth
      const contentWidth = sliderRef.current.scrollWidth
      // Agregar padding extra para que la última tarjeta se vea completamente
      const extraPadding = 100 // Espacio adicional para la última tarjeta
      setMaxScroll(Math.max(0, contentWidth - containerWidth + extraPadding))
    }
  }, [currentSection])

  // Reset slider state cuando salimos de proyectos
  useEffect(() => {
    if (currentSection !== 'projects') {
      setScrollX(0)
      setIsMouseInSlider(false)
    }
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
    console.log('Descargando CV...')
  }

  // Navegación con botones en slider
  const slideLeft = () => {
    const newScrollX = Math.max(0, scrollX - 400)
    setScrollX(newScrollX)
  }

  const slideRight = () => {
    const newScrollX = Math.min(maxScroll, scrollX + 400)
    setScrollX(newScrollX)
  }

  // Handlers para detectar mouse en slider
  const handleSliderMouseEnter = () => {
    setIsMouseInSlider(true)
  }

  const handleSliderMouseLeave = () => {
    setIsMouseInSlider(false)
  }

  return (
    <div className="h-screen w-full animated-gradient text-white overflow-hidden relative">
      
      {/* Language Switcher */}
      <motion.div 
        className="fixed top-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", damping: 20 }}
      >
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 bg-white/5 glass-minimal rounded-full p-3 border border-white/10 hover:bg-white/10 hover:border-white/20 organic-transition group"
          title={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
        >
          <LanguageIcon className="w-4 h-4 text-white/70 group-hover:text-white organic-transition" />
          <span className="text-sm font-medium text-white/70 group-hover:text-white organic-transition min-w-[24px]">
            {language === 'es' ? 'EN' : 'ES'}
          </span>
        </button>
      </motion.div>
      
      {/* Partículas flotantes animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
      
      {/* Navegación minimalista */}
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

      {/* Contenido principal */}
      <main className="h-full pt-24 pb-8 pl-6 pr-20 overflow-hidden">
        <div className="h-full flex items-center justify-center">
          <div className="w-full max-w-7xl">
            
            {/* Sección Inicio */}
            {currentSection === 'home' && (
              <div className={`text-center space-y-12 organic-transition ${
                isLoaded ? 'animate-fade-up' : 'opacity-0'
              }`}>
                <div className="space-y-6">
                  <div className="inline-block">
                    <p className="text-white/60 text-lg font-medium mb-4 animate-float-subtle">
                      {t.home.greeting}
                    </p>
                    <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
                      {t.home.name}
                    </h1>
                  </div>
                  
                  <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
                    {t.home.title}
                    <span className="text-white"> {t.home.titleHighlight}</span>
                  </p>
                  
                  <p className="text-lg text-white/60 max-w-2xl mx-auto">
                    {t.home.subtitle}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                  <button
                    onClick={() => handleSectionChange('projects')}
                    className="group flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-medium hover-lift organic-transition"
                  >
                    <span>{t.home.viewWork}</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 organic-transition" />
                  </button>
                  
                  <button
                    onClick={() => handleSectionChange('contact')}
                    className="flex items-center space-x-2 border border-white/20 px-8 py-4 rounded-full font-medium hover:border-white/40 organic-transition"
                  >
                    <span>{t.home.contact}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Sección Acerca */}
            {currentSection === 'about' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-slide-up">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-5xl md:text-6xl font-light mb-6">{t.about.title}</h2>
                    <div className="w-12 h-0.5 bg-white/60 mb-8"></div>
                  </div>
                  
                  <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                    <p>{t.about.p1}</p>
                    <p>{t.about.p2}</p>
                    <p>{t.about.p3}</p>
                  </div>
                </div>
                
                <div className="lg:pl-16">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { number: '60+', label: t.about.stats.projects },
                      { number: '5+', label: t.about.stats.years },
                      { number: '25+', label: t.about.stats.clients },
                      { number: '100%', label: t.about.stats.dedication }
                    ].map((stat, index) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-4xl font-light mb-2">{stat.number}</div>
                        <div className="text-white/60 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <h3 className="text-xl font-medium mb-4">{t.about.currently}</h3>
                    <div className="space-y-3 text-white/70">
                      {t.about.activities.map((activity, index) => (
                        <p key={index}>{activity}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sección Proyectos - SLIDER HORIZONTAL CON PADDING EXTRA */}
            {currentSection === 'projects' && (
              <div className="animate-fade-up h-full flex flex-col">
                {/* Header minimalista */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-light mb-6">{t.projects.title}</h2>
                  <div className="w-12 h-0.5 bg-white/60 mx-auto"></div>
                </div>
                
                {/* Slider Container CON DETECCIÓN DE MOUSE */}
                <div 
                  className="flex-1 relative"
                  ref={sliderContainerRef}
                  onMouseEnter={handleSliderMouseEnter}
                  onMouseLeave={handleSliderMouseLeave}
                >
                  {/* Visual indicator cuando el mouse está en el slider */}
                  {isMouseInSlider && (
                    <motion.div
                      className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={slideLeft}
                    disabled={scrollX === 0}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-all duration-300 backdrop-blur-sm ${
                      scrollX === 0 
                        ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <ChevronLeftIcon className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={slideRight}
                    disabled={scrollX >= maxScroll}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-all duration-300 backdrop-blur-sm ${
                      scrollX >= maxScroll 
                        ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <ChevronRightIcon className="w-6 h-6" />
                  </button>
                  
                  {/* Scrollable Content */}
                  <div className="overflow-hidden h-full px-16">
                    <motion.div
                      ref={sliderRef}
                      className="flex gap-8 h-full items-center"
                      animate={{ x: -scrollX }}
                      transition={{ type: "spring", damping: 25, stiffness: 200 }}
                      style={{ paddingRight: '100px' }}
                    >
                      {projects.map((project, index) => {
                        const IconComponent = project.icon
                        const projectData = t.projects.items[index]
                        return (
                          <motion.div
                            key={project.id}
                            className="flex-shrink-0 w-80 h-96 group cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: index * 0.1,
                              type: "spring",
                              damping: 20
                            }}
                          >
                            <div className="w-full h-full rounded-3xl p-6 glass-minimal border border-white/10 relative group-hover:border-white/30 group-hover:bg-white/10 organic-transition">
                              {/* Sutil glow effect en hover */}
                              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                              
                              {/* Subtle shadow effect */}
                              <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl" />
                              
                              {/* Status Badge */}
                              <div className="absolute top-4 right-4 z-10">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-300 ${
                                  projectData.status === 'Activo' || projectData.status === 'Active'
                                    ? 'bg-white/10 text-white/90 border-white/20 group-hover:bg-white/20 group-hover:text-white' :
                                  projectData.status === 'Desarrollo' || projectData.status === 'Development'
                                    ? 'bg-white/10 text-white/70 border-white/15 group-hover:bg-white/20 group-hover:text-white/90' :
                                    'bg-white/10 text-white/60 border-white/10 group-hover:bg-white/20 group-hover:text-white/80'
                                }`}>
                                  {projectData.status}
                                </span>
                              </div>
                              
                              {/* Content */}
                              <div className="relative z-10 h-full flex flex-col">
                                {/* Header con icono uniforme */}
                                <div className="text-center mb-4">
                                  <div className="mb-4 flex justify-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                                      <IconComponent className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                  </div>
                                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                                    {projectData.title}
                                  </h3>
                                  <div className="flex items-center justify-center space-x-3 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                                    <span>{projectData.category}</span>
                                    <span>•</span>
                                    <span>{project.year}</span>
                                  </div>
                                </div>
                                
                                {/* Description */}
                                <div className="flex-1 mb-4">
                                  <p className="text-white/70 text-sm leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
                                    {projectData.description}
                                  </p>
                                </div>
                                
                                {/* Tech Stack */}
                                <div className="space-y-3">
                                  <div className="flex flex-wrap gap-2 justify-center">
                                    {project.tech.slice(0, 3).map((tech) => (
                                      <span
                                        key={tech}
                                        className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80 group-hover:bg-white/20 group-hover:text-white transition-all duration-300"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                      <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-300">
                                        +{project.tech.length - 3}
                                      </span>
                                    )}
                                  </div>
                                  
                                  {/* Action buttons */}
                                  <div className="flex space-x-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleProjectClick(project.demo)
                                      }}
                                      className="flex items-center space-x-1 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs transition-all duration-300 backdrop-blur-sm"
                                    >
                                      <PlayIcon className="w-3 h-3" />
                                      <span>{t.projects.buttons.demo}</span>
                                    </button>
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleProjectClick(project.github)
                                      }}
                                      className="flex items-center space-x-1 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs transition-all duration-300 backdrop-blur-sm"
                                    >
                                      <span>{t.projects.buttons.code}</span>
                                      <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                  <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white/60 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${maxScroll > 0 ? ((scrollX / maxScroll) * 100) : 0}%` 
                      }}
                      transition={{ type: "spring", damping: 20 }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Sección Skills */}
            {currentSection === 'skills' && (
              <div className="animate-slide-up">
                <div className="mb-16">
                  <h2 className="text-5xl md:text-6xl font-light mb-6">{t.skills.title}</h2>
                  <div className="w-12 h-0.5 bg-white/60 mb-4"></div>
                  <p className="text-white/60 text-lg">{t.skills.subtitle}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="space-y-4"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">{skill.name}</span>
                        <span className="text-white/60">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full organic-transition"
                          style={{ 
                            width: `${skill.level}%`,
                            transitionDelay: `${index * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 pt-12 border-t border-white/10">
                  <h3 className="text-2xl font-light mb-8">{t.skills.additional}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                      { category: t.skills.categories.frontend, tools: ['Zustand', 'Next.js', 'Vue.js', 'Tailwind'] },
                      { category: t.skills.categories.backend, tools: ['Node.js', 'Express', 'Java', '.Net'] },
                      { category: t.skills.categories.database, tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Mysql'] },
                      { category: t.skills.categories.devops, tools: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'] }
                    ].map((group) => (
                      <div key={group.category} className="space-y-4">
                        <h4 className="font-medium text-white/90">{group.category}</h4>
                        <div className="space-y-2">
                          {group.tools.map((tool) => (
                            <div key={tool} className="text-sm text-white/60">{tool}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Sección Contacto */}
            {currentSection === 'contact' && (
              <div className="text-center animate-fade-up">
                <div className="mb-16">
                  <h2 className="text-5xl md:text-6xl font-light mb-6">{t.contact.title}</h2>
                  <div className="w-12 h-0.5 bg-white/60 mx-auto mb-8"></div>
                  <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                    {t.contact.subtitle}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                  {[
                    { label: 'Email', value: 'johan_harol@outlook.com', action: 'mailto:johan_harol@outlook.com' },
                    { label: 'LinkedIn', value: 'linkedin.com/in/mrjohanf', action: 'https://linkedin.com/in/mrjohanf' },
                    { label: 'GitHub', value: 'github.com/mrjohanf', action: 'https://github.com/mrjohanf' }
                  ].map((contact, index) => (
                    <button
                      key={contact.label}
                      onClick={() => handleContactClick(contact.action)}
                      className="block w-full p-8 border border-white/10 rounded-2xl hover:border-white/30 hover-lift organic-transition text-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-white/60 text-sm mb-2">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={handleDownloadCV}
                  className="bg-white text-black px-8 py-4 rounded-full font-medium hover-lift organic-transition"
                >
                  {t.contact.downloadCV}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Indicador de sección animado */}
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

      {/* Indicadores de navegación dinámicos */}
      <AnimatePresence>
        {currentSection !== 'projects' && !isMouseInSlider && (
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

        {currentSection === 'projects' && !isMouseInSlider && (
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

        {isMouseInSlider && (
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
      </AnimatePresence>
    </div>
  )
}