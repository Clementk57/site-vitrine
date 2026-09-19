# Portfolio de Clément

Portfolio personnel de Clément, Software Developer spécialisé en C#, .NET et intelligence artificielle.

Le site est une landing page statique construite avec React, TypeScript, Vite et Tailwind CSS.

## Démarrer le projet

```bash
npm install
npm run dev
```

## Scripts utiles

```bash
npm run build
npm run lint
```

## Mettre à jour les coordonnées

Les valeurs de contact sont centralisées dans `src/data/profile.ts` :

```ts
contact: {
  email: '',
  github: '',
  linkedin: '',
}
```

Ajoutez seulement des adresses ou URL publiques vérifiées. Tant qu’une valeur est vide, aucun lien cassé n’est affiché dans l’interface.

## Contenu

Les expériences, projets et technologies sont regroupés dans `src/data/portfolio.ts`, afin de permettre des mises à jour sans modifier les composants de présentation.
