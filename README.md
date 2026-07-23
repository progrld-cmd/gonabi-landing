# Gonabi — Landing page (gonabi.fr)

Site vitrine statique de Gonabi (SaaS B2B d'orientation professionnelle). Hébergé sur Hostinger.

## Structure

```
index.html                       Page d'accueil
mentions-legales.html
cgu-cgv.html
politique-confidentialite.html
politique-cookies.html
assets/logos/                    Logo Gonabi (horizontal + symbole/favicon)
assets/images/                   Visuels de la page d'accueil (hero, blocs fonctionnalités)
assets/partners/                 Logos partenaires en niveaux de gris
```

## ⚠️ Corrections apportées lors de la mise en repo (23/07/2026)

Deux références d'assets dans les fichiers HTML ne correspondaient pas au nom réel des fichiers fournis (probablement une désynchronisation entre le nommage local et ce qui a été uploadé) :

- `assets/logos/Gonabi_Logo Horizontal.png` → corrigé en `assets/logos/Gonabi_Logo_Horizontal.png`
- `assets/images/Hero visual.png` → corrigé en `assets/images/Hero_visual.png`

**À vérifier sur la version actuellement en ligne sur Hostinger** : si les fichiers réels sur le serveur portent les noms avec espace, ces deux images sont potentiellement cassées en production. Si c'est le cas, il suffit de renommer les fichiers sur Hostinger pour qu'ils correspondent aux nouveaux noms (sans espace), ou de redéployer ce repo tel quel.

## ⚠️ Asset manquant

`index.html` référence `assets/partners/french_tech_grayscale.png`, qui n'a pas été fourni. Le logo French Tech n'est donc pas inclus dans ce repo — à ajouter manuellement (fichier protégé par la marque French Tech, je ne le génère pas) ou à retirer de la page si ce n'est plus un partenaire à afficher.

## Déploiement

Actuellement : upload manuel des fichiers sources vers Hostinger.
Objectif (voir CLAUDE.md) : automatiser le déploiement vers Hostinger via une GitHub Action déclenchée au merge sur `main`, pour permettre un cycle édition → review → déploiement entièrement pilotable depuis mobile.
