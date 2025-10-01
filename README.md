# STIMA Portal Demo (Next.js + Supabase)

Demo interattiva pronta per Vercel con dati simulati e backend mock, pensata per pitch agli investitori.

## 🚀 Avvio rapido

```bash
pnpm install   # oppure npm install / yarn
cp .env.example .env.local  # incolla le chiavi di Supabase (facoltativo per la demo)
pnpm dev
```

## 🔧 Deploy su Vercel

1. Crea un nuovo repo su GitHub e carica questa cartella.
2. Importa il repo su Vercel → framework Next.js.
3. Aggiungi su Vercel le env `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` (se vuoi usare Supabase).
4. Deploy.

## 🗄️ Supabase (opzionale per la demo)

- Apri **SQL** e incolla `supabase/schema.sql` per creare le tabelle base.
- Importa i mock con `supabase/seed.json` usando Table Editor → Import.

## 🧩 Cosa è incluso

- App Router, TypeScript, Tailwind
- Supabase client pronto (`lib/supabaseClient.ts`)
- API routes mock per: asset, valuation, prediction, fractional
- UI/UX per pagine principali (homepage, search, asset detail, appraise, mint, portfolio, swap, leaderboard, predictions, fractional)
- Componenti riusabili (Card, Stat, Chart, AssetCard)
- Dati e immagini placeholder (public/mock)

## 📸 Descrizioni visive (per pagina)

Ogni pagina contiene in alto un box **"Come presentarla"** con note di storytelling per demo.
