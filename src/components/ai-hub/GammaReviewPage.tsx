import Link from "next/link";
import Navbar from "@/components/ai-hub/AIHubNavbar";
import Footer from "@/components/ai-hub/AIHubFooter";
import { 
  ChevronRight, ChevronLeft, ExternalLink, Star, CheckCircle2, XCircle, 
  Info, Zap, AlertTriangle, Layers, MessageSquare, BookOpen, 
  LibraryBig, Layout, Image as ImageIcon, FileText, Globe, PenTool,
  UploadCloud, Palette, MonitorPlay, FileOutput, Lightbulb
} from "lucide-react";

export default function GammaReviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Gamma",
            applicationCategory: "AI Presentation / Visual Content Creation"
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
            <span className="text-zinc-900 dark:text-white truncate">Gamma</span>
          </nav>

          {/* HERO SECTION */}
          <div className="mb-12 border-b border-zinc-200/60 dark:border-white/10 pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-fuchsia-200 dark:border-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-300 bg-fuchsia-50 dark:bg-fuchsia-500/10">
                    AI Design / Presentations / Visual Content
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
                  Gamma
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mb-8 leading-relaxed">
                  Create presentations, documents, websites and visual content from simple ideas using AI.
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
                    <span className="font-bold text-zinc-900 dark:text-white text-lg ml-1">4.6/5</span>
                  </div>
                  <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700 hidden sm:block"></div>
                  <div className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Pricing: Freemium
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <a 
                    href="https://gamma.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white font-bold transition-all shadow-lg shadow-fuchsia-500/25 text-lg"
                  >
                    Visit Gamma <ExternalLink className="w-5 h-5" />
                  </a>
                  <Link 
                    href="/ai-hub/tools" 
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold transition-all text-lg"
                  >
                    Back to AI Tools
                  </Link>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> Features, AI models, credits and usage limits may vary by plan and can change over time.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
            <div className="lg:col-span-2 space-y-12">
              
              {/* WHAT IS GAMMA? */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">What is Gamma?</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none text-lg mb-6">
                  <p>
                    Gamma is an AI-powered visual content creation platform. While it is often mistakenly described as just an &quot;AI presentation maker,&quot; it is actually a broader tool designed to turn ideas, outlines, and raw notes into polished presentations, documents, webpages, and social media content.
                  </p>
                  <p>
                    It radically changes the traditional visual creation workflow by separating the writing process from the design process.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono mt-6">
                  <div className="bg-zinc-100 dark:bg-zinc-800/50 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700">
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2"><Layout className="w-4 h-4"/> Traditional Workflow</h4>
                    <div className="flex flex-col gap-1 text-zinc-600 dark:text-zinc-400">
                      <span>Blank slide</span><span className="text-zinc-400">&darr;</span>
                      <span>Write content</span><span className="text-zinc-400">&darr;</span>
                      <span>Choose layout</span><span className="text-zinc-400">&darr;</span>
                      <span>Find visuals</span><span className="text-zinc-400">&darr;</span>
                      <span>Format</span><span className="text-zinc-400">&darr;</span>
                      <span className="text-zinc-900 dark:text-white font-bold">Repeat</span>
                    </div>
                  </div>
                  <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 p-5 rounded-2xl border border-fuchsia-200 dark:border-fuchsia-800/50">
                    <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-400 mb-3 flex items-center gap-2"><Lightbulb className="w-4 h-4"/> Gamma Workflow</h4>
                    <div className="flex flex-col gap-1 text-fuchsia-800 dark:text-fuchsia-300">
                      <span>Idea / Prompt</span><span className="text-fuchsia-600/50">&darr;</span>
                      <span>AI structures content</span><span className="text-fuchsia-600/50">&darr;</span>
                      <span>AI applies layouts</span><span className="text-fuchsia-600/50">&darr;</span>
                      <span>AI adds visuals</span><span className="text-fuchsia-600/50">&darr;</span>
                      <span>Edit</span><span className="text-fuchsia-600/50">&darr;</span>
                      <span className="text-fuchsia-900 dark:text-fuchsia-200 font-bold">Present / Publish</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* WHY GAMMA IS DIFFERENT */}
              <section className="bg-gradient-to-br from-zinc-50 to-fuchsia-50 dark:from-zinc-900 dark:to-fuchsia-900/10 p-8 rounded-3xl border border-zinc-200 dark:border-fuchsia-800/30">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Why Gamma is Different</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Gamma combines writing, structure, visual design, and publishing into one unified workflow. The main advantage is drastically reducing the manual formatting work required to turn raw information into something visually presentable.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm text-center">
                    <MonitorPlay className="w-6 h-6 text-fuchsia-500 mx-auto mb-2" />
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Presentations</h4>
                  </div>
                  <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm text-center">
                    <FileText className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Documents</h4>
                  </div>
                  <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm text-center">
                    <Globe className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Websites</h4>
                  </div>
                  <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm text-center">
                    <MessageSquare className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Social Content</h4>
                  </div>
                </div>
              </section>

              {/* HOW GAMMA WORKS */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">How Gamma Works</h2>
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm mb-6">
                  <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                    You can start a Gamma project from a simple text prompt, a rough outline, existing raw text, a Word document, a PowerPoint file, or a URL. 
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                    <span>Idea</span> &rarr;
                    <span>Prompt / Content</span> &rarr;
                    <span>AI Structure</span> &rarr;
                    <span>Design</span> &rarr;
                    <span>Refine</span> &rarr;
                    <span className="text-fuchsia-600 dark:text-fuchsia-400">Share / Export</span>
                  </div>
                </div>
              </section>

              {/* GENERATE / PASTE / IMPORT */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/20 dark:to-zinc-900 border border-indigo-100 dark:border-indigo-800/30 p-5 rounded-2xl h-full flex flex-col">
                  <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2 uppercase text-sm tracking-wider flex items-center gap-2"><Zap className="w-4 h-4"/> Generate</h3>
                  <p className="text-xs font-bold text-zinc-500 mb-3">Best for: Starting from an idea.</p>
                  <div className="text-sm font-mono bg-white dark:bg-zinc-800 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 flex-grow">
                    &quot;Create a 10-slide presentation explaining Artificial Intelligence for college students.&quot;
                  </div>
                </div>
                
                <div className="bg-gradient-to-b from-fuchsia-50 to-white dark:from-fuchsia-900/20 dark:to-zinc-900 border border-fuchsia-100 dark:border-fuchsia-800/30 p-5 rounded-2xl h-full flex flex-col">
                  <h3 className="font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-2 uppercase text-sm tracking-wider flex items-center gap-2"><Layout className="w-4 h-4"/> Paste</h3>
                  <p className="text-xs font-bold text-zinc-500 mb-3">Best for: Already having content.</p>
                  <div className="text-sm font-mono bg-white dark:bg-zinc-800 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 flex-grow">
                    Paste your existing notes and ask Gamma to automatically structure them into a presentation layout.
                  </div>
                </div>

                <div className="bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-900/20 dark:to-zinc-900 border border-emerald-100 dark:border-emerald-800/30 p-5 rounded-2xl h-full flex flex-col">
                  <h3 className="font-bold text-emerald-900 dark:text-emerald-300 mb-2 uppercase text-sm tracking-wider flex items-center gap-2"><UploadCloud className="w-4 h-4"/> Import</h3>
                  <p className="text-xs font-bold text-zinc-500 mb-3">Best for: Existing files or web links.</p>
                  <div className="text-sm font-mono bg-white dark:bg-zinc-800 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 flex-grow">
                    Gamma imports supported files or web content and magically transforms them into a structured visual format.
                  </div>
                </div>
              </section>

              {/* CREATE WITH AI */}
              <section className="space-y-6 pt-8">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Create with AI</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6 text-lg">
                  Gamma helps with both the <strong>content architecture</strong> and the <strong>visual structure</strong>.
                </p>
                <div className="bg-zinc-900 text-white p-6 rounded-3xl shadow-xl border border-zinc-800">
                  <div className="bg-zinc-800 p-4 rounded-xl mb-6 border border-zinc-700">
                    <span className="text-xs font-bold uppercase text-zinc-400 block mb-2">User Prompt:</span>
                    <p className="text-sm font-mono text-zinc-200">&quot;Create a 12-slide startup pitch deck for a student productivity app.&quot;</p>
                  </div>
                  
                  <div className="mb-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">AI Generated Outline:</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm font-mono text-fuchsia-300 mb-6">
                    <div className="bg-fuchsia-900/20 p-2 border border-fuchsia-500/30 rounded text-center">Problem</div>
                    <div className="bg-fuchsia-900/20 p-2 border border-fuchsia-500/30 rounded text-center">Solution</div>
                    <div className="bg-fuchsia-900/20 p-2 border border-fuchsia-500/30 rounded text-center">Market</div>
                    <div className="bg-fuchsia-900/20 p-2 border border-fuchsia-500/30 rounded text-center">Product</div>
                    <div className="bg-fuchsia-900/20 p-2 border border-fuchsia-500/30 rounded text-center">Business Model</div>
                    <div className="bg-fuchsia-900/20 p-2 border border-fuchsia-500/30 rounded text-center">Competition</div>
                    <div className="bg-fuchsia-900/20 p-2 border border-fuchsia-500/30 rounded text-center">Roadmap</div>
                    <div className="bg-fuchsia-900/20 p-2 border border-fuchsia-500/30 rounded text-center">CTA</div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-400">
                    <span>Topic</span> &rarr;
                    <span>Outline</span> &rarr;
                    <span>Content</span> &rarr;
                    <span>Layout</span> &rarr;
                    <span>Visuals</span> &rarr;
                    <span className="text-white border border-zinc-600 px-2 py-1 rounded">Final Draft</span>
                  </div>
                </div>
              </section>

              {/* AI AGENT */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-indigo-500" /> AI Agent
                </h2>
                <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/30 p-6 rounded-2xl mb-6">
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Users can interact with Gamma&apos;s AI Agent through back-and-forth conversation while creating content. This allows you to shape the outline iteratively, provide multiple sources of context, and refine the creative direction before the final generation occurs.
                  </p>
                  
                  <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 mb-4 font-mono text-sm text-indigo-800 dark:text-indigo-300 shadow-sm">
                    &quot;I have a research PDF and some notes. Turn them into a clean 10-slide presentation for college students.&quot;
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-500">
                    <span>Sources</span> &rarr; <span>AI Agent Chat</span> &rarr; <span>Outline</span> &rarr; <span>Content</span> &rarr; <span>Design</span> &rarr; <span>Review</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 italic">
                  Important: &quot;Create with Agent&quot; features may be restricted to supported paid or team plans according to current Gamma documentation. It is not always available to every free user.
                </p>
              </section>

              {/* CORE FORMATS: Presentations, Documents, Websites, Social */}
              <section className="space-y-12 pt-8">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <MonitorPlay className="w-6 h-6 text-purple-500" /> Presentations
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Gamma&apos;s most well-known capability. It excels at pitch decks, product launches, sales presentations, keynotes, and business proposals. The AI assists with structure, copy, layout, and finding visuals.
                  </p>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg text-sm font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 mb-2">
                    &quot;Create a modern 8-slide presentation explaining Generative AI to beginners.&quot;
                  </div>
                  <p className="text-xs text-zinc-500">Users must still review the facts and verify the presentation quality.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-500" /> Documents
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Gamma transforms plain text into structured, visually formatted documents. This is perfect for reports, white papers, case studies, training manuals, and ebooks.
                  </p>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg text-sm font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    &quot;Create a beginner-friendly guide to starting a digital product business.&quot;
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-emerald-500" /> Websites
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Gamma can create highly shareable, AI-generated websites suitable for landing pages, portfolios, event pages, and lead magnets. 
                  </p>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg text-sm font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 mb-2">
                    &quot;Create a clean landing page for a student AI productivity app.&quot;
                  </div>
                  <p className="text-xs text-zinc-500 italic">
                    Gamma does not replace professional web development. It is best for fast, visual, content-focused pages rather than complex web applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-pink-500" /> Social Media & Graphics
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Gamma supports creating platform-ready visual content, making it highly synergistic with <Link href="/ai-hub" className="text-pink-600 dark:text-pink-400 hover:underline">The Design Tech AI Hub</Link>. It can generate infographics, visual explainers, and multi-slide social campaigns.
                  </p>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg text-sm font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    &quot;Create a 5-post social campaign announcing a new digital planner.&quot;
                  </div>
                </div>
              </section>

              {/* AI EDITING & BRANDING */}
              <section className="bg-zinc-900 text-white p-8 rounded-3xl shadow-xl border border-zinc-800 mt-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <PenTool className="w-6 h-6 text-fuchsia-400" /> AI Editing
                  </h2>
                  <p className="text-zinc-300 mb-4">
                    Creation is just the first step. Gamma provides powerful tools to refine the generated content inline. You can rewrite text, improve specific sections, completely alter layouts, change the tone, generate new visual assets, or translate the content.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-400 bg-zinc-800 p-3 rounded-xl border border-zinc-700">
                    <span>Generate</span> &rarr;
                    <span>Review</span> &rarr;
                    <span className="text-fuchsia-300">Ask AI to refine</span> &rarr;
                    <span>Manually edit</span> &rarr;
                    <span className="text-white">Final version</span>
                  </div>
                </div>
                
                <div className="border-t border-zinc-700 pt-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Palette className="w-6 h-6 text-cyan-400" /> Themes & Branding
                  </h2>
                  <p className="text-zinc-300 mb-4 text-sm">
                    AI generation is vastly more useful when the final output actually looks like <em>your</em> brand. Gamma allows users to configure consistent themes, fonts, and colors. (Custom brand kits are available on supported paid plans).
                  </p>
                  <div className="flex flex-wrap gap-3 font-mono text-xs text-zinc-300">
                    <span className="bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded">Brand Color: Purple</span>
                    <span className="text-zinc-600 py-1.5">+</span>
                    <span className="bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded">Font: Inter</span>
                    <span className="text-zinc-600 py-1.5">+</span>
                    <span className="bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded">Minimal Layouts</span>
                  </div>
                </div>
              </section>

              {/* IMPORT & EXPORT */}
              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Import Existing Content</h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Gamma is excellent at transforming existing, boring material into visual assets through supported file or URL imports.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-mono font-bold text-zinc-600 dark:text-zinc-400 text-center">
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700">PDF &rarr; Deck</div>
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700">Notes &rarr; Doc</div>
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700">URL &rarr; Site</div>
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700">Deck &rarr; Polish</div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                    <FileOutput className="w-5 h-5" /> Export & Publishing
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Depending on your current plan and features, finished work can be presented directly in Gamma, shared via live link, published as a website, or exported to PDF, PNG, or traditional PowerPoint/Google Slides formats.
                  </p>
                </div>
              </section>

              {/* AUDIENCES */}
              <section className="space-y-10 pt-8">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Who is Gamma For?</h2>
                
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Gamma for Students</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-2 text-sm">
                    Incredibly popular for college presentations, assignments, project summaries, visual notes, and study guides. 
                  </p>
                  <p className="text-sm font-mono bg-zinc-100 dark:bg-zinc-800 p-3 rounded-xl text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    &quot;Create a presentation explaining the Software Development Life Cycle.&quot;
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Gamma for Startups & Businesses</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-sm">
                    Founders and business teams use Gamma to drastically speed up the creation of pitch decks, product launches, one-pagers, sales decks, and marketing campaigns.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded-lg border border-indigo-200 dark:border-indigo-800/30 text-indigo-700 dark:text-indigo-400">
                    <span>Idea</span> &rarr; <span>Pitch deck</span> &rarr; <span>One-pager</span> &rarr; <span>Landing page</span> &rarr; <span>Social campaign</span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-2">Gamma allows massive content reuse across formats.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Gamma for Creators</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    Creators use Gamma to rapidly spin up social media content, lead magnets, ebooks, media kits, and portfolio websites without needing complex design software.
                  </p>
                </div>
              </section>

              {/* REAL USE CASES */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Real Use Cases</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { task: "Create a pitch deck", prompt: "10-slide seed round deck for an AI SaaS app.", why: "Builds structure and professional layouts instantly." },
                    { task: "Turn notes into slides", prompt: "[Paste raw meeting notes] -> Presentation.", why: "Saves hours of manual formatting work." },
                    { task: "Build a landing page", prompt: "Landing page for an upcoming webinar event.", why: "Generates copy and responsive web layout." },
                    { task: "Create an ebook", prompt: "Create a visual guide to beginner photography.", why: "Mixes text and imagery beautifully." },
                    { task: "Business proposal", prompt: "Proposal for a freelance web design project.", why: "Looks polished and professional with zero design effort." },
                    { task: "Social media content", prompt: "5-slide Instagram carousel about daily habits.", why: "Automatically formats text into bite-sized visual slides." }
                  ].map((uc, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col h-full hover:border-fuchsia-500/50 transition-colors">
                      <h4 className="font-bold text-zinc-900 dark:text-white mb-2 text-sm">{uc.task}</h4>
                      <p className="text-xs font-mono text-fuchsia-700 dark:text-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-900/10 p-2 rounded mb-3 flex-grow border border-fuchsia-100 dark:border-fuchsia-800/30">
                        &quot;{uc.prompt}&quot;
                      </p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium"><strong>Why it helps:</strong> {uc.why}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* HOW TO PROMPT */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">How to Prompt Gamma</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">The Formula</h3>
                    <div className="flex flex-col gap-2 font-mono text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                      <span className="font-bold">Topic</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Audience</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Format</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Purpose & Style</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Length & Constraints</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">Example Prompt</h3>
                    <p className="text-sm font-mono bg-zinc-900 p-4 rounded-xl text-zinc-300 border border-zinc-700 leading-relaxed">
                      &quot;Create an 8-slide presentation about Generative AI for first-year college students. Tone: beginner-friendly. Style: modern and minimal. Include: definition, examples, benefits, limitations and future applications. Use simple language.&quot;
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Detailed prompts produce significantly better layouts and copy. 
                  <Link href="/ai-hub/basics/what-is-prompt-engineering" className="text-fuchsia-600 dark:text-fuchsia-400 hover:underline ml-1">Learn more about Prompt Engineering.</Link>
                </p>
              </section>

              {/* EXAMPLE WORKFLOW */}
              <section className="bg-gradient-to-br from-indigo-50 to-fuchsia-50 dark:from-indigo-900/10 dark:to-fuchsia-900/10 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Example Workflow: The Pitch Deck</h2>
                <ol className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300 relative border-l-2 border-fuchsia-200 dark:border-fuchsia-800 ml-3 pl-6">
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-600 dark:text-fuchsia-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-fuchsia-300 dark:border-fuchsia-700">1</span>
                    <strong>Describe the startup</strong> and define the target audience.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-600 dark:text-fuchsia-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-fuchsia-300 dark:border-fuchsia-700">2</span>
                    <strong>Ask Gamma to create an outline.</strong> Let the AI Agent structure the narrative.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-600 dark:text-fuchsia-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-fuchsia-300 dark:border-fuchsia-700">3</span>
                    <strong>Review the outline.</strong> Add missing sections.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-600 dark:text-fuchsia-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-fuchsia-300 dark:border-fuchsia-700">4</span>
                    <strong>Generate the deck.</strong> Gamma builds the visual presentation in seconds.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-600 dark:text-indigo-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-fuchsia-300 dark:border-indigo-700">5</span>
                    <strong>Refine weak slides.</strong> Use inline AI editing to tweak copy or layouts.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-600 dark:text-indigo-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-fuchsia-300 dark:border-indigo-700">6</span>
                    <strong>Apply branding.</strong> Adjust colors and fonts. Export or present.
                  </li>
                </ol>
                <p className="mt-6 text-sm font-medium text-zinc-900 dark:text-zinc-300 bg-white/60 dark:bg-zinc-900/60 p-3 rounded-lg text-center border border-zinc-200 dark:border-zinc-700">
                  AI creates the first version, but the user remains responsible for accuracy and final quality.
                </p>
              </section>

              {/* COMPARISONS */}
              <section className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Gamma vs Canva</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Feature</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Gamma</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Canva</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Core Strength</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Content-to-presentation workflows.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Broad visual design and massive template ecosystem.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Format Output</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Presentations, docs, websites, basic social content.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Everything from posters and video to custom merch.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">AI Generation</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Generates entire structured documents instantly.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Magic Studio handles images, text, and slide design.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Gamma vs PowerPoint</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Workflow</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Gamma</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">PowerPoint</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Philosophy</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">AI-first content-to-presentation generation.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Manual presentation-first software.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Speed</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Extremely fast drafting.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Slow manual formatting (unless using Copilot).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm mt-3 text-zinc-600 dark:text-zinc-400">Gamma does not completely replace PowerPoint for highly specialized, legacy enterprise environments, but it is vastly faster for new drafts.</p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Gamma vs ChatGPT & Tome</h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                    <strong>ChatGPT:</strong> Strong for thinking, research, and writing. But it lacks a native visual presentation builder. (Idea &rarr; ChatGPT &rarr; Gamma).
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                    <strong>Tome:</strong> A direct competitor focused heavily on AI visual storytelling and presentations. Both are excellent; preference often comes down to UI aesthetic and specific pricing tiers.
                  </p>
                </div>
              </section>

              {/* THE DESIGN TECH WORKFLOW */}
              <section className="bg-gradient-to-r from-fuchsia-50 to-indigo-50 dark:from-fuchsia-900/10 dark:to-indigo-900/10 p-6 rounded-2xl border border-fuchsia-100 dark:border-fuchsia-800/30">
                <h3 className="font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-4">From Content Idea to Visual Presentation</h3>
                <p className="text-sm text-fuchsia-800 dark:text-fuchsia-300 mb-4">
                  A powerful workflow recommendation:
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-4 shadow-sm">
                  <span>Idea</span> &rarr;
                  <Link href="/ai-hub/tools" className="text-fuchsia-600 dark:text-fuchsia-400 hover:underline">The Design Tech AI Hub</Link> &rarr;
                  <span className="text-indigo-600 dark:text-indigo-400">Gamma (Visual Design)</span> &rarr;
                  <span>Publish</span>
                </div>
                <p className="text-xs text-zinc-500 italic">
                  Note: This is an editorial workflow strategy for pairing language generation with visual presentation tools.
                </p>
              </section>

              {/* LIMITATIONS & RESPONSIBLE AI */}
              <section className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" /> Limitations & Responsible AI
                </h2>
                <ul className="text-sm text-zinc-700 dark:text-zinc-300 grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-4">
                  <li>AI-generated content can contain factual inaccuracies.</li>
                  <li>AI visuals may not perfectly match your expectations.</li>
                  <li>AI often oversimplifies complex or nuanced topics.</li>
                  <li>Branding and layouts usually need manual refinement.</li>
                </ul>
                <p className="text-sm text-zinc-800 dark:text-zinc-200 font-medium mt-2">
                  Never treat AI output as automatically publication-ready. Always verify important facts and handle sensitive information carefully.
                </p>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "What is Gamma?", a: "Gamma is an AI-powered platform for creating presentations, documents, websites, and visual content from text or imported files." },
                    { q: "Is Gamma an AI presentation maker?", a: "Yes, but it is much broader. It also handles documents, landing pages, and social media visuals." },
                    { q: "Is Gamma free?", a: "Gamma offers a free tier to try the product, alongside Plus and Pro plans for advanced features, more AI usage, and custom branding." },
                    { q: "What can Gamma create?", a: "Pitch decks, sales presentations, training documents, ebooks, portfolios, landing pages, and infographics." },
                    { q: "Can Gamma create websites?", a: "Yes, you can generate simple, visually appealing websites and landing pages directly from text." },
                    { q: "Can Gamma create documents?", a: "Yes, it creates highly structured, visually formatted documents like memos, whitepapers, and reports." },
                    { q: "Can Gamma create social media content?", a: "Yes, you can format content specifically for highly visual social platforms like Instagram or LinkedIn carousels." },
                    { q: "Can Gamma import PowerPoint?", a: "Yes, you can import existing slides and have the AI reformat or improve them." },
                    { q: "Can Gamma export PowerPoint?", a: "Yes, you can export your Gamma creations to PowerPoint (or PDF) formats depending on your plan." },
                    { q: "What is Gamma AI Agent?", a: "A feature that lets you chat interactively with the AI to refine outlines, add sources, and guide the creation process before generating." },
                    { q: "Can students use Gamma?", a: "Absolutely. It's incredibly popular for college assignments, research presentations, and study guides." },
                    { q: "Is Gamma better than PowerPoint?", a: "It is vastly faster for creating first drafts and visual structures, though PowerPoint retains deeper manual animation and corporate legacy controls." },
                    { q: "Is Gamma better than Canva?", a: "It is more focused on structured presentations and documents from text, whereas Canva is a broader all-purpose design tool." },
                    { q: "Can Gamma replace a designer?", a: "No. It empowers non-designers to make beautiful content quickly, but professional brand design and complex custom web development still require experts." },
                    { q: "Does Gamma use AI credits?", a: "Yes, generating content consumes credits. Free and paid tiers allocate these credits differently." }
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
                  <li><a href="https://gamma.app/" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 dark:text-fuchsia-400 hover:underline inline-flex items-center">Gamma Official Site & Overview <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://help.gamma.app/" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 dark:text-fuchsia-400 hover:underline inline-flex items-center">Gamma Help Center & Agent Documentation <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://gamma.app/pricing" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 dark:text-fuchsia-400 hover:underline inline-flex items-center">Gamma Pricing & Credits <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                </ul>
              </section>

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* QUICK VERDICT */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-fuchsia-500/5 relative">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-fuchsia-500" /> Quick Verdict
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                  Gamma is a strong choice for turning rough ideas, notes or existing content into polished presentations, documents, webpages and other visual content without starting from a blank canvas.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Best for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Presentations & Pitch decks</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Students & Educators</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Founders & Marketers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Content creators</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Business docs & Quick websites</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Not ideal for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Complete pixel-level design control</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Highly specialized slide workflows</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Expecting perfect, unedited AI output</li>
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
                  <p className="text-xs text-zinc-500 italic">This is NOT an official Gamma rating.</p>
                </div>
              </div>

              {/* EDITORIAL TAKE */}
              <div className="bg-zinc-900 text-white p-6 rounded-3xl border border-zinc-800 shadow-2xl">
                <h3 className="text-lg font-bold mb-4">The Design Tech Take</h3>
                <p className="text-sm text-zinc-300 mb-4 italic">
                  &quot;Gamma is particularly useful when the hardest part isn&apos;t having an idea — it&apos;s turning that idea into something structured, visual and presentable.&quot;
                </p>
                <div className="space-y-4 text-sm text-zinc-300">
                  <div>
                    <strong className="block mb-1 text-fuchsia-400">What stands out:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Very fast creation process</li>
                      <li>Strong presentation workflow</li>
                      <li>Versatile website/document output</li>
                      <li>Useful AI-assisted inline editing</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block mb-1 text-fuchsia-400">Keep in mind:</strong>
                    <ul className="list-disc pl-4 space-y-1 text-zinc-400">
                      <li>Always review generated content</li>
                      <li>Customize the design to fit your brand</li>
                      <li>Understand credit limitations</li>
                      <li>Don&apos;t expect unlimited creative control</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-4 text-center">The Design Tech Editorial Take</p>
              </div>

              {/* PROS & CONS */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <div className="mb-6">
                  <h3 className="font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Pros
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>+ Very fast first drafts</li>
                    <li>+ Strong visual structure generated instantly</li>
                    <li>+ Supports multiple output formats (Sites/Docs)</li>
                    <li>+ Excellent AI-assisted editing tools</li>
                    <li>+ Highly accessible for non-designers</li>
                    <li>+ Broad export/publishing workflows</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Cons
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>- Generated content requires factual review</li>
                    <li>- Advanced features/exports are paywalled</li>
                    <li>- Strict credit usage limits apply</li>
                    <li>- Less granular control than Photoshop/Figma</li>
                  </ul>
                </div>
              </div>

              {/* PRICING */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Pricing Overview</h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-4">
                  Gamma currently offers Free, Plus, Pro, Ultra, Teams, and Business tiers.
                </p>
                <div className="space-y-3 mb-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <p><strong>Free:</strong> Good for trying Gamma and basic features.</p>
                  <p><strong>Paid plans:</strong> Required for more AI usage, deep customization, removing watermarks, and advanced export capabilities.</p>
                </div>
                <p className="text-xs text-zinc-500 mb-4 italic">
                  AI credits and feature availability vary strictly by plan.
                </p>
                <a href="https://gamma.app/pricing" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 text-center rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-sm font-bold transition-colors">
                  Check Current Pricing
                </a>
              </div>

              {/* HOW TO GET STARTED */}
              <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">How to Get Started</h3>
                <ol className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                  <li>1. Create a Gamma account</li>
                  <li>2. Choose what you want to create (Doc/Slide/Site)</li>
                  <li>3. Start from a prompt, pasted notes, or upload</li>
                  <li>4. Let Gamma generate the first draft</li>
                  <li>5. Review and refine the generated text</li>
                  <li>6. Customize the design theme</li>
                  <li>7. Present, export or publish</li>
                </ol>
              </div>

            </div>
          </div>

          {/* RELATED CONTENT */}
          <div className="border-t border-zinc-200 dark:border-white/10 pt-12 pb-16">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Related Content</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/ai-hub/basics/what-is-generative-ai" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-fuchsia-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400">Generative AI</h4>
              </Link>
              <Link href="/ai-hub/basics/what-is-prompt-engineering" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-fuchsia-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400">Prompt Engineering</h4>
              </Link>
              <Link href="/ai-hub/tools/canva" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-fuchsia-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400">Canva Review</h4>
              </Link>
              <Link href="/ai-hub/tools/chatgpt" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-fuchsia-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400">ChatGPT Review</h4>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
