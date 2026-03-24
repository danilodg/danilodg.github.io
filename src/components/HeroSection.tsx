import { technologies } from './data'
import {
  glassPanel,
  labelClass,
  primaryButtonClass,
  secondaryButtonClass,
} from './ui'

export function HeroSection() {
  return (
    <section className="grid gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]" id="inicio">
      <div className={`${glassPanel} p-6 sm:p-8 lg:p-12`}>
        <span className={labelClass}>Portfolio</span>
        <h1 className="mt-6 [font-family:Space_Grotesk,Trebuchet_MS,sans-serif] text-[clamp(2.9rem,10vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[color:var(--text-main)]">
          Danilo Gomes
        </h1>
        <p className="mt-3 text-[clamp(1.45rem,2vw,2.3rem)] text-[color:var(--text-main)]">
          Desenvolvedor Full Stack
        </p>
        <p className="mt-5 max-w-[34rem] text-base text-[color:var(--text-soft)] sm:text-[1.06rem]">
          Construo experiencias web modernas com visual marcante, codigo bem
          estruturado e solucoes pensadas para negocio.
        </p>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <a className={primaryButtonClass} href="#projetos">
            Ver projetos
          </a>
          <a className={secondaryButtonClass} href="#contato">
            Falar comigo
          </a>
        </div>

        <ul className="mt-9 flex flex-wrap gap-3" aria-label="Principais tecnologias">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-[color:var(--chip-border)] bg-[var(--chip-bg)] px-3.5 py-2.5 text-sm text-[color:var(--text-soft)]"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className={`${glassPanel} relative min-h-[460px] overflow-hidden p-4 sm:min-h-[520px] sm:p-5 lg:min-h-[560px] lg:p-7`} aria-hidden="true">
        <div className="mb-4 rounded-[22px] border border-[color:var(--card-border)] bg-[var(--card-bg)] p-4 shadow-[var(--card-shadow)] lg:absolute lg:left-3 lg:top-7 lg:mb-0 lg:w-[52%]">
          <span className={labelClass}>Analytics</span>
          <div className="mt-5 grid gap-4">
            {[0, 1, 2, 3].map((item) => (
              <span
                key={item}
                className="block h-11 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent),linear-gradient(90deg,rgba(123,137,255,0.16),rgba(60,223,255,0.52))] [clip-path:polygon(0_70%,10%_52%,22%_66%,34%_30%,48%_62%,60%_42%,74%_68%,86%_16%,100%_46%,100%_100%,0_100%)]"
              />
            ))}
          </div>
        </div>

        <div className="mb-4 rounded-[22px] border border-[color:var(--card-border)] bg-[var(--card-bg)] p-4 shadow-[var(--card-shadow)] lg:absolute lg:left-[32%] lg:top-24 lg:mb-0 lg:w-[48%]">
          <span className={labelClass}>Componentes</span>
          <div className="mt-5 grid gap-3 text-[0.88rem] text-[color:var(--text-main)] [font-family:IBM_Plex_Mono,Consolas,monospace]">
            <span>{'<div className="container">'}</span>
            <span>{'  <section className="hero">'}</span>
            <span>{'  <formData />'}</span>
            <span>{'  <ContactPanel />'}</span>
          </div>

          <div className="mt-5 grid gap-2.5">
            <span className="rounded-xl border border-[color:var(--input-border)] bg-[var(--input-bg)] px-3.5 py-2.5 text-sm text-[color:var(--text-main)]">
              Nome
            </span>
            <span className="rounded-xl border border-[color:var(--input-border)] bg-[var(--input-bg)] px-3.5 py-2.5 text-sm text-[color:var(--text-main)]">
              Email
            </span>
            <button
              className="rounded-xl bg-[linear-gradient(135deg,var(--accent-start),var(--accent-end))] px-3.5 py-2.5 text-sm text-white"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="rounded-[22px] border border-[color:var(--card-border)] bg-[var(--card-bg)] p-4 shadow-[var(--card-shadow)] lg:absolute lg:bottom-7 lg:left-7 lg:w-[40%]">
          <span className={labelClass}>Glassmorphism</span>
          <div className="mt-5 flex h-[90px] items-end gap-2.5">
            {['32%', '40%', '36%', '54%', '48%', '68%', '82%'].map((height) => (
              <span
                key={height}
                className="flex-1 rounded-t-full rounded-b-xl bg-[linear-gradient(180deg,rgba(86,233,255,0.95),rgba(93,116,255,0.28))]"
                style={{ height }}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 text-center text-4xl text-[color:var(--text-main)] drop-shadow-[0_0_22px_var(--accent-shadow)] lg:absolute lg:right-12 lg:top-[46%] lg:mt-0 lg:text-5xl">
          &lt;/&gt;
        </div>
      </div>
    </section>
  )
}
