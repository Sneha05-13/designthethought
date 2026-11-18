import { aiTechArticles } from "./articles/aiTechArticles";
import { startupsBizArticles } from "./articles/startupsBizArticles";

export interface ArticleSubsection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface ArticleTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface ArticleSection {
  heading: string;
  id: string;
  body: string[];
  callout?: {
    title: string;
    text: string;
  };
  quote?: string;
  list?: string[];
  subsections?: ArticleSubsection[];
  table?: ArticleTable;
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface EditorialArticle {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: "AI & Tech" | "Startups & Biz" | "Design & Growth";
  categorySlug: "ai-tech" | "startups-biz" | "design-growth";
  readTime: string;
  publishedDate: string;
  featured?: boolean;
  trending?: boolean;
  coverAlt: string;
  author: {
    name: string;
    role: string;
  };
  sections: ArticleSection[];
  relatedSlugs: string[];
  faqs?: ArticleFaq[];
}

export const editorialArticles: EditorialArticle[] = [
  // AI & TECH - High-Depth Editorial Publications
  ...aiTechArticles,

  // STARTUPS & BIZ - High-Depth Editorial Publications
  ...startupsBizArticles,


  // DESIGN & GROWTH
  {
    slug: "canva-magic-studio-review",
    title: "Canva AI & Magic Studio: A Practical Guide for Visual Creators",
    subtitle: "An in-depth review of Canva's AI design tools—what genuinely accelerates your workflow, what to avoid, and how to stay distinctive.",
    excerpt: "Canva's AI suite promises effortless visual production. We explore where it shines for real creators and where human taste remains irreplaceable.",
    category: "Design & Growth",
    categorySlug: "design-growth",
    readTime: "7 min read",
    publishedDate: "November 2026",
    featured: true,
    trending: true,
    coverAlt: "Clean graphic design palette, layout rulers, and creative canvas",
    author: {
      name: "Design The Thought",
      role: "Design & Growth Desk",
    },
    relatedSlugs: ["pinterest-visual-systems", "creative-workflows-generative-design", "personal-branding-ui-design-systems"],
    sections: [
      {
        id: "the-canva-evolution",
        heading: "From Basic Layouts to Intelligent Workflows",
        body: [
          "Canva transformed graphic design by making templates accessible to everyone. With Magic Studio and its suite of AI features, Canva aims to eliminate the friction between having an idea and producing multi-format visual assets.",
          "For content creators, small studio founders, and digital writers, these tools represent a massive reduction in turnaround time—provided you know their strengths and limitations."
        ]
      },
      {
        id: "what-works-brilliantly",
        heading: "Features That Truly Save Hours",
        body: [
          "Magic Switch is arguably the standout capability. Being able to take a horizontal presentation or infographic and automatically resize it into vertical Pinterest pins, Instagram carousels, and blog banners saves tedious manual reorganization.",
          "Background removal and subject isolation have also reached near-perfection, allowing creators to assemble layered editorial collages in seconds without opening specialized photo editing software."
        ],
        callout: {
          title: "The Design Pitfall",
          text: "Avoid relying on Canva's default AI-generated stock illustration prompts. They frequently produce recognizable generic 3D figures that signal low-effort content to discerning readers."
        }
      },
      {
        id: "elevating-the-visual-standard",
        heading: "How to Avoid the 'Canva Look'",
        body: [
          "The biggest challenge with ubiquitous tools is visual homogeneity. When thousands of creators use the same popular templates and default color swatches, everything starts looking identical.",
          "To keep your visual assets fresh, establish an idiosyncratic brand kit: choose distinctive serif and sans-serif typography, limit your color palette to warm earthy neutrals with a purposeful accent, and incorporate custom editorial photography or bespoke abstract textures."
        ]
      }
    ]
  },
  {
    slug: "pinterest-visual-systems",
    title: "Designing for Pinterest: Visual Systems, Typography, and Click-Worthy Pins",
    subtitle: "How to craft pins that stand out in high-density visual feeds without looking like cheap algorithmic clickbait.",
    excerpt: "Pinterest is a visual discovery engine. Mastering vertical aspect ratios, contrast hierarchies, and typographic balance is key to sustainable reach.",
    category: "Design & Growth",
    categorySlug: "design-growth",
    readTime: "6 min read",
    publishedDate: "October 2026",
    featured: false,
    trending: false,
    coverAlt: "Editorial moodboard with warm color samples, typography specimens, and pin layouts",
    author: {
      name: "Design The Thought",
      role: "Design & Growth Desk",
    },
    relatedSlugs: ["canva-magic-studio-review", "creative-workflows-generative-design", "personal-branding-ui-design-systems"],
    sections: [
      {
        id: "the-visual-density-challenge",
        heading: "The Visual Density of Pinterest",
        body: [
          "Unlike social platforms where one post occupies the whole screen, Pinterest displays a continuous, multi-column waterfall of competing imagery. Your design has a split-second window to communicate its relevance to a scanning reader.",
          "Effective pin design is not about loud neon colors or sensationalized claims; it is about typographic hierarchy, intentional negative space, and unambiguous visual clarity."
        ],
        quote: "On Pinterest, clarity eats novelty for breakfast. If a user cannot read your title in under two seconds, they will scroll past."
      },
      {
        id: "three-design-pillars",
        heading: "The 3 Pillars of High-Performing Pin Design",
        body: [
          "To build durable pins that generate traffic over months rather than days, apply these three design principles:",
        ],
        list: [
          "1. 2:3 Vertical Proportions: Stick rigidly to the standard 1000 × 1500 pixel canvas. Wider or square graphics get compressed and marginalized in the algorithmic layout.",
          "2. Typographic Contrast: Pair a high-contrast bold header for your primary keyword with a clean, legible sans-serif for secondary context.",
          "3. Focal Point Hierarchy: One visual subject only. Do not crowd five tiny product photos onto one pin. Let one strong hero asset breathe."
        ]
      }
    ]
  },
  {
    slug: "creative-workflows-generative-design",
    title: "Generative Design in Practice: Pairing AI with Art Direction",
    subtitle: "How modern designers pair AI visual generation with human art direction to create distinctive brand assets.",
    excerpt: "Generative image tools are not replacements for design thinking—they are hyper-fast raw material synthesizers that require disciplined art direction.",
    category: "Design & Growth",
    categorySlug: "design-growth",
    readTime: "7 min read",
    publishedDate: "September 2026",
    featured: false,
    trending: false,
    coverAlt: "Minimalist workspace with sketchbook, tablet, and architectural design drawings",
    author: {
      name: "Design The Thought",
      role: "Design & Growth Desk",
    },
    relatedSlugs: ["canva-magic-studio-review", "pinterest-visual-systems", "personal-branding-ui-design-systems"],
    sections: [
      {
        id: "art-direction-over-automation",
        heading: "Art Direction Over Raw Automation",
        body: [
          "When generative tools first gained mass attention, many imagined graphic design would become obsolete. What actually happened is that the barrier to producing mediocre imagery collapsed to zero.",
          "Because anyone can type a prompt and generate a shiny rendering, human taste and art direction have become the primary differentiators in digital publishing.",
          "Designers who succeed with generative tools do not use raw generations as final output. They use them as texture banks, lighting references, and conceptual clay."
        ]
      },
      {
        id: "the-hybrid-workflow",
        heading: "The Hybrid Editorial Workflow",
        body: [
          "A modern creative workflow looks like this:",
        ],
        list: [
          "Step 1: Moodboard real-world architectural, photographic, and print references.",
          "Step 2: Generate specific texture studies, abstract paper grain, or atmospheric backdrops using restrained prompts.",
          "Step 3: Import raw assets into layout software like Figma or Canva to impose strict typographic grids, precise margins, and brand color grading.",
          "Step 4: Manually review contrast, mobile legibility, and cross-platform consistency."
        ]
      }
    ]
  },
  {
    slug: "personal-branding-ui-design-systems",
    title: "Design Systems for Digital Growth: Building a Cohesive Personal Brand",
    subtitle: "How treating your personal brand as a modular UI design system creates instant recognition and compounding trust.",
    excerpt: "In a noisy internet, visual consistency signals professionalism. Here is how to create a compact design system for your digital presence.",
    category: "Design & Growth",
    categorySlug: "design-growth",
    readTime: "6 min read",
    publishedDate: "November 2026",
    featured: false,
    trending: true,
    coverAlt: "UI design system components, typography scales, and visual design tokens",
    author: {
      name: "Design The Thought",
      role: "Design & Growth Desk",
    },
    relatedSlugs: ["canva-magic-studio-review", "pinterest-visual-systems", "modern-side-hustles-digital-leverage"],
    sections: [
      {
        id: "the-personal-design-system",
        heading: "Your Personal Visual Grammar",
        body: [
          "Companies spend millions developing design systems because consistency builds user trust and reduces decision fatigue. As an independent creator, writer, or entrepreneur, you need that same leverage.",
          "A personal design system is not an 80-page corporate manual. It is a locked set of constraints: two font families, three colors, standardized card padding, and a repeatable thumbnail formula."
        ]
      },
      {
        id: "tokenizing-brand",
        heading: "The 4 Core Tokens",
        body: [
          "Define these four tokens and enforce them across your website, social graphics, and presentations:",
        ],
        list: [
          "1. Primary Anchor Color: One distinct hue (like an electric violet or sharp emerald) that is used exclusively for primary calls-to-action.",
          "2. Typography Hierarchy: One high-personality font for headlines, and one high-legibility neutral font for body copy.",
          "3. Grid & Spacing Scale: Uniform margins (e.g., 16px, 24px, 32px) so every graphic feels proportional.",
          "4. Graphic Asset Rules: Consistent photographic color grading or monochromatic vector styling."
        ]
      }
    ]
  }
];

export function getArticleBySlug(slug: string): EditorialArticle | undefined {
  return editorialArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): EditorialArticle[] {
  return editorialArticles.filter((a) => a.categorySlug === categorySlug);
}

export function getFeaturedArticles(): EditorialArticle[] {
  return editorialArticles.filter((a) => a.featured);
}

export function getTrendingArticles(limit = 4): EditorialArticle[] {
  return editorialArticles.filter((a) => a.trending).slice(0, limit);
}

export function getRecentArticles(limit = 6): EditorialArticle[] {
  return editorialArticles.slice(0, limit);
}
