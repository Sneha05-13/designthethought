import React from "react";
import Link from "next/link";
import { EditorialArticle } from "@/data/editorialArticles";

interface ArticleCardProps {
  article: EditorialArticle;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const getCategoryStyles = (slug: string) => {
    switch (slug) {
      case "ai-tech":
        return {
          badge: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border-indigo-200/60 dark:border-indigo-800/40",
          gradient: "from-indigo-600/10 via-sky-500/5 to-transparent",
          iconColor: "text-indigo-600 dark:text-indigo-400",
        };
      case "startups-biz":
        return {
          badge: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40",
          gradient: "from-emerald-600/10 via-teal-500/5 to-transparent",
          iconColor: "text-emerald-600 dark:text-emerald-400",
        };
      case "design-growth":
      default:
        return {
          badge: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-400 border-sky-200/60 dark:border-sky-800/40",
          gradient: "from-sky-600/10 via-purple-500/5 to-transparent",
          iconColor: "text-sky-600 dark:text-sky-400",
        };
    }
  };

  const style = getCategoryStyles(article.categorySlug);

  if (featured) {
    return (
      <article className="group relative rounded-2xl border border-gray-200 dark:border-gray-800/80 bg-white dark:bg-[#111827] p-6 sm:p-8 lg:p-10 shadow-xs hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:shadow-md transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 h-64 sm:h-80 w-full rounded-xl bg-gray-100 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 flex flex-col justify-between p-6 relative overflow-hidden group-hover:border-indigo-500/30 transition-colors">
            <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-90`} />
            
            {/* Subtle Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative z-10 flex items-center justify-between">
              <span className={`text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full border ${style.badge}`}>
                {article.category}
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                Featured Lead
              </span>
            </div>

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold block mb-1">
                Design The Thought Editorial
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white line-clamp-2">
                {article.title}
              </h3>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">
              <span>{article.publishedDate}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span className="text-gray-700 dark:text-gray-300">By {article.author.name}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight mb-4">
              <Link href={`/articles/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-normal">
              {article.subtitle || article.excerpt}
            </p>

            <div className="pt-2">
              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                <span>Read Full Story</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </article>
    );
  }

  return (
    <article className="group relative rounded-xl border border-gray-200 dark:border-gray-800/80 bg-white dark:bg-[#111827] p-5 flex flex-col justify-between shadow-2xs hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:shadow-sm transition-all duration-300">
      <div>
        
        {/* Card Header Banner / Graphic Aspect */}
        <div className={`h-40 w-full rounded-lg bg-gray-50 dark:bg-[#0B0F19] border border-gray-200/80 dark:border-gray-800/80 flex flex-col justify-between p-4 mb-4 relative overflow-hidden group-hover:border-indigo-500/30 transition-colors`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-80`} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />

          <div className="relative z-10 flex items-center justify-between">
            <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full border ${style.badge}`}>
              {article.category}
            </span>
            <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 bg-white/70 dark:bg-black/50 px-2 py-0.5 rounded-md">
              {article.readTime}
            </span>
          </div>

          <div className="relative z-10 text-xs font-semibold text-gray-700 dark:text-gray-300">
            {article.author.role}
          </div>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">
          {article.publishedDate}
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug mb-2.5">
          <Link href={`/articles/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-5 font-normal">
          {article.excerpt}
        </p>

      </div>

      <div className="pt-3.5 border-t border-gray-100 dark:border-gray-800/70 flex items-center justify-between text-xs">
        <span className="text-gray-500 dark:text-gray-400 font-medium">
          By {article.author.name}
        </span>
        <Link
          href={`/articles/${article.slug}`}
          className="font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors flex items-center gap-1"
        >
          Read <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
