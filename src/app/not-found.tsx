import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        style={{
          paddingTop: 80,
          background: COLORS.primary,
          color: "#FFFFFF",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: 640 }}>
          <div style={{ fontSize: 96, fontWeight: 700, color: COLORS.accent, lineHeight: 1, marginBottom: 16 }}>
            404
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 500, margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
            Page introuvable
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", marginBottom: 32 }}>
            La page que vous cherchez n&apos;existe pas ou a ete deplacee.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/"
              style={{
                padding: "14px 28px",
                background: COLORS.accent,
                color: "#FFFFFF",
                borderRadius: 30,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Retour a l&apos;accueil
            </a>
            <a
              href={siteConfig.phoneLink}
              style={{
                padding: "14px 28px",
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.3)",
                color: "#FFFFFF",
                borderRadius: 30,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
