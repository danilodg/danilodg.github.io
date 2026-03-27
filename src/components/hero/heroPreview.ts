import type { Language, SiteContent } from '../../content'

export const githubUsername = 'danilodg'

export const weatherConfig = {
  city: 'Sao Paulo',
  latitude: -23.55,
  longitude: -46.63,
  timezone: 'America/Sao_Paulo',
}

export type WeatherData = {
  labels: string[]
  temperatures: number[]
}

export type GitHubRepo = {
  name: string
  language: string
  updatedAt: string
}

export type GitHubData = {
  name: string
  login: string
  publicRepos: number
  followers: number
  following: number
  recentRepos: GitHubRepo[]
}

export type MarketAsset = {
  id: string
  symbol: string
  name: string
  currentPrice: number
  change24h: number
}

export function getFallbackWeather(language: Language): WeatherData {
  return {
    labels: language === 'pt' ? ['Qua', 'Qui', 'Sex', 'Sab', 'Dom', 'Seg', 'Ter'] : ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
    temperatures: [29.2, 30.1, 29.6, 29.5, 29.2, 29.3, 26.5],
  }
}

export function getFallbackGitHub(previewContent: SiteContent['preview']): GitHubData {
  return {
    name: 'Danilo Gomes',
    login: githubUsername,
    publicRepos: 9,
    followers: 5,
    following: 4,
    recentRepos: [
      { name: 'new_portfolio', language: 'TypeScript', updatedAt: previewContent.githubFallback.now },
      { name: 'landing-pages-templates', language: 'TypeScript', updatedAt: previewContent.githubFallback.recently },
      { name: 'Forms-react-hooks', language: 'TypeScript', updatedAt: previewContent.githubFallback.recently },
    ],
  }
}

export const fallbackMarket: MarketAsset[] = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', currentPrice: 371064, change24h: 0.61 },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', currentPrice: 11308.76, change24h: 0.26 },
  { id: 'solana', symbol: 'SOL', name: 'Solana', currentPrice: 480.41, change24h: 1.4 },
]

export const previewPanelClass =
  'group relative isolate overflow-hidden rounded-[30px] border border-[color:var(--preview-panel-border)] bg-[var(--preview-panel-bg)] shadow-[var(--preview-panel-shadow)] backdrop-blur-[24px] transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-[color:var(--preview-panel-hover-border)] hover:shadow-[var(--preview-panel-hover-shadow)]'

export const previewInnerPanelClass =
  'mt-4 rounded-[24px] border border-[color:var(--preview-inner-border)] bg-[var(--preview-inner-bg)] p-4'

export function buildLinePath(values: number[], width: number, height: number, padding: number) {
  if (values.length === 0) {
    return ''
  }

  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = Math.max(max - min, 1)
  const step = values.length > 1 ? (width - padding * 2) / (values.length - 1) : 0

  return values
    .map((value, index) => {
      const x = padding + step * index
      const y = height - padding - ((value - min) / range) * (height - padding * 2)
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`
    })
    .join(' ')
}

export function buildAreaPath(values: number[], width: number, height: number, padding: number) {
  if (values.length === 0) {
    return ''
  }

  const linePath = buildLinePath(values, width, height, padding)
  const step = values.length > 1 ? (width - padding * 2) / (values.length - 1) : 0
  const startX = padding
  const endX = padding + step * (values.length - 1)
  const baseY = height - padding

  return `${linePath} L${endX.toFixed(2)} ${baseY.toFixed(2)} L${startX.toFixed(2)} ${baseY.toFixed(2)} Z`
}

export function formatCurrency(value: number, language: Language) {
  return new Intl.NumberFormat(language === 'pt' ? 'pt-BR' : 'en-US', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatPercent(value: number) {
  const signal = value >= 0 ? '+' : ''
  return `${signal}${value.toFixed(2)}%`
}

export function formatShortDate(value: string, language: Language, previewContent: SiteContent['preview']) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return previewContent.githubFallback.now
  }

  return new Intl.DateTimeFormat(language === 'pt' ? 'pt-BR' : 'en-US', {
    day: '2-digit',
    month: '2-digit',
  }).format(date)
}
