import { GlassPanel, SectionLabel } from 'auralith-ui'

import type { SiteContent } from '../content'
import { sectionTitleClass } from './ui'

export function RecommendationsSection({ content }: { content: SiteContent['recommendationsSection'] }) {
  return (
    <section className="mt-12 lg:mt-16" id="recomendacoes">
      <div className="mb-7 max-w-[880px]">
        <SectionLabel>{content.label}</SectionLabel>
        <h2 className={sectionTitleClass}>{content.title}</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {content.items.map((recommendation) => (
          <GlassPanel className="flex h-full flex-col p-4 sm:p-5" key={recommendation.name}>
            <span className="text-4xl leading-none text-[color:var(--accent-line)]">"</span>
            <p className="mt-4 text-[color:var(--text-soft)]">{recommendation.quote}</p>

            <div className="mt-4 border-t border-[color:var(--card-border)] pt-3">
              <strong className="block text-[color:var(--text-main)]">{recommendation.name}</strong>
              <span className="mt-1 block text-sm text-[color:var(--text-muted)]">
                {recommendation.role} - {recommendation.company}
              </span>
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  )
}
