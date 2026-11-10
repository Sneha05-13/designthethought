import type { MetadataRoute } from "next";
import { aiTools } from "@/data/aiTools";
import { aiBasics } from "@/data/aiBasics";
import { guides } from "@/data/guides";
import { aiExperiences } from "@/data/aiExperiences";
import { editorialArticles } from "@/data/editorialArticles";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const buildDate = new Date();

  // Core indexable static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ai-tech`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/startups-biz`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/design-growth`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-hub`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ai-hub/basics`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-hub/tools`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-hub/guides`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-hub/experiences`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: buildDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: buildDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclosure`,
      lastModified: buildDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Design The Thought editorial articles
  const articleRoutes: MetadataRoute.Sitemap = editorialArticles.map((article) => {
    let parsedDate = buildDate;
    try {
      const d = new Date(article.publishedDate);
      if (!isNaN(d.getTime())) {
        parsedDate = d;
      }
    } catch {
      // fallback to buildDate
    }

    return {
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: parsedDate,
      changeFrequency: "monthly",
      priority: article.featured ? 0.9 : 0.8,
    };
  });

  // AI Hub: AI Basics detail pages
  const basicsRoutes: MetadataRoute.Sitemap = aiBasics.map((topic) => ({
    url: `${baseUrl}/ai-hub/basics/${topic.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // AI Hub: AI Tools detail & review pages
  const toolsRoutes: MetadataRoute.Sitemap = aiTools.map((tool) => ({
    url: `${baseUrl}/ai-hub/tools/${tool.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // AI Hub: AI Guides detail pages
  const guidesRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/ai-hub/guides/${guide.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // AI Hub: AI Experiences detail pages
  const experiencesRoutes: MetadataRoute.Sitemap = aiExperiences.map((exp) => {
    let parsedDate = buildDate;
    try {
      const d = new Date(exp.date);
      if (!isNaN(d.getTime())) {
        parsedDate = d;
      }
    } catch {
      // fallback
    }

    return {
      url: `${baseUrl}/ai-hub/experiences/${exp.slug}`,
      lastModified: parsedDate,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...basicsRoutes,
    ...toolsRoutes,
    ...guidesRoutes,
    ...experiencesRoutes,
  ];
}
