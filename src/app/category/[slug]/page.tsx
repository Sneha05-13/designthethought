import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export async function generateStaticParams() {
  return [
    { slug: "ai-tech" },
    { slug: "startups-biz" },
    { slug: "design-growth" },
    { slug: "tech-ai" },
    { slug: "design" },
    { slug: "learn-grow" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = siteConfig.categories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name} | ${siteConfig.name}`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (slug === "ai-tech" || slug === "tech-ai") {
    redirect("/ai-tech");
  }
  if (slug === "startups-biz" || slug === "learn-grow" || slug === "career" || slug === "biz") {
    redirect("/startups-biz");
  }
  if (slug === "design-growth" || slug === "design" || slug === "education") {
    redirect("/design-growth");
  }

  notFound();
}
