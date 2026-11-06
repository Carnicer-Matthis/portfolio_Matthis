// Accès centralisé à PocketBase (utilisé au build par les pages et composants)
import { fallbackProjects } from '../data/fallbackProjects';

export const PB_URL = 'http://127.0.0.1:8090';

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
}

/** Tous les projets triés par numéro. Données de secours si PocketBase est injoignable. */
export async function getProjects(): Promise<ProjectRecord[]> {
  try {
    const res = await fetch(`${PB_URL}/api/collections/Projet/records?sort=Numero&perPage=200`, {
      signal: AbortSignal.timeout(2000),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.items?.length) return data.items;
    }
  } catch {
    // PocketBase éteint : on passe aux données de secours
  }
  console.warn('PocketBase non disponible, utilisation des données de secours.');
  return fallbackProjects;
}

function fileUrl(projet: ProjectRecord, file: string): string {
  return `${PB_URL}/api/files/${projet.collectionId}/${projet.id}/${file}`;
}

/** Vignette des cartes projet (Image_projet). */
export function projectImageUrl(projet: ProjectRecord): string | null {
  return projet.Image_projet ? fileUrl(projet, projet.Image_projet) : null;
}

/** Image haute qualité de la page détail (Image_detail), sinon la vignette. */
export function projectDetailImageUrl(projet: ProjectRecord): string | null {
  const file = projet.Image_detail?.[0] || projet.Image_projet;
  return file ? fileUrl(projet, file) : null;
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

/** Numéro sur deux chiffres : 1 → "01". */
export function formatNumero(numero: number): string {
  return String(numero).padStart(2, '0');
}
