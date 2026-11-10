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
  title: "Startups & Biz",
  description: "Startup case studies, solo entrepreneurship, digital business models, side hustles, and growth strategies.",
  alternates: {
    canonical: `${siteConfig.url}/startups-biz`,
  },
  openGraph: {
    title: `Startups & Biz | ${siteConfig.name}`,
    description: "Startup case studies, solo entrepreneurship, digital business models, side hustles, and growth strategies.",
    url: `${siteConfig.url}/startups-biz`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Startups & Biz | ${siteConfig.name}`,
    description: "Startup case studies, solo entrepreneurship, digital business models, side hustles, and growth strategies.",
  },
};

export default function StartupsBizPage() {
  const articles = getArticlesByCategory("startups-biz");

  const breadcrumbsSchema = buildBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "Startups & Biz", url: "/startups-biz" },
    ],
    siteConfig.url
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <JsonLd data={breadcrumbsSchema} />
      <Navbar />

      <main className="flex-1">
        {/* Category Header */}
        <section className="pt-14 pb-12 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D121F] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4 font-semibold" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-emerald-600 dark:text-emerald-400">Startups &amp; Biz</span>
            </nav>

            <span className="text-xs uppercase tracking-widest font-bold text-emerald-600 dark:text-emerald-400 mb-2 block">
              Editorial Desk
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              Startups &amp; Digital Business
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal max-w-2xl leading-relaxed">
              Unpack solo founder economics, micro-SaaS playbooks, independent consulting systems, and durable meta-skills for the modern economy.
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
