import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Content Layer API (Astro 5+). Déposer un fichier Markdown dans
 * `src/data/blog/` ou `src/data/nouveautes/` suffit à créer la page :
 * les routes `/ressources/blog/[...slug]` et `/nouveautes/[...slug]`
 * les génèrent automatiquement au build.
 *
 * Les fichiers préfixés d'un `_` sont ignorés (brouillons).
 */

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Date de publication, au format YYYY-MM-DD. */
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    categorie: z.enum([
      'Orientation',
      'Bilan de compétences',
      'Métier du conseil',
      'Réglementaire',
      'Produit',
    ]),
    /** Mots-clés secondaires, utiles au maillage interne. */
    tags: z.array(z.string()).default([]),
    auteur: z.string().optional(),
    /** Image d'illustration, chemin depuis `public/`. */
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** Sort l'article des index et du sitemap sans le supprimer. */
    draft: z.boolean().default(false),
  }),
});

const nouveautes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/data/nouveautes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Date de mise en production, au format YYYY-MM-DD. */
    date: z.coerce.date(),
    categorie: z.enum(['Nouveauté', 'Amélioration', 'Correction', 'Sécurité']),
    /** Numéro de version affiché, si la release en porte un. */
    version: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, nouveautes };
