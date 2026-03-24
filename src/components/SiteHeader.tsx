import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

import { FolderKanban, House, Mail, Monitor, MoonStar, Sparkles, SunMedium } from 'lucide-react'

type Theme = 'dark' | 'light'
type ThemeMode = Theme | 'system'

type SiteHeaderProps = {
  effectiveTheme: Theme
  themeMode: ThemeMode
  onSelectTheme: (themeMode: ThemeMode) => void
}

type NavItem = {
  id: string
  href?: string
  icon: ReactNode
  label: string
  onClick?: () => void
  isActive?: boolean
}

const themeLabels: Record<ThemeMode, string> = {
  system: 'Sistema',
  light: 'Claro',
  dark: 'Escuro',
}

function ThemeIcon({ effectiveTheme, themeMode }: Pick<SiteHeaderProps, 'effectiveTheme' | 'themeMode'>) {
  if (themeMode === 'system') {
    return <Monitor className="h-5 w-5" strokeWidth={1.8} />
  }

  if (effectiveTheme === 'dark') {
    return <MoonStar className="h-5 w-5" strokeWidth={1.8} />
  }

  return <SunMedium className="h-5 w-5" strokeWidth={1.8} />
}

type DesktopRailButtonProps = NavItem & {
  expanded: boolean
  onBlur?: () => void
  onFocus?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

function DesktopRailButton({ href, icon, label, onClick, isActive = false, expanded, onBlur, onFocus, onMouseEnter, onMouseLeave }: DesktopRailButtonProps) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      {...(href ? { href } : { onClick, type: 'button' as const })}
      aria-current={isActive ? 'page' : undefined}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={[
        'group relative flex h-14 items-center overflow-hidden rounded-[20px] border border-[color:var(--nav-border)] bg-[var(--nav-bg)] text-[color:var(--text-main)] shadow-[0_14px_40px_rgba(0,0,0,0.16)] backdrop-blur-[22px] transition-[width,background-color,color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-line)]/55',
        expanded ? 'w-44' : 'w-14',
        isActive
          ? 'bg-[linear-gradient(135deg,var(--accent-start),var(--accent-mid)_55%,var(--accent-end))] text-white shadow-[0_0_28px_var(--accent-shadow)]'
          : '',
      ].join(' ')}
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        {icon}
      </span>
      <span className={[
        'min-w-max whitespace-nowrap pr-5 text-sm font-medium tracking-[0.08em] uppercase transition-opacity duration-200',
        expanded ? 'opacity-100' : 'opacity-0',
      ].join(' ')}>
        {label}
      </span>
    </Component>
  )
}

function MobileRailButton({ href, icon, label, onClick, isActive = false }: NavItem) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      {...(href ? { href } : { onClick, type: 'button' as const })}
      aria-current={isActive ? 'page' : undefined}
      className={[
        'flex min-w-[72px] flex-1 flex-col items-center justify-center gap-1 rounded-[18px] px-3 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] transition',
        isActive
          ? 'bg-[linear-gradient(135deg,var(--accent-start),var(--accent-mid)_55%,var(--accent-end))] text-white shadow-[0_0_22px_var(--accent-shadow)]'
          : 'text-[color:var(--text-soft)]',
      ].join(' ')}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Component>
  )
}

