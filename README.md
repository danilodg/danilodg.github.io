# New Portfolio

Personal website that combines two experiences in one Vite app:

- `/` -> portfolio (about, projects, services, contact)
- `/auralith-ui/?lang=pt` and `/auralith-ui/?lang=en` -> Auralith UI documentation/showcase

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- `auralith-ui` component library
- `react-router-dom` for route separation

## Highlights

- Real project section with repository links and docs links
- Theme system (light/dark/system) with persistence
- Contact form using FormSubmit (`VITE_CONTACT_EMAIL`)
- Embedded Auralith docs route in the same deployment

## Getting started

```bash
npm install
cp .env.example .env
```

Set `VITE_CONTACT_EMAIL` in `.env`, then run:

```bash
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Related docs

- `IDENTIDADE_VISUAL.md`
- `GITHUB_PROFILE.md`
