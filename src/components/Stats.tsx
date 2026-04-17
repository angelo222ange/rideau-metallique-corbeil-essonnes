import { siteConfig } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
};

export default function Stats() {
  const stats = [
    { value: "25+", label: "annees d'experience" },
    { value: "30min", label: "delai d'intervention" },
    { value: "5000+", label: "clients satisfaits" },
    { value: "24/7", label: "disponibilite" },
  ];

  return (
    <section
      data-section
      style={{
        background: "#FFFFFF",
        padding: "60px 20px",
        borderBottom: "1px solid #F0F0F0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          data-stats
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 48,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                textAlign: "center",
                borderRight: i < stats.length - 1 ? "1px solid #E5E7EB" : "none",
                padding: "0 20px",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 700,
                  color: COLORS.accent,
                  lineHeight: 1,
                  marginBottom: 8,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "#6B7280",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
