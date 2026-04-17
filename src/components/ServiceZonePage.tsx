"use client";

import { useState } from "react";
import { siteConfig, services, zones } from "@/config/site";
import { servicesContent } from "@/content/services-content";
import { getZoneLocal } from "@/content/zones-local";

const COLORS = {
  accent: "#E85D04",
  accentLight: "#FFB627",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
};

const citySlug = siteConfig.city.toLowerCase().replace(/[^a-z0-9]+/g, "-");

interface Props {
  service: typeof services[number];
  zone: { name: string; slug: string; postalCode: string; distance: string };
  slug: string;
}

const serviceHeroImages: Record<string, string> = {
  depannage: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
  installation: "/images/gallery/installation-rideau-metallique-drm.webp",
  reparation: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
  motorisation: "/images/gallery/moteur-tubulaire-simu-rideau-metallique.webp",
  deblocage: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp",
  entretien: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
  fabrication: "/images/gallery/fabrication-rideau-metallique-entreprise-drm.webp",
};

const serviceImages2: Record<string, string> = {
  depannage: "/images/gallery/depannage-rideau-metallique-drm.webp",
  installation: "/images/gallery/installation-rideau-metallique-sur-mesure-france.webp",
  reparation: "/images/gallery/tablier-rideau-metallique.webp",
  motorisation: "/images/gallery/motorisation-rideau-metallique-drm-depannage.webp",
  deblocage: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp",
  entretien: "/images/gallery/entretien-rideau-metallique-drm-rideau-metallique.webp",
  fabrication: "/images/gallery/fabrication-rideau-metallique-rideau-metallique-france-drm.webp",
};

// Rotation angles for zone pages anti-duplicate
const ZONE_INTROS = [
  "Vous cherchez un specialiste du {service} rideau metallique a {zone} ? Notre equipe DRM intervient chaque jour dans les quartiers {quartiers} pour depanner, installer, motoriser ou reparer tous types de rideaux metalliques. Avec un vehicule atelier equipe de toutes les pieces detachees Somfy, Simu, ACM, Came et Nice, nous assurons une intervention reussie des la premiere visite dans 85% des cas. Nous desservons egalement {landmarks} et les alentours.",
  "Commerçants, artisans et industriels de {zone} ({zonePostal}) nous font confiance pour le {service} de leur rideau metallique. Base a Corbeil-Essonnes, a seulement {distance} de chez vous, notre equipe DRM intervient rapidement dans les zones commerciales {commerces}. Disponible 24h/24 et 7j/7 pour une intervention en moins de 30 minutes. Tarifs transparents, devis gratuit, garantie 12 mois pieces et main-d'oeuvre.",
  "A {zone} ({zonePostal}) — {localDesc} — DRM est votre partenaire de proximite pour le {service} de rideau metallique. Nos techniciens certifies se deplacent avec un vehicule atelier complet : moteurs, lames P57 et P90, ressorts, serrures cylindriques et 4 points. Nous intervenons regulierement dans les rues {rues} et les quartiers avoisinants. Intervention garantie en moins de 30 minutes, disponibilite 24h/24 et 7j/7, meme les jours feries.",
  "Besoin d'un {service} de rideau metallique a {zone} ? DRM est le reseau de reference en Essonne avec 25+ ans d'experience et des milliers d'interventions realisees. Nous connaissons bien {zone}, notamment {quartiers}, ou nous intervenons regulierement pour les commercants et entreprises. Notre delai moyen d'arrivee : 25 minutes depuis Corbeil-Essonnes. Facture fixe avant intervention, paiement CB ou virement securise.",
  "DRM Corbeil-Essonnes est votre expert local pour le {service} de rideau metallique a {zone}. Chaque jour, nos techniciens se deplacent aux abords de {landmarks} et dans les rues {rues} pour assurer les depannages et installations. Face a l'urgence, nous proposons une intervention en moins de 30 minutes meme les jours feries. La majorite de nos clients a {zone} nous sont recommandes par bouche-a-oreille.",
  "Vos fermetures metalliques doivent rester fonctionnelles en permanence pour garantir la securite de votre commerce a {zone}. DRM met a votre disposition une equipe de techniciens locaux specialises dans le {service} des rideaux metalliques de toutes marques. Nous intervenons particulierement dans les zones dynamiques de {commerces}, avec des tarifs identiques jour et nuit, week-end compris. Garantie 12 mois sur pieces et main-d'oeuvre.",
];

