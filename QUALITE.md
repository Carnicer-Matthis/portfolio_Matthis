# Grille de contrôle qualité

Cette grille regroupe les critères que j'ai retenus pour mon portfolio, ce que j'ai vérifié, comment, et ce que j'ai corrigé.

Je les ai choisis à partir de ce qui caractérise mon site :
- des projets qui viennent d'une base de données (PocketBase), avec beaucoup d'images de projets ;
- un formulaire de contact qui collecte des données personnelles ;
- une charte graphique orange et crème, avec une typographie très marquée (Londrina Solid) ;
- des animations, qui ne doivent gêner personne ;
- des projets réalisés en groupe.

Outils utilisés :
- calcul des contrastes selon la formule WCAG ;
- analyse des pages générées (`npm run build`, dossier `dist/`) avec un script qui vérifie les titres, les textes alternatifs et les espaces manquants ;
- mesure du poids des images avant et après optimisation ;
- navigation au clavier ;
- réglage « réduire les animations » du système.


## 1. Accessibilité

J'ai ajouté un lien « Aller au contenu », visible uniquement quand on navigue au clavier avec la touche Tab, qui permet de sauter le menu. Tous les liens, boutons et champs ont maintenant un contour orange quand ils sont sélectionnés au clavier. Sur les cartes de projets, la vignette, le titre et le bouton menaient au même endroit : j'ai retiré la vignette de la navigation au clavier pour ne pas passer trois fois sur le même lien.

J'ai vérifié dans les pages générées : un seul titre `<h1>` par page, la langue `fr`, et aucune image sans texte alternatif. L'image de fond du Hero avait le texte « Arrière-plan Hero », lu inutilement par les lecteurs d'écran : elle est maintenant marquée comme décorative. Les icônes de mes réseaux, les flèches du carrousel et le bouton CV ont un nom pour les lecteurs d'écran. Les champs du formulaire ont leur libellé, et le message de confirmation d'envoi est annoncé aux lecteurs d'écran.

J'ai calculé les contrastes de mes couleurs sur le fond crème. Mon texte principal (12,8:1), mon gris foncé (7,2:1) et mon gris clair (4,7:1) sont au-dessus du minimum de 4,5:1. Le texte blanc sur mes boutons orange n'était qu'à 2,2:1 : je l'ai remplacé par un texte foncé, qui atteint 5,9:1.

Mon orange de marque (`#FA855A`) utilisé en texte n'atteint que 2,15:1. J'ai testé un orange plus foncé (4,8:1), mais je ne reconnaissais plus ma charte et je suis revenu à mon orange. J'assume ce choix : l'orange sert surtout aux grands titres et aux éléments décoratifs, tout le texte courant est en gris foncé, et la page active du menu est aussi signalée par un soulignement, pas seulement par la couleur.

En activant « réduire les animations », toutes les animations se coupent, y compris les apparitions au défilement, qui s'affichent directement. Si JavaScript est désactivé, rien n'est caché.

J'ai masqué la barre de défilement du navigateur pour la remplacer par une barre de progression orange dans le bas du header. Le défilement reste possible à la molette, au clavier et au doigt, mais c'est un repère standard en moins : c'est un choix graphique que j'assume.


## 2. Responsive

Le site s'adapte à trois tailles : une colonne sur téléphone, deux sur tablette, trois sur ordinateur pour les cartes de projets. Sur téléphone, le menu se replie dans un bouton, le bouton « Mon CV » reste visible, et le carrousel de projets montre une carte et le début de la suivante pour inviter à glisser.

Les grands textes du Hero utilisent des tailles fluides (`clamp()`), pour que « MATTHIS » ne déborde pas de l'écran. Les images sont chargées dans plusieurs tailles et le navigateur choisit celle qui correspond à l'écran.

Les tests complets sur un vrai téléphone restent à faire sur la version en ligne, que je n'ai pas encore pu déployer à cause de problèmes avec mon VPS.


## 3. Sobriété et performance

Mon site est statique : toutes les pages sont générées à l'avance par Astro. PocketBase n'est interrogé qu'au moment de la génération du site, pas à chaque visite.

