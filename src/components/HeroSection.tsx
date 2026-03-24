import { technologies } from './data'
import {
  glassPanel,
  labelClass,
  primaryButtonClass,
  secondaryButtonClass,
} from './ui'

function WaveChartCard({ className }: { className: string }) {
  return (
    <div className={className}>
      <span className={labelClass}>Analytics</span>
      <div className="mt-5 grid gap-3.5 opacity-85">
        {[0, 1, 2].map((item) => (
          <span
            key={item}
            className="block h-10 rounded-full border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent),linear-gradient(90deg,rgba(123,137,255,0.1),rgba(60,223,255,0.24))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-10px_20px_rgba(0,0,0,0.12)] [clip-path:polygon(0_70%,10%_52%,22%_66%,34%_30%,48%_62%,60%_42%,74%_68%,86%_16%,100%_46%,100%_100%,0_100%)]"
          />
        ))}
      </div>
    </div>
  )
}

function BarChartCard({ className }: { className: string }) {
  return (
    <div className={className}>
      <span className={labelClass}>Metrics</span>
      <div className="mt-4 flex h-[78px] items-end gap-2">
        {['42%', '58%', '46%', '72%', '64%'].map((height) => (
          <span
            key={height}
            className="flex-1 rounded-t-full rounded-b-xl bg-[linear-gradient(180deg,rgba(86,233,255,0.95),rgba(93,116,255,0.28))]"
            style={{ height }}
          />
        ))}
      </div>
    </div>
  )
}

const demoCardClass =
  'rounded-[28px] border border-[color:var(--card-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.14)] backdrop-blur-[10px]'

export function HeroSection() {
  return (
    <section className="relative" id="inicio">
      <div className={`${glassPanel} relative z-10 w-full p-6 sm:p-8 lg:p-12`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.7fr)] lg:items-start">
          <div>
            <span className={labelClass}>Portfolio</span>
            <h1 className="mt-6 [font-family:Space_Grotesk,Trebuchet_MS,sans-serif] text-[clamp(2.9rem,10vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[color:var(--text-main)]">
              Danilo Gomes
            </h1>
            <p className="mt-3 text-[clamp(1.45rem,2vw,2.3rem)] text-[color:var(--text-main)]">
              Desenvolvedor Full Stack
            </p>
            <p className="mt-5 max-w-[38rem] text-base text-[color:var(--text-soft)] sm:text-[1.06rem]">
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

            <ul className="mt-10 flex max-w-[760px] flex-wrap gap-3" aria-label="Principais tecnologias">
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

          <div className="hidden lg:grid gap-5 lg:pt-2">
            <WaveChartCard className={`${demoCardClass} ml-auto w-[88%] rotate-[4deg] opacity-95`} />
            <BarChartCard className={`${demoCardClass} w-[76%] -rotate-[5deg] opacity-90`} />
          </div>
        </div>
      </div>
    </section>
  )
}
