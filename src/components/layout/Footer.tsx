import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#080C14] border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 pt-16 pb-12 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-14">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4 max-w-md">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 text-2xl font-black tracking-tight text-gray-900 dark:text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                DT
              </div>
              <span>The Design Tech</span>
            </Link>
            <p className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pr-4 font-normal">
              A modern digital publication covering artificial intelligence, frontier technology, startup architecture, and high-growth digital design systems.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Editorial Categories */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-xs uppercase tracking-wider font-bold text-gray-900 dark:text-white">
              Editorial Categories
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/ai-tech" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  AI &amp; Tech
                </Link>
              </li>
              <li>
                <Link href="/startups-biz" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Startups &amp; Biz
                </Link>
              </li>
              <li>
                <Link href="/design-growth" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Design &amp; Growth
                </Link>
              </li>
              <li>
                <Link href="/#articles" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  All Latest Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Publication Links */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-xs uppercase tracking-wider font-bold text-gray-900 dark:text-white">
              Publication
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact &amp; Pitches
                </Link>
              </li>
              <li>
                <Link href="/ai-hub" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
                  AI Hub &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Policy Links */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-xs uppercase tracking-wider font-bold text-gray-900 dark:text-white">
              Transparency &amp; Legal
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} The Design Tech. Ideas. Innovation. Growth.
          </p>
          <div className="flex items-center gap-6">
            <span>Independent Technology Publication</span>
            <span>•</span>
            <Link href="/ai-hub" className="hover:text-gray-900 dark:hover:text-white transition-colors underline underline-offset-4">
              Access Preserved AI Hub
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
