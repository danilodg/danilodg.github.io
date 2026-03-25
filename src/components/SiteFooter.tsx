import { glassPanel, labelClass } from './ui'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'danilo@email.com'

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.59 2 12.25C2 16.78 4.87 20.62 8.84 21.98C9.34 22.08 9.52 21.76 9.52 21.49C9.52 21.24 9.51 20.42 9.5 19.53C6.73 20.15 6.14 18.32 6.14 18.32C5.68 17.11 5.03 16.79 5.03 16.79C4.12 16.15 5.1 16.16 5.1 16.16C6.1 16.23 6.64 17.22 6.64 17.22C7.53 18.8 8.97 18.35 9.54 18.08C9.63 17.42 9.89 16.97 10.18 16.71C7.97 16.45 5.65 15.56 5.65 11.58C5.65 10.45 6.04 9.54 6.68 8.82C6.58 8.56 6.24 7.5 6.78 6.07C6.78 6.07 7.62 5.79 9.53 7.12C10.33 6.89 11.18 6.78 12.02 6.78C12.86 6.78 13.71 6.89 14.51 7.12C16.42 5.79 17.26 6.07 17.26 6.07C17.8 7.5 17.46 8.56 17.36 8.82C18 9.54 18.39 10.45 18.39 11.58C18.39 15.57 16.06 16.45 13.85 16.7C14.22 17.02 14.55 17.66 14.55 18.64C14.55 20.05 14.54 21.19 14.54 21.49C14.54 21.76 14.72 22.09 15.23 21.98C19.19 20.61 22.06 16.78 22.06 12.25C22.06 6.59 17.58 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6C1.11 6 0 4.88 0 3.5C0 2.12 1.11 1 2.49 1C3.87 1 4.98 2.12 4.98 3.5ZM4.99 8H0V24H4.99V8ZM8 8H12.78V10.18H12.85C13.51 8.92 15.15 7.59 17.58 7.59C22.64 7.59 23.58 10.92 23.58 15.24V24H18.6V16.32C18.6 14.49 18.57 12.14 16.06 12.14C13.51 12.14 13.12 14.13 13.12 16.19V24H8V8Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M4 6H20V18H4Z" />
      <path d="M4 8L12 13L20 8" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer
      className={`${glassPanel} mt-20 grid gap-8 p-6 sm:p-7 lg:mt-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end`}
    >
      <div className="max-w-[34rem]">
        <span className={labelClass}>Contato direto</span>
        <h2 className="mt-4 [font-family:Space_Grotesk,Trebuchet_MS,sans-serif] text-[clamp(1.6rem,4vw,2.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[color:var(--text-main)]">
          Vamos conversar sobre o seu proximo projeto
        </h2>
        <p className="mt-4 text-[color:var(--text-soft)]">
          Se voce precisa de uma landing page, dashboard ou sistema web, eu posso te ajudar a transformar a ideia em uma entrega clara e bem resolvida.
        </p>
      </div>

      <div className="grid gap-4 text-sm text-[color:var(--text-soft)] lg:justify-items-end">
        <a
          className="flex items-center gap-3 rounded-2xl border border-[color:var(--chip-border)] bg-[var(--chip-bg)] px-4 py-3 text-[color:var(--text-main)] transition hover:-translate-y-0.5"
          href={`mailto:${contactEmail}`}
        >
          <MailIcon />
          <span>{contactEmail}</span>
        </a>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a
            aria-label="GitHub"
            className="flex items-center gap-3 rounded-2xl border border-[color:var(--chip-border)] bg-[var(--chip-bg)] px-4 py-3 text-[color:var(--text-main)] transition hover:-translate-y-0.5"
            href="https://github.com/"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>

          <a
            aria-label="LinkedIn"
            className="flex items-center gap-3 rounded-2xl border border-[color:var(--chip-border)] bg-[var(--chip-bg)] px-4 py-3 text-[color:var(--text-main)] transition hover:-translate-y-0.5"
            href="https://linkedin.com/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
          Disponivel para novos projetos e freelas
        </p>
      </div>
    </footer>
  )
}
