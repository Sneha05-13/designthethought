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
              <span className="text-neutral-900 dark:text-neutral-100">Startups &amp; Biz</span>
            </nav>

            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-neutral-500 dark:text-neutral-400 mb-2 block">
              Venture &amp; Entrepreneurship Desk
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 mb-4">
              Startups, Business Models &amp; Venture Strategy
            </h1>
            <p className="font-serif italic text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed mb-6">
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
                  className="inline-flex items-center px-2.5 py-1 text-xs font-mono uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Research Themes Bar */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-[#0e111a] py-6 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-1">Pillar 01</span>
                <h2 className="font-serif text-sm font-semibold text-neutral-900 dark:text-white mb-1">Ideation &amp; Validation</h2>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Sean Ellis benchmarks, cohort retention curves, and smoke-testing demand before writing code.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-1">Pillar 02</span>
                <h2 className="font-serif text-sm font-semibold text-neutral-900 dark:text-white mb-1">Financing &amp; Equity</h2>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  SAFEs, convertible notes, dilution math, valuation caps, and bootstrapping economics.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-1">Pillar 03</span>
                <h2 className="font-serif text-sm font-semibold text-neutral-900 dark:text-white mb-1">Unit Economics &amp; Math</h2>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Formulas for fully-loaded CAC, CAC payback, LTV:CAC benchmarks, Gross Burn, and Runway.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-1">Pillar 04</span>
                <h2 className="font-serif text-sm font-semibold text-neutral-900 dark:text-white mb-1">GTM &amp; Scaling</h2>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
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
