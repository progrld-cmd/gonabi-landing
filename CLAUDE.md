# Instructions permanentes — Gonabi, site gonabi.fr

## Contexte
Site vitrine de Gonabi (SaaS B2B, orientation professionnelle, cible prioritaire : cabinets et
organismes de formation de 8 à 25 consultants). Site **Astro** en sortie 100 % statique, déployé
sur Hostinger par envoi du dossier `dist/`.

Lire `README.md` avant toute modification : il documente l'arborescence, la règle
`build.format: 'preserve'` (toute page de contenu s'écrit en `<slug>/index.astro`) et
l'ajout de contenu Markdown.

## Charte graphique (à respecter strictement)
- Rouge primaire : `#EE4036`
- Bleu accent : `#1BAFD0`
- Fond crème : `#F9F4EC`
- Fond crème clair : `#fdfaf5`
- Teal foncé / texte : `#012B30`
- Gris texte secondaire : `#5a6b6d`
- Titres : police "Lora" (serif) — Corps de texte : police "Inter" (sans-serif)

Ces valeurs sont centralisées dans `src/styles/tokens.css`. **Ne jamais écrire une couleur ou
une police en dur dans un composant** : utiliser les variables `--gnb-*`. Modifier la charte
se fait dans ce seul fichier.

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

## URLs à ne jamais changer
Les 4 documents légaux sont indexés sous leurs URLs en `.html` :
`/mentions-legales.html`, `/cgu-cgv.html`, `/politique-confidentialite.html`,
`/politique-cookies.html`. Les fichiers `src/pages/<slug>.astro` correspondants ne doivent
être ni renommés, ni déplacés dans un sous-dossier.

Leur contenu est repris tel quel dans `src/legal/*.html` : c'est du texte juridique, il ne se
reformule pas sans validation.

## Placeholders
Le squelette du site contient des marqueurs `[À FOURNIR]` (classe CSS `.gnb-todo`) partout où
un contenu reste à écrire. Ne jamais les remplacer par du contenu inventé — en particulier
chiffres, statistiques, témoignages, noms de personnes, tarifs et certifications. Un marqueur
qui subsiste vaut mieux qu'une affirmation non vérifiée.

Recenser ce qu'il reste à remplir : `grep -rn "À FOURNIR" src/`

## Assets
- `assets/partners/french_tech_grayscale.png` était manquant lors de la mise en repo ; le
  fichier fourni par Gérald a été ajouté dans `public/assets/partners/` le 28/07/2026.
- Compresser toute nouvelle image avant de l'ajouter à `public/assets/` (cf. pilier vitesse).
