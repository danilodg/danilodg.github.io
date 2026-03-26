# Novo Portfolio

A personal portfolio built to present Danilo Gomes as a full stack developer through a polished, product-like web experience. The project combines atmospheric visuals, responsive layout decisions, and clear content structure to showcase services, selected work, recommendations, and contact options in a way that feels premium on both desktop and mobile.

## Project Overview

- Premium portfolio landing page with a strong editorial and technological visual identity
- Light and dark themes driven by CSS variables, with `system` mode and local persistence
- Glassmorphism-based sections, subtle animated transitions, and atmospheric gradient backgrounds
- Responsive layout with dedicated sections for hero, about, projects, recommendations, services, contact, and footer
- Contact form flow prepared through `FormSubmit` using the `VITE_CONTACT_EMAIL` environment variable

## Technologies Used

### Core

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4

### UI and Styling

- CSS custom properties for theming
- Google Fonts: Outfit, Space Grotesk, IBM Plex Mono
- `lucide-react` for icons

### Tooling

- ESLint 9
- TypeScript compiler

## Visual Identity Notes

The interface follows a custom design language documented in `IDENTIDADE_VISUAL.md`, centered around:

- Deep navy backgrounds with atmospheric gradients and soft glow layers
- Glass panels with blur, delicate borders, and diffused shadows
- Strong contrast between foreground content and background ambience
- Expressive typography for headings and technical accents
- Smooth, restrained motion that supports the experience without overwhelming it

## Main Structure

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
    RecommendationsSection.tsx
    ServicesSection.tsx
    SiteFooter.tsx
    SiteHeader.tsx
    data.ts
    ui.ts
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

```bash
cp .env.example .env
```

3. Set `VITE_CONTACT_EMAIL` in `.env` to enable contact submissions.

4. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - generate the production build
- `npm run lint` - run linting checks
- `npm run preview` - preview the production build locally

## Related Markdown Files

- `GITHUB_PROFILE.md` - profile copy and GitHub presentation content
- `IDENTIDADE_VISUAL.md` - reusable visual identity system for this portfolio

## Contact Flow

The contact form uses the endpoint `https://formsubmit.co/ajax/<configured-email>`. If `VITE_CONTACT_EMAIL` is not set, the UI keeps the submission flow disabled and guides the user through the missing configuration.
