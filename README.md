# Aniket Tikariha — Portfolio

Personal portfolio site for Aniket Tikariha, Production Engineer at Meta.

**Live:** https://aniket-tikariha.web.app

## Stack

- Next.js 13 (static export) + TypeScript + Tailwind CSS
- Framer Motion for scroll reveals, Lucide icons
- Hosted on Firebase Hosting (`aniket-tikariha` project)

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build   # static export -> ./out
```

Pushing to `main` auto-deploys to Firebase Hosting via the
`.github/workflows/firebase-hosting-merge.yml` workflow.

## Content source of truth

All experience bullets, dates, and skills are taken from the base résumé —
don't invent new claims; update the résumé first, then mirror it here
(`lib/data.ts`).
