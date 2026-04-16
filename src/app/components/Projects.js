/* src/app/components/Projects.js */
import { motion } from 'framer-motion'
import {
  PlayIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

export default function Projects({
  t,
  isMobile,
  handleProjectClick,
  projects,
}) {
  const project = projects?.[0]

  if (!project) return null

  const IconComponent = project.icon
  const projectData = t.projects.items[0]
  const roleLabel = project.role
    ? (t.projects.roles?.founder ?? project.role)
    : null

  return (
    <div className="animate-fade-up h-full flex flex-col">
      {/* Header */}
      <div className={`text-center ${isMobile ? 'mb-6' : 'mb-10'}`}>
        <h2
          className={`${
            isMobile ? 'text-4xl mb-4' : 'text-5xl md:text-6xl mb-6'
          } font-light`}
        >
          {t.projects.title}
        </h2>
        <div className="w-12 h-0.5 bg-white/60 mx-auto" />
      </div>

      {/* Single featured project */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          className={`group cursor-pointer w-full ${
            isMobile ? 'max-w-md' : 'max-w-3xl'
          }`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 180 }}
          onClick={() => handleProjectClick(project.demo)}
        >
          <div
            className={`relative w-full rounded-3xl glass-minimal border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 organic-transition overflow-hidden ${
              isMobile ? 'p-6' : 'p-10'
            }`}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl" />

            {/* Top badges */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              {roleLabel && (
                <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border bg-white/15 text-white border-white/25 whitespace-nowrap">
                  <StarIcon className="w-3 h-3" />
                  {roleLabel}
                </span>
              )}
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-300 whitespace-nowrap ${
                  projectData.status === 'Activo' ||
                  projectData.status === 'Active'
                    ? 'bg-white/10 text-white/90 border-white/20 group-hover:bg-white/20 group-hover:text-white'
                    : projectData.status === 'Desarrollo' ||
                      projectData.status === 'Development'
                    ? 'bg-white/10 text-white/70 border-white/15 group-hover:bg-white/20 group-hover:text-white/90'
                    : 'bg-white/10 text-white/60 border-white/10 group-hover:bg-white/20 group-hover:text-white/80'
                }`}
              >
                {projectData.status}
              </span>
            </div>

            <div
              className={`relative z-10 flex ${
                isMobile ? 'flex-col items-center text-center' : 'items-start gap-8'
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div
                  className={`rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 ${
                    isMobile ? 'w-16 h-16 mb-4' : 'w-20 h-20'
                  }`}
                >
                  {IconComponent && (
                    <IconComponent
                      className={`${
                        isMobile ? 'w-8 h-8' : 'w-10 h-10'
                      } text-white/80 group-hover:text-white transition-colors duration-300`}
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className={`${
                    isMobile ? 'text-2xl' : 'text-3xl'
                  } font-semibold mb-2 group-hover:text-white transition-colors duration-300 pr-0 ${
                    isMobile ? '' : 'pr-32'
                  }`}
                >
                  {projectData.title}
                </h3>

                <div
                  className={`flex items-center ${
                    isMobile ? 'justify-center' : ''
                  } space-x-3 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300 mb-4`}
                >
                  <span>{projectData.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>

                <p
                  className={`text-white/70 leading-relaxed mb-5 group-hover:text-white/90 transition-colors duration-300 ${
                    isMobile ? 'text-sm' : 'text-base'
                  }`}
                >
                  {projectData.description}
                </p>

                {/* Tech stack */}
                <div
                  className={`flex flex-wrap gap-2 mb-5 ${
                    isMobile ? 'justify-center' : ''
                  }`}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/10 rounded-full text-xs text-white/80 group-hover:bg-white/20 group-hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div
                  className={`flex gap-2 ${
                    isMobile ? 'justify-center' : ''
                  }`}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProjectClick(project.demo)
                    }}
                    className="flex items-center space-x-1.5 px-4 py-2 bg-white/15 hover:bg-white/25 active:bg-white/30 rounded-lg text-sm transition-all duration-300 backdrop-blur-sm"
                  >
                    <PlayIcon className="w-4 h-4" />
                    <span>{t.projects.buttons.demo}</span>
                    <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                  </button>
                  {project.github && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProjectClick(project.github)
                      }}
                      className="flex items-center space-x-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 active:bg-white/25 rounded-lg text-sm transition-all duration-300 backdrop-blur-sm"
                    >
                      <span>{t.projects.buttons.code}</span>
                      <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
