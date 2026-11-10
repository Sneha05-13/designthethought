import React from "react";

export interface AdSlotProps {
  type?: "adsense" | "mediavine" | "affiliate";
  format?: "leaderboard" | "rectangle" | "in-article" | "sidebar" | "banner";
  className?: string;
  slotId?: string;
  clientId?: string;
  affiliateData?: {
    badge?: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
}

/**
 * AdSlot Component
 * Temporarily disabled: Returns null to remove all visible advertisement spaces,
 * empty containers, and dashed placeholder boxes.
 * Reusable infrastructure is safely preserved for future Google AdSense activation.
 */
export default function AdSlot({
  type = "adsense",
  className = "",
  slotId,
  clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
}: AdSlotProps) {
  // If live Google AdSense client ID and slot ID are configured, render standard ad container
  if (type === "adsense" && clientId && slotId) {
    return (
      <aside
        aria-label="Advertisement"
        className={`my-6 mx-auto flex items-center justify-center overflow-hidden ${className}`}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </aside>
    );
  }

  // All placeholder spaces and empty reserved containers remain disabled
  return null;
}