const ZONE_SEO_1 = [
  "Depuis plus de <strong>25 ans</strong>, DRM est specialise dans le <strong>{service} de rideau metallique</strong> a Corbeil-Essonnes et dans tout le sud de l'Essonne. Notre implantation locale nous permet d'intervenir rapidement a <strong>{zone}</strong> — notamment dans les quartiers {quartiers} — et dans les communes voisines. Nos techniciens connaissent parfaitement les axes routiers du 91 (RN7, A6, A104) et les zones d'activites locales comme {commerces} pour optimiser leurs temps de trajet.",
  "Quelle que soit la taille ou la marque de votre <strong>fermeture metallique</strong>, notre equipe saura intervenir a <strong>{zone}</strong>. Nous avons regulierement des interventions dans les rues {rues}, et nous desservons aussi les points d'activite cles comme {landmarks}. Nous travaillons sur tous les types : rideaux a lames pleines P57 et P90, micro-perfores, polycarbonate, grilles cobra et extensibles. Certifies sur <strong>Somfy, Simu, Nice, ACM, Came, FAAC, BFT, Sommer</strong>.",
  "A <strong>{zone}</strong>, nous avons deja realise des dizaines d'interventions de <strong>{service}</strong> pour des commerces, restaurants, entrepots et bureaux situes notamment dans {commerces}. Les commercants implantes aux abords de {landmarks} nous recommandent pour notre rapidite, notre transparence tarifaire et la qualite de nos reparations. Nos avis Google 4.9/5 ({ratingCount} clients) temoignent de la satisfaction des habitants du {zonePostal}.",
  "Le <strong>{service} de rideau metallique a {zone}</strong> est l'un des domaines d'expertise historique de DRM. Nous comprenons les enjeux specifiques des commerçants locaux : securite 24h/24, continuite d'exploitation, respect des horaires d'ouverture. Nos equipes sont formees pour intervenir rapidement autour de {landmarks} sans perturber votre activite. Nous utilisons des pieces d'origine certifiees, garanties 12 mois minimum.",
  "Pour le <strong>{service}</strong> de votre <strong>rideau metallique a {zone}</strong>, DRM met a votre service un reseau de techniciens qualifies et un stock permanent de pieces detachees. Notre connaissance du terrain autour de {quartiers} nous permet d'intervenir tres rapidement, souvent en moins de 20 minutes. Chaque intervention fait l'objet d'un diagnostic precis et d'un devis ferme, communique avant le debut des travaux.",
  "DRM fait partie des rares entreprises a proposer un <strong>{service} rideau metallique</strong> <strong>24 heures sur 24 et 7 jours sur 7</strong> a {zone}, y compris les nuits, week-ends et jours feries, sans supplement abusif. Notre reseau de techniciens est deploye de maniere permanente dans le sud de l'Essonne. Une fois appele, nous nous engageons a vous informer immediatement du delai d'arrivee et a respecter l'heure annoncee.",
];

