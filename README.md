# MD RepTrack

Minimalist workout logger — log exercises, body weight, and mobility routines. Built with Vite, Tailwind CSS, and Firebase (Auth + Firestore).

**Live app:** https://marcmdion.github.io/reptrack/

## Features

- Today's Plan: built-in Upper/Lower + Cardio program with tap-to-check sets and automatic weight progression
- Workout logging with sets, load (kg or BW), and reps
- Session dates, names, and history
- Body weight tracking per session
- Insights charts (Chart.js)
- Mobility routines and interval timers
- Installable PWA on supported devices

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/reptrack/`).

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push to `main` triggers GitHub Actions: builds the site and commits output to `docs/`. GitHub Pages serves from the `docs/` folder on `main`.

## Firebase setup

1. Create a Firebase project with Email/Password auth and Firestore.
2. Add your web app config in `src/lib/firebase.js`.
3. Restrict the API key HTTP referrers for your Pages URL (see `scripts/restrict-firebase-api-key.sh`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests |

## Project structure

```
index.html          # App shell
src/main.js         # Bootstrap
src/features/       # Auth, logging, history, chart, etc.
src/lib/            # Firebase, state, utilities
docs/               # Built site (GitHub Pages)
```
