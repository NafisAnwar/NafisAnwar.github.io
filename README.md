# Nafis Anwar - Portfolio

A custom dark portfolio built with React, TypeScript, Vite, and Motion. Fonts are self-hosted: Space Grotesk, Inter, and IBM Plex Mono.

## Local development

```sh
npm ci
npm run dev
```

Vite serves the site at http://127.0.0.1:3000. Use `npm run build` for type checking and a production build, or `npm run preview` to inspect the built site. GitHub Pages continues to deploy the `build/` directory from `main`.

## Content and design

- `src/data/projects.ts`: project summaries, screenshots, repository links, categories, and detail content.
- `src/data/experience.ts`: roles, dates, and original experience descriptions.
- `src/components`: individual sections and shared presentation components.
- `src/index.css`: design tokens, layouts, and responsive styles.
- `public/resume.pdf` and `public/research/`: existing résumé and research documents.

Motion is the primary animation system. The original SVG systems sculpture supports pointer interaction and a pause control. Reduced-motion preferences disable continuous animation and movement. The layout uses native scrolling; project details use a native modal dialog with keyboard focus management. Project filters, experience disclosures, résumé links, email links, and copy-email controls work without a backend.

Contact uses a direct email link, which opens the visitor's email application. No form submission service is configured. Project metrics and role dates are preserved from the original site and should be reviewed by Nafis as they change.

No KokonutUI components or Anime.js dependency are included; the visual system and interactions are custom.

## now_what flagship project

The featured product tour uses six screenshots captured from the public beta in an isolated browser profile with the app's built-in demo data. The screenshots are stored in `public/projects/now-what/`. The live app blocks iframe embedding, so the portfolio provides an accessible screenshot tour and direct launch links.

Project details in `src/data/now-what.ts` are grounded in the repository's `beta` branch: its README, types, recommendation engine, data schema, and July 2026 deployment diagnostic. The diagnostic's 103 assertions are reported as historical project validation, not as a fresh run by this portfolio. The detailed overview includes 54 micro-action templates, 12 data stores, feature coverage, architecture, shortcuts, beta limitations, and links to the source and architecture report.

Accent color: `#00b4d8`. Portrait styling preserves the original image colors.
