import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleCard from "@/components/editorial/ArticleCard";
import NewsletterSignup from "@/components/editorial/NewsletterSignup";
import JsonLd, { buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { getArticlesByCategory } from "@/data/editorialArticles";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Design & Growth",
  description: "Canva tutorials, Pinterest marketing, UI/UX systems, graphic design tools, personal branding, and digital growth.",
  alternates: {
    canonical: `${siteConfig.url}/design-growth`,
  },
  openGraph: {
    title: `Design & Growth | ${siteConfig.name}`,
    description: "Canva tutorials, Pinterest marketing, UI/UX systems, graphic design tools, personal branding, and digital growth.",
    url: `${siteConfig.url}/design-growth`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Design & Growth | ${siteConfig.name}`,
    description: "Canva tutorials, Pinterest marketing, UI/UX systems, graphic design tools, personal branding, and digital growth.",
  },
};

export default function DesignGrowthPage() {
  const articles = getArticlesByCategory("design-growth");

  const breadcrumbsSchema = buildBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "Design & Growth", url: "/design-growth" },
    ],
    siteConfig.url
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#0B0D13] text-neutral-900 dark:text-neutral-100 transition-colors">
      <JsonLd data={breadcrumbsSchema} />
      <Navbar />

      <main className="flex-1">
        {/* Category Header */}
        <section className="pt-12 pb-10 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0e111a] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Dispatch</Link>
              <span className="text-neutral-300 dark:text-neutral-700">/</span>
              <span className="text-neutral-900 dark:text-neutral-100">Design &amp; Growth</span>
            </nav>

            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-neutral-500 dark:text-neutral-400 mb-2 block">
              Aesthetics &amp; Systems Desk
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 mb-4">
              Design Systems &amp; Digital Growth
            </h1>
            <p className="font-serif italic text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
              Explore visual composition, Canva Magic Studio, Pinterest discovery feeds, personal UI design systems, and art-directed generative imagery.
            </p>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  );
}
