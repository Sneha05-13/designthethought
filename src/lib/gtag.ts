import { siteConfig } from "@/lib/siteConfig";

export const GA_MEASUREMENT_ID = siteConfig.gaMeasurementId;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Custom event tracking for GA4
 * Example: trackEvent({ action: "read_article", category: "engagement", label: "Prompt Engineering Guide" })
 */
export const trackEvent = ({
  action,
  category,
  label,
  value,
  params,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  params?: Record<string, unknown>;
}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      ...(category ? { event_category: category } : {}),
      ...(label ? { event_label: label } : {}),
      ...(value !== undefined ? { value } : {}),
      ...params,
    });
  }
};

