import { GlassPanel, SectionLabel, Tag } from 'auralith-ui'

import type { SiteContent } from '../content'
import { sectionTitleClass } from './ui'

export function ProjectsSection({ content }: { content: SiteContent['servicesSection'] }) {
  return (
    <section className="mt-12 lg:mt-16" id="projetos">
      <div className="mb-7 max-w-[860px]">
        <SectionLabel>{content.label}</SectionLabel>
        <h2 className={sectionTitleClass}>{content.title}</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {content.items.map((service) => (
          <GlassPanel className="flex h-full flex-col p-4 sm:p-5" key={service.title}>
            <SectionLabel>{service.category}</SectionLabel>
            <h3 className="mt-4 [font-family:Space_Grotesk,Trebuchet_MS,sans-serif] text-[1.4rem] font-bold text-[color:var(--text-main)]">
              {service.title}
            </h3>
            <p className="mt-3">{service.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {service.highlights.map((highlight) => (
                <Tag className="rounded-full border-[color:var(--chip-border)] bg-[var(--chip-bg)] px-3 py-2 text-xs tracking-[0.12em]" key={highlight}>
                  {highlight}
                </Tag>
              ))}
            </div>

            <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-[color:var(--accent-line)] to-transparent" />
          </GlassPanel>
        ))}
      </div>
    </section>
  )
}
