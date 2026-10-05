# Om Agrotech website

Static, bilingual (English / Marathi) website for [Om Agrotech](https://omagrotech.com/) — Agri Clinic & Agri Business Centre, Pune.

- `/` — English, `/mr/` — Marathi
- No framework, no runtime dependencies. Pages are generated from `content.js` by `build.js`.

## Edit & build

1. Edit text in `content.js` (both languages live there).
2. Run `node build.js` — regenerates `index.html`, `mr/index.html`, `sitemap.xml`, `robots.txt`.
3. Commit and push; GitHub Pages serves the repo root from `main`.

Images live in `assets/img/` (replace files, keeping names). Stock photos are from Unsplash.