const ZONE_SEO_2 = [
  "Notre <strong>vehicule atelier DRM</strong> est equipe en permanence de toutes les pieces detachees necessaires au <strong>{service} de rideau metallique</strong> : lames pleines P57 (acier galvanise 0.6mm) et P90 (0.8mm), ressorts de compensation de toutes sections, moteurs tubulaires Somfy RS100 et Simu T5, moteurs centraux ACM Titan, cylindres de serrure europeens et A2P, telecommandes codables. Cette autonomie permet a nos techniciens de resoudre <strong>85% des interventions a {zone} des la premiere visite</strong>, sans retour ni commande de piece. Un gain de temps precieux pour votre commerce ou votre local industriel.",
  "Pour les <strong>commerces et commerces de proximite de {zone}</strong> (boulangeries, tabacs, pharmacies, pressings, coiffeurs, opticiens, restaurants), nous proposons des <strong>contrats d'entretien annuels a tarif preferentiel</strong> a partir de 250 euros par an. Ces contrats incluent 1 visite de controle complete, la priorite d'intervention en cas de panne (arrivee en 2h au lieu de 30 min urgence, sans supplement de deplacement), une remise de 10% sur les pieces et la main-d'oeuvre, et la garantie prolongee sur les reparations effectuees dans le cadre du contrat.",
  "Au-dela du <strong>{service} rideau metallique a {zone}</strong>, DRM realise egalement toutes les operations liees a votre fermeture metallique : installation neuve sur-mesure, motorisation de rideaux manuels, reparation apres effraction, fabrication francaise express en 4 heures, remplacement de serrures cylindriques et 4 points, mise en conformite coupe-feu ou anti-tempete. Une entreprise unique pour tous vos besoins de <strong>securite commerciale</strong> a {zone} et dans tout le {zonePostal}.",
  "Les commerçants de <strong>{zone}</strong> savent qu'un rideau metallique defaillant n'est pas seulement un probleme mecanique — c'est une vulnerabilite pour votre commerce. DRM le comprend et intervient avec <strong>serieux et rapidite</strong> : diagnostic sur place en 10 minutes, devis detaille en 5 minutes, intervention en 1 a 3 heures selon la panne. Pour le {service} de votre rideau metallique, faites confiance a une entreprise locale qui connait les specificites de {zone} et ses zones d'activite.",
  "Nos tarifs <strong>{service} rideau metallique a {zone}</strong> restent identiques jour et nuit, week-end et jours feries. Pas de supplement urgence cache, pas de devis flous : <strong>a partir de 149 euros</strong> pour un deblocage simple, 390 euros pour une reparation de moteur, 189 euros pour remplacer une lame P57. Le devis vous est toujours communique FERMEMENT avant toute intervention. Facture detaillee, garantie 12 mois, paiement CB ou virement securise. Une tranquillite d'esprit garantie.",
  "Apres plus de 25 ans d'experience a {zone} et dans le reste de l'Essonne, notre <strong>expertise en {service} de rideau metallique</strong> couvre toutes les situations : rideau bloque en plein week-end, moteur en panne un jour de soldes, serrure grippee un lundi matin, lames deformees apres un choc. Nos techniciens ont la formation et les pieces pour traiter chaque cas. Et nous construisons des relations de confiance avec les commerçants : de nombreux clients de {zone} sont avec nous depuis plus de 10 ans.",
];

