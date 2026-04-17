"use client";

import { useState } from "react";
import { siteConfig, services } from "@/config/site";

const COLORS = {
  primary: "#1A1F2E",
  accent: "#E85D04",
  white: "#FFFFFF",
};

const citySlug = siteConfig.city.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Zones", href: "/zones/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "80px",
        backgroundColor: COLORS.primary,
        zIndex: 1000,
        borderBottom: "1px solid rgba(232,93,4,0.18)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 20px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <img
            src="/favicon.png"
            alt="DRM Corbeil-Essonnes"
            width={40}
            height={40}
            style={{ width: 40, height: 40, borderRadius: 8, objectFit: "cover" }}
          />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: COLORS.white,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            DRM Corbeil-Essonnes
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <a
            href="/"
            style={linkStyle}
          >
            Accueil
          </a>

          {/* Services dropdown */}
          <div
            className="services-wrapper"
            style={{ position: "relative", display: "flex", alignItems: "center", height: "80px" }}
          >
            <span style={{ ...linkStyle, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="services-dropdown">
              {services.map((s) => (
                <a key={s.id} href={`/${s.slug}-${citySlug}/`}>
                  {s.name} rideau metallique
                </a>
              ))}
            </div>
          </div>

          <a href="/zones/" style={linkStyle}>Zones</a>
          <a href="/blog/" style={linkStyle}>Blog</a>
          <a href="/contact/" style={linkStyle}>Contact</a>
        </nav>

        {/* Right: Phone + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href={siteConfig.phoneLink}
            className="header-phone-cta"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: COLORS.white,
              backgroundColor: COLORS.accent,
              padding: "12px 22px",
              borderRadius: "26px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2a15.074 15.074 0 0 1-6.59-6.58l2.2-2.21c.27-.27.35-.66.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
            </svg>
            {siteConfig.phone}
          </a>

          {/* Hamburger mobile */}
          <button
            className="mobile-nav-trigger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: "24px", height: "2px", backgroundColor: COLORS.white }} />
            <div style={{ width: "24px", height: "2px", backgroundColor: COLORS.white }} />
            <div style={{ width: "24px", height: "2px", backgroundColor: COLORS.white }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="/" onClick={() => setMenuOpen(false)}>Accueil</a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setServicesOpen(!servicesOpen); }}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            Services <span>{servicesOpen ? "-" : "+"}</span>
          </a>
          {servicesOpen && (
            <div className="mobile-submenu">
              {services.map((s) => (
                <a key={s.id} href={`/${s.slug}-${citySlug}/`} onClick={() => setMenuOpen(false)}>
                  {s.name}
                </a>
              ))}
            </div>
          )}
          <a href="/zones/" onClick={() => setMenuOpen(false)}>Zones d&apos;intervention</a>
          <a href="/blog/" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="/contact/" onClick={() => setMenuOpen(false)}>Contact</a>
          <a
            href={siteConfig.phoneLink}
            style={{
              marginTop: 24,
              display: "block",
              backgroundColor: COLORS.accent,
              color: COLORS.white,
              padding: "16px",
              textAlign: "center",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            {siteConfig.phone}
          </a>
        </div>
      )}
    </header>
  );
}

const linkStyle: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "15px",
  fontWeight: 500,
  color: "#FFFFFF",
  textDecoration: "none",
};
