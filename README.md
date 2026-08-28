# Portfolio — Fily Sara Keita

Portfolio professionnel présentant le parcours, les compétences et les dix dépôts GitHub de Fily Sara Keita.

## Stack

- React 19 et TypeScript 5.8
- Vite 6
- Tailwind CSS 4 compilé avec le plugin Vite
- React Router 7
- Lucide React

L’assistant intégré est local et déterministe : aucune clé d’API n’est embarquée dans le navigateur et aucune question n’est envoyée à un service tiers.

## Développement

```bash
npm ci
npm run typecheck
npm run build
npm run dev
```

## Structure

- `constants.ts` : contenu vérifié du portfolio
- `pages/` : parcours, projets, compétences, formation et contact
- `components/` : navigation et guide interactif
- `services/` : réponses locales du guide
