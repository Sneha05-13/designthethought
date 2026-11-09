import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import AIHubSubnav from "@/components/ai-hub/AIHubSubnav";
import Footer from "@/components/layout/Footer";
import { ChevronRight } from "lucide-react";
import { guides } from "@/data/guides";
import GuideCard from "@/components/ai-hub/GuideCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Guides & Tutorials | The Design Tech AI Hub",
  description: "Step-by-step tutorials, prompt engineering guides, and practical AI workflows for modern creators and builders.",
};

export default function AIGuidesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <Navbar />
      <AIHubSubnav />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 font-medium">
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              The Design Tech
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link href="/ai-hub" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              AI Hub
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900 dark:text-white font-semibold">AI Guides</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 lg:py-20 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-indigo-950/40">
              Hands-On AI Workflows
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Learn AI by Actually Using It
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Practical tutorials, structured prompting workflows and step-by-step guides to help you build real-world skills.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <GuideCard key={guide.slug} {...guide} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/ai-hub" className="inline-flex px-6 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm">
                &larr; Back to AI Hub Overview
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-indigo-50/60 to-sky-50/60 dark:from-indigo-950/20 dark:to-sky-950/20 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Discover Curated AI Tools</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Explore hands-on reviews of ChatGPT, Claude, Cursor, Gemini, and more.
            </p>
            <Link href="/ai-hub/tools" className="inline-flex px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md shadow-indigo-500/25 transition-all">
              Explore Tool Directory
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
