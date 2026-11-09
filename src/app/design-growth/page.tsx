import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleCard from "@/components/editorial/ArticleCard";
import NewsletterSignup from "@/components/editorial/NewsletterSignup";
import AdSlot from "@/components/ads/AdSlot";
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
  },
};

export default function DesignGrowthPage() {
  const articles = getArticlesByCategory("design-growth");

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <Navbar />

      <main className="flex-1">
        {/* Category Header */}
        <section className="pt-14 pb-12 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D121F] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4 font-semibold">
              <Link href="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-sky-600 dark:text-sky-400">Design &amp; Growth</span>
            </nav>

            <span className="text-xs uppercase tracking-widest font-bold text-sky-600 dark:text-sky-400 mb-2 block">
              Editorial Desk
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              Design Systems &amp; Digital Growth
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal max-w-2xl leading-relaxed">
              Explore visual composition, Canva Magic Studio, Pinterest discovery feeds, personal UI design systems, and art-directed generative imagery.
            </p>
          </div>
        </section>

        {/* Top Ad Slot */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSlot type="adsense" format="leaderboard" />
        </div>

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

