export interface ServiceContent {
  id: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  stats: { value: string; label: string }[];
  intro: {
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  types: {
    title: string;
    subtitle: string;
    items: { title: string; description: string; image: string }[];
  };
  seoBlocks: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    reverse?: boolean;
  }[];
  process: {
    title: string;
    steps: { number: string; title: string; description: string }[];
  };
  whyUs: {
    title: string;
    items: { title: string; description: string }[];
  };
  pricing: {
    title: string;
    intro: string;
    items: { label: string; price: string; desc: string }[];
  };
  reviews: {
    name: string;
    initials: string;
    color: string;
    rating: number;
    date: string;
    comment: string;
  }[];
  faq: { q: string; a: string }[];
}

const DEFAULT_STATS = [
  { value: "25+", label: "ans d'experience" },
  { value: "30 min", label: "d'intervention" },
  { value: "24/7", label: "disponibilite" },
  { value: "12 mois", label: "de garantie" },
];

const COMMON_REVIEWS_POOL = [
  {
    name: "Karim B.", initials: "KB", color: "#3B82F6", rating: 5, date: "il y a 2 semaines",
    comment: "Rideau bloque a 22h un vendredi soir. Le technicien DRM etait chez moi en 25 minutes a Corbeil-Essonnes. Probleme identifie et repare dans la nuit. Tres professionnel, prix correct, facture claire.",
  },
  {
    name: "Sophie L.", initials: "SL", color: "#EC4899", rating: 5, date: "il y a 1 mois",
    comment: "Installation d'un moteur Somfy sur mon rideau manuel de boulangerie. Travail propre, intervention rapide, explications claires sur l'utilisation. Tres content du resultat a Evry.",
  },
  {
    name: "Marc D.", initials: "MD", color: "#10B981", rating: 5, date: "il y a 3 semaines",
    comment: "Devis gratuit et realiste, pose d'un rideau metallique neuf en 1 journee sur mon entrepot. Lames P90, moteur ACM. Equipe serieuse, je les rappellerai pour l'entretien annuel.",
  },
  {
    name: "Nathalie P.", initials: "NP", color: "#F59E0B", rating: 5, date: "il y a 5 jours",
    comment: "Serrure bloquee en plein week-end sur ma bijouterie. Intervention en 20 minutes, remplacement du cylindre par un A2P, explications pedagogiques. Je recommande les yeux fermes.",
  },
  {
    name: "Philippe T.", initials: "PT", color: "#8B5CF6", rating: 5, date: "il y a 2 mois",
    comment: "Entretien annuel sur 2 rideaux de mon pressing. Diagnostic complet, graissage, test moteur. Contrat negocie au juste prix. Equipe ponctuelle et serieuse.",
  },
  {
    name: "Fatima Z.", initials: "FZ", color: "#06B6D4", rating: 5, date: "il y a 1 semaine",
    comment: "Moteur ACM en panne sur mon entrepot de Lisses. DRM a diagnostique le condensateur en 10 min, remplace sur place. Facture exactement celle annoncee, super experience.",
  },
  {
    name: "Antoine R.", initials: "AR", color: "#EF4444", rating: 5, date: "il y a 4 jours",
    comment: "Lames deformees apres un choc vehicule. Remplacement de 4 lames P57 en 2h, nettoyage, reglage axe. Commerce reouvert a 14h le jour meme. Service impeccable.",
  },
  {
    name: "Caroline M.", initials: "CM", color: "#A855F7", rating: 5, date: "il y a 3 jours",
    comment: "Telecommande perdue, reprogrammation sur mon Somfy en 5 minutes. Technicien sympa, tarif honnete. Je garde leur numero precieusement !",
  },
];

