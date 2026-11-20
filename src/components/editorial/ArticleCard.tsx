import React from "react";
import Link from "next/link";
import { EditorialArticle } from "@/data/editorialArticles";

interface ArticleCardProps {
  article: EditorialArticle;
  featured?: boolean;
  variant?: "standard" | "featured" | "horizontal" | "minimal";
  index?: number;
}

export default function ArticleCard({ 
  article, 
  featured = false,
  variant,
  index 
}: ArticleCardProps) {
  const cardVariant = variant || (featured ? "featured" : "standard");

  const getCategoryStyles = (slug: string) => {
    switch (slug) {
      case "ai-tech":
        return {
          accentColor: "border-l-blue-600 dark:border-l-blue-400",
          tagText: "text-blue-600 dark:text-blue-400",
          tagBg: "bg-blue-50 dark:bg-blue-950/40 border-blue-200/60 dark:border-blue-900/40",
          coverBg: "from-neutral-100 to-neutral-200/70 dark:from-[#0F131D] dark:to-[#161C2B]",
          badgeDot: "bg-blue-600",
        };
      case "startups-biz":
        return {
          accentColor: "border-l-emerald-600 dark:border-l-emerald-400",
          tagText: "text-emerald-700 dark:text-emerald-400",
          tagBg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 dark:border-emerald-900/40",
          coverBg: "from-neutral-100 to-neutral-200/70 dark:from-[#0E1517] dark:to-[#142223]",
          badgeDot: "bg-emerald-600",
        };
      case "design-growth":
      default:
        return {
          accentColor: "border-l-amber-600 dark:border-l-amber-400",
          tagText: "text-amber-700 dark:text-amber-400",
          tagBg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200/60 dark:border-amber-900/40",
          coverBg: "from-neutral-100 to-neutral-200/70 dark:from-[#15121B] dark:to-[#221B2B]",
          badgeDot: "bg-amber-600",
        };
    }
  };

  const style = getCategoryStyles(article.categorySlug);

  // 1. FEATURED HERO SPREAD (For lead stories)
  if (cardVariant === "featured") {
    return (
      <article className="group relative border border-neutral-200/90 dark:border-neutral-800/80 bg-white dark:bg-[#11141E] p-6 sm:p-8 lg:p-10 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Cover Presentation */}
          <div className="lg:col-span-5 w-full h-72 sm:h-92 relative overflow-hidden bg-neutral-100 dark:bg-[#0D1017] border border-neutral-200/80 dark:border-neutral-800">
            <div className={`absolute inset-0 bg-gradient-to-br ${style.coverBg}`} />
            
            {/* Subtle Editorial Typography Watermark */}
            <div className="absolute -bottom-6 -right-6 select-none pointer-events-none opacity-[0.06] dark:opacity-[0.07] font-serif text-8xl font-black">
              {article.categorySlug === "ai-tech" ? "AI" : article.categorySlug === "startups-biz" ? "BIZ" : "DSN"}
            </div>

            <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] uppercase font-mono tracking-widest font-bold px-2.5 py-1 border ${style.tagBg} ${style.tagText}`}>
                  {article.category}
                </span>
                <span className="text-[11px] font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
                  {article.readTime}
                </span>
              </div>

              <div>
                <span className="text-2xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-1">
                  Lead Dispatch
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white line-clamp-3 leading-snug">
                  {article.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
              <span>{article.publishedDate}</span>
              <span>•</span>
              <span>By {article.author.name}</span>
              <span>•</span>
              <span className="text-neutral-400 dark:text-neutral-500">{article.author.role}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-neutral-50 tracking-tight leading-[1.2] mb-4 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
              <Link href={`/articles/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
              {article.subtitle || article.excerpt}
            </p>

            <div className="pt-2">
              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>Read Full Story</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </article>
    );
  }

  // 2. HORIZONTAL BRIEFING ROW (For secondary features & sidebars)
  if (cardVariant === "horizontal") {
    return (
      <article className="group relative border-b border-neutral-200 dark:border-neutral-800/80 pb-5 last:border-0 last:pb-0">
        <div className="flex items-start gap-4">
          {typeof index === "number" && (
            <span className="font-serif text-2xl font-bold text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors shrink-0 pt-0.5 w-6">
              {index < 9 ? `0${index + 1}` : index + 1}
            </span>
          )}
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-mono uppercase tracking-widest font-bold ${style.tagText}`}>
                {article.category}
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span className="text-[11px] font-mono text-neutral-400">
                {article.readTime}
              </span>
            </div>

            <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors line-clamp-2 leading-snug">
              <Link href={`/articles/${article.slug}`}>
                {article.title}
              </Link>
            </h3>

            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
      </article>
    );
  }

  // 3. MINIMAL NUMBERED LIST CARD
  if (cardVariant === "minimal") {
    return (
      <article className="group flex items-start gap-4 pb-4 border-b border-neutral-200/80 dark:border-neutral-800/60 last:border-0 last:pb-0">
        {typeof index === "number" && (
          <span className="font-serif text-3xl font-bold text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors shrink-0 leading-none">
            {index < 9 ? `0${index + 1}` : index + 1}
          </span>
        )}
        <div className="space-y-1">
          <span className={`text-[10px] font-mono uppercase tracking-widest font-bold ${style.tagText}`}>
            {article.category}
          </span>
          <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors line-clamp-2 leading-snug">
            <Link href={`/articles/${article.slug}`}>
              {article.title}
            </Link>
          </h4>
          <span className="text-[11px] font-mono text-neutral-400 block">
            {article.readTime}
          </span>
        </div>
      </article>
    );
  }

  // 4. STANDARD EDITORIAL GRID CARD
  return (
    <article className="group relative border border-neutral-200/90 dark:border-neutral-800/80 bg-white dark:bg-[#11141E] p-5 sm:p-6 flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300">
      <div>
        
        {/* Cover Aspect */}
        <div className="h-44 w-full relative overflow-hidden bg-neutral-100 dark:bg-[#0D1017] border border-neutral-200/70 dark:border-neutral-800/70 p-4 mb-4 flex flex-col justify-between">
          <div className={`absolute inset-0 bg-gradient-to-br ${style.coverBg} transition-transform duration-500 group-hover:scale-105`} />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className={`text-[10px] uppercase font-mono tracking-widest font-bold px-2 py-0.5 border ${style.tagBg} ${style.tagText}`}>
              {article.category}
            </span>
            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
              {article.readTime}
            </span>
          </div>

          <div className="relative z-10">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
              {article.author.role}
            </span>
          </div>
        </div>

        <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
          {article.publishedDate}
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-950 dark:text-neutral-50 tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors leading-snug mb-3">
          <Link href={`/articles/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3 mb-6 font-normal">
          {article.excerpt}
        </p>

      </div>

      <div className="pt-3.5 border-t border-neutral-200/70 dark:border-neutral-800/70 flex items-center justify-between text-xs font-mono">
        <span className="text-neutral-500 dark:text-neutral-400">
          By {article.author.name}
        </span>
        <Link
          href={`/articles/${article.slug}`}
          className="font-bold tracking-wider uppercase text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5"
        >
          Read <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
