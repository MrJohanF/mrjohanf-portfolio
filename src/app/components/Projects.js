/* src/app/components/Projects.js */
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  PlayIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import SpotlightCard from './SpotlightCard'
import TechIcon, { hasTechIcon } from './TechIcon'

export default function Projects({
  t,
  isMobile,
  handleProjectClick,
  projects,
}) {
  const project = projects?.[0]

  if (!project) return null

  const projectData = t.projects.items[0]
  const roleLabel = project.role
    ? (t.projects.roles?.founder ?? project.role)
    : null

  return (
    <div className="animate-fade-up h-full flex flex-col">
      {/* Header */}
      <div className={`text-center ${isMobile ? 'mb-5' : 'mb-8'}`}>
        <h2
          className={`${
            isMobile ? 'text-4xl mb-3' : 'text-5xl md:text-6xl mb-4'
          } font-light tracking-tight`}
        >
          {t.projects.title}
        </h2>
        <div className="w-12 h-0.5 bg-white/60 mx-auto" />
      </div>

      {/* Single featured project */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          className={`group cursor-pointer w-full ${
            isMobile ? 'max-w-md' : 'max-w-5xl'
          }`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 180 }}
          onClick={() => handleProjectClick(project.demo)}
        >
          <SpotlightCard
            size={500}
            color="rgba(125, 211, 192, 0.08)"
            className={`relative w-full rounded-3xl glass-minimal border border-white/10 group-hover:border-white/25 organic-transition overflow-hidden ${
              isMobile ? 'p-5' : 'p-6'
            }`}
          >
            {/* Top badges */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              {roleLabel && (
                <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border bg-black/40 text-white border-white/20 whitespace-nowrap">
                  <StarIcon className="w-3 h-3" aria-hidden="true" />
                  {roleLabel}
                </span>
              )}
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border bg-black/40 text-white/90 border-white/20 whitespace-nowrap">
                <span
                  className="w-1.5 h-1.5 rounded-full status-dot"
                  style={{ background: 'var(--color-accent, #7dd3c0)' }}
                  aria-hidden="true"
                />
                {projectData.status}
              </span>
            </div>

            <div
              className={`flex ${
                isMobile ? 'flex-col' : 'items-start gap-6'
              }`}
            >
              {/* Preview image */}
              <div
                className={`relative flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-black/60 ${
                  isMobile ? 'w-full aspect-[16/10] mb-5' : 'w-[52%] aspect-[16/10]'
                }`}
              >
                <Image
                  src="/conjuntofacil-preview.jpg"
                  alt={`Preview de ${projectData.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col">
                <h3
                  className={`${
                    isMobile ? 'text-2xl' : 'text-3xl'
                  } font-light tracking-tight mb-2 text-white`}
                >
                  {projectData.title}
                </h3>

                <div
                  className={`flex items-center space-x-2 text-xs text-white/50 mb-4`}
                >
                  <span>{projectData.category}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>

                <p
                  className={`text-white/70 leading-relaxed mb-4 ${
                    isMobile ? 'text-sm' : 'text-sm'
                  }`}
                >
                  {projectData.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-white/75 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300"
                    >
                      {hasTechIcon(tech) && (
                        <TechIcon name={tech} className="w-3 h-3" />
                      )}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProjectClick(project.demo)
                    }}
                    className="flex items-center space-x-1.5 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 active:scale-[0.97] transition-all duration-300"
                  >
                    <PlayIcon className="w-4 h-4" aria-hidden="true" />
                    <span>{t.projects.buttons.demo}</span>
                    <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                  {project.github && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProjectClick(project.github)
                      }}
                      className="flex items-center space-x-1.5 px-4 py-2 border border-white/15 text-white/80 hover:text-white hover:border-white/30 rounded-full text-sm transition-all duration-300"
                    >
                      <span>{t.projects.buttons.code}</span>
                      <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  )
}
