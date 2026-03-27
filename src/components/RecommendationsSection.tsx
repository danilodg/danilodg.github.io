import type { SiteContent } from '../content'
import { glassPanel, labelClass, sectionTitleClass } from './ui'

export function RecommendationsSection({ content }: { content: SiteContent['recommendationsSection'] }) {
  return (
    <section className="mt-20 lg:mt-28" id="recomendacoes">
      <div className="mb-7 max-w-[880px]">
        <span className={labelClass}>{content.label}</span>
        <h2 className={sectionTitleClass}>{content.title}</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {content.items.map((recommendation) => (
          <article className={`${glassPanel} flex h-full flex-col p-6`} key={recommendation.name}>
            <span className="text-4xl leading-none text-[color:var(--accent-line)]">"</span>
            <p className="mt-4 text-[color:var(--text-soft)]">{recommendation.quote}</p>

            <div className="mt-6 pt-5 border-t border-[color:var(--card-border)]">
              <strong className="block text-[color:var(--text-main)]">{recommendation.name}</strong>
              <span className="mt-1 block text-sm text-[color:var(--text-muted)]">
                {recommendation.role} - {recommendation.company}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
