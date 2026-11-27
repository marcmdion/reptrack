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

## Exercise names (Plan vs manual log)

Today's Plan uses singular lift names from `src/lib/program.js` (for example **Lateral Raise**, **Leg Extension**). The manual exercise list previously used plural variants for some lifts. New manual logs are normalized on save via `src/lib/exerciseNames.js`, and charts/history group legacy and canonical names together before you migrate.

**Backfill existing Firestore data (signed in):** open **Exercises** (manage list) → **Sync with Today's Plan** → review the preview counts → **Update stored exercise names**. The migration is idempotent and only rewrites workouts whose stored `exercise` field differs from the canonical name, plus dedupes your saved exercise list.

## Rest timer and audio (especially iOS)

On iPhone and iPad the rest timer **never opens an audio session**. It does not create an `AudioContext`, resume one, play a silent buffer, or use an `<audio>` element, and it does not set `navigator.audioSession` to `playback` or `play-and-record`.

That session is what paused podcasts and disabled Siri. WebKit registers a running audio context, or an `<audio>` element, as the Now Playing app. iOS then gives that app the side button, so holding it does not start Siri, and other audio pauses. Scheduling the end beeps at the start of the rest (or playing a silent unlock buffer) turns the session on immediately and holds it until the timer ends. Suspending the context does not reliably give Siri back.

The countdown stays on screen. Vibration runs where the browser allows it. **“Rest alerts when app is in background”** posts a notification when rest ends.

On desktop, three short beeps play when rest ends. Where the browser supports it, the page sets the audio session to **ambient** first so the beeps mix instead of taking playback, and the context is suspended while the timer counts. Android browsers that cannot opt into a mixable session play no timer sound, so they cannot take audio focus.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests |

## Graphify (code exploration)

This repo includes [Graphify](https://github.com/Graphify-Labs/graphify) for AI-assisted codebase navigation (`.cursor/rules/graphify.mdc`, `.agents/skills/graphify/`).

```bash
pip install graphifyy
graphify cursor install --project   # already done in-repo; re-run after upgrading graphify
```

In Cursor, run `/graphify .` once to build the local graph (`graphify-out/`, gitignored). Then use `graphify query`, `graphify path`, and `graphify explain` before large file greps.

## Project structure

```
index.html          # App shell
src/main.js         # Bootstrap
src/features/       # Auth, logging, history, chart, etc.
src/lib/            # Firebase, state, utilities
docs/               # Built site (GitHub Pages)
```
