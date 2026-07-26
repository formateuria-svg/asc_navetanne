// Central data source for ASC TERANGA FC — used across all pages.

export type NavItem = {label: string;to: string;};

export const NAV_ITEMS: NavItem[] = [
{ label: 'Accueil', to: '/' },
{ label: 'Le Club', to: '/club' },
{ label: 'Équipes', to: '/equipes' },
{ label: 'Calendrier', to: '/calendrier' },
{ label: 'Résultats', to: '/resultats' },
{ label: 'Galerie', to: '/galerie' },
{ label: 'Sponsors', to: '/sponsors' },
{ label: 'Rejoindre', to: '/rejoindre' },
{ label: 'Actualités', to: '/actualites' },
{ label: 'Boutique', to: '/boutique' },
{ label: 'Contact', to: '/contact' }];


export const CLUB = {
  name: 'ASC TERANGA FC',
  tagline: "L'avenir du football de notre quartier.",
  since: 2002,
  neighborhood: 'Grand-Yoff, Dakar',
  phone: '+221 77 123 45 67',
  whatsapp: '221771234567',
  email: 'contact@ascterangafc.sn',
  address: 'Terrain municipal de Grand-Yoff, Dakar, Sénégal',
  mapEmbed:
  'https://www.google.com/maps?q=Grand-Yoff,Dakar,Senegal&output=embed',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    youtube: 'https://youtube.com'
  }
};

export const HERO_VIDEO = "/35162a4f-0011-47a7-b36d-8b3bc5f4feb4.jpg";


export const IMAGES = {
  hero: "/35162a4f-0011-47a7-b36d-8b3bc5f4feb4.jpg",
  teamSenior: "/74f18cde-b94b-43d1-9603-b8ff8f46ba74.jpg",

  academy: "/e0192489-d0a0-4760-9c6b-ee5a9876067f.jpg",

  supporters: "/48e47e5a-3c02-4b9b-829a-3e155e5c6d29.jpg",

  culture: "/b8ec73be-4863-4d2e-b979-988772df52b6.jpg",

  news: "/5d7a37d0-2109-4949-abf3-cf38ce5fa30f.jpg",
  playerM: "/b652d38c-6cdf-456f-adf4-67d5dfddc29d.jpg",

  playerM2: "/3218469a-d14a-46bf-9362-75b085aa887d.jpg",

  playerF: "/80cef74d-8f44-4de4-ad01-54858971f986.jpg",

  jersey: "/df1de7fc-ef3e-4cd6-815c-e5cb1510fe48.jpg"

};

export type Stat = {label: string;value: number;prefix?: string;suffix?: string;};

export const STATS: Stat[] = [
{ label: 'Depuis', value: 2002 },
{ label: 'Joueurs formés', value: 650, prefix: '+' },
{ label: 'Trophées', value: 18 },
{ label: 'Matchs officiels', value: 120 },
{ label: 'Sponsors', value: 32 },
{ label: 'Supporters', value: 4500 }];


export type TimelineEntry = {year: string;title: string;text: string;};

export const TIMELINE: TimelineEntry[] = [
{ year: '2002', title: 'Création du club', text: "Un groupe de jeunes de Grand-Yoff fonde l'ASC TERANGA FC autour d'un rêve commun." },
{ year: '2006', title: 'Premiers trophées', text: 'Le club remporte son premier titre de zone lors des Navétanes.' },
{ year: '2010', title: "École de football", text: "Ouverture du centre de formation pour les enfants du quartier." },
{ year: '2014', title: 'Navétanes régionales', text: 'Première participation à la phase régionale du championnat populaire.' },
{ year: '2019', title: 'Équipe féminine', text: "Création de la section féminine, une première dans le quartier." },
{ year: '2026', title: "Objectifs futurs", text: "Construire une identité numérique et un centre de formation moderne." }];


export type Team = {
  id: string;
  name: string;
  short: string;
  category: 'Senior' | 'Junior' | 'Féminine' | 'École';
  coach: string;
  assistant: string;
  captain: string;
  photo: string;
  accent: string;
  desc: string;
};

