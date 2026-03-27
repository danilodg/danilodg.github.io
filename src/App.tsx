import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'

import { siteContent, type Language } from './content'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { RecommendationsSection } from './components/RecommendationsSection'
import { ServicesSection } from './components/ServicesSection'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'

type Theme = 'dark' | 'light'
type ThemeMode = Theme | 'system'

type DocumentWithTransition = Document & {
  startViewTransition?: (callback: () => void) => void
}

const themeStorageKey = 'theme-mode'

function getLanguageFromUrl(url: URL): Language | null {
  const queryLanguage = url.searchParams.get('lang')
  if (queryLanguage === 'pt' || queryLanguage === 'en') {
    return queryLanguage
  }

  const pathLanguage = url.pathname.split('/').filter(Boolean)[0]
  if (pathLanguage === 'pt' || pathLanguage === 'en') {
    return pathLanguage
  }

  return null
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'pt'
  }

  const languageFromUrl = getLanguageFromUrl(new URL(window.location.href))
  if (languageFromUrl) {
    return languageFromUrl
  }

  return window.navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

function buildLanguageUrl(language: Language) {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', language)
  return `${url.pathname}${url.search}${url.hash}`
}

const themes: Record<Theme, CSSProperties> = {
  dark: {
    '--page-bg': '#050916',
    '--page-radial': 'rgba(37,60,148,0.45)',
    '--page-gradient': 'linear-gradient(180deg,#040716 0%,#071028 45%,#060917 100%)',
    '--grid-color': 'rgba(112,151,255,0.07)',
    '--glow-left': 'rgba(72,205,255,0.42)',
    '--glow-right': 'rgba(138,92,255,0.34)',
    '--text-main': '#f8fbff',
    '--text-soft': '#c5d0ef',
    '--text-muted': '#94a3c7',
    '--panel-border': 'rgba(255,255,255,0.1)',
    '--panel-bg': 'linear-gradient(180deg,rgba(18,29,76,0.76),rgba(8,14,37,0.62))',
    '--panel-shadow': 'inset 0 1px 0 rgba(255,255,255,0.08),0 28px 80px rgba(2,6,20,0.45),0 0 0 1px rgba(59,87,180,0.12)',
    '--card-border': 'rgba(127,160,255,0.24)',
    '--card-bg': 'linear-gradient(180deg,rgba(49,77,176,0.28),rgba(15,25,68,0.2))',
    '--card-shadow': 'inset 0 1px 0 rgba(255,255,255,0.12),0 0 24px rgba(88,150,255,0.18),0 18px 60px rgba(7,12,32,0.38)',
    '--chip-border': 'rgba(122,151,255,0.16)',
    '--chip-bg': 'rgba(13,22,58,0.58)',
    '--nav-border': 'rgba(255,255,255,0.1)',
    '--nav-bg': 'rgba(9,16,46,0.42)',
    '--input-border': 'rgba(255,255,255,0.1)',
    '--input-bg': 'rgba(9,16,43,0.52)',
    '--button-secondary-border': 'rgba(126,162,255,0.22)',
    '--button-secondary-bg': 'rgba(8,17,43,0.45)',
    '--button-secondary-text': '#eef4ff',
    '--accent-soft': '#9be8ff',
    '--accent-line': '#7ee7ff',
    '--accent-start': '#6fe0ff',
    '--accent-mid': '#687eff',
    '--accent-end': '#8b66ff',
    '--accent-shadow': 'rgba(72,133,255,0.35)',
    '--preview-panel-border': 'rgba(160,220,255,0.18)',
    '--preview-panel-bg': 'linear-gradient(180deg,rgba(10,18,42,0.76),rgba(7,13,30,0.7))',
    '--preview-panel-hover-border': 'rgba(160,220,255,0.26)',
    '--preview-panel-shadow': '0 28px 70px rgba(0,0,0,0.3)',
    '--preview-panel-hover-shadow': '0 34px 90px rgba(0,0,0,0.36)',
    '--preview-ambient': 'transparent',
    '--preview-inner-border': 'rgba(190,230,255,0.1)',
    '--preview-inner-bg': '#0d1630',
    '--preview-item-border': 'rgba(190,230,255,0.1)',
    '--preview-item-bg': '#0e1834',
    '--preview-divider': 'rgba(255,255,255,0.1)',
    '--preview-chart-grid': 'rgba(255,255,255,0.08)',
    '--preview-chart-grid-strong': 'rgba(255,255,255,0.06)',
    '--preview-chart-line': 'rgba(111,224,255,0.96)',
    '--preview-chart-fill-start': 'rgba(111,224,255,0.34)',
    '--preview-chart-fill-end': 'rgba(111,224,255,0)',
  } as CSSProperties,
  light: {
    '--page-bg': '#edf4ff',
    '--page-radial': 'rgba(87,151,255,0.22)',
    '--page-gradient': 'linear-gradient(180deg,#f9fbff 0%,#edf4ff 42%,#e4eeff 100%)',
    '--grid-color': 'rgba(74,113,205,0.08)',
    '--glow-left': 'rgba(98,201,255,0.24)',
    '--glow-right': 'rgba(131,118,255,0.18)',
    '--text-main': '#13203f',
    '--text-soft': '#42557d',
    '--text-muted': '#607297',
    '--panel-border': 'rgba(130,155,222,0.22)',
    '--panel-bg': 'linear-gradient(180deg,rgba(255,255,255,0.82),rgba(232,240,255,0.74))',
    '--panel-shadow': 'inset 0 1px 0 rgba(255,255,255,0.8),0 24px 70px rgba(84,113,173,0.14),0 0 0 1px rgba(132,161,226,0.1)',
    '--card-border': 'rgba(126,156,226,0.26)',
    '--card-bg': 'linear-gradient(180deg,rgba(244,248,255,0.9),rgba(224,234,255,0.72))',
    '--card-shadow': 'inset 0 1px 0 rgba(255,255,255,0.95),0 16px 40px rgba(90,118,170,0.14),0 0 24px rgba(133,188,255,0.14)',
    '--chip-border': 'rgba(122,151,255,0.18)',
    '--chip-bg': 'rgba(255,255,255,0.68)',
    '--nav-border': 'rgba(141,166,232,0.22)',
    '--nav-bg': 'rgba(255,255,255,0.9)',
    '--input-border': 'rgba(126,156,226,0.2)',
    '--input-bg': 'rgba(255,255,255,0.84)',
    '--button-secondary-border': 'rgba(121,148,222,0.25)',
    '--button-secondary-bg': 'rgba(255,255,255,0.72)',
    '--button-secondary-text': '#17305f',
    '--accent-soft': '#1b78d4',
    '--accent-line': '#49a6ff',
    '--accent-start': '#38bdf8',
    '--accent-mid': '#4f7cff',
    '--accent-end': '#7c69ff',
    '--accent-shadow': 'rgba(88,137,255,0.24)',
    '--preview-panel-border': 'rgba(156,184,230,0.3)',
    '--preview-panel-bg': 'linear-gradient(180deg,rgba(255,255,255,0.76),rgba(247,250,255,0.72))',
    '--preview-panel-hover-border': 'rgba(128,165,228,0.38)',
    '--preview-panel-shadow': '0 24px 52px rgba(90,118,170,0.18)',
    '--preview-panel-hover-shadow': '0 30px 68px rgba(90,118,170,0.22)',
    '--preview-ambient': 'transparent',
    '--preview-inner-border': 'rgba(156,184,230,0.24)',
    '--preview-inner-bg': '#f5f8ff',
    '--preview-item-border': 'rgba(156,184,230,0.2)',
    '--preview-item-bg': '#ffffff',
    '--preview-divider': 'rgba(156,184,230,0.28)',
    '--preview-chart-grid': 'rgba(255,255,255,0.95)',
    '--preview-chart-grid-strong': 'rgba(156,184,230,0.32)',
    '--preview-chart-line': 'rgba(56,189,248,0.92)',
    '--preview-chart-fill-start': 'rgba(255,255,255,0.92)',
    '--preview-chart-fill-end': 'rgba(56,189,248,0.06)',
  } as CSSProperties,
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialThemeMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'system'
  }

  const storedThemeMode = window.localStorage.getItem(themeStorageKey)
  if (storedThemeMode === 'dark' || storedThemeMode === 'light' || storedThemeMode === 'system') {
    return storedThemeMode
  }

  return 'system'
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialThemeMode)
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme)

  const theme = themeMode === 'system' ? systemTheme : themeMode
  const content = useMemo(() => siteContent[language], [language])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (themeMode === 'system') {
      window.localStorage.removeItem(themeStorageKey)
      return
    }

    window.localStorage.setItem(themeStorageKey, themeMode)
  }, [themeMode])

  useEffect(() => {
    document.documentElement.style.colorScheme = theme
  }, [theme])

  useEffect(() => {
    const syncLanguageFromUrl = () => {
      const nextLanguage = getLanguageFromUrl(new URL(window.location.href))
      if (nextLanguage) {
        setLanguage(nextLanguage)
      }
    }

    window.addEventListener('popstate', syncLanguageFromUrl)

    return () => window.removeEventListener('popstate', syncLanguageFromUrl)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    document.title = content.meta.title

    const nextUrl = buildLanguageUrl(language)
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`

    if (currentUrl !== nextUrl) {
      window.history.replaceState({}, '', nextUrl)
    }
  }, [content.meta.title, language])

  const themeStyle = useMemo(() => themes[theme], [theme])

  function handleThemeChange(nextThemeMode: ThemeMode) {
    if (nextThemeMode === themeMode) {
      return
    }

    const canAnimate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const documentWithTransition = document as DocumentWithTransition

    if (canAnimate && documentWithTransition.startViewTransition) {
      documentWithTransition.startViewTransition(() => {
        setThemeMode(nextThemeMode)
      })
      return
    }

    setThemeMode(nextThemeMode)
  }

  function handleLanguageChange(nextLanguage: Language) {
    if (nextLanguage === language) {
      return
    }

    setLanguage(nextLanguage)
    window.history.pushState({}, '', buildLanguageUrl(nextLanguage))
  }

  return (
    <div
      className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[color:var(--text-soft)] [font-family:Outfit,Segoe_UI,sans-serif] transition-colors duration-300"
      data-theme={theme}
      data-theme-mode={themeMode}
      style={themeStyle}
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,var(--page-radial),transparent_34%),var(--page-gradient)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent_85%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_50%,var(--glow-left),transparent_28%)] blur-3xl" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_60%,var(--glow-right),transparent_26%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-6 pb-28 sm:px-5 lg:px-8 lg:py-8 lg:pl-28 lg:pb-8">
        <SiteHeader
          content={content}
          effectiveTheme={theme}
          language={language}
          onSelectLanguage={handleLanguageChange}
          themeMode={themeMode}
          onSelectTheme={handleThemeChange}
        />

        <main>
          <HeroSection content={content} language={language} />
          <AboutSection content={content.about} />
          <ProjectsSection content={content.servicesSection} />
          <RecommendationsSection content={content.recommendationsSection} />
          <ServicesSection content={content.projectsSection} />
          <ContactSection content={content.contact} />
        </main>

        <SiteFooter content={content.footer} />
      </div>
    </div>
  )
}

export default App
