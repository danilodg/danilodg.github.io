import type { SiteContent } from '../content'
import { glassPanel, labelClass, sectionTitleClass } from './ui'

export function ProjectsSection({ content }: { content: SiteContent['servicesSection'] }) {
  return (
    <section className="mt-20 lg:mt-28" id="projetos">
      <div className="mb-7 max-w-[740px]">
        <span className={labelClass}>{content.label}</span>
        <h2 className={sectionTitleClass}>{content.title}</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {content.items.map((service) => (
          <article className={`${glassPanel} flex h-full flex-col p-6`} key={service.title}>
            <span className={labelClass}>{service.category}</span>
            <h3 className="mt-4 [font-family:Space_Grotesk,Trebuchet_MS,sans-serif] text-[1.4rem] font-bold text-[color:var(--text-main)]">
              {service.title}
            </h3>
            <p className="mt-3">{service.description}</p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {service.highlights.map((highlight) => (
                <span
                  className="rounded-full border border-[color:var(--chip-border)] bg-[var(--chip-bg)] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[color:var(--text-soft)]"
                  key={highlight}
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-6 h-0.5 w-full bg-gradient-to-r from-[color:var(--accent-line)] to-transparent" />
          </article>
        ))}
      </div>
    </section>
  )
}
