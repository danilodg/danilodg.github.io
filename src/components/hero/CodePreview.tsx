import { SectionLabel } from 'auralith-ui'

import type { SiteContent } from '../../content'
import { previewInnerPanelClass, previewPanelClass, type GitHubData } from './heroPreview'

export function CodePreview({ content, github }: { content: SiteContent['preview']; github: GitHubData }) {
  return (
    <div className={`${previewPanelClass} p-5`}>
      <div className="flex items-center justify-between">
        <SectionLabel>GitHub</SectionLabel>
        <span className="text-[color:var(--text-muted)]">@{github.login}</span>
      </div>

      <div className={previewInnerPanelClass}>
        <div className="mb-4 flex items-center justify-between border-b border-[color:var(--preview-divider)] pb-3">
          <div>
            <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--text-muted)]">{content.code.statsLabel}</span>
            <strong className="mt-1 block text-lg text-[color:var(--text-main)]">{github.name}</strong>
          </div>
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent-line)] shadow-[0_0_16px_var(--accent-shadow)]" />
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-[10px] border border-[color:var(--preview-item-border)] bg-[color:var(--preview-item-bg)] px-2 py-3">
            <span className="block text-[10px] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">{content.code.repos}</span>
            <strong className="mt-1 block text-lg text-[color:var(--text-main)]">{github.publicRepos}</strong>
          </div>
          <div className="rounded-[10px] border border-[color:var(--preview-item-border)] bg-[color:var(--preview-item-bg)] px-2 py-3">
            <span className="block text-[10px] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">{content.code.followers}</span>
            <strong className="mt-1 block text-lg text-[color:var(--text-main)]">{github.followers}</strong>
          </div>
          <div className="rounded-[10px] border border-[color:var(--preview-item-border)] bg-[color:var(--preview-item-bg)] px-2 py-3">
            <span className="block text-[10px] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">{content.code.following}</span>
            <strong className="mt-1 block text-lg text-[color:var(--text-main)]">{github.following}</strong>
          </div>
        </div>

        <div className="mt-5 space-y-3 font-[IBM_Plex_Mono,monospace] text-[0.72rem] text-[color:var(--text-soft)]">
          {github.recentRepos.map((repo) => (
            <div className="rounded-xl border border-[color:var(--preview-item-border)] bg-[color:var(--preview-item-bg)] px-3 py-2.5" key={repo.name}>
              <div className="flex items-center justify-between gap-3">
                <span className="truncate text-[color:var(--text-main)]">{repo.name}</span>
                <span className="text-[color:var(--text-muted)]">{repo.updatedAt}</span>
              </div>
              <div className="mt-1 text-[color:var(--text-muted)]">{repo.language}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
