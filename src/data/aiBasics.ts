export interface AIBasicTopic {
  title: string;
  description: string;
  slug: string;
  readTime: string;
  iconName: string;
}

export const aiBasics: AIBasicTopic[] = [
  {
    title: "What Is Artificial Intelligence? A Beginner-Friendly Guide",
    description: "Learn what artificial intelligence is, how AI works, machine learning, deep learning, real-world applications, limitations, and how beginners can start learning AI.",
    slug: "what-is-artificial-intelligence",
    readTime: "12 min read",
    iconName: "brain"
  },
  {
    title: "What Is Generative AI? A Beginner-Friendly Guide",
    description: "Learn what Generative AI is, how it works, what it can create, real-world uses, prompting basics, limitations, and how beginners can start using it.",
    slug: "what-is-generative-ai",
    readTime: "12 min read",
    iconName: "wand"
  },
  {
    title: "What Are Large Language Models (LLMs)? A Beginner's Guide",
    description: "Learn what Large Language Models (LLMs) are, how they work, tokens, transformers, context windows, AI hallucinations, real-world uses, and how beginners can start learning LLMs.",
    slug: "what-are-large-language-models",
    readTime: "12 min read",
    iconName: "message"
  },
  {
    title: "What Is Prompt Engineering? A Practical Beginner's Guide",
    description: "Learn what prompt engineering is, how to write better AI prompts, prompting techniques, examples, templates, common mistakes, and practical tips for beginners.",
    slug: "what-is-prompt-engineering",
    readTime: "14 min read",
    iconName: "pen"
  },
  {
    title: "What Is AI Vision? A Beginner-Friendly Guide to Computer Vision",
    description: "Learn what AI Vision and computer vision are, how AI understands images, real-world applications, limitations, and how beginners can start learning.",
    slug: "what-is-ai-vision",
    readTime: "8 min read",
    iconName: "eye"
  },
  {
    title: "What Is AI Automation? A Beginner-Friendly Guide",
    description: "Learn what AI automation is, how it works, real-world examples, benefits, limitations, and how beginners can start using AI automation.",
    slug: "what-is-ai-automation",
    readTime: "8 min read",
    iconName: "zap"
  },
  {
    title: "What Is RAG (Retrieval-Augmented Generation)? A Beginner-Friendly Guide",
    description: "Learn what RAG is, how Retrieval-Augmented Generation works, embeddings, vector databases, retrieval, grounding, RAG vs fine-tuning, use cases, and how to build a simple RAG system.",
    slug: "what-is-rag",
    readTime: "15 min read",
    iconName: "database"
  },
  {
    title: "What Are AI Agents? A Beginner-Friendly Guide",
    description: "Learn what AI agents are, how they work, agent loops, tools, memory, RAG, real-world examples, limitations, and how beginners can build an AI agent.",
    slug: "what-are-ai-agents",
    readTime: "15 min read",
    iconName: "bot"
  }
];
