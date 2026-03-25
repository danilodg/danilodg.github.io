import { technologies } from './data'
import {
  glassPanel,
  labelClass,
  primaryButtonClass,
  secondaryButtonClass,
} from './ui'

const previewPanelClass =
  'relative overflow-hidden rounded-[30px] border border-[color:var(--card-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_28px_70px_rgba(0,0,0,0.2)] backdrop-blur-[18px] transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_34px_90px_rgba(0,0,0,0.24)]'

function AnalyticsPreview() {
  return (
    <div
      className={`${previewPanelClass} bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] p-5 backdrop-blur-[24px]`}
    >
      <div className="flex items-center justify-between">
        <span className={labelClass}>Analytics</span>
        <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--text-muted)]">Live data</span>
      </div>

      <div className="mt-5 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,27,72,0.76),rgba(8,14,35,0.58))] p-4">
        <div className="relative h-40 overflow-hidden rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] backdrop-blur-[18px]">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100%_25%,14.28%_100%] opacity-35" />

          <svg
            aria-hidden="true"
            className="absolute inset-x-3 bottom-8 h-[108px] w-[calc(100%-1.5rem)]"
            fill="none"
            viewBox="0 0 320 120"
          >
            <path
              d="M0 88C20 70 38 66 54 76C70 86 86 102 106 96C128 88 136 46 158 42C181 38 189 82 212 82C237 82 247 28 270 26C290 24 303 42 320 44"
              stroke="rgba(91,240,255,0.95)"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <path
              d="M0 96C22 96 35 54 55 54C77 54 85 84 105 84C127 84 136 58 160 58C182 58 193 94 212 94C236 94 246 70 268 70C290 70 300 84 320 84"
              stroke="rgba(148,136,255,0.82)"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <path
              d="M0 104C24 104 34 88 52 88C77 88 82 100 108 100C129 100 142 74 160 74C185 74 191 106 212 106C236 106 244 90 266 90C289 90 299 96 320 96"
              stroke="rgba(255,255,255,0.42)"
              strokeLinecap="round"
              strokeWidth="2.5"
            />
          </svg>

          <div className="absolute inset-x-3 bottom-3 flex justify-between text-[10px] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
            {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CodePreview() {
  const lines = [
    '<section className="hero">',
    '  <div className="content">',
    '  <Card title="Projeto" />',
    '  <Button>Enviar</Button>',
  ]

  return (
    <div className={`${previewPanelClass} p-5`}>
      <div className="flex items-center justify-between">
        <span className={labelClass}>Build interface</span>
        <span className="text-[color:var(--text-muted)]">&lt;/&gt;</span>
      </div>

      <div className="mt-4 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,27,72,0.78),rgba(8,14,35,0.6))] p-4">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--text-muted)]">Component</span>
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent-line)] shadow-[0_0_16px_var(--accent-shadow)]" />
        </div>

        <div className="space-y-3 font-[IBM_Plex_Mono,monospace] text-[0.74rem] text-[color:var(--text-soft)]">
          {lines.map((line) => (
            <div className="overflow-hidden rounded-xl border border-white/6 bg-white/4 px-3 py-2" key={line}>
              {line}
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3">
          <div className="rounded-xl border border-white/8 bg-white/4 px-3 py-2.5 text-sm text-[color:var(--text-main)]">
            Nome do projeto
          </div>
          <div className="rounded-xl border border-white/8 bg-white/4 px-3 py-2.5 text-sm text-[color:var(--text-muted)]">
            contato@email.com
          </div>
          <div className="rounded-xl bg-[linear-gradient(135deg,var(--accent-start),var(--accent-mid)_55%,var(--accent-end))] px-3 py-2.5 text-center text-sm font-medium text-white shadow-[0_14px_30px_var(--accent-shadow)]">
            Submit
          </div>
        </div>
      </div>
    </div>
  )
}

function RevenuePreview() {
  return (
    <div
      className={`${previewPanelClass} bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] p-5 backdrop-blur-[24px]`}
    >
      <div className="flex items-center justify-between">
        <span className={labelClass}>Revenue</span>
        <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--text-muted)]">Monthly</span>
      </div>

      <div className="mt-4 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,27,72,0.76),rgba(8,14,35,0.58))] p-4">
        <div className="flex items-end gap-2">
          {[38, 52, 47, 66, 59, 74, 82].map((height) => (
            <span
              key={height}
              className="flex-1 rounded-t-[16px] rounded-b-[8px] bg-[linear-gradient(180deg,rgba(117,240,255,0.95),rgba(108,102,255,0.28))] shadow-[0_0_18px_rgba(96,164,255,0.16)]"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-3 py-2.5">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
              Growth
            </span>
            <strong className="mt-1 block text-lg text-[color:var(--text-main)]">+24.8%</strong>
          </div>
          <span className="rounded-full bg-[linear-gradient(135deg,var(--accent-start),var(--accent-end))] px-3 py-1 text-xs font-medium text-white">
            Strong
          </span>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative" id="inicio">
      <div className={`${glassPanel} relative z-10 overflow-hidden p-6 sm:p-8 lg:p-12`}>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] bg-[radial-gradient(circle_at_30%_45%,rgba(92,140,255,0.28),transparent_40%),radial-gradient(circle_at_70%_72%,rgba(216,100,255,0.2),transparent_34%)] lg:block" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-center">
          <div className="relative z-10">
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

          <div className="relative hidden min-h-[540px] lg:block">
            <div className="absolute left-0 top-4 z-10 w-[64%] opacity-95 hover:z-50">
              <AnalyticsPreview />
            </div>
            <div className="absolute right-0 top-[4.25rem] z-20 w-[72%] hover:z-50">
              <CodePreview />
            </div>
            <div className="absolute bottom-2 left-[12%] z-30 w-[58%] hover:z-50">
              <RevenuePreview />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(120,150,255,0.2),transparent_24%),radial-gradient(circle_at_72%_70%,rgba(212,102,255,0.16),transparent_24%)] blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
