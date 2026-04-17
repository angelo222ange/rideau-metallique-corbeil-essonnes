"use client";

import { useState } from "react";
import { siteConfig, services, zones } from "@/config/site";
import type { ServiceContent } from "@/content/services-content";

const COLORS = {
  accent: "#E85D04",
  accentLight: "#FFB627",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
  warmBg: "#FAEBDD",
};

interface Props {
  service: typeof services[number];
  zone: { name: string; slug: string; postalCode: string; distance: string };
  content: ServiceContent;
  slug: string;
}

const citySlug = siteConfig.city.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function ServicePageFull({ service, zone, content, slug }: Props) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  // Schema.org Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/${slug}/#service`,
    name: content.h1,
    description: content.heroSubtitle,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.fullName,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.addressStreet,
        addressLocality: siteConfig.city,
        postalCode: siteConfig.postalCode,
        addressCountry: "FR",
      },
    },
    areaServed: {
      "@type": "City",
      name: zone.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "149",
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url + "/" },
      { "@type": "ListItem", position: 2, name: content.h1, item: `${siteConfig.url}/${slug}/` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ paddingTop: 80, background: COLORS.primary, color: "#FFFFFF", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 85% 30%, rgba(232,93,4,0.2) 0%, transparent 55%)" }} />
        <div
          data-hero-inner
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 20px",
            display: "flex",
            gap: 60,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 18 }}>
              <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Accueil</a> / <span style={{ color: COLORS.accentLight }}>{service.name}</span>
            </div>
            <div
              style={{
                display: "inline-flex",
                gap: 8,
                background: "rgba(232,93,4,0.18)",
                border: "1px solid rgba(232,93,4,0.35)",
                color: COLORS.accentLight,
                padding: "7px 14px",
                borderRadius: 22,
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 22,
                width: "fit-content",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B981" }} />
              Intervention en 30 min a {zone.name}
            </div>
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: "0 0 22px 0",
              }}
            >
              {service.name} <span style={{ color: COLORS.accent }}>rideau metallique</span>
              <br />a {zone.name} ({zone.postalCode})
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.65, margin: "0 0 30px 0", maxWidth: 560 }}>
              {content.heroSubtitle}
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href={siteConfig.phoneLink}
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  backgroundColor: COLORS.accent,
                  padding: "16px 28px",
                  borderRadius: 30,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  boxShadow: "0 10px 30px rgba(232,93,4,0.4)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2a15.074 15.074 0 0 1-6.59-6.58l2.2-2.21c.27-.27.35-.66.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                </svg>
                {siteConfig.phone}
              </a>
              <a
                href="/contact/"
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "rgba(232,93,4,0.15)",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  padding: "15px 26px",
                  borderRadius: 30,
                  textDecoration: "none",
                }}
              >
                Devis gratuit
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 28 }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1, 2, 3, 4, 5].map((s) => <span key={s} style={{ color: "#FBBF24", fontSize: 18 }}>★</span>)}
              </div>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                <strong style={{ color: "#FFFFFF" }}>{siteConfig.rating}/5</strong> sur {siteConfig.ratingCount} avis
              </span>
            </div>
          </div>

          <div data-hero-right style={{ flex: 1 }}>
            <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
              <img
                src={content.intro.image}
                alt={content.intro.imageAlt}
                title={content.h1}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section data-section style={{ background: "#FFFFFF", padding: "50px 20px", borderBottom: "1px solid #F0F0F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div data-stats style={{ display: "flex", justifyContent: "space-between", gap: 40 }}>
            {content.stats.map((s, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center", borderRight: i < content.stats.length - 1 ? "1px solid #E5E7EB" : "none", padding: "0 20px" }}>
                <div style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: COLORS.accent, lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 14, color: "#6B7280", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO TWO-COLUMN */}
      <section data-section-lg style={{ padding: "100px 20px", background: "#FFFFFF" }}>
        <div data-two-col style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 72, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
              <img
                src={content.intro.image}
                alt={content.intro.imageAlt}
                title={content.intro.imageAlt}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Presentation du service
            </span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: COLORS.primary, lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0 }}>
              {content.intro.title}
            </h2>
            {content.intro.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      </section>

      {/* TYPES CARDS */}
      <section data-section-lg style={{ padding: "100px 20px", background: COLORS.lightBg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Types d&apos;interventions
            </span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: COLORS.primary, margin: "12px 0", letterSpacing: "-0.02em" }}>
              {content.types.title}
            </h2>
            <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 700, margin: "0 auto" }}>{content.types.subtitle}</p>
          </div>
          <div data-grid-3 style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {content.types.items.map((t, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ aspectRatio: "4 / 3", overflow: "hidden", background: COLORS.lightBg }}>
                  <img src={t.image} alt={`${t.title} rideau metallique`} title={t.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 22 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: COLORS.primary, margin: "0 0 8px 0" }}>{t.title}</h3>
                  <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 SEO BLOCKS */}
      <section data-section-lg style={{ padding: "100px 20px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 100 }}>
          {content.seoBlocks.map((b, i) => (
            <div
              key={i}
              data-two-col
              style={{ display: "flex", flexDirection: b.reverse ? "row-reverse" : "row", alignItems: "center", gap: 72 }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                  <img src={b.image} alt={b.imageAlt} title={b.imageAlt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>{b.eyebrow}</span>
                <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, color: COLORS.primary, lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0 }}>
                  {b.title}
                </h2>
                {b.paragraphs.map((p, pi) => (
                  <p key={pi} style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS 4 STEPS */}
      <section data-section-lg style={{ padding: "100px 20px", background: COLORS.primary, color: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accentLight, textTransform: "uppercase", letterSpacing: "0.12em" }}>Notre methode</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, margin: "12px 0 0 0", letterSpacing: "-0.02em" }}>
              {content.process.title}
            </h2>
          </div>
          <div data-grid-4 style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {content.process.steps.map((step, i) => (
              <div key={i} style={{ padding: 28, background: "rgba(232,93,4,0.1)", borderRadius: 14, border: "1px solid rgba(232,93,4,0.2)" }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.accent, marginBottom: 14, letterSpacing: "-0.02em" }}>{step.number}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#FFFFFF", margin: "0 0 10px 0" }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US 6 CARDS */}
      <section data-section-lg style={{ padding: "100px 20px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>Pourquoi nous</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: COLORS.primary, margin: "12px 0 0 0", letterSpacing: "-0.02em" }}>
              {content.whyUs.title}
            </h2>
          </div>
          <div data-grid-3 style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {content.whyUs.items.map((item, i) => (
              <div key={i} style={{ padding: 28, background: COLORS.lightBg, borderRadius: 14, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: COLORS.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12l4 4 8-8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: COLORS.primary, margin: 0 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.6, margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section data-section-lg style={{ padding: "100px 20px", background: COLORS.lightBg }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>Tarifs indicatifs</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: COLORS.primary, margin: "12px 0", letterSpacing: "-0.02em" }}>
              {content.pricing.title}
            </h2>
            <p style={{ fontSize: 15, color: "#6B7280", margin: 0 }}>{content.pricing.intro}</p>
          </div>
          <div data-grid-2 style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {content.pricing.items.map((p, i) => (
              <div key={i} style={{ padding: 24, background: "#FFFFFF", borderRadius: 12, display: "flex", flexDirection: "column", gap: 6, borderLeft: `3px solid ${COLORS.accent}` }}>
                <div style={{ fontSize: 13, color: "#6B7280", fontWeight: 500 }}>{p.label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: COLORS.primary }}>{p.price}</div>
                <div style={{ fontSize: 13, color: "#6B7280" }}>{p.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href={siteConfig.phoneLink}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                background: COLORS.accent,
                color: "#FFFFFF",
                borderRadius: 30,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              Devis gratuit — {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section data-section-lg style={{ padding: "100px 20px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>Avis clients</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: COLORS.primary, margin: "12px 0", letterSpacing: "-0.02em" }}>
              {siteConfig.rating}/5 sur {siteConfig.ratingCount} avis Google
            </h2>
          </div>
          <div data-grid-3 style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {content.reviews.map((r, i) => (
              <div key={i} style={{ background: COLORS.lightBg, borderRadius: 16, padding: 26 }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                  {[...Array(r.rating)].map((_, s) => <span key={s} style={{ color: "#FBBF24", fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.65, margin: "0 0 20px 0" }}>{r.comment}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: r.color, color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14 }}>
                    {r.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.primary }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: "#6B7280" }}>{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-section-lg style={{ padding: "100px 20px", background: COLORS.lightBg }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>Questions frequentes</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: COLORS.primary, margin: "12px 0 0 0", letterSpacing: "-0.02em" }}>
              FAQ {service.name.toLowerCase()} rideau metallique
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {content.faq.map((f, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 12, overflow: "hidden", border: "1px solid #E5E7EB" }}>
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  style={{ width: "100%", padding: "20px 24px", background: "transparent", border: "none", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, fontSize: 16, fontWeight: 600, color: COLORS.primary, fontFamily: "inherit" }}
                >
                  <span>{f.q}</span>
                  <span style={{ width: 28, height: 28, borderRadius: "50%", background: openFAQ === i ? COLORS.accent : COLORS.lightBg, color: openFAQ === i ? "#FFFFFF" : COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 500, flexShrink: 0, transform: openFAQ === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.2s" }}>+</span>
                </button>
                {openFAQ === i && (
                  <div style={{ padding: "0 24px 24px", fontSize: 15, color: "#4B5563", lineHeight: 1.7 }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES LIST */}
      <section data-section-lg style={{ padding: "100px 20px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>Zones desservies</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: COLORS.primary, margin: "12px 0 8px 0", letterSpacing: "-0.02em" }}>
              {service.name} rideau metallique dans toute l&apos;Essonne
            </h2>
            <p style={{ fontSize: 15, color: "#6B7280", margin: 0 }}>22 communes desservies 24h/24 dans un rayon de 35 km</p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {zones.map((z) => (
              <a
                key={z.slug}
                href={`/${service.slug}-${z.slug}/`}
                style={{
                  padding: "10px 18px",
                  background: COLORS.lightBg,
                  borderRadius: 24,
                  textDecoration: "none",
                  color: COLORS.primary,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {z.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAILLAGE OTHER SERVICES */}
      <section data-section-lg style={{ padding: "100px 20px", background: COLORS.primary, color: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.accentLight, textTransform: "uppercase", letterSpacing: "0.12em" }}>Nos autres services</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, margin: "12px 0 0 0", letterSpacing: "-0.02em" }}>
              Decouvrez nos 6 autres services rideau metallique
            </h2>
          </div>
          <div data-grid-3 style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {otherServices.map((s) => (
              <a
                key={s.id}
                href={`/${s.slug}-${citySlug}/`}
                style={{
                  padding: 24,
                  background: "rgba(232,93,4,0.1)",
                  border: "1px solid rgba(232,93,4,0.2)",
                  borderRadius: 14,
                  textDecoration: "none",
                  color: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.accentLight, textTransform: "uppercase", letterSpacing: "0.08em" }}>{siteConfig.city}</span>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0, color: "#FFFFFF" }}>{s.name} rideau metallique</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: 0 }}>{s.shortDescription}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.accentLight, marginTop: 4 }}>Decouvrir →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
