# A little something for you 🌻

A tiny, interactive digital card made to be opened from a WhatsApp link.
No backend, no database, no external APIs — a seed grows into a small
yellow-flower garden, a short message appears, and a playful nod to
medical studies closes it out. Takes about 15–30 seconds, built mobile-first.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion for the sequencing/transitions
- All flowers are SVG + CSS — no images, no fonts other than Google Fonts, no external requests

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Tap **Open it** to play the whole sequence.

## Build for production

```bash
npm run build
npm start
```

## Personalizing the text

Everything editable lives in one file: [src/content/messages.ts](src/content/messages.ts).

```ts
export const recipientName = "Dafne";

export const messages = {
  cover: { title: "...", subtitle: "...", button: "..." },
  surprise: { line1: "...", line2: "..." },
  message: { line1: "...", line2: "...", caption: "..." },
  medical: { title: "...", patient: `Patient: ${recipientName}`, items: [...] },
  final: { line1: "...", line2: "...", signature: "...", replay: "..." },
};
```

Change `recipientName` or any string in `messages` — nothing else in the
code needs to be touched.

## Project structure

```text
src/
├── app/
│   ├── page.tsx            # renders the experience
│   ├── layout.tsx          # fonts + metadata (title, OG, Twitter card)
│   ├── opengraph-image.tsx # generates the link-preview image (no static asset needed)
│   └── globals.css         # color tokens, paper texture, safe-area handling
├── components/
│   ├── CardExperience.tsx  # scene state machine (cover → surprise → message → medical → final)
│   ├── CardShell.tsx       # shared "card" frame every scene renders inside
│   ├── CoverScreen.tsx     # Pantalla 1
│   ├── FlowerAnimation.tsx # Pantalla 2 — seed-to-garden growth sequence
│   ├── Flower.tsx          # single SVG flower (seed → stem → leaves → petals)
│   ├── FlowerGarden.tsx    # arranges a hero flower + smaller companions
│   ├── MessageScreen.tsx   # Pantalla 3
│   ├── MedicalNote.tsx     # Pantalla 4
│   ├── FinalMessage.tsx    # Pantalla final + Replay
│   └── Particles.tsx       # a few faint floating dots
└── content/
    └── messages.ts         # all editable copy + recipient name
```

## Sharing the link

`metadataBase` in `src/app/layout.tsx` falls back to Vercel's own URL at
deploy time, so link previews (title, description, OG image) work out of
the box once deployed. If you're using a custom domain, set it explicitly:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deploying

Push this repo to GitHub and import it on [Vercel](https://vercel.com/new) —
no environment variables or extra configuration are required.
