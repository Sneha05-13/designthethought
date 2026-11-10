/**
 * Site Configuration for Design The Thought
 * High-performance digital publication covering AI, technology, startups, and design.
 */

const defaultSiteUrl = "https://designthethought.com";

export const siteConfig = {
  name: "Design The Thought",
  shortName: "DesignTheThought",
  tagline: "Ideas. Innovation. Growth.",
  description:
    "A modern digital publication covering AI, future technology, startups, business, design and digital growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl,
  contactEmail: "editor@designthethought.com",
  twitterHandle: "@designthethought",
  author: {
    name: "Design The Thought Editorial",
    role: "Editorial Staff",
    bio: "Practitioner-tested analysis covering frontier artificial intelligence, high-growth startups, and digital product design.",
  },
  categories: [
    {
      name: "AI & Tech",
      slug: "ai-tech",
      description: "AI tools, machine learning breakthroughs, future tech, tutorials, and practical productivity systems.",
    },
    {
      name: "Startups & Biz",
      slug: "startups-biz",
      description: "Startup case studies, entrepreneurship, digital business models, side hustles, and growth strategies.",
    },
    {
      name: "Design & Growth",
      slug: "design-growth",
      description: "Canva tutorials, Pinterest marketing, UI/UX systems, graphic design tools, personal branding, and audience growth.",
    },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "AI & Tech", href: "/ai-tech" },
    { label: "Startups & Biz", href: "/startups-biz" },
    { label: "Design & Growth", href: "/design-growth" },
    { label: "AI Hub", href: "/ai-hub" },
  ],
  footerLinks: {
    editorial: [
      { label: "AI & Tech", href: "/ai-tech" },
      { label: "Startups & Biz", href: "/startups-biz" },
      { label: "Design & Growth", href: "/design-growth" },
      { label: "All Articles", href: "/#articles" },
    ],
    publication: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "AI Hub", href: "/ai-hub" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Affiliate & Advertising Disclosure", href: "/disclosure" },
    ],
  },
  getCanonicalUrl(path: string = ""): string {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${this.url}${cleanPath === "/" ? "" : cleanPath}`;
  },
};
