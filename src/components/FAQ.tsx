"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
};

const faqs = [
  {
    q: "Qui appeler pour un depannage de rideau metallique a Corbeil-Essonnes ?",
    a: "DRM Corbeil-Essonnes est votre specialiste local pour tout depannage de rideau metallique. Notre equipe intervient 24h/24 et 7j/7 en moins de 30 minutes sur Corbeil-Essonnes (91100), Evry-Courcouronnes, Villabe, Ris-Orangis, Draveil et dans toute l'Essonne. Appelez le 01 84 18 04 99 pour une intervention immediate. Devis gratuit communique avant toute reparation, garantie pieces et main-d'oeuvre 12 mois.",
  },
  {
    q: "Combien coute un depannage de rideau metallique a Corbeil-Essonnes ?",
    a: "Le prix d'un depannage de rideau metallique a Corbeil-Essonnes demarre a partir de 149 euros pour un deblocage simple. Le tarif varie selon la panne (moteur, lames, axe, serrure) et la complexite de l'intervention. Notre technicien etablit un devis gratuit et precis sur place, avant toute intervention.",
  },
  {
    q: "Quel est le delai d'intervention DRM a Corbeil-Essonnes ?",
    a: "Nous intervenons en moins de 30 minutes a Corbeil-Essonnes et dans un rayon de 35 km (Evry-Courcouronnes, Villabe, Ris-Orangis, Draveil, Mennecy, Grigny...). Notre equipe est disponible 24h/24 et 7j/7, y compris les week-ends et jours feries.",
  },
  {
    q: "Intervenez-vous la nuit et le week-end ?",
    a: "Oui. Notre service d'urgence rideau metallique est disponible 24h/24, 7j/7 a Corbeil-Essonnes, y compris la nuit, les week-ends et tous les jours feries. Le tarif de nuit s'applique entre 20h et 8h, mais nous garantissons la meme qualite d'intervention.",
  },
  {
    q: "Quelles marques de moteurs reparez-vous ?",
    a: "Nos techniciens DRM sont formes et certifies sur toutes les grandes marques : Somfy, Simu, Nice (moteurs tubulaires), ACM Titan, Came, FAAC, BFT, Sommer (moteurs centraux et lateraux). Nous avons en stock les pieces detachees de ces marques dans notre vehicule atelier.",
  },
  {
    q: "Proposez-vous un contrat d'entretien annuel ?",
    a: "Oui. Nous proposons des contrats d'entretien annuel pour les commerces et industriels a Corbeil-Essonnes a partir de 250 euros par an. Le contrat comprend 1 a 2 visites par an avec controle complet (ressorts, moteur, lames, serrures, lubrification), intervention prioritaire en cas de panne, et tarifs preferentiels.",
  },
  {
    q: "Intervenez-vous sur les rideaux de toutes tailles ?",
    a: "Oui. Nous intervenons sur tous types et tailles de rideaux metalliques : petits commerces (2-3 metres), grandes vitrines (4-6 metres), entrepots et locaux industriels (jusqu'a 12 metres). Rideaux pleins, micro-perfores, grilles cobra, grilles extensibles, polycarbonate — toutes configurations.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      data-section-lg
      style={{
        padding: "100px 20px",
        backgroundColor: COLORS.lightBg,
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: COLORS.accent,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Questions frequentes
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 500,
              color: COLORS.primary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 0 0",
            }}
          >
            FAQ <span style={{ color: COLORS.accent }}>rideau metallique</span> Corbeil-Essonnes
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((f, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid #E5E7EB",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "20px 24px",
                  background: "transparent",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  fontSize: 16,
                  fontWeight: 600,
                  color: COLORS.primary,
                  fontFamily: "inherit",
                }}
              >
                <span>{f.q}</span>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: open === i ? COLORS.accent : "#F5F3EE",
                    color: open === i ? "#FFFFFF" : COLORS.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    flexShrink: 0,
                    transition: "transform 0.2s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  style={{
                    padding: "0 24px 24px",
                    fontSize: 15,
                    color: "#4B5563",
                    lineHeight: 1.7,
                  }}
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
