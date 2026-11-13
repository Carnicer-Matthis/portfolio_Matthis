// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Variables du fichier .env (PUBLIC_PB_URL, SITE_URL), avec des valeurs par défaut en local
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const PB_URL = env.PUBLIC_PB_URL ?? 'http://127.0.0.1:8090';

// https://astro.build/config
export default defineConfig({
  // Adresse publique du site : sert aux URL canoniques, au sitemap et à robots.txt.
  // À remplacer par ton nom de domaine lors de la mise en ligne (variable SITE_URL).
  site: env.SITE_URL ?? 'https://matthis-carnicer.fr',

  integrations: [sitemap()],

  image: {
    // Autorise Astro à télécharger et optimiser (webp, bonnes tailles) les images de PocketBase au build
    domains: [new URL(PB_URL).hostname],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
