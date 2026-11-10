export interface AIExperience {
  title: string;
  description: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  content: {
    introduction: string;
    whyITriedIt: string;
    whatIBuiltTested: string;
    toolsUsed: string[];
    whatHappened: string;
    whatWorked: string;
    whatDidnt: string;
    lessonsLearned: string;
    whatsNext: string;
  };
}

export const aiExperiences: AIExperience[] = [
  {
    title: "Building Design The Thought With AI",
    slug: "building-contentian",
    description: "A behind-the-scenes look at architecting an AI-powered modern technology publication.",
    category: "Build in Public",
    readTime: "8 min read",
    date: "Aug 14, 2026",
    featured: true,
    content: {
      introduction: "The platform started as a focused project: what if you could combine high-performance web publishing with structured AI tooling, comprehensive guides, and real-world experiments? This is the story of how that architecture came together.",
      whyITriedIt: "As someone who frequently experiments with AI, I noticed a gap between raw AI model interfaces and editorial content that is actually ready to publish. I wanted to build a publication that bridges that gap with practical analysis and hands-on workflows.",
      whatIBuiltTested: "I built the application using Next.js 16, React 19, Tailwind CSS, and the App Router. It features an integrated AI Hub directory, responsive editorial templates, and high-performance server components.",
      toolsUsed: ["Next.js 16", "Tailwind CSS", "TypeScript", "Claude", "ChatGPT"],
      whatHappened: "Building the core UI was fast thanks to modern React frameworks. The true challenge lay in creating a cohesive design system and an intuitive information architecture connecting technical articles with interactive AI guides.",
      whatWorked: "The combination of Next.js static page generation and clean TypeScript typing worked beautifully. The Tailwind-based design system also made the app feel premium and fast with instant dark/light theme switching.",
      whatDidnt: "Handling multi-category routing while ensuring clean canonical paths required careful architectural planning to avoid fragmenting the user experience between publication stories and hub guides.",
      lessonsLearned: "Building a modern web application isn't just about writing code; it's about the cohesive user experience. You have to keep navigation unified, provide clear visual hierarchy, and make learning intuitive.",
      whatsNext: "The next phase involves adding more in-depth technical teardowns, expanding the AI tool review directory, and benchmarking emerging frontier reasoning models."
    }
  },
  {
    title: "Can AI Create Useful Tech Content?",
    slug: "ai-content-experiment",
    description: "An experiment testing how well AI can turn ideas into platform-ready editorial content.",
    category: "Experiment",
    readTime: "6 min read",
    date: "Aug 10, 2026",
    featured: false,
    content: {
      introduction: "Everyone claims AI can replace editorial workflows, but I wanted to test this practically. I set out to see if AI could take a single, rough idea and turn it into high-quality technical content across different formats.",
      whyITriedIt: "Writing tailored content for different audiences is demanding. What works on Twitter (short, punchy threads) fails on technical blogs (longer, deep-dive posts). I wanted to see how well AI models understood these nuances.",
      whatIBuiltTested: "I created a baseline technical topic about 'The benefits of agentic AI workflows'. I then passed this idea through different AI models with explicit instructions to format it for three different formats, testing various tones and depth levels.",
      toolsUsed: ["ChatGPT", "Claude", "Cursor AI"],
      whatHappened: "The results were mixed but illuminating. When given vague instructions, the AI sounded exactly like a robot. But when constrained with specific character limits, stylistic rules (e.g., 'no hashtags', 'use single sentence paragraphs'), the output was surprisingly good.",
      whatWorked: "The AI excelled at Twitter threads. By asking it to break a concept into a 5-part thread with specific hooks, it delivered highly engaging content. It was also excellent at reformatting a long blog post into a concise LinkedIn update.",
      whatDidnt: "It struggled with Instagram captions, often relying too heavily on cliché emojis and generic 'motivational' speak. It also occasionally hallucinated statistics to make the posts sound more authoritative.",
      lessonsLearned: "AI is a brilliant drafter but a terrible final editor. You cannot copy-paste its output directly. The real power is in using AI to get past the blank page, generate the structure, and then spending 5 minutes injecting your own personality and verifying the claims.",
      whatsNext: "I plan to build more granular prompt templates that enforce specific writing frameworks (like AIDA or PAS) to see if that improves the initial output quality even further."
    }
  },
  {
    title: "My AI-Assisted Development Workflow",
    slug: "my-ai-workflow",
    description: "How AI can support planning, development, debugging and documentation while keeping humans in control.",
    category: "Workflow",
    readTime: "7 min read",
    date: "Aug 05, 2026",
    featured: false,
    content: {
      introduction: "Over the past few months, I've completely overhauled how I write code. This isn't about letting AI write entire applications for me; it's about using AI as an extremely fast junior developer that never sleeps.",
      whyITriedIt: "Development involves a lot of boilerplate, reading through documentation, and getting stuck on obscure error messages. I wanted to see if integrating AI deeply into my workflow could speed up the mundane parts of coding.",
      whatIBuiltTested: "I integrated AI into three phases: Planning (using LLMs to outline architecture), Development (using AI-first editors for autocomplete and scaffolding), and Debugging (pasting stack traces into chat interfaces).",
      toolsUsed: ["Cursor", "GitHub Copilot", "Claude 3.5 Sonnet"],
      whatHappened: "My development speed increased noticeably, particularly for tasks I was already familiar with. Instead of typing out a standard React component, I could just describe it and hit tab. However, for complex architectural decisions, the AI often suggested overly complicated or outdated patterns.",
      whatWorked: "AI is incredible for writing regex, generating TypeScript interfaces from JSON data, and explaining cryptic error messages. Using an editor like Cursor, where the AI can read your entire codebase for context, was a massive step up from copying and pasting into a browser window.",
      whatDidnt: "Relying on AI for major refactors often broke things. The AI sometimes hallucinated API methods for libraries that didn't exist or mixed up different versions of Next.js (App Router vs Pages Router).",
      lessonsLearned: "You must remain the architect. You have to know what you want to build and how it should be structured. Use AI to generate the bricks, but don't let it design the house. Always review the code it generates before committing.",
      whatsNext: "I'm experimenting with using AI to automatically generate unit tests for my components and write comprehensive documentation for my APIs."
    }
  },
  {
    title: "What I Learned Building With AI",
    slug: "lessons-building-with-ai",
    description: "Practical lessons about using AI for real projects, including what worked and what didn't.",
    category: "Lessons",
    readTime: "5 min read",
    date: "Jul 28, 2026",
    featured: true,
    content: {
      introduction: "After spending countless hours building AI-integrated projects and testing different models, I've accumulated a list of hard truths about what it's actually like to build software in the AI era.",
      whyITriedIt: "The hype cycle around AI makes it sound like you can just whisper an idea to a computer and become a millionaire. I wanted to document the reality of the friction, the bugs, and the genuine breakthroughs.",
      whatIBuiltTested: "Various prototypes, small SaaS tools, and content generation scripts integrating OpenAI, Anthropic, and open-source models.",
      toolsUsed: ["Various LLMs", "Vercel", "Next.js"],
      whatHappened: "I discovered that integrating an AI API takes 10 minutes, but making the AI output reliable takes weeks. The underlying models change, prompts degrade, and users will always find ways to break your assumptions.",
      whatWorked: "Structuring outputs using JSON. When I stopped asking the AI for plain text and started forcing it to return strict JSON schemas, my applications became infinitely more stable. I could actually parse the data and build UI around it.",
      whatDidnt: "Assuming the AI would handle edge cases. If a user uploads a completely blank image to a vision model, the model might hallucinate a scene rather than saying 'I see nothing'. You have to code defensive guardrails around the AI.",
      lessonsLearned: "1. Prompt engineering is just software engineering with natural language. 2. Always design for latency; AI is slow, so your UI must manage user expectations. 3. Don't build a thin wrapper around ChatGPT; add your own unique value, workflow, or data on top of it.",
      whatsNext: "Applying these lessons to stabilize my existing projects, focusing heavily on user experience and speed rather than just adding more AI features for the sake of it."
    }
  }
];
