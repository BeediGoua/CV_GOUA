# Goua Beedi - Portfolio Interactif et CV

[![Deploy to GitHub Pages](https://github.com/beedigoua/CV_GOUA/actions/workflows/deploy.yml/badge.svg)](https://github.com/beedigoua/CV_GOUA/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

CV interactif bilingue (FR/EN) construit avec React + TypeScript + Vite, avec un focus sur la performance, l'accessibilite et le SEO.

Demo: https://beedigoua.github.io/CV_GOUA/

## Features

- Bilingue FR/EN avec bascule instantanee.
- UI responsive desktop/mobile.
- Theme clair/sombre + presets de couleurs.
- Sections experiences/projets avec details extensibles.
- Contenu centralise en mode data-driven.
- Export PDF FR/EN.
- SEO statique enrichi via plugins Vite custom.

## Stack

- React 19
- TypeScript 5
- Vite 7
- Tailwind CSS 4
- Framer Motion

## Prerequisites

- Node.js 20+
- npm 10+

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: lance l'app en local.
- `npm run lint`: verifie la qualite ESLint/TypeScript.
- `npm run build`: build production (sortie dans `docs/`).
- `npm run preview`: previsualise le build localement.

## Qualite Avant Push

```bash
npm run lint
npm run build
```

## Project Structure

- `src/data/resume-config.ts`: configuration principale du CV.
- `src/components/Resume/`: composants UI du CV.
- `src/lib/`: i18n, theme, hooks utilitaires.
- `build/plugins/`: plugins Vite custom (SEO, validation, detection assets).
- `public/cv/`: PDFs source FR/EN.
- `docs/`: site statique genere pour deployment.

## Deployment

- GitHub Pages via workflow CI: `.github/workflows/deploy.yml`
- Documentation detaillee: `documents/DEPLOYMENT.md`

## Contributing

Voir `CONTRIBUTING.md`.

## Changelog

Voir `CHANGELOG.md`.

## License

MIT - voir `LICENSE`.

## Contact

- LinkedIn: https://linkedin.com/in/gouabeedi
- GitHub: https://github.com/beedigoua
