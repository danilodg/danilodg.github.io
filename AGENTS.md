# AGENTS

## Repo shape
- Single-package React + TypeScript + Vite app.
- This repo is currently a portfolio app only (`src/App.tsx` + `src/components/*`).
- There is no active React Router setup in `src/main.tsx`.

## Key runtime behavior
- Language is driven by `?lang=pt|en` in URL (`src/App.tsx`); default falls back to browser language.
- Theme mode (`dark|light|system`) is persisted in localStorage key `theme-mode`.
- Contact submit uses FormSubmit via `VITE_CONTACT_EMAIL`; without it, UI falls back safely.

## Auralith integration
- Library styles are required and already loaded in `src/main.tsx` via `import 'auralith-ui/styles.css'`.
- Multiple sections consume `auralith-ui` components directly; prefer those over recreating local utility classes.
- Hero docs CTA currently opens external docs URL (`https://danilodg.github.io/auralith-ui/?lang=...`) from `src/components/HeroSection.tsx`.

## Build and deploy facts
- Commands: `npm run dev`, `npm run lint`, `npm run build`, `npm run preview`.
- Vite base path comes from `VITE_BASE_PATH` (`vite.config.ts`).
- GitHub Pages workflow sets `VITE_BASE_PATH` dynamically before build (`.github/workflows/deploy-pages.yml`).

## Practical verification order
- For content/UI edits: `npm run lint` -> `npm run build`.
- If a change touches URL/path/assets, verify with base path too:
  `VITE_BASE_PATH=/new_portfolio/ npm run build`.

## Documentation policy (Context7 first)
- For library/framework documentation, query Context7 first.
- If Context7 is missing or outdated for the topic, then use official web docs.
- After relying on non-Context7 docs, note a Context7 coverage gap for future update.
