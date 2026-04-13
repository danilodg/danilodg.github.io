import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { Button, GlassPanel, Input, SectionLabel, Textarea } from 'auralith-ui'

import type { SiteContent } from '../content'
import { sectionTitleClass } from './ui'

type FormStatus =
  | { type: 'idle'; message: string }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string }

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'danilo.gomes.dg91@gmail.com'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim()
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim() || import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()
const supabaseContactFunction = import.meta.env.VITE_SUPABASE_CONTACT_FUNCTION?.trim() || 'contact-lead'

function formatPhoneMask(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function ContactSection({ content }: { content: SiteContent['contact'] }) {
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: content.status.idle,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const endpoint = contactEmail ? `https://formsubmit.co/ajax/${contactEmail}` : ''

  async function submitViaSupabase(formData: FormData) {
    if (!supabaseUrl || !supabasePublishableKey) return false

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      subject: String(formData.get('title') || ''),
      message: String(formData.get('message') || ''),
      source: 'new_portfolio',
    }

    const response = await fetch(`${supabaseUrl}/functions/v1/${supabaseContactFunction}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${supabasePublishableKey}`,
        apikey: supabasePublishableKey,
      },
      body: JSON.stringify(payload),
    })

    return response.ok
  }

  async function submitViaFormSubmit(formData: FormData) {
    if (!endpoint) return false

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })

    return response.ok
  }

  useEffect(() => {
    setStatus((currentStatus) => (currentStatus.type === 'idle' ? { type: 'idle', message: content.status.idle } : currentStatus))
  }, [content.status.idle])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!endpoint && (!supabaseUrl || !supabasePublishableKey)) {
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
      const submittedViaSupabase = await submitViaSupabase(formData)
      const submittedViaFormSubmit = submittedViaSupabase ? false : await submitViaFormSubmit(formData)

      if (!submittedViaSupabase && !submittedViaFormSubmit) {
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
    <section className="mt-12 lg:mt-16" id="contato">
      <div className="mb-7 max-w-[860px]">
        <SectionLabel>{content.label}</SectionLabel>
        <h2 className={sectionTitleClass}>{content.title}</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <GlassPanel className="flex flex-col gap-3 p-4 sm:p-5">
          <p className="max-w-[34rem] text-[color:var(--text-soft)]">{content.intro}</p>

          <div className="grid gap-3 text-sm text-[color:var(--text-soft)]">
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
        </GlassPanel>

        <GlassPanel className="p-4 sm:p-5">
          <form className="grid gap-3" onSubmit={handleSubmit}>
            <input name="_subject" type="hidden" value={content.subjectValue} />
            <input name="_captcha" type="hidden" value="false" />
            <input name="_template" type="hidden" value="table" />

            <div className="grid gap-3 sm:grid-cols-2">
              <Input.Root>
                <Input.Label>{content.formLabels.name}</Input.Label>
                <Input.Field name="name" placeholder={content.placeholders.name} required />
              </Input.Root>

              <Input.Root>
                <Input.Label>{content.formLabels.email}</Input.Label>
                <Input.Field name="email" placeholder={content.placeholders.email} required type="email" />
              </Input.Root>
            </div>

            <Input.Root>
              <Input.Label>{content.formLabels.phone}</Input.Label>
              <Input.Field
                name="phone"
                onInput={(event) => {
                  const input = event.currentTarget
                  input.value = formatPhoneMask(input.value)
                }}
                pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
                placeholder={content.placeholders.phone}
                required
                type="tel"
              />
            </Input.Root>

            <Input.Root>
              <Input.Label>{content.formLabels.subject}</Input.Label>
              <Input.Field name="title" placeholder={content.placeholders.subject} required />
            </Input.Root>

            <Textarea.Root>
              <Textarea.Label>{content.formLabels.message}</Textarea.Label>
              <Textarea.Field className="resize-y" name="message" placeholder={content.placeholders.message} required />
            </Textarea.Root>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
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

              <Button className="min-w-[132px]" disabled={isSubmitting} type="submit">
                {isSubmitting ? content.submitting : content.submit}
              </Button>
            </div>
          </form>
        </GlassPanel>
      </div>
    </section>
  )
}
