import type { Language, SiteContent } from '../../content'
import { labelClass } from '../ui'
import {
  formatCurrency,
  formatPercent,
  previewInnerPanelClass,
  previewPanelClass,
  type MarketAsset,
} from './heroPreview'

export function RevenuePreview({ content, language, market }: { content: SiteContent['preview']; language: Language; market: MarketAsset[] }) {
  const strongestAsset = market.reduce((best, current) =>
    current.change24h > best.change24h ? current : best,
  )

  return (
    <div className={`${previewPanelClass} p-5`}>
      <div className="flex items-center justify-between">
        <span className={labelClass}>CoinGecko</span>
        <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--text-muted)]">{content.revenue.marketLabel}</span>
      </div>

      <div className={previewInnerPanelClass}>


        <div className="mt-4 space-y-3">
          {market.map((asset) => (
            <div className="flex items-center justify-between rounded-2xl border border-[color:var(--preview-item-border)] bg-[color:var(--preview-item-bg)] px-3 py-2.5" key={asset.id}>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
                  {asset.symbol}
                </span>
                <strong className="mt-1 block text-sm text-[color:var(--text-main)]">{formatCurrency(asset.currentPrice, language)}</strong>
              </div>
              <span
                className={[
                  'rounded-full px-3 py-1 text-xs font-medium',
                  asset.change24h >= 0
                    ? 'bg-emerald-400/15 text-emerald-200'
                    : 'bg-rose-400/15 text-rose-200',
                ].join(' ')}
              >
                {formatPercent(asset.change24h)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-2xl border border-[color:var(--preview-item-border)] bg-[color:var(--preview-item-bg)] px-3 py-2.5">
          <div>
              <span className="block text-[10px] uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
                {content.revenue.bestLabel}
              </span>
            <strong className="mt-1 block text-lg text-[color:var(--text-main)]">{strongestAsset.symbol}</strong>
          </div>
          <span className="rounded-full bg-[linear-gradient(135deg,var(--accent-start),var(--accent-end))] px-3 py-1 text-xs font-medium text-white">
            {formatPercent(strongestAsset.change24h)}
          </span>
        </div>
      </div>
    </div>
  )
}
