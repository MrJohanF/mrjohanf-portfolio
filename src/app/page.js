'use client'

import { useState, useEffect } from 'react'
import { 
  HomeIcon, 
  UserIcon, 
  CodeBracketIcon, 
  CpuChipIcon, 
  EnvelopeIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma completa de comercio electrónico con Next.js",
      tech: ["Next.js", "JavaScript", "Stripe"],
      year: "2024",
      status: "Activo",
      demo: "https://demo1.com",
      github: "https://github.com/mrjohanf/ecommerce"
    },
    {
      id: 2,
      title: "Task Management",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real",
      tech: ["React", "Node.js", "Socket.io"],
      year: "2024",
      status: "Desarrollo",
      demo: "https://demo2.com",
      github: "https://github.com/mrjohanf/taskmanager"
    },
    {
      id: 3,
      title: "AI Dashboard",
      description: "Dashboard con integración de IA y análisis de datos",
      tech: ["Python", "TensorFlow", "React"],
      year: "2023",
      status: "Completado",
      demo: "https://demo3.com",
      github: "https://github.com/mrjohanf/ai-dashboard"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Sitio web personal con animaciones y diseño minimalista",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      year: "2024",
      status: "Activo",
      demo: "https://mrjohanf.dev",
      github: "https://github.com/mrjohanf/portfolio"
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
    // Aquí puedes agregar la lógica para descargar el CV
    console.log('Descargando CV...')
  }

  return (
    <div className="h-screen w-full bg-black text-white overflow-hidden relative">
      
      {/* Navegación minimalista */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center space-x-1 bg-white/5 glass-minimal rounded-full p-1 border border-white/10">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium organic-transition ${
                  currentSection === item.id 
                    ? 'bg-white text-black' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:block">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="h-full flex items-center justify-center px-6">
        <div className="w-full max-w-4xl">
          
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
                  <p>
                    Cuando no estoy programando, me gusta estudiar diseño, leer sobre tecnología 
                    y explorar nuevas tendencias en el desarrollo web.
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

          {/* Sección Proyectos */}
          {currentSection === 'projects' && (
            <div className="animate-fade-up">
              <div className="mb-16">
                <h2 className="text-5xl md:text-6xl font-light mb-6">Trabajo Seleccionado</h2>
                <div className="w-12 h-0.5 bg-white/60 mb-4"></div>
                <p className="text-white/60 text-lg">Algunos de mis proyectos más destacados</p>
              </div>
              
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group border-t border-white/10 pt-8 hover-lift organic-transition"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-4 mb-4">
                          <h3 className="text-2xl font-medium">{project.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Activo' ? 'bg-green-500/20 text-green-400' :
                            project.status === 'Desarrollo' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-white/70 leading-relaxed mb-4">{project.description}</p>
                        
                        <div className="flex space-x-3 opacity-0 group-hover:opacity-100 organic-transition">
                          <button 
                            onClick={() => handleProjectClick(project.demo)}
                            className="text-sm text-white/60 hover:text-white organic-transition"
                          >
                            Ver demo ↗
                          </button>
                          <button 
                            onClick={() => handleProjectClick(project.github)}
                            className="text-sm text-white/60 hover:text-white organic-transition"
                          >
                            Ver código ↗
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {project.tech.map((tech) => (
                          <div key={tech} className="text-sm text-white/50">{tech}</div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-white/40 text-sm">{project.year}</span>
                        <button 
                          onClick={() => handleProjectClick(project.demo)}
                          className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white/10 rounded-full organic-transition"
                        >
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/10 text-center">
                <p className="text-white/60 mb-6">¿Interesado en ver más proyectos?</p>
                <button 
                  onClick={() => handleProjectClick('https://github.com/mrjohanf')}
                  className="border border-white/20 px-6 py-3 rounded-full text-sm hover:border-white/40 organic-transition"
                >
                  Ver GitHub completo
                </button>
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
                <h3 className="text-2xl font-light mb-8">Herramientas y tecnologías adicionales</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    {
                      category: 'Frontend',
                      tools: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS']
                    },
                    {
                      category: 'Backend', 
                      tools: ['Node.js', 'Express', 'Python', 'Django']
                    },
                    {
                      category: 'Database',
                      tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase']
                    },
                    {
                      category: 'DevOps',
                      tools: ['Docker', 'AWS', 'Vercel', 'GitHub Actions']
                    }
                  ].map((group, index) => (
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
                  No dudes en contactarme.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                {[
                  { 
                    label: 'Email', 
                    value: 'johan@mrjohanf.dev',
                    action: 'mailto:johan@mrjohanf.dev'
                  },
                  { 
                    label: 'LinkedIn', 
                    value: 'linkedin.com/in/mrjohanf',
                    action: 'https://linkedin.com/in/mrjohanf'
                  },
                  { 
                    label: 'GitHub', 
                    value: 'github.com/mrjohanf',
                    action: 'https://github.com/mrjohanf'
                  }
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
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={handleDownloadCV}
                  className="bg-white text-black px-8 py-4 rounded-full font-medium hover-lift organic-transition"
                >
                  Descargar CV
                </button>
                <div className="text-white/60 text-center">
                  <p>Disponible para proyectos freelance</p>
                  <p className="text-sm text-white/40">Respuesta garantizada en 24h</p>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-white/40 text-sm">
                  Ubicado en tu ciudad • Disponible para trabajar remotamente • 
                  Horario flexible según tu zona horaria
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Indicador de sección */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="space-y-3">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionChange(item.id)}
              className={`block w-2 h-8 rounded-full organic-transition ${
                currentSection === item.id ? 'bg-white' : 'bg-white/20 hover:bg-white/40'
              }`}
              title={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  )
}