# Déclaration d'usage de l'intelligence artificielle

Ce fichier liste les outils d'IA utilisés pour mon portfolio : à quelle étape, pour quoi faire, et ce que j'ai modifié, corrigé ou rejeté dans ce qu'ils ont produit.

## 1. Antigravity (Google) — intégration des premières pages (15 au 22 octobre 2026)

J'ai utilisé Antigravity car c'est une IA intégrée directement dans VS Code, que j'ai reliée à ma maquette Figma. Elle pouvait ainsi lire la structure de mes frames, mes typographies, mes couleurs et exporter mes images.

- Étape : début du développement.
- Pour quoi faire : transformer mes frames Figma en composants Astro et Tailwind CSS (Header, Hero, section Réalisations, À propos, Footer), créer la page détail d'un projet alimentée par PocketBase.
- Ce que j'ai corrigé :
  - Antigravity n'utilisait pas les bonnes couleurs et typographies tant que je n'avais pas importé mes variables Figma dans `global.css`.
  - La maquette est faite pour une seule largeur d'écran : j'ai rendu le Hero responsive avec des tailles fluides (`clamp()`) et j'ai enlevé les paddings sur les côtés qui étaient trop grands.
  - Il avait recopié tous mes projets en dur dans la page détail comme « données de secours ». Cette copie ne suivait pas mes modifications dans PocketBase : elle a été supprimée plus tard.

## 2. Claude Code — suite du développement et qualité (à partir du 6 novembre 2026)

J'ai continué le projet avec Claude Code, dans VS Code, connecté à ma maquette Figma et à mon PocketBase local. Je lui ai demandé de travailler étape par étape et de s'arrêter après chaque étape pour que je vérifie le rendu.

- Étape : intégration des sections restantes, liaison avec PocketBase, finitions visuelles, qualité web, livrables.
- Pour quoi faire :
  - Intégrer la section Contact, la page « Mes projets » avec ses filtres et la page Mentions légales à partir de mes nœuds Figma.
  - Relier le formulaire de contact à PocketBase.
  - Réorganiser le code de la page projet en composants et regrouper l'accès à PocketBase dans un seul fichier (`src/lib/pocketbase.ts`).
  - Ajouter une case « Accueil » dans PocketBase pour choisir les projets de la page d'accueil.
  - Ajouter les animations (Hero, flèche « Scroll », barre de progression dans le header, apparition au défilement, carrousel).
  - Faire un état des lieux par rapport à l'énoncé et corriger les points de qualité : images optimisées en WebP, sitemap, `robots.txt`, page 404, favicon, polices hébergées sur le site, partie RGPD des mentions légales.
  - Rendre le site fonctionnel quand PocketBase est fermé.
  - Rédiger une première version de ce fichier, du JOURNAL.md, du QUALITE.md et du README.
- Ce que j'ai fait moi :
  - J'ai ajouté TiK TaK et Thermo Viz dans PocketBase avec leurs textes et leurs visuels.
  - J'ai réexporté mes images de projets en WebP et ajouté des images de meilleure qualité pour les pages détail.
  - J'ai fourni mes propres icônes SVG pour GitHub, LinkedIn et l'e-mail, ainsi que mon CV.
  - J'ai décidé de retirer la partie « Visuels » des pages Odysignes et Olyvia, et d'afficher plus petits les visuels de C'est Ma Cam' dont la résolution était trop faible.
- Ce que j'ai rejeté ou modifié :
  - L'effet « sticker » sur les vignettes de projets (cadre blanc penché avec une ombre) : refusé. J'ai demandé des images complètes, de la même taille, avec une bordure identique sur les quatre côtés.
  - La phrase d'accroche et le lien « Tous les projets » ajoutés à côté du titre Réalisations : supprimés, remplacés par un seul bouton « Plus de projets » sur la même ligne que le titre.
  - Les numéros de projets : retirés partout, je ne les trouvais pas pertinents.
  - Le bandeau des pages projet sur fond gris foncé : refusé, je l'ai fait passer sur fond clair et plus compact. Même chose pour le footer.
  - L'orange plus foncé proposé pour améliorer le contraste des petits textes : refusé, je garde mon orange de marque.
  - L'encart en forme de carte pour ma recherche de stage dans la section À propos : refusé, je l'ai voulu sous forme de texte comme le reste de la section.
  - Le bouton « Mon CV », placé d'abord à gauche du header : déplacé à droite. J'ai retiré la mention « PDF · 1,2 Mo ».
- Ce que j'ai repéré et fait corriger :
  - La barre de progression du scroll ne s'affichait pas.
  - Les images des cartes étaient vides en développement.
  - Des espaces disparaissaient dans mes textes (« digitalede », « écrivez-moiou »), y compris dans les mentions légales.
  - Le site plantait quand PocketBase était fermé.
- Ce qui a été généré par l'IA : les textes de la partie RGPD des mentions légales et la phrase sur ma recherche de stage, écrite à partir de mon CV et validée par moi.
- Ce que j'ai vérifié : après chaque étape, le site compile sans erreur (`npm run build`) et je contrôle le rendu des pages dans le navigateur avant de faire mon commit.
