# Goua Beedi — Portfolio Interactif & CV

Ce projet est un CV interactif et portfolio bilingue (Français/Anglais) conçu pour être ultra-rapide, élégant et optimisé pour le SEO.

**[Lien vers la démo en ligne](https://beedigoua.github.io/CV_GOUA/)**

## Fonctionnalités clés

- **Bilingue (FR/EN)** : Support natif de l'internationalisation avec bascule instantanée.
- **Design  Responsive** : Interface moderne avec mode sombre/clair, micro-animations (Framer Motion) et une hiérarchie visuelle soignée.
- **Grille de Projets Intelligente** : Affichage en matrice 2x2 avec expansion fluide pour une lecture détaillée.
- **Compétences Interactives** : Section structurée par domaines (Stats, ML, DL, IA Générative) avec détails expansibles.
- **Data-Driven** : Tout le contenu est piloté par un seul fichier de configuration : `src/data/resume-config.ts`.
- **Optimisé SEO & ATS** : Injection des métadonnées JSON-LD et rendu sémantique pour une visibilité maximale auprès des moteurs de recherche et des recruteurs.
- **PDF Export** : Liens directs vers les versions PDF (FR/EN) synchronisées.

## Stack Technique

- **Framework** : [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/) (Type-safe)
- **Styles** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)

## Installation & Développement

### 1. Installation

```bash
npm install
```

### 2. Développement local

```bash
npm run dev
```

### 3. Build pour la production

```bash
npm run build
```

Les fichiers statiques sont générés dans le dossier `dist/`.

## Structure du projet

- `src/data/resume-config.ts` : **Le fichier central** pour modifier tout le contenu du CV.
- `src/components/Resume/` : Ensemble des composants UI du portfolio.
- `public/cv/` : Contient les versions PDF téléchargeables.

---

© 2026 Goua Beedi — [LinkedIn](https://linkedin.com/in/gouabeedi) · [GitHub](https://github.com/beedigoua)