export function SiteHeader({ effectiveTheme, themeMode, onSelectTheme }: SiteHeaderProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const themeLockTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (themeLockTimeoutRef.current !== null) {
        window.clearTimeout(themeLockTimeoutRef.current)
      }
    }
  }, [])

  const links: NavItem[] = [
    { id: 'sobre', href: '#sobre', icon: <House className="h-5 w-5" strokeWidth={1.8} />, label: 'Sobre' },
    { id: 'projetos', href: '#projetos', icon: <FolderKanban className="h-5 w-5" strokeWidth={1.8} />, label: 'Projetos' },
    { id: 'servicos', href: '#servicos', icon: <Sparkles className="h-5 w-5" strokeWidth={1.8} />, label: 'Servicos' },
    { id: 'contato', href: '#contato', icon: <Mail className="h-5 w-5" strokeWidth={1.8} />, label: 'Contato' },
  ]

  const nextThemeMode: ThemeMode = themeMode === 'system' ? 'light' : themeMode === 'light' ? 'dark' : 'system'

  function keepThemeButtonExpanded() {
    setExpandedItem('theme')

    if (themeLockTimeoutRef.current !== null) {
      window.clearTimeout(themeLockTimeoutRef.current)
    }

    themeLockTimeoutRef.current = window.setTimeout(() => {
      themeLockTimeoutRef.current = null
      setExpandedItem((currentItem) => (currentItem === 'theme' ? null : currentItem))
    }, 520)
  }

  return (
    <>
      <header className="hidden lg:block">
        <div className="fixed left-6 top-6 z-30 flex h-[calc(100vh-3rem)] flex-col justify-between py-2 [view-transition-name:none]">
          <a
            className="flex h-16 w-72 items-center overflow-hidden rounded-[24px] border border-[color:var(--nav-border)] bg-[var(--nav-bg)] text-[color:var(--text-main)] shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-[22px]"
            href="#inicio"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center">
              <span className="h-11 w-11 rounded-[14px] bg-[linear-gradient(145deg,var(--accent-start),color-mix(in_srgb,var(--accent-mid)_55%,transparent))] shadow-[0_0_22px_var(--accent-shadow)]" />
            </span>
            <span className="min-w-max whitespace-nowrap pr-6 opacity-100">
              <strong className="block whitespace-nowrap text-[0.95rem] font-semibold">Danilo Gomes</strong>
              <span className="block text-[0.72rem] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                Desenvolvedor Full Stack
              </span>
            </span>
          </a>

          <nav aria-label="Navegacao principal" className="flex flex-col gap-3">
            {links.map((item) => (
              <DesktopRailButton
                {...item}
                expanded={expandedItem === item.id}
                key={item.label}
                onBlur={() => setExpandedItem((currentItem) => (currentItem === item.id ? null : currentItem))}
                onFocus={() => setExpandedItem(item.id)}
                onMouseEnter={() => setExpandedItem(item.id)}
                onMouseLeave={() => setExpandedItem((currentItem) => (currentItem === item.id ? null : currentItem))}
              />
            ))}
          </nav>

          <DesktopRailButton
            icon={<ThemeIcon effectiveTheme={effectiveTheme} themeMode={themeMode} />}
            id="theme"
            expanded={expandedItem === 'theme'}
            isActive
            label={themeLabels[themeMode]}
            onBlur={() => setExpandedItem((currentItem) => (currentItem === 'theme' ? null : currentItem))}
            onClick={() => {
              keepThemeButtonExpanded()
              onSelectTheme(nextThemeMode)
            }}
            onFocus={() => setExpandedItem('theme')}
            onMouseEnter={() => setExpandedItem('theme')}
            onMouseLeave={() => {
              if (themeLockTimeoutRef.current === null) {
                setExpandedItem((currentItem) => (currentItem === 'theme' ? null : currentItem))
              }
            }}
          />
        </div>
      </header>

      <header className="lg:hidden">
        <div className="mb-8 flex items-center justify-between gap-4 rounded-[26px] border border-[color:var(--nav-border)] bg-[var(--nav-bg)] px-4 py-3 shadow-[0_18px_46px_rgba(0,0,0,0.16)] backdrop-blur-[22px] [view-transition-name:none]">
          <a className="inline-flex items-center gap-3 text-[color:var(--text-main)] no-underline" href="#inicio">
            <span className="h-10 w-10 rounded-[14px] bg-[linear-gradient(145deg,var(--accent-start),color-mix(in_srgb,var(--accent-mid)_55%,transparent))] shadow-[0_0_22px_var(--accent-shadow)]" />
            <span>
              <strong className="block text-sm font-semibold">Danilo Gomes</strong>
              <span className="block text-[0.68rem] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                Full Stack
              </span>
            </span>
          </a>

          <button
            className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--nav-border)] bg-[linear-gradient(135deg,var(--accent-start),var(--accent-mid)_55%,var(--accent-end))] px-4 text-white shadow-[0_0_22px_var(--accent-shadow)]"
            onClick={() => onSelectTheme(nextThemeMode)}
            type="button"
          >
            <span className="mr-2"><ThemeIcon effectiveTheme={effectiveTheme} themeMode={themeMode} /></span>
            <span className="text-xs font-medium uppercase tracking-[0.14em]">{themeLabels[themeMode]}</span>
          </button>
        </div>

        <nav className="fixed inset-x-3 bottom-3 z-30 flex gap-2 rounded-[26px] border border-[color:var(--nav-border)] bg-[var(--nav-bg)] p-2 shadow-[0_18px_46px_rgba(0,0,0,0.18)] backdrop-blur-[22px] [view-transition-name:none]" aria-label="Navegacao principal mobile">
          {links.map((item) => (
            <MobileRailButton {...item} key={item.label} />
          ))}
        </nav>
      </header>
    </>
  )
}
