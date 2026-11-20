import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArticleCard from "@/components/editorial/ArticleCard";
import NewsletterSignup from "@/components/editorial/NewsletterSignup";
import JsonLd, { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from "@/components/seo/JsonLd";
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

function parseBoldText(text: string, keyPrefix: string): React.ReactNode {
  const boldRegex = /\*\*([^*]+)\*\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={`${keyPrefix}-b-${match.index}`} className="font-bold text-gray-900 dark:text-white">
        {match[1]}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : parts;
}

function renderFormattedText(text: string): React.ReactNode {
  if (!text) return null;

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(parseBoldText(text.slice(lastIndex, match.index), `txt-${lastIndex}`));
    }
    const label = match[1];
    const href = match[2];
    const isInternal = href.startsWith("/");

    if (isInternal) {
      parts.push(
        <Link
          key={`link-${match.index}`}
          href={href}
          className="text-indigo-600 dark:text-indigo-400 font-semibold underline decoration-indigo-300 dark:decoration-indigo-700 underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={`link-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 font-semibold underline decoration-indigo-300 dark:decoration-indigo-700 underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          {label}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(parseBoldText(text.slice(lastIndex), `txt-${lastIndex}`));
  }

  return parts.length === 1 ? parts[0] : parts;
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
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#0B0D13] text-neutral-900 dark:text-neutral-100 transition-colors">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbsSchema} />
      {article.faqs && article.faqs.length > 0 && (
        <JsonLd data={buildFaqSchema(article.faqs)} />
      )}
      
      <Navbar />

      <main className="flex-1">
        
        {/* Article Header */}
        <header className="pt-12 pb-10 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0e111a] transition-colors">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Dispatch</Link>
              <span className="text-neutral-300 dark:text-neutral-700">/</span>
              <Link href={`/${article.categorySlug}`} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                {article.category}
              </Link>
              <span className="text-neutral-300 dark:text-neutral-700">/</span>
              <span className="text-neutral-400 dark:text-neutral-500 truncate max-w-[200px]">{article.title}</span>
            </nav>

            {/* Category Badge */}
            <div className="mb-4">
              <Link
                href={`/${article.categorySlug}`}
                className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] font-medium px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-400 transition-colors"
              >
                {article.category}
              </Link>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.16] mb-6">
              {article.title}
            </h1>

            {/* Subtitle / Excerpt */}
            <p className="font-serif italic text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-3xl">
              {article.subtitle}
            </p>

            {/* Metadata Bar */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-serif font-semibold flex items-center justify-center text-sm shadow-xs">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-sans font-semibold text-neutral-900 dark:text-white text-sm">{article.author.name}</p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs">{article.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span>{article.publishedDate}</span>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

          </div>
        </header>

        {/* Content Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          
          {/* Table of Contents */}
          {article.sections.length > 1 && (
            <div className="mb-12 p-6 bg-white dark:bg-[#0e111a] border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-neutral-500 dark:text-neutral-400 mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                Index of Inquiry
              </h2>
              <ol className="space-y-2.5 text-sm">
                {article.sections.map((section, idx) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-start gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                    >
                      <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors pt-0.5">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-snug underline-offset-4 group-hover:underline">
                        {section.heading}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Article Body */}
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-950 dark:text-neutral-50 tracking-tight mb-5 pb-3 border-b border-neutral-200 dark:border-neutral-800">
                  {section.heading}
                </h2>

                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-neutral-800 dark:text-neutral-200 text-lg leading-[1.8] font-normal mb-6">
                    {renderFormattedText(p)}
                  </p>
                ))}

                {section.list && (
                  <ul className="my-7 space-y-3 bg-white dark:bg-[#0e111a] border border-neutral-200 dark:border-neutral-800 p-6 list-none">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx} className="text-neutral-800 dark:text-neutral-200 text-base leading-relaxed flex items-start gap-3">
                        <span className="text-neutral-400 dark:text-neutral-500 font-mono text-xs mt-1.5">—</span>
                        <span>{renderFormattedText(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="my-8 overflow-x-auto border border-neutral-200 dark:border-neutral-800">
                    {section.table.caption && (
                      <div className="px-5 py-2.5 bg-neutral-100 dark:bg-neutral-800/60 border-b border-neutral-200 dark:border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                        {section.table.caption}
                      </div>
                    )}
                    <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800 text-left text-sm">
                      <thead className="bg-neutral-100/70 dark:bg-neutral-800/50 text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        <tr>
                          {section.table.headers.map((h, i) => (
                            <th key={i} className="px-5 py-3 font-semibold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-[#0e111a]">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-transparent" : "bg-neutral-50/50 dark:bg-neutral-900/30"}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-5 py-3.5 text-neutral-800 dark:text-neutral-300 text-sm align-top leading-relaxed">
                                {renderFormattedText(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.subsections && (
                  <div className="space-y-8 my-8">
                    {section.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-4">
                        <h3 className="font-serif text-xl sm:text-2xl font-normal text-neutral-900 dark:text-neutral-100 tracking-tight">
                          {sub.heading}
                        </h3>
                        {sub.body.map((p, pIdx) => (
                          <p key={pIdx} className="text-neutral-800 dark:text-neutral-200 text-base leading-relaxed font-normal mb-4">
                            {renderFormattedText(p)}
                          </p>
                        ))}
                        {sub.list && (
                          <ul className="my-4 space-y-2.5 bg-white dark:bg-[#0e111a] border border-neutral-200 dark:border-neutral-800 p-5 list-none">
                            {sub.list.map((item, lIdx) => (
                              <li key={lIdx} className="text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed flex items-start gap-2.5">
                                <span className="text-neutral-400 dark:text-neutral-500 font-mono text-xs mt-1.5">—</span>
                                <span>{renderFormattedText(item)}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.quote && (
                  <blockquote className="my-8 pl-6 border-l-2 border-neutral-900 dark:border-neutral-100 font-serif italic text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100 leading-snug">
                    &ldquo;{section.quote}&rdquo;
                  </blockquote>
                )}

                {section.callout && (
                  <div className="my-8 p-6 bg-white dark:bg-[#0e111a] border-l-2 border-neutral-900 dark:border-neutral-100 border-r border-t border-b border-neutral-200 dark:border-neutral-800">
                    <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-neutral-900 dark:text-white mb-2">
                      {section.callout.title}
                    </h3>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-0">
                      {renderFormattedText(section.callout.text)}
                    </p>
                  </div>
                )}

              </section>
            ))}
          </article>

          {/* Frequently Asked Questions Section */}
          {article.faqs && article.faqs.length > 0 && (
            <section className="mt-14 mb-10 p-8 bg-white dark:bg-[#0e111a] border border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-neutral-200 dark:border-neutral-800">
                <span className="w-2 h-2 bg-neutral-900 dark:bg-neutral-100" />
                <h2 className="font-serif text-2xl font-normal text-neutral-950 dark:text-neutral-50 tracking-tight">
                  Inquiries & Clarifications
                </h2>
              </div>
              <div className="space-y-6">
                {article.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="pb-6 border-b border-neutral-200 dark:border-neutral-800/60 last:border-0 last:pb-0">
                    <h3 className="font-sans text-base font-semibold text-neutral-900 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed">
                      {renderFormattedText(faq.answer)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Editorial & Affiliate Disclosure Notice */}
          <div className="mt-8 p-4 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-[#0e111a] text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <strong>Colophon / Disclosure:</strong> Some references in our reporting may include independent affiliate partner links. If you acquire software through these links, our publication may receive a commission without cost to you. Read our full{" "}
            <Link href="/disclosure" className="text-neutral-900 dark:text-white underline underline-offset-2">
              Affiliate Disclosure
            </Link>.
          </div>

          {/* Social Sharing & Story Navigation */}
          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm mt-10">
            
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Share Story:</span>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-900 dark:hover:border-neutral-400 transition-colors"
              >
                X / Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-900 dark:hover:border-neutral-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>

            <Link
              href={`/${article.categorySlug}`}
              className="font-mono text-xs uppercase tracking-wider text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors flex items-center gap-1.5"
            >
              <span>Back to {article.category} &rarr;</span>
            </Link>
          </div>

        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-white dark:bg-[#0e111a] border-t border-neutral-200 dark:border-neutral-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 bg-neutral-950 dark:bg-neutral-50" />
                  <h2 className="font-serif text-2xl font-normal text-neutral-950 dark:text-neutral-50 tracking-tight">
                    Related Dispatches
                  </h2>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                  Recommended Reading
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
