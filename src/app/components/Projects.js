/* src/app/components/Projects.js */
'use client'

import { useRef } from 'react'
import Image from 'next/image'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
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
  const projectData = t.projects.items[0]

  // Motion values para el parallax/tilt del card (solo desktop)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 150,
    damping: 18,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 150,
    damping: 18,
  })
  const imgShiftX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  })
  const imgShiftY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  })

  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (isMobile) return
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(nx)
    mouseY.set(ny)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  if (!project) return null

  const roleLabel = project.role
    ? (t.projects.roles?.founder ?? project.role)
    : null

  // Extrae dominio de la URL demo para el fake browser chrome
  let demoHost = ''
  try {
    demoHost = new URL(project.demo).host.replace(/^www\./, '')
  } catch {
    demoHost = 'conjuntofacil.com'
  }

  return (
    <div className="animate-fade-up h-full flex flex-col">
      {/* Header con kicker editorial */}
      <div className={`text-center ${isMobile ? 'mb-6' : 'mb-8'}`}>
        <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/40 mb-3">
          03 — {t.projects.title}
        </div>
        <h2
          className={`${
            isMobile ? 'text-4xl mb-3' : 'text-5xl md:text-6xl mb-4'
          } font-light tracking-tight`}
        >
          {projectData.title}
          <span className="font-serif italic font-normal text-white/70"> — </span>
          <span className="font-serif italic font-normal text-white/80">
            {t.projects.items[0].category.split(' · ')[0]}
          </span>
        </h2>
        <div className="w-12 h-0.5 bg-white/60 mx-auto" />
      </div>

      {/* Single featured project */}
      <div className="flex-1 flex items-center justify-center" style={{ perspective: 1200 }}>
        <motion.div
          ref={cardRef}
          className={`group cursor-pointer w-full ${
            isMobile ? 'max-w-md' : 'max-w-5xl'
          }`}
          style={{
            rotateX: isMobile ? 0 : rotateX,
            rotateY: isMobile ? 0 : rotateY,
            transformStyle: 'preserve-3d',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 180 }}
          onClick={() => handleProjectClick(project.demo)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <SpotlightCard
            size={500}
            color="rgba(125, 211, 192, 0.10)"
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
                isMobile ? 'flex-col' : 'items-stretch gap-6'
              }`}
            >
              {/* Preview con fake browser chrome */}
              <motion.div
                className={`relative flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] ${
                  isMobile ? 'w-full mb-5' : 'w-[52%]'
                }`}
                style={{ transform: 'translateZ(40px)' }}
              >
                {/* Browser top bar */}
                <div className="flex items-center gap-2 px-3 py-2 bg-white/[0.04] border-b border-white/10 backdrop-blur-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-[#ff5f57]/80 organic-transition" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-[#febc2e]/80 organic-transition" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-[#28c840]/80 organic-transition" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-black/40 border border-white/10 text-[10px] font-mono text-white/55 max-w-full truncate">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="w-2.5 h-2.5 text-white/40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="5" y="11" width="14" height="9" rx="2" />
                        <path d="M8 11V8a4 4 0 1 1 8 0v3" />
                      </svg>
                      <span className="truncate">{demoHost}</span>
                    </div>
                  </div>
                  <div className="w-10" aria-hidden="true" />
                </div>

                {/* Preview image con parallax interno */}
                <div className={`relative ${isMobile ? 'aspect-[16/10]' : 'aspect-[16/10]'}`}>
                  <motion.div
                    className="absolute inset-0"
                    style={{ x: isMobile ? 0 : imgShiftX, y: isMobile ? 0 : imgShiftY }}
                  >
                    <Image
                      src="/conjuntofacil-preview.jpg"
                      alt={`Preview de ${projectData.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover scale-[1.08] group-hover:scale-[1.12] transition-transform duration-[900ms] ease-out"
                      priority
                    />
                  </motion.div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
                  {/* Gradiente sutil inferior para integrar con el card */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Content */}
              <div
                className="flex-1 min-w-0 flex flex-col"
                style={{ transform: isMobile ? 'none' : 'translateZ(20px)' }}
              >
                <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.15em] uppercase text-white/40 mb-3">
                  <span>{projectData.category}</span>
                  <span className="text-white/25">·</span>
                  <span>{project.year}</span>
                </div>

                <h3
                  className={`${
                    isMobile ? 'text-2xl' : 'text-3xl'
                  } font-light tracking-tight mb-3 text-white`}
                >
                  {projectData.title}
                </h3>

                <p
                  className={`text-white/65 leading-relaxed mb-5 ${
                    isMobile ? 'text-sm' : 'text-sm'
                  }`}
                >
                  {projectData.description}
                </p>

                {/* Métricas del proyecto */}
                {projectData.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-5 pb-5 border-b border-white/10">
                    {projectData.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div
                          className={`font-light text-white tabular-nums ${
                            isMobile ? 'text-xl' : 'text-2xl'
                          }`}
                        >
                          {metric.value}
                        </div>
                        <div className="text-[10px] font-mono tracking-[0.12em] uppercase text-white/45 mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

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