export const TEAMS: Team[] = [
{
  id: 'senior',
  name: 'Équipe Senior',
  short: 'Senior',
  category: 'Senior',
  coach: 'Modou Ndiaye',
  assistant: 'Cheikh Fall',
  captain: 'Ibrahima Sarr',
  photo: IMAGES.teamSenior,
  accent: '#0B6E4F',
  desc: "Le fer de lance du club, engagé chaque saison au championnat Navétanes."
},
{
  id: 'junior',
  name: 'Équipe Junior',
  short: 'Junior',
  category: 'Junior',
  coach: 'Ousmane Diop',
  assistant: 'Lamine Ba',
  captain: 'Moussa Kane',
  photo: IMAGES.academy,
  accent: '#FFC72C',
  desc: "La relève, formée aux valeurs et au jeu de l'ASC TERANGA FC."
},
{
  id: 'feminine',
  name: 'Équipe Féminine',
  short: 'Féminine',
  category: 'Féminine',
  coach: 'Awa Séne',
  assistant: 'Fatou Gueye',
  captain: 'Ndeye Sow',
  photo: IMAGES.playerF,
  accent: '#7CB518',
  desc: "Fierté du quartier, la section féminine porte haut les couleurs du club."
},
{
  id: 'ecole',
  name: 'École de Football',
  short: 'École',
  category: 'École',
  coach: 'Pape Diallo',
  assistant: 'Serigne Mbaye',
  captain: '—',
  photo: IMAGES.academy,
  accent: '#064635',
  desc: "Les plus jeunes talents, de 6 à 14 ans, apprennent le ballon rond."
}];


export type Player = {
  id: string;
  team: string;
  name: string;
  number: number;
  position: string;
  age: number;
  height: string;
  weight: string;
  foot: 'Droit' | 'Gauche';
  photo: string;
  bio: string;
  stats: {matches: number;goals: number;assists: number;yellow: number;red: number;};
};

export const PLAYERS: Player[] = [
{ id: 'ibrahima-sarr', team: 'senior', name: 'Ibrahima Sarr', number: 8, position: 'Milieu', age: 26, height: '1,82 m', weight: '76 kg', foot: 'Droit', photo: IMAGES.playerM, bio: "Capitaine et métronome du milieu, Ibrahima incarne l'esprit du club depuis 8 saisons.", stats: { matches: 112, goals: 24, assists: 38, yellow: 9, red: 1 } },
{ id: 'moussa-kane', team: 'senior', name: 'Moussa Kane', number: 10, position: 'Attaquant', age: 23, height: '1,78 m', weight: '72 kg', foot: 'Gauche', photo: IMAGES.playerM2, bio: "Buteur électrique, Moussa fait lever le terrain à chaque accélération.", stats: { matches: 84, goals: 51, assists: 22, yellow: 5, red: 0 } },
{ id: 'cheikh-diallo', team: 'senior', name: 'Cheikh Diallo', number: 1, position: 'Gardien', age: 28, height: '1,89 m', weight: '84 kg', foot: 'Droit', photo: IMAGES.playerM, bio: "Le mur du quartier. Cheikh a gardé sa cage inviolée 34 fois.", stats: { matches: 96, goals: 0, assists: 2, yellow: 3, red: 0 } },
{ id: 'aliou-ndoye', team: 'senior', name: 'Aliou Ndoye', number: 4, position: 'Défenseur', age: 25, height: '1,85 m', weight: '80 kg', foot: 'Droit', photo: IMAGES.playerM2, bio: "Roc défensif, Aliou ne lâche jamais un duel.", stats: { matches: 78, goals: 6, assists: 9, yellow: 12, red: 2 } },
{ id: 'ndeye-sow', team: 'feminine', name: 'Ndeye Sow', number: 7, position: 'Attaquante', age: 22, height: '1,70 m', weight: '62 kg', foot: 'Droit', photo: IMAGES.playerF, bio: "Capitaine des Lionnes, Ndeye est la meilleure buteuse de la section.", stats: { matches: 46, goals: 33, assists: 15, yellow: 2, red: 0 } },
{ id: 'fatou-diagne', team: 'feminine', name: 'Fatou Diagne', number: 6, position: 'Milieu', age: 20, height: '1,68 m', weight: '59 kg', foot: 'Gauche', photo: IMAGES.playerF, bio: "Talent brut du centre de formation, Fatou distribue le jeu avec classe.", stats: { matches: 28, goals: 8, assists: 19, yellow: 1, red: 0 } }];


