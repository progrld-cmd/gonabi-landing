---
title: "Exemple de structure d'article"
description: "Article de démonstration : il montre le frontmatter attendu et la mise en forme disponible. À supprimer une fois les premiers vrais articles publiés."
date: 2026-07-28
categorie: "Produit"
tags: ["exemple", "gabarit"]
auteur: "[À FOURNIR]"
draft: false
---

Ce fichier n'est pas un contenu éditorial : il sert de gabarit. Copier-coller son
frontmatter pour créer un nouvel article dans `src/data/blog/`, le renommer, et la
page `/ressources/blog/<nom-du-fichier>` est générée au build suivant.

## Un titre de niveau 2

Le corps de l'article s'écrit en Markdown standard. La hiérarchie des titres doit
partir de `##` : le `#` est réservé au H1, généré automatiquement à partir du champ
`title` du frontmatter.

### Un titre de niveau 3

- Les listes fonctionnent normalement.
- Les [liens internes](/produit) participent au maillage entre les silos.

## Champs du frontmatter

| Champ       | Obligatoire | Remarque                                          |
| ----------- | ----------- | ------------------------------------------------- |
| `title`     | oui         | Sert de H1 et de balise `<title>`.                |
| `description` | oui       | Sert de meta description et d'accroche en liste.  |
| `date`      | oui         | Format `AAAA-MM-JJ`.                              |
| `categorie` | oui         | Valeurs autorisées définies dans `content.config.ts`. |
| `tags`      | non         | Tableau de chaînes.                               |
| `draft`     | non         | `true` masque l'article des index et du sitemap.  |
