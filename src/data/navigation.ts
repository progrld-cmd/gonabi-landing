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
        description: 'Une batterie de tests passée en autonomie, exploitable en séance.',
      },
      {
        label: 'Parcours personnalisés',
        href: '/produit/parcours-personnalises',
        description: 'Des trames réutilisables, adaptées à chaque bénéficiaire.',
      },
      {
        label: 'Synthèses IA',
        href: '/produit/syntheses-ia',
        description: 'La synthèse pré-rédigée à partir du parcours. Sans compteur.',
      },
      {
        label: 'Portefeuille de compétences',
        href: '/produit/portefeuille-competences',
        description: 'Les compétences identifiées, structurées et transférables.',
      },
      {
        label: 'Explorateur de métiers',
        href: '/produit/explorateur-metiers',
        description: 'Les fiches métiers France Travail, croisées avec le profil.',
      },
      {
        label: 'Bibliothèque de ressources',
        href: '/produit/bibliotheque-ressources',
        description: 'Vos supports et les nôtres, assignables au bon moment.',
      },
      {
        label: 'Conformité Qualiopi',
        href: '/produit/conformite-qualiopi',
        description: 'Chaque séance produit ses preuves, sans saisie en plus.',
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
        description: 'Plusieurs consultants, une vue commune sur les accompagnements.',
      },
      {
        label: 'Organismes de formation',
        href: '/solutions/organismes-de-formation',
        description: 'Accompagner et rester auditable, dans le même outil.',
      },
      {
        label: 'Coachs indépendants',
        href: '/solutions/coachs-independants',
        description: 'La structure d’un cabinet, sans l’équipe qui va avec.',
      },
      {
        label: 'Insertion professionnelle',
        href: '/solutions/insertion-professionnelle',
        description: 'Missions locales, PLIE : suivre des volumes et en rendre compte.',
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
        description: 'Articles de fond sur l’accompagnement et l’orientation.',
      },
      {
        label: 'Nouveautés',
        href: '/nouveautes',
        description: 'Les évolutions récentes de la plateforme.',
      },
      {
        label: 'Témoignages',
        href: '/temoignages',
        description: 'Ce que disent les structures qui utilisent Gonabi.',
      },
      {
        label: 'Migrer vers Gonabi',
        href: '/migrer-vers-gonabi',
        description: 'Changer d’outil sans perdre votre historique.',
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
        description: 'Les personnes derrière la plateforme.',
      },
      {
        label: 'Sécurité & RGPD',
        href: '/a-propos/securite-rgpd',
        description: 'Où vivent les données, qui y accède, combien de temps.',
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
