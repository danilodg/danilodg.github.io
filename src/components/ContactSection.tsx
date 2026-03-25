import { useState } from 'react'
import type { FormEvent } from 'react'

import { glassPanel, labelClass, primaryButtonClass, sectionTitleClass } from './ui'

type FormStatus =
  | { type: 'idle'; message: string }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string }

const inputClass =
  'w-full rounded-2xl border border-[color:var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[color:var(--text-main)] outline-none transition placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--accent-line)]/60 focus:ring-2 focus:ring-cyan-300/20'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'danilo.gomes.dg91@gmail.com'

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: 'Preencha os campos para enviar sua mensagem.',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const endpoint = contactEmail ? `https://formsubmit.co/ajax/${contactEmail}` : ''

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!endpoint) {
      setStatus({
        type: 'error',
        message:
          'Defina `VITE_CONTACT_EMAIL` para ativar o envio automatico do formulario.',
      })
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setStatus({ type: 'idle', message: 'Enviando mensagem...' })

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Nao foi possivel enviar agora.')
      }

      form.reset()
      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso. Vou te responder em breve.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'O envio falhou. Tente novamente em alguns instantes.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mt-20 lg:mt-28" id="contato">
      <div className="mb-7 max-w-[740px]">
        <span className={labelClass}>Contato</span>
        <h2 className={sectionTitleClass}>Vamos transformar sua ideia em projeto</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className={`${glassPanel} flex flex-col gap-5 p-7`}>
          <p className="max-w-[34rem] text-[color:var(--text-soft)]">
            Se voce quer tirar um projeto do papel, melhorar um sistema atual ou
            criar uma interface com presenca mais forte, me envie uma mensagem.
          </p>

          <div className="grid gap-4 text-sm text-[color:var(--text-soft)]">
            <div>
              <span className="mb-1 block text-[color:var(--text-main)]">Resposta</span>
              <p>Retorno por email com alinhamento inicial e proximos passos.</p>
            </div>
            <div>
              <span className="mb-1 block text-[color:var(--text-main)]">Foco</span>
              <p>Sites profissionais, sistemas web, APIs e melhorias visuais.</p>
            </div>
            <div>
              <span className="mb-1 block text-[color:var(--text-main)]">Canal direto</span>
              <p>{contactEmail || 'Configure seu email para ativar o envio real.'}</p>
            </div>
          </div>
        </div>

        <form className={`${glassPanel} grid gap-4 p-7`} onSubmit={handleSubmit}>
          <input name="_subject" type="hidden" value="Novo contato pelo portfolio" />
          <input name="_captcha" type="hidden" value="false" />
          <input name="_template" type="hidden" value="table" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-[color:var(--text-main)]">
              <span>Nome</span>
              <input className={inputClass} name="name" placeholder="Seu nome" required />
            </label>

            <label className="grid gap-2 text-sm text-[color:var(--text-main)]">
              <span>Email</span>
              <input
                className={inputClass}
                name="email"
                placeholder="voce@email.com"
                required
                type="email"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm text-[color:var(--text-main)]">
            <span>Assunto</span>
            <input className={inputClass} name="title" placeholder="Sobre o que voce quer conversar?" required />
          </label>

          <label className="grid gap-2 text-sm text-[color:var(--text-main)]">
            <span>Mensagem</span>
            <textarea
              className={`${inputClass} min-h-36 resize-y`}
              name="message"
              placeholder="Me conte um pouco sobre seu projeto"
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
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
