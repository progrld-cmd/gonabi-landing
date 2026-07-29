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
  /**
   * Intertitre affiché au-dessus de cette entrée dans le sous-menu. À poser sur
   * la première entrée d'un bloc uniquement — les suivantes l'omettent.
   */
  group?: string;
}

export interface NavGroup {
  label: string;
  /** Page d'index de la rubrique. Absent = entrée purement conteneur. */
  href?: string;
  children?: NavLink[];
}

/** URL du formulaire de démo — à remplacer quand la destination sera arbitrée. */
export const DEMO_HREF = '#demo-a-definir';

/**
 * ⚠️ Ne jamais présenter l'IA comme « illimitée » ni « sans compteur ».
 * Aucune limite n'est contractualisée dans les CGV : promettre l'illimité
 * expose l'éditeur en cas d'usage massif. L'IA se décrit comme une
 * fonctionnalité qui fait gagner du temps, jamais comme un argument tarifaire.
 */
export const mainNav: NavGroup[] = [
  {
    label: 'Solution',
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
        description: 'Pré-rédigées à partir du parcours, entièrement modifiables.',
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
    label: 'Pour qui',
    href: '/solutions',
    children: [
      {
        label: 'Cabinets RH',
        href: '/solutions/cabinets-rh',
        description: 'Reprendre le dossier d’un collègue sans mener l’enquête.',
        group: 'Par type de structure',
      },
      {
        label: 'Organismes de formation',
        href: '/solutions/organismes-de-formation',
        description: 'Ce que votre logiciel de gestion ne couvre pas.',
      },
      {
        label: 'Indépendants',
        href: '/solutions/coachs-independants',
        description: 'Vous faites tout. Ce qui se répète doit s’automatiser.',
      },
      {
        label: 'Insertion professionnelle',
        href: '/solutions/insertion-professionnelle',
        description: 'Accompagner en volume et le justifier au financeur.',
      },
      {
        label: 'Bilan de compétences',
        href: '/cas-usage/bilan-de-competences',
        description: 'Les trois phases, la synthèse et le suivi à six mois.',
        group: 'Par prestation',
      },
      {
        label: 'Outplacement',
        href: '/cas-usage/outplacement',
        description: 'Accompagner un départ, et en rendre compte à l’employeur.',
      },
      {
        label: 'Coaching',
        href: '/cas-usage/coaching',
        description: 'Structurer un accompagnement qui n’a pas de cadre réglementaire.',
      },
      {
        label: 'Orientation des jeunes',
        href: '/cas-usage/orientation-jeunes',
        description: 'Post-bac et premiers choix, avec des publics peu autonomes.',
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

/**
 * Pages « par prestation ». Elles vivent dans le sous-menu Solutions, sous
 * l'intertitre « Par prestation » : Solutions segmente par type de structure,
 * Cas d'usage segmente par prestation vendue.
 */
export const casUsageNav: NavLink[] = [
  {
    label: 'Bilan de compétences',
    href: '/cas-usage/bilan-de-competences',
    description:
      'La prestation la plus encadrée : trois phases, document de synthèse et suivi à six mois.',
  },
  {
    label: 'Outplacement',
    href: '/cas-usage/outplacement',
    description:
      'Un accompagnement financé par l’employeur, à qui il faut rendre compte sans trahir la confidentialité.',
  },
  {
    label: 'Coaching',
    href: '/cas-usage/coaching',
    description:
      'Pas de cadre réglementaire imposé, donc tout le cadre à poser soi-même.',
  },
  {
    label: 'Orientation des jeunes',
    href: '/cas-usage/orientation-jeunes',
    description:
      'Des publics jeunes, souvent peu autonomes, et des prescripteurs à qui rendre des comptes.',
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
      { label: 'Indépendants', href: '/solutions/coachs-independants' },
      { label: 'Insertion professionnelle', href: '/solutions/insertion-professionnelle' },
      { label: 'Migrer vers Gonabi', href: '/migrer-vers-gonabi' },
      { label: 'Cas d’usage', href: '/cas-usage' },
      { label: 'Bilan de compétences', href: '/cas-usage/bilan-de-competences' },
      { label: 'Outplacement', href: '/cas-usage/outplacement' },
      { label: 'Coaching', href: '/cas-usage/coaching' },
      { label: 'Orientation des jeunes', href: '/cas-usage/orientation-jeunes' },
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
