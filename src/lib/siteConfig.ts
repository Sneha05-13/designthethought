/**
 * Site Configuration for The Design Tech
 * Modern technology and business publication.
 */

export const siteConfig = {
  name: "The Design Tech",
  tagline: "Ideas. Innovation. Growth.",
  description:
    "A modern digital publication covering AI, future technology, startups, business, design and digital growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thedesigntech.com",
  author: {
    name: "The Design Tech Editorial",
    role: "Editorial Staff",
    bio: "Covering technological breakthroughs, high-growth startups, and modern digital design.",
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
      { label: "Contentian AI Hub", href: "/ai-hub" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Affiliate & Advertising Disclosure", href: "/disclosure" },
    ],
  },
};
