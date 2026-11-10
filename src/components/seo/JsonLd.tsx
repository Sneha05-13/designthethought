import React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export function buildWebSiteSchema(siteUrl: string, siteName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: description,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#logo`,
          url: `${siteUrl}/icons/icon-512x512.png`,
          contentUrl: `${siteUrl}/icons/icon-512x512.png`,
          caption: siteName,
          width: 512,
          height: 512,
        },
        image: {
          "@id": `${siteUrl}/#logo`,
        },
      },
    ],
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  siteUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const fullUrl = item.url.startsWith("http")
        ? item.url
        : `${siteUrl}${item.url.startsWith("/") ? item.url : `/${item.url}`}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: fullUrl,
      };
    }),
  };
}

export function buildArticleSchema({
  title,
  description,
  url,
  publishedAt,
  modifiedAt,
  authorName,
  authorRole,
  category,
  siteName,
  siteUrl,
  imageUrl,
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  modifiedAt?: string;
  authorName: string;
  authorRole?: string;
  category: string;
  siteName: string;
  siteUrl: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    description: description,
    image: imageUrl || `${siteUrl}/icons/icon-512x512.png`,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    articleSection: category,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: authorRole || "Editorial Staff",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icons/icon-512x512.png`,
      },
    },
  };
}

export function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

