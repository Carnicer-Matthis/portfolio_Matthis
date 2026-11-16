// Accès centralisé à PocketBase (utilisé au build par les pages et composants)

// Adresse de PocketBase : variable d'environnement PUBLIC_PB_URL (fichier .env), sinon le serveur local.
// Pour la mise en ligne, il suffira de renseigner PUBLIC_PB_URL avec l'adresse du PocketBase hébergé.
export const PB_URL: string = import.meta.env.PUBLIC_PB_URL ?? 'http://127.0.0.1:8090';

/** Un enregistrement de la collection "Projet". */
export interface ProjectRecord {
  id: string;
  collectionId: string;
  Numero: number;
  Nom_projet: string;
  Sous_titre: string;
  Parcours: string;
  Titre_contexte: string;
  Description_contexte: string;
  Problematique: string;
  Titre_solution: string;
  Elements_solution: string;
  Role: string;
  Technologies: string;
  Competences: string;
  Equipe: string;
  Livrables: string;
  Resultat: string;
  URL_resultat: string;
  Image_projet?: string;
  Image_detail?: string[];
  /** Case à cocher dans PocketBase : projet affiché sur la page d'accueil. */
  Accueil?: boolean;
}

/** Résultat d'une lecture des projets : la liste + l'état de PocketBase. */
export interface ProjectsResult {
  projects: ProjectRecord[];
  /** false si PocketBase ne répond pas (serveur éteint, mauvaise adresse...). */
  online: boolean;
}

// Petit cache : plusieurs composants lisent les projets pour une même page,
// on n'interroge PocketBase qu'une fois toutes les 5 secondes (et on n'attend pas 2 s à chaque fois s'il est éteint).
let cache: { at: number; promise: Promise<ProjectsResult> } | null = null;

async function fetchProjects(): Promise<ProjectsResult> {
  try {
    const res = await fetch(`${PB_URL}/api/collections/Projet/records?sort=Numero&perPage=200`, {
      signal: AbortSignal.timeout(2000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return { projects: data.items ?? [], online: true };
  } catch (error) {
    console.warn(`PocketBase injoignable (${PB_URL}) : les projets ne seront pas affichés.`, error);
    return { projects: [], online: false };
  }
}

/** Projets triés par numéro + état de PocketBase. Ne plante jamais : liste vide si PocketBase est éteint. */
export function getProjectsResult(): Promise<ProjectsResult> {
  if (!cache || Date.now() - cache.at > 5000) {
    cache = { at: Date.now(), promise: fetchProjects() };
  }
  return cache.promise;
}

/** Tous les projets triés par numéro (liste vide si PocketBase est éteint). */
export async function getProjects(): Promise<ProjectRecord[]> {
  return (await getProjectsResult()).projects;
}

/**
 * Les 3 projets de la page d'accueil : ceux cochés "Accueil" dans PocketBase.
 * Si aucun n'est coché, on prend les 3 premiers.
 */
export async function getHomeProjects(limit = 3): Promise<ProjectsResult> {
  const { projects, online } = await getProjectsResult();
  const selection = projects.filter((projet) => projet.Accueil);
  return { projects: (selection.length ? selection : projects).slice(0, limit), online };
}

function fileUrl(projet: ProjectRecord, file: string): string {
  return `${PB_URL}/api/files/${projet.collectionId}/${projet.id}/${file}`;
}

/** Vignette des cartes projet (Image_projet). */
export function projectImageUrl(projet: ProjectRecord): string | null {
  return projet.Image_projet ? fileUrl(projet, projet.Image_projet) : null;
}

/** Toutes les images détail d'un projet (champ multi-fichiers Image_detail). */
export function projectDetailImageUrls(projet: ProjectRecord): string[] {
  return (projet.Image_detail ?? []).map((file) => fileUrl(projet, file));
}

/**
 * Uniformise un champ "liste" de l'éditeur PocketBase.
 * Que les éléments soient saisis en liste à puces (<ul><li>) ou en paragraphes (<p>),
 * on renvoie toujours une liste <ul><li> pour avoir le même rendu sur tous les projets.
 */
export function toListHtml(html: string | undefined): string {
  if (!html) return '';
  if (/<li[\s>]/i.test(html)) return html;

  const items = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => match[1].trim())
    .filter((item) => item && item !== '<br>');

  // Texte brut sans balises : une ligne = un élément
  const list = items.length ? items : html.split(/\n+/).map((l) => l.trim()).filter(Boolean);

  return `<ul>${list.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

