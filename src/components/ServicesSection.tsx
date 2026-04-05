import { useEffect, useState } from 'react'
import { Button, GlassPanel, SectionLabel, Tag } from 'auralith-ui'

import type { SiteContent } from '../content'
import {
  sectionTitleClass,
} from './ui'

export function ServicesSection({ content }: { content: SiteContent['projectsSection'] }) {
  const [selectedProject, setSelectedProject] = useState<SiteContent['projectsSection']['items'][number] | null>(null)

  useEffect(() => {
    if (!selectedProject) {
      return
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = overflow
    }
  }, [selectedProject])

  function jumpToContact() {
    const section = document.getElementById('contato')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setSelectedProject(null)
  }

  function openProject(url: string) {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      window.open(url, '_blank', 'noopener,noreferrer')
      return
    }

    window.location.assign(url)
  }

  return (
    <section className="mt-12 lg:mt-16" id="servicos">
      <div className="mb-7 max-w-[860px]">
        <SectionLabel>{content.label}</SectionLabel>
        <h2 className={sectionTitleClass}>{content.title}</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {content.items.map((project) => (
          <button className="group h-full text-left" key={project.title} onClick={() => setSelectedProject(project)} type="button">
            <GlassPanel className="flex h-full flex-col overflow-hidden p-0 transition duration-300 hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,8,20,0.75)] via-transparent to-transparent" />
                <Tag className="absolute left-5 top-5 rounded-full border-white/20 bg-[rgba(8,14,30,0.62)] px-3 py-1.5 text-xs tracking-[0.12em] text-white">
                  {project.type}
                </Tag>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="[font-family:Space_Grotesk,Trebuchet_MS,sans-serif] text-[1.35rem] font-bold text-[color:var(--text-main)]">
                  {project.title}
                </h3>
                <p className="mt-3 min-h-[72px] text-[color:var(--text-soft)]">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Tag className="rounded-full border-[color:var(--chip-border)] bg-[var(--chip-bg)] px-3 py-2 text-xs tracking-[0.12em]" key={technology}>
                      {technology}
                    </Tag>
                  ))}
                </div>

                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-medium text-[color:var(--accent-soft)]">
                  {content.viewMore}
                  <span aria-hidden="true">+</span>
                </span>
              </div>
            </GlassPanel>
          </button>
        ))}
      </div>

      {selectedProject ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-40 flex items-center justify-center bg-[var(--modal-overlay)] px-4 py-8"
          onClick={() => setSelectedProject(null)}
          role="dialog"
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[10px] border border-[color:var(--panel-border)] bg-[var(--modal-bg)] shadow-[var(--panel-shadow)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-72">
                <img
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                  src={selectedProject.image}
                />
                <div className="absolute inset-0 bg-[image:var(--modal-image-overlay)]" />
                <Tag className="absolute bottom-5 left-5 rounded-full border-white/20 bg-[var(--modal-tag-bg)] px-3 py-1.5 text-xs tracking-[0.12em] text-white">
                  {selectedProject.type}
                </Tag>
              </div>

              <div className="flex max-h-[90vh] flex-col overflow-y-auto p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <SectionLabel>{content.featuredLabel}</SectionLabel>
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
                    <Tag className="rounded-full border-[color:var(--chip-border)] bg-[var(--chip-bg)] px-3 py-2 text-xs tracking-[0.12em]" key={technology}>
                      {technology}
                    </Tag>
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

                <div className="mt-8 flex flex-wrap gap-2">
                  {selectedProject.projectUrl ? (
                    <Button onClick={() => selectedProject.projectUrl && openProject(selectedProject.projectUrl)} type="button">
                      {selectedProject.projectLabel ?? content.openProjectLabel}
                    </Button>
                  ) : null}

                  {selectedProject.repositoryUrl ? (
                    <Button onClick={() => selectedProject.repositoryUrl && openProject(selectedProject.repositoryUrl)} type="button" variant="secondary">
                      {content.openRepositoryLabel}
                    </Button>
                  ) : null}

                  <Button onClick={jumpToContact} type="button" variant="secondary">
                    {content.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