export type StaffMember = {id: string;name: string;role: string;mission: string;photo: string;};

export const STAFF: StaffMember[] = [
{ id: 'president', name: 'Serigne Fallou Mbacké', role: 'Président', mission: "Porter la vision du club et fédérer la communauté autour du projet.", photo: IMAGES.playerM2 },
{ id: 'vice', name: 'Aïda Camara', role: 'Vice-présidente', mission: "Coordonner la vie associative et les partenariats institutionnels.", photo: IMAGES.playerF },
{ id: 'coach', name: 'Modou Ndiaye', role: 'Coach principal', mission: "Diriger l'équipe senior et définir l'identité de jeu.", photo: IMAGES.playerM },
{ id: 'prepa', name: 'Cheikh Fall', role: 'Préparateur physique', mission: "Optimiser la condition physique et prévenir les blessures.", photo: IMAGES.playerM2 },
{ id: 'kine', name: 'Rama Ndour', role: 'Kinésithérapeute', mission: "Assurer le suivi médical et la récupération des joueurs.", photo: IMAGES.playerF },
{ id: 'comm', name: 'Youssou Ba', role: 'Responsable communication', mission: "Faire rayonner le club sur le web et les réseaux sociaux.", photo: IMAGES.playerM },
{ id: 'finance', name: 'Mariama Sy', role: 'Responsable financier', mission: "Garantir la transparence et la bonne gestion des ressources.", photo: IMAGES.playerF }];


export type Match = {
  id: string;
  date: string; // ISO
  time: string;
  team: string; // team id
  opponent: string;
  competition: string;
  venue: string;
  referee: string;
  home: boolean;
  status: 'upcoming' | 'played';
  score?: {us: number;them: number;};
  possession?: number;
  scorers?: string[];
  cards?: {yellow: number;red: number;};
  motm?: string;
};

export const MATCHES: Match[] = [
{ id: 'm1', date: '2026-08-02', time: '17:30', team: 'senior', opponent: 'ASC Yeggo', competition: 'Navétanes — Zone 4', venue: 'Terrain Grand-Yoff', referee: 'M. Diouf', home: true, status: 'upcoming' },
{ id: 'm2', date: '2026-08-09', time: '18:00', team: 'senior', opponent: 'ASC Diamono', competition: 'Navétanes — Zone 4', venue: 'Stade Iba Mar Diop', referee: 'M. Sène', home: false, status: 'upcoming' },
{ id: 'm3', date: '2026-08-15', time: '16:00', team: 'feminine', opponent: 'Lionnes de Pikine', competition: 'Coupe Féminine', venue: 'Terrain Grand-Yoff', referee: 'Mme Faye', home: true, status: 'upcoming' },
{ id: 'm4', date: '2026-08-18', time: '10:00', team: 'ecole', opponent: 'Académie Sacré-Cœur', competition: 'Tournoi Jeunes', venue: 'Complexe Léopold Senghor', referee: 'M. Ndao', home: false, status: 'upcoming' },
{ id: 'm5', date: '2026-07-19', time: '17:30', team: 'senior', opponent: 'ASC Niarry Tally', competition: 'Navétanes — Zone 4', venue: 'Terrain Grand-Yoff', referee: 'M. Ba', home: true, status: 'played', score: { us: 3, them: 1 }, possession: 58, scorers: ['Moussa Kane (2)', 'Ibrahima Sarr'], cards: { yellow: 2, red: 0 }, motm: 'Moussa Kane' },
{ id: 'm6', date: '2026-07-12', time: '18:00', team: 'senior', opponent: 'ASC Médina', competition: 'Navétanes — Zone 4', venue: 'Stade Alassane Djigo', referee: 'M. Gomis', home: false, status: 'played', score: { us: 2, them: 2 }, possession: 49, scorers: ['Moussa Kane', 'Aliou Ndoye'], cards: { yellow: 3, red: 1 }, motm: 'Cheikh Diallo' },
{ id: 'm7', date: '2026-07-05', time: '17:00', team: 'feminine', opponent: 'ASC Guédiawaye', competition: 'Coupe Féminine', venue: 'Terrain Grand-Yoff', referee: 'Mme Diallo', home: true, status: 'played', score: { us: 4, them: 0 }, possession: 65, scorers: ['Ndeye Sow (3)', 'Fatou Diagne'], cards: { yellow: 0, red: 0 }, motm: 'Ndeye Sow' }];


