import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Affiliate & Advertising Disclosure",
  description: "Affiliate and editorial independence disclosure for The Design Tech publication.",
  alternates: {
    canonical: `${siteConfig.url}/disclosure`,
  },
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <Navbar />

      <main className="flex-1">
        
        <header className="pt-16 pb-12 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D121F] transition-colors">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 mb-2 block">
              Editorial Integrity
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              Affiliate &amp; Advertising Disclosure
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: November 2026 • The Design Tech
            </p>
          </div>
        </header>

        <section className="py-14 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
            
            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-indigo-200 dark:border-indigo-900/60 shadow-2xs">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Our Editorial Commitment</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-0 font-normal">
                Editorial integrity is our primary foundation. We do not accept payment to artificially inflate a tool review, recommend an inferior software product, or bias our benchmarks. If a product has limitations or pricing traps, we highlight them clearly.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">1. Affiliate Links and Commissions</h2>
              <p className="text-base leading-relaxed font-normal mb-3">
                In compliance with Federal Trade Commission (FTC) guidelines and international advertising disclosure standards, please note that certain outbound links pointing to software products, services, or developer tools may be affiliate links.
              </p>
              <p className="text-base leading-relaxed font-normal">
                If you click an affiliate partner link and subsequently sign up or purchase a license, The Design Tech may earn a referral fee at zero additional cost to you. In many instances, partner links unlock special introductory trials or discounted pricing for our readers.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">2. How We Evaluate Software</h2>
              <p className="text-base leading-relaxed font-normal mb-3">
                Our inclusion criteria are governed strictly by practical utility and hands-on developer testing:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>Demonstrated daily reliability in actual development or design workflows.</li>
                <li>Transparent pricing models without dark subscription retention tricks.</li>
                <li>Genuine speed or creative quality enhancements over standard alternatives.</li>
                <li>Ethical data security practices and respect for user creative ownership.</li>
              </ul>
              <p className="text-base leading-relaxed font-normal mt-3">
                Whether a company maintains an affiliate program or not has no bearing on our editorial scores. Many of our highest-rated tools have no partner program whatsoever.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">3. Advertising Placements</h2>
              <p className="text-base leading-relaxed font-normal">
                All advertising slots on The Design Tech are clearly demarcated with &ldquo;Advertisement&rdquo; or &ldquo;Sponsored&rdquo; identifiers. We do not engage in deceptive native advertising or unlabelled promotional placements.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Questions regarding our disclosure policies? Reach out through our{" "}
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
