"use client";

import { siteConfig } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
};

export default function Testimonials() {
  const reviews = [
    {
      name: "Karim B.",
      initials: "KB",
      color: "#3B82F6",
      rating: 5,
      date: "il y a 2 semaines",
      service: "Depannage",
      comment:
        "Rideau bloque a 22h un vendredi soir. Le technicien DRM etait chez moi en 25 minutes a Corbeil-Essonnes. Probleme de ressort identifie et repare dans la nuit. Tres professionnel, prix correct, facture claire. Je recommande.",
    },
    {
      name: "Sophie L.",
      initials: "SL",
      color: "#EC4899",
      rating: 5,
      date: "il y a 1 mois",
      service: "Motorisation",
      comment:
        "Installation d&apos;un moteur Somfy sur mon rideau manuel de boulangerie. Travail propre, intervention rapide (3h), explications claires sur l&apos;utilisation. Tres content du resultat a Evry-Courcouronnes.",
    },
    {
      name: "Marc D.",
      initials: "MD",
      color: "#10B981",
      rating: 5,
      date: "il y a 3 semaines",
      service: "Installation",
      comment:
        "Devis gratuit et realiste, pose d&apos;un rideau metallique neuf en 1 journee sur mon entrepot a Villabe. Lames P90, moteur ACM central. Equipe serieuse, je les rappellerai pour l&apos;entretien annuel.",
    },
  ];

  return (
    <section
      id="reviews"
      data-section-lg
      style={{
        padding: "100px 20px",
        backgroundColor: COLORS.lightBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: COLORS.accent,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Avis clients Google
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 500,
              color: COLORS.primary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 16px 0",
            }}
          >
            {siteConfig.rating}/5 sur {siteConfig.ratingCount} avis
          </h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12 }}>
            <img
              src="/images/logos/google-logo.webp"
              alt="Google"
              width={80}
              height={28}
              style={{ width: 80, height: "auto", objectFit: "contain" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div style={{ display: "flex", gap: 3 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} style={{ color: "#FBBF24", fontSize: 20 }}>★</span>
              ))}
            </div>
          </div>
        </div>

        <div
          data-reviews-grid
          data-grid-3
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                borderRadius: 16,
                padding: 28,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {[...Array(r.rating)].map((_, s) => (
                  <span key={s} style={{ color: "#FBBF24", fontSize: 18 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.65, margin: "0 0 24px 0" }}>
                {r.comment}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: r.color,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  {r.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: COLORS.primary }}>
                    {r.name}
                  </div>
                  <div style={{ fontSize: 13, color: "#6B7280" }}>
                    {r.service} · {r.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
