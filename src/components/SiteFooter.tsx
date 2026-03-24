import { glassPanel, labelClass, sectionTitleClass } from './ui'

export function SiteFooter() {
  return (
    <footer
      className={`${glassPanel} mt-20 flex flex-col gap-5 p-6 sm:p-7 lg:mt-28 lg:flex-row lg:items-end lg:justify-between`}
    >
      <div>
        <span className={labelClass}>Encerramento</span>
        <h2 className={sectionTitleClass}>Portfolio criado para destacar sua presenca digital</h2>
      </div>

      <div className="flex flex-wrap gap-4 lg:justify-end">
        <a className="no-underline text-[color:var(--text-main)]" href="mailto:danilo@email.com">
          danilo@email.com
        </a>
        <a
          className="no-underline text-[color:var(--text-main)]"
          href="https://github.com/"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="no-underline text-[color:var(--text-main)]"
          href="https://linkedin.com/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
