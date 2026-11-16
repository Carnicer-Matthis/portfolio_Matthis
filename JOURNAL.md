# Journal de bord — Portfolio Matthis Carnicer

Présence professionnelle — choix de mes réseaux (16/11/2026)
LinkedIn est le réseau sur lequel les recruteurs et les agences de communication vérifient le profil des candidats et publient leurs offres de stage. Je l'ai mis à jour avec le même message que mon portfolio, étudiant en BUT MMI parcours communication, en recherche de stage en stratégie de communication digitale du 29 mars au 4 juin.
GitHub montre la partie technique de mon profil, ce qui prouve que je comprends le développement web. C'est un atout pour un profil communication qui devra travailler avec des équipes techniques.
J'ai testé Instagram dans le footer puis je l'ai retiré, car mon compte n'était pas assez cohérent avec mon positionnement professionnel.
Mes deux réseaux sont présents dans le footer de toutes les pages, à côté de mon e-mail, et mon CV est téléchargeable depuis le header et la section Contact.

Semaine 2 (15/10/2026)
J'ai créé mon projet, installé Astro et Tailwind, et importé les variables de ma maquette Figma (couleurs, typographies, tailles) dans `global.css`.
J'ai connecté Figma à Antigravity pour obtenir un premier jet de mon header, puis j'ai intégré le Hero : le grand lettering « MATTHIS », mon portrait détouré et les textes sur les côtés.
J'ai installé PocketBase et créé la collection `Projet`, pour pouvoir ajouter et modifier mes projets depuis une interface d'administration plutôt que de les écrire dans le code. J'ai affiché mes 3 projets sur la page d'accueil à partir de PocketBase.
Ce qui a coincé : le Hero devait garder les mêmes proportions sur tous les écrans, alors que la maquette est faite pour une seule taille. J'ai utilisé des tailles de texte fluides (`clamp()`) et des hauteurs en pourcentage pour que le portrait et le lettering s'adaptent.

Semaine 3 (22/10/2026)
J'ai créé la page détail d'un projet (`/projets/[id]`). Une seule page sert de modèle et Astro génère automatiquement une page pour chaque projet de PocketBase.
J'ai intégré la section « À propos » et j'ai enlevé les paddings sur les côtés pour que le site prenne mieux la largeur sur grand écran.
Ce qui a coincé : Antigravity avait recopié tous mes projets en dur dans la page détail, « au cas où » PocketBase ne réponde pas. Cela faisait une deuxième version de mes contenus à maintenir, qui ne correspondait plus à la base dès que je modifiais un projet.

Semaine 4 (29/10/2026)
Je n'ai pas avancé sur le code cette semaine.

Semaine 5 (06/11/2026)
J'ai changé d'outil d'IA : je continue mon portfolio avec Claude Code, et je lui ai demandé d'avancer étape par étape.
J'ai intégré la section « Contactez-moi » d'après ma maquette, puis je l'ai reliée à PocketBase : les messages sont enregistrés dans une collection `Messages` que tout le monde peut remplir, mais que je suis le seul à pouvoir lire.
Ce qui a coincé : ma base de données PocketBase (`pb_data`), avec mon compte admin et bientôt les messages des visiteurs, était suivie par Git et donc publiée sur mon GitHub public. Je l'ai ajoutée au `.gitignore` avec l'exécutable de PocketBase. Seules les migrations, qui décrivent la structure de la base, restent sur GitHub.
J'ai créé la page « Mes projets » avec des filtres (Tout, Développement web, Communication, Design) et j'ai regroupé la carte de projet dans un composant réutilisé sur l'accueil et sur cette page.
J'ai ajouté un champ `Image_detail` dans PocketBase, car mes vignettes n'étaient pas d'assez bonne qualité pour être affichées en grand sur les pages projet.
Ce qui a coincé : la page détail n'était pas adaptée au desktop, les images étaient beaucoup trop grandes. J'ai limité la largeur du contenu et je l'ai aligné sur le logo du header. Ensuite, C'est Ma Cam' et Olyvia ne s'affichaient pas comme Odysignes : je n'avais pas saisi les listes de la même façon dans PocketBase (listes à puces pour l'un, paragraphes pour les autres). Le code transforme maintenant automatiquement les paragraphes en liste, donc le rendu est le même quelle que soit la saisie.
J'ai intégré la page Mentions légales d'après ma maquette.

