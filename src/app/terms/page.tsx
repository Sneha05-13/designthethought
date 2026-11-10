import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd, { buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Design The Thought digital publication and related resources.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: `Terms of Use | ${siteConfig.name}`,
    description: "Terms of Use for Design The Thought digital publication and related resources.",
    url: `${siteConfig.url}/terms`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function TermsOfUsePage() {
  const breadcrumbsSchema = buildBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "Terms of Use", url: "/terms" },
    ],
    siteConfig.url
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <JsonLd data={breadcrumbsSchema} />
      <Navbar />

      <main className="flex-1">
        <header className="pt-16 pb-12 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D121F] transition-colors">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 mb-2 block">
              Legal &amp; Transparency
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              Terms of Use
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: November 2026 • Design The Thought
            </p>
          </div>
        </header>

        <section className="py-14 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">1. Intellectual Property &amp; Content Use</h2>
              <p className="text-base leading-relaxed font-normal mb-3">
                All original articles, frameworks, software reviews, and essays published on Design The Thought and the AI Hub are protected under intellectual property and copyright laws.
              </p>
              <p className="text-base leading-relaxed font-normal">
                You may quote brief excerpts (up to 150 words) provided explicit attribution and an active link to the original article URL are provided. Full article scraping or mass unauthorized republishing is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">2. Informational and Educational Purpose</h2>
              <p className="text-base leading-relaxed font-normal mb-3">
                The technical and business content provided on this publication is for informational, creative, and educational purposes. While we rigorously test prompts, APIs, and workflows, software and technology evolve rapidly.
              </p>
              <p className="text-base leading-relaxed font-normal">
                We make no express warranties regarding third-party software uptime or commercial outcome. Readers should evaluate tools independently prior to production deployment.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">3. Modifications</h2>
              <p className="text-base leading-relaxed font-normal">
                We reserve the right to revise these Terms of Use as our publication expands. Continued browsing of the website signifies your agreement to any published updates.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Questions regarding these terms? Contact us via our{" "}
                <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-700">
                  Contact Page
                </Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
