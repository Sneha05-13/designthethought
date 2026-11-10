import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import AIHubSubnav from "@/components/ai-hub/AIHubSubnav";
import Footer from "@/components/layout/Footer";
import JsonLd, { buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { Sparkles, ArrowRight, BookOpen, Wrench, Lightbulb, Beaker } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Hub",
  description: "Practical AI guides, curated tools, tutorials and real-world experiences — integrated directly into Design The Thought.",
  alternates: {
    canonical: `${siteConfig.url}/ai-hub`,
  },
  openGraph: {
    title: `AI Hub | ${siteConfig.name}`,
    description: "Practical AI guides, curated tools, tutorials and real-world experiences — integrated directly into Design The Thought.",
    url: `${siteConfig.url}/ai-hub`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `AI Hub | ${siteConfig.name}`,
    description: "Practical AI guides, curated tools, tutorials and real-world experiences.",
  },
};

export default function AIHubPage() {
  const breadcrumbsSchema = buildBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "AI Hub", url: "/ai-hub" },
    ],
    siteConfig.url
  );

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <JsonLd data={breadcrumbsSchema} />
      <Navbar />
      <AIHubSubnav />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              Design The Thought AI Hub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl">
              Learn AI. Discover Tools. Build Smarter.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Practical AI guides, useful tools, beginner concepts and real-world experiments — all in one integrated publication.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <Link href="/ai-hub/guides" className="px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold shadow-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
                Explore AI Guides
              </Link>
              <Link href="/ai-hub/tools" className="px-8 py-3 rounded-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold shadow-xs border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
                Browse AI Tools
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Category Section */}
        <section className="py-16 bg-white dark:bg-gray-900/30 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI Basics",
                  desc: "Understand AI concepts without the complicated jargon.",
                  icon: <BookOpen className="w-6 h-6 text-blue-500" />,
                  href: "/ai-hub/basics"
                },
                {
                  title: "AI Tools",
                  desc: "Discover useful AI tools for study, work, creativity and business.",
                  icon: <Wrench className="w-6 h-6 text-purple-500" />,
                  href: "/ai-hub/tools"
                },
                {
                  title: "AI Guides",
                  desc: "Step-by-step tutorials and practical AI workflows.",
                  icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
                  href: "/ai-hub/guides"
                },
                {
                  title: "AI Experiences",
                  desc: "Real experiments, honest reviews and lessons from using AI.",
                  icon: <Beaker className="w-6 h-6 text-green-500" />,
                  href: "/ai-hub/experiences"
                }
              ].map((cat, i) => (
                <Link href={cat.href} key={i} className="group p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-all hover:shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-xs border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{cat.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{cat.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Featured Content Section */}
        <section id="guides" className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-3">Featured Content</h2>
              <p className="text-gray-600 dark:text-gray-400">Handpicked resources to help you master AI practical workflows.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "AI Basics",
                  title: "What Can AI Actually Do? A Beginner's Guide",
                  desc: "Cut through the hype and discover what artificial intelligence is truly capable of today.",
                  color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
                  href: "/ai-hub/basics/what-is-artificial-intelligence"
                },
                {
                  category: "AI Tools",
                  title: "Best AI Tools for Students & Creators",
                  desc: "A curated list of AI-powered applications that can help you learn and build faster.",
                  color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20",
                  href: "/ai-hub/tools"
                },
                {
                  category: "AI Guides",
                  title: "Prompt Engineering Essentials",
                  desc: "Step-by-step instructions to get precise, high-value outputs from frontier LLMs.",
                  color: "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-500/10 border-yellow-200 dark:border-yellow-500/20",
                  href: "/ai-hub/guides/prompt-engineering"
                },
                {
                  category: "AI Experiences",
                  title: "How I Use AI for Workflow Acceleration",
                  desc: "Real experiments, practical lessons and insights from building software with AI.",
                  color: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20",
                  href: "/ai-hub/experiences"
                }
              ].map((article, i) => (
                <div key={i} className="flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-900/60 shadow-xs border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all group h-full">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${article.color}`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">
                    {article.desc}
                  </p>
                  <Link href={article.href} className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-2.5 transition-all mt-auto">
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50/60 to-sky-50/60 dark:from-indigo-950/20 dark:to-sky-950/20 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ready to Master AI?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              Browse practical AI tools, beginner concepts, and step-by-step guides inside Design The Thought.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <Link href="/ai-hub/tools" className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95">
                Discover All AI Tools
              </Link>
              <Link href="/" className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:scale-105 active:scale-95">
                Back to Design The Thought Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
