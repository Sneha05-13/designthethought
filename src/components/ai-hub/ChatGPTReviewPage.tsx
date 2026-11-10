import Link from "next/link";
import Navbar from "@/components/ai-hub/AIHubNavbar";
import Footer from "@/components/ai-hub/AIHubFooter";
import { 
  ChevronRight, ChevronLeft, ExternalLink, Star, CheckCircle2, XCircle, 
  Info, PenTool, GraduationCap, Code, Search, BarChart3, Image as ImageIcon, 
  FileText, Mic, Folder, LayoutTemplate, Zap, AlertTriangle, 
  Lightbulb, BrainCircuit
} from "lucide-react";

export default function ChatGPTReviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ChatGPT",
            applicationCategory: "AI Assistant / Productivity"
          })
        }}
      />

      <main className="flex-1">
        {/* Navigation & Breadcrumb */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          <Link href="/ai-hub/tools" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8">
            <ChevronLeft className="w-4 h-4" /> Back to AI Tools
          </Link>
          
          <nav className="flex flex-wrap items-center text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-8">
            <Link href="/ai-hub" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              AI Hub
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <Link href="/ai-hub/tools" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Tools
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-400" />
            <span className="text-zinc-900 dark:text-white truncate">ChatGPT</span>
          </nav>

          {/* 1. HERO SECTION */}
          <div className="mb-12 border-b border-zinc-200/60 dark:border-white/10 pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10">
                    AI Assistant / Productivity / Writing / Coding
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                    OpenAI
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
                  ChatGPT
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mb-8 leading-relaxed">
                  An all-purpose AI assistant for writing, learning, research, coding, analysis, brainstorming, and more.
                </p>

                <div className="flex items-center gap-6 mb-8 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-400">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <span className="font-bold text-zinc-900 dark:text-white text-lg ml-1">4.8/5</span>
                  </div>
                  <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700 hidden sm:block"></div>
                  <div className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Pricing: Free + Paid Plans
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <a 
                    href="https://chatgpt.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/25 text-lg"
                  >
                    Visit ChatGPT <ExternalLink className="w-5 h-5" />
                  </a>
                  <Link 
                    href="/ai-hub/tools" 
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold transition-all text-lg"
                  >
                    Back to AI Tools
                  </Link>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> Capabilities and availability can vary by plan.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
            <div className="lg:col-span-2 space-y-12">
              
              {/* 3. WHAT IS CHATGPT? */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">What is ChatGPT?</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none text-lg">
                  <p>
                    ChatGPT is an AI assistant developed by OpenAI that can understand natural-language instructions and generate responses across many different tasks.
                  </p>
                  <p>
                    Instead of just answering simple questions, it acts as a versatile intelligence engine. You can use it for:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4 mb-6">
                    <li>Writing and drafting</li>
                    <li>Learning complex topics</li>
                    <li>Coding and debugging</li>
                    <li>Brainstorming ideas</li>
                    <li>Deep research</li>
                    <li>Data analysis</li>
                    <li>Image-related tasks</li>
                    <li>Working with files</li>
                    <li>Voice conversations</li>
                    <li>Organizing longer projects</li>
                  </ul>
                  <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-xl">
                    <p className="text-sm text-amber-900 dark:text-amber-200 m-0">
                      <strong>Important:</strong> ChatGPT does not &quot;know everything.&quot; AI-generated information can be incorrect or hallucinated. Important factual information should always be verified using reliable sources.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. WHAT CAN YOU DO WITH CHATGPT? */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">What can you do with ChatGPT?</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">Depending on your plan and availability, you can use these capabilities:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <PenTool className="w-5 h-5" />, title: "Writing", desc: "Draft emails, essays, articles, and creative stories.", useCase: "Drafting a polite client email." },
                    { icon: <GraduationCap className="w-5 h-5" />, title: "Learning", desc: "Understand complex topics broken down simply.", useCase: "Explaining quantum physics to a 10-year-old." },
                    { icon: <Code className="w-5 h-5" />, title: "Coding", desc: "Write, debug, and refactor code in dozens of languages.", useCase: "Finding a bug in a React component." },
                    { icon: <Search className="w-5 h-5" />, title: "Research", desc: "Search the web for current information and sources.", useCase: "Finding the latest statistics on EV sales." },
                    { icon: <BarChart3 className="w-5 h-5" />, title: "Data Analysis", desc: "Analyze spreadsheets and visualize trends.", useCase: "Finding the top selling product in a CSV." },
                    { icon: <ImageIcon className="w-5 h-5" />, title: "Images", desc: "Generate new images or analyze uploaded photos.", useCase: "Creating a logo concept for a bakery." },
                    { icon: <FileText className="w-5 h-5" />, title: "Files", desc: "Upload PDFs or documents for summarization.", useCase: "Summarizing a 50-page legal contract." },
                    { icon: <Mic className="w-5 h-5" />, title: "Voice", desc: "Have real-time spoken conversations.", useCase: "Practicing Spanish pronunciation hands-free." },
                    { icon: <Folder className="w-5 h-5" />, title: "Projects", desc: "Organize files and chats into a dedicated workspace.", useCase: "Keeping all branding materials in one place." },
                    { icon: <LayoutTemplate className="w-5 h-5" />, title: "Canvas", desc: "An interactive workspace for co-writing and coding.", useCase: "Editing a long article side-by-side." },
                    { icon: <BrainCircuit className="w-5 h-5" />, title: "Custom GPTs", desc: "Create specialized versions of ChatGPT.", useCase: "Building a custom math tutor." },
                    { icon: <Zap className="w-5 h-5" />, title: "Web Search", desc: "Directly fetch real-time data from the internet.", useCase: "Checking today's stock market news." },
                  ].map((feature, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl hover:border-indigo-500/50 transition-colors">
                      <div className="flex items-center gap-3 mb-2 text-indigo-600 dark:text-indigo-400">
                        {feature.icon}
                        <h3 className="font-bold text-zinc-900 dark:text-white">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{feature.desc}</p>
                      <div className="text-xs bg-zinc-50 dark:bg-zinc-800/50 p-2 rounded-lg text-zinc-700 dark:text-zinc-300">
                        <span className="font-semibold">Example:</span> {feature.useCase}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. CHATGPT FOR STUDENTS */}
              <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-800/30">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  ChatGPT for Students
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  ChatGPT is an incredible personalized tutor. Students can use it to explain difficult concepts, create study plans, generate practice questions, summarize notes, review writing, explain code, or brainstorm project ideas.
                </p>
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
                  <h4 className="font-bold text-sm text-zinc-500 uppercase tracking-wider mb-3">Example Study Workflow</h4>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-200 p-3 rounded-lg">
                      <span className="opacity-50 mr-2">You:</span> &quot;Explain recursion to a beginner.&quot;
                    </div>
                    <div className="bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 p-3 rounded-lg">
                      <span className="opacity-50 mr-2">You:</span> &quot;Give me a simple example.&quot;
                    </div>
                    <div className="bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 p-3 rounded-lg">
                      <span className="opacity-50 mr-2">You:</span> &quot;Now quiz me on it.&quot;
                    </div>
                    <div className="bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 p-3 rounded-lg">
                      <span className="opacity-50 mr-2">You:</span> &quot;Check my answer and give me a harder question.&quot;
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. CHATGPT FOR DEVELOPERS */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Code className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                  ChatGPT for Developers
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  ChatGPT is widely used by software engineers to explain code, debug errors, generate boilerplate, refactor code, write tests, explain APIs, learn new programming concepts, brainstorm architecture, and review code.
                </p>
                <div className="bg-zinc-900 text-green-400 p-5 rounded-2xl font-mono text-sm leading-relaxed mb-4 overflow-x-auto whitespace-nowrap">
                  Problem &rarr; Ask ChatGPT to explain &rarr; Generate possible solution &rarr; Test locally &rarr; Review output &rarr; Fix issues &rarr; Understand the final solution
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="text-sm text-amber-900 dark:text-amber-200 m-0">
                    <strong>Important:</strong> Use ChatGPT as a coding assistant, not as a replacement for understanding and testing your code.
                  </p>
                </div>
              </section>

              {/* 7. CHATGPT FOR CONTENT CREATORS */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <PenTool className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  ChatGPT for Content Creators
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Creators can brainstorm content ideas, generate captions, create blog outlines, write Pinterest descriptions, make social media variations, repurpose long-form content, edit drafts, and build content calendars.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                    <p className="text-xs text-zinc-500 font-bold uppercase mb-2">Input Prompt</p>
                    <p className="text-sm text-zinc-900 dark:text-zinc-200">&quot;Give me 5 Pinterest post ideas for a new productivity template.&quot;</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase mb-2">Output Example</p>
                    <ul className="text-sm text-purple-900 dark:text-purple-200 list-disc pl-4 space-y-1">
                      <li>&quot;How I organize my entire week in 10 minutes&quot;</li>
                      <li>&quot;The exact template I use to avoid burnout&quot;</li>
                      <li>&quot;3 productivity hacks for busy students&quot;</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl shadow-sm text-center">
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Design The Thought AI Hub curates focused tools and workflows for creators who want structured prompts without trial and error.
                  </p>
                  <Link href="/ai-hub/tools" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                    Explore Curated AI Tools <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </section>

              {/* 8. CHATGPT FOR RESEARCH */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">ChatGPT for Research</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Depending on availability, ChatGPT can help with research through web search and Deep Research features.
                </p>
                <ul className="space-y-4">
                  <li className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <strong className="text-zinc-900 dark:text-white">Normal Chat:</strong> Good for quick questions, brainstorming, and general knowledge.
                  </li>
                  <li className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <strong className="text-zinc-900 dark:text-white">Web Search:</strong> Finds current, up-to-date information directly from the web.
                  </li>
                  <li className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/50">
                    <strong className="text-indigo-900 dark:text-indigo-200">Deep Research:</strong> Designed for multi-step research, producing a highly structured report with citations and deep source analysis.
                  </li>
                </ul>
                <p className="text-sm text-zinc-500 mt-4 italic">
                  Note: Do not assume all ChatGPT plans have identical research capabilities; features like Deep Research may be restricted to specific tiers.
                </p>
              </section>

              {/* 9. CHATGPT FOR FILES & DATA */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Files & Data Analysis</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Users can upload supported files (PDFs, spreadsheets, documents) and use ChatGPT for summarization, extraction, question answering, spreadsheet analysis, data exploration, and creating charts/visualizations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 bg-zinc-50 dark:bg-zinc-800/50 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <div className="flex-1">
                    <strong className="block text-sm text-zinc-500 uppercase mb-1">Upload</strong>
                    <span className="inline-flex items-center gap-1.5 bg-white dark:bg-zinc-900 px-3 py-1.5 rounded text-sm font-medium border border-zinc-200 dark:border-zinc-700">
                      <FileText className="w-4 h-4 text-green-600" /> Q3_Sales.csv
                    </span>
                  </div>
                  <div className="flex-1">
                    <strong className="block text-sm text-zinc-500 uppercase mb-1">Ask</strong>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">&quot;Find the top 5 products by revenue and explain the trend.&quot;</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">
                  Results should always be reviewed carefully, especially when making important business or financial decisions based on data analysis.
                </p>
              </section>

              {/* MORE FEATURES (Projects, Canvas, Images, Custom GPTs, Voice) */}
              <section className="space-y-10">
                
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">ChatGPT Projects</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Projects act as a dedicated workspace where related chats, files, and custom instructions can stay grouped together for ongoing work. For example, a &quot;Build My Portfolio&quot; project could contain your resume, project notes, brand information, and specific instructions, keeping everything organized outside of the main chat history.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">ChatGPT Canvas</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Canvas provides an interactive, side-by-side workspace for co-writing, editing, and coding. Instead of regenerating a whole article in the chat UI, Canvas is more useful when you want to highlight a specific paragraph to rewrite, refine long-form drafts, or make targeted code improvements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">ChatGPT Images</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    At a high level, you can generate original images (like social media visuals, concept art, illustrations, or mockups) directly from text prompts, or upload photos for the AI to analyze and edit.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Custom GPTs</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    A Custom GPT is a customized version of ChatGPT designed around specific instructions, knowledge files, and capabilities. This is highly useful when you need a specialized assistant, such as a dedicated &quot;Study Assistant,&quot; a &quot;Resume Reviewer,&quot; or a &quot;Coding Tutor&quot; that always remembers its specific role.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">ChatGPT Voice</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    The mobile app supports real-time voice conversations. It is incredibly useful for brainstorming while walking, hands-free questions, conversational learning, or practicing a new language with a fluent AI.
                  </p>
                </div>

              </section>

              {/* 21. HOW TO GET STARTED & 22. HOW TO GET BETTER RESULTS */}
              <section className="bg-zinc-900 text-white p-8 rounded-3xl mt-12 shadow-2xl">
                <h2 className="text-3xl font-bold mb-6">How to get started</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-400 mb-4">5 Simple Steps</h3>
                    <ol className="space-y-3 text-zinc-300 font-medium">
                      <li className="flex gap-3"><span className="text-indigo-500">1.</span> Create an account</li>
                      <li className="flex gap-3"><span className="text-indigo-500">2.</span> Open ChatGPT</li>
                      <li className="flex gap-3"><span className="text-indigo-500">3.</span> Describe your goal</li>
                      <li className="flex gap-3"><span className="text-indigo-500">4.</span> Give useful context</li>
                      <li className="flex gap-3"><span className="text-indigo-500">5.</span> Review and refine the response</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-400 mb-4">How to get better results</h3>
                    <p className="text-zinc-400 text-sm mb-4">Provide context, explain your goal, specify the audience, give constraints, provide examples, and ask for a specific format.</p>
                    <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
                      <p className="text-xs text-red-400 uppercase font-bold mb-1">Instead of this:</p>
                      <p className="text-sm text-zinc-300 mb-4">&quot;Write a blog.&quot;</p>
                      <p className="text-xs text-green-400 uppercase font-bold mb-1">Use this:</p>
                      <p className="text-sm text-zinc-300">&quot;I&apos;m writing a beginner-friendly article about AI agents. Create a clear outline with 6 sections and explain each section in simple language.&quot;</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
                  <Link href="/ai-hub/basics/what-is-prompt-engineering" className="text-indigo-400 hover:text-indigo-300 font-bold inline-flex items-center">
                    Learn more about Prompt Engineering <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </section>

              {/* 24. CHATGPT VS OTHER AI TOOLS */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">ChatGPT vs Other AI Tools</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  ChatGPT is often compared to tools like Claude, Gemini, and Perplexity. Which one is best heavily depends on your specific workflow.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800">
                        <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Dimension</th>
                        <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">What to consider</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">General-purpose use</td>
                        <td className="p-3 border border-zinc-200 dark:border-zinc-700">ChatGPT is incredibly versatile across most daily tasks.</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Writing & Long-form</td>
                        <td className="p-3 border border-zinc-200 dark:border-zinc-700">Some users prefer Claude&apos;s nuanced tone for creative writing.</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Research & Web Info</td>
                        <td className="p-3 border border-zinc-200 dark:border-zinc-700">Perplexity excels at direct search, while ChatGPT offers deep research capabilities.</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Ecosystem Integration</td>
                        <td className="p-3 border border-zinc-200 dark:border-zinc-700">Gemini integrates deeply with Google Workspace docs and emails.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 25. USE CASE EXAMPLES */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">What can I actually do?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { task: "Build a study plan", prompt: "Create a 4-week study plan for beginner Python." },
                    { task: "Debug code", prompt: "Why is this React component throwing a hook error?" },
                    { task: "Analyze CSV data", prompt: "Find the top 3 selling products in this CSV." },
                    { task: "Draft a blog", prompt: "Write an introduction for a blog about remote work." },
                    { task: "Brainstorm a business idea", prompt: "Give me 5 niche ideas for an online bakery." },
                    { task: "Prepare interview questions", prompt: "I'm interviewing for a junior frontend role. Quiz me." },
                  ].map((uc, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{uc.task}</h4>
                      <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded mb-0">
                        &quot;{uc.prompt}&quot;
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 26. LIMITATIONS */}
              <section className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-2xl my-8">
                <h2 className="text-xl font-bold text-red-900 dark:text-red-400 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Limitations & Responsible Use
                </h2>
                <p className="text-red-800 dark:text-red-300 text-sm mb-4">
                  AI output must always be reviewed. Users should exercise appropriate professional judgment and verify important information, especially for:
                </p>
                <ul className="text-sm text-red-800 dark:text-red-300 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-0">
                  <li>• Medical information</li>
                  <li>• Legal information</li>
                  <li>• Financial decisions</li>
                  <li>• Academic integrity</li>
                  <li>• Sensitive business data</li>
                </ul>
              </section>

              {/* 27. FAQ */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "What is ChatGPT?", a: "An AI assistant developed by OpenAI that processes natural language to help with writing, coding, research, and analysis." },
                    { q: "Is ChatGPT free?", a: "Yes, it offers a capable free tier, alongside paid plans that provide higher usage limits and access to more advanced models or features." },
                    { q: "Can ChatGPT write code?", a: "Yes, it is widely used by developers to write, debug, and explain code across many programming languages." },
                    { q: "Can ChatGPT analyze files?", a: "Yes, users can upload documents and spreadsheets for the AI to summarize, extract data from, or analyze." },
                    { q: "Can ChatGPT generate images?", a: "Yes, using integrated models like DALL-E, it can generate original images from text descriptions." },
                    { q: "Can ChatGPT search the web?", a: "Yes, it can search the internet for current information, depending on the model and plan." },
                    { q: "What is Deep Research?", a: "A feature designed for multi-step research that produces structured, detailed reports with citations." },
                    { q: "What are ChatGPT Projects?", a: "A workspace to group related chats, files, and custom instructions together for a specific ongoing task." },
                    { q: "What is Canvas?", a: "An interactive, side-by-side interface for co-writing and coding without disrupting the main chat flow." },
                    { q: "What are Custom GPTs?", a: "Customized versions of ChatGPT built by users for specific tasks, like a dedicated math tutor or resume reviewer." },
                    { q: "Is ChatGPT always accurate?", a: "No. It can confidently generate incorrect information (hallucinations), so facts must always be verified." },
                    { q: "Can ChatGPT replace a human?", a: "No. It is an assistant designed to enhance productivity, not a replacement for human reasoning, expertise, and judgment." },
                  ].map((faq, i) => (
                    <div key={i}>
                      <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{faq.q}</h3>
                      <p className="mt-2 text-zinc-700 dark:text-zinc-300">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 30. SOURCES */}
              <section className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-12">
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-4">Sources & Further Reading</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://openai.com/chatgpt/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center">OpenAI: ChatGPT Overview <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center">OpenAI: Release Notes & Capabilities <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://openai.com/index/introducing-canvas/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center">OpenAI: Introducing Canvas <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                </ul>
              </section>

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* 2. QUICK VERDICT */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-indigo-500/5">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-500" /> Quick Verdict
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                  ChatGPT is one of the most versatile AI tools for beginners because you can use it for everything from learning and writing to coding, research and analysis.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Best for:</h4>
                  <ul className="space-y-2">
                    {["Students", "Developers", "Writers", "Creators", "Researchers", "Professionals"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Not ideal for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Blindly trusting factual answers
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> High-risk decisions without verification
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Tasks requiring guaranteed accuracy
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2">Design The Thought Verdict</div>
                  <div className="flex text-amber-400 mb-1">
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <p className="text-xs text-zinc-500 italic">This is Design The Thought&apos;s editorial assessment, not an official OpenAI rating.</p>
                </div>
              </div>

              {/* 15. EDITORIAL TAKE */}
              <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-800/30">
                <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-200 mb-4">Design The Thought Take</h3>
                <div className="space-y-4 text-sm text-indigo-800 dark:text-indigo-300">
                  <div>
                    <strong className="block mb-1">What stands out:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Incredible versatility</li>
                      <li>Highly beginner-friendly interaction</li>
                      <li>Vast range of use cases</li>
                      <li>Useful ecosystem integrations</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block mb-1">What to keep in mind:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Responses can be wrong</li>
                      <li>Features vary heavily by plan</li>
                      <li>Quality depends heavily on instructions</li>
                      <li>Information must be verified</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PROS & CONS */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <div className="mb-6">
                  <h3 className="font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Pros
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>+ Extremely versatile</li>
                    <li>+ Beginner-friendly</li>
                    <li>+ Useful for learning</li>
                    <li>+ Strong writing assistance</li>
                    <li>+ Useful for coding</li>
                    <li>+ Multiple input types</li>
                    <li>+ Broad capability ecosystem</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Cons
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>- Can generate incorrect info</li>
                    <li>- Feature availability varies</li>
                    <li>- Risk of over-reliance</li>
                    <li>- Depends entirely on instructions</li>
                    <li>- Not a substitute for experts</li>
                    <li>- Limits on advanced features</li>
                  </ul>
                </div>
              </div>

              {/* 20. PRICING */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Pricing Overview</h3>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-900 dark:text-white">Free Plan</span>
                    <span className="text-zinc-500">Available</span>
                  </li>
                  <li className="flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-900 dark:text-white">Paid Plans (Plus)</span>
                    <span className="text-zinc-500">Available</span>
                  </li>
                  <li className="flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-900 dark:text-white">Business / Org</span>
                    <span className="text-zinc-500">Available</span>
                  </li>
                </ul>
                <p className="text-xs text-zinc-500 mb-4">
                  Plans, pricing, limits, and included features can change. Check the official ChatGPT pricing page for the latest details.
                </p>
                <a href="https://openai.com/chatgpt/pricing" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 text-center rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-sm font-bold transition-colors">
                  View Current Pricing
                </a>
              </div>
              
              {/* 23. CHATGPT FOR BEGINNERS */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-3xl border border-purple-100 dark:border-purple-800/30">
                <h3 className="font-bold text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-purple-500" /> Start Here (Beginners)
                </h3>
                <p className="text-xs text-purple-800 dark:text-purple-300 mb-4 italic">
                  Don&apos;t try to learn every feature at once. Start with these 5 tasks:
                </p>
                <ol className="text-sm space-y-2 text-purple-900 dark:text-purple-200 list-decimal pl-4">
                  <li>Ask it to explain a concept.</li>
                  <li>Summarize your notes.</li>
                  <li>Brainstorm creative ideas.</li>
                  <li>Improve a piece of writing.</li>
                  <li>Debug a simple problem.</li>
                </ol>
              </div>

              {/* 28. FINAL VERDICT */}
              <div className="bg-zinc-900 text-white p-6 rounded-3xl border border-zinc-800 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-center">Is ChatGPT Worth Using?</h3>
                <p className="text-zinc-300 text-sm text-center mb-6">
                  <strong>Yes</strong> — especially if you want one flexible AI assistant that can help across learning, writing, coding, research, analysis and creative work.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Best for</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Ease of use</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Versatility</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Learning</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 29. RELATED CONTENT */}
          <div className="border-t border-zinc-200 dark:border-white/10 pt-12 pb-16">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Learn More</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/ai-hub/basics/what-are-large-language-models" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">What Are LLMs?</h4>
                <p className="text-sm text-zinc-500 mt-1">Understand the technology behind ChatGPT.</p>
              </Link>
              <Link href="/ai-hub/basics/what-is-prompt-engineering" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Prompt Engineering</h4>
                <p className="text-sm text-zinc-500 mt-1">Learn how to communicate with AI effectively.</p>
              </Link>
              <Link href="/ai-hub/basics/what-is-generative-ai" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Generative AI</h4>
                <p className="text-sm text-zinc-500 mt-1">Explore the broader landscape of AI generation.</p>
              </Link>
              <Link href="/ai-hub/basics/what-are-ai-agents" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">What Are AI Agents?</h4>
                <p className="text-sm text-zinc-500 mt-1">Learn how models use tools and autonomy.</p>
              </Link>
              <Link href="/ai-hub/basics/what-is-rag" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">What Is RAG?</h4>
                <p className="text-sm text-zinc-500 mt-1">How AI retrieves external data.</p>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
