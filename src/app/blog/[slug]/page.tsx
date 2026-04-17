import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { articles } from "@/content/blog";
import { siteConfig } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article introuvable" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}/` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      images: [{ url: article.image }],
    },
  };
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.url}${article.image}`,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: siteConfig.fullName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/favicon.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <article style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ background: COLORS.primary, padding: "80px 20px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", color: "#FFFFFF" }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
              <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Accueil</a> /{" "}
              <a href="/blog/" style={{ color: "inherit", textDecoration: "none" }}>Blog</a> /{" "}
              <span style={{ color: "#FFB627" }}>{article.category}</span>
            </div>
            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontWeight: 500,
                lineHeight: 1.15,
                margin: "0 0 20px 0",
                letterSpacing: "-0.02em",
              }}
            >
              {article.title}
            </h1>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
              {article.date} · {article.category}
            </div>
          </div>
        </section>

        <section data-section-lg style={{ padding: "60px 20px", background: "#FFFFFF" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                aspectRatio: "16 / 9",
                borderRadius: 16,
                overflow: "hidden",
                marginBottom: 48,
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={article.image}
                alt={article.title}
                title={article.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              className="article-body"
              style={{
                fontSize: 17,
                color: "#374151",
                lineHeight: 1.8,
              }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </section>

        {relatedArticles.length > 0 && (
          <section data-section-lg style={{ padding: "60px 20px", background: "#F5F3EE" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <h2
                style={{
                  fontSize: 28,
                  fontWeight: 500,
                  color: COLORS.primary,
                  textAlign: "center",
                  margin: "0 0 40px 0",
                }}
              >
                Articles associes
              </h2>
              <div
                data-grid-2
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
              >
                {relatedArticles.map((a) => (
                  <a
                    key={a.slug}
                    href={`/blog/${a.slug}/`}
                    style={{
                      display: "flex",
                      gap: 20,
                      background: "#FFFFFF",
                      borderRadius: 14,
                      padding: 16,
                      textDecoration: "none",
                      color: COLORS.primary,
                    }}
                  >
                    <div
                      style={{
                        width: 140,
                        aspectRatio: "4 / 3",
                        borderRadius: 10,
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={a.image}
                        alt={a.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ flex: 1, paddingRight: 8 }}>
                      <div style={{ fontSize: 12, color: COLORS.accent, fontWeight: 600, marginBottom: 6 }}>
                        {a.category}
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.3, margin: 0 }}>
                        {a.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTA />
      </article>
      <Footer />
      <style>
        {`
        .article-body h2 {
          font-size: 32px;
          font-weight: 600;
          color: #1A1F2E;
          margin: 40px 0 16px;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .article-body h3 {
          font-size: 22px;
          font-weight: 600;
          color: #1A1F2E;
          margin: 28px 0 12px;
          line-height: 1.3;
        }
        .article-body p {
          margin: 0 0 18px;
        }
        .article-body ul, .article-body ol {
          margin: 0 0 18px;
          padding-left: 24px;
        }
        .article-body li {
          margin-bottom: 8px;
        }
        .article-body strong {
          color: #1A1F2E;
          font-weight: 700;
        }
        `}
      </style>
    </>
  );
}
