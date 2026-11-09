"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, BookOpen, Wrench, Compass, Award } from "lucide-react";

const subnavItems = [
  { label: "Overview", href: "/ai-hub", icon: Sparkles, exact: true },
  { label: "AI Basics", href: "/ai-hub/basics", icon: BookOpen, exact: false },
  { label: "AI Tools", href: "/ai-hub/tools", icon: Wrench, exact: false },
  { label: "AI Guides", href: "/ai-hub/guides", icon: Compass, exact: false },
  { label: "AI Experiences", href: "/ai-hub/experiences", icon: Award, exact: false },
];

export default function AIHubSubnav() {
  const pathname = usePathname();

  const isActive = (href: string, exact: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="sticky top-18 z-30 w-full bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          
          {/* Breadcrumb section badge */}
          <div className="flex items-center gap-2 text-xs font-semibold shrink-0">
            <Link 
              href="/"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              The Design Tech
            </Link>
            <span className="text-gray-300 dark:text-gray-700">/</span>
            <Link 
              href="/ai-hub"
              className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-bold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Hub</span>
            </Link>
          </div>

          {/* Subnav section pills */}
          <nav className="flex items-center gap-1 sm:gap-2 shrink-0 py-1" aria-label="AI Hub sections">
            {subnavItems.map((item) => {
              const active = isActive(item.href, item.exact);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    active
                      ? "bg-indigo-600 text-white shadow-xs shadow-indigo-500/30"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

        </div>
      </div>
    </div>
  );
}
