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
  title: "AI & Tech",
  description: "AI tools, machine learning breakthroughs, future tech, tutorials, and practical productivity systems.",
  alternates: {
    canonical: `${siteConfig.url}/ai-tech`,
  },
  openGraph: {
    title: `AI & Tech | ${siteConfig.name}`,
    description: "AI tools, machine learning breakthroughs, future tech, tutorials, and practical productivity systems.",
    url: `${siteConfig.url}/ai-tech`,
  },
};

export default function AITechPage() {
  const articles = getArticlesByCategory("ai-tech");

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <Navbar />

      <main className="flex-1">
        {/* Category Header */}
        <section className="pt-14 pb-12 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D121F] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4 font-semibold">
              <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-indigo-600 dark:text-indigo-400">AI &amp; Tech</span>
            </nav>

            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 mb-2 block">
              Editorial Desk
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              AI &amp; Future Technology
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal max-w-2xl leading-relaxed">
              Explore machine learning breakthroughs, prompt engineering frameworks, autonomous agent loops, and engineering lessons from real-world software deployments.
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

          {/* Connection to AI Hub */}
          <div className="mt-14 p-8 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Explore the Contentian AI Hub Directory
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Looking for structured reviews of Claude, ChatGPT, Cursor, Gamma, Canva, and Gemini? Browse our reference directory.
              </p>
            </div>
            <Link
              href="/ai-hub"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Open AI Hub &rarr;
            </Link>
          </div>
        </section>

        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  );
}

