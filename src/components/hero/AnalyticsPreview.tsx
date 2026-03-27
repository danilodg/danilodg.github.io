import { useMemo } from 'react'

import { labelClass } from '../ui'
import {
  buildAreaPath,
  buildLinePath,
  previewInnerPanelClass,
  previewPanelClass,
  type WeatherData,
  weatherConfig,
} from './heroPreview'

export function AnalyticsPreview({ weather }: { weather: WeatherData }) {
  const chartWidth = 320
  const chartHeight = 120
  const chartPadding = 10
  const linePath = useMemo(
    () => buildLinePath(weather.temperatures, chartWidth, chartHeight, chartPadding),
    [weather.temperatures],
  )
  const areaPath = useMemo(
    () => buildAreaPath(weather.temperatures, chartWidth, chartHeight, chartPadding),
    [weather.temperatures],
  )
  const minTemp = Math.min(...weather.temperatures)
  const maxTemp = Math.max(...weather.temperatures)

  return (
    <div className={`${previewPanelClass} p-5`}>
      <div className="flex items-center justify-between">
        <span className={labelClass}>Open-Meteo</span>
        <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
          {weatherConfig.city}
        </span>
      </div>

      <div className={previewInnerPanelClass}>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
              Maxima 7 dias
            </span>
            <strong className="mt-1 block text-2xl text-[color:var(--text-main)]">{maxTemp.toFixed(1)} C</strong>
          </div>
          <div className="text-right">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
              Minima
            </span>
            <span className="mt-1 block text-sm text-[color:var(--text-soft)]">{minTemp.toFixed(1)} C</span>
          </div>
        </div>

        <div className="relative h-40 overflow-hidden rounded-[18px] border border-[color:var(--preview-item-border)] bg-[color:var(--preview-item-bg)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--preview-chart-grid)_1px,transparent_1px),linear-gradient(to_right,var(--preview-chart-grid-strong)_1px,transparent_1px)] bg-[size:100%_25%,14.28%_100%] opacity-50" />

          <svg
            aria-hidden="true"
            className="absolute inset-x-3 bottom-8 h-[108px] w-[calc(100%-1.5rem)]"
            fill="none"
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          >
            <defs>
              <linearGradient id="weather-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--preview-chart-fill-start)" />
                <stop offset="100%" stopColor="var(--preview-chart-fill-end)" />
              </linearGradient>
            </defs>

            <path d={areaPath} fill="url(#weather-area)" />
            <path d={linePath} stroke="var(--preview-chart-line)" strokeLinecap="round" strokeWidth="3" />
          </svg>

          <div className="absolute inset-x-3 bottom-3 flex justify-between text-[10px] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
            {weather.labels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
