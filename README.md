# FoxxGram

A static marketing site with an original **bright orange and black fluorescent glass** theme. Independent design study inspired by the public layout of a well-known messenger website. Not affiliated with Telegram.

Pages: `index.html` (home), `apps.html`, `faq.html`, `features.html`.

## Run locally

```bash
python3 -m http.server 4173
```

Open http://127.0.0.1:4173/ — no install, no sign-in, no API keys.

## Deploy later (GitHub / Vercel)

This is a plain static site (HTML, CSS, SVG, JS). After you approve a push:

1. Create a GitHub repo and push this folder (screenshots are gitignored).
2. Import the repo in Vercel as a static site. No build command is required. The output directory is the repo root.

Do not add secrets to this project. There are none today.

## Theme

Default (and only) theme is dark: near-black background, neon orange accents (`#FF6A00`, `#FF8C1A`) with glow, and frosted-glass panels.
