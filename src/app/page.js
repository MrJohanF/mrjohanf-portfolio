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
  PlayIcon
} from '@heroicons/react/24/outline'

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollX, setScrollX] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [isMouseInSlider, setIsMouseInSlider] = useState(false)
  const sliderRef = useRef(null)
  const sliderContainerRef = useRef(null)

  // Array con el orden de las secciones para navegación
  const sectionOrder = ['home', 'about', 'projects', 'skills', 'contact']

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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
      setMaxScroll(Math.max(0, contentWidth - containerWidth))
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
      title: "E-Commerce Platform",
      description: "Plataforma completa de comercio electrónico con Next.js y microservicios. Sistema de pagos integrado con Stripe, gestión avanzada de inventario y dashboard de análisis en tiempo real.",
      tech: ["Next.js", "JavaScript", "Stripe", "PostgreSQL", "Redis"],
      year: "2024",
      status: "Activo",
      demo: "https://demo1.com",
      github: "https://github.com/mrjohanf/ecommerce",
      image: "🛒",
      gradient: "from-blue-500/20 to-purple-600/20",
      category: "Web App"
    },
    {
      id: 2,
      title: "Task Management",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real. Incluye notificaciones push, asignación inteligente de tareas y reportes de productividad avanzados.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      year: "2024",
      status: "Desarrollo",
      demo: "https://demo2.com",
      github: "https://github.com/mrjohanf/taskmanager",
      image: "📋",
      gradient: "from-green-500/20 to-teal-600/20",
      category: "Productivity"
    },
    {
      id: 3,
      title: "AI Dashboard",
      description: "Dashboard inteligente con integración de IA y análisis predictivo avanzado. Machine learning para detección de patrones, predicciones de negocio y automatización de procesos.",
      tech: ["Python", "TensorFlow", "React", "FastAPI", "Docker"],
      year: "2023",
      status: "Completado",
      demo: "https://demo3.com",
      github: "https://github.com/mrjohanf/ai-dashboard",
      image: "🤖",
      gradient: "from-orange-500/20 to-red-600/20",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description: "Plataforma completa para búsqueda y gestión de propiedades inmobiliarias. Incluye mapas interactivos, filtros avanzados, tours virtuales y sistema de citas.",
      tech: ["React Native", "Firebase", "Maps API", "Expo", "Node.js"],
      year: "2023",
      status: "Completado",
      demo: "https://demo4.com",
      github: "https://github.com/mrjohanf/realestate",
      image: "🏠",
      gradient: "from-indigo-500/20 to-blue-600/20",
      category: "Mobile App"
    },
    {
      id: 5,
      title: "Crypto Tracker",
      description: "Aplicación avanzada para seguimiento de criptomonedas con análisis técnico profesional. Alertas de precio personalizadas, portfolio tracking y noticias en tiempo real.",
      tech: ["Vue.js", "Node.js", "WebSocket", "Chart.js", "Redis"],
      year: "2023",
      status: "Completado",
      demo: "https://demo5.com",
      github: "https://github.com/mrjohanf/crypto-tracker",
      image: "₿",
      gradient: "from-yellow-500/20 to-orange-600/20",
      category: "FinTech"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Herramienta de análisis para redes sociales con métricas avanzadas. Seguimiento de engagement, análisis de audiencia y reportes automatizados para múltiples plataformas.",
      tech: ["React", "D3.js", "Python", "PostgreSQL", "AWS"],
      year: "2023",
      status: "Completado",
      demo: "https://demo6.com",
      github: "https://github.com/mrjohanf/social-analytics",
      image: "📊",
      gradient: "from-pink-500/20 to-rose-600/20",
      category: "Analytics"
    }
  ]

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "JavaScript ES6+", level: 92 },
    { name: "Node.js & Express", level: 88 },
    { name: "Python & Django", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Database Design", level: 85 }
  ]

  const navigation = [
    { id: 'home', label: 'Inicio', icon: HomeIcon },
    { id: 'about', label: 'Acerca', icon: UserIcon },
    { id: 'projects', label: 'Trabajo', icon: CodeBracketIcon },
    { id: 'skills', label: 'Skills', icon: CpuChipIcon },
    { id: 'contact', label: 'Contacto', icon: EnvelopeIcon }
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
                      Hola, soy
                    </p>
                    <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
                      Johan Fernández
                    </h1>
                  </div>
                  
                  <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
                    Desarrollador Full Stack especializado en crear 
                    <span className="text-white"> experiencias digitales excepcionales</span>
                  </p>
                  
                  <p className="text-lg text-white/60 max-w-2xl mx-auto">
                    Combinando diseño elegante con código limpio para crear aplicaciones 
                    web modernas que realmente importan.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                  <button
                    onClick={() => handleSectionChange('projects')}
                    className="group flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-medium hover-lift organic-transition"
                  >
                    <span>Ver mi trabajo</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 organic-transition" />
                  </button>
                  
                  <button
                    onClick={() => handleSectionChange('contact')}
                    className="flex items-center space-x-2 border border-white/20 px-8 py-4 rounded-full font-medium hover:border-white/40 organic-transition"
                  >
                    <span>Contactar</span>
                  </button>
                </div>
              </div>
            )}

            {/* Sección Acerca */}
            {currentSection === 'about' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-slide-up">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-5xl md:text-6xl font-light mb-6">Acerca de mí</h2>
                    <div className="w-12 h-0.5 bg-white/60 mb-8"></div>
                  </div>
                  
                  <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                    <p>
                      Con más de 5 años de experiencia en desarrollo web, me especializo en crear 
                      aplicaciones modernas que combinan diseño elegante con funcionalidad robusta.
                    </p>
                    <p>
                      Mi filosofía se centra en la simplicidad, la performance y la experiencia 
                      del usuario. Creo firmemente que las mejores soluciones son las más elegantes.
                    </p>
                    <p>
                      Trabajo principalmente con React, Next.js y Node.js, pero siempre estoy 
                      explorando nuevas tecnologías que puedan aportar valor a mis proyectos.
                    </p>
                  </div>
                </div>
                
                <div className="lg:pl-16">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { number: '60+', label: 'Proyectos' },
                      { number: '5+', label: 'Años' },
                      { number: '25+', label: 'Clientes' },
                      { number: '100%', label: 'Dedicación' }
                    ].map((stat, index) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-4xl font-light mb-2">{stat.number}</div>
                        <div className="text-white/60 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <h3 className="text-xl font-medium mb-4">Actualmente</h3>
                    <div className="space-y-3 text-white/70">
                      <p>🚀 Explorando Web3 y Blockchain</p>
                      <p>🎨 Perfeccionando habilidades de UI/UX</p>
                      <p>📚 Aprendiendo Machine Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sección Proyectos - SLIDER HORIZONTAL CON NAVEGACIÓN CONTEXTUAL */}
            {currentSection === 'projects' && (
              <div className="animate-fade-up h-full flex flex-col">
                {/* Header minimalista */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-light mb-6">Portfolio</h2>
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
                      className="absolute inset-0 border-2 border-white/20 rounded-3xl pointer-events-none z-10"
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
                    >
                      {projects.map((project, index) => (
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
                          whileHover={{ 
                            scale: 1.05,
                            transition: { type: "spring", damping: 15 }
                          }}
                        >
                          <div className="w-full h-full rounded-3xl p-8 glass-minimal border border-white/10 relative overflow-hidden hover:border-white/30 organic-transition">
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            {/* Status Badge */}
                            <div className="absolute top-6 right-6 z-10">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                                project.status === 'Activo' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                project.status === 'Desarrollo' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                                'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              }`}>
                                {project.status}
                              </span>
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col">
                              {/* Header */}
                              <div className="text-center mb-6">
                                <div className="text-5xl mb-4">{project.image}</div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <div className="flex items-center justify-center space-x-3 text-sm text-white/60">
                                  <span>{project.category}</span>
                                  <span>•</span>
                                  <span>{project.year}</span>
                                </div>
                              </div>
                              
                              {/* Description */}
                              <div className="flex-1 mb-6">
                                <p className="text-white/70 text-sm leading-relaxed line-clamp-4">
                                  {project.description}
                                </p>
                              </div>
                              
                              {/* Tech Stack */}
                              <div className="space-y-4">
                                <div className="flex flex-wrap gap-2 justify-center">
                                  {project.tech.slice(0, 3).map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                  {project.tech.length > 3 && (
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60">
                                      +{project.tech.length - 3}
                                    </span>
                                  )}
                                </div>
                                
                                {/* Action buttons */}
                                <div className="flex space-x-3 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleProjectClick(project.demo)
                                    }}
                                    className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-all duration-300"
                                  >
                                    <PlayIcon className="w-4 h-4" />
                                    <span>Demo</span>
                                  </button>
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleProjectClick(project.github)
                                    }}
                                    className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-all duration-300"
                                  >
                                    <span>Código</span>
                                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
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
                  <h2 className="text-5xl md:text-6xl font-light mb-6">Habilidades</h2>
                  <div className="w-12 h-0.5 bg-white/60 mb-4"></div>
                  <p className="text-white/60 text-lg">Tecnologías y herramientas que domino</p>
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
                  <h3 className="text-2xl font-light mb-8">Herramientas adicionales</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                      { category: 'Frontend', tools: ['React', 'Next.js', 'Vue.js', 'Tailwind'] },
                      { category: 'Backend', tools: ['Node.js', 'Express', 'Python', 'Django'] },
                      { category: 'Database', tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
                      { category: 'DevOps', tools: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'] }
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
                  <h2 className="text-5xl md:text-6xl font-light mb-6">Conversemos</h2>
                  <div className="w-12 h-0.5 bg-white/60 mx-auto mb-8"></div>
                  <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                    Siempre estoy interesado en nuevos proyectos y oportunidades de colaboración.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                  {[
                    { label: 'Email', value: 'johan@mrjohanf.dev', action: 'mailto:johan@mrjohanf.dev' },
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
                  Descargar CV
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
            <span>Scroll para navegar entre secciones</span>
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
            <span>Scroll para cambiar sección • Entra al área para navegar proyectos</span>
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
            <span>Scroll horizontal para navegar proyectos</span>
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