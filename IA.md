# Utilisation de l'IA et intégration Figma avec Antigravity

Dans le cadre du développement de mon portfolio, j'ai relié ma maquette Figma à Antigravity afin de fluidifier et d'accélérer l'intégration avec les technologies Astro et Tailwind CSS.

## 1. Connexion Figma et Antigravity

En connectant l'API de Figma directement à Antigravity, l'IA peut inspecter avec précision :
- L'arborescence exacte des composants et des frames.
- Les propriétés graphiques réelles : typographies (`Londrina Solid`, `Instrument Sans`), graisses, tailles relatives, interlignages et espacements.
- La palette de couleurs et les design tokens (`--marque-orange`, `--neutres-blanc-casse`, `--neutres-gris-fonce`, etc.).
- L'exportation directe des assets vectoriels et images haute résolution (détourages, icônes des réseaux sociaux, effets de papier déchiré).


## 2. Intégration avec les méthodes Astro & Tailwind CSS

Cette passerelle a permis de transformer rapidement la conception graphique en code moderne et performant :

- **Composants Astro modulaires et réutilisables :** Découpage propre de l'interface en composants indépendants (`Header.astro`, `Hero.astro`, `Projects.astro`, `About.astro`, `Footer.astro`).
- **Routes dynamiques (`src/pages/projets/[id].astro`) :** Mise en place d'un template dynamique unique alimenté par l'API **PocketBase**, généré statiquement via `getStaticPaths()` pour des performances optimales.
- **Tailwind CSS & Responsivité sur mesure :**
  - Utilisation des variables CSS du fichier `global.css` pour respecter scrupuleusement la charte graphique.
  - Adaptation de la maquette fixe de Figma en un design véritablement responsive grâce aux unités relatives (`vw`, pourcentages) et à des règles fluides (`clamp()`), assurant un rendu harmonieux sur les écrans d'ordinateurs portables comme sur les grands moniteurs de bureau.
  - Optimisation des conteneurs et suppression des marges superflues pour un affichage adapté à toutes les résolutions.

