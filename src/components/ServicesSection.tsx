import { services } from './data'
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
        <span className={labelClass}>Servicos</span>
        <h2 className={sectionTitleClass}>
          O que posso construir para o seu projeto ou negocio
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className={`${glassPanel} grid gap-5 p-7`}>
          {services.map((service) => (
            <div className="flex items-start gap-3.5" key={service}>
              <span className="mt-2 h-3 w-3 rounded-full bg-[linear-gradient(135deg,var(--accent-start),var(--accent-end))] shadow-[0_0_18px_var(--accent-shadow)]" />
              <p>{service}</p>
            </div>
          ))}
        </div>

        <div className={`${glassPanel} flex flex-col items-start gap-4 p-7`}>
          <span className={labelClass}>Disponivel para novos projetos</span>
          <p>
            Posso atuar em paginas institucionais, sistemas web, APIs ou
            melhorias visuais para produtos ja existentes.
          </p>
          <a className={primaryButtonClass} href="#contato">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  )
}
