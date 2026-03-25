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

export const fallbackWeather: WeatherData = {
  labels: ['Qua', 'Qui', 'Sex', 'Sab', 'Dom', 'Seg', 'Ter'],
  temperatures: [29.2, 30.1, 29.6, 29.5, 29.2, 29.3, 26.5],
}

export const fallbackGitHub: GitHubData = {
  name: 'Danilo Gomes',
  login: githubUsername,
  publicRepos: 9,
  followers: 5,
  following: 4,
  recentRepos: [
    { name: 'new_portfolio', language: 'TypeScript', updatedAt: 'agora' },
    { name: 'landing-pages-templates', language: 'TypeScript', updatedAt: 'recentemente' },
    { name: 'Forms-react-hooks', language: 'TypeScript', updatedAt: 'recentemente' },
  ],
}

export const fallbackMarket: MarketAsset[] = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', currentPrice: 371064, change24h: 0.61 },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', currentPrice: 11308.76, change24h: 0.26 },
  { id: 'solana', symbol: 'SOL', name: 'Solana', currentPrice: 480.41, change24h: 1.4 },
]

export const previewPanelClass =
  'group relative isolate overflow-hidden rounded-[30px] border border-[rgba(160,220,255,0.2)] bg-[linear-gradient(180deg,rgba(12,24,56,0.82),rgba(6,12,28,0.68))] shadow-[0_28px_70px_rgba(0,0,0,0.28)] backdrop-blur-[24px] transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-[rgba(160,220,255,0.32)] hover:shadow-[0_34px_90px_rgba(0,0,0,0.34)]'

export const previewAmbientClass =
  'pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(117,240,255,0.22),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(123,163,255,0.18),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(56,97,180,0.22),transparent_46%)] opacity-90 blur-2xl transition duration-300 group-hover:opacity-100 group-hover:blur-[42px]'

export const previewInnerPanelClass =
  'mt-4 rounded-[24px] border border-[rgba(190,230,255,0.12)] bg-[linear-gradient(180deg,rgba(11,21,51,0.78),rgba(6,11,28,0.74))] p-4 backdrop-blur-[18px]'

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

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatPercent(value: number) {
  const signal = value >= 0 ? '+' : ''
  return `${signal}${value.toFixed(2)}%`
}

export function formatShortDate(value: string) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return 'agora'
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  }).format(date)
}
