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
  const recentArticles = getRecentArticles(6);
  const trendingArticles = getTrendingArticles(4);

  const aiTechArticles = getArticlesByCategory("ai-tech").slice(0, 3);
  const startupsBizArticles = getArticlesByCategory("startups-biz").slice(0, 3);
  const designGrowthArticles = getArticlesByCategory("design-growth").slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <Navbar />

      <main className="flex-1">
        
        {/* Section A: Hero / Publication Introduction */}
        <section className="pt-16 pb-14 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D121F] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/40 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-6">
                <span>Design The Thought</span>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <span>Independent Publication</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-5">
                Ideas. Innovation. Growth.
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-8 max-w-2xl">
                A modern digital publication exploring frontier artificial intelligence, lean startup architecture, visual design systems, and digital leverage.
              </p>

              {/* CTAs and Category Quick Links */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#latest-articles"
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-xs"
                >
                  Explore Latest Stories &rarr;
                </a>
                <Link
                  href="/ai-tech"
                  className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold text-sm transition-colors"
                >
                  AI &amp; Tech
                </Link>
                <Link
                  href="/startups-biz"
                  className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold text-sm transition-colors"
                >
                  Startups &amp; Biz
                </Link>
                <Link
                  href="/design-growth"
                  className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold text-sm transition-colors"
                >
                  Design &amp; Growth
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Section B: Featured Story */}
        {leadArticle && (
          <section className="py-12 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                  Featured Story
                </h2>
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400">
                Editor&apos;s Pick
              </span>
            </div>
            
            <ArticleCard article={leadArticle} featured={true} />
          </section>
        )}

        {/* Section C: Latest Articles + Trending Stories Sidebar */}
        <section id="latest-articles" className="py-12 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Main Column: Latest Articles (Desktop 2-col inside 8 cols, or 3-col below) */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200 dark:border-gray-800">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                    Latest Dispatches
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Grounded engineering essays, digital growth frameworks, and startup reviews
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recentArticles.slice(0, 4).map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>

            {/* Section E: Trending Stories Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800/80 bg-white dark:bg-[#111827] shadow-2xs">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider text-xs">
                    Trending Stories
                  </h3>
                </div>

                <div className="space-y-4">
                  {trendingArticles.map((article, idx) => (
                    <div key={article.slug} className="group flex items-start gap-3.5 pb-4 border-b border-gray-100 dark:border-gray-800/60 last:border-0 last:pb-0">
                      <span className="font-mono text-2xl font-black text-gray-300 dark:text-gray-700 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-none shrink-0 pt-0.5">
                        0{idx + 1}
                      </span>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                          {article.category}
                        </span>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
                          <Link href={`/articles/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {article.readTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </section>

        {/* Section D1: AI & Tech Section */}
        <section className="py-16 bg-white dark:bg-[#0D121F] border-t border-gray-200 dark:border-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 mb-1 block">
                  Category Focus
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                  AI &amp; Tech
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-normal max-w-xl">
                  Machine learning architectures, prompt engineering frameworks, software tools, and autonomous agent systems.
                </p>
              </div>
              <Link
                href="/ai-tech"
                className="mt-4 sm:mt-0 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
              >
                <span>View All AI &amp; Tech</span>
                <span>&rarr;</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {aiTechArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Section D2: Startups & Biz Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-600 dark:text-emerald-400 mb-1 block">
                Category Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                Startups &amp; Biz
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-normal max-w-xl">
                Bootstrapped software playbooks, solo founder economics, digital assets, and high-margin online business models.
              </p>
            </div>
            <Link
              href="/startups-biz"
              className="mt-4 sm:mt-0 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
            >
              <span>View All Startups &amp; Biz</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {startupsBizArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* Section D3: Design & Growth Section */}
        <section className="py-16 bg-white dark:bg-[#0D121F] border-t border-gray-200 dark:border-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-sky-600 dark:text-sky-400 mb-1 block">
                  Category Focus
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                  Design &amp; Growth
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-normal max-w-xl">
                  Canva Magic Studio, Pinterest traffic engines, UI design systems, visual branding, and audience growth.
                </p>
              </div>
              <Link
                href="/design-growth"
                className="mt-4 sm:mt-0 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1.5 transition-colors"
              >
                <span>View All Design &amp; Growth</span>
                <span>&rarr;</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {designGrowthArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Section F: Newsletter Signup */}
        <NewsletterSignup />

      </main>

      <Footer />
    </div>
  );
}
