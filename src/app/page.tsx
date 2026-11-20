import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleCard from "@/components/editorial/ArticleCard";
import NewsletterSignup from "@/components/editorial/NewsletterSignup";
import { 
  editorialArticles, 
  getArticlesByCategory, 
  getFeaturedArticles,
  getTrendingArticles,
  getRecentArticles 
} from "@/data/editorialArticles";

export default function Home() {
  const featuredArticles = getFeaturedArticles();
  const leadArticle = featuredArticles[0] || editorialArticles[0];
  const briefingArticles = editorialArticles.filter(a => a.slug !== leadArticle.slug).slice(0, 3);
  
  const aiTechArticles = getArticlesByCategory("ai-tech");
  const startupsBizArticles = getArticlesByCategory("startups-biz");
  const designGrowthArticles = getArticlesByCategory("design-growth");
  const trendingArticles = getTrendingArticles(4);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#0B0D13] text-[#12141A] dark:text-[#F3F4F6] transition-colors">
      <Navbar />

      <main className="flex-1">
        
        {/* Section 1: Editorial Masthead Hero Intro */}
        <section className="pt-12 sm:pt-16 pb-12 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E111A] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-neutral-200/80 dark:border-neutral-800/80">
              <div className="max-w-3xl">
                <span className="text-2xs font-mono uppercase tracking-widest font-bold text-neutral-500 dark:text-neutral-400 block mb-3">
                  Vol. 2026 • Curated Technology &amp; Venture Publication
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1] mb-5">
                  Ideas. Innovation. Growth.
                </h1>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-2xl">
                  A high-depth digital publication exploring frontier artificial intelligence, lean startup architecture, unit economics, and digital product craft.
                </p>
              </div>

              {/* Fast Category Access Pills */}
              <div className="flex flex-wrap items-center gap-2 lg:justify-end shrink-0">
                <Link
                  href="/ai-tech"
                  className="px-3.5 py-2 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 bg-neutral-50 dark:bg-neutral-900 text-xs font-mono uppercase tracking-wider font-semibold text-neutral-800 dark:text-neutral-200 transition-colors"
                >
                  AI &amp; Tech &rarr;
                </Link>
                <Link
                  href="/startups-biz"
                  className="px-3.5 py-2 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 bg-neutral-50 dark:bg-neutral-900 text-xs font-mono uppercase tracking-wider font-semibold text-neutral-800 dark:text-neutral-200 transition-colors"
                >
                  Startups &amp; Biz &rarr;
                </Link>
                <Link
                  href="/design-growth"
                  className="px-3.5 py-2 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 bg-neutral-50 dark:bg-neutral-900 text-xs font-mono uppercase tracking-wider font-semibold text-neutral-800 dark:text-neutral-200 transition-colors"
                >
                  Design &amp; Growth &rarr;
                </Link>
                <Link
                  href="/ai-hub"
                  className="px-3.5 py-2 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 text-xs font-mono uppercase tracking-wider font-semibold text-white dark:text-neutral-950 transition-colors"
                >
                  AI Hub Directory &rarr;
                </Link>
              </div>
            </div>

            {/* Section 2: Top Magazine Spread (Lead Story + The Briefing) */}
            <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column: Lead Feature (8 Cols) */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100" />
                  <span className="text-2xs font-mono uppercase tracking-widest font-bold text-neutral-900 dark:text-white">
                    Lead Editorial Story
                  </span>
                </div>
                {leadArticle && (
                  <ArticleCard article={leadArticle} variant="featured" />
                )}
              </div>

              {/* Right Column: The Daily Briefing (4 Cols) */}
              <aside className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-6 border-b border-neutral-200 dark:border-neutral-800">
                    <span className="text-2xs font-mono uppercase tracking-widest font-bold text-neutral-900 dark:text-white">
                      The Editor&apos;s Briefing
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      Top Reads
                    </span>
                  </div>

                  <div className="space-y-6">
                    {briefingArticles.map((article, idx) => (
                      <ArticleCard 
                        key={article.slug} 
                        article={article} 
                        variant="horizontal" 
                        index={idx}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                  <Link
                    href="/ai-hub"
                    className="block p-4 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#11141E] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                  >
                    <span className="text-2xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-1">
                      Directory Highlight
                    </span>
                    <h4 className="font-serif text-sm font-bold text-neutral-900 dark:text-white mb-1">
                      Browse the AI Hub Tool Directory
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Structured reviews of Claude, ChatGPT, Cursor, and Gemini &rarr;
                    </p>
                  </Link>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* Section 3: The Critical Questions (AI & Frontier Technology) */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <span className="text-2xs font-mono uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400 block mb-1">
                Question-Based Inquiries
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white tracking-tight">
                AI &amp; Frontier Technology
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl font-normal">
                How LLMs generate responses, why models hallucinate, when to use agents, and how AI impacts real workplaces.
              </p>
            </div>
            <Link
              href="/ai-tech"
              className="mt-4 sm:mt-0 text-xs font-mono uppercase tracking-wider font-bold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <span>Explore All 20 Questions</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {aiTechArticles.slice(0, 6).map((article) => (
              <ArticleCard key={article.slug} article={article} variant="standard" />
            ))}
          </div>
        </section>

        {/* Section 4: The Founder & Venture Desk (Startups & Biz) */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#0E111A] border-t border-neutral-200 dark:border-neutral-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <span className="text-2xs font-mono uppercase tracking-widest font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                  Venture Architecture &amp; Playbooks
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white tracking-tight">
                  Startups, Business Models &amp; Scaling
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl font-normal">
                  Product-Market Fit benchmarks, unit economics mathematics (CAC &amp; LTV), SAFE note dilution, and why startups fail.
                </p>
              </div>
              <Link
                href="/startups-biz"
                className="mt-4 sm:mt-0 text-xs font-mono uppercase tracking-wider font-bold text-neutral-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <span>View Founder Desk</span>
                <span>&rarr;</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {startupsBizArticles.slice(0, 6).map((article) => (
                <ArticleCard key={article.slug} article={article} variant="standard" />
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: The Craft (Design Systems & Digital Growth) */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <span className="text-2xs font-mono uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400 block mb-1">
                Visual Identity &amp; Leverage
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white tracking-tight">
                Design &amp; Growth
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl font-normal">
                Canva Magic Studio evaluations, Pinterest algorithmic traffic engines, and personal branding design tokens.
              </p>
            </div>
            <Link
              href="/design-growth"
              className="mt-4 sm:mt-0 text-xs font-mono uppercase tracking-wider font-bold text-neutral-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <span>View All Design &amp; Growth</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {designGrowthArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} variant="standard" />
            ))}
          </div>
        </section>

        {/* Section 6: Most Read & Trending Stories (Numbered Row) */}
        <section className="py-16 sm:py-20 bg-neutral-100/70 dark:bg-[#0B0D13] border-t border-neutral-200 dark:border-neutral-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-neutral-200 dark:border-neutral-800">
              <span className="text-2xs font-mono uppercase tracking-widest font-bold text-neutral-900 dark:text-white">
                Most Read Across All Desks
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                Weekly Engagement
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {trendingArticles.map((article, idx) => (
                <ArticleCard 
                  key={article.slug} 
                  article={article} 
                  variant="minimal" 
                  index={idx} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Editorial Newsletter */}
        <NewsletterSignup />

      </main>

      <Footer />
    </div>
  );
}
