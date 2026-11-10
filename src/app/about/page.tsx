import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd, { buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Design The Thought, an independent publication covering AI, future technology, startups, business, design and digital growth.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: "Learn about Design The Thought, an independent publication covering AI, future technology, startups, business, design and digital growth.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${siteConfig.name}`,
    description: "Learn about Design The Thought, an independent publication covering AI, future technology, startups, business, design and digital growth.",
  },
};

export default function AboutPage() {
  const breadcrumbsSchema = buildBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
    ],
    siteConfig.url
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <JsonLd data={breadcrumbsSchema} />
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-16 pb-12 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D121F] transition-colors">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 mb-2 block">
              About the Publication
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              Ideas. Innovation. Growth.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-2xl">
              Design The Thought is an independent digital publication exploring frontier artificial intelligence, software architecture, solo entrepreneurship, visual design systems, and digital growth.
            </p>
          </div>
        </section>

        {/* Narrative Content */}
        <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Editorial Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-normal mb-4">
                Technology is moving faster than ever, yet most coverage remains trapped between breathless investor hype and low-effort algorithmic summaries. Design The Thought was founded to provide grounded, practitioner-tested analysis for builders, founders, and designers.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-normal">
                We write for software engineers building agentic workflows, solo founders launching profitable digital businesses, and creative visual designers leveraging modern generative suites without sacrificing craft or taste.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 block">
                  Pillar 01
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI &amp; Tech</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Rigorous guides, prompt architecture, autonomous agent tool calling, and API design lessons.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 block">
                  Pillar 02
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Startups &amp; Biz</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Solo founder economics, micro-SaaS case studies, asynchronous systems, and scalable digital assets.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2 block">
                  Pillar 03
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Design &amp; Growth</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Canva Magic Studio workflows, Pinterest traffic systems, UI design tokens, and personal branding.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                The Integrated AI Hub
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-normal mb-4">
                Design The Thought proudly maintains the{" "}
                <Link href="/ai-hub" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:text-indigo-700 dark:hover:text-indigo-300">
                  AI Hub
                </Link>{" "}
                as an active, fully integrated section. Inside, you will find extensive beginner guides, deep directory evaluations of major AI tools (Claude, ChatGPT, Cursor, Gamma, Canva, Gemini, Perplexity), and real-world experiments.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-100 dark:bg-[#111827] border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Have a story tip, proposal, or inquiry?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We welcome thoughtful correspondence from developers, practitioners, and writers.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
              >
                Contact Editorial &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
