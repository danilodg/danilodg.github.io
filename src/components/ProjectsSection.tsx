import { projects } from './data'
import { glassPanel, labelClass, sectionTitleClass } from './ui'

export function ProjectsSection() {
  return (
    <section className="mt-20 lg:mt-28" id="projetos">
      <div className="mb-7 max-w-[740px]">
        <span className={labelClass}>Projetos</span>
        <h2 className={sectionTitleClass}>
          Estruturas pensadas para apresentar trabalho e gerar confianca
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article className={`${glassPanel} p-6`} key={project.title}>
            <span className={labelClass}>{project.category}</span>
            <h3 className="mt-4 [font-family:Space_Grotesk,Trebuchet_MS,sans-serif] text-[1.4rem] font-bold text-[color:var(--text-main)]">
              {project.title}
            </h3>
            <p className="mt-3">{project.description}</p>
            <div className="mt-6 h-0.5 w-full bg-gradient-to-r from-[color:var(--accent-line)] to-transparent" />
          </article>
        ))}
      </div>
    </section>
  )
}
