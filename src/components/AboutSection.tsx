import type { SiteContent } from '../content'
import { glassPanel, labelClass, sectionTitleClass } from './ui'

export function AboutSection({ content }: { content: SiteContent['about'] }) {
  return (
    <section className="mt-20 lg:mt-28" id="sobre">
      <div className="mb-7 max-w-[740px]">
        <span className={labelClass}>{content.label}</span>
        <h2 className={sectionTitleClass}>{content.title}</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className={`${glassPanel} grid gap-4 p-7`}>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <aside className={`${glassPanel} grid gap-5 p-7`}>
          {content.items.map((item) => (
            <div key={item.title}>
              <strong className="mb-1.5 block text-[color:var(--text-main)]">{item.title}</strong>
              <span className="text-[color:var(--text-soft)]">{item.description}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}
