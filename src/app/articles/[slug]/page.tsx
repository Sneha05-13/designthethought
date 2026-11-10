import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleCard from "@/components/editorial/ArticleCard";
import NewsletterSignup from "@/components/editorial/NewsletterSignup";
import AdSlot from "@/components/ads/AdSlot";
import JsonLd, { buildArticleSchema, buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { 
  editorialArticles, 
  getArticleBySlug 
} from "@/data/editorialArticles";
import { siteConfig } from "@/lib/siteConfig";

export async function generateStaticParams() {
  return editorialArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `${siteConfig.url}/articles/${article.slug}`;
  const ogImageUrl = `${siteConfig.url}/opengraph-image`;

  return {
    title: article.title,
    description: article.subtitle || article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${article.title} | ${siteConfig.name}`,
      description: article.subtitle || article.excerpt,
      url,
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author.name],
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subtitle || article.excerpt,
      creator: siteConfig.twitterHandle,
      images: [ogImageUrl],
    },
  };
}

export default async function ArticleDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is typeof article => Boolean(a));

  const canonicalUrl = `${siteConfig.url}/articles/${article.slug}`;
  const shareUrl = canonicalUrl;

  const articleSchema = buildArticleSchema({
    title: article.title,
    description: article.subtitle || article.excerpt,
    url: canonicalUrl,
    publishedAt: article.publishedDate,
    authorName: article.author.name,
    authorRole: article.author.role,
    category: article.category,
    siteName: siteConfig.name,
    siteUrl: siteConfig.url,
  });

  const breadcrumbsSchema = buildBreadcrumbSchema(
    [
      { name: "Home", url: "/" },
      { name: article.category, url: `/${article.categorySlug}` },
      { name: article.title, url: `/articles/${article.slug}` },
    ],
    siteConfig.url
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbsSchema} />
      
      <Navbar />

      <main className="flex-1">
        
        {/* Article Header */}
        <header className="pt-14 pb-10 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D121F] transition-colors">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-6 font-semibold" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/${article.categorySlug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {article.category}
              </Link>
              <span>/</span>
              <span className="text-gray-400 truncate max-w-[200px]">{article.title}</span>
            </nav>

            {/* Category Badge */}
            <div className="mb-4">
              <Link
                href={`/${article.categorySlug}`}
                className="inline-block text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/40 text-indigo-700 dark:text-indigo-400 hover:border-indigo-500 transition-colors"
              >
                {article.category}
              </Link>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-5">
              {article.title}
            </h1>

            {/* Subtitle / Excerpt */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-8 max-w-3xl">
              {article.subtitle}
            </p>

            {/* Metadata Bar */}
            <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{article.author.name}</p>
                  <p className="text-gray-500 dark:text-gray-400">{article.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 font-semibold">
                <span>Published: {article.publishedDate}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

          </div>
        </header>

        {/* Top Ad Slot below Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSlot type="adsense" format="banner" />
        </div>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Table of Contents for Long Articles */}
          {article.sections.length > 1 && (
            <div className="mb-10 p-6 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 shadow-2xs">
              <h2 className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-3">
                Table of Contents
              </h2>
              <ul className="space-y-2 text-sm font-medium">
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
                    >
                      <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs">#</span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Body */}
          <article className="prose prose-gray dark:prose-invert max-w-none">
            {article.sections.map((section, idx) => (
              <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
                  {section.heading}
                </h2>

                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-normal mb-6">
                    {p}
                  </p>
                ))}

                {section.list && (
                  <ul className="my-6 space-y-3 bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl p-6 list-none">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx} className="text-gray-700 dark:text-gray-300 text-base leading-relaxed flex items-start gap-3">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold leading-none mt-1">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.quote && (
                  <blockquote className="my-8 py-4 px-6 border-l-4 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-r-xl italic text-xl text-gray-900 dark:text-white font-medium">
                    &ldquo;{section.quote}&rdquo;
                  </blockquote>
                )}

                {section.callout && (
                  <div className="my-8 p-6 rounded-xl bg-white dark:bg-[#111827] border border-indigo-200 dark:border-indigo-900/60 shadow-2xs">
                    <h3 className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 mb-1.5">
                      {section.callout.title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-0">
                      {section.callout.text}
                    </p>
                  </div>
                )}

                {/* In-article ad placement after section 1 */}
                {idx === 0 && (
                  <AdSlot type="adsense" format="in-article" />
                )}

              </section>
            ))}
          </article>

          {/* Affiliate Disclosure Notice */}
          <div className="mt-8 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111827]/50 text-xs text-gray-500 dark:text-gray-400">
            <strong>Disclosure:</strong> Some links in our articles and reviews may be affiliate partner links. If you purchase through our links, we may receive a commission at no additional cost to you. Read our full{" "}
            <Link href="/disclosure" className="text-indigo-600 dark:text-indigo-400 underline">
              Affiliate Disclosure
            </Link>.
          </div>

          {/* Social Sharing & Story Navigation */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm mt-10">
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Share Story:</span>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                X / Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>

            <Link
              href={`/${article.categorySlug}`}
              className="font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors flex items-center gap-1.5"
            >
              <span>Back to {article.category} &rarr;</span>
            </Link>
          </div>

        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-white dark:bg-[#0D121F] border-t border-gray-200 dark:border-gray-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                  Related Dispatches
                </h2>
                <span className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400">
                  Recommended
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {relatedArticles.map((rel) => (
                  <ArticleCard key={rel.slug} article={rel} />
                ))}
              </div>
            </div>
          </section>
        )}

        <NewsletterSignup />

      </main>

      <Footer />
    </div>
  );
}
