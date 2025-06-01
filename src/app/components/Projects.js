import { motion } from 'framer-motion'
import { 
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  ArrowTopRightOnSquareIcon,
  ShoppingCartIcon,
  ClipboardDocumentListIcon,
  SunIcon,
  GlobeAmericasIcon,
  FilmIcon,
} from '@heroicons/react/24/outline'

export default function Projects({ 
  t, 
  isMobile, 
  scrollX, 
  maxScroll, 
  isMouseInSlider,
  handleSliderMouseEnter,
  handleSliderMouseLeave,
  slideLeft,
  slideRight,
  handleProjectClick,
  sliderRef
}) {
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

  return (
    <div className="animate-fade-up h-full flex flex-col">
      {/* Header minimalista */}
      <div className={`text-center ${isMobile ? 'mb-8' : 'mb-12'}`}>
        <h2 className={`${
          isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'
        } font-light mb-4 md:mb-6`}>{t.projects.title}</h2>
        <div className="w-12 h-0.5 bg-white/60 mx-auto"></div>
      </div>
      
      {/* Slider Container - Mobile optimized */}
      <div 
        className="flex-1 relative"
        onMouseEnter={handleSliderMouseEnter}
        onMouseLeave={handleSliderMouseLeave}
      >
        {/* Visual indicator cuando el mouse está en el slider - Hidden on mobile */}
        {isMouseInSlider && !isMobile && (
          <motion.div
            className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* Navigation Buttons - Mobile optimized */}
        <button
          onClick={slideLeft}
          disabled={scrollX === 0}
          className={`absolute ${
            isMobile ? 'left-2' : 'left-0'
          } top-1/2 -translate-y-1/2 z-20 ${
            isMobile ? 'p-2' : 'p-4'
          } rounded-full transition-all duration-300 backdrop-blur-sm ${
            scrollX === 0 
              ? 'bg-white/5 text-white/30 cursor-not-allowed' 
              : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
        >
          <ChevronLeftIcon className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'}`} />
        </button>
        
        <button
          onClick={slideRight}
          disabled={scrollX >= maxScroll}
          className={`absolute ${
            isMobile ? 'right-2' : 'right-0'
          } top-1/2 -translate-y-1/2 z-20 ${
            isMobile ? 'p-2' : 'p-4'
          } rounded-full transition-all duration-300 backdrop-blur-sm ${
            scrollX >= maxScroll 
              ? 'bg-white/5 text-white/30 cursor-not-allowed' 
              : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
        >
          <ChevronRightIcon className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'}`} />
        </button>
        
        {/* Scrollable Content - Mobile optimized */}
        <div className={`overflow-hidden h-full ${
          isMobile ? 'px-12' : 'px-16'
        }`}>
          <motion.div
            ref={sliderRef}
            className="flex gap-6 md:gap-8 h-full items-center"
            animate={{ x: -scrollX }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{ paddingRight: isMobile ? '50px' : '100px' }}
          >
            {projects.map((project, index) => {
              const IconComponent = project.icon
              const projectData = t.projects.items[index]
              return (
                <motion.div
                  key={project.id}
                  className={`flex-shrink-0 ${
                    isMobile 
                      ? 'w-72 h-80' 
                      : 'w-80 h-96'
                  } group cursor-pointer`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    damping: 20
                  }}
                >
                  <div className={`w-full h-full rounded-3xl ${
                    isMobile ? 'p-4' : 'p-6'
                  } glass-minimal border border-white/10 relative group-hover:border-white/30 group-hover:bg-white/10 organic-transition`}>
                    {/* Effects */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl" />
                    
                    {/* Status Badge */}
                    <div className={`absolute ${
                      isMobile ? 'top-3 right-3' : 'top-4 right-4'
                    } z-10`}>
                      <span className={`px-2 md:px-3 py-1 rounded-full ${
                        isMobile ? 'text-xs' : 'text-xs'
                      } font-medium backdrop-blur-sm border transition-all duration-300 ${
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
                      <div className={`text-center ${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <div className={`${isMobile ? 'mb-3' : 'mb-4'} flex justify-center`}>
                          <div className={`${
                            isMobile ? 'w-12 h-12' : 'w-16 h-16'
                          } rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300`}>
                            <IconComponent className={`${
                              isMobile ? 'w-6 h-6' : 'w-8 h-8'
                            } text-white/80 group-hover:text-white transition-colors duration-300`} />
                          </div>
                        </div>
                        <h3 className={`${
                          isMobile ? 'text-lg' : 'text-xl'
                        } font-semibold mb-2 group-hover:text-white transition-colors duration-300`}>
                          {projectData.title}
                        </h3>
                        <div className={`flex items-center justify-center space-x-3 ${
                          isMobile ? 'text-xs' : 'text-sm'
                        } text-white/60 group-hover:text-white/80 transition-colors duration-300`}>
                          <span>{projectData.category}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className={`flex-1 ${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <p className={`text-white/70 ${
                          isMobile ? 'text-xs' : 'text-sm'
                        } leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors duration-300`}>
                          {projectData.description}
                        </p>
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className={`px-2 py-1 bg-white/10 rounded-full ${
                                isMobile ? 'text-xs' : 'text-xs'
                              } text-white/80 group-hover:bg-white/20 group-hover:text-white transition-all duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className={`px-2 py-1 bg-white/5 rounded-full ${
                              isMobile ? 'text-xs' : 'text-xs'
                            } text-white/60 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-300`}>
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
                            className={`flex items-center space-x-1 ${
                              isMobile ? 'px-2 py-1' : 'px-3 py-2'
                            } bg-white/20 hover:bg-white/30 rounded-lg text-xs transition-all duration-300 backdrop-blur-sm`}
                          >
                            <PlayIcon className="w-3 h-3" />
                            <span>{t.projects.buttons.demo}</span>
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              handleProjectClick(project.github)
                            }}
                            className={`flex items-center space-x-1 ${
                              isMobile ? 'px-2 py-1' : 'px-3 py-2'
                            } bg-white/20 hover:bg-white/30 rounded-lg text-xs transition-all duration-300 backdrop-blur-sm`}
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
      <div className={`flex justify-center ${
        isMobile ? 'mt-6' : 'mt-8'
      } space-x-2`}>
        <div className={`h-1 ${
          isMobile ? 'w-24' : 'w-32'
        } bg-white/10 rounded-full overflow-hidden`}>
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
  )
} 