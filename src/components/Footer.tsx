import { siteConfig, services, zones } from "@/config/site";

const COLORS = {
  primary: "#1A1F2E",
  accent: "#E85D04",
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.55)",
  mutedDark: "rgba(255,255,255,0.35)",
};

const citySlug = siteConfig.city.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: COLORS.primary,
        padding: "80px 0 30px",
      }}
      data-section
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          data-footer-grid
        >
          {/* Col 1: Logo + Description + Address */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/favicon.png"
                alt="DRM Corbeil-Essonnes"
                width={40}
                height={40}
                style={{ width: 40, height: 40, borderRadius: 8 }}
              />
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: COLORS.white,
                  letterSpacing: "-0.02em",
                }}
              >
                DRM Corbeil-Essonnes
              </span>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: COLORS.muted,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Specialiste du depannage, installation et motorisation de rideaux
              metalliques a Corbeil-Essonnes et dans toute l&apos;Essonne. Intervention
              en moins de 30 minutes, 24h/24 et 7j/7. 25+ ans d&apos;experience.
            </p>
            <p
              style={{
                fontSize: "13px",
                color: COLORS.mutedDark,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {siteConfig.address}
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
              {["LinkedIn", "Facebook", "Instagram"].map((s) => (
                <span
                  key={s}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(232,93,4,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: COLORS.white,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                  aria-label={s}
                >
                  {s[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: COLORS.white,
                margin: "0 0 18px 0",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Nos services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`/${s.slug}-${citySlug}/`}
                    style={{
                      fontSize: "14px",
                      color: COLORS.muted,
                      textDecoration: "none",
                    }}
                  >
                    {s.name} rideau metallique
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Zones */}
          <div>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: COLORS.white,
                margin: "0 0 18px 0",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Zones
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {zones.slice(0, 10).map((z) => (
                <li key={z.slug}>
                  <a
                    href={`/depannage-rideau-metallique-${z.slug}/`}
                    style={{
                      fontSize: "14px",
                      color: COLORS.muted,
                      textDecoration: "none",
                    }}
                  >
                    {z.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/zones/"
                  style={{
                    fontSize: "14px",
                    color: COLORS.accent,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Toutes les zones →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: COLORS.white,
                margin: "0 0 18px 0",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Contact 24h/24
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a
                href={siteConfig.phoneLink}
                style={{
                  fontSize: "22px",
                  color: COLORS.white,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  fontSize: "14px",
                  color: COLORS.muted,
                  textDecoration: "none",
                  wordBreak: "break-all",
                }}
              >
                {siteConfig.email}
              </a>
              <div style={{ fontSize: "13px", color: COLORS.mutedDark, lineHeight: 1.6 }}>
                Ouverts 24h/24, 7j/7<br />
                Intervention en 30 minutes<br />
                Devis gratuit
              </div>
              <a
                href="/contact/"
                style={{
                  display: "inline-block",
                  marginTop: "4px",
                  padding: "10px 18px",
                  backgroundColor: COLORS.accent,
                  color: COLORS.white,
                  textDecoration: "none",
                  borderRadius: "24px",
                  fontWeight: 600,
                  fontSize: "14px",
                  textAlign: "center",
                  width: "fit-content",
                }}
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.1)",
            marginBottom: "24px",
          }}
        />

        {/* Legal links */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          {[
            { label: "Plan du site", href: "/plan-du-site/" },
            { label: "Mentions legales", href: "/mentions-legales/" },
            { label: "Confidentialite", href: "/confidentialite/" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "13px",
                color: COLORS.mutedDark,
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <span
          style={{
            fontSize: "13px",
            color: COLORS.mutedDark,
          }}
        >
          © 2026 DRM Corbeil-Essonnes. Tous droits reserves. Depannage rideau metallique 24h/24.
        </span>
      </div>

      {/* Floating CTA bar mobile */}
      <a
        href={siteConfig.phoneLink}
        className="floating-cta-bar"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2a15.074 15.074 0 0 1-6.59-6.58l2.2-2.21c.27-.27.35-.66.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
        </svg>
        Appeler maintenant - {siteConfig.phone}
      </a>
    </footer>
  );
}