const ZONE_SEO_3 = [
  "<strong>{zone}</strong> — {localDesc} — compte de nombreux <strong>commerces de proximite</strong> dans les rues {rues}, et <strong>zones d'activite</strong> comme {commerces}, ou la fermeture metallique joue un role central. Chaque jour, nos techniciens DRM interviennent sur les boulangeries, les epiceries, les pressings, les pharmacies, les restaurants, les bureaux et les entrepots de {zone}. Cette <strong>experience terrain</strong> nous permet de comprendre les specificites locales : horaires d'ouverture, contraintes d'acces aux abords de {landmarks}, stationnement, configuration des facades.",
  "A <strong>{zone}</strong>, nous proposons un <strong>service de garde</strong> pour les commerces et industriels des secteurs {quartiers}. Un simple appel au {phone} et l'un de nos techniciens est dispatche immediatement depuis Corbeil-Essonnes (a {distance}). Tarifs identiques la nuit, le dimanche, le 14 juillet. Pas de supplement urgence abusif, pas de devis flous : notre reputation aupres des commerçants de {commerces} s'est construite sur la transparence tarifaire et la rapidite d'intervention depuis plus de 25 ans.",
  "Lors d'une <strong>intervention a {zone}</strong>, notre technicien apporte le materiel adapte a la plupart des cas de figure : moteurs Somfy RS100 et Simu T5 pour les rideaux commerciaux standards, moteurs centraux ACM Titan et Came pour les rideaux industriels, lames de rechange P57 et P90 de differentes teintes RAL. Nos interventions couvrent l'ensemble des quartiers {quartiers} et les axes {rues}, avec une attention particuliere aux commerces situes pres des points d'affluence comme {landmarks}. Cette preparation est la garantie d'une intervention reussie en une seule visite.",
  "Le tissu economique de <strong>{zone}</strong> — {localDesc} — repose en grande partie sur la continuite d'activite des commerces et entreprises locales. Un rideau metallique en panne, c'est potentiellement une journee de fermeture force pour une boulangerie de {commerces} ou un restaurant des abords de {landmarks}. DRM comprend ces enjeux et met en oeuvre des <strong>procedures d'urgence adaptees</strong> : dispatch immediat du technicien le plus proche, materiel du vehicule atelier, diagnostic en 10 minutes, reparation en moins d'1 heure dans la plupart des cas.",
  "Pour les <strong>professionnels de {zone}</strong>, DRM propose un <strong>suivi long terme</strong> via nos contrats d'entretien annuels. Apres la premiere intervention, nous gardons vos coordonnees et l'historique de votre installation — type de moteur, dimensions du tablier, particularites techniques. Lors de la prochaine panne, nous savons exactement quoi apporter. Nos clients aux alentours de {landmarks} beneficient de la priorite et de tarifs preferentiels. C'est cette approche personnalisee qui nous vaut une note de 4.9/5 sur {ratingCount} avis Google.",
  "Chaque <strong>intervention de {service} rideau metallique a {zone}</strong> est tracee : devis signe, photos avant/apres, facture detaillee, carnet de garantie. Pour les commerçants et entreprises, ce suivi est precieux en cas de sinistre (assurance) ou pour la transmission du local. Nous intervenons regulierement dans les rues {rues} et pouvons fournir des attestations de conformite pour vos <strong>fermetures metalliques</strong>. Une tracabilite qui rassure, une expertise qui dure depuis 25 ans sur Corbeil-Essonnes et ses environs.",
];

const ZONE_REVIEWS = [
  { name: "Karim B.", initials: "KB", color: "#3B82F6", rating: 5, date: "il y a 2 semaines", comment: "Intervention rapide a {zone}, technicien tres professionnel. Rideau de boulangerie debloque en 40 min, facture exactement celle annoncee. Je recommande sans hesiter DRM." },
  { name: "Sophie L.", initials: "SL", color: "#EC4899", rating: 5, date: "il y a 1 mois", comment: "Motorisation Somfy sur ma vitrine de {zone}. Travail propre, explications claires, garantie 12 mois. Equipe ponctuelle et honnete. Je vais prendre un contrat d'entretien." },
  { name: "Marc D.", initials: "MD", color: "#10B981", rating: 5, date: "il y a 3 semaines", comment: "Reparation moteur ACM sur mon entrepot de {zone}. Diagnostic correct, piece en stock, intervention en 2h. Tarif juste, facture detaillee. Equipe tres competente." },
];

