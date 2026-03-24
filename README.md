# Novo Portfolio

Portfolio pessoal desenvolvido com React, TypeScript, Vite e Tailwind CSS v4.
O projeto apresenta uma landing page responsiva com visual glassmorphism, alternancia entre tema claro e escuro e formulario de contato integrado via FormSubmit.

## Visao geral

- Hero com apresentacao profissional e stack principal
- Secoes de sobre, projetos, servicos e contato
- Tema claro/escuro com persistencia em `localStorage`
- Layout responsivo para desktop e mobile
- Formulario com envio via `FormSubmit`

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- ESLint 9

## Estrutura principal

```text
src/
  App.tsx
  index.css
  main.tsx
  components/
    AboutSection.tsx
    ContactSection.tsx
    HeroSection.tsx
    ProjectsSection.tsx
    ServicesSection.tsx
    SiteFooter.tsx
    SiteHeader.tsx
    data.ts
    ui.ts
```

## Como rodar

1. Instale as dependencias:

```bash
npm install
```

2. Copie as variaveis de ambiente:

```bash
cp .env.example .env
```

3. Defina seu email em `VITE_CONTACT_EMAIL` para ativar o formulario.

4. Inicie o projeto:

```bash
npm run dev
```

## Scripts

- `npm run dev` inicia o servidor local
- `npm run build` gera o build de producao
- `npm run lint` executa a validacao com ESLint
- `npm run preview` abre o build localmente

## Contato

O formulario usa o endpoint `https://formsubmit.co/ajax/<email-configurado>`.
Se `VITE_CONTACT_EMAIL` nao estiver definido, o envio fica desativado e a interface mostra a orientacao de configuracao.
