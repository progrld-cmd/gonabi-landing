// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Les 4 pages légales déjà indexées sortent en fichiers `.html` réels.
 * Astro les route en interne sans extension (`/cgu-cgv`), il faut donc
 * rétablir l'extension dans le sitemap pour qu'il pointe la vraie URL.
 */
const PAGES_LEGALES = [
  'mentions-legales',
  'cgu-cgv',
  'politique-confidentialite',
  'politique-cookies',
];

// Sortie 100% statique : `npm run build` produit dist/, à envoyer tel quel sur Hostinger.
export default defineConfig({
  site: 'https://gonabi.fr',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // `preserve` reproduit l'arborescence de src/pages telle quelle :
    //  - `tarifs/index.astro`      -> `tarifs/index.html`      (URL /tarifs)
    //  - `mentions-legales.astro`  -> `mentions-legales.html`  (URL identique à l'actuelle)
    // C'est la seule valeur qui permet aux pages légales de rester des fichiers
    // `.html` réels : `directory` produirait `mentions-legales.html/index.html`,
    // soit une URL différente de celle déjà indexée.
    // Corollaire : toute page de contenu doit être écrite en `<slug>/index.astro`,
    // sinon elle sortirait en `<slug>.html`.
    format: 'preserve',
  },
  integrations: [
    sitemap({
      // La page 404 n'a rien à faire dans le sitemap.
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const url = new URL(item.url);
        const slug = url.pathname.replace(/^\/|\/$/g, '');
        if (PAGES_LEGALES.includes(slug)) {
          item.url = new URL(`/${slug}.html`, url.origin).toString();
        }
        return item;
      },
    }),
  ],
});
