import { labelClass } from '../ui'
import {
  formatCurrency,
  formatPercent,
  previewAmbientClass,
  previewInnerPanelClass,
  previewPanelClass,
  type MarketAsset,
} from './heroPreview'

export function RevenuePreview({ market }: { market: MarketAsset[] }) {
  const strongestAsset = market.reduce((best, current) =>
    current.change24h > best.change24h ? current : best,
  )

  return (
    <div
      className={`${previewPanelClass} bg-[linear-gradient(180deg,rgba(18,32,72,0.86),rgba(7,12,28,0.74))] p-5 backdrop-blur-[24px]`}
    >
      <div className={previewAmbientClass} />

      <div className="flex items-center justify-between">
        <span className={labelClass}>CoinGecko</span>
        <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--text-muted)]">BRL market</span>
      </div>

      <div className={previewInnerPanelClass}>
        <div className="flex items-end gap-2">
          {market.map((asset) => {
            const height = Math.max(38, 52 + asset.change24h * 20)

            return (
              <span
                key={asset.id}
                className="flex-1 rounded-t-[16px] rounded-b-[8px] bg-[linear-gradient(180deg,rgba(117,240,255,0.95),rgba(78,136,255,0.24))] shadow-[0_0_18px_rgba(96,164,255,0.16)]"
                style={{ height: `${height}px` }}
              />
            )
          })}
        </div>

        <div className="mt-4 space-y-3">
          {market.map((asset) => (
            <div className="flex items-center justify-between rounded-2xl border border-[rgba(190,230,255,0.1)] bg-[rgba(255,255,255,0.045)] px-3 py-2.5" key={asset.id}>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
                  {asset.symbol}
                </span>
                <strong className="mt-1 block text-sm text-[color:var(--text-main)]">{formatCurrency(asset.currentPrice)}</strong>
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

        <div className="mt-4 flex items-center justify-between rounded-2xl border border-[rgba(190,230,255,0.1)] bg-[rgba(255,255,255,0.045)] px-3 py-2.5">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
              Melhor 24h
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