export default function ServiceZonePage({ service, zone, slug }: Props) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const cityContent = servicesContent[service.id];
  const local = getZoneLocal(zone.slug);

  // Rotation index to pick content variant - use service.id hash too for more diversity
  const zoneIndex = zones.findIndex((z) => z.slug === zone.slug);
  const serviceIdHash = services.findIndex((s) => s.id === service.id);
  const rotationOffset = zoneIndex % 6;
  const rotationOffset2 = (zoneIndex + serviceIdHash * 2 + 3) % 6;
  const rotationOffset3 = (zoneIndex + serviceIdHash + 1) % 6;
  const rotationOffset4 = (zoneIndex * 2 + serviceIdHash) % 6;

  const ruesList = local?.rues.slice(0, 4).join(", ") || "";
  const quartiersList = local?.quartiers.slice(0, 4).join(", ") || "";
  const landmarksList = local?.landmarks.slice(0, 3).join(", ") || "";
  const commercesLocal = local?.commerces.join(", ") || "";
  const localDesc = local?.description || "";

  const replaceVars = (text: string): string =>
    text
      .replace(/\{service\}/g, service.name.toLowerCase())
      .replace(/\{zone\}/g, zone.name)
      .replace(/\{zonePostal\}/g, zone.postalCode)
      .replace(/\{distance\}/g, zone.distance)
      .replace(/\{ratingCount\}/g, siteConfig.ratingCount)
      .replace(/\{phone\}/g, siteConfig.phone)
      .replace(/\{rues\}/g, ruesList)
      .replace(/\{quartiers\}/g, quartiersList)
      .replace(/\{landmarks\}/g, landmarksList)
      .replace(/\{commerces\}/g, commercesLocal)
      .replace(/\{localDesc\}/g, localDesc);

  const introText = replaceVars(ZONE_INTROS[rotationOffset]);
  const seo1 = replaceVars(ZONE_SEO_1[rotationOffset2]);
  const seo2 = replaceVars(ZONE_SEO_2[rotationOffset3]);
  const seo3 = replaceVars(ZONE_SEO_3[rotationOffset4]);

  const reviews = ZONE_REVIEWS.map((r) => ({
    ...r,
    comment: r.comment.replace(/\{zone\}/g, zone.name),
  }));

  const otherServices = services.filter((s) => s.id !== service.id);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url + "/" },
      { "@type": "ListItem", position: 2, name: service.name, item: `${siteConfig.url}/${service.slug}-${citySlug}/` },
      { "@type": "ListItem", position: 3, name: zone.name, item: `${siteConfig.url}/${slug}/` },
    ],
  };

  const faqItems = [
    {
      q: `Qui appeler pour ${service.name.toLowerCase()} de rideau metallique a ${zone.name} ?`,
      a: `DRM Corbeil-Essonnes est votre specialiste pour ${service.name.toLowerCase()} de rideau metallique a ${zone.name} (${zone.postalCode}). Nous intervenons 24h/24 et 7j/7 en moins de 30 minutes, depuis notre base de Corbeil-Essonnes a ${zone.distance}. Appelez le ${siteConfig.phone}.`,
    },
    {
      q: `Combien coute un ${service.name.toLowerCase()} de rideau metallique a ${zone.name} ?`,
      a: `Le prix d'un ${service.name.toLowerCase()} de rideau metallique a ${zone.name} demarre a partir de 149 euros pour un deblocage simple. Le tarif varie selon la panne et la complexite de l'intervention. Le devis est gratuit et communique fermement avant toute intervention.`,
    },
    {
      q: `Quel est le delai d'intervention a ${zone.name} ?`,
      a: `Notre equipe intervient en moins de 30 minutes a ${zone.name} (${zone.postalCode}), 24h/24 et 7j/7 y compris les week-ends et jours feries. Nous sommes bases a Corbeil-Essonnes, a seulement ${zone.distance}.`,
    },
    {
      q: "Quelles marques de moteurs reparez-vous ?",
      a: "Nous sommes certifies sur toutes les grandes marques : Somfy RS100, Simu T5, Nice Era (tubulaires), ACM Titan, Came, FAAC, BFT, Sommer GIGAroll (centraux et lateraux). Pieces d'origine, garantie 12 mois.",
    },
    {
      q: `Intervenez-vous le week-end a ${zone.name} ?`,
      a: `Oui. Notre service est disponible 24h/24 et 7j/7 a ${zone.name}, y compris la nuit, les week-ends et tous les jours feries. Meme tarifs, meme qualite, aucun supplement urgence cache.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ paddingTop: 80, background: COLORS.primary, color: "#FFFFFF", minHeight: 420, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 30%, rgba(232,93,4,0.2) 0%, transparent 50%)" }} />
        <div data-two-col style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 20px", display: "flex", gap: 48, alignItems: "center", position: "relative", zIndex: 1 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
              <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Accueil</a> /{" "}
              <a href={`/${service.slug}-${citySlug}/`} style={{ color: "inherit", textDecoration: "none" }}>{service.name}</a> / {zone.name}
            </div>
            <h1 style={{ fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 18px 0" }}>
              {service.name} <span style={{ color: COLORS.accent }}>rideau metallique</span>
              <br />{zone.name} ({zone.postalCode})
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.65, margin: "0 0 28px 0", maxWidth: 540 }}>
              Intervention en <strong style={{ color: "#FFFFFF" }}>moins de 30 minutes</strong> a {zone.name}, 24h/24 et 7j/7. Devis gratuit, garantie 12 mois.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={siteConfig.phoneLink} style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", backgroundColor: COLORS.accent, padding: "15px 26px", borderRadius: 30, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, boxShadow: "0 8px 24px rgba(232,93,4,0.35)" }}>
                {siteConfig.phone}
              </a>
              <a href="/contact/" style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", backgroundColor: "rgba(232,93,4,0.15)", border: "1.5px solid rgba(255,255,255,0.25)", padding: "14px 24px", borderRadius: 30, textDecoration: "none" }}>
                Devis gratuit
              </a>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4 / 3" }}>
              <img src={serviceHeroImages[service.id]} alt={`${service.name} rideau metallique ${zone.name}`} title={`${service.name} rideau metallique a ${zone.name}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section data-section-lg style={{ padding: "80px 20px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, color: COLORS.primary, lineHeight: 1.25, letterSpacing: "-0.02em", margin: "0 0 24px 0" }}>
            {service.name} de <span style={{ color: COLORS.accent }}>rideau metallique</span> a {zone.name}
          </h2>
          <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.8, margin: "0 0 20px 0" }} dangerouslySetInnerHTML={{ __html: introText }} />
          <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.8, margin: 0 }}>
            Notre equipe DRM assure le <strong>{service.name.toLowerCase()} de rideau metallique a {zone.name}</strong> sur toutes configurations : commerce de proximite,
            grande vitrine, entrepot industriel, parking souterrain, local technique. Nous intervenons sur les marques <strong>Somfy, Simu, Nice, ACM, Came, FAAC, BFT, Sommer</strong>,
            avec une garantie de 12 mois sur pieces et main-d&apos;oeuvre. Devis gratuit communique avant toute intervention, paiement securise par carte ou virement.
            Pour une intervention immediate a {zone.name}, appelez directement notre numero d&apos;urgence au <strong>{siteConfig.phone}</strong>.
          </p>
        </div>
      </section>

      {/* SEO BLOCK 1 */}
      <section data-section-lg style={{ padding: "80px 20px", background: COLORS.lightBg }}>
        <div data-two-col style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <div style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
              <img src={serviceHeroImages[service.id]} alt={`${service.name} rideau metallique ${zone.name} expertise locale`} title={`DRM ${zone.name}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Intervention locale
            </span>
            <h2 style={{ fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: 500, color: COLORS.primary, margin: "12px 0 20px 0", lineHeight: 1.25 }}>
              {service.name} <span style={{ color: COLORS.accent }}>rideau metallique</span> pres de {zone.name}
            </h2>
            <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: seo1 }} />
          </div>
        </div>
      </section>

      {/* SEO BLOCK 2 */}
      <section data-section-lg style={{ padding: "80px 20px", background: "#FFFFFF" }}>
        <div data-two-col style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "row-reverse", gap: 60, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <div style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
              <img src={serviceImages2[service.id]} alt={`${service.name} fermeture metallique ${zone.name} experts DRM`} title={service.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Expertise locale
            </span>
            <h2 style={{ fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: 500, color: COLORS.primary, margin: "12px 0 20px 0", lineHeight: 1.25 }}>
              {service.name} fermeture metallique {zone.name} — experts DRM
            </h2>
            <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: seo2 }} />
          </div>
        </div>
      </section>

      {/* SEO BLOCK 3 */}
      <section data-section-lg style={{ padding: "80px 20px", background: COLORS.lightBg }}>
        <div data-two-col style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 60, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <div style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
              <img src="/images/gallery/livraison-rideau-metallique-camion.webp" alt={`Vehicule atelier DRM intervention ${zone.name}`} title={`DRM ${zone.name} intervention`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Service de proximite
            </span>
            <h2 style={{ fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: 500, color: COLORS.primary, margin: "12px 0 20px 0", lineHeight: 1.25 }}>
              Votre partenaire local a {zone.name}
            </h2>
            <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: seo3 }} />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section data-section-lg style={{ padding: "80px 20px", background: COLORS.lightBg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>Avis clients</span>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, color: COLORS.primary, margin: "12px 0 0 0" }}>
              Ils nous ont fait confiance a {zone.name}
            </h2>
          </div>
          <div data-grid-3 style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
                  {[...Array(r.rating)].map((_, s) => <span key={s} style={{ color: "#FBBF24", fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6, margin: "0 0 16px 0" }}>{r.comment}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: r.color, color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>
                    {r.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.primary }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: "#6B7280" }}>{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-section-lg style={{ padding: "80px 20px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, color: COLORS.primary, textAlign: "center", margin: "0 0 40px 0", letterSpacing: "-0.02em" }}>
            FAQ — {service.name} {zone.name}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqItems.map((f, i) => (
              <div key={i} style={{ background: COLORS.lightBg, borderRadius: 12, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  style={{ width: "100%", padding: "18px 22px", background: "transparent", border: "none", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, fontSize: 15, fontWeight: 600, color: COLORS.primary, fontFamily: "inherit" }}
                >
                  <span>{f.q}</span>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: openFAQ === i ? COLORS.accent : "#FFFFFF", color: openFAQ === i ? "#FFFFFF" : COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, transform: openFAQ === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.2s" }}>+</span>
                </button>
                {openFAQ === i && (
                  <div style={{ padding: "0 22px 22px", fontSize: 14, color: "#4B5563", lineHeight: 1.7 }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAILLAGE */}
      <section data-section-lg style={{ padding: "80px 20px", background: COLORS.lightBg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: 500, color: COLORS.primary, textAlign: "center", margin: "0 0 32px 0" }}>
            Nos autres services a {zone.name}
          </h2>
          <div data-grid-3 style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
            {otherServices.map((s) => (
              <a
                key={s.id}
                href={`/${s.slug}-${zone.slug}/`}
                style={{
                  padding: 20,
                  background: "#FFFFFF",
                  borderRadius: 12,
                  textDecoration: "none",
                  color: COLORS.primary,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 600, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.08em" }}>{zone.name}</span>
                <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0, color: COLORS.primary }}>{s.name} rideau metallique</h3>
                <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.accent, marginTop: 6 }}>Decouvrir →</span>
              </a>
            ))}
          </div>

          <div style={{ paddingTop: 32, borderTop: "1px solid #E5E7EB" }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: COLORS.primary, textAlign: "center", margin: "0 0 20px 0" }}>
              {service.name} rideau metallique dans les villes voisines
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {zones.filter((z) => z.slug !== zone.slug).slice(0, 10).map((z) => (
                <a
                  key={z.slug}
                  href={`/${service.slug}-${z.slug}/`}
                  style={{
                    padding: "9px 16px",
                    background: "#FFFFFF",
                    borderRadius: 20,
                    textDecoration: "none",
                    color: COLORS.primary,
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {z.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
