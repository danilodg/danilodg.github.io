import { useState } from 'react'

import type { SiteContent } from '../content'
import {
  glassPanel,
  labelClass,
  primaryButtonClass,
  sectionTitleClass,
} from './ui'

export function ServicesSection({ content }: { content: SiteContent['projectsSection'] }) {
  const [selectedProject, setSelectedProject] = useState<SiteContent['projectsSection']['items'][number] | null>(null)

  return (
    <section className="mt-20 lg:mt-28" id="servicos">
      <div className="mb-7 max-w-[740px]">
        <span className={labelClass}>{content.label}</span>
        <h2 className={sectionTitleClass}>{content.title}</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {content.items.map((project) => (
          <button
            className={`${glassPanel} group overflow-hidden p-0 text-left transition duration-300 hover:-translate-y-1`}
            key={project.title}
            onClick={() => setSelectedProject(project)}
            type="button"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,8,20,0.75)] via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                {project.type}
              </span>
            </div>

            <div className="flex h-[calc(100%-14rem)] flex-col p-6">
              <h3 className="[font-family:Space_Grotesk,Trebuchet_MS,sans-serif] text-[1.35rem] font-bold text-[color:var(--text-main)]">
                {project.title}
              </h3>
              <p className="mt-3 text-[color:var(--text-soft)]">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {project.technologies.map((technology) => (
                  <span
                    className="rounded-full border border-[color:var(--chip-border)] bg-[var(--chip-bg)] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[color:var(--text-soft)]"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent-soft)]">
                {content.viewMore}
                <span aria-hidden="true">+</span>
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedProject ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-40 flex items-center justify-center bg-[rgba(4,10,24,0.72)] px-4 py-8 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
          role="dialog"
        >
          <div
            className={`${glassPanel} max-h-[90vh] w-full max-w-3xl overflow-hidden`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-72">
                <img
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                  src={selectedProject.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,9,22,0.86)] via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  {selectedProject.type}
                </span>
              </div>

              <div className="flex max-h-[90vh] flex-col overflow-y-auto p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={labelClass}>{content.featuredLabel}</span>
                    <h3 className="mt-4 [font-family:Space_Grotesk,Trebuchet_MS,sans-serif] text-[1.75rem] font-bold leading-tight text-[color:var(--text-main)]">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <button
                    aria-label={content.closeModal}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--chip-border)] bg-[var(--chip-bg)] text-[color:var(--text-main)] transition hover:-translate-y-0.5"
                    onClick={() => setSelectedProject(null)}
                    type="button"
                  >
                    x
                  </button>
                </div>

                <p className="mt-5 text-[color:var(--text-soft)]">{selectedProject.details}</p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      className="rounded-full border border-[color:var(--chip-border)] bg-[var(--chip-bg)] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[color:var(--text-soft)]"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  {selectedProject.highlights.map((highlight) => (
                    <div className="flex items-start gap-3" key={highlight}>
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,var(--accent-start),var(--accent-end))] shadow-[0_0_16px_var(--accent-shadow)]" />
                      <p className="text-sm text-[color:var(--text-soft)]">{highlight}</p>
                    </div>
                  ))}
                </div>

                <a className={`${primaryButtonClass} mt-8`} href="#contato">
                  {content.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
