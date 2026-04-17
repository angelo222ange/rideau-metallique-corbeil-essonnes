export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "pannes-frequentes-rideau-metallique",
    title: "Top 5 des pannes de rideau metallique et comment les reparer",
    excerpt:
      "Rideau bloque, moteur qui coince, lames deformees : decouvrez les pannes les plus frequentes et les solutions des pros DRM Corbeil-Essonnes.",
    image: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
    date: "12 avril 2026",
    category: "Depannage",
    content: `
<h2>Les 5 pannes de rideau metallique les plus frequentes</h2>
<p>Dans notre experience de plus de <strong>25 ans</strong> a Corbeil-Essonnes, 90% des urgences concernent les memes types de pannes. Voici le top 5 des problemes que nos techniciens rencontrent chaque jour sur le terrain.</p>

<h3>1. Rideau bloque en position haute ou basse</h3>
<p>C'est la panne la plus frequente. Elle est causee par une <strong>lame sortie du rail</strong>, un ressort de compensation casse, un axe grippe ou un moteur qui a surchauffe. Le rideau ne monte plus ou ne descend plus, parfois il reste bloque a mi-course.</p>
<p><strong>Solution :</strong> ne forcez JAMAIS. Appelez un technicien DRM — forcer peut endommager le tablier et multiplier les couts de reparation. Nos techniciens arrivent avec les pieces de rechange.</p>

<h3>2. Moteur qui ne repond plus</h3>
<p>Le moteur tubulaire (Somfy, Simu, Nice) ou central (ACM, Came) peut tomber en panne a cause d'un <strong>condensateur HS</strong>, d'une carte electronique defectueuse ou d'une surchauffe. Premier reflexe : verifier le disjoncteur et la telecommande (piles).</p>
<p>Si le probleme persiste, c'est souvent le condensateur (20-40 euros de piece). Nos techniciens disposent de tous les condensateurs en stock.</p>

<h3>3. Lames deformees ou arrachees</h3>
<p>Suite a un <strong>choc de vehicule</strong>, une tentative d'effraction ou simplement l'usure, les lames peuvent se deformer. Cela bloque le mecanisme d'enroulement.</p>
<p>Nous remplacons les lames <strong>P57 (acier 0.6mm)</strong> ou <strong>P90 (acier 0.8mm)</strong> en stock, avec une garantie 12 mois. Compter 189 a 500 euros pour un remplacement de 3 a 5 lames.</p>

<h3>4. Serrure grippee ou cylindre casse</h3>
<p>L'oxydation, le gel hivernal et l'usure finissent par bloquer le cylindre de la serrure. Parfois, le cylindre casse completement, rendant impossible l'ouverture.</p>
<p>Nous remplacons les <strong>cylindres europeens et A2P</strong> en quelques minutes. Pour les serrures 4 points, comptez 150 a 250 euros tout compris.</p>

<h3>5. Telecommande perdue ou defaillante</h3>
<p>Les telecommandes Somfy, Simu et Came peuvent perdre leur programmation apres une coupure de courant ou un changement de pile. Nous reprogrammons sur place ou fournissons une nouvelle telecommande codee sur le moteur.</p>

<h2>Appelez DRM Corbeil-Essonnes 24h/24</h2>
<p>Chez DRM, nous intervenons en <strong>moins de 30 minutes</strong> a Corbeil-Essonnes, Evry-Courcouronnes, Villabe et dans toute l'Essonne. Appelez le <strong>01 84 18 04 99</strong> — devis gratuit, garantie 12 mois.</p>
    `.trim(),
  },
  {
    slug: "choisir-motorisation-rideau-metallique",
    title: "Comment choisir la motorisation de votre rideau metallique ?",
    excerpt:
      "Moteur tubulaire Somfy, central ACM ou lateral Sommer : nos experts DRM Corbeil-Essonnes vous guident dans votre choix.",
    image: "/images/gallery/motorisation-rideau-metallique-drm-depannage.webp",
    date: "5 avril 2026",
    category: "Motorisation",
    content: `
<h2>Motoriser son rideau metallique : les 3 technologies</h2>
<p>Vous souhaitez automatiser votre rideau metallique manuel a Corbeil-Essonnes ? Excellente idee : plus de confort, plus de securite, et une plus-value pour votre commerce. Voici les <strong>3 types de motorisations</strong> disponibles et comment choisir.</p>

<h3>1. Moteur tubulaire (Somfy, Simu, Nice)</h3>
<p>Le moteur tubulaire s'integre <strong>a l'interieur de l'axe d'enroulement</strong>. Invisible, silencieux, il convient parfaitement aux commerces standards jusqu'a <strong>150 kg de tablier</strong>. Prix : 350 a 700 euros pose.</p>
<p>Marques recommandees : Somfy RS100, Simu T5, Nice Era. Ces moteurs ont une duree de vie de 10 a 15 ans avec un entretien minimal.</p>

<h3>2. Moteur central (ACM Titan, Came, BFT, Faac)</h3>
<p>Le moteur central se monte <strong>au-dessus du coffre</strong> sur une platine. Il est destine aux <strong>rideaux lourds (> 150 kg)</strong> : entrepots, locaux industriels, grandes vitrines. Puissance elevee, resistance a l'usage intensif.</p>
<p>Comptez 500 a 1 200 euros pose pour un moteur central haut de gamme avec manoeuvre de secours.</p>

<h3>3. Moteur lateral (Sommer, ACM)</h3>
<p>Plus rare, le moteur lateral se monte a cote du tablier quand il n'y a <strong>pas la place au-dessus du coffre</strong>. Solution adaptee aux configurations techniques complexes.</p>

<h2>Quels criteres pour bien choisir ?</h2>
<ul>
  <li><strong>Poids du tablier</strong> : tubulaire < 150 kg, central > 150 kg</li>
  <li><strong>Frequence d'utilisation</strong> : usage intensif = moteur central</li>
  <li><strong>Niveau sonore souhaite</strong> : tubulaire = silencieux, central = plus bruyant</li>
  <li><strong>Budget</strong> : tubulaire = moins cher, central = plus puissant</li>
  <li><strong>Place disponible</strong> : dans l'axe, au-dessus du coffre, ou sur le cote</li>
</ul>

<h2>Pourquoi passer par DRM Corbeil-Essonnes ?</h2>
<p>Nos techniciens sont <strong>certifies sur toutes les grandes marques</strong>. Nous effectuons le diagnostic gratuit, recommandons le moteur adapte a votre configuration, et assurons la pose avec <strong>garantie 12 mois</strong>. Devis gratuit : 01 84 18 04 99.</p>
    `.trim(),
  },
  {
    slug: "entretien-rideau-metallique",
    title: "L'entretien annuel du rideau metallique : pourquoi c'est essentiel",
    excerpt:
      "Un entretien regulier prolonge la duree de vie de votre rideau metallique de 10 ans. Voici le programme recommande par DRM Corbeil-Essonnes.",
    image: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
    date: "28 mars 2026",
    category: "Entretien",
    content: `
<h2>Pourquoi l'entretien annuel est indispensable</h2>
<p>Un rideau metallique fonctionne <strong>plusieurs centaines de fois par an</strong>. Sans entretien, les pieces mobiles s'usent prematurement, les moteurs lachent et les ressorts cassent au pire moment. Chez DRM Corbeil-Essonnes, nous avons vu trop de commerces forces de fermer plusieurs jours a cause d'une panne evitable.</p>

<h3>Les 7 operations d'un entretien DRM complet</h3>
<ol>
  <li><strong>Controle du tablier</strong> : verification des lames, joints EPDM, serrure finale</li>
  <li><strong>Verification du coffre</strong> : ressorts de compensation, fixations, tension</li>
  <li><strong>Test moteur</strong> : courbe de couple, condensateur, carte electronique</li>
  <li><strong>Graissage de l'axe</strong> : roulements, rails, coulisses</li>
  <li><strong>Nettoyage des rails</strong> : debris, corrosion, alignement</li>
  <li><strong>Verification de la serrure</strong> : cylindre, gachette, mecanisme 4 points</li>
  <li><strong>Test de la telecommande</strong> : portee, programmation, piles</li>
</ol>

<h2>Programme d'entretien recommande</h2>
<p>Pour un commerce standard, nous recommandons <strong>1 visite par an</strong> (750 a 1 000 cycles annuels). Pour les commerces a fort trafic (alimentation, tabac, pressing), <strong>2 visites par an</strong> sont necessaires.</p>

<h3>Contrat d'entretien annuel DRM</h3>
<p>Notre contrat couvre :</p>
<ul>
  <li>1 a 2 visites programmees par an</li>
  <li>Diagnostic complet avec rapport</li>
  <li><strong>Tarif preferentiel</strong> sur les pieces et interventions</li>
  <li>Intervention <strong>prioritaire</strong> en cas de panne (< 2h)</li>
  <li>Garantie 24 mois sur les reparations</li>
</ul>

<p>Prix du contrat : a partir de <strong>250 euros par an</strong> pour un rideau standard. Devis personnalise selon votre installation.</p>

<h2>Besoin d'un entretien a Corbeil-Essonnes ?</h2>
<p>Appelez DRM Corbeil-Essonnes au <strong>01 84 18 04 99</strong>. Intervention rapide sur toutes les marques (Somfy, Simu, ACM, Came, FAAC). Secteur : Corbeil-Essonnes, Evry-Courcouronnes, Villabe, Ris-Orangis et toute l'Essonne.</p>
    `.trim(),
  },
];
