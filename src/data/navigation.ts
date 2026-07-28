/**
 * Source unique de vérité pour l'arborescence du site.
 * Header, footer et pages d'index de rubrique lisent toutes ce fichier :
 * ajouter une page ici la fait apparaître partout où c'est pertinent.
 */

export interface NavLink {
  label: string;
  href: string;
  /** Courte accroche affichée dans le méga-menu et les pages d'index. */
  description?: string;
}

export interface NavGroup {
  label: string;
  /** Page d'index de la rubrique. Absent = entrée purement conteneur. */
  href?: string;
  children?: NavLink[];
}

/** URL du formulaire de démo — à remplacer quand la destination sera arbitrée. */
export const DEMO_HREF = '#demo-a-definir';

export const mainNav: NavGroup[] = [
  {
    label: 'Produit',
    href: '/produit',
    children: [
      {
        label: 'Tests psychométriques',
        href: '/produit/tests-psychometriques',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Parcours personnalisés',
        href: '/produit/parcours-personnalises',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Synthèses IA',
        href: '/produit/syntheses-ia',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Portefeuille de compétences',
        href: '/produit/portefeuille-competences',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Explorateur de métiers',
        href: '/produit/explorateur-metiers',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Bibliothèque de ressources',
        href: '/produit/bibliotheque-ressources',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Conformité Qualiopi',
        href: '/produit/conformite-qualiopi',
        description: '[À FOURNIR] Accroche courte.',
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        label: 'Cabinets RH',
        href: '/solutions/cabinets-rh',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Organismes de formation',
        href: '/solutions/organismes-de-formation',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Coachs indépendants',
        href: '/solutions/coachs-independants',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Insertion professionnelle',
        href: '/solutions/insertion-professionnelle',
        description: '[À FOURNIR] Accroche courte.',
      },
    ],
  },
  {
    label: 'Tarifs',
    href: '/tarifs',
  },
  {
    label: 'Ressources',
    href: '/ressources',
    children: [
      {
        label: 'Blog',
        href: '/ressources/blog',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Nouveautés',
        href: '/nouveautes',
        description: 'Les évolutions récentes de la plateforme.',
      },
      {
        label: 'Témoignages',
        href: '/temoignages',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Migrer vers Gonabi',
        href: '/migrer-vers-gonabi',
        description: '[À FOURNIR] Accroche courte.',
      },
    ],
  },
  {
    label: 'À propos',
    href: '/a-propos',
    children: [
      {
        label: "L'équipe",
        href: '/a-propos/equipe',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Sécurité & RGPD',
        href: '/a-propos/securite-rgpd',
        description: '[À FOURNIR] Accroche courte.',
      },
      {
        label: 'Contact',
        href: '/contact',
        description: 'Nous écrire.',
      },
    ],
  },
];

/** Colonnes du footer. */
export const footerNav: NavGroup[] = [
  {
    label: 'Produit',
    children: [
      { label: 'Vue d’ensemble', href: '/produit' },
      { label: 'Tests psychométriques', href: '/produit/tests-psychometriques' },
      { label: 'Parcours personnalisés', href: '/produit/parcours-personnalises' },
      { label: 'Synthèses IA', href: '/produit/syntheses-ia' },
      { label: 'Portefeuille de compétences', href: '/produit/portefeuille-competences' },
      { label: 'Explorateur de métiers', href: '/produit/explorateur-metiers' },
      { label: 'Conformité Qualiopi', href: '/produit/conformite-qualiopi' },
      { label: 'Tarifs', href: '/tarifs' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Cabinets RH', href: '/solutions/cabinets-rh' },
      { label: 'Organismes de formation', href: '/solutions/organismes-de-formation' },
      { label: 'Coachs indépendants', href: '/solutions/coachs-independants' },
      { label: 'Insertion professionnelle', href: '/solutions/insertion-professionnelle' },
      { label: 'Migrer vers Gonabi', href: '/migrer-vers-gonabi' },
    ],
  },
  {
    label: 'Ressources',
    children: [
      { label: 'Toutes les ressources', href: '/ressources' },
      { label: 'Blog', href: '/ressources/blog' },
      { label: 'Bibliothèque de ressources', href: '/produit/bibliotheque-ressources' },
      { label: 'Nouveautés', href: '/nouveautes' },
      { label: 'Témoignages', href: '/temoignages' },
      { label: 'Réserver une démo', href: DEMO_HREF },
    ],
  },
  {
    label: 'Entreprise',
    children: [
      { label: 'À propos', href: '/a-propos' },
      { label: "L'équipe", href: '/a-propos/equipe' },
      { label: 'Sécurité & RGPD', href: '/a-propos/securite-rgpd' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

/**
 * Pages légales — les URLs en `.html` sont déjà indexées, elles doivent rester
 * identiques. Voir les fichiers `src/pages/*.html.astro`.
 */
export const legalNav: NavLink[] = [
  { label: 'Mentions légales', href: '/mentions-legales.html' },
  { label: 'CGU / CGV', href: '/cgu-cgv.html' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite.html' },
  { label: 'Gestion des cookies', href: '/politique-cookies.html' },
];
