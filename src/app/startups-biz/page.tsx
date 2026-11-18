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
  title: "Startups & Venture — Founder Strategy, Business Models & Scaling",
  description: "Authoritative analysis, research-driven playbooks, and financial models for startup founders and operators. Covering Product-Market Fit, venture funding, unit economics, and Go-to-Market strategies.",
  alternates: {
    canonical: `${siteConfig.url}/startups-biz`,
  },
  openGraph: {
    title: `Startups & Venture — Founder Strategy, Business Models & Scaling | ${siteConfig.name}`,
    description: "Authoritative analysis, research-driven playbooks, and financial models for startup founders and operators. Covering Product-Market Fit, venture funding, unit economics, and Go-to-Market strategies.",
    url: `${siteConfig.url}/startups-biz`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Startups & Venture — Founder Strategy, Business Models & Scaling | ${siteConfig.name}`,
    description: "Authoritative analysis, research-driven playbooks, and financial models for startup founders and operators. Covering Product-Market Fit, venture funding, unit economics, and Go-to-Market strategies.",
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
              Venture &amp; Entrepreneurship Desk
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              Startups, Business Models &amp; Venture Strategy
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal max-w-3xl leading-relaxed mb-6">
              Rigorous, research-driven playbooks and empirical frameworks for founders, operators, and entrepreneurs. Deep-dive into Product-Market Fit, venture financing, unit economics, GTM engines, and sustainable business models.
            </p>

            {/* Core Coverage Pillars */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Startup Ecosystem",
                "Product-Market Fit (PMF)",
                "Venture Capital & SAFEs",
                "Unit Economics (CAC & LTV)",
                "Go-to-Market (GTM)",
                "B2B vs B2C Models",
                "Idea Validation & Lean Canvas",
                "Bootstrapping vs VC",
              ].map((topic) => (
                <span
                  key={topic}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Research Themes Bar */}
        <section className="border-b border-gray-200 dark:border-gray-800 bg-[#F3F4F6]/60 dark:bg-[#0E1424] py-6 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-[#131B2E] border border-gray-200/80 dark:border-gray-800">
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Pillar 1</span>
                <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Ideation &amp; Validation</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Sean Ellis benchmarks, cohort retention curves, and smoke-testing demand before writing code.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#131B2E] border border-gray-200/80 dark:border-gray-800">
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Pillar 2</span>
                <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Financing &amp; Equity</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  SAFEs, convertible notes, dilution math, valuation caps, and bootstrapping economics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#131B2E] border border-gray-200/80 dark:border-gray-800">
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Pillar 3</span>
                <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Unit Economics &amp; Math</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Formulas for fully-loaded CAC, CAC payback, LTV:CAC benchmarks, Gross Burn, and Runway.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#131B2E] border border-gray-200/80 dark:border-gray-800">
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Pillar 4</span>
                <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-1">GTM &amp; Scaling</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Product-Led Growth (PLG) vs Sales-Led Growth (SLG), B2B buying committees, and avoiding premature scaling.
                </p>
              </div>
            </div>
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
