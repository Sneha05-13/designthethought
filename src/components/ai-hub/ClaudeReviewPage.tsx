import Link from "next/link";
import Navbar from "@/components/ai-hub/AIHubNavbar";
import Footer from "@/components/ai-hub/AIHubFooter";
import { 
  ChevronRight, ChevronLeft, ExternalLink, Star, CheckCircle2, XCircle, 
  Info, PenTool, GraduationCap, Code, Search, BarChart3, Image as ImageIcon, 
  FileText, Folder, Zap, AlertTriangle, Lightbulb, Box
} from "lucide-react";

export default function ClaudeReviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Claude",
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
            <span className="text-zinc-900 dark:text-white truncate">Claude</span>
          </nav>

          {/* 1. HERO SECTION */}
          <div className="mb-12 border-b border-zinc-200/60 dark:border-white/10 pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10">
                    AI Assistant / Writing / Coding / Research
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                    Anthropic
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
                  Claude
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mb-8 leading-relaxed">
                  Anthropic&apos;s AI assistant for writing, analysis, coding, research and complex knowledge work.
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
                    <span className="font-bold text-zinc-900 dark:text-white text-lg ml-1">4.7/5</span>
                  </div>
                  <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700 hidden sm:block"></div>
                  <div className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Pricing: Free + Paid Plans
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <a 
                    href="https://claude.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/25 text-lg"
                  >
                    Visit Claude <ExternalLink className="w-5 h-5" />
                  </a>
                  <Link 
                    href="/ai-hub/tools" 
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold transition-all text-lg"
                  >
                    Back to AI Tools
                  </Link>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> Features and availability may vary by plan.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
            <div className="lg:col-span-2 space-y-12">
              
              {/* WHAT IS CLAUDE? */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">What is Claude?</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none text-lg">
                  <p>
                    Claude is an AI assistant developed by Anthropic. It is designed to process and generate human-like text, understand complex instructions, and act as a reliable partner for detailed knowledge work.
                  </p>
                  <p>
                    It can help users:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4 mb-6">
                    <li>Write nuanced and creative content</li>
                    <li>Analyze complex arguments</li>
                    <li>Learn challenging subjects</li>
                    <li>Code and review logic</li>
                    <li>Research large amounts of data</li>
                    <li>Work with lengthy documents</li>
                    <li>Brainstorm ideas</li>
                    <li>Create structured, formatted outputs</li>
                  </ul>
                  <p>
                    Claude is known for having a &quot;large context window,&quot; meaning you can upload massive PDFs or entire books and ask detailed questions about them without the AI forgetting the beginning of the text.
                  </p>
                </div>
              </section>

              {/* WHAT CAN CLAUDE DO? */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">What can Claude do?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <PenTool className="w-5 h-5" />, title: "Writing", desc: "Draft highly nuanced essays, emails, and articles.", useCase: "Rewriting an introduction." },
                    { icon: <Code className="w-5 h-5" />, title: "Coding", desc: "Generate, explain, and refactor complex code logic.", useCase: "Debugging a Python script." },
                    { icon: <Search className="w-5 h-5" />, title: "Research", desc: "Synthesize information from long sources.", useCase: "Comparing three research papers." },
                    { icon: <FileText className="w-5 h-5" />, title: "Document Analysis", desc: "Upload and analyze massive PDFs easily.", useCase: "Summarizing a 100-page report." },
                    { icon: <ImageIcon className="w-5 h-5" />, title: "Image Understanding", desc: "Upload images for analysis and transcription.", useCase: "Extracting data from a chart." },
                    { icon: <Folder className="w-5 h-5" />, title: "Projects", desc: "Create focused workspaces with system instructions.", useCase: "Keeping branding guidelines handy." },
                    { icon: <Box className="w-5 h-5" />, title: "Artifacts", desc: "A dedicated panel to view, edit, and interact with code/docs.", useCase: "Previewing a React component." },
                    { icon: <Lightbulb className="w-5 h-5" />, title: "Brainstorming", desc: "Ideate solutions and new perspectives.", useCase: "Listing 10 marketing angles." },
                    { icon: <GraduationCap className="w-5 h-5" />, title: "Learning", desc: "Break down and explain difficult academic topics.", useCase: "Understanding machine learning." },
                    { icon: <BarChart3 className="w-5 h-5" />, title: "Data/Analysis", desc: "Work with spreadsheets and structured JSON/CSV data.", useCase: "Finding trends in raw sales data." },
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

              {/* CLAUDE FOR WRITING */}
              <section className="bg-indigo-50/50 dark:bg-indigo-900/10 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800/30">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <PenTool className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                  Claude for Writing
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Claude is widely praised for its natural, nuanced writing style. Users leverage it for articles, essays, editing, rewriting, brainstorming, long-form content, tone adjustment, and outlining.
                </p>
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <p className="text-xs text-zinc-500 font-bold uppercase mb-2">Example Workflow</p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200 mb-4">&quot;Rewrite this article introduction for beginners.&quot;</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400">
                    <span className="bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 rounded border border-indigo-100 dark:border-indigo-500/20">Draft</span>
                    <span>&rarr;</span>
                    <span className="bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 rounded border border-indigo-100 dark:border-indigo-500/20">Claude reviews</span>
                    <span>&rarr;</span>
                    <span className="bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 rounded border border-indigo-100 dark:border-indigo-500/20">Suggestions</span>
                    <span>&rarr;</span>
                    <span className="bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 rounded border border-indigo-100 dark:border-indigo-500/20">Revision</span>
                    <span>&rarr;</span>
                    <span className="bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 rounded border border-indigo-100 dark:border-indigo-500/20">Final draft</span>
                  </div>
                </div>
              </section>

              {/* CLAUDE FOR CODING */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Code className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  Claude for Coding
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Claude is exceptionally strong at coding tasks. It excels at debugging, code explanation, refactoring, test generation, architecture brainstorming, learning programming, reviewing existing code, and working with larger codebases.
                </p>
                <div className="bg-zinc-900 text-emerald-400 p-5 rounded-2xl font-mono text-sm mb-4">
                  <span className="opacity-50 mr-2">Input:</span> &quot;Explain why this React component is re-rendering unexpectedly and suggest a clean fix.&quot;
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="text-sm text-amber-900 dark:text-amber-200 m-0">
                    <strong>Important:</strong> Always test generated code yourself. AI can write logically sound code that occasionally misses edge cases or imports incorrect libraries.
                  </p>
                </div>
              </section>

              {/* CLAUDE FOR RESEARCH */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Search className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  Claude for Research
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Because of its massive context window, Claude can help with extensive research planning, summarization, comparing complex information across multiple documents, synthesizing research, creating structured reports, and (where available) executing web research.
                </p>
                <p className="text-sm text-zinc-500 italic">
                  Note: Do NOT claim every plan has identical research features. Web connectivity and message limits vary heavily by tier.
                </p>
              </section>

              {/* DOCUMENTS & ANALYSIS */}
              <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <FileText className="w-7 h-7 text-orange-500" />
                  Documents & Analysis
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  You can upload various files and ask Claude to read and analyze them in seconds. Supported workflows include processing reports, notes, research papers, business documents, code files, and even extracting data from charts (images).
                </p>
                <div className="flex flex-col sm:flex-row gap-4 bg-zinc-50 dark:bg-zinc-800/50 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700">
                  <div className="flex-1">
                    <strong className="block text-sm text-zinc-500 uppercase mb-1">Upload</strong>
                    <span className="inline-flex items-center gap-1.5 bg-white dark:bg-zinc-900 px-3 py-1.5 rounded text-sm font-medium border border-zinc-200 dark:border-zinc-700">
                      <FileText className="w-4 h-4 text-red-500" /> Medical_Study_2026.pdf (120 pages)
                    </span>
                  </div>
                  <div className="flex-1">
                    <strong className="block text-sm text-zinc-500 uppercase mb-1">Ask</strong>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">&quot;Summarize the key arguments and list the most important conclusions drawn by the authors.&quot;</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-4">
                  *Supported file types and overall size/token limits may vary depending on your specific Claude plan.
                </p>
              </section>

              {/* PROJECTS AND ARTIFACTS */}
              <section className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Folder className="w-6 h-6 text-indigo-500" /> Claude Projects
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Projects act as a dedicated workspace for keeping related conversations, files, and custom system instructions organized. 
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    For example, you could create a &quot;Build My Portfolio&quot; project containing your resume, project requirements, past notes, and custom formatting instructions. This allows Claude to instantly reference all these materials in every new chat within that Project, which is incredibly useful for ongoing work.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Box className="w-6 h-6 text-purple-500" /> Claude Artifacts
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Artifacts are a way to create and work with substantial outputs in a dedicated interactive space alongside your chat.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    When you ask Claude to write a complex document, generate React code, build interactive content, or create visual SVGs, it can open a separate Artifact panel. This allows you to view, copy, or interact with the output without having to scroll through long blocks of text in the chat feed. (Availability and specific Artifact features can change over time).
                  </p>
                </div>
              </section>

              {/* CLAUDE FOR STUDENTS & CREATORS */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-500" /> For Students
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    Claude can explain tough concepts, summarize notes, create quizzes, build study plans, review academic writing, and brainstorm project ideas.
                  </p>
                  <div className="bg-white dark:bg-zinc-900 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-700 dark:text-zinc-300 text-center">
                    Learn &rarr; Ask questions &rarr; Practice &rarr; Get feedback &rarr; Review
                  </div>
                </div>

                <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-pink-500" /> For Creators
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    Brainstorm content ideas, generate blog outlines, write newsletters, edit drafts, and repurpose long-form videos into written posts.
                  </p>
                  <p className="text-xs text-zinc-500 italic">
                    The Design Tech AI Hub curates focused tools and workflows for creators looking to combine AI drafting with structured editorial standards. <Link href="/ai-hub/tools" className="text-indigo-600 dark:text-indigo-400 hover:underline">Explore Curated AI Tools.</Link>
                  </p>
                </div>
              </section>

              {/* HOW TO GET STARTED & GET BETTER RESULTS */}
              <section className="bg-zinc-900 text-white p-8 rounded-3xl mt-12 shadow-2xl">
                <h2 className="text-3xl font-bold mb-6">How to get started</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-400 mb-4">The Workflow</h3>
                    <ol className="space-y-3 text-zinc-300 font-medium text-sm">
                      <li className="flex gap-3"><span className="text-indigo-500">1.</span> Create an account on Claude.ai</li>
                      <li className="flex gap-3"><span className="text-indigo-500">2.</span> Define your goal clearly</li>
                      <li className="flex gap-3"><span className="text-indigo-500">3.</span> Give Claude context</li>
                      <li className="flex gap-3"><span className="text-indigo-500">4.</span> Provide useful files/examples if needed</li>
                      <li className="flex gap-3"><span className="text-indigo-500">5.</span> Review the output</li>
                      <li className="flex gap-3"><span className="text-indigo-500">6.</span> Iterate with follow-up prompts</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-400 mb-4">How to get better results</h3>
                    <ul className="text-zinc-400 text-sm mb-4 space-y-1 list-disc pl-4">
                      <li>Give detailed context</li>
                      <li>Define the target audience</li>
                      <li>Specify the output format</li>
                      <li>Give concrete examples</li>
                      <li>Set constraints (e.g., word limits)</li>
                      <li>Break complex tasks into stages</li>
                      <li>Ask for revisions</li>
                    </ul>
                    <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700 mt-4">
                      <p className="text-xs text-green-400 uppercase font-bold mb-1">Example Prompt:</p>
                      <p className="text-sm text-zinc-300 font-mono">&quot;I&apos;m learning React. Explain useEffect to me as a beginner, then give me one simple example and quiz me with three questions.&quot;</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
                  <Link href="/ai-hub/basics/what-is-prompt-engineering" className="text-indigo-400 hover:text-indigo-300 font-bold inline-flex items-center">
                    Learn more about Prompt Engineering <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </section>

              {/* CLAUDE VS CHATGPT VS GEMINI */}
              <section className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Claude vs ChatGPT</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Dimension</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Neutral Comparison</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Writing</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Claude often produces more natural, less robotic text out-of-the-box.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">General-purpose use</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">ChatGPT has broader integrations (like DALL-E imaging) baked in.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Coding & Projects</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Both are excellent; Claude&apos;s Artifacts provide a unique way to view code.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Documents</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Claude&apos;s massive context window makes it highly reliable for analyzing long PDFs.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Claude vs Gemini</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Dimension</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Neutral Comparison</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Google ecosystem</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Gemini natively integrates with Google Docs, Drive, and Gmail.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Multimodal capabilities</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Gemini is built from the ground up for video and image reasoning.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">General productivity</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Claude is often preferred for deep, uninterrupted text and coding analysis.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* REAL USE CASES */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Real Use Cases</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { task: "Write an article", prompt: "Draft a 1000-word article on climate change using a hopeful tone." },
                    { task: "Review a document", prompt: "Check this contract for any hidden non-compete clauses." },
                    { task: "Debug code", prompt: "Find the memory leak in this Python script." },
                    { task: "Understand a research paper", prompt: "Explain the methodology of this attached biology paper simply." },
                    { task: "Create study notes", prompt: "Turn my raw lecture transcript into bulleted study notes." },
                    { task: "Plan a project", prompt: "Outline a 3-month launch plan for a new mobile app." },
                    { task: "Analyze requirements", prompt: "Extract the core technical requirements from this brief." },
                    { task: "Brainstorm content", prompt: "Give me 10 YouTube video ideas for a cooking channel." },
                    { task: "Rewrite a draft", prompt: "Make this email sound much more professional and polite." },
                    { task: "Explain technical concepts", prompt: "Explain Docker containers as if I'm a chef." }
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

              {/* LIMITATIONS */}
              <section className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-2xl my-8">
                <h2 className="text-xl font-bold text-red-900 dark:text-red-400 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Limitations & Responsible Use
                </h2>
                <p className="text-red-800 dark:text-red-300 text-sm mb-4">
                  Claude, like all LLMs, is subject to hallucinations and can confidently state incorrect information. Users must be mindful of:
                </p>
                <ul className="text-sm text-red-800 dark:text-red-300 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-0 list-disc pl-4">
                  <li>Privacy considerations regarding sensitive data</li>
                  <li>Over-reliance on AI for decision-making</li>
                  <li>The absolute necessity of manual verification</li>
                </ul>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "What is Claude?", a: "An AI assistant built by Anthropic designed for secure, nuanced, and complex knowledge work." },
                    { q: "Is Claude free?", a: "Claude offers a free tier, alongside paid subscriptions for higher usage limits and access to more powerful models." },
                    { q: "What can Claude do?", a: "It can write essays, debug code, summarize long PDFs, brainstorm ideas, and analyze data." },
                    { q: "Is Claude good for coding?", a: "Yes, it is widely considered one of the best AI assistants for writing, explaining, and refactoring code." },
                    { q: "Is Claude good for writing?", a: "Yes, many users prefer its natural, human-like tone compared to other AI models." },
                    { q: "Can Claude analyze documents?", a: "Yes, it has a very large context window, allowing users to upload and query massive documents." },
                    { q: "What are Claude Projects?", a: "A paid feature that lets you organize related chats, files, and system instructions into dedicated workspaces." },
                    { q: "What are Claude Artifacts?", a: "A UI feature that renders code, documents, or SVGs in a separate side-panel for easy interactive editing." },
                    { q: "Is Claude better than ChatGPT?", a: "Neither is universally better. Claude is often preferred for long-form writing and coding, while ChatGPT has a broader ecosystem of features." },
                    { q: "Is Claude good for students?", a: "Absolutely. It acts as an excellent tutor for breaking down complex academic topics." },
                    { q: "Can Claude browse the web?", a: "Depending on the model and platform version, some web search capabilities exist, but they are not always enabled by default." },
                    { q: "Is Claude always accurate?", a: "No. All AI models can hallucinate. Important factual information must always be verified independently." }
                  ].map((faq, i) => (
                    <div key={i}>
                      <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{faq.q}</h3>
                      <p className="mt-2 text-zinc-700 dark:text-zinc-300">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SOURCES */}
              <section className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-12">
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-4">Sources & Further Reading</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center">Anthropic: Introducing Claude <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://support.anthropic.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center">Anthropic Help Center & Capabilities <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                </ul>
              </section>

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* QUICK VERDICT */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-indigo-500/5">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-500" /> Quick Verdict
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                  Claude is especially compelling for users who work with long-form writing, complex documents, coding and detailed knowledge work.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Best for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Writers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Developers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Researchers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Students</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Professionals</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> People working with long documents</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Not ideal for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Blindly trusting generated information</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> High-stakes decisions without verification</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Tasks requiring guaranteed accuracy</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2">The Design Tech Editorial Score</div>
                  <div className="flex text-amber-400 mb-1">
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-zinc-500 italic">This is The Design Tech&apos;s editorial assessment, NOT an official Anthropic rating.</p>
                </div>
              </div>

              {/* EDITORIAL TAKE */}
              <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-800/30">
                <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-200 mb-4">The Design Tech Take</h3>
                <div className="space-y-4 text-sm text-indigo-800 dark:text-indigo-300">
                  <div>
                    <strong className="block mb-1">What stands out:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Strong writing</li>
                      <li>Useful for complex tasks</li>
                      <li>Good document workflows</li>
                      <li>Strong coding assistance</li>
                      <li>Organized project workflows</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block mb-1">Keep in mind:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>AI can be incorrect</li>
                      <li>Output should be reviewed</li>
                      <li>Feature availability varies</li>
                      <li>More detailed output does not automatically mean more accurate output</li>
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
                    <li>+ Strong writing capabilities</li>
                    <li>+ Useful for complex tasks</li>
                    <li>+ Coding assistance</li>
                    <li>+ Document analysis</li>
                    <li>+ Useful project organization</li>
                    <li>+ Good for learning and brainstorming</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Cons
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>- Can produce incorrect information</li>
                    <li>- Feature availability varies</li>
                    <li>- Usage limits may apply</li>
                    <li>- Users should verify important info</li>
                    <li>- Advanced workflows require testing</li>
                  </ul>
                </div>
              </div>

              {/* PRICING */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Pricing Overview</h3>
                <ul className="space-y-3 mb-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-center justify-between">
                    <span className="font-medium text-zinc-900 dark:text-white">Free Plan</span>
                    <span className="text-zinc-500">Available</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium text-zinc-900 dark:text-white">Paid Individual Plans</span>
                    <span className="text-zinc-500">Available</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium text-zinc-900 dark:text-white">Team / Organization</span>
                    <span className="text-zinc-500">Available</span>
                  </li>
                </ul>
                <p className="text-xs text-zinc-500 mb-4">
                  Plans, limits and included features can change. Check Anthropic&apos;s official pricing page for current information.
                </p>
                <a href="https://anthropic.com/pricing" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 text-center rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-sm font-bold transition-colors">
                  View Current Pricing
                </a>
              </div>

              {/* FINAL VERDICT */}
              <div className="bg-zinc-900 text-white p-6 rounded-3xl border border-zinc-800 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-center">Is Claude Worth Using?</h3>
                <p className="text-zinc-300 text-sm text-center mb-6">
                  Claude is a strong choice for users who value thoughtful writing, complex analysis, coding assistance and working with substantial amounts of information.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Writing</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Coding</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Learning</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Research</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Ease of Use</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4"/></div>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-4 text-center italic">These are The Design Tech editorial scores.</p>
              </div>

            </div>
          </div>

          {/* RELATED CONTENT */}
          <div className="border-t border-zinc-200 dark:border-white/10 pt-12 pb-16">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Learn More</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/ai-hub/basics/what-are-large-language-models" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">What Are LLMs?</h4>
                <p className="text-sm text-zinc-500 mt-1">Understand the technology behind Claude.</p>
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
