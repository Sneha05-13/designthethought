"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import ThemeToggle from "@/components/theme/ThemeToggle";
import SearchModal from "@/components/search/SearchModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Editorial Utility Strip (Desktop) */}
      <div className="hidden lg:block border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/80 dark:bg-[#080A0F] text-[11px] text-neutral-500 dark:text-neutral-400 font-medium py-1.5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-300 font-semibold">
              Volume 2026
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>Independent Technology, Venture &amp; Design Publication</span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/ai-hub" 
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1 font-semibold text-neutral-700 dark:text-neutral-300"
            >
              <span>Explore AI Hub Directory</span>
              <span className="text-xs">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#0B0D13]/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-17 items-center justify-between">
            
            {/* Brand Logo - Editorial Masthead */}
            <div className="flex items-center gap-3">
              <Link 
                href="/" 
                className="flex items-center gap-3 group"
              >
                <div className="w-7 h-7 rounded-xs bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-black text-xs flex items-center justify-center tracking-tighter transition-transform group-hover:scale-105">
                  DT
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 leading-none">
                    Design The Thought
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-600 dark:text-neutral-300 font-semibold mt-1">
                    Editorial Magazine
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-300">
              {siteConfig.navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors py-1 relative ${
                      active 
                        ? "text-neutral-950 dark:text-white font-bold" 
                        : "hover:text-neutral-950 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-neutral-900 dark:bg-neutral-100" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Desktop Utilities: Search & Theme Toggle */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors cursor-pointer"
                aria-label="Search articles"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden lg:inline text-neutral-600 dark:text-neutral-400">Search articles...</span>
                <kbd className="hidden lg:inline text-[10px] font-mono px-1.5 py-0.5 rounded-xs bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">⌘K</kbd>
              </button>

              <div className="h-4 w-px bg-neutral-200 dark:border-neutral-800" />

              <ThemeToggle />
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                aria-label="Search articles"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <ThemeToggle />

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white focus:outline-hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0B0D13] px-4 pt-4 pb-6 space-y-2">
            <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 font-bold px-3 pb-1">
              Publication Navigation
            </p>
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-sm text-sm font-semibold tracking-wide ${
                  isActive(link.href)
                    ? "bg-neutral-100 dark:bg-neutral-900 text-neutral-950 dark:text-white font-bold"
                    : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900/60"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-neutral-100 dark:bg-neutral-900 text-xs font-semibold text-neutral-800 dark:text-neutral-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search all articles...
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
