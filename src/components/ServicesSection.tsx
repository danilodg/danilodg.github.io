import { completedProjects } from './data'
import {
  glassPanel,
  labelClass,
  primaryButtonClass,
  sectionTitleClass,
} from './ui'

export function ServicesSection() {
  return (
    <section className="mt-20 lg:mt-28" id="servicos">
      <div className="mb-7 max-w-[740px]">
        <span className={labelClass}>Projetos</span>
        <h2 className={sectionTitleClass}>
          Alguns formatos de projeto que ja sairam do papel
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className={`${glassPanel} grid gap-5 p-7`}>
          {completedProjects.map((project) => (
            <div className="flex items-start gap-3.5" key={project.title}>
              <span className="mt-2 h-3 w-3 rounded-full bg-[linear-gradient(135deg,var(--accent-start),var(--accent-end))] shadow-[0_0_18px_var(--accent-shadow)]" />
              <div>
                <strong className="block text-[color:var(--text-main)]">{project.title}</strong>
                <span className="mt-1 block text-sm text-[color:var(--text-muted)]">{project.type}</span>
                <p className="mt-2">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${glassPanel} flex flex-col items-start gap-4 p-7`}>
          <span className={labelClass}>Escopo entregue</span>
          <p>
            Essas entregas representam tipos de projeto que ja desenvolveram
            presencia digital, organizacao operacional e experiencia de uso.
          </p>
          <a className={primaryButtonClass} href="#contato">
            Quero um projeto assim
          </a>
        </div>
      </div>
    </section>
  )
}
