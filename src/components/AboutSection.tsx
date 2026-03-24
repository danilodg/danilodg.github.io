import { glassPanel, labelClass, sectionTitleClass } from './ui'

export function AboutSection() {
  return (
    <section className="mt-20 lg:mt-28" id="sobre">
      <div className="mb-7 max-w-[740px]">
        <span className={labelClass}>Sobre mim</span>
        <h2 className={sectionTitleClass}>
          Desenvolvimento sob medida com foco em clareza e resultado
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className={`${glassPanel} grid gap-4 p-7`}>
          <p>
            Sou Danilo, desenvolvedor full stack com foco em criar produtos
            digitais que unem interface forte, organizacao tecnica e boa
            experiencia de uso.
          </p>
          <p>
            Meu objetivo e transformar ideias em sistemas bem resolvidos, com
            front-end moderno, back-end confiavel e estrutura pronta para
            evoluir.
          </p>
        </article>

        <aside className={`${glassPanel} grid gap-5 p-7`}>
          <div>
            <strong className="mb-1.5 block text-[color:var(--text-main)]">Front-end</strong>
            <span className="text-[color:var(--text-soft)]">
              React, TypeScript, interfaces responsivas
            </span>
          </div>
          <div>
            <strong className="mb-1.5 block text-[color:var(--text-main)]">Back-end</strong>
            <span className="text-[color:var(--text-soft)]">
              Node.js, APIs, integracoes e regras de negocio
            </span>
          </div>
          <div>
            <strong className="mb-1.5 block text-[color:var(--text-main)]">Entrega</strong>
            <span className="text-[color:var(--text-soft)]">
              Codigo limpo, manutencao simples e visual premium
            </span>
          </div>
        </aside>
      </div>
    </section>
  )
}
