import { GlassPanel, SectionLabel } from 'auralith-ui'

import type { SiteContent } from '../content'
import { sectionTitleClass } from './ui'

export function AboutSection({ content }: { content: SiteContent['about'] }) {
  return (
    <section className="mt-12 lg:mt-16" id="sobre">
      <div className="mb-7 max-w-[860px]">
        <SectionLabel>{content.label}</SectionLabel>
        <h2 className={sectionTitleClass}>{content.title}</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <GlassPanel className="grid gap-3 p-4 sm:p-5">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </GlassPanel>

        <aside>
          <GlassPanel className="grid gap-3 p-4 sm:p-5">
            {content.items.map((item) => (
              <div key={item.title}>
                <strong className="mb-1.5 block text-[color:var(--text-main)]">{item.title}</strong>
                <span className="text-[color:var(--text-soft)]">{item.description}</span>
              </div>
            ))}
          </GlassPanel>
        </aside>
      </div>
    </section>
  )
}
