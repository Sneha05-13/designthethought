import React from "react";

interface AdSlotProps {
  type?: "adsense" | "mediavine" | "affiliate";
  format?: "leaderboard" | "rectangle" | "in-article" | "sidebar" | "banner";
  className?: string;
  affiliateData?: {
    badge?: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
}

export default function AdSlot({
  type = "adsense",
  format = "banner",
  className = "",
  affiliateData,
}: AdSlotProps) {
  // If affiliate banner
  if (type === "affiliate" && affiliateData) {
    return (
      <aside
        aria-label="Affiliate Recommendation"
        className={`my-8 p-6 rounded-xl border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-r from-indigo-50/50 via-sky-50/30 to-purple-50/30 dark:from-indigo-950/20 dark:via-sky-950/10 dark:to-purple-950/20 text-[#111827] dark:text-[#F9FAFB] shadow-xs ${className}`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                {affiliateData.badge || "Partner Tool"}
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400">
                Sponsored / Affiliate
              </span>
            </div>
            <h4 className="text-base font-bold text-gray-900 dark:text-white">
              {affiliateData.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl">
              {affiliateData.description}
            </p>
          </div>
          <a
            href={affiliateData.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="shrink-0 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            {affiliateData.cta} &rarr;
          </a>
        </div>
      </aside>
    );
  }

  // Dimension helpers for clear editorial placeholders
  const getFormatClasses = () => {
    switch (format) {
      case "leaderboard":
        return "min-h-[90px] w-full max-w-[728px]";
      case "rectangle":
        return "min-h-[250px] w-full max-w-[300px]";
      case "sidebar":
        return "min-h-[300px] w-full";
      case "in-article":
        return "min-h-[120px] w-full max-w-[650px]";
      case "banner":
      default:
        return "min-h-[100px] w-full";
    }
  };

  const getNetworkBadge = () => {
    switch (type) {
      case "mediavine":
        return "Mediavine Placement Slot";
      case "adsense":
      default:
        return "Google AdSense Placement Slot";
    }
  };

  return (
    <aside
      aria-label="Advertisement Placement Placeholder"
      className={`my-8 mx-auto flex flex-col items-center justify-center p-4 rounded-xl border border-dashed border-gray-300 dark:border-gray-800 bg-gray-50/70 dark:bg-[#111827]/40 text-center select-none ${getFormatClasses()} ${className}`}
    >
      <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500 mb-1">
        <span>Advertisement</span>
        <span>•</span>
        <span>{getNetworkBadge()}</span>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500 font-mono">
        Responsive Ad Unit ({format})
      </p>
    </aside>
  );
}