export type StandingRow = {team: string;played: number;won: number;drawn: number;lost: number;gf: number;ga: number;points: number;};

export const STANDINGS: StandingRow[] = [
{ team: 'ASC TERANGA FC', played: 8, won: 6, drawn: 1, lost: 1, gf: 19, ga: 7, points: 19 },
{ team: 'ASC Niarry Tally', played: 8, won: 5, drawn: 2, lost: 1, gf: 15, ga: 8, points: 17 },
{ team: 'ASC Médina', played: 8, won: 4, drawn: 2, lost: 2, gf: 13, ga: 10, points: 14 },
{ team: 'ASC Diamono', played: 8, won: 3, drawn: 3, lost: 2, gf: 11, ga: 9, points: 12 },
{ team: 'ASC Yeggo', played: 8, won: 2, drawn: 2, lost: 4, gf: 9, ga: 14, points: 8 },
{ team: 'ASC Guédiawaye', played: 8, won: 1, drawn: 1, lost: 6, gf: 6, ga: 20, points: 4 }];


export type GalleryItem = {id: string;src: string;category: string;title: string;};

export const GALLERY_CATEGORIES = ['Tous', 'Matchs', 'Entraînements', 'Tournois', 'Supporters', 'Culture'];

export const GALLERY: GalleryItem[] = [
{ id: 'g1', src: IMAGES.hero, category: 'Matchs', title: "Entrée des joueurs" },
{ id: 'g2', src: IMAGES.news, category: 'Matchs', title: 'Célébration du but' },
{ id: 'g3', src: IMAGES.academy, category: 'Entraînements', title: "Séance de l'école" },
{ id: 'g4', src: IMAGES.supporters, category: 'Supporters', title: 'Tribune en fusion' },
{ id: 'g5', src: IMAGES.culture, category: 'Culture', title: 'Plantation solidaire' },
{ id: 'g6', src: IMAGES.teamSenior, category: 'Tournois', title: 'Photo officielle' },
{ id: 'g7', src: IMAGES.playerF, category: 'Entraînements', title: 'Focus féminine' },
{ id: 'g8', src: IMAGES.supporters, category: 'Supporters', title: 'Ambiance Navétanes' },
{ id: 'g9', src: IMAGES.culture, category: 'Culture', title: 'Journée du quartier' }];


export type Sponsor = {id: string;name: string;tier: string;url: string;desc: string;color: string;};

export const SPONSORS: Sponsor[] = [
{ id: 's1', name: 'Teranga Telecom', tier: 'Premium', url: 'https://example.com', desc: "Opérateur télécom partenaire principal du club depuis 2018.", color: '#0B6E4F' },
{ id: 's2', name: 'Dakar Énergie', tier: 'Or', url: 'https://example.com', desc: "Fournisseur d'énergie soutenant le centre de formation.", color: '#FFC72C' },
{ id: 's3', name: 'Baobab Assurances', tier: 'Or', url: 'https://example.com', desc: "Assureur officiel des joueurs et du staff.", color: '#7CB518' },
{ id: 's4', name: 'Yoff Immobilier', tier: 'Argent', url: 'https://example.com', desc: "Partenaire local et fidèle des Navétanes.", color: '#064635' },
{ id: 's5', name: 'Sahel Boissons', tier: 'Argent', url: 'https://example.com', desc: "Rafraîchit les troisièmes mi-temps depuis 10 ans.", color: '#0B6E4F' },
{ id: 's6', name: 'Ndar Sport', tier: 'Bronze', url: 'https://example.com', desc: "Équipementier des jeunes catégories.", color: '#FFC72C' }];


