import { siteConfig } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
};

const blocks = [
  {
    eyebrow: "Pourquoi DRM Corbeil-Essonnes",
    title: "Expert rideau metallique en Essonne depuis 25 ans",
    paragraphs: [
      "Implantee a Corbeil-Essonnes, <strong>DRM</strong> est une entreprise specialisee dans le <strong>depannage, l'installation, la motorisation et la reparation de rideaux metalliques</strong> pour commerces, entrepots et batiments industriels. Notre equipe intervient chaque jour sur les axes du 91 : RN7, A6, A104, N104 et dessert toutes les zones d'activites d'Evry-Courcouronnes, Lisses, Villabe et le Coudray-Montceaux.",
      "Un rideau metallique en panne, c'est un commerce ferme et une perte de chiffre d'affaires. C'est pourquoi nos techniciens DRM sont disponibles <strong>24h/24</strong> et interviennent en <strong>moins de 30 minutes</strong> partout a Corbeil-Essonnes. Notre vehicule atelier embarque toutes les pieces detachees necessaires (lames P57 et P90, moteurs Somfy et ACM, ressorts, serrures cylindrique et 4 points) pour une reparation souvent reussie des la premiere visite.",
    ],
    image: "/images/gallery/depannage-rideau-metallique-drm-france-rm.webp",
    alt: "Technicien DRM intervention rideau metallique Corbeil-Essonnes",
  },
  {
    eyebrow: "Notre methode",
    title: "Une intervention de qualite, pieces garanties",
    paragraphs: [
      "Des votre appel, nous etablissons un <strong>diagnostic telephonique precis</strong> pour preparer le bon materiel. Notre technicien certifie se deplace dans un vehicule equipe d'un atelier complet : perceuse, poste a souder, meuleuse, stock de lames, moteurs et ressorts de toutes marques. Un <strong>devis gratuit et detaille</strong> vous est remis avant toute intervention — aucune mauvaise surprise sur la facture.",
      "Nous intervenons sur toutes les pannes courantes : <strong>rideau bloque</strong> en position haute ou basse, moteur qui ne repond plus (condensateur HS, carte electronique, surchauffe), lames deformees suite a un choc ou une tentative d'effraction, serrure grippee, telecommande defectueuse, ressort de compensation casse. Chaque reparation est garantie <strong>pieces et main-d'oeuvre 12 mois</strong>.",
    ],
    image: "/images/gallery/installation-rideau-metallique-drm.webp",
    alt: "Methode intervention DRM - installation rideau metallique",
    reverse: true,
  },
  {
    eyebrow: "Produits et marques",
    title: "Specialiste Somfy, Simu, ACM, Came et Nice",
    paragraphs: [
      "Chez DRM Corbeil-Essonnes, nos techniciens sont <strong>certifies sur toutes les grandes marques</strong> de moteurs et accessoires. Pour les moteurs tubulaires, nous travaillons avec <strong>Somfy RS100, Simu T5 et Nice Era</strong> — solution silencieuse pour les commerces standard de moins de 150 kg. Pour les rideaux lourds (> 150 kg), nous installons des moteurs centraux <strong>ACM Titan, Came, BFT, Faac</strong>.",
      "Cote tablier, nous fournissons des <strong>lames pleines P57 (acier galvanise 0.6mm)</strong> et <strong>P90 (acier 0.8mm)</strong> pour la securite renforcee, des lames <strong>micro-perforees aluminium</strong> pour les vitrines, des <strong>tubes ondules</strong> pour la ventilation et des grilles <strong>cobra</strong> ou <strong>extensibles</strong> pour les bijouteries et commerces de luxe. Tous nos produits sont conformes aux normes europeennes et certifies A2P.",
    ],
    image: "/images/gallery/moteur-tubulaire-simu-rideau-metallique-france.webp",
    alt: "Moteurs Somfy Simu ACM rideau metallique DRM Corbeil-Essonnes",
  },
  {
    eyebrow: "Nos engagements",
    title: "Transparence, rapidite, garantie 12 mois",
    paragraphs: [
      "Chez DRM Corbeil-Essonnes, nous croyons qu'un <strong>depannage urgence</strong> ne doit pas etre synonyme de tarif abusif. Nos prix sont clairs et communiques avant intervention : a partir de <strong>149 euros</strong> pour un deblocage simple, 390 euros pour une reparation de moteur, 500 euros pour une motorisation complete. Aucun frais cache, aucun supplement non annonce.",
      "Nous garantissons chaque reparation et installation pendant <strong>12 mois</strong> (pieces et main-d'oeuvre). Nos techniciens portent le polo bleu DRM avec les lettres blanches au dos — gage de notre certification et de notre professionnalisme. Pour les commerces de Corbeil-Essonnes, nous proposons egalement des <strong>contrats d'entretien annuel</strong> a tarif preferentiel a partir de 250 euros par an.",
    ],
    image: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
    alt: "Engagements DRM Corbeil-Essonnes - entretien rideau metallique",
    reverse: true,
  },
];

export default function SEOContent() {
  return (
    <section data-section-lg style={{ padding: "100px 20px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 100 }}>
        {blocks.map((b, i) => (
          <div
            key={i}
            data-two-col
            style={{
              display: "flex",
              flexDirection: b.reverse ? "row-reverse" : "row",
              alignItems: "center",
              gap: 72,
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  aspectRatio: "4 / 3",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={b.image}
                  alt={b.alt}
                  title={b.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: COLORS.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {b.eyebrow}
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 500,
                  color: COLORS.primary,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                {b.title}
              </h2>
              {b.paragraphs.map((p, pi) => (
                <p
                  key={pi}
                  style={{
                    fontSize: 16,
                    color: "#4B5563",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
              {i === 0 && (
                <a
                  href={siteConfig.phoneLink}
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    backgroundColor: COLORS.accent,
                    padding: "14px 24px",
                    borderRadius: 30,
                    textDecoration: "none",
                    width: "fit-content",
                    marginTop: 8,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Appeler {siteConfig.phone}
                </a>
              )}
              {i === 3 && (
                <a
                  href="/contact/"
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: COLORS.primary,
                    backgroundColor: "transparent",
                    border: `1.5px solid ${COLORS.primary}`,
                    padding: "13px 24px",
                    borderRadius: 30,
                    textDecoration: "none",
                    width: "fit-content",
                    marginTop: 8,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Demander un devis gratuit
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
