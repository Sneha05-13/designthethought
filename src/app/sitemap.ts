import type { MetadataRoute } from "next";
import { aiTools } from "@/data/aiTools";
import { aiBasics } from "@/data/aiBasics";
import { guides } from "@/data/guides";
import { aiExperiences } from "@/data/aiExperiences";
import { editorialArticles } from "@/data/editorialArticles";
import { siteConfig } from "@/lib/siteConfig";
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  
  // Editorial and static publication routes
  const staticEditorialRoutes = [
    "",
    "/ai-tech",
    "/startups-biz",
    "/design-growth",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclosure",
    "/ai-hub",
    "/ai-hub/basics",
    "/ai-hub/tools",
    "/ai-hub/guides",
    "/ai-hub/experiences",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/ai-hub") ? 0.7 : 0.8,
  }));

  // The Design Tech article routes
  const editorialRoutes = editorialArticles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: article.featured ? 0.9 : 0.8,
  }));

  // Preserved Contentian AI Hub routes
  const toolsRoutes = aiTools.map((tool) => ({
    url: `${baseUrl}/ai-hub/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const basicsRoutes = aiBasics.map((topic) => ({
    url: `${baseUrl}/ai-hub/basics/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const guidesRoutes = guides.map((guide) => ({
    url: `${baseUrl}/ai-hub/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const experiencesRoutes = aiExperiences.map((exp) => ({
    url: `${baseUrl}/ai-hub/experiences/${exp.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticEditorialRoutes,
    ...editorialRoutes,
    ...toolsRoutes,
    ...basicsRoutes,
    ...guidesRoutes,
    ...experiencesRoutes
  ];
}
