# New Portfolio

Portfolio website built with React + TypeScript, with a second route that hosts the Auralith UI documentation in the same project.

## Routes

- `/` -> main portfolio experience
- `/auralith-ui/?lang=pt` -> Auralith docs in Portuguese
- `/auralith-ui/?lang=en` -> Auralith docs in English

This setup allows one deployment to present both personal work and the component library showcase.

## What this project includes

- Hero, about, projects, services, contact, and footer sections.
- Real project cards with repository and project/documentation links.
- Light/dark/system theme handling with local persistence.
- Contact flow through FormSubmit using environment configuration.
- Embedded docs frontend for `auralith-ui` under `/auralith-ui`.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- `auralith-ui`
- `react-router-dom`
- `lucide-react`

## Environment

Create `.env` from `.env.example` and set:

```env
VITE_CONTACT_EMAIL=your-email@example.com
```

If missing, the contact UI stays in a safe fallback mode.

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

## Scripts

```bash
# dev server
npm run dev

# production build
npm run build

# lint checks
npm run lint

# local preview of build output
npm run preview
```

## Key directories

```text
src/
  App.tsx
  main.tsx
  content.ts
  components/
    HeroSection.tsx
    AboutSection.tsx
    ProjectsSection.tsx
    ServicesSection.tsx
    ContactSection.tsx
    SiteHeader.tsx
    SiteFooter.tsx
  auralith-docs/          # embedded docs frontend for /auralith-ui
```

## Related docs

- `IDENTIDADE_VISUAL.md` -> visual language and design rules
- `GITHUB_PROFILE.md` -> profile and presentation content
