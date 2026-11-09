"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { editorialArticles } from "@/data/editorialArticles";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Derive search results directly during render without cascading useEffect renders
  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];
    return editorialArticles.filter((art) => {
      return (
        art.title.toLowerCase().includes(trimmed) ||
        art.subtitle.toLowerCase().includes(trimmed) ||
        art.excerpt.toLowerCase().includes(trimmed) ||
        art.category.toLowerCase().includes(trimmed)
      );
    });
  }, [query]);

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search articles"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs transition-opacity"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#111827] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-200 dark:border-gray-800">
          <svg
            className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI, startups, business, design guides..."
            className="w-full bg-transparent text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={handleClose}
            className="ml-2 text-xs font-medium px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {query.trim() === "" ? (
            <div className="py-10 text-center text-gray-400 dark:text-gray-500 text-sm">
              <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                Search The Design Tech
              </p>
              <p className="text-xs">
                Try searching for &quot;prompting&quot;, &quot;Canva&quot;, &quot;Pinterest&quot;, &quot;micro-saas&quot;, or &quot;agents&quot;.
              </p>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 px-2 mb-2">
                {results.length} Matching {results.length === 1 ? "Article" : "Articles"}
              </p>
              {results.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  onClick={handleClose}
                  className="block p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 border border-transparent hover:border-gray-200 dark:hover:border-gray-700/60 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/40">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      • {article.readTime}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-gray-500 dark:text-gray-400">
              <p className="text-sm font-semibold mb-1">
                No articles found matching &quot;{query}&quot;
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Check your spelling or browse our{" "}
                <Link
                  href="/ai-tech"
                  onClick={handleClose}
                  className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2"
                >
                  AI &amp; Tech
                </Link>{" "}
                or{" "}
                <Link
                  href="/design-growth"
                  onClick={handleClose}
                  className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2"
                >
                  Design &amp; Growth
                </Link>{" "}
                sections.
              </p>
            </div>
          )}
        </div>

        {/* Footer info in Modal */}
        <div className="px-4 py-2.5 bg-gray-50 dark:bg-[#0B0F19]/50 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs text-gray-400">
          <span>Search articles across all categories</span>
          <span className="hidden sm:inline">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