export type SponsorPack = {name: string;price: string;color: string;features: {label: string;included: boolean;}[];highlight?: boolean;};

export const SPONSOR_PACKS: SponsorPack[] = [
{ name: 'Bronze', price: '150 000 FCFA / an', color: '#B08D57', features: [
  { label: 'Logo sur le site web', included: true },
  { label: 'Mention réseaux sociaux', included: true },
  { label: 'Banderole au terrain', included: false },
  { label: 'Logo sur le maillot', included: false },
  { label: 'Fiche sponsor dédiée', included: false }]
},
{ name: 'Argent', price: '400 000 FCFA / an', color: '#A9B4BC', features: [
  { label: 'Logo sur le site web', included: true },
  { label: 'Mention réseaux sociaux', included: true },
  { label: 'Banderole au terrain', included: true },
  { label: 'Logo sur le maillot', included: false },
  { label: 'Fiche sponsor dédiée', included: false }]
},
{ name: 'Or', price: '900 000 FCFA / an', color: '#FFC72C', highlight: true, features: [
  { label: 'Logo sur le site web', included: true },
  { label: 'Mention réseaux sociaux', included: true },
  { label: 'Banderole au terrain', included: true },
  { label: 'Logo sur le maillot', included: true },
  { label: 'Fiche sponsor dédiée', included: false }]
},
{ name: 'Premium', price: '2 000 000 FCFA / an', color: '#0B6E4F', features: [
  { label: 'Logo sur le site web', included: true },
  { label: 'Mention réseaux sociaux', included: true },
  { label: 'Banderole au terrain', included: true },
  { label: 'Logo sur le maillot', included: true },
  { label: 'Fiche sponsor dédiée', included: true }]
}];


export type Article = {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  cover: string;
  readingTime: string;
  hasVideo?: boolean;
  body: string[];
};

export const ARTICLE_CATEGORIES = ['Tous', 'Match', 'Interview', 'Mercato', 'Tournoi', 'Communiqué', 'Événement'];

export const ARTICLES: Article[] = [
{ id: 'a1', slug: 'victoire-niarry-tally', category: 'Match', title: 'Les Lions du quartier écrasent Niarry Tally 3-1', excerpt: "Porté par un doublé de Moussa Kane, l'ASC TERANGA FC domine le derby des Navétanes.", date: '2026-07-19', author: 'Youssou Ba', cover: IMAGES.news, readingTime: '4 min', hasVideo: true, body: [
  "Sous un soleil de fin d'après-midi, le terrain de Grand-Yoff a vibré comme rarement. Dès le coup d'envoi, l'ASC TERANGA FC a imposé son rythme.",
  "Moussa Kane a ouvert le score d'une frappe enroulée à la 12e minute, avant de doubler la mise juste avant la pause. Le capitaine Ibrahima Sarr a scellé la victoire en seconde période.",
  "« Cette équipe joue pour tout un quartier », a déclaré le coach Modou Ndiaye après la rencontre. Prochain rendez-vous dimanche prochain à l'extérieur."]
},
{ id: 'a2', slug: 'interview-ndeye-sow', category: 'Interview', title: 'Ndeye Sow : « Nous ouvrons la voie aux filles du quartier »', excerpt: "Rencontre avec la capitaine de la section féminine, meilleure buteuse du club.", date: '2026-07-10', author: 'Aïda Camara', cover: IMAGES.playerF, readingTime: '6 min', body: [
  "À 22 ans, Ndeye Sow est déjà une référence. Nous l'avons rencontrée après l'entraînement.",
  "« Quand j'ai commencé, on me disait que le football n'était pas pour les filles. Aujourd'hui, des dizaines de gamines viennent nous voir jouer », raconte-t-elle avec fierté.",
  "La section féminine, créée en 2019, est devenue un symbole d'ouverture pour tout Grand-Yoff."]
},
{ id: 'a3', slug: 'ecole-inscriptions-ouvertes', category: 'Communiqué', title: "École de football : les inscriptions 2026 sont ouvertes", excerpt: "Le centre de formation accueille les enfants de 6 à 14 ans dès septembre.", date: '2026-07-01', author: 'Serigne Fallou Mbacké', cover: IMAGES.academy, readingTime: '3 min', body: [
  "L'ASC TERANGA FC ouvre les inscriptions de son école de football pour la saison 2026-2027.",
  "Les entraînements auront lieu les mercredis et samedis. Le dossier d'inscription est disponible en ligne et au terrain.",
  "Une réunion d'information est prévue avec les parents avant la rentrée."]
},
{ id: 'a4', slug: 'journee-plantation-arbres', category: 'Événement', title: "Le club plante 200 arbres dans le quartier", excerpt: "Une action environnementale menée main dans la main avec les habitants.", date: '2026-06-22', author: 'Youssou Ba', cover: IMAGES.culture, readingTime: '3 min', body: [
  "Samedi, joueurs, supporters et voisins se sont retrouvés pour une grande journée de plantation.",
  "200 arbres ont été mis en terre le long des rues principales de Grand-Yoff.",
  "« Un club, c'est aussi son quartier », rappelle la vice-présidente Aïda Camara."]
}];


