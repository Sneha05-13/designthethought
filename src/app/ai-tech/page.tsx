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
  title: "AI & Tech — Practical Answers, Real-World Questions & Emerging Tech",
  description: "Curiosity-driven, practical answers to modern technology questions: how LLMs generate responses, why AI hallucinates, when to use agents, which models to pick, and what happens when AI enters the workplace.",
  alternates: {
    canonical: `${siteConfig.url}/ai-tech`,
  },
  openGraph: {
    title: `AI & Tech — Practical Answers, Real-World Questions & Emerging Tech | ${siteConfig.name}`,
    description: "Curiosity-driven, practical answers to modern technology questions: how LLMs generate responses, why AI hallucinates, when to use agents, which models to pick, and what happens when AI enters the workplace.",
    url: `${siteConfig.url}/ai-tech`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `AI & Tech — Practical Answers, Real-World Questions & Emerging Tech | ${siteConfig.name}`,
    description: "Curiosity-driven, practical answers to modern technology questions: how LLMs generate responses, why AI hallucinates, when to use agents, which models to pick, and what happens when AI enters the workplace.",
  },
};

export default function AITechPage() {
  const articles = getArticlesByCategory("ai-tech");

  const breadcrumbsSchema = buildBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "AI & Tech", url: "/ai-tech" },
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
              <span className="text-neutral-900 dark:text-neutral-100">AI &amp; Tech</span>
            </nav>

            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-neutral-500 dark:text-neutral-400 mb-2 block">
              Frontier Technology Desk
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 mb-4">
              AI &amp; Future Technology: Questions Answered
            </h1>
            <p className="font-serif italic text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed mb-6">
              Practical, curiosity-driven editorial guides exploring how artificial intelligence works in real situations, why technical developments matter, when to deploy new tools, and what emerging tech means for work and daily life.
            </p>

            {/* Question Format Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "How It Works",
                "Why It Matters",
                "When to Use",
                "Which Model Wins",
                "What Happens When",
                "Can AI Reason",
                "Should You Automate",
                "Privacy & Safety",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-mono uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Core Editorial Themes Bar */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-[#0e111a] py-6 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-1">Focus 01</span>
                <h2 className="font-serif text-sm font-semibold text-neutral-900 dark:text-white mb-1">How LLMs Work</h2>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Next-word prediction, probability math, temperature sampling, and transformer attention mechanisms.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-1">Focus 02</span>
                <h2 className="font-serif text-sm font-semibold text-neutral-900 dark:text-white mb-1">Why Models Hallucinate</h2>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Understanding why AI invents fake facts, sycophancy, training cutoffs, and how RAG anchors ground truth.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-1">Focus 03</span>
                <h2 className="font-serif text-sm font-semibold text-neutral-900 dark:text-white mb-1">When to Use Agents</h2>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Deciding between single prompts, deterministic workflows, and multi-step autonomous loops.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-1">Focus 04</span>
                <h2 className="font-serif text-sm font-semibold text-neutral-900 dark:text-white mb-1">Real Workplace Shifts</h2>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  The centaur worker divide, junior training challenges, deskilling risks, and protecting career value.
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

          {/* Connection to AI Hub: Concept vs Question Distinction */}
          <div className="mt-14 p-8 bg-white dark:bg-[#0e111a] border border-neutral-200 dark:border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 mb-2">
                Curriculum &amp; Benchmarks
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-neutral-900 dark:text-white mb-2">
                Looking for Foundational AI Concepts or In-Depth Tool Reviews?
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                While this <strong>AI &amp; Tech</strong> section answers curiosity-driven questions and practical workplace comparisons, our dedicated <strong>AI Hub</strong> offers structured beginner-friendly education (such as <em>What Is AI?</em>, <em>What Is Generative AI?</em>, <em>What Are LLMs?</em>, and <em>What Is RAG?</em>) alongside full-suite tool reviews for ChatGPT, Claude, Gemini, Cursor, and Gamma.
              </p>
            </div>
            <Link
              href="/ai-hub"
              className="shrink-0 px-6 py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              Explore AI Hub &rarr;
            </Link>
          </div>
        </section>

        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  );
}