export const servicesContent: Record<string, ServiceContent> = {
  depannage: {
    id: "depannage",
    h1: "Depannage rideau metallique a Corbeil-Essonnes",
    metaTitle: "Depannage rideau metallique Corbeil-Essonnes",
    metaDescription: "Depannage rideau metallique urgent a Corbeil-Essonnes (91100). Intervention en 30 min 24h/24 7j/7. Devis gratuit. DRM 25+ ans. Tel 01 84 18 04 99.",
    heroSubtitle: "Rideau bloque, moteur en panne, lames deformees ? Notre equipe DRM intervient en moins de 30 minutes a Corbeil-Essonnes et dans toute l'Essonne, 24h/24 et 7j/7.",
    stats: DEFAULT_STATS,
    intro: {
      title: "Specialiste du depannage rideau metallique a Corbeil-Essonnes",
      paragraphs: [
        "Un <strong>rideau metallique en panne</strong>, c'est un commerce ferme et une perte de chiffre d'affaires. Chez DRM Corbeil-Essonnes, nous avons construit notre reputation sur la <strong>rapidite d'intervention</strong> : moins de 30 minutes chrono sur tout le 91. Notre equipe traite chaque jour les pannes les plus frequentes — deblocage, moteur HS, ressort casse, lames deformees, serrure grippee — avec un vehicule atelier equipe de toutes les pieces de rechange.",
        "Nos techniciens sont certifies sur toutes les marques de moteurs : <strong>Somfy, Simu, Nice</strong> pour les moteurs tubulaires, <strong>ACM, Came, BFT, Faac, Sommer</strong> pour les moteurs centraux et lateraux. Resultat : <strong>85% des depannages sont reussis des la premiere visite</strong>, sans retour ni piece commandee. Un gain de temps precieux pour votre commerce.",
      ],
      image: "/images/gallery/depannage-rideau-metallique-DRM-reparation.webp",
      imageAlt: "Technicien DRM Corbeil-Essonnes en intervention de depannage rideau metallique",
    },
    types: {
      title: "Tous types de depannages rideau metallique",
      subtitle: "Quelle que soit la panne, notre equipe intervient rapidement avec les pieces necessaires",
      items: [
        { title: "Rideau bloque", description: "Lame sortie du rail, axe grippe, ressort casse. Deblocage en douceur sans degrader le tablier.", image: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp" },
        { title: "Moteur en panne", description: "Condensateur HS, carte electronique defaillante, surchauffe. Diagnostic + piece + pose.", image: "/images/gallery/Moteur-ACM-76-rideau-metallique.webp" },
        { title: "Lames deformees", description: "Choc vehicule, effraction, usure. Remplacement lames P57 ou P90 en stock vehicule.", image: "/images/gallery/lame-P57-rideau-metallique.webp" },
        { title: "Serrure grippee", description: "Cylindre oxyde, gel, usure. Remplacement par cylindre europeen ou A2P en 15 minutes.", image: "/images/gallery/Serrure-rideau-métallique-4-points-lame-finale.webp" },
        { title: "Telecommande HS", description: "Piles, programmation perdue, recepteur defectueux. Reprogrammation ou fourniture.", image: "/images/gallery/digicode-sans-fil-GEBA-rideau-metallique.webp" },
        { title: "Ressort casse", description: "Ressort de compensation qui a cede. Remplacement complet et equilibrage du tablier.", image: "/images/gallery/ressorts-rideau-metallique-france.webp" },
      ],
    },
    seoBlocks: [
      {
        eyebrow: "Intervention urgence",
        title: "Depannage rideau metallique 24h/24 a Corbeil-Essonnes",
        paragraphs: [
          "Chez DRM Corbeil-Essonnes, notre service de <strong>depannage d'urgence</strong> est disponible <strong>24 heures sur 24, 7 jours sur 7</strong>, y compris les week-ends et tous les jours feries. Des votre appel, notre coordinateur etablit un pre-diagnostic telephonique, identifie la panne probable et dispatche immediatement le technicien le plus proche — generalement en intervention sur Corbeil-Essonnes, Evry-Courcouronnes, Villabe, Ris-Orangis ou Lisses.",
          "Notre <strong>delai d'intervention garanti</strong> est de 30 minutes dans un rayon de 35 km autour de Corbeil-Essonnes. Nous intervenons la nuit, le dimanche, le 14 juillet ou le 25 decembre — peu importe. La <strong>fermeture metallique</strong> de votre commerce est votre premiere protection contre le vol, donc quand elle cede, chaque heure compte.",
        ],
        image: "/images/gallery/hero-rideau-metallique.webp",
        imageAlt: "Depannage urgent rideau metallique DRM Corbeil-Essonnes 24h/24",
      },
      {
        eyebrow: "Vehicule atelier equipe",
        title: "Depannage reussi des la premiere intervention",
        paragraphs: [
          "La difference entre un depannage <strong>reussi en 1h</strong> et un depannage qui s'etale sur plusieurs jours ? L'equipement du technicien. Notre vehicule atelier transporte en permanence : un stock complet de <strong>moteurs Somfy RS100, Simu T5, ACM Titan</strong>, des lames pleines P57 et P90, des ressorts de compensation de toutes sections, des cylindres de serrure europeens, 4 points et A2P, des telecommandes codables sur tous protocoles, des joints EPDM et accessoires anti-tempete.",
          "Cette autonomie nous permet de resoudre <strong>85% des pannes des la premiere visite</strong>, sans devis en attente ni commande de piece. Pour les pannes complexes (fabrication sur-mesure, lames introuvables), nous proposons une solution temporaire (fermeture securisee provisoire) le temps de commander la piece — generalement livree sous 48h a 72h.",
        ],
        image: "/images/gallery/livraison-rideau-metallique-camion.webp",
        imageAlt: "Vehicule atelier DRM Corbeil-Essonnes equipe pour depannage rideau metallique",
        reverse: true,
      },
      {
        eyebrow: "Toutes pannes toutes marques",
        title: "Depannage grille metallique et store metallique",
        paragraphs: [
          "Le terme <strong>rideau metallique</strong> regroupe en realite plusieurs types de fermetures : <strong>rideau a lames pleines</strong> (commerce standard), <strong>rideau micro-perfore</strong> (vitrine avec visibilite), <strong>rideau polycarbonate</strong> (vitrines de luxe), <strong>grille cobra</strong> (bijouteries), <strong>grille extensible en accordeon</strong> (petites boutiques) et <strong>rideau tube ondule</strong> (parkings). Notre equipe DRM intervient sur toutes ces configurations sans distinction.",
          "Nous sommes egalement familiers avec les installations particulieres : rideaux contigus, fermetures industrielles de plus de 10 metres, rideaux coupe-feu, stores roulants mixtes. Si votre <strong>fermeture metallique</strong> a un probleme, appelez-nous — nous saurons vous aider. Notre technicien se deplace avec tout l'equipement necessaire pour diagnostic sur place.",
        ],
        image: "/images/gallery/rideau-metallique-grille-extensible-drm.webp",
        imageAlt: "Depannage grille et store metallique Corbeil-Essonnes DRM",
      },
      {
        eyebrow: "Garantie et transparence",
        title: "Devis gratuit et garantie 12 mois sur chaque depannage",
        paragraphs: [
          "Chez DRM Corbeil-Essonnes, nous appliquons une <strong>transparence tarifaire totale</strong>. Le devis est gratuit, etabli sur place avant toute intervention, avec le detail des pieces et de la main-d'oeuvre. Nos prix sont fixes : <strong>a partir de 149 euros</strong> pour un deblocage simple, 390 euros pour une reparation de moteur, 189 euros pour le remplacement d'une lame. Aucun supplement non annonce.",
          "Chaque <strong>depannage rideau metallique</strong> est <strong>garanti 12 mois</strong> sur les pieces ET sur la main-d'oeuvre. Si la panne reapparait dans l'annee, nous revenons gratuitement. Cette garantie est un gage de serieux : nous utilisons uniquement des pieces d'origine ou certifiees equivalentes, posees dans les regles de l'art par nos techniciens certifies.",
        ],
        image: "/images/gallery/certification-qualite-depannage-rideau-metallique-drm.webp",
        imageAlt: "Garantie 12 mois sur depannage rideau metallique DRM Corbeil-Essonnes",
        reverse: true,
      },
    ],
    process: {
      title: "Comment se deroule un depannage DRM ?",
      steps: [
        { number: "01", title: "Appel & diagnostic", description: "Vous appelez le 01 84 18 04 99. Notre coordinateur pose quelques questions pour identifier la panne probable et preparer le bon materiel." },
        { number: "02", title: "Intervention en 30 min", description: "Le technicien le plus proche se deplace immediatement. Arrivee garantie sous 30 minutes a Corbeil-Essonnes et alentours." },
        { number: "03", title: "Devis et reparation", description: "Diagnostic sur place, devis gratuit transparent. Apres accord, reparation immediate avec les pieces du vehicule atelier." },
        { number: "04", title: "Test et garantie", description: "Test complet de la fermeture, remise d'une facture detaillee et d'une garantie ecrite 12 mois pieces et main-d'oeuvre." },
      ],
    },
    whyUs: {
      title: "Pourquoi choisir DRM pour votre depannage ?",
      items: [
        { title: "Intervention en 30 minutes", description: "Rayon 35 km autour de Corbeil-Essonnes. Techniciens en permanence sur le terrain." },
        { title: "24h/24, 7j/7", description: "Week-ends, jours feries, nuit. Meme qualite d'intervention, meme tarifs transparents." },
        { title: "85% reussis au 1er passage", description: "Vehicule atelier complet — moteurs, lames, ressorts, serrures de toutes marques en stock." },
        { title: "Garantie 12 mois", description: "Pieces et main-d'oeuvre garanties ecrites. Panne dans l'annee = retour gratuit." },
        { title: "Devis gratuit transparent", description: "Prix fixes, communique avant intervention. Aucun supplement non annonce." },
        { title: "Techniciens certifies", description: "Formes sur Somfy, Simu, ACM, Came, Nice, FAAC. Polo bleu DRM, cartes professionnelles." },
      ],
    },
    pricing: {
      title: "Tarifs indicatifs depannage rideau metallique",
      intro: "Prix a partir de, communique fermement avant intervention. Devis gratuit sur place.",
      items: [
        { label: "Deblocage simple", price: "a partir de 149 EUR", desc: "Lame ressortie, reglage axe, test moteur" },
        { label: "Reparation moteur", price: "a partir de 390 EUR", desc: "Condensateur, carte electronique, pose" },
        { label: "Remplacement lame (unite)", price: "a partir de 189 EUR", desc: "Lame P57 ou P90 + main-d'oeuvre" },
        { label: "Remplacement serrure", price: "a partir de 150 EUR", desc: "Cylindre europeen ou A2P" },
        { label: "Remplacement ressort", price: "a partir de 220 EUR", desc: "Ressort + reequilibrage tablier" },
        { label: "Telecommande neuve", price: "a partir de 65 EUR", desc: "Fourniture + codage sur moteur" },
      ],
    },
    reviews: COMMON_REVIEWS_POOL.slice(0, 6),
    faq: [
      {
        q: "Qui appeler pour un depannage rideau metallique a Corbeil-Essonnes ?",
        a: "DRM Corbeil-Essonnes est votre specialiste local pour tout depannage de rideau metallique. Notre equipe intervient 24h/24 et 7j/7 en moins de 30 minutes sur Corbeil-Essonnes (91100), Evry-Courcouronnes, Villabe, Ris-Orangis, Draveil et dans toute l'Essonne. Appelez le 01 84 18 04 99 pour une intervention immediate. Devis gratuit, garantie 12 mois pieces et main-d'oeuvre.",
      },
      {
        q: "Combien coute un depannage de rideau metallique ?",
        a: "Nos tarifs depannage rideau metallique a Corbeil-Essonnes demarrent a partir de 149 euros pour un deblocage simple, 390 euros pour une reparation de moteur, 189 euros pour un remplacement de lame. Le devis est gratuit, communique fermement avant toute intervention. Aucun supplement non annonce sur la facture.",
      },
      {
        q: "Quel est le delai d'intervention d'urgence a Corbeil-Essonnes ?",
        a: "Notre equipe garantit une intervention en moins de 30 minutes a Corbeil-Essonnes et dans un rayon de 35 km. Nos techniciens sont en permanence sur le terrain dans tout le 91 : Evry-Courcouronnes, Ris-Orangis, Villabe, Draveil, Mennecy, Grigny, Viry-Chatillon. Disponible 24h/24 et 7j/7.",
      },
      {
        q: "Intervenez-vous les week-ends et jours feries ?",
        a: "Oui, DRM Corbeil-Essonnes intervient 24h/24 et 7j/7, y compris les week-ends, les jours feries, la nuit, le 14 juillet, le 25 decembre. Meme qualite d'intervention et memes tarifs transparents, sans supplement cache le week-end.",
      },
      {
        q: "Quelles marques de moteurs reparez-vous ?",
        a: "Nos techniciens DRM sont certifies sur toutes les grandes marques : Somfy RS100, Simu T5, Nice Era (moteurs tubulaires), ACM Titan, Came, FAAC, BFT, Sommer GIGAroll (moteurs centraux et lateraux). Nous avons en stock dans le vehicule atelier les pieces detachees de ces marques : condensateurs, cartes electroniques, telecommandes codables.",
      },
      {
        q: "La reparation est-elle garantie ?",
        a: "Oui, chaque depannage realise par DRM est garanti 12 mois sur les pieces ET sur la main-d'oeuvre. Cette garantie ecrite figure sur votre facture. Si la meme panne reapparait dans l'annee, notre technicien revient gratuitement pour intervention.",
      },
    ],
  },

  installation: {
    id: "installation",
    h1: "Installation rideau metallique a Corbeil-Essonnes",
    metaTitle: "Installation rideau metallique Corbeil-Essonnes",
    metaDescription: "Installation rideau metallique sur-mesure a Corbeil-Essonnes. Commerce, entrepot, industriel. Devis gratuit. 25+ ans. Tel 01 84 18 04 99.",
    heroSubtitle: "Pose complete de rideaux metalliques neufs a Corbeil-Essonnes pour commerces, entrepots, industries. Sur-mesure, motorises ou manuels, toutes dimensions.",
    stats: DEFAULT_STATS,
    intro: {
      title: "Pose de rideau metallique sur-mesure a Corbeil-Essonnes",
      paragraphs: [
        "Vous ouvrez un nouveau commerce a Corbeil-Essonnes ? Vous renovez la facade de votre entrepot ? DRM vous accompagne dans l'<strong>installation complete d'un rideau metallique</strong> : prise de mesures precise, choix du tablier (lames pleines, micro-perforees, grilles), choix de la motorisation (tubulaire, centrale, laterale), fabrication, pose et mise en service.",
        "Notre equipe realise chaque installation <strong>sur-mesure</strong> aux dimensions exactes de votre ouverture. Qu'il s'agisse d'un petit commerce de proximite (2,50 m de large), d'une vitrine de centre-ville (4-6 m) ou d'un acces industriel (jusqu'a 12 m), nous concevons la solution adaptee avec <strong>devis gratuit et delai de pose de 7 a 14 jours</strong> a partir de la validation.",
      ],
      image: "/images/gallery/installation-rideau-metallique-sur-mesure-france.webp",
      imageAlt: "Installation rideau metallique sur-mesure DRM Corbeil-Essonnes",
    },
    types: {
      title: "Types d'installations rideau metallique",
      subtitle: "Du petit commerce a l'industriel, chaque installation est pensee pour l'usage",
      items: [
        { title: "Commerce de proximite", description: "Lames pleines P57, motorisation tubulaire Somfy. Ouverture 2 a 4 metres.", image: "/images/gallery/rideau-metallique-commerce-france-rideau-metallique.webp" },
        { title: "Restaurant & cafe", description: "Rideau a lames pleines, motorisation silencieuse, securite renforcee.", image: "/images/gallery/rideau-metallique-restaurant.webp" },
        { title: "Bijouterie & luxe", description: "Grille cobra ou grille bijoutier, normes A2P. Ouverture 2 a 3 metres.", image: "/images/gallery/rideau-metallique-bijoutier-drm.webp" },
        { title: "Boulangerie & tabac", description: "Micro-perfore pour visibilite vitrine, lames pleines P90 pour securite.", image: "/images/gallery/realisation-rideau-metallique-lame-pleine-boulangerie-france.webp" },
        { title: "Entrepot & local industriel", description: "Lames P90 ou P140, moteur central ACM Titan. Ouvertures jusqu'a 12 m.", image: "/images/gallery/rideau-metallique-industriel-lame-pleine.webp" },
        { title: "Garage & box", description: "Rideau compact lame pleine, motorisation tubulaire ou manuelle.", image: "/images/gallery/rideau-metallique-garage.webp" },
      ],
    },
    seoBlocks: [
      {
        eyebrow: "Prise de mesure professionnelle",
        title: "Installation rideau metallique adaptee a votre commerce",
        paragraphs: [
          "La reussite d'une <strong>pose de rideau metallique</strong> commence par une prise de mesure ultra-precise. Notre technicien se deplace gratuitement a Corbeil-Essonnes ou dans votre commune de l'Essonne pour mesurer votre ouverture : largeur DC (dimension des coulisses), largeur FINI, hauteur EC (enroulement compris), hauteur finie, positionnement du coffre (interieur ou exterieur, en applique ou entre tableaux), type de sol et d'alimentation electrique disponible.",
          "Cette <strong>etude technique prealable</strong> est cruciale. Un rideau metallique mal dimensionne bloque au quotidien et s'use prematurement. Nous verifions aussi la conformite a la norme NF EN 13241 et aux <strong>exigences de securite anti-intrusion</strong>. Le devis final vous est remis avec schema technique, references des pieces (moteur, lames, accessoires) et delai garanti de pose.",
        ],
        image: "/images/gallery/prise-de-mesure-rideau-metallique-drm.webp",
        imageAlt: "Prise de mesure rideau metallique sur place Corbeil-Essonnes",
      },
      {
        eyebrow: "Fabrication francaise",
        title: "Pose de fermeture metallique sur-mesure",
        paragraphs: [
          "Tous nos <strong>rideaux metalliques installes</strong> sont fabriques en France par nos partenaires industriels DRM. Tablier en <strong>acier galvanise</strong> (lames pleines P57 0.6mm ou P90 0.8mm), axe d'enroulement en <strong>tube acier</strong>, coulisses laterales en <strong>acier thermolaque</strong> couleur au choix (RAL 9010 blanc, 7016 anthracite, 9005 noir, 3020 rouge, ou teintes personnalisees).",
          "Pour les <strong>fermetures metalliques de luxe</strong> (bijouteries, commerces de prestige), nous fournissons des grilles cobra ou grilles bijoutiers certifiees A2P niveau 1 ou 2, avec lame finale anti-soulevement et serrure 4 points. Delai de fabrication standard : 7 a 10 jours. En urgence, possibilite de <strong>fabrication express 4H</strong> pour certaines dimensions courantes.",
        ],
        image: "/images/gallery/fabrication-rideau-metallique-rideau-metallique-france-drm.webp",
        imageAlt: "Fabrication rideau metallique francais sur-mesure DRM",
        reverse: true,
      },
      {
        eyebrow: "Motorisation au choix",
        title: "Rideau metallique motorise Somfy, Simu, ACM",
        paragraphs: [
          "Lors de l'installation d'un <strong>rideau metallique neuf</strong>, vous avez le choix entre plusieurs technologies de motorisation. Pour un commerce standard (tablier < 150 kg), nous recommandons un <strong>moteur tubulaire Somfy RS100 ou Simu T5</strong>, integre a l'axe, silencieux et fiable sur 15 ans. Pour un entrepot ou un rideau industriel (> 150 kg), nous installons un <strong>moteur central ACM Titan ou Came</strong>, puissant et conçu pour l'usage intensif.",
          "Chaque motorisation est livree avec <strong>telecommande, bouton interieur, manoeuvre de secours</strong> (cle ou manivelle) en cas de coupure de courant, et possibilite d'ajouter un digicode ou un lecteur de badge. Compatibilite totale avec les systemes domotiques (Somfy TaHoma, Connexoon). Installation garantie 12 mois pieces et main-d'oeuvre, avec mise en service complete.",
        ],
        image: "/images/gallery/motorisation-rideau-metallique-rideau-metallique-drm.webp",
        imageAlt: "Motorisation rideau metallique Somfy Simu ACM Corbeil-Essonnes",
      },
      {
        eyebrow: "Pose rapide & propre",
        title: "Installation fermeture metallique en 1 journee",
        paragraphs: [
          "La pose d'un <strong>rideau metallique standard</strong> (jusqu'a 5m de large) se realise generalement <strong>en une seule journee</strong> par notre equipe de 2 techniciens. Nous commençons tot le matin pour minimiser la fermeture de votre commerce : pose des coulisses laterales (fixation chimique ou chevilles), installation du coffre et de l'axe, mise en place du tablier, cablage electrique, test complet du systeme.",
          "Notre chantier est propre et respectueux : <strong>bache de protection</strong> pour les sols, aspirateur pour les poussieres, evacuation des debris. Vous recevez une facture detaillee, un carnet d'entretien, les notices d'utilisation de la telecommande et du moteur, et les coordonnees directes du technicien en cas de besoin. <strong>Installation garantie 12 mois</strong>.",
        ],
        image: "/images/gallery/pose-coulisse-tablier-rideau-metallique.webp",
        imageAlt: "Pose rideau metallique propre 1 journee DRM Corbeil-Essonnes",
        reverse: true,
      },
    ],
    process: {
      title: "Comment se deroule une installation DRM ?",
      steps: [
        { number: "01", title: "Visite technique", description: "Notre technicien se deplace gratuitement a Corbeil-Essonnes pour mesurer votre ouverture et conseiller la solution adaptee." },
        { number: "02", title: "Devis et validation", description: "Devis detaille avec schema et references pieces, sous 48h. Aucun engagement tant que vous n'avez pas valide." },
        { number: "03", title: "Fabrication sur-mesure", description: "Production en France sous 7 a 10 jours. Fabrication express 4H possible pour certaines dimensions." },
        { number: "04", title: "Pose et mise en service", description: "Installation complete en 1 journee par 2 techniciens. Test, remise des notices, garantie 12 mois." },
      ],
    },
    whyUs: {
      title: "Pourquoi confier votre installation a DRM ?",
      items: [
        { title: "Devis gratuit et precis", description: "Prise de mesure sur place a Corbeil-Essonnes, schema technique fourni." },
        { title: "Fabrication francaise", description: "Tablier, coulisses, coffre — production en France, pieces certifiees NF." },
        { title: "Sur-mesure exact", description: "Aux dimensions precises de votre ouverture, couleur au choix (RAL personnalise)." },
        { title: "Pose en 1 journee", description: "Minimise la fermeture de votre commerce. Equipe de 2 techniciens dedies." },
        { title: "Motorisation certifiee", description: "Somfy, Simu, ACM, Came — marques leaders avec garantie fabricant." },
        { title: "Garantie 12 mois", description: "Pieces + main-d'oeuvre. Support technique direct avec le technicien installateur." },
      ],
    },
    pricing: {
      title: "Tarifs indicatifs installation rideau metallique",
      intro: "Prix a partir de, varie selon dimensions, lames et motorisation. Devis personnalise gratuit.",
      items: [
        { label: "Rideau lames pleines (commerce 3m)", price: "a partir de 1 400 EUR", desc: "Pose + motorisation tubulaire Somfy" },
        { label: "Rideau micro-perfore (vitrine)", price: "a partir de 1 800 EUR", desc: "Lames aluminium, motorisation" },
        { label: "Grille cobra (bijouterie)", price: "a partir de 2 200 EUR", desc: "Grille A2P, serrure 4 points, pose" },
        { label: "Rideau industriel (6m)", price: "a partir de 3 500 EUR", desc: "Lames P90, moteur central ACM" },
        { label: "Rideau grand format (8-12m)", price: "a partir de 4 800 EUR", desc: "Sur-mesure, motorisation dediee" },
        { label: "Contrat entretien annuel", price: "a partir de 250 EUR/an", desc: "1 a 2 visites de controle, prioritaire en cas de panne" },
      ],
    },
    reviews: [COMMON_REVIEWS_POOL[2], COMMON_REVIEWS_POOL[1], COMMON_REVIEWS_POOL[4], COMMON_REVIEWS_POOL[7], COMMON_REVIEWS_POOL[0], COMMON_REVIEWS_POOL[6]],
    faq: [
      {
        q: "Qui appeler pour une installation rideau metallique a Corbeil-Essonnes ?",
        a: "DRM Corbeil-Essonnes installe des rideaux metalliques neufs sur-mesure dans tout le 91. Prise de mesure gratuite, fabrication francaise, pose en 1 journee. Appelez le 01 84 18 04 99 pour un devis personnalise. Delai moyen 7 a 14 jours de la validation a la pose.",
      },
      {
        q: "Combien coute l'installation d'un rideau metallique ?",
        a: "Le prix d'une installation complete rideau metallique a Corbeil-Essonnes demarre a partir de 1 400 euros pour un commerce standard de 3 metres (lames pleines, moteur tubulaire Somfy, pose incluse). Pour un entrepot industriel de 6 metres avec moteur central ACM, compter a partir de 3 500 euros. Devis gratuit sur mesure.",
      },
      {
        q: "Quel est le delai entre le devis et la pose ?",
        a: "Apres validation du devis, nous fabriquons votre rideau metallique en 7 a 10 jours ouvres (production francaise). La pose se realise ensuite en 1 journee par notre equipe de 2 techniciens. Pour les urgences, nous proposons une fabrication express en 4 heures sur certaines dimensions courantes.",
      },
      {
        q: "Quelles sont les dimensions standard et maximum ?",
        a: "Nous fabriquons et installons des rideaux metalliques de 1m a 12m de large, 1m a 6m de haut. Pour les dimensions superieures, nous realisons des rideaux contigus ou industriels specifiques. Chaque rideau est fabrique sur-mesure aux dimensions exactes de votre ouverture.",
      },
      {
        q: "Quelles couleurs proposez-vous ?",
        a: "Nos rideaux metalliques sont disponibles en standard RAL 9010 blanc, 7016 gris anthracite, 9005 noir, 3020 rouge signal, 8017 brun fonce. Sur demande, nous proposons des teintes RAL personnalisees (thermolaquage) pour les vitrines haut de gamme. Supplement selon la teinte.",
      },
      {
        q: "L'installation est-elle garantie ?",
        a: "Oui. Chaque installation realisee par DRM Corbeil-Essonnes est garantie 12 mois sur les pieces et la main-d'oeuvre. La motorisation (Somfy, Simu, ACM, Came) beneficie en plus de la garantie fabricant (2 a 5 ans selon la marque). Un carnet d'entretien vous est remis a la pose.",
      },
    ],
  },

  reparation: {
    id: "reparation",
    h1: "Reparation rideau metallique a Corbeil-Essonnes",
    metaTitle: "Reparation rideau metallique Corbeil-Essonnes",
    metaDescription: "Reparation rideau metallique a Corbeil-Essonnes (91100). Lames, moteur, axe, serrure. Devis gratuit. DRM 25+ ans. Tel 01 84 18 04 99.",
    heroSubtitle: "Remise en etat de votre rideau metallique endommage : lames, moteur, axe, serrure. Reparation garantie 12 mois a Corbeil-Essonnes et dans toute l'Essonne.",
    stats: DEFAULT_STATS,
    intro: {
      title: "Reparation complete de rideau metallique a Corbeil-Essonnes",
      paragraphs: [
        "Votre <strong>rideau metallique</strong> a subi un choc vehicule, une tentative d'effraction ou simplement l'usure du temps ? DRM Corbeil-Essonnes est specialiste de la <strong>reparation</strong> : remplacement de lames endommagees, remise a neuf du moteur, changement d'axe d'enroulement, reparation de serrure, refection complete du tablier. Nos <strong>techniciens certifies</strong> diagnostiquent la panne sur place et realisent la reparation avec des pieces d'origine.",
        "Contrairement a un simple depannage (intervention urgence), une <strong>reparation rideau metallique</strong> necessite parfois une intervention plus approfondie : demontage du coffre, remplacement d'axe, refection du tablier complet. Nous effectuons ces travaux avec le materiel adequat (grue de levage pour les axes industriels, poste a souder embarque), generalement <strong>en 2 a 4 heures</strong>.",
      ],
      image: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
      imageAlt: "Reparation rideau metallique DRM Corbeil-Essonnes Essonne",
    },
    types: {
      title: "Types de reparations rideau metallique",
      subtitle: "Tous types de reparation : lames, moteur, axe, serrure, tablier",
      items: [
        { title: "Remplacement lames", description: "Lames P57, P90, P140 en stock. Remplacement par unite ou tablier complet.", image: "/images/gallery/lame-pleine-rideau-metallique.webp" },
        { title: "Reparation moteur", description: "Somfy, Simu, ACM, Came. Condensateur, carte, bobinage. Pieces d'origine.", image: "/images/gallery/Kit-moteur-complet-ACM-rideau-metallique.webp" },
        { title: "Remplacement axe", description: "Axe tubulaire casse, tordu ou grippe. Fourniture et pose, avec grue si besoin.", image: "/images/gallery/axe-motorise-vue-eclate-rideau-metallique.webp" },
        { title: "Serrure & cylindre", description: "Remplacement cylindre europeen, 4 points, A2P. Fixation au sol renforcee.", image: "/images/gallery/Cylindre-30x30-cles-identiques-rideau-metallique.webp" },
        { title: "Coulisses & rails", description: "Coulisses deformees, rails uses. Remplacement ou redressage sur place.", image: "/images/gallery/coulisse-rideau-metallique.webp" },
        { title: "Refection tablier", description: "Remplacement complet du tablier (acier, alu, grille). Conservation du coffre.", image: "/images/gallery/tablier-rideau-metallique.webp" },
      ],
    },
    seoBlocks: [
      {
        eyebrow: "Apres effraction ou choc",
        title: "Reparation rideau metallique apres effraction a Corbeil-Essonnes",
        paragraphs: [
          "Votre commerce a ete victime d'une <strong>tentative d'effraction</strong> ou d'un <strong>choc vehicule</strong> sur votre rideau metallique ? DRM Corbeil-Essonnes intervient rapidement pour evaluer les degats et remettre votre fermeture en etat. Nous travaillons directement avec les <strong>experts d'assurance</strong> (AXA, MAIF, MACIF, Generali, Allianz) — vous nous transmettez vos coordonnees, nous gerons l'expertise et le chiffrage.",
          "Selon l'ampleur des degats, nous pouvons <strong>remplacer uniquement les lames endommagees</strong> (3 a 8 lames en general), <strong>remplacer le tablier complet</strong> avec conservation du coffre existant, ou <strong>refaire l'installation entierement</strong>. Dans tous les cas, nous pouvons poser une <strong>fermeture provisoire securisee</strong> le jour meme pour proteger votre commerce en attendant la reparation definitive.",
        ],
        image: "/images/gallery/rideau-metallique-travers-rideau-metallique-avant.webp",
        imageAlt: "Reparation rideau metallique apres effraction Corbeil-Essonnes",
      },
      {
        eyebrow: "Remise en etat moteur",
        title: "Remise a neuf moteur rideau metallique tous modeles",
        paragraphs: [
          "Le <strong>moteur de votre rideau metallique</strong> fait des bruits anormaux, ralentit, chauffe ou s'arrete en cours de course ? DRM Corbeil-Essonnes repare ou remet a neuf les moteurs de toutes marques : <strong>moteurs tubulaires Somfy RS100, Simu T5, Nice Era</strong> (integres dans l'axe), <strong>moteurs centraux ACM Titan, Came, BFT, Faac</strong> (sur platine), <strong>moteurs lateraux Sommer GIGAroll, ACM</strong> (a cote du tablier).",
          "Selon le diagnostic, nous remplacons uniquement les <strong>pieces defectueuses</strong> (condensateur, carte electronique, fin de course) ou nous procedons a un <strong>remplacement complet du moteur</strong>. Dans les deux cas, pieces d'origine (ou compatibles certifiees) et garantie 12 mois. Delai d'intervention : diagnostic sur place en 30 minutes, reparation en 1 a 3 heures.",
        ],
        image: "/images/gallery/Moteur-AFCA-5506-Monophase-Filaire-avec-Secours-rideau-metallique.webp",
        imageAlt: "Reparation moteur rideau metallique toutes marques DRM Corbeil-Essonnes",
        reverse: true,
      },
      {
        eyebrow: "Axe et tablier",
        title: "Reparation grille metallique et remplacement axe",
        paragraphs: [
          "L'<strong>axe d'enroulement</strong> est la piece centrale du rideau metallique : tube acier sur lequel s'enroule le tablier. Quand il est <strong>tordu, grippe ou casse</strong> (suite a un effort excessif, une usure ou une mauvaise manipulation), le rideau ne peut plus fonctionner. DRM Corbeil-Essonnes remplace l'axe complet avec les pieces de compensation (ressorts, anneaux, supports), en 2 a 4 heures selon la configuration.",
          "Pour les <strong>grilles metalliques</strong> (cobra, extensibles, articulees), la reparation concerne souvent les <strong>maillons uses, les tirettes cassees ou les serrures</strong>. Nous disposons en stock de maillons de toutes sections (12x12, 16x16, 20x20), de tirettes acier galvanise, et de serrures specifiques aux grilles bijoutiers. Reparation possible sur place, sans demontage complet.",
        ],
        image: "/images/gallery/Axe-motorise-rideau-metallique-poser.webp",
        imageAlt: "Remplacement axe rideau metallique DRM Corbeil-Essonnes",
      },
      {
        eyebrow: "Transparence & garantie",
        title: "Devis gratuit et reparation garantie 12 mois",
        paragraphs: [
          "Chaque <strong>reparation de rideau metallique</strong> commence par un <strong>diagnostic gratuit sur place</strong>. Notre technicien identifie la piece defaillante, propose une solution (reparation simple ou remplacement), communique un devis ferme avant travaux. Aucune intervention n'est lancee sans votre accord ecrit.",
          "Toutes nos reparations sont <strong>garanties 12 mois pieces et main-d'oeuvre</strong>. Si la meme panne reapparait dans l'annee, nous revenons gratuitement. Nous utilisons exclusivement des <strong>pieces d'origine</strong> ou certifiees equivalentes (Somfy, Simu, ACM, Came originaux). Pour les reparations complexes, nous proposons un contrat d'entretien annuel preferentiel qui prolonge la duree de vie de votre rideau.",
        ],
        image: "/images/gallery/certification-qualite-cetim-rideau-metallique.webp",
        imageAlt: "Garantie 12 mois reparation rideau metallique DRM Corbeil-Essonnes",
        reverse: true,
      },
    ],
    process: {
      title: "Comment se deroule une reparation DRM ?",
      steps: [
        { number: "01", title: "Diagnostic sur place", description: "Intervention en 30 minutes a Corbeil-Essonnes. Technicien identifie la panne et propose solution." },
        { number: "02", title: "Devis ferme", description: "Devis detaille pieces + main-d'oeuvre. Communique avant intervention. Aucun supplement cache." },
        { number: "03", title: "Reparation immediate", description: "Avec accord, reparation sur place (1 a 4 heures selon complexite). Pieces du vehicule atelier." },
        { number: "04", title: "Test et garantie", description: "Test complet de la fermeture. Facture + garantie ecrite 12 mois. Suivi direct technicien." },
      ],
    },
    whyUs: {
      title: "Pourquoi choisir DRM pour votre reparation ?",
      items: [
        { title: "Diagnostic gratuit", description: "Devis ferme avant intervention. Transparence totale sur les tarifs." },
        { title: "Pieces d'origine", description: "Somfy, Simu, ACM, Came originaux. Pas de piece bas de gamme." },
        { title: "Reparation en 2-4h", description: "Meme les reparations complexes sont realisees dans la journee." },
        { title: "Experts assurance", description: "Nous travaillons avec AXA, MAIF, MACIF, Generali, Allianz pour vos sinistres." },
        { title: "Fermeture provisoire", description: "Securisation immediate en cas de sinistre, en attendant la reparation." },
        { title: "Garantie 12 mois", description: "Pieces + main-d'oeuvre. Si la meme panne revient, retour gratuit." },
      ],
    },
    pricing: {
      title: "Tarifs indicatifs reparation rideau metallique",
      intro: "Prix a partir de. Devis gratuit et ferme communique avant intervention.",
      items: [
        { label: "Remplacement lame P57", price: "a partir de 189 EUR", desc: "Lame + main-d'oeuvre, par unite" },
        { label: "Remplacement lame P90", price: "a partir de 220 EUR", desc: "Acier 0.8mm, securite renforcee" },
        { label: "Remise a neuf moteur", price: "a partir de 390 EUR", desc: "Condensateur, carte, test" },
        { label: "Remplacement axe", price: "a partir de 450 EUR", desc: "Axe + ressorts + pose" },
        { label: "Reparation serrure", price: "a partir de 150 EUR", desc: "Cylindre europeen ou A2P" },
        { label: "Refection tablier complet", price: "sur devis", desc: "Entre 800 et 3 000 EUR selon dimensions" },
      ],
    },
    reviews: [COMMON_REVIEWS_POOL[6], COMMON_REVIEWS_POOL[5], COMMON_REVIEWS_POOL[0], COMMON_REVIEWS_POOL[3], COMMON_REVIEWS_POOL[2], COMMON_REVIEWS_POOL[4]],
    faq: [
      {
        q: "Qui appeler pour une reparation rideau metallique a Corbeil-Essonnes ?",
        a: "DRM Corbeil-Essonnes est votre specialiste reparation rideau metallique dans le 91 : remplacement de lames, reparation moteur, changement d'axe, refection du tablier. Diagnostic gratuit sur place, intervention en 30 minutes, devis ferme avant travaux. Appelez le 01 84 18 04 99, disponible 24h/24.",
      },
      {
        q: "Combien coute une reparation de rideau metallique ?",
        a: "Le prix varie selon la panne : a partir de 189 euros pour remplacer une lame P57, 390 euros pour une reparation de moteur, 450 euros pour un remplacement d'axe, 150 euros pour une serrure. Le devis gratuit est communique sur place avant toute intervention. Aucun supplement non annonce.",
      },
      {
        q: "Travaillez-vous avec les assurances ?",
        a: "Oui, DRM Corbeil-Essonnes collabore directement avec les principales assurances (AXA, MAIF, MACIF, Generali, Allianz, Groupama) en cas de sinistre (effraction, choc vehicule, vandalisme). Nous fournissons les devis, photos et rapports necessaires a l'expertise et a l'indemnisation.",
      },
      {
        q: "Pouvez-vous securiser mon commerce en attendant la reparation ?",
        a: "Oui. Si votre rideau est endommage suite a une effraction ou un choc, nous pouvons poser une fermeture provisoire securisee (grille ou panneau acier) le jour meme, en attendant la fabrication et pose du rideau definitif. Cette fermeture provisoire est incluse dans le devis de reparation.",
      },
      {
        q: "Utilisez-vous des pieces d'origine ?",
        a: "Oui, exclusivement. Pour les moteurs et electronique, nous utilisons les pieces d'origine Somfy, Simu, Nice, ACM, Came, BFT, Faac, Sommer. Pour les lames, ressorts et serrures, nous nous fournissons chez les fabricants certifies francais et europeens. Toutes pieces sont garanties 12 mois.",
      },
      {
        q: "Combien de temps dure une reparation ?",
        a: "Une reparation simple (lame, serrure, condensateur) prend 1 a 2 heures. Une reparation complexe (remplacement moteur, axe, refection tablier) prend 2 a 4 heures. Le technicien vous communique la duree estimee au moment du devis. La plupart des reparations sont realisees dans la journee.",
      },
    ],
  },

  motorisation: {
    id: "motorisation",
    h1: "Motorisation rideau metallique a Corbeil-Essonnes",
    metaTitle: "Motorisation rideau metallique Corbeil-Essonnes",
    metaDescription: "Motorisation rideau metallique a Corbeil-Essonnes. Somfy, Simu, ACM, Came. Pose 1 journee, garantie 12 mois. Tel 01 84 18 04 99.",
    heroSubtitle: "Automatisation de votre rideau metallique manuel a Corbeil-Essonnes. Moteurs Somfy, Simu, ACM, Came. Pose en 1 journee, garantie 12 mois.",
    stats: DEFAULT_STATS,
    intro: {
      title: "Motorisation de rideau metallique manuel a Corbeil-Essonnes",
      paragraphs: [
        "Vous ouvrez et fermez votre <strong>rideau metallique manuellement</strong> avec une manivelle ou une sangle ? DRM Corbeil-Essonnes vous propose une <strong>motorisation complete</strong> : suppression de l'effort manuel, ouverture/fermeture a la telecommande en quelques secondes, possibilite d'integration domotique (Somfy TaHoma), securite renforcee. La motorisation prolonge aussi la duree de vie de votre rideau (moins de stress sur l'axe et les lames).",
        "Nos techniciens installent la <strong>motorisation adaptee a votre rideau</strong> : <strong>moteur tubulaire</strong> invisible (integre a l'axe) pour les rideaux standards < 150 kg, ou <strong>moteur central / lateral</strong> pour les rideaux industriels > 150 kg. Delai : 1 journee pour la pose d'un moteur tubulaire, 1 a 2 jours pour un moteur central sur rideau industriel.",
      ],
      image: "/images/gallery/motorisation-rideau-metallique-drm-depannage.webp",
      imageAlt: "Motorisation rideau metallique DRM Corbeil-Essonnes",
    },
    types: {
      title: "Types de motorisations disponibles",
      subtitle: "Moteur tubulaire, central ou lateral — le choix depend du poids et de la configuration",
      items: [
        { title: "Somfy RS100", description: "Moteur tubulaire, integre a l'axe. Silencieux, fiable 15 ans. Jusqu'a 150 kg.", image: "/images/gallery/Moteur-tubulaire-simu-rideau-metallique-france-logo-marque.webp" },
        { title: "Simu T5", description: "Moteur tubulaire, alternative fiable a Somfy. Usage standard commerce.", image: "/images/gallery/moteur-tubulaire-simu-rideau-metallique.webp" },
        { title: "Nice Era", description: "Moteur tubulaire italien, bon rapport qualite-prix. Commerce leger.", image: "/images/gallery/logo-nice-rideau-metallique.webp" },
        { title: "ACM Titan central", description: "Moteur central sur platine. Rideaux industriels > 150 kg. Usage intensif.", image: "/images/gallery/Moteur-ACM-76-rideau-metallique.webp" },
        { title: "Came central", description: "Moteur central italien, robuste. Parkings, entrepots, grandes ouvertures.", image: "/images/gallery/logo-Came-rideau-metallique.webp" },
        { title: "Sommer GIGAroll", description: "Moteur lateral allemand. Solution quand pas de place au-dessus du coffre.", image: "/images/gallery/Moteur-lateral-SOMMER-GIGAroll-CAET.webp" },
      ],
    },
    seoBlocks: [
      {
        eyebrow: "Moteur tubulaire",
        title: "Motorisation rideau metallique Somfy Simu Nice",
        paragraphs: [
          "Pour les <strong>rideaux metalliques de commerce standard</strong> (tablier < 150 kg, ouverture < 4 m), la solution la plus courante est le <strong>moteur tubulaire</strong>. Il s'agit d'un moteur electrique integre a l'interieur de l'axe d'enroulement — invisible de l'exterieur, silencieux (30-40 dB), et fiable sur une duree de 10 a 15 ans avec peu d'entretien. Nous posons en priorite des moteurs <strong>Somfy RS100, Simu T5 et Nice Era</strong>, marques leaders avec garantie fabricant 5 ans.",
          "L'installation d'un moteur tubulaire sur un <strong>rideau manuel existant</strong> necessite de remplacer l'axe (ancien axe manuel avec sangle ou manivelle par un nouvel axe tubulaire compatible moteur), de cabler l'alimentation 230V, d'integrer un boitier de commande (interrupteur filaire ou recepteur telecommande), et de tester le fonctionnement. <strong>Duree : 3 a 5 heures en moyenne</strong>. Livre avec telecommande et notice d'utilisation.",
        ],
        image: "/images/gallery/Axe-tubulaire-rideau-metallique-france-drm-1.webp",
        imageAlt: "Moteur tubulaire Somfy Simu Nice rideau metallique Corbeil-Essonnes",
      },
      {
        eyebrow: "Moteur central ACM",
        title: "Motorisation fermeture metallique industrielle ACM Came",
        paragraphs: [
          "Pour les <strong>rideaux metalliques industriels</strong> (entrepots, parkings, ouvertures > 4 m, tablier > 150 kg), nous installons des <strong>moteurs centraux</strong> : un moteur puissant monte sur une platine au-dessus du coffre, relie a l'axe via une chaine ou un drapeau. Marques de reference : <strong>ACM Titan, Came, BFT, Faac</strong>. Puissance jusqu'a 500 kg de couple, usage intensif (100 cycles/jour), resistance a la poussiere industrielle.",
          "L'installation d'un moteur central demande une expertise technique : alignement precis du drapeau et de l'axe, tension correcte de la chaine, programmation des fins de course, cablage triphase dans certains cas. Nos techniciens sont certifies sur ces technologies. <strong>Duree : 1 journee</strong>, avec eventuellement une 2eme journee pour les rideaux tres grandes dimensions (> 8 m).",
        ],
        image: "/images/gallery/Drapeau-rideau-metallique-motorisation-centrale.webp",
        imageAlt: "Moteur central ACM Came industriel rideau metallique Corbeil-Essonnes",
        reverse: true,
      },
      {
        eyebrow: "Commande et securite",
        title: "Telecommande, digicode et integration domotique",
        paragraphs: [
          "Chaque <strong>motorisation DRM</strong> est livree avec au minimum : 1 telecommande portable (2 ou 4 canaux), 1 bouton interieur filaire pour manoeuvre d'urgence, et un <strong>systeme de manoeuvre de secours</strong> (cle carree, manivelle) en cas de coupure de courant. Options possibles : digicode sans fil exterieur, lecteur de badge RFID, interphone integre, telecommande supplementaire, cellule photoelectrique anti-coincement.",
          "Pour les commerces qui veulent moderniser leur gestion, nous proposons l'<strong>integration domotique Somfy TaHoma</strong> : pilotage du rideau metallique depuis un smartphone (Android, iOS), programmation horaire (ouverture automatique a 8h, fermeture a 20h), integration avec d'autres elements (alarme, eclairage). Compatible aussi avec Google Home, Alexa et Apple HomeKit. Installation et configuration incluses dans le devis.",
        ],
        image: "/images/gallery/digicode-sans-fil-GEBA-rideau-metallique.webp",
        imageAlt: "Telecommande digicode rideau metallique motorise Corbeil-Essonnes",
      },
      {
        eyebrow: "Investissement rentable",
        title: "Pourquoi motoriser votre rideau metallique ?",
        paragraphs: [
          "Motoriser un <strong>rideau metallique manuel</strong> est un investissement rapidement rentabilise. <strong>Confort au quotidien</strong> : plus d'effort physique, ouverture/fermeture en 10-15 secondes, aucun risque de mauvaise manipulation (sangle qui casse, manivelle qui echappe). <strong>Gain de temps</strong> : compte plusieurs minutes economisees matin et soir. <strong>Securite</strong> : le moteur integre un anti-soulevement qui empeche l'ouverture force.",
          "La motorisation <strong>prolonge aussi la duree de vie</strong> du rideau metallique : moins de stress sur l'axe, les ressorts et les lames. Un rideau motorise dure 15 a 20 ans contre 10 a 12 ans pour un rideau manuel. Enfin, c'est un <strong>argument commercial</strong> pour la revente ou la location de votre local : un rideau motorise valorise le bien de 2 000 a 5 000 euros selon la configuration.",
        ],
        image: "/images/gallery/Kit-moteur-complet-ACM-rideau-metallique.webp",
        imageAlt: "Pourquoi motoriser rideau metallique avantages Corbeil-Essonnes",
        reverse: true,
      },
    ],
    process: {
      title: "Comment se deroule une motorisation DRM ?",
      steps: [
        { number: "01", title: "Audit technique", description: "Visite gratuite. Notre technicien identifie le moteur adapte selon poids, configuration, usage." },
        { number: "02", title: "Devis et choix", description: "Devis detaille avec options (telecommande, digicode, domotique). Choix moteur et accessoires." },
        { number: "03", title: "Pose en 1 journee", description: "Remplacement axe, installation moteur, cablage, programmation. Fourniture telecommande." },
        { number: "04", title: "Formation et garantie", description: "Explications d'utilisation, notices remises, garantie 12 mois + 5 ans fabricant." },
      ],
    },
    whyUs: {
      title: "Pourquoi motoriser avec DRM ?",
      items: [
        { title: "Audit gratuit", description: "Visite a Corbeil-Essonnes, identification du moteur adapte a votre rideau." },
        { title: "Marques leaders", description: "Somfy, Simu, Nice, ACM, Came — fiabilite prouvee, garantie fabricant 5 ans." },
        { title: "Pose en 1 journee", description: "Remplacement axe + moteur + cablage en une seule intervention." },
        { title: "Telecommande incluse", description: "1 telecommande, bouton interieur, manoeuvre de secours (cle ou manivelle)." },
        { title: "Domotique possible", description: "Compatible Somfy TaHoma, Google Home, Alexa, Apple HomeKit." },
        { title: "Garantie 12+5 ans", description: "12 mois pieces et main-d'oeuvre DRM, 5 ans fabricant sur le moteur." },
      ],
    },
    pricing: {
      title: "Tarifs indicatifs motorisation rideau metallique",
      intro: "Prix a partir de. Inclut : fourniture moteur + axe + pose + telecommande + garantie.",
      items: [
        { label: "Motorisation Somfy RS100", price: "a partir de 650 EUR", desc: "Rideau standard commerce, moteur tubulaire" },
        { label: "Motorisation Simu T5", price: "a partir de 580 EUR", desc: "Alternative fiable, commerce jusqu'a 3m" },
        { label: "Motorisation Nice Era", price: "a partir de 520 EUR", desc: "Rapport qualite-prix, commerce leger" },
        { label: "Motorisation centrale ACM", price: "a partir de 1 200 EUR", desc: "Rideau industriel > 150 kg, usage intensif" },
        { label: "Motorisation Came central", price: "a partir de 1 350 EUR", desc: "Rideau industriel, entrepot > 6m" },
        { label: "Option digicode sans fil", price: "a partir de 120 EUR", desc: "Supplement pose et programmation" },
      ],
    },
    reviews: [COMMON_REVIEWS_POOL[1], COMMON_REVIEWS_POOL[5], COMMON_REVIEWS_POOL[7], COMMON_REVIEWS_POOL[2], COMMON_REVIEWS_POOL[0], COMMON_REVIEWS_POOL[4]],
    faq: [
      {
        q: "Qui appeler pour motoriser un rideau metallique a Corbeil-Essonnes ?",
        a: "DRM Corbeil-Essonnes installe toutes motorisations de rideaux metalliques dans le 91 : Somfy, Simu, Nice (tubulaires), ACM, Came, BFT, Faac, Sommer (centraux et lateraux). Audit gratuit, pose en 1 journee, garantie 12 mois. Appelez le 01 84 18 04 99 pour un devis personnalise.",
      },
      {
        q: "Combien coute une motorisation de rideau metallique ?",
        a: "Le prix d'une motorisation varie selon le moteur choisi et la configuration : a partir de 520 euros pour un moteur Nice Era, 650 euros pour un Somfy RS100 (commerce standard), 1 200 euros pour un moteur central ACM (industriel). Inclut : fourniture moteur, axe, pose, telecommande, test, garantie.",
      },
      {
        q: "Quelle difference entre moteur tubulaire et moteur central ?",
        a: "Le moteur tubulaire s'integre DANS l'axe d'enroulement (invisible, silencieux, pour tabliers < 150 kg, commerce standard). Le moteur central est monte SUR une platine au-dessus du coffre (plus puissant, pour tabliers > 150 kg, entrepots et industriel). Nous identifions le moteur adapte lors de la visite technique gratuite.",
      },
      {
        q: "Peut-on motoriser un rideau metallique tres ancien ?",
        a: "Oui, dans la grande majorite des cas. Nous evaluons d'abord l'etat du tablier, de l'axe et des coulisses. Si le tablier est sain, nous motorisons en remplaçant l'axe manuel par un axe tubulaire compatible moteur. Si le rideau est trop use (lames pliees, coulisses deformees), nous proposons une installation complete neuve.",
      },
      {
        q: "Le moteur fonctionne-t-il en cas de coupure de courant ?",
        a: "Chaque motorisation DRM est livree avec un systeme de manoeuvre de secours : pour les moteurs tubulaires, une cle carree permet de descendre manuellement le rideau. Pour les moteurs centraux, une manivelle d'urgence. Possibilite d'ajouter un onduleur/batterie de secours pour les commerces qui veulent garantir le fonctionnement en cas de coupure.",
      },
      {
        q: "Puis-je piloter mon rideau depuis mon smartphone ?",
        a: "Oui, avec l'option domotique Somfy TaHoma (inclus 150-250 euros supplementaires). Vous pilotez l'ouverture/fermeture depuis votre smartphone (iOS ou Android), programmez des horaires automatiques, integrez avec Google Home, Alexa ou Apple HomeKit. Installation, configuration et formation incluses.",
      },
    ],
  },

  deblocage: {
    id: "deblocage",
    h1: "Deblocage rideau metallique a Corbeil-Essonnes",
    metaTitle: "Deblocage rideau metallique Corbeil-Essonnes",
    metaDescription: "Deblocage rideau metallique coince a Corbeil-Essonnes. Urgence 24h/24, 30 min. A partir de 149 EUR. Tel 01 84 18 04 99.",
    heroSubtitle: "Rideau metallique coince, bloque en position haute ou basse ? Nos techniciens DRM liberent votre rideau en moins de 30 minutes a Corbeil-Essonnes.",
    stats: DEFAULT_STATS,
    intro: {
      title: "Deblocage d'urgence rideau metallique a Corbeil-Essonnes",
      paragraphs: [
        "Votre <strong>rideau metallique est bloque</strong> et vous ne pouvez ni ouvrir ni fermer votre commerce ? C'est l'une des urgences les plus courantes que nous traitons a Corbeil-Essonnes. Un rideau coince peut etre du a une <strong>lame sortie du rail</strong>, un <strong>axe d'enroulement grippe</strong>, un <strong>ressort de compensation casse</strong>, un <strong>moteur en surchauffe</strong> ou simplement une <strong>telecommande defaillante</strong>. Dans tous les cas, n'essayez pas de forcer — vous risqueriez d'endommager le tablier.",
        "Chez DRM Corbeil-Essonnes, notre equipe de <strong>deblocage</strong> intervient en moins de 30 minutes, 24h/24 et 7j/7. Nos techniciens arrivent avec tout l'outillage necessaire : leviers, cle ressort, pieces de rechange (ressorts, lames, serrures), moteurs de remplacement. <strong>Dans 95% des cas, le rideau est debloqué en 30 a 60 minutes</strong>, avec une facture fixe communiquee avant l'intervention.",
      ],
      image: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp",
      imageAlt: "Deblocage rideau metallique coince DRM Corbeil-Essonnes",
    },
    types: {
      title: "Toutes les causes de blocage traitees",
      subtitle: "Identification rapide de la cause et deblocage sans degrader le tablier",
      items: [
        { title: "Lame sortie du rail", description: "Lame qui a saute hors de la coulisse. Remise en place en douceur.", image: "/images/gallery/coulisse-rideau-metallique.webp" },
        { title: "Axe grippe", description: "Axe d'enroulement qui ne tourne plus. Demontage, nettoyage, graissage.", image: "/images/gallery/Axe-manuel-rideau-metallique.webp" },
        { title: "Ressort casse", description: "Ressort de compensation qui a cede. Tablier trop lourd pour le moteur.", image: "/images/gallery/ressorts-rideau-metallique-france.webp" },
        { title: "Moteur surchauffe", description: "Usage trop intensif, moteur coupe. Attente refroidissement + diagnostic.", image: "/images/gallery/BI-Moteur-ACM-76-rideau-metallique.webp" },
        { title: "Serrure bloquee", description: "Cylindre grippe (oxydation, gel). Deverrouillage, remplacement si besoin.", image: "/images/gallery/Cylindre-30x30-cles-identiques-rideau-metallique.webp" },
        { title: "Lame deformee", description: "Choc vehicule, tentative effraction. Remplacement ou redressage sur place.", image: "/images/gallery/lame-P57-rideau-metallique.webp" },
      ],
    },
    seoBlocks: [
      {
        eyebrow: "Urgence absolue",
        title: "Rideau metallique bloque a Corbeil-Essonnes — que faire ?",
        paragraphs: [
          "Votre <strong>rideau metallique est coince en position haute</strong> (impossible a fermer le soir) ou <strong>bloque en position basse</strong> (impossible a ouvrir le matin) ? La regle d'or : <strong>ne forcez jamais</strong>. Ni avec la telecommande, ni avec la manivelle de secours, ni en tirant sur le tablier. Forcer un rideau metallique coince peut <strong>endommager definitivement</strong> le moteur (carte electronique grillee), le tablier (lames pliees), ou l'axe d'enroulement.",
          "La premiere chose a faire : <strong>appeler DRM Corbeil-Essonnes au 01 84 18 04 99</strong>. Notre coordinateur pose quelques questions simples (comment s'est produit le blocage, bruit anormal, avez-vous essaye la manoeuvre de secours) pour pre-identifier la cause. Notre technicien arrive en 30 minutes avec les bons outils et les pieces probables, directement. Le rideau est generalement <strong>debloqué en 30 a 60 minutes</strong>, avec une facture fixe.",
        ],
        image: "/images/gallery/rideau-metallique-deblocage-rideau-metallique.webp",
        imageAlt: "Rideau metallique bloque urgence Corbeil-Essonnes DRM",
      },
      {
        eyebrow: "Deblocage sans degradation",
        title: "Deblocage fermeture metallique professionnel",
        paragraphs: [
          "La <strong>technique de deblocage d'un rideau metallique</strong> varie selon la cause. Pour une <strong>lame sortie du rail</strong>, notre technicien desengage delicatement le tablier de la coulisse, remet la lame en place et verifie le bon coulissement. Pour un <strong>axe grippe</strong>, il faut souvent demonter partiellement le coffre pour acceder a l'axe, nettoyer les roulements, regrailler, remonter. Pour un <strong>ressort casse</strong>, remplacement du ressort avec reequilibrage du tablier.",
          "Pour un <strong>moteur surchauffe</strong> (protection thermique declenchee), il suffit parfois d'attendre 15-30 minutes que le moteur refroidisse. Mais la surchauffe est souvent le symptome d'un probleme sous-jacent (tablier trop lourd a cause d'un ressort casse, axe grippe, lame qui frotte). Notre technicien identifie le <strong>probleme de fond</strong> et le traite immediatement pour eviter une nouvelle panne dans les jours suivants.",
        ],
        image: "/images/gallery/acroche-tablier-axe-rideau-metallique-drm.webp",
        imageAlt: "Technique deblocage rideau metallique professionnel DRM",
        reverse: true,
      },
      {
        eyebrow: "Apres effraction",
        title: "Deblocage et remise en securite apres tentative d'effraction",
        paragraphs: [
          "Vous decouvrez le matin votre <strong>rideau metallique force</strong>, lames deformees ou serrure fracturee ? Il s'agit d'une tentative d'<strong>effraction</strong>. Dans ce cas, n'essayez pas de manipuler le rideau — appelez d'abord la police pour constat, puis DRM Corbeil-Essonnes. Nous intervenons en urgence (30 minutes) pour <strong>securiser votre commerce</strong> : deblocage, redressage des lames, remplacement de la serrure, ou pose d'une fermeture provisoire.",
          "Pour les sinistres avec <strong>indemnisation par l'assurance</strong>, nous fournissons tous les documents necessaires : devis detaille, photos des degats, rapport technique, facture. Nous travaillons en direct avec AXA, MAIF, MACIF, Generali, Allianz, Groupama. Vous nous donnez vos coordonnees, nous gerons l'echange avec l'expert. Les reparations sont prises en charge par l'assurance sous 7 a 15 jours en general.",
        ],
        image: "/images/gallery/rideau-metallique-anti-effraction.webp",
        imageAlt: "Deblocage apres effraction rideau metallique DRM Corbeil-Essonnes",
      },
      {
        eyebrow: "Tarif fixe",
        title: "Deblocage rideau metallique a partir de 149 EUR",
        paragraphs: [
          "Chez DRM Corbeil-Essonnes, nos <strong>tarifs de deblocage</strong> sont transparents et communiques fermement avant intervention. Un <strong>deblocage simple</strong> (lame sortie, ressort non casse, moteur fonctionnel) coute <strong>a partir de 149 euros TTC</strong>, intervention comprise. Si le deblocage revele une panne plus grave (ressort casse, moteur HS, axe a remplacer), nous communiquons un nouveau devis avant d'engager les travaux — et vous restez libre de refuser.",
          "Nos tarifs sont identiques en journee, le soir, le week-end ou les jours feries. Aucun supplement d'urgence cache. <strong>Garantie 12 mois</strong> sur le deblocage : si le rideau se rebloque dans l'annee (meme cause), nous revenons gratuitement. Cette transparence est notre marque de fabrique — nous preferons des clients fideles sur 10 ans plutot que des interventions one-shot avec factures floues.",
        ],
        image: "/images/gallery/avis-client-rideau-metallique-industrielle.webp",
        imageAlt: "Tarif deblocage rideau metallique fixe transparent DRM",
        reverse: true,
      },
    ],
    process: {
      title: "Comment se deroule un deblocage DRM ?",
      steps: [
        { number: "01", title: "Appel urgence", description: "01 84 18 04 99 disponible 24h/24. Coordinateur identifie la cause probable." },
        { number: "02", title: "Arrivee en 30 min", description: "Technicien sur place avec outillage et pieces probables. Diagnostic visuel." },
        { number: "03", title: "Devis et deblocage", description: "Devis fixe communique. Avec accord, deblocage sans degrader le tablier." },
        { number: "04", title: "Test et garantie", description: "Test complet de la fermeture. Facture + garantie ecrite 12 mois." },
      ],
    },
    whyUs: {
      title: "Pourquoi choisir DRM pour un deblocage ?",
      items: [
        { title: "Intervention en 30 min", description: "Rayon 35 km Corbeil-Essonnes. Techniciens en permanence sur le terrain." },
        { title: "24h/24, 7j/7", description: "Nuit, week-ends, jours feries. Meme qualite, memes tarifs." },
        { title: "Tarifs fixes", description: "A partir de 149 EUR, communique avant intervention. Zero supplement cache." },
        { title: "Deblocage sans casse", description: "Technique professionnelle, sans degrader le tablier ni le moteur." },
        { title: "Cause de fond traitee", description: "Si le blocage revele une panne, nous la traitons sur place (avec devis)." },
        { title: "Garantie 12 mois", description: "Si le rideau se rebloque dans l'annee (meme cause), retour gratuit." },
      ],
    },
    pricing: {
      title: "Tarifs deblocage rideau metallique",
      intro: "Prix fermes communique avant intervention. Aucun supplement urgence.",
      items: [
        { label: "Deblocage simple", price: "a partir de 149 EUR", desc: "Lame ressortie, reglage, test" },
        { label: "Deblocage avec lame a remplacer", price: "a partir de 260 EUR", desc: "Deblocage + 1 lame" },
        { label: "Deblocage avec ressort casse", price: "a partir de 350 EUR", desc: "Deblocage + ressort + equilibrage" },
        { label: "Deblocage apres effraction", price: "sur devis", desc: "Selon degats, souvent pris en charge assurance" },
        { label: "Reprogrammation telecommande", price: "a partir de 65 EUR", desc: "Codage sur moteur existant" },
        { label: "Deblocage serrure", price: "a partir de 180 EUR", desc: "Deblocage + cylindre si necessaire" },
      ],
    },
    reviews: [COMMON_REVIEWS_POOL[0], COMMON_REVIEWS_POOL[3], COMMON_REVIEWS_POOL[6], COMMON_REVIEWS_POOL[5], COMMON_REVIEWS_POOL[7], COMMON_REVIEWS_POOL[2]],
    faq: [
      {
        q: "Qui appeler pour un deblocage rideau metallique a Corbeil-Essonnes ?",
        a: "DRM Corbeil-Essonnes intervient 24h/24 et 7j/7 pour tout deblocage de rideau metallique dans le 91. Arrivee en 30 minutes, tarifs fixes a partir de 149 euros, garantie 12 mois. Appelez le 01 84 18 04 99. Notre technicien debloque votre rideau sans degrader le tablier.",
      },
      {
        q: "Combien coute un deblocage de rideau metallique ?",
        a: "Un deblocage simple (lame ressortie, reglage, test) coute a partir de 149 euros TTC. Si le deblocage revele une panne plus grave (ressort casse, moteur HS, lame a remplacer), nous communiquons un devis complementaire avant d'engager les travaux. Tarifs identiques jour, nuit, week-end et jours feries.",
      },
      {
        q: "Puis-je forcer moi-meme le rideau bloque ?",
        a: "Non, surtout pas. Forcer un rideau metallique coince (avec la telecommande, la manivelle ou en tirant sur le tablier) peut endommager definitivement le moteur (carte electronique grillee), le tablier (lames pliees) ou l'axe. Attendez l'arrivee de notre technicien — il dispose des bons outils et de la technique professionnelle.",
      },
      {
        q: "Quel est le delai d'intervention d'urgence ?",
        a: "Notre delai garanti est de 30 minutes a Corbeil-Essonnes et dans un rayon de 35 km (Evry-Courcouronnes, Villabe, Ris-Orangis, Draveil, Mennecy, Grigny). Nos techniciens sont en permanence sur le terrain dans l'Essonne, 24h/24 et 7j/7 y compris les week-ends et jours feries.",
      },
      {
        q: "Le rideau se rebloque souvent, est-ce normal ?",
        a: "Non. Un blocage frequent est le signe d'une panne sous-jacente : ressort affaibli, axe qui s'use, lames qui frottent, moteur qui fatigue. Notre technicien identifie la cause de fond lors du deblocage et propose une solution durable. Un contrat d'entretien annuel (a partir de 250 euros/an) evite les blocages recurrents.",
      },
      {
        q: "Travaillez-vous apres une tentative d'effraction ?",
        a: "Oui. Si votre rideau metallique est bloque suite a une tentative d'effraction (lames deformees, serrure fracturee), nous intervenons en urgence pour securiser votre commerce : deblocage, redressage des lames ou remplacement, pose d'une fermeture provisoire si necessaire. Nous travaillons directement avec les assurances (AXA, MAIF, MACIF, Generali).",
      },
    ],
  },

  entretien: {
    id: "entretien",
    h1: "Entretien rideau metallique a Corbeil-Essonnes",
    metaTitle: "Entretien rideau metallique Corbeil-Essonnes",
    metaDescription: "Entretien rideau metallique a Corbeil-Essonnes. Contrat annuel a partir de 250 EUR. Pannes evitees, duree de vie prolongee. Tel 01 84 18 04 99.",
    heroSubtitle: "Entretien preventif de votre rideau metallique a Corbeil-Essonnes. Contrats annuels, visites de controle, graissage, reglages. Evitez les pannes.",
    stats: DEFAULT_STATS,
    intro: {
      title: "Entretien preventif rideau metallique a Corbeil-Essonnes",
      paragraphs: [
        "Un <strong>rideau metallique entretenu</strong> dure 15 a 20 ans. Un rideau laisse sans entretien ? 8 a 10 ans maximum, avec des pannes frequentes qui couteront bien plus cher que le contrat d'entretien preventif. Chez DRM Corbeil-Essonnes, nos techniciens assurent <strong>l'entretien annuel ou biannuel</strong> de votre fermeture metallique : graissage de l'axe, test moteur, reglage des fins de course, verification des ressorts, nettoyage des coulisses.",
        "Nos <strong>contrats d'entretien</strong> demarrent a partir de <strong>250 euros par an</strong> (1 visite annuelle pour un rideau standard) et incluent la <strong>priorite en cas de panne</strong> (intervention en 2h au lieu de 30 min urgence, mais sans supplement de deplacement), un <strong>tarif preferentiel</strong> sur les pieces et la main-d'oeuvre, et une <strong>garantie prolongee</strong> sur les reparations effectuees dans le cadre du contrat.",
      ],
      image: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
      imageAlt: "Entretien rideau metallique DRM Corbeil-Essonnes",
    },
    types: {
      title: "Operations d'entretien realisees",
      subtitle: "Check-list complete a chaque visite pour garantir la fiabilite",
      items: [
        { title: "Controle tablier", description: "Verification des lames, joints EPDM, serrure finale, coulisses.", image: "/images/gallery/tablier-rideau-metallique.webp" },
        { title: "Test moteur", description: "Courbe de couple, condensateur, carte electronique, fins de course.", image: "/images/gallery/Moteur-ACM-76-rideau-metallique.webp" },
        { title: "Graissage axe", description: "Roulements, rails, coulisses. Produits professionnels longue duree.", image: "/images/gallery/Lubrifiez-rails-regulierement-rideau-metallique.webp" },
        { title: "Ressorts compensation", description: "Tension, equilibrage du tablier. Remplacement preventif si fatigue.", image: "/images/gallery/ressorts-rideau-metallique-france.webp" },
        { title: "Nettoyage rails", description: "Debris, corrosion, alignement. Evite les lames qui sortent.", image: "/images/gallery/Nettoyez-rails-regulierement-rideau-metallique.webp" },
        { title: "Test serrures", description: "Cylindres, gachettes, mecanisme 4 points. Lubrification ou remplacement.", image: "/images/gallery/Serrure-rideau-metallique-profil-europeen-lame-finale-avec-cylindre.webp" },
      ],
    },
    seoBlocks: [
      {
        eyebrow: "Contrat annuel standard",
        title: "Entretien annuel rideau metallique commerces Corbeil-Essonnes",
        paragraphs: [
          "Pour la majorite des commerces de Corbeil-Essonnes (boulangeries, tabacs, pressings, coiffeurs, opticiens, restaurants), <strong>1 visite d'entretien par an</strong> est suffisante. Le rideau realise 700 a 1 000 cycles annuels (ouvertures/fermetures), ce qui genere une usure moderee des pieces mobiles. Notre technicien DRM passe 45 a 60 minutes sur votre rideau lors de la visite annuelle : <strong>diagnostic complet, graissage, reglages, tests</strong>. Rapport remis en fin de visite.",
          "Le <strong>contrat annuel standard</strong> est facture a partir de 250 euros par an (rideau commerce jusqu'a 4m, accessible sans nacelle). Il inclut la visite d'entretien, la priorite d'intervention en cas de panne (arrivee en 2h au lieu de 30 min urgence, sans supplement deplacement), et une remise de 10% sur les pieces et reparations. La plupart de nos clients reconduisent tacitement d'annee en annee.",
        ],
        image: "/images/gallery/entretien-rideau-metallique-france-entretien.webp",
        imageAlt: "Entretien annuel rideau metallique commerce Corbeil-Essonnes",
      },
      {
        eyebrow: "Contrat biannuel premium",
        title: "Entretien biannuel rideau metallique a usage intensif",
        paragraphs: [
          "Pour les commerces a <strong>fort trafic</strong> (alimentation ouverte 7j/7, tabac, grand restaurant, station-service) ou les <strong>locaux industriels</strong> (entrepots avec ouvertures multiples par jour), nous recommandons <strong>2 visites d'entretien par an</strong>, idealement au printemps et en automne. Ces visites rapprochees permettent de detecter et traiter l'usure precoce des pieces (moteur qui fatigue, ressorts qui se detendent, lames qui frottent).",
          "Le <strong>contrat biannuel premium</strong> est facture a partir de 450 euros par an. Il inclut <strong>2 visites complettes</strong>, la priorite absolue en cas de panne (intervention en 1h chrono), une remise de 15% sur pieces et main-d'oeuvre, et la garantie prolongee a 24 mois sur toutes les reparations effectuees dans le cadre du contrat. Option possible : <strong>contrat tous risques</strong> (a partir de 900 euros/an) qui inclut un certain nombre d'interventions sans facturation supplementaire.",
        ],
        image: "/images/gallery/entretien-rideau-metallique-drm-rideau-metallique.webp",
        imageAlt: "Entretien biannuel premium rideau metallique Corbeil-Essonnes",
        reverse: true,
      },
      {
        eyebrow: "Benefices concrets",
        title: "Pourquoi entretenir votre fermeture metallique ?",
        paragraphs: [
          "L'<strong>entretien preventif</strong> a trois benefices majeurs pour votre rideau metallique. <strong>1. Duree de vie prolongee</strong> : un rideau entretenu dure 15 a 20 ans contre 8 a 10 ans sans entretien. A l'echelle de 20 ans, vous economisez le cout d'un rideau neuf complet (entre 1 500 et 5 000 euros selon la taille). <strong>2. Pannes evitees</strong> : 70% des depannages urgents sont causes par un manque d'entretien (axe grippe, ressort casse, moteur surchauffe). Un rideau entretenu tombe 5 fois moins souvent en panne.",
          "<strong>3. Securite et conformite</strong> : un rideau metallique est aussi un <strong>dispositif de securite anti-intrusion</strong>. S'il ne se ferme plus correctement (blocage, serrure grippee, lames deformees), votre commerce est vulnerable. L'entretien annuel garantit le bon fonctionnement de la fermeture et peut etre exige par certaines assurances professionnelles. Notre rapport d'entretien peut servir de justificatif aupres de votre assureur.",
        ],
        image: "/images/gallery/securite-fiabilite-metallique-france.webp",
        imageAlt: "Pourquoi entretenir rideau metallique benefices Corbeil-Essonnes",
      },
      {
        eyebrow: "Tous types de rideaux",
        title: "Maintenance rideau metallique industriel, grille, polycarbonate",
        paragraphs: [
          "Nous entretenons tous les types de <strong>fermetures metalliques</strong> : <strong>rideaux a lames pleines P57 et P90</strong> (commerces standards), <strong>rideaux micro-perfores</strong> (vitrines avec visibilite), <strong>grilles cobra et extensibles</strong> (bijouteries, commerces de luxe), <strong>rideaux polycarbonate</strong> (vitrines haut de gamme), <strong>rideaux industriels grands formats</strong> (jusqu'a 12m), <strong>rideaux coupe-feu</strong>, <strong>rideaux anti-tempete</strong>.",
          "Chaque type necessite des <strong>operations d'entretien specifiques</strong>. Pour une grille cobra, verification des maillons et des tirettes. Pour un rideau industriel, controle de la chaine du moteur central, test du drapeau, verification des fins de course electromagnetiques. Pour un rideau coupe-feu, test du systeme de declenchement automatique. Nos techniciens sont formes a toutes ces configurations et disposent du materiel de diagnostic adapte.",
        ],
        image: "/images/gallery/rideau-metallique-industriel-anti-effraction.webp",
        imageAlt: "Entretien rideau metallique industriel grille polycarbonate DRM",
        reverse: true,
      },
    ],
    process: {
      title: "Comment se deroule une visite d'entretien ?",
      steps: [
        { number: "01", title: "Prise de RDV", description: "Planification sur creneau convenant a votre commerce (matin, soir, hors horaires)." },
        { number: "02", title: "Diagnostic complet", description: "Technicien controle 15 points : tablier, moteur, axe, ressorts, serrures, fins de course." },
        { number: "03", title: "Operations preventives", description: "Graissage, nettoyage, reglages, eventuellement remplacement de pieces d'usure." },
        { number: "04", title: "Rapport et facture", description: "Rapport detaille d'entretien remis. Facture fixe selon contrat souscrit." },
      ],
    },
    whyUs: {
      title: "Pourquoi souscrire un contrat DRM ?",
      items: [
        { title: "Prix fixes", description: "A partir de 250 EUR/an. Aucune mauvaise surprise, aucun supplement." },
        { title: "Priorite pannes", description: "Clients contrat interviennent en priorite (2h au lieu de 30 min urgence)." },
        { title: "Remise reparations", description: "10-15% sur les pieces et main-d'oeuvre hors contrat." },
        { title: "Rapport ecrit", description: "Liste des operations, etat des pieces, recommandations. Utile pour assurance." },
        { title: "Techniciens dedies", description: "Meme technicien d'une annee sur l'autre, connait votre installation." },
        { title: "Reconduction facile", description: "Tacite d'annee en annee, resiliation libre a tout moment sans frais." },
      ],
    },
    pricing: {
      title: "Tarifs contrats entretien rideau metallique",
      intro: "Prix a partir de, selon taille et type de rideau. Devis personnalise gratuit.",
      items: [
        { label: "Contrat annuel standard", price: "a partir de 250 EUR/an", desc: "1 visite + priorite + remise 10%" },
        { label: "Contrat biannuel", price: "a partir de 450 EUR/an", desc: "2 visites + priorite 1h + remise 15%" },
        { label: "Contrat tous risques", price: "a partir de 900 EUR/an", desc: "Entretien + interventions incluses (limite)" },
        { label: "Visite ponctuelle", price: "a partir de 195 EUR", desc: "Sans contrat, 1 visite de controle" },
        { label: "Contrat industriel (>6m)", price: "sur devis", desc: "Selon configuration, usage, dimensions" },
        { label: "Supplement rideau grille", price: "+50 EUR/an", desc: "Verification maillons et tirettes specifiques" },
      ],
    },
    reviews: [COMMON_REVIEWS_POOL[4], COMMON_REVIEWS_POOL[2], COMMON_REVIEWS_POOL[5], COMMON_REVIEWS_POOL[1], COMMON_REVIEWS_POOL[7], COMMON_REVIEWS_POOL[0]],
    faq: [
      {
        q: "Qui appeler pour un entretien rideau metallique a Corbeil-Essonnes ?",
        a: "DRM Corbeil-Essonnes propose des contrats d'entretien annuel et biannuel pour tous types de rideaux metalliques dans le 91. Tarifs a partir de 250 euros/an (visite annuelle), priorite pannes, remise pieces. Appelez le 01 84 18 04 99 pour un devis personnalise selon votre installation.",
      },
      {
        q: "Combien coute un contrat d'entretien de rideau metallique ?",
        a: "Nos contrats demarrent a partir de 250 euros par an pour un commerce standard (1 visite annuelle, priorite pannes, remise 10% sur reparations). Le contrat biannuel (2 visites) coute a partir de 450 euros par an. Pour les locaux industriels > 6m, devis personnalise. Une visite ponctuelle hors contrat coute 195 euros.",
      },
      {
        q: "A quelle frequence faut-il entretenir un rideau metallique ?",
        a: "Pour un commerce standard (700-1 000 cycles annuels), 1 visite par an suffit. Pour les commerces a fort trafic (alimentation, tabac) ou les rideaux industriels, 2 visites par an sont recommandees (printemps et automne). Un entretien regulier double la duree de vie du rideau et divise par 5 la frequence des pannes.",
      },
      {
        q: "Qu'est-ce qui est inclus dans un contrat d'entretien ?",
        a: "Le contrat standard inclut : 1 visite annuelle complete (controle 15 points, graissage, nettoyage, reglages), priorite d'intervention en cas de panne (2h chrono au lieu de 30 min urgence), remise de 10% sur les pieces et la main-d'oeuvre pour les reparations hors contrat, rapport d'entretien ecrit utile pour votre assurance.",
      },
      {
        q: "L'entretien est-il obligatoire pour l'assurance ?",
        a: "Ce n'est pas obligatoire en tant que tel, mais de nombreuses assurances professionnelles (vol, effraction, biens professionnels) conditionnent leurs garanties a un entretien regulier des dispositifs de securite, dont les rideaux metalliques. Notre rapport d'entretien annuel peut servir de justificatif. Consultez vos conditions d'assurance.",
      },
      {
        q: "Puis-je resilier mon contrat ?",
        a: "Oui. Nos contrats sont reconduits tacitement d'annee en annee, mais vous pouvez resilier a tout moment sans frais ni preavis, soit par email, soit par courrier. Pas d'engagement de duree, pas de penalite. Nous fonctionnons sur la confiance : 92% de nos clients reconduisent leur contrat d'annee en annee.",
      },
    ],
  },

  fabrication: {
    id: "fabrication",
    h1: "Fabrication rideau metallique a Corbeil-Essonnes",
    metaTitle: "Fabrication rideau metallique Corbeil-Essonnes",
    metaDescription: "Fabrication rideau metallique sur-mesure a Corbeil-Essonnes. Acier, alu, inox. Express 4H. 25+ ans. Tel 01 84 18 04 99.",
    heroSubtitle: "Fabrication francaise sur-mesure de rideaux metalliques a Corbeil-Essonnes. Acier, aluminium, inox. Toutes dimensions, toutes configurations.",
    stats: DEFAULT_STATS,
    intro: {
      title: "Fabrication sur-mesure rideau metallique francais",
      paragraphs: [
        "DRM Corbeil-Essonnes travaille avec un reseau de <strong>partenaires industriels francais</strong> pour la fabrication de rideaux metalliques sur-mesure. Chaque rideau est fabrique <strong>aux dimensions exactes de votre ouverture</strong> a partir des mesures prises par notre technicien sur place. Delai standard : 7 a 10 jours ouvres. Pour les urgences, nous proposons une <strong>fabrication express en 4 heures</strong> sur certaines dimensions courantes (lames standard, axes pretes a l'expedition).",
        "Nous fabriquons tous les <strong>elements constitutifs</strong> d'un rideau metallique : <strong>tablier</strong> (lames pleines P57 ou P90, micro-perforees aluminium, polycarbonate, grilles cobra ou extensibles), <strong>axe d'enroulement</strong> tubulaire, <strong>coulisses laterales</strong> acier thermolaque couleur RAL au choix, <strong>coffre</strong> sur-mesure 2, 3 faces ou imposte, <strong>lame finale</strong> avec joint EPDM et serrure. Possibilite egalement de fabriquer des <strong>rideaux coupe-feu, anti-tempete</strong>, <strong>rideaux contigus</strong>.",
      ],
      image: "/images/gallery/fabrication-rideau-metallique-entreprise-drm.webp",
      imageAlt: "Fabrication rideau metallique sur-mesure DRM Corbeil-Essonnes",
    },
    types: {
      title: "Types de fabrications realisees",
      subtitle: "Tous materiaux, toutes configurations, delais courts",
      items: [
        { title: "Lames pleines P57", description: "Acier galvanise 0.6mm, hauteur 57mm. Commerce standard.", image: "/images/gallery/lame-P57-rideau-metallique.webp" },
        { title: "Lames pleines P90", description: "Acier 0.8mm, hauteur 90mm. Securite renforcee, commerce > 3m.", image: "/images/gallery/lame-finale-P90-rideau-metallique.webp" },
        { title: "Lames P140 double", description: "Double paroi 140mm, isolation thermique. Industriel.", image: "/images/gallery/lame-finale-P140-rideau-metallique.webp" },
        { title: "Micro-perforees alu", description: "Vitrine avec visibilite, lumiere. Commerces de proximite.", image: "/images/gallery/lame-micro-perfore-rideau-metallique-thermolaque.webp" },
        { title: "Polycarbonate", description: "Transparence totale, securite anti-choc. Boutiques de luxe.", image: "/images/gallery/lame-polycarbonate-rideau-metallique.webp" },
        { title: "Grilles cobra", description: "Tubes acier motif cobra, A2P. Bijouteries, pharmacies.", image: "/images/gallery/grille-cobra-rideau-metallique.webp" },
      ],
    },
    seoBlocks: [
      {
        eyebrow: "Production francaise",
        title: "Fabrication rideau metallique en France sous 7 jours",
        paragraphs: [
          "Chez DRM Corbeil-Essonnes, nous travaillons avec des <strong>ateliers de fabrication francais certifies</strong> (Ile-de-France, Nord, Rhone-Alpes). Cela nous permet de garantir des <strong>delais courts</strong> (7 a 10 jours ouvres pour un rideau standard, 2 a 3 semaines pour un rideau industriel complexe), une <strong>qualite constante</strong> (aciers certifies NF, soudures controlees, thermolaquage industriel), et une <strong>tracabilite totale</strong> (chaque element porte un numero de fabrication).",
          "Toutes nos <strong>lames, axes et coulisses</strong> sont conformes a la norme europeenne <strong>NF EN 13241</strong> sur les portes et fermetures industrielles. Les grilles de securite bijoutier sont certifiees <strong>A2P niveau 1 ou 2</strong> par le CNPP. Pour les rideaux coupe-feu, certification CE avec rapport d'essai au feu (EI30, EI60, EI90 selon besoin). Nous remettons tous les documents techniques a la livraison.",
        ],
        image: "/images/gallery/fabrication-francaise-rideau-metallique.webp",
        imageAlt: "Fabrication francaise rideau metallique NF EN 13241 Corbeil-Essonnes",
      },
      {
        eyebrow: "Fabrication express 4H",
        title: "Fabrication axe rideau metallique express en 4 heures",
        paragraphs: [
          "Pour les <strong>urgences industrielles</strong> ou commerciales (axe casse, lames deformees suite a un sinistre, commande inopinement requise pour demain), notre partenaire propose une <strong>fabrication express en 4 heures</strong>. Ce service est disponible sur certaines dimensions courantes (axes de 1.5m a 6m, lames P57 et P90, coulisses standard) stockees en semi-fini dans notre atelier partenaire.",
          "Le <strong>surcout pour la fabrication express</strong> est de 25 a 40% selon l'element. En echange, vous avez votre piece en 4 heures chrono, avec possibilite de pose le jour meme par notre equipe. Ce service est particulierement utile pour les <strong>commerces qui ne peuvent pas rester fermes</strong> (alimentation, pharmacie, tabac) ou pour les sinistres qui doivent etre reparés rapidement pour indemnisation assurance.",
        ],
        image: "/images/gallery/Fabrication-express-4H-rideau-metallique.webp",
        imageAlt: "Fabrication express 4H rideau metallique urgence Corbeil-Essonnes",
        reverse: true,
      },
      {
        eyebrow: "Materiaux et finitions",
        title: "Fabrication acier, aluminium, inox, polycarbonate",
        paragraphs: [
          "Nous fabriquons des rideaux metalliques dans tous les <strong>materiaux courants et premium</strong>. <strong>Acier galvanise</strong> (lames pleines standard, le plus courant, bon rapport qualite-prix, disponible thermolaque toutes teintes RAL). <strong>Aluminium</strong> (lames micro-perforees, legeres, inoxydables, design modernes). <strong>Inox</strong> (environnements corrosifs, bord de mer, agro-alimentaire, plus cher mais inalterable). <strong>Polycarbonate</strong> (transparence totale, resistance aux chocs, boutiques haut de gamme).",
          "Pour les <strong>finitions</strong>, nous proposons le thermolaquage industriel en toutes teintes RAL (RAL 9010 blanc, 7016 gris anthracite, 9005 noir, 3020 rouge, 8017 brun, 6005 vert, etc.). Possibilite de finitions specifiques : effet metal brosse, texture martelage, 2 teintes bicolores, logo ou nom commercial thermolaque sur le tablier. Tous nos thermolaquages sont resistants UV (20 ans garantis) et anti-graffitis (option).",
        ],
        image: "/images/gallery/rideau-metallique-thermolaquage-france.webp",
        imageAlt: "Materiaux acier alu inox polycarbonate fabrication rideau metallique",
      },
      {
        eyebrow: "Configurations speciales",
        title: "Fabrication rideau metallique coupe-feu et anti-tempete",
        paragraphs: [
          "Pour les <strong>besoins specifiques de securite</strong>, nous fabriquons des rideaux metalliques techniques : <strong>rideaux coupe-feu</strong> (certifies EI30, EI60, EI90 selon exigence), <strong>rideaux anti-tempete</strong> (sabots de retenue renforces, coulisses cote tempete, resistant a des vents superieurs a 150 km/h), <strong>rideaux contigus</strong> (plusieurs modules sur un meme axe pour les grandes ouvertures), <strong>rideaux a commande centralisee</strong> (plusieurs rideaux pilotes par une meme unite).",
          "Nous fabriquons egalement des <strong>coffres speciaux</strong> : coffre 2 faces (coffre ouvert sur le dessus, pour installation en applique), coffre 3 faces (coffre ferme, pour integration dans un faux plafond), coffre imposte (integration dans un ouvrage de maçonnerie), coffre sur-mesure de grandes dimensions. Tous nos produits sont livres avec plan technique, notice de pose, et declaration de performance CE.",
        ],
        image: "/images/gallery/rideau-metallique-anti-tempete.webp",
        imageAlt: "Fabrication rideau metallique coupe-feu anti-tempete sur-mesure",
        reverse: true,
      },
    ],
    process: {
      title: "Comment se deroule une fabrication DRM ?",
      steps: [
        { number: "01", title: "Prise de mesures", description: "Technicien sur place a Corbeil-Essonnes. Mesures precises, choix materiaux." },
        { number: "02", title: "Devis et plan", description: "Devis detaille + plan technique fournis sous 48h. Aucun engagement." },
        { number: "03", title: "Fabrication", description: "Production francaise en 7 a 10 jours (ou express 4H sur demande)." },
        { number: "04", title: "Livraison et pose", description: "Livraison directe au chantier, pose en 1 journee, garantie 12 mois." },
      ],
    },
    whyUs: {
      title: "Pourquoi faire fabriquer chez DRM ?",
      items: [
        { title: "Production francaise", description: "Ateliers certifies NF EN 13241, tracabilite totale, qualite constante." },
        { title: "Sur-mesure exact", description: "Dimensions millimetrees, couleurs RAL au choix, finitions personnalisees." },
        { title: "Express 4H possible", description: "Pour les urgences, fabrication en 4h sur certaines dimensions." },
        { title: "Tous materiaux", description: "Acier, alu, inox, polycarbonate. Grilles cobra, A2P. Coupe-feu, anti-tempete." },
        { title: "Plan technique", description: "Plans fournis avec devis. Transparence totale, decision eclairee." },
        { title: "Pose et garantie", description: "Fabrication + pose en 1 forfait. Garantie 12 mois pieces et main-d'oeuvre." },
      ],
    },
    pricing: {
      title: "Tarifs indicatifs fabrication rideau metallique",
      intro: "Prix a partir de, selon dimensions, materiau, finition. Devis sur-mesure gratuit.",
      items: [
        { label: "Lames P57 galvanisees (le m2)", price: "a partir de 110 EUR/m2", desc: "Commerce standard, thermolaque blanc" },
        { label: "Lames P90 galvanisees (le m2)", price: "a partir de 145 EUR/m2", desc: "Securite renforcee, P90" },
        { label: "Lames micro-perforees alu", price: "a partir de 170 EUR/m2", desc: "Vitrine, visibilite, aluminium" },
        { label: "Grille cobra A2P (le m2)", price: "a partir de 340 EUR/m2", desc: "Bijouterie, pharmacie, A2P1 ou A2P2" },
        { label: "Coffre sur-mesure 2 ou 3 faces", price: "a partir de 480 EUR", desc: "Acier thermolaque, dimensions sur plan" },
        { label: "Supplement express 4H", price: "+25 a 40%", desc: "Selon element et dimensions" },
      ],
    },
    reviews: [COMMON_REVIEWS_POOL[2], COMMON_REVIEWS_POOL[6], COMMON_REVIEWS_POOL[4], COMMON_REVIEWS_POOL[7], COMMON_REVIEWS_POOL[1], COMMON_REVIEWS_POOL[0]],
    faq: [
      {
        q: "Qui appeler pour la fabrication d'un rideau metallique sur-mesure a Corbeil-Essonnes ?",
        a: "DRM Corbeil-Essonnes fabrique des rideaux metalliques sur-mesure en partenariat avec des ateliers francais certifies. Prise de mesures gratuite, plan technique fourni, delai 7 a 10 jours (ou 4h en express). Appelez le 01 84 18 04 99 pour un devis personnalise.",
      },
      {
        q: "Quel est le prix d'un rideau metallique sur-mesure ?",
        a: "Le prix depend des dimensions, du materiau et de la finition. Compter a partir de 110 euros/m2 pour des lames P57 galvanisees thermolaquees (commerce standard), 170 euros/m2 pour de l'aluminium micro-perfore (vitrine), 340 euros/m2 pour une grille cobra A2P (bijouterie). Un coffre sur-mesure 2 faces demarre a 480 euros. Devis gratuit detaille.",
      },
      {
        q: "Quel est le delai de fabrication ?",
        a: "Le delai standard est de 7 a 10 jours ouvres apres validation du devis (production francaise, qualite controlee). Pour les urgences, nous proposons une fabrication express en 4 heures sur certaines dimensions courantes (axes 1.5 a 6m, lames P57 et P90). Supplement express : 25 a 40% selon l'element.",
      },
      {
        q: "Quelles couleurs et finitions proposez-vous ?",
        a: "Nous proposons toutes les teintes RAL industrielles : RAL 9010 blanc, 7016 gris anthracite, 9005 noir, 3020 rouge signal, 8017 brun fonce, 6005 vert mousse, etc. Finitions speciales : effet metal brosse, texture martelage, bicolores, logo ou nom thermolaque. Tous thermolaquages sont garantis UV 20 ans. Option anti-graffitis disponible.",
      },
      {
        q: "Fabriquez-vous des rideaux coupe-feu ?",
        a: "Oui. Nous fabriquons des rideaux metalliques coupe-feu certifies EI30, EI60 ou EI90 selon vos exigences. Utiles pour les locaux ERP (etablissements recevant du public), les zones industrielles classees ICPE, ou toute exigence reglementaire de compartimentage coupe-feu. Fournis avec rapport d'essai au feu et declaration de performance CE.",
      },
      {
        q: "Les rideaux sont-ils garantis ?",
        a: "Oui. Chaque rideau fabrique et pose par DRM est garanti 12 mois sur les pieces ET sur la main-d'oeuvre. Le thermolaquage est garanti 20 ans contre les UV (pas de decoloration). La motorisation (si incluse) beneficie de la garantie fabricant additionnelle : 5 ans Somfy et Simu, 2 ans ACM et Came.",
      },
    ],
  },
};
