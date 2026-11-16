# Portfolio — Matthis Carnicer

Portfolio de Matthis Carnicer, étudiant en 2e année de BUT MMI à Montbéliard (parcours Stratégie de communication et Design d'expérience), en recherche de stage en stratégie de communication digitale de 9 à 10 semaines, du 29 mars au 4 juin.

Site : en cours de mise en ligne (déploiement bloqué pour l'instant par des problèmes de VPS).


## Technologies et librairies

Le site est construit avec [Astro](https://astro.build) (version 7), qui me permet de découper mes pages en composants, de générer des pages statiques et d'optimiser les images. Pour le style, j'utilise [Tailwind CSS](https://tailwindcss.com) (version 4), que j'ai adapté à ma charte : mes couleurs, mes typographies et mes animations sont déclarées dans `src/styles/global.css` à partir de ma maquette Figma.

Mes projets sont gérés dans [PocketBase](https://pocketbase.io), une base de données avec une interface d'administration. C'est aussi là que sont enregistrés les messages envoyés depuis le formulaire de contact.

Le plan du site est créé automatiquement par [@astrojs/sitemap](https://docs.astro.build/fr/guides/integrations-guide/sitemap/), et les images sont converties en WebP par [sharp](https://sharp.pixelplumbing.com) au moment du build.

Mes polices, Londrina Solid et Instrument Sans, viennent de [Fontsource](https://fontsource.org) : elles sont hébergées directement sur mon site, sans passer par Google.

Tous ces outils sont sous licence libre : MIT pour Astro, Tailwind CSS, PocketBase et @astrojs/sitemap, Apache 2.0 pour sharp, et SIL Open Font License pour les polices.

Aucun thème ni template prédéfini : toutes les pages sont développées à partir de ma maquette Figma.

## Fonctionnement

- Les projets sont saisis dans PocketBase (collection `Projet`). Une seule page, [`src/pages/projets/[id].astro`](src/pages/projets/[id].astro), génère la page de chaque projet. La case « Accueil » permet de choisir les projets affichés sur la page d'accueil.
- Tout l'accès à PocketBase est regroupé dans [`src/lib/pocketbase.ts`](src/lib/pocketbase.ts). Si PocketBase ne répond pas, le site fonctionne quand même et affiche un message à la place des projets.
- La structure de la base est versionnée dans [`backend/pb_migrations`](backend/pb_migrations). Les données elles-mêmes (`backend/pb_data`) ne sont pas publiées.
- Le formulaire de contact enregistre les messages dans la collection `Messages`, lisible uniquement par l'administrateur.
- L'adresse de PocketBase et celle du site se règlent dans un fichier `.env` (modèle : [`.env.example`](.env.example)).

## Documents du projet

- [JOURNAL.md](JOURNAL.md) — journal de bord
- [IA.md](IA.md) — déclaration d'usage de l'intelligence artificielle
- [QUALITE.md](QUALITE.md) — grille de contrôle qualité
