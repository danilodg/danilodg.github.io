import { BookOpenText, User2 } from 'lucide-react'

import { useLocale } from '../../locale-context'
import { Button, GlassPanel, SectionLabel } from 'auralith-ui'

interface CtaSectionProps {
  onOpenDocs: () => void
  onOpenPortfolio: () => void
}

export function CtaSection({ onOpenDocs, onOpenPortfolio }: CtaSectionProps) {
  const { language, strings } = useLocale()
  const portfolioLabel = language === 'pt' ? 'Visite o portfolio do criador' : 'Visit the creator portfolio'

  return (
    <section>
      <GlassPanel className="grid gap-3 p-3 sm:p-4 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div>
          <SectionLabel>{strings.landing.nextStep}</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-[Space_Grotesk,Trebuchet_MS,sans-serif] text-[clamp(1.45rem,3.8vw,2.25rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            {strings.landing.nextStepTitle}
          </h2>
          <p className="mt-3 max-w-[62ch] text-sm text-[color:var(--text-soft)]">
            {language === 'pt'
              ? 'Use o mesmo deploy para apresentar sua biblioteca e seu trabalho como desenvolvedor.'
              : 'Use the same deploy to present your component library and your creator portfolio.'}
          </p>
        </div>

        <div className="grid gap-2">
          <Button onClick={onOpenPortfolio} type="button" variant="secondary">
            <User2 size={16} />
            {portfolioLabel}
          </Button>
          <Button onClick={onOpenDocs} type="button">
            {strings.landing.openDocumentation}
            <BookOpenText size={16} />
          </Button>
        </div>
      </GlassPanel>
    </section>
  )
}
