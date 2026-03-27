import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'

import type { SiteContent } from '../content'
import { glassPanel, labelClass, primaryButtonClass, sectionTitleClass } from './ui'

type FormStatus =
  | { type: 'idle'; message: string }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string }

const inputClass =
  'w-full rounded-2xl border border-[color:var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[color:var(--text-main)] outline-none transition placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--accent-line)]/60 focus:ring-2 focus:ring-cyan-300/20'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'danilo.gomes.dg91@gmail.com'

export function ContactSection({ content }: { content: SiteContent['contact'] }) {
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: content.status.idle,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const endpoint = contactEmail ? `https://formsubmit.co/ajax/${contactEmail}` : ''

  useEffect(() => {
    setStatus((currentStatus) => (currentStatus.type === 'idle' ? { type: 'idle', message: content.status.idle } : currentStatus))
  }, [content.status.idle])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!endpoint) {
      setStatus({
        type: 'error',
        message: content.status.missingEmail,
      })
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setStatus({ type: 'idle', message: content.status.sending })

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error(content.status.submitError)
      }

      form.reset()
      setStatus({
        type: 'success',
        message: content.status.success,
      })
    } catch {
      setStatus({
        type: 'error',
        message: content.status.error,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mt-20 lg:mt-28" id="contato">
      <div className="mb-7 max-w-[860px]">
        <span className={labelClass}>{content.label}</span>
        <h2 className={sectionTitleClass}>{content.title}</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className={`${glassPanel} flex flex-col gap-5 p-7`}>
          <p className="max-w-[34rem] text-[color:var(--text-soft)]">{content.intro}</p>

          <div className="grid gap-4 text-sm text-[color:var(--text-soft)]">
            <div>
              <span className="mb-1 block text-[color:var(--text-main)]">{content.responseTitle}</span>
              <p>{content.responseText}</p>
            </div>
            <div>
              <span className="mb-1 block text-[color:var(--text-main)]">{content.focusTitle}</span>
              <p>{content.focusText}</p>
            </div>
            <div>
              <span className="mb-1 block text-[color:var(--text-main)]">{content.directChannelTitle}</span>
              <p>{contactEmail || content.directChannelFallback}</p>
            </div>
          </div>
        </div>

        <form className={`${glassPanel} grid gap-4 p-7`} onSubmit={handleSubmit}>
          <input name="_subject" type="hidden" value={content.subjectValue} />
          <input name="_captcha" type="hidden" value="false" />
          <input name="_template" type="hidden" value="table" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-[color:var(--text-main)]">
              <span>{content.formLabels.name}</span>
              <input className={inputClass} name="name" placeholder={content.placeholders.name} required />
            </label>

            <label className="grid gap-2 text-sm text-[color:var(--text-main)]">
              <span>{content.formLabels.email}</span>
              <input
                className={inputClass}
                name="email"
                placeholder={content.placeholders.email}
                required
                type="email"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm text-[color:var(--text-main)]">
            <span>{content.formLabels.subject}</span>
            <input className={inputClass} name="title" placeholder={content.placeholders.subject} required />
          </label>

          <label className="grid gap-2 text-sm text-[color:var(--text-main)]">
            <span>{content.formLabels.message}</span>
            <textarea
              className={`${inputClass} min-h-36 resize-y`}
              name="message"
              placeholder={content.placeholders.message}
              required
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p
              className={[
                'text-sm',
                status.type === 'success'
                  ? 'text-emerald-300'
                  : status.type === 'error'
                    ? 'text-rose-300'
                  : 'text-[color:var(--text-muted)]',
              ].join(' ')}
            >
              {status.message}
            </p>

            <button className={primaryButtonClass} disabled={isSubmitting} type="submit">
              {isSubmitting ? content.submitting : content.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
