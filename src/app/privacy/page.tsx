import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for The Design Tech. Transparent details on data handling, cookies, and analytics.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
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
              Last updated: November 2026 • The Design Tech
            </p>
          </div>
        </header>

        <section className="py-14 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
            
            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/40 text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed">
              <strong>Notice:</strong> This privacy document explains our transparent data handling practices. If our publication deploys formal third-party programmatic advertising networks in the future, these clauses will be updated accordingly.
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">1. Information We Collect</h2>
              <p className="text-base leading-relaxed font-normal mb-3">
                The Design Tech operates as an independent technical publication. We collect minimal personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li><strong>Newsletter Information:</strong> If you voluntarily subscribe to our weekly briefing, we store your email address solely to deliver requested dispatches. You can unsubscribe at any time.</li>
                <li><strong>Direct Correspondence:</strong> If you send us an editorial pitch, we retain your note and contact details to reply.</li>
                <li><strong>Analytics Data:</strong> We utilize privacy-conscious web telemetry (such as Vercel Analytics) to track aggregate pageviews and article popularity without recording personally identifiable information.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">2. Cookies and Storage</h2>
              <p className="text-base leading-relaxed font-normal mb-3">
                We use lightweight browser storage (such as localStorage) solely to remember your UI preferences (like dark/light mode selection) and newsletter confirmation states. We do not use cross-site tracking pixels or invasive fingerprinting.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">3. How We Use Information</h2>
              <p className="text-base leading-relaxed font-normal">
                Any information collected is used exclusively to publish and improve The Design Tech, maintain site security, and send requested editorial briefings. We never sell, rent, or trade your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">4. Third-Party Links &amp; Affiliates</h2>
              <p className="text-base leading-relaxed font-normal">
                Our articles and AI Hub reviews contain outbound links to software tools and platforms. We are not responsible for the privacy practices of external companies. We encourage you to review their policies independently.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">5. Data Retention and Rights</h2>
              <p className="text-base leading-relaxed font-normal mb-3">
                You have the right to request access to any personal data we hold about you or request deletion of your subscriber email at any time.
              </p>
              <p className="text-base leading-relaxed font-normal">
                Contact our editorial desk via our{" "}
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
