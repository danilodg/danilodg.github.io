import { useEffect, useState } from 'react'
import { Button, GlassPanel, SectionLabel } from 'auralith-ui'
import { useNavigate } from 'react-router-dom'

import type { Language, SiteContent } from '../content'
import { technologies } from '../content'
import { AnalyticsPreview } from './hero/AnalyticsPreview'
import { CodePreview } from './hero/CodePreview'
import { RevenuePreview } from './hero/RevenuePreview'
import {
  formatShortDate,
  getFallbackGitHub,
  getFallbackWeather,
  githubUsername,
  type GitHubData,
  type MarketAsset,
  type WeatherData,
  weatherConfig,
} from './hero/heroPreview'

type HeroSectionProps = {
  content: SiteContent
  language: Language
  reducedEffects?: boolean
}

const fallbackMarket: MarketAsset[] = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', currentPrice: 371064, change24h: 0.61 },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', currentPrice: 11308.76, change24h: 0.26 },
  { id: 'solana', symbol: 'SOL', name: 'Solana', currentPrice: 480.41, change24h: 1.4 },
]

export function HeroSection({ content, language, reducedEffects = false }: HeroSectionProps) {
  const navigate = useNavigate()
  const [weather, setWeather] = useState<WeatherData>(() => getFallbackWeather(language))
  const [github, setGitHub] = useState<GitHubData>(() => getFallbackGitHub(content.preview))
  const [market, setMarket] = useState<MarketAsset[]>(fallbackMarket)

  useEffect(() => {
    const abortController = new AbortController()
    const fallbackGitHub = getFallbackGitHub(content.preview)

    async function loadHeroData() {
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${weatherConfig.latitude}&longitude=${weatherConfig.longitude}&daily=temperature_2m_max&timezone=${weatherConfig.timezone}&forecast_days=7`
      const githubProfileUrl = `https://api.github.com/users/${githubUsername}`
      const githubReposUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=3`
      const marketUrl =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=bitcoin,ethereum,solana&price_change_percentage=24h'

      const [weatherResult, githubProfileResult, githubReposResult, marketResult] = await Promise.allSettled([
        fetch(weatherUrl, { signal: abortController.signal }),
        fetch(githubProfileUrl, { signal: abortController.signal }),
        fetch(githubReposUrl, { signal: abortController.signal }),
        fetch(marketUrl, { signal: abortController.signal }),
      ])

      if (weatherResult.status === 'fulfilled' && weatherResult.value.ok) {
        const weatherPayload = await weatherResult.value.json()
        const labels = weatherPayload.daily?.time?.map((dateValue: string) =>
          new Intl.DateTimeFormat(language === 'pt' ? 'pt-BR' : 'en-US', { weekday: 'short' })
            .format(new Date(dateValue))
            .replace('.', '')
            .slice(0, 3),
        )
        const temperatures = weatherPayload.daily?.temperature_2m_max

        if (Array.isArray(labels) && Array.isArray(temperatures) && labels.length && temperatures.length) {
          setWeather({
            labels: labels.map((label: string) => `${label[0].toUpperCase()}${label.slice(1)}`),
            temperatures,
          })
        }
      }

      if (
        githubProfileResult.status === 'fulfilled' &&
        githubProfileResult.value.ok &&
        githubReposResult.status === 'fulfilled' &&
        githubReposResult.value.ok
      ) {
        const [profilePayload, reposPayload] = await Promise.all([
          githubProfileResult.value.json(),
          githubReposResult.value.json(),
        ])

        if (profilePayload?.login && Array.isArray(reposPayload)) {
          setGitHub({
            name: profilePayload.name || fallbackGitHub.name,
            login: profilePayload.login,
            publicRepos: profilePayload.public_repos ?? fallbackGitHub.publicRepos,
            followers: profilePayload.followers ?? fallbackGitHub.followers,
            following: profilePayload.following ?? fallbackGitHub.following,
            recentRepos: reposPayload.slice(0, 3).map((repo: Record<string, unknown>) => ({
              name: String(repo.name ?? 'repo'),
              language: String(repo.language ?? content.preview.githubFallback.noLanguage),
              updatedAt: formatShortDate(String(repo.pushed_at ?? ''), language, content.preview),
            })),
          })
        }
      }

      if (marketResult.status === 'fulfilled' && marketResult.value.ok) {
        const marketPayload = await marketResult.value.json()

        if (Array.isArray(marketPayload) && marketPayload.length) {
          setMarket(
            marketPayload.slice(0, 3).map((asset: Record<string, unknown>) => ({
              id: String(asset.id ?? ''),
              symbol: String(asset.symbol ?? '').toUpperCase(),
              name: String(asset.name ?? ''),
              currentPrice: Number(asset.current_price ?? 0),
              change24h: Number(asset.price_change_percentage_24h_in_currency ?? asset.price_change_percentage_24h ?? 0),
            })),
          )
        }
      }
    }

    loadHeroData().catch(() => undefined)

    return () => abortController.abort()
  }, [content.preview, language])

  function jumpTo(sectionId: string) {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative" id="inicio">
      <GlassPanel className="relative z-10 p-4 sm:p-5 lg:p-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-center">
          <div className="relative z-10 max-sm:text-center">
            <div className="max-sm:text-left">
              <SectionLabel>{content.hero.label}</SectionLabel>
            </div>
            <h1 className="mt-4 [font-family:Space_Grotesk,Trebuchet_MS,sans-serif] text-[clamp(2rem,9vw,4.8rem)] font-bold leading-[0.98] tracking-[-0.02em] text-[color:var(--text-main)] sm:tracking-[-0.03em]">
              Danilo Gomes
            </h1>
            <p className="mt-3 text-[clamp(1.18rem,5vw,2.3rem)] text-[color:var(--text-main)]">
              {content.hero.role}
            </p>
            <p className="mt-4 max-w-[38rem] text-base text-[color:var(--text-soft)] max-sm:mx-auto sm:text-[1.02rem]">
              {content.hero.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 max-sm:justify-center">
              <Button onClick={() => jumpTo('projetos')} type="button">
                {content.hero.primaryCta}
              </Button>
              <Button onClick={() => jumpTo('contato')} type="button" variant="secondary">
                {content.hero.secondaryCta}
              </Button>
              <Button onClick={() => navigate(`/auralith-ui/?lang=${language}`)} type="button" variant="secondary">
                Auralith UI Docs
              </Button>
            </div>

            <ul className="mt-7 flex max-w-[760px] flex-wrap gap-2.5 max-sm:justify-center" aria-label={content.hero.technologiesAriaLabel}>
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

          {reducedEffects ? (
            <div className="hidden gap-4 lg:grid lg:grid-cols-2 lg:items-start">
              <CodePreview content={content.preview} github={github} />
              <AnalyticsPreview content={content.preview} weather={weather} />
              <div className="lg:col-span-2">
                <RevenuePreview content={content.preview} language={language} market={market} />
              </div>
            </div>
          ) : (
            <div className="relative hidden min-h-[640px] overflow-visible lg:block">
              <div className="absolute -left-10 top-[3.75rem] z-20 w-[60%] opacity-95 hover:z-50">
                <AnalyticsPreview content={content.preview} weather={weather} />
              </div>
              <div className="absolute -right-0 -top-0 z-30 w-[70%] hover:z-50">
                <CodePreview content={content.preview} github={github} />
              </div>
              <div className="absolute left-[10%] top-55 z-40 w-[70%] hover:z-50">
                <RevenuePreview content={content.preview} language={language} market={market} />
              </div>
            </div>
          )}
        </div>
      </GlassPanel>
    </section>
  )
}