Semaine 6 (12/11/2026)
J'ai posé les bases d'un site propre, un titre et une description différents pour chaque page, la police Instrument Sans de ma maquette qui n'était pas chargée, les couleurs rangées en variables, un lien « Aller au contenu » pour la navigation au clavier.
J'ai retravaillé les cartes de projets plusieurs fois. Les images étaient rognées : je voulais qu'elles soient complètes, de la même taille, avec une bordure blanche identique sur les quatre côtés et alignées en haut. J'ai refusé l'effet « sticker » proposé par l'IA, que je ne trouvais pas adapté.
J'ai ajouté une case « Accueil » dans PocketBase pour choisir moi-même les projets affichés sur l'accueil, et j'ai remplacé Olyvia par TiK TaK. J'ai aussi ajouté mes projets TiK TaK et Thermo Viz avec leurs visuels.
J'ai refait le bandeau des pages projet : je n'aimais pas le fond gris foncé, je l'ai passé sur fond clair, plus compact, avec le bouton retour intégré. J'ai enlevé les numéros de projets que je ne trouvais pas pertinents, et remplacé « Projet suivant — Odysignes → », par un carrousel compact des autres projets.
J'ai réduit le footer, je l'ai passé sur fond clair et j'ai remplacé les icônes par mes propres SVG. J'ai corrigé mon e-mail et mon lien LinkedIn.
J'ai ajouté des animations : l'apparition du Hero au chargement, la flèche « Scroll », une barre de progression de lecture dans le bas du header, et l'apparition des sections au défilement.
Ce qui a coincé : la barre de progression ne s'affichait pas. Tailwind 4 utilise la propriété CSS `scale` et le script modifiait `transform` : les deux s'annulaient. J'ai aussi eu des images vides sur les cartes, car la bibliothèque `sharp`, qui optimise les images.

Semaine 6 bis (13/11/2026 → 16/11/2026)
J'ai fait un état des lieux de mon site par rapport à l'énoncé, puis un audit qualité (voir QUALITE.md). J'ai optimisé les images : elles sont converties en WebP au moment du build, par exemple celle d'Odysignes passe de 921 Ko à 95 Ko. J'ai ajouté un sitemap, un `robots.txt`, une page 404, un favicon avec un « M » dans ma typographie Londrina Solid.
J'ai complété les mentions légales avec la partie RGPD sur les données du formulaire de contact.
Ce qui a coincé : quand mon PocketBase était fermé, le site plantait complètement. Maintenant, le site fonctionne et un message « Projets momentanément indisponibles » remplace les projets.
J'ai ajouté mon CV en PDF : un bouton « Mon CV » en haut à droite du header et un bouton « Télécharger mon CV » dans la section Contact. J'ai ajouté mes dates de stage dans le Hero et dans la section À propos.
Ce qui a coincé : des espaces disparaissaient dans mes textes (« digitalede », « écrivez-moiou »). Astro supprime les retours à la ligne collés à une balise. Je les ai remplacés par des espaces forcés `{' '}` et j'ai fait vérifier toutes les pages du site.
J'ai rédigé mes livrables : ce journal, IA.md, QUALITE.md et le README.

Semaine 7 (17/11/2026)
J'ai commencé la mise en ligne de mon portfolio sur un VPS.
Ce qui a coincé : j'ai des problèmes avec mon VPS, et il m'est pour l'instant impossible de finaliser le déploiement. Le site fonctionne en local et se génère sans erreur, mais il n'est pas encore accessible en ligne.
Tant que le déploiement n'est pas terminé, je ne peux pas renseigner l'hébergeur dans mes mentions légales, ni mettre en ligne mon PocketBase pour que le formulaire de contact fonctionne, ni mesurer les scores Lighthouse sur la version en ligne.
