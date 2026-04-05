import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'

import { FolderKanban, House, Mail, MessageSquareQuote, Monitor, MoonStar, Sparkles, SunMedium } from 'lucide-react'
import type { Language, SiteContent } from '../content'

type Theme = 'dark' | 'light'
type ThemeMode = Theme | 'system'

type SiteHeaderProps = {
  content: SiteContent
  effectiveTheme: Theme
  language: Language
  themeMode: ThemeMode
  onSelectLanguage: (language: Language) => void
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

function ThemeIcon({ effectiveTheme, themeMode }: Pick<SiteHeaderProps, 'effectiveTheme' | 'themeMode'>) {
  if (themeMode === 'system') {
    return <Monitor className="h-5 w-5" strokeWidth={1.8} />
  }

  if (effectiveTheme === 'dark') {
    return <MoonStar className="h-5 w-5" strokeWidth={1.8} />
  }

  return <SunMedium className="h-5 w-5" strokeWidth={1.8} />
}

function LanguageSelect({ content, language, onSelectLanguage, compact = false }: Pick<SiteHeaderProps, 'content' | 'language' | 'onSelectLanguage'> & { compact?: boolean }) {
  return (
      <div
        className={[
          'inline-flex items-center gap-2 rounded-[20px] border border-[color:var(--nav-border)] bg-[var(--nav-bg)] text-[color:var(--text-main)] shadow-[0_18px_46px_rgba(0,0,0,0.16)]',
        compact ? 'h-11 px-1.5' : 'h-14 px-3',
      ].join(' ')}
    >
      {compact ? null : (
        <span className="pl-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
          {content.languageLabel}
        </span>
      )}

      <div className="relative grid grid-cols-2 items-center rounded-[16px] border border-[color:var(--chip-border)] bg-[var(--chip-bg)] p-1">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1 top-1 w-[calc(50%-0.125rem)] rounded-[12px] bg-[linear-gradient(135deg,var(--accent-start),var(--accent-mid)_55%,var(--accent-end))] shadow-[0_0_18px_var(--accent-shadow)] transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${language === 'pt' ? '0%' : '100%'})` }}
        />
        {(['pt', 'en'] as const).map((option) => {
          const active = language === option

          return (
            <button
              aria-pressed={active}
              className={[
                'relative z-10 inline-flex h-8 min-w-11 items-center justify-center rounded-[12px] px-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition',
                active
                  ? 'text-white'
                  : 'text-[color:var(--text-soft)] hover:text-[color:var(--text-main)]',
              ].join(' ')}
              key={option}
              onClick={() => onSelectLanguage(option)}
              type="button"
            >
              {compact ? option.toUpperCase() : content.languageOptions[option]}
            </button>
          )
        })}
      </div>
    </div>
  )
}

type DesktopRailButtonProps = NavItem & {
  expanded: boolean
  onBlur?: () => void
  onFocus?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

type MobileRailButtonProps = NavItem & {
  buttonRef?: (node: HTMLElement | null) => void
}

function DesktopRailButton({ href, icon, label, onClick, isActive = false, expanded, onBlur, onFocus, onMouseEnter, onMouseLeave }: DesktopRailButtonProps) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      {...(href ? { href, onClick } : { onClick, type: 'button' as const })}
      aria-current={isActive ? 'page' : undefined}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={[
        'group relative flex h-14 items-center overflow-hidden rounded-[20px] border border-[color:var(--nav-border)] bg-[var(--nav-bg)] text-[color:var(--text-main)] shadow-[0_14px_40px_rgba(0,0,0,0.16)] transition-[width,background-color,color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-line)]/55',
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

function MobileRailButton({ href, icon, label, onClick, isActive = false, buttonRef }: MobileRailButtonProps) {
  const className = [
    'relative z-10 flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-[18px] px-2 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] transition-[flex-grow,color,transform] duration-300 ease-out max-[420px]:px-1.5 max-[420px]:py-2 max-[420px]:text-[0.62rem] max-[420px]:tracking-[0.1em] max-[360px]:gap-0.5 max-[360px]:px-1 max-[360px]:text-[0.58rem] max-[360px]:tracking-[0.08em]',
    isActive ? 'max-[420px]:flex-[1.2] max-[360px]:flex-[1.35] text-white' : 'max-[420px]:flex-[0.9] max-[360px]:flex-[0.8] text-[color:var(--text-soft)]',
  ].join(' ')

  const labelClassName = [
    'max-w-full truncate transition-all duration-300 ease-out',
    isActive
      ? 'max-[420px]:max-w-full max-[420px]:opacity-100'
      : 'max-[420px]:max-h-0 max-[420px]:max-w-0 max-[420px]:opacity-0',
  ].join(' ')

  if (href) {
    return (
      <a ref={buttonRef} aria-current={isActive ? 'page' : undefined} className={className} href={href} onClick={onClick}>
        <span>{icon}</span>
        <span className={labelClassName}>{label}</span>
      </a>
    )
  }

  return (
    <button ref={buttonRef} aria-current={isActive ? 'page' : undefined} className={className} onClick={onClick} type="button">
      <span>{icon}</span>
      <span className={labelClassName}>{label}</span>
    </button>
  )
}

export function SiteHeader({ content, effectiveTheme, language, themeMode, onSelectLanguage, onSelectTheme }: SiteHeaderProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [pendingSection, setPendingSection] = useState<string | null>(null)
  const [mobileIndicatorStyle, setMobileIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({ left: 0, width: 0, opacity: 0 })
  const mobileNavRef = useRef<HTMLElement | null>(null)
  const mobileItemRefs = useRef<Record<string, HTMLElement | null>>({})
  const themeLockTimeoutRef = useRef<number | null>(null)
  const pendingSectionTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (themeLockTimeoutRef.current !== null) {
        window.clearTimeout(themeLockTimeoutRef.current)
      }

      if (pendingSectionTimeoutRef.current !== null) {
        window.clearTimeout(pendingSectionTimeoutRef.current)
      }
    }
  }, [])

  const links: NavItem[] = useMemo(() => [
    { id: 'inicio', href: '#inicio', icon: <House className="h-5 w-5" strokeWidth={1.8} />, label: content.nav.about },
    { id: 'projetos', href: '#projetos', icon: <FolderKanban className="h-5 w-5" strokeWidth={1.8} />, label: content.nav.services },
    { id: 'recomendacoes', href: '#recomendacoes', icon: <MessageSquareQuote className="h-5 w-5" strokeWidth={1.8} />, label: content.nav.recommendations },
    { id: 'servicos', href: '#servicos', icon: <Sparkles className="h-5 w-5" strokeWidth={1.8} />, label: content.nav.projects },
    { id: 'contato', href: '#contato', icon: <Mail className="h-5 w-5" strokeWidth={1.8} />, label: content.nav.contact },
  ], [content.nav])

  const nextThemeMode: ThemeMode = themeMode === 'system' ? 'light' : themeMode === 'light' ? 'dark' : 'system'
  const visibleSection = pendingSection ?? activeSection

  function primeSectionNavigation(sectionId: string) {
    setPendingSection(sectionId)

    if (pendingSectionTimeoutRef.current !== null) {
      window.clearTimeout(pendingSectionTimeoutRef.current)
    }

    pendingSectionTimeoutRef.current = window.setTimeout(() => {
      pendingSectionTimeoutRef.current = null
      setPendingSection(null)
    }, 700)
  }

  useEffect(() => {
    const sectionIds = links.map((item) => item.id)

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section))

    if (sections.length === 0) {
      return
    }

    const visibility = new Map<string, number>()

    const syncActiveSection = () => {
      const scrollY = window.scrollY

      if (scrollY < 120) {
        setActiveSection('inicio')
        return
      }

      let nextSection: string | null = null
      let nextRatio = 0

      for (const sectionId of sectionIds) {
        const ratio = visibility.get(sectionId) ?? 0
        if (ratio > nextRatio) {
          nextRatio = ratio
          nextSection = sectionId
        }
      }

      if (!nextSection) {
        const viewportLine = window.innerHeight * 0.45
        for (const section of sections) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= viewportLine && rect.bottom >= viewportLine) {
            nextSection = section.id
            break
          }
        }
      }

      setActiveSection(nextSection)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)

          if (pendingSection === entry.target.id && entry.isIntersecting && entry.intersectionRatio > 0.35) {
            if (pendingSectionTimeoutRef.current !== null) {
              window.clearTimeout(pendingSectionTimeoutRef.current)
              pendingSectionTimeoutRef.current = null
            }

            setPendingSection(null)
          }
        })

        syncActiveSection()
      },
      {
        rootMargin: '-18% 0px -42% 0px',
        threshold: [0, 0.2, 0.35, 0.5, 0.7, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('resize', syncActiveSection)
    window.addEventListener('scroll', syncActiveSection, { passive: true })
    syncActiveSection()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncActiveSection)
      window.removeEventListener('scroll', syncActiveSection)
    }
  }, [links, pendingSection])

  useLayoutEffect(() => {
    let frameId: number | null = null
    let timeoutId: number | null = null

    const updateMobileIndicator = () => {
      const activeId = visibleSection
      const nav = mobileNavRef.current
      const activeItem = activeId ? mobileItemRefs.current[activeId] : null

      if (!nav || !activeItem) {
        setMobileIndicatorStyle((current) => (current.opacity === 0 ? current : { ...current, opacity: 0 }))
        return
      }

      setMobileIndicatorStyle({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
        opacity: 1,
      })
    }

    const requestIndicatorUpdate = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null
        updateMobileIndicator()
      })
    }

    requestIndicatorUpdate()
    timeoutId = window.setTimeout(requestIndicatorUpdate, 180)
    window.addEventListener('resize', requestIndicatorUpdate)

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => {
          requestIndicatorUpdate()
        })
      : null

    if (resizeObserver) {
      if (mobileNavRef.current) {
        resizeObserver.observe(mobileNavRef.current)
      }

      Object.values(mobileItemRefs.current).forEach((item) => {
        if (item) {
          resizeObserver.observe(item)
        }
      })
    }

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId)
      }

      window.removeEventListener('resize', requestIndicatorUpdate)
      resizeObserver?.disconnect()
    }
  }, [links, visibleSection])

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
            className="flex h-16 w-72 items-center overflow-hidden rounded-[24px] border border-[color:var(--nav-border)] bg-[var(--nav-bg)] text-[color:var(--text-main)] shadow-[0_20px_48px_rgba(0,0,0,0.18)]"
            href="#inicio"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center">
              <span className="h-11 w-11 rounded-[14px] bg-[linear-gradient(145deg,var(--accent-start),color-mix(in_srgb,var(--accent-mid)_55%,transparent))] shadow-[0_0_22px_var(--accent-shadow)]" />
            </span>
            <span className="min-w-max whitespace-nowrap pr-6 opacity-100">
              <strong className="block whitespace-nowrap text-[0.95rem] font-semibold">Danilo Gomes</strong>
              <span className="block text-[0.72rem] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                {content.hero.role}
              </span>
            </span>
          </a>

          <nav aria-label="Navegacao principal" className="flex flex-col gap-3">
            {links.map((item) => (
              <DesktopRailButton
                {...item}
                expanded={expandedItem === item.id || visibleSection === item.id}
                isActive={visibleSection === item.id}
                key={item.label}
                onClick={() => primeSectionNavigation(item.id)}
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
            label={content.themeLabels[themeMode]}
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

        <div className="fixed bottom-8 right-6 z-30 [view-transition-name:none]">
          <LanguageSelect content={content} language={language} onSelectLanguage={onSelectLanguage} />
        </div>
      </header>

      <header className="lg:hidden">
        <div className="mb-8 flex items-center justify-between gap-3 rounded-[26px] border border-[color:var(--nav-border)] bg-[var(--nav-bg)] px-4 py-3 shadow-[0_18px_46px_rgba(0,0,0,0.16)] [view-transition-name:none]">
          <a className="inline-flex min-w-0 flex-1 items-center gap-3 text-[color:var(--text-main)] no-underline" href="#inicio">
            <span className="h-10 w-10 shrink-0 rounded-[14px] bg-[linear-gradient(145deg,var(--accent-start),color-mix(in_srgb,var(--accent-mid)_55%,transparent))] shadow-[0_0_22px_var(--accent-shadow)]" />
            <span className="min-w-0 pr-1">
              <strong className="block text-sm font-semibold">Danilo Gomes</strong>
              <span className="block truncate text-[0.68rem] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                {content.hero.role}
              </span>
            </span>
          </a>

          <div className="flex shrink-0 items-center gap-2">
            <LanguageSelect compact content={content} language={language} onSelectLanguage={onSelectLanguage} />

            <button
              aria-label={content.themeLabels[themeMode]}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--nav-border)] bg-[linear-gradient(135deg,var(--accent-start),var(--accent-mid)_55%,var(--accent-end))] text-white shadow-[0_0_22px_var(--accent-shadow)]"
              onClick={() => onSelectTheme(nextThemeMode)}
              type="button"
            >
              <ThemeIcon effectiveTheme={effectiveTheme} themeMode={themeMode} />
            </button>
          </div>
        </div>

        <nav ref={mobileNavRef} className="fixed inset-x-3 bottom-3 z-30 flex gap-2 overflow-hidden rounded-[26px] border border-[color:var(--nav-border)] bg-[var(--nav-bg)] p-2 shadow-[0_18px_46px_rgba(0,0,0,0.18)] max-[420px]:gap-1.5 max-[420px]:p-1.5 max-[360px]:gap-1 [view-transition-name:none]" aria-label="Navegacao principal mobile">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 bottom-2 top-2 rounded-[18px] bg-[linear-gradient(135deg,var(--accent-start),var(--accent-mid)_55%,var(--accent-end))] shadow-[0_0_22px_var(--accent-shadow)] transition-[transform,width,opacity] duration-300 ease-out max-[420px]:bottom-1.5 max-[420px]:top-1.5"
            style={{
              opacity: mobileIndicatorStyle.opacity,
              width: `${mobileIndicatorStyle.width}px`,
              transform: `translateX(${mobileIndicatorStyle.left}px)`,
            }}
          />
          {links.map((item) => (
            <MobileRailButton
              {...item}
              buttonRef={(node) => {
                mobileItemRefs.current[item.id] = node
              }}
              isActive={visibleSection === item.id}
              key={item.label}
              onClick={() => primeSectionNavigation(item.id)}
            />
          ))}
        </nav>
      </header>
    </>
  )
}
