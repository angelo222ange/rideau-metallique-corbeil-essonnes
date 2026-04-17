import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServicePageFull from "@/components/ServicePageFull";
import ServiceZonePage from "@/components/ServiceZonePage";
import { siteConfig, services, zones } from "@/config/site";
import { parseSlug } from "@/lib/content";
import { servicesContent } from "@/content/services-content";

const citySlug = siteConfig.city.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function generateStaticParams() {
  const params: { service_zone: string }[] = [];

  for (const zone of zones) {
    for (const service of services) {
      params.push({ service_zone: `${service.slug}-${zone.slug}` });
    }
  }

  for (const service of services) {
    params.push({ service_zone: `${service.slug}-${citySlug}` });
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service_zone: string }>;
}): Promise<Metadata> {
  const { service_zone } = await params;
  const parsed = parseSlug(service_zone);
  if (!parsed) {
    return { title: "Page introuvable" };
  }
  const { service, zone } = parsed;
  const isCity = zone.slug === citySlug;
  const content = servicesContent[service.id];

  let title: string;
  let desc: string;

  if (isCity && content) {
    title = content.metaTitle;
    desc = content.metaDescription;
  } else {
    title = `${service.name} rideau metallique ${zone.name}`;
    desc = `${service.name} rideau metallique a ${zone.name} (${zone.postalCode}). Intervention 30 min 24h/24. Devis gratuit. DRM Corbeil-Essonnes Tel ${siteConfig.phone}.`;
  }

  return {
    title,
    description: desc.length > 155 ? desc.substring(0, 152) + "..." : desc,
    alternates: {
      canonical: `${siteConfig.url}/${service_zone}/`,
    },
    openGraph: {
      title,
      description: desc,
      url: `${siteConfig.url}/${service_zone}/`,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ service_zone: string }>;
}) {
  const { service_zone } = await params;
  const parsed = parseSlug(service_zone);

  if (!parsed) {
    notFound();
  }

  const { service, zone } = parsed;
  const isCity = zone.slug === citySlug;
  const content = servicesContent[service.id];

  return (
    <>
      <Header />
      {isCity && content ? (
        <ServicePageFull service={service} zone={zone} content={content} slug={service_zone} />
      ) : (
        <ServiceZonePage service={service} zone={zone} slug={service_zone} />
      )}
      <CTA />
      <Footer />
    </>
  );
}
