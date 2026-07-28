# Gonabi — site gonabi.fr

Site vitrine de Gonabi (SaaS B2B d'orientation professionnelle), construit avec **Astro** en
sortie 100 % statique. Hébergé sur Hostinger.

## Démarrer

```bash
npm install
npm run dev      # serveur de dev sur http://localhost:4321
npm run build    # génère dist/ — c'est ce dossier qu'on envoie sur Hostinger
npm run preview  # sert dist/ localement pour vérifier avant envoi
npm run check    # vérification des types Astro/TypeScript
```

## Structure

```
src/
  pages/                     Une page = un fichier. Voir « Format des URLs » ci-dessous.
    index.astro              /
    produit/                 /produit + 7 pages fonctionnalités
    solutions/               /solutions + 4 pages par type de structure
    ressources/              /ressources + /ressources/blog (index + article)
    nouveautes/              /nouveautes (changelog, index + entrée)
    a-propos/                /a-propos + équipe + sécurité-rgpd
    tarifs/ demo/ contact/ temoignages/ migrer-vers-gonabi/
    mentions-legales.astro   -> /mentions-legales.html  (URL historique, ne pas renommer)
    cgu-cgv.astro            -> /cgu-cgv.html
    politique-confidentialite.astro
    politique-cookies.astro
    404.astro                -> /404.html
  layouts/
    BaseLayout.astro         <head> + SEO + header + footer. Toute page passe par là.
    PageLayout.astro         BaseLayout + hero standard (H1, chapô, fil d'Ariane).
    LegalLayout.astro        BaseLayout + mise en page des documents légaux.
  components/                Header (nav multi-niveaux + burger), Footer, Breadcrumbs, etc.
  data/
    navigation.ts            Arborescence du site — source unique du header, du footer
                             et des pages d'index de rubrique.
    blog/                    Articles de blog (Markdown)
    nouveautes/              Entrées de changelog (Markdown)
  legal/                     Fragments HTML des 4 documents légaux, repris tels quels
                             de l'ancien site. Contenu juridique : ne pas reformuler.
  styles/
    tokens.css               Charte graphique en variables CSS (source unique).
    global.css               Reset, utilitaires, boutons, cartes.
    legal.css                Styles propres aux pages légales.
  content.config.ts          Schémas des collections blog et nouveautes.
public/                      Copié tel quel dans dist/ : assets, robots.txt, .htaccess
```

## Format des URLs

`astro.config.mjs` utilise `build.format: 'preserve'`, qui reproduit l'arborescence de
`src/pages` à l'identique. Conséquence pratique :

| Fichier source | URL produite |
| --- | --- |
| `src/pages/tarifs/index.astro` | `/tarifs` |
| `src/pages/tarifs.astro` | `/tarifs.html` ❌ |
| `src/pages/mentions-legales.astro` | `/mentions-legales.html` ✅ (voulu) |

**Toute nouvelle page de contenu doit donc être créée en `<slug>/index.astro`.** Les quatre
documents légaux font exception : leurs URLs en `.html` sont déjà indexées et doivent être
conservées telles quelles, ils restent donc des fichiers `.astro` à plat.

## Ajouter un article ou une nouveauté

Déposer un fichier Markdown dans `src/data/blog/` ou `src/data/nouveautes/` — la page est
générée au build suivant, et l'entrée apparaît automatiquement dans les index.
Les schémas de frontmatter (champs obligatoires, valeurs autorisées pour `categorie`) sont
définis dans `src/content.config.ts`. Un fichier d'exemple documenté est présent dans chaque
dossier ; ils sont à supprimer à la première publication réelle.

Un fichier préfixé par `_` ou marqué `draft: true` est exclu des index et du sitemap.

## SEO

- `sitemap-index.xml` et `sitemap-0.xml` sont générés au build par `@astrojs/sitemap`.
  Les URLs des pages légales y sont réécrites avec leur extension `.html`.
- `robots.txt` est servi depuis `public/`.
- Chaque page déclare un `title`, une `meta description` et une URL canonique via `BaseLayout`.
- Un fil d'Ariane balisé (`BreadcrumbList`) est présent sur les pages de second niveau.

## Déploiement

Envoyer le contenu de `dist/` (et non les sources) à la racine web Hostinger.
`public/.htaccess` est copié dans `dist/` : il évite la redirection 301 systématique
d'Apache sur les URLs sans slash final, définit la page 404 et active compression et cache.

Objectif (voir `CLAUDE.md`) : automatiser ce déploiement via une GitHub Action déclenchée au
merge sur `main`.

## Historique

- **28/07/2026** — refonte : passage de la landing page statique mono-fichier à un site
  multipage Astro. L'ancien `index.html` et les 4 pages légales HTML sont conservés à la
  racine du repo à titre de référence ; ils ne sont plus déployés. Le contenu des documents
  légaux a été repris à l'identique dans `src/legal/`.
- **23/07/2026** — mise en repo de la landing page. Deux références d'assets ont été
  corrigées (`Gonabi_Logo Horizontal.png` → `Gonabi_Logo_Horizontal.png`,
  `Hero visual.png` → `Hero_visual.png`) : **à vérifier sur Hostinger**, où les fichiers
  peuvent encore porter les noms avec espace.
