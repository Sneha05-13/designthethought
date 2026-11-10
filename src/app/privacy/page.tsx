import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd, { buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Design The Thought. Transparent details on data handling, cookies, and analytics.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: "Privacy Policy for Design The Thought. Transparent details on data handling, cookies, and analytics.",
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbsSchema = buildBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: "Privacy Policy", url: "/privacy" },
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
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: November 2026 • Design The Thought
            </p>
          </div>
        </header>

        <section className="py-14 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/40 text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed">
              <strong>Notice:</strong> This privacy document explains our transparent data handling practices across Design The Thought and its integrated AI Hub.
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">1. Information We Collect</h2>
              <p className="text-base leading-relaxed font-normal mb-3">
                Design The Thought operates as an independent technical publication. We collect minimal personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li><strong>Newsletter Information:</strong> If you voluntarily subscribe to our weekly briefing, we store your email address solely to deliver requested dispatches. You can unsubscribe at any time.</li>
                <li><strong>Aggregated Analytics:</strong> We use privacy-preserving analytics to track page views, referring sites, and interaction trends without intrusive fingerprinting or cross-site tracking.</li>
                <li><strong>Local Theme Preferences:</strong> When you select dark or light mode, your preference is saved locally in your browser storage (`tdt_theme`).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">2. How We Use Information</h2>
              <p className="text-base leading-relaxed font-normal">
                Any information collected is used exclusively to publish and improve Design The Thought, maintain site security, and send requested editorial briefings. We never sell, rent, or trade reader data.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">3. Affiliate and Partner Links</h2>
              <p className="text-base leading-relaxed font-normal mb-3">
                Certain articles and tool evaluations link to third-party software products. Please review our full{" "}
                <Link href="/disclosure" className="text-indigo-600 dark:text-indigo-400 underline">
                  Affiliate Disclosure
                </Link>{" "}
                for complete transparency regarding partner arrangements.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">4. Contact Information</h2>
              <p className="text-base leading-relaxed font-normal">
                For questions regarding this policy or our data practices, contact us at{" "}
                <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 underline">
                  our contact desk
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