Mes images de projets étaient très lourdes. Elles sont maintenant téléchargées depuis PocketBase et converties en WebP, en plusieurs largeurs, au moment du build. Par exemple, la vignette d'Odysignes passe de 921 Ko à 95 Ko, celle de C'est Ma Cam' de 319 Ko à 115 Ko et celle de TiK TaK de 208 Ko à 44 Ko. Les images de mon Hero et de la section À propos étaient aussi servies dans leur taille d'origine : elles ont maintenant plusieurs tailles adaptées. Les images qui ne sont pas visibles au chargement de la page ne se chargent qu'au moment où l'on s'en approche.

Certains visuels de projets étaient trop petits et apparaissaient flous une fois agrandis. Le site lit maintenant leur taille réelle et ne les affiche jamais plus grands que ce que leur résolution permet.

Mes polices passaient par Google Fonts, donc par un autre serveur. Je les héberge maintenant sur mon site, en ne gardant que les graisses que j'utilise (132 Ko au total).

Je n'utilise pas de framework JavaScript dans le navigateur : seulement de petits scripts pour le menu mobile, les filtres, le formulaire, le carrousel et les animations. La barre de progression et les apparitions au défilement utilisent des outils du navigateur (`requestAnimationFrame`, `IntersectionObserver`) qui évitent de faire des calculs à chaque mouvement de la molette.

Mon CV en PDF pèse 1,2 Mo, c'est encore lourd : je dois le réexporter en qualité web.


## 4. Référencement

Toutes mes pages s'appelaient « Portfolio Matthis ». Chaque page a maintenant son propre titre et sa propre description, ce que Google affiche dans ses résultats. Pour les pages projet, le titre et la description viennent directement de PocketBase, par exemple « Odysignes — Plateforme LSF gamifiée | Matthis Carnicer ».

Chaque page a un seul grand titre (`<h1>`). J'ai ajouté un plan du site (sitemap) généré automatiquement et un fichier `robots.txt` qui l'indique à Google. Chaque page indique aussi son adresse officielle (adresse canonique).

Quand on tape une adresse qui n'existe pas, une page « Cette page n'existe pas » s'affiche, avec un bouton vers l'accueil et vers les projets. Elle est marquée pour ne pas apparaître dans Google.

Comme je vais partager mon portfolio sur LinkedIn, j'ai ajouté les balises Open Graph : un aperçu s'affiche avec le titre, la description et mon portrait. J'ai aussi remplacé le favicon d'Astro par un « M » dans ma typographie, sur mon orange.

Les adresses de mes pages projet utilisent encore l'identifiant PocketBase (par exemple `/projets/1zje4st8n7elkvj`) au lieu du nom du projet : c'est une amélioration que je pourrai faire plus tard.


## 5. Conformité juridique

Ma base de données PocketBase, qui contient mon compte admin et les messages du formulaire, était suivie par Git et donc publiée sur mon GitHub public. Je l'ai retirée du suivi et ajoutée au `.gitignore`, avec l'exécutable de PocketBase. Seules les migrations, qui décrivent la structure de la base, restent publiques. Dans PocketBase, tout le monde peut envoyer un message, mais je suis le seul à pouvoir les lire, les modifier ou les supprimer.

Comme mon formulaire de contact récupère un prénom, un e-mail et un message, j'ai expliqué dans les mentions légales ce que je fais de ces données (RGPD) : à quoi elles servent, où elles sont stockées, combien de temps je les garde (12 mois maximum), quels sont les droits des visiteurs et comment contacter la CNIL.

Mon site n'utilise aucun cookie ni outil de statistiques. Par contre, Google Fonts envoyait l'adresse IP des visiteurs à Google : j'héberge maintenant les polices directement sur mon site. Je n'ai donc pas besoin de bandeau cookies.

Mes mentions légales disaient que tous les contenus m'appartenaient. J'ai ajouté une partie « Crédits » : les polices et leur licence (SIL Open Font License), et le fait que plusieurs projets ont été réalisés en équipe, avec mon rôle précisé sur chaque page projet. Les outils que j'utilise sont cités dans le README avec leur licence.

L'hébergeur n'est pas encore renseigné dans mes mentions légales : je ne peux le faire qu'une fois le déploiement terminé, ce qui est bloqué pour l'instant par des problèmes avec mon VPS. Mon adresse et mon numéro de téléphone sont visibles dans les mentions légales et dans mon CV : je les laisse pour ma recherche de stage, en sachant qu'en tant que particulier, la loi me permettrait de ne pas les publier.

Enfin, les liens qui s'ouvrent dans un nouvel onglet sont sécurisés avec `rel="noopener"`, et l'usage de l'IA est déclaré dans IA.md.
