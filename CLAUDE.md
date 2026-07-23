# Instructions permanentes — Gonabi landing page

## Contexte
Site vitrine de Gonabi (SaaS B2B, orientation professionnelle, cible prioritaire : cabinets et
organismes de formation de 8 à 25 consultants). Site statique HTML/CSS, sans framework, déployé
sur Hostinger.

## Charte graphique (à respecter strictement)
- Rouge primaire : `#EE4036`
- Bleu accent : `#1BAFD0`
- Fond crème : `#F9F4EC`
- Fond crème clair : `#fdfaf5`
- Teal foncé / texte : `#012B30`
- Gris texte secondaire : `#5a6b6d`
- Titres : police "Lora" (serif) — Corps de texte : police "Inter" (sans-serif)

## Ce que tu peux décider seul
- Structure HTML, mise en page, wording dans le cadre du positionnement validé
- Corrections de bugs évidents (liens cassés, assets manquants, responsive)
- Optimisations SEO techniques (voir section SEO ci-dessous)

## Ce que tu dois systématiquement remonter (ne jamais faire sans validation explicite)
- Toute modification de pricing affiché publiquement
- Toute reformulation du positionnement "IA illimitée" (différenciateur validé, ne pas diluer)
- Toute promesse ou statistique non vérifiable dans les documents du projet
- Ne jamais merger sur `main` ni déployer en production sans review explicite de Gérald.
  Travaille toujours sur une branche, ouvre une PR, laisse-le approuver.

## SEO — priorités identifiées (synthèse du support de formation fourni)
Trois piliers à garder en tête pour toute évolution du site :
1. **Vitesse** — viser un score PageSpeed élevé (mobile et desktop), compresser les images avant
   de les ajouter à `assets/`.
2. **Arborescence / structure sémantique** — organiser les contenus en silos thématiques clairs
   (cocon sémantique) plutôt qu'en pages isolées, avec un maillage interne cohérent.
3. **Notoriété / backlinks** — hors périmètre technique direct, mais garder les URLs stables
   (éviter de casser des liens existants lors de refontes).

## Assets manquants connus
- `assets/partners/french_tech_grayscale.png` référencé dans `index.html` mais absent du repo.
  Ne pas inventer ce logo — demander le fichier ou retirer la référence.