export type SocialAction = {id: string;title: string;text: string;photo: string;icon: string;};

export const SOCIAL_ACTIONS: SocialAction[] = [
{ id: 'sang', title: 'Don de sang', text: "Collectes régulières en partenariat avec le centre de santé du quartier.", photo: IMAGES.culture, icon: 'heart' },
{ id: 'nettoyage', title: 'Nettoyage du quartier', text: "Set setal mensuels pour un Grand-Yoff plus propre.", photo: IMAGES.culture, icon: 'sparkles' },
{ id: 'arbres', title: "Plantation d'arbres", text: "Reverdir les rues, un arbre à la fois.", photo: IMAGES.culture, icon: 'trees' },
{ id: 'scolaire', title: 'Soutien scolaire', text: "Accompagnement des jeunes joueurs dans leurs études.", photo: IMAGES.academy, icon: 'book' },
{ id: 'culture', title: 'Journées culturelles', text: "Musique, lutte et théâtre pour célébrer la teranga.", photo: IMAGES.supporters, icon: 'music' },
{ id: 'social', title: 'Actions sociales', text: "Aide aux familles et distributions solidaires.", photo: IMAGES.culture, icon: 'handshake' }];


export type Product = {id: string;name: string;price: number;category: string;image: string;};

export const SHOP_CATEGORIES = ['Tous', 'Maillots', 'Accessoires', 'Équipement'];

export const PRODUCTS: Product[] = [
{ id: 'p1', name: 'Maillot Domicile 2026', price: 12000, category: 'Maillots', image: IMAGES.jersey },
{ id: 'p2', name: 'Maillot Extérieur 2026', price: 12000, category: 'Maillots', image: IMAGES.jersey },
{ id: 'p3', name: 'Casquette Teranga', price: 4000, category: 'Accessoires', image: IMAGES.jersey },
{ id: 'p4', name: 'Écharpe Supporter', price: 5000, category: 'Accessoires', image: IMAGES.jersey },
{ id: 'p5', name: 'Bracelet du club', price: 1500, category: 'Accessoires', image: IMAGES.jersey },
{ id: 'p6', name: 'Ballon officiel', price: 8000, category: 'Équipement', image: IMAGES.jersey },
{ id: 'p7', name: 'Veste d\'entraînement', price: 15000, category: 'Équipement', image: IMAGES.jersey },
{ id: 'p8', name: 'Maillot Féminine 2026', price: 12000, category: 'Maillots', image: IMAGES.jersey }];


export type FanPost = {id: string;name: string;message: string;time: string;};

export const FAN_WALL: FanPost[] = [
{ id: 'f1', name: 'Abdou', message: "Allez les Lions ! On est derrière vous dimanche 💚 (sans emoji dans le rendu réel)", time: 'il y a 2h' },
{ id: 'f2', name: 'Khady', message: "Fière de la section féminine, vous êtes une inspiration !", time: 'il y a 5h' },
{ id: 'f3', name: 'Pape', message: "Le meilleur club du quartier depuis toujours.", time: 'hier' }];


export function fmtCFA(n: number) {
  return n.toLocaleString('fr-FR') + ' FCFA';
}