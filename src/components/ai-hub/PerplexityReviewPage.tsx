import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ChevronRight, ChevronLeft, ExternalLink, Star, CheckCircle2, XCircle, 
  Info, Search, FileText, Folder, Zap, AlertTriangle, Layers, 
  MessageSquare, BookOpen, Quote, Compass, FileSearch, LibraryBig,
  CheckSquare, Settings2, Globe, BrainCircuit, PenTool, Code
} from "lucide-react";

export default function PerplexityReviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Perplexity",
            applicationCategory: "AI Search / Research / Productivity"
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
            <span className="text-zinc-900 dark:text-white truncate">Perplexity</span>
          </nav>

          {/* HERO SECTION */}
          <div className="mb-12 border-b border-zinc-200/60 dark:border-white/10 pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-teal-200 dark:border-teal-500/20 text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-500/10">
                    AI Search / Research / Productivity
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
                  Perplexity
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mb-8 leading-relaxed">
                  An AI-powered search and research engine that gives you conversational answers backed by web sources.
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
                    href="https://www.perplexity.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold transition-all shadow-lg shadow-teal-500/25 text-lg"
                  >
                    Visit Perplexity <ExternalLink className="w-5 h-5" />
                  </a>
                  <Link 
                    href="/ai-hub/tools" 
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold transition-all text-lg"
                  >
                    Back to AI Tools
                  </Link>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> Features, limits and available models may vary by plan.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
            <div className="lg:col-span-2 space-y-12">
              
              {/* WHAT IS PERPLEXITY? */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">What is Perplexity?</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none text-lg mb-6">
                  <p>
                    Perplexity is an AI-powered search and answer engine designed to answer your questions using live information from the web, explicitly providing <strong>citations and links</strong> to the sources it used to generate that answer.
                  </p>
                  <p>
                    Unlike traditional search engines that give you a list of links to sift through, or standard chatbots that might confidently hallucinate an answer without proof, Perplexity acts as a synthesis engine. 
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono mt-6">
                  <div className="bg-zinc-100 dark:bg-zinc-800/50 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700">
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2"><Globe className="w-4 h-4"/> Traditional Search</h4>
                    <div className="flex flex-col gap-1 text-zinc-600 dark:text-zinc-400">
                      <span>Query</span><span className="text-zinc-400">&darr;</span>
                      <span>List of links</span><span className="text-zinc-400">&darr;</span>
                      <span>Open pages</span><span className="text-zinc-400">&darr;</span>
                      <span>Read</span><span className="text-zinc-400">&darr;</span>
                      <span>Compare</span><span className="text-zinc-400">&darr;</span>
                      <span className="text-zinc-900 dark:text-white font-bold">Create answer yourself</span>
                    </div>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/10 p-5 rounded-2xl border border-teal-200 dark:border-teal-800/50">
                    <h4 className="font-bold text-teal-900 dark:text-teal-400 mb-3 flex items-center gap-2"><Search className="w-4 h-4"/> Perplexity</h4>
                    <div className="flex flex-col gap-1 text-teal-800 dark:text-teal-300">
                      <span>Question</span><span className="text-teal-600/50">&darr;</span>
                      <span>Search web</span><span className="text-teal-600/50">&darr;</span>
                      <span>Read relevant sources</span><span className="text-teal-600/50">&darr;</span>
                      <span>Synthesize info</span><span className="text-teal-600/50">&darr;</span>
                      <span className="font-bold">Answer</span><span className="text-teal-600/50">&darr;</span>
                      <span className="text-teal-900 dark:text-teal-200 font-bold">Show citations</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 mt-4 italic">
                  Note: Perplexity does NOT make traditional search completely unnecessary for heavy exploration or visual discovery.
                </p>
              </section>

              {/* WHY PERPLEXITY IS DIFFERENT */}
              <section className="bg-gradient-to-br from-zinc-50 to-teal-50 dark:from-zinc-900 dark:to-teal-900/10 p-8 rounded-3xl border border-zinc-200 dark:border-teal-800/30">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Why Perplexity is Different</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Perplexity combines search and AI rather than functioning only as a conversational chatbot. Its core differentiators include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3"><Search className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Web-first search:</strong> Grounded in live internet data.</span></div>
                  <div className="flex items-start gap-3"><Quote className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Source citations:</strong> Clickable footnotes for every claim.</span></div>
                  <div className="flex items-start gap-3"><BrainCircuit className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>AI synthesis:</strong> Pulls together multiple sources into one cohesive answer.</span></div>
                  <div className="flex items-start gap-3"><MessageSquare className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Follow-up questions:</strong> Conversational context is maintained.</span></div>
                  <div className="flex items-start gap-3"><Layers className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Research workflows:</strong> Multi-step autonomous research.</span></div>
                  <div className="flex items-start gap-3"><FileText className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>File analysis:</strong> Read PDFs and documents.</span></div>
                  <div className="flex items-start gap-3"><Settings2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Multiple AI models:</strong> Route queries through different top-tier providers.</span></div>
                </div>
              </section>

              {/* HOW PERPLEXITY WORKS */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">How Perplexity Works</h2>
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
                  <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded-lg">User Question</span> &rarr;
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded-lg">Search / Research</span> &rarr;
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded-lg">Find Relevant Sources</span> &rarr;
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded-lg">Read & Analyze</span> &rarr;
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded-lg">Synthesize</span> &rarr;
                    <span className="bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 px-3 py-2 rounded-lg border border-teal-200 dark:border-teal-700">Generate Answer</span> &rarr;
                    <span className="bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 px-3 py-2 rounded-lg border border-teal-200 dark:border-teal-700">Citations</span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-4 text-center">Exact behavior varies depending on whether you are using normal Search, Pro Search, or Deep Research mode.</p>
                </div>
              </section>

              {/* SEARCH */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-zinc-500" /> Normal Search
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Normal Perplexity Search is incredibly fast and useful for current information, quick fact discovery, news, product research, technical questions, and general knowledge.
                </p>
                <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                  <span className="text-xs font-bold uppercase text-zinc-500 block mb-2">Example Query</span>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">&quot;What&apos;s the current state of AI image generation in 2026?&quot;</p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
                  The user receives a synthesized answer instantly, backed with clickable links and citations that can be inspected directly. Always encourage users to open important sources themselves!
                </p>
              </section>

              {/* CITATIONS & SOURCES */}
              <section className="bg-teal-50 dark:bg-teal-900/10 p-8 rounded-3xl border border-teal-100 dark:border-teal-800/30">
                <h2 className="text-2xl font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center gap-2">
                  <Quote className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                  Citations & Sources
                </h2>
                <p className="text-teal-900 dark:text-teal-200 mb-6 font-medium">
                  This is Perplexity&apos;s strongest feature. Responses include superscript citations [1, 2, 3] that point directly to the exact sources used to support the answer.
                </p>
                <p className="text-teal-800 dark:text-teal-300 text-sm mb-4">
                  Why this matters:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-teal-800 dark:text-teal-300 mb-6">
                  <li className="flex items-center gap-2"><CheckSquare className="w-4 h-4"/> Verification</li>
                  <li className="flex items-center gap-2"><CheckSquare className="w-4 h-4"/> Further reading</li>
                  <li className="flex items-center gap-2"><CheckSquare className="w-4 h-4"/> Source discovery</li>
                  <li className="flex items-center gap-2"><CheckSquare className="w-4 h-4"/> Research transparency</li>
                </ul>
                
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-teal-700 dark:text-teal-400 bg-white dark:bg-teal-950 p-4 rounded-xl border border-teal-200 dark:border-teal-800">
                  <span>Question</span> &rarr;
                  <span>AI answer</span> &rarr;
                  <span>Citation [1]</span> &rarr;
                  <span>Open source</span> &rarr;
                  <span>Verify claim</span>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-xl mt-6">
                  <p className="text-sm text-amber-900 dark:text-amber-200 m-0">
                    <strong>Important:</strong> A citation does NOT automatically mean the claim is correct. The AI could have misread the source, or the source itself could be flawed. Users should still inspect important sources.
                  </p>
                </div>
              </section>

              {/* PRO SEARCH & DEEP RESEARCH */}
              <section className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Compass className="w-6 h-6 text-indigo-500" /> Pro Search
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                    Pro Search is a more advanced search mode designed for questions that require deeper searching, comparison, and synthesis. It might ask you clarifying questions before beginning its search.
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    <strong>Use cases:</strong> Comparisons, technical research, complex questions, market research, and product research.
                  </p>
                  <p className="text-xs text-zinc-500 italic">Availability and usage limits vary by plan.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Layers className="w-6 h-6 text-purple-500" /> Deep Research
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Deep Research is designed for highly complex research tasks. It can perform multi-step searching, reading dozens of sources, and extensive analysis before producing a massive, structured report.
                  </p>
                  <div className="bg-zinc-900 text-purple-400 p-4 rounded-2xl font-mono text-sm mb-4">
                    <span className="opacity-50 mr-2">Input:</span> &quot;Research the best AI content creation tools for small businesses in 2026 and compare their pricing, features and limitations in a comprehensive report.&quot;
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4">
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Question</span> &rarr;
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Research Plan</span> &rarr;
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Multiple Searches</span> &rarr;
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Read Sources</span> &rarr;
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Compare Findings</span> &rarr;
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Analyze</span> &rarr;
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Generate Report</span>
                  </div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    This is significantly more powerful than a simple one-line question for heavy tasks. (Note: Deep Research limits and capabilities depend on your specific plan).
                  </p>
                </div>
              </section>

              {/* RESEARCH WORKFLOWS */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Research Workflows</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Academic Research", goal: "Find academic literature", query: "Summarize recent papers on CRISPR.", output: "A synthesized overview with citations to scientific journals." },
                    { title: "Market Research", goal: "Understand market trends", query: "What are the Q3 2026 smartphone market share trends?", output: "Statistical breakdown citing recent business reports." },
                    { title: "Competitor Research", goal: "Compare business tools", query: "Compare Stripe and LemonSqueezy pricing structures.", output: "A direct comparison table with linked pricing pages." },
                    { title: "Product Research", goal: "Make buying decisions", query: "Best noise-canceling headphones for running under $200.", output: "A curated list of products with review citations." },
                    { title: "Technology Research", goal: "Learn technical specs", query: "What is the difference between React 18 and React 19?", output: "A technical breakdown citing official documentation." },
                    { title: "Content Research", goal: "Gather facts for writing", query: "Find me 5 recent statistics about remote work productivity.", output: "A bulleted list of stats with links to original studies." }
                  ].map((workflow, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-xl hover:border-teal-500/50 transition-colors">
                      <h4 className="font-bold text-zinc-900 dark:text-white mb-1">{workflow.title}</h4>
                      <p className="text-xs text-zinc-500 mb-3 uppercase tracking-wider">{workflow.goal}</p>
                      <div className="text-xs font-mono bg-zinc-50 dark:bg-zinc-800/50 p-2 rounded text-zinc-700 dark:text-zinc-300 mb-2">
                        &quot;{workflow.query}&quot;
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400"><strong>Output:</strong> {workflow.output}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FILE ANALYSIS & PROJECTS */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <FileSearch className="w-5 h-5 text-orange-500" /> File Analysis
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    Upload PDFs, CSVs, images, and reports to ask questions directly about your own files.
                  </p>
                  <div className="bg-white dark:bg-zinc-900 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <div className="text-xs font-bold text-zinc-500 mb-1">Upload: A 50-page market report</div>
                    <div className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
                      &quot;Summarize the report, identify the three biggest market trends and list the sources mentioned.&quot;
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 mt-3 italic">*File limits and supported capabilities depend on plan.</p>
                </div>

                <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Folder className="w-5 h-5 text-blue-500" /> Projects
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    Persistent workspaces where users can organize ongoing research, conversations, files, and custom instructions.
                  </p>
                  <div className="bg-white dark:bg-zinc-900 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <div className="text-xs font-bold text-zinc-500 mb-1">Project: &quot;AI Tools Research&quot;</div>
                    <ul className="text-xs text-zinc-700 dark:text-zinc-300 list-disc pl-4 space-y-1">
                      <li>Competitor research threads</li>
                      <li>Pricing notes</li>
                      <li>Source documents</li>
                      <li>Custom formatting instructions</li>
                    </ul>
                  </div>
                  <p className="text-xs text-zinc-500 mt-3 italic">Highly useful for long-term research.</p>
                </div>
              </section>

              {/* MULTI-MODEL ACCESS */}
              <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Settings2 className="w-7 h-7 text-zinc-500" />
                  Multi-Model Access
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Depending on your plan and selected mode, Perplexity may provide access to models from multiple AI providers. 
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  This is incredibly useful because different models have different strengths. Users can compare approaches, and Perplexity can route queries through the most appropriate model for the task.
                </p>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-xl text-sm text-zinc-600 dark:text-zinc-400 italic border border-zinc-200 dark:border-zinc-700">
                  Note: Available models change over time as new models are released. Check Perplexity&apos;s current model selector for the latest availability.
                </div>
              </section>

              {/* PERPLEXITY FOR TARGET AUDIENCES */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Who is Perplexity for?</h2>
                
                {/* STUDENTS */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-500"/> For Students
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-3 text-sm">
                    Research topics, understand difficult concepts, find academic sources, summarize papers, prepare study material, and explore current information.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono bg-zinc-100 dark:bg-zinc-800/50 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <span>Question</span> &rarr; <span>Research</span> &rarr; <span>Open citations</span> &rarr; <span>Read primary sources</span> &rarr; <span>Take notes</span> &rarr; <span>Create summary</span>
                  </div>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 italic">Important: Use sources and understand material, rather than simply submitting AI-generated answers.</p>
                </div>

                {/* RESEARCHERS */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <LibraryBig className="w-5 h-5 text-teal-500"/> For Researchers
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-2">
                    Literature discovery, topic exploration, source discovery, market research, competitor analysis, and background research. 
                  </p>
                  <p className="text-xs text-zinc-500">Perplexity is especially useful for the discovery and synthesis stage. Primary sources should still be meticulously checked.</p>
                </div>

                {/* CREATORS */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-pink-500"/> For Content Creators
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-3">
                    Topic research, trend discovery, source gathering, fact-checking, and content planning. Example: &quot;Research the latest trends in AI content creation and provide sources for each major claim.&quot;
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30 text-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div>
                      <p className="mb-1"><strong>Perplexity:</strong> Research + sources</p>
                      <p><strong>Contentian:</strong> Content creation + titles + descriptions + hashtags</p>
                    </div>
                    <Link href="/generator" className="shrink-0 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors">
                      Try Contentian Generator
                    </Link>
                  </div>
                </div>

                {/* DEVELOPERS */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-emerald-500"/> For Developers
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-3">
                    Technical research, documentation discovery, comparing libraries, troubleshooting, and understanding APIs.
                  </p>
                  <p className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800/50 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
                    &quot;Compare Next.js 15 and the current Next.js version for a new SaaS project and cite official documentation.&quot;
                  </p>
                  <p className="text-xs text-zinc-500 mt-2">Developers should prioritize official documentation for implementation decisions.</p>
                </div>
              </section>

              {/* HOW TO WRITE BETTER QUERIES */}
              <section className="bg-zinc-900 text-white p-8 rounded-3xl shadow-2xl mt-12">
                <h2 className="text-2xl font-bold mb-6">How to Write Better Perplexity Queries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-teal-400 mb-3">The Formula</h3>
                    <div className="flex flex-col gap-2 font-mono text-sm text-zinc-300 bg-zinc-800 p-4 rounded-xl">
                      <span className="text-white font-bold">Topic</span>
                      <span className="text-zinc-500">+</span>
                      <span className="text-white font-bold">Goal</span>
                      <span className="text-zinc-500">+</span>
                      <span className="text-white font-bold">Constraints</span>
                      <span className="text-zinc-500">+</span>
                      <span className="text-white font-bold">Output format</span>
                      <span className="text-zinc-500">+</span>
                      <span className="text-teal-400 font-bold">Sources</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-teal-400 mb-3">Example</h3>
                    <p className="text-sm font-mono bg-zinc-800 p-4 rounded-xl text-zinc-300">
                      &quot;Research AI content creation tools for beginners. Compare 5 tools based on ease of use, pricing and social-media features. Use official sources where possible and present the result as a table.&quot;
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-800">
                  <h4 className="font-bold text-sm text-zinc-400 uppercase tracking-wider mb-3">Pro Tips</h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-zinc-300">
                    <li>&bull; Define timeframe</li>
                    <li>&bull; Define geography</li>
                    <li>&bull; Ask for sources</li>
                    <li>&bull; Set comparison criteria</li>
                    <li>&bull; Ask for structured output</li>
                    <li>&bull; Ask follow-up questions</li>
                  </ul>
                </div>
              </section>

              {/* COMPARISONS */}
              <section className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Perplexity vs Google</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Dimension</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Google</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Perplexity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Search</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Excellent for discovering many websites and navigating the web.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Designed to synthesize web info into conversational answers.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Results</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">List of ranked links (plus some AI snippets).</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">A direct, comprehensive answer with inline citations.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-zinc-500 mt-2 italic">Note: Neither completely replaces the other. Use Google for navigation, Perplexity for research.</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Perplexity vs ChatGPT & Claude</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Feature</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Perplexity</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">ChatGPT / Claude</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Primary Focus</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Research-first, web-grounded engine.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">General-purpose AI assistants (writing, coding).</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Citations</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Native, inline, and prominent.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Available via web-search tools, but less central.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Creative Writing</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Good, but heavily grounded in searched facts.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Often preferred for drafting, tone, and long-form.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white mt-4">Conclusion: Choose based on the workflow rather than brand.</p>
                </div>
              </section>

              {/* REAL USE CASES */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Real Use Cases</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { task: "Research a new technology", query: "What are solid-state batteries and when will they reach the EV market?", why: "Synthesizes complex news across multiple sources." },
                    { task: "Compare products", query: "Compare the iPhone 16 Pro and Pixel 9 Pro camera specs.", why: "Pulls exact specs directly from manufacturer sites." },
                    { task: "Research competitors", query: "Who are the main competitors to Notion in 2026?", why: "Discovers recent market alternatives." },
                    { task: "Find academic sources", query: "Find recent studies on the impact of sleep on memory consolidation.", why: "Can filter to search academic papers." },
                    { task: "Understand current events", query: "Explain the recent changes to the US tax code passed yesterday.", why: "Accesses live news immediately." },
                    { task: "Fact-check claims", query: "Did the CEO of Company X really say they are closing all stores?", why: "Finds the original quote and context." }
                  ].map((uc, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col h-full">
                      <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{uc.task}</h4>
                      <p className="text-xs font-mono text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/10 p-2 rounded mb-3 flex-grow">
                        &quot;{uc.query}&quot;
                      </p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium"><strong>Why it helps:</strong> {uc.why}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* LIMITATIONS */}
              <section className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-2xl my-8">
                <h2 className="text-xl font-bold text-red-900 dark:text-red-400 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Limitations & Responsible Research
                </h2>
                <p className="text-red-800 dark:text-red-300 text-sm mb-4 font-bold">
                  Use Perplexity as a research assistant, not as the final authority, especially for Medical, Legal, Financial, Academic, or Business-critical research.
                </p>
                <ul className="text-sm text-red-800 dark:text-red-300 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-0 list-disc pl-4">
                  <li>Citations do not guarantee correctness.</li>
                  <li>Sources can be misunderstood by the AI.</li>
                  <li>Search results can contain biased information.</li>
                  <li>AI can synthesize conflicting data incorrectly.</li>
                  <li>Important claims should always be verified.</li>
                  <li>Primary sources should be preferred when possible.</li>
                </ul>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "What is Perplexity?", a: "An AI-powered search and answer engine that provides conversational responses backed by live web citations." },
                    { q: "Is Perplexity free?", a: "Yes, it offers a highly capable free tier. A Pro subscription is available for higher limits, Pro Search, and Deep Research capabilities." },
                    { q: "How is Perplexity different from Google?", a: "Google provides a list of links for you to explore; Perplexity reads those links and synthesizes a direct answer with citations." },
                    { q: "Is Perplexity better than ChatGPT?", a: "For web research and sourcing facts, Perplexity is generally preferred. ChatGPT is better for general conversational and creative tasks." },
                    { q: "Does Perplexity provide citations?", a: "Yes, inline clickable citations are a core feature of every Perplexity answer." },
                    { q: "Can Perplexity search the web?", a: "Yes, it searches the live internet in real-time." },
                    { q: "What is Pro Search?", a: "An advanced search mode that performs deeper, multi-step queries for complex questions." },
                    { q: "What is Deep Research?", a: "A powerful research workflow that autonomously gathers, analyzes, and synthesizes massive amounts of data into a structured report." },
                    { q: "Can Perplexity analyze files?", a: "Yes, you can upload PDFs and documents for analysis, depending on your plan limits." },
                    { q: "What are Perplexity Projects?", a: "Workspaces where you can organize ongoing research, files, and custom instructions together." },
                    { q: "Can Perplexity use different AI models?", a: "Yes, depending on your plan, it can route queries through top-tier models from various providers." },
                    { q: "Is Perplexity accurate?", a: "It is highly grounded, but like all AI, it can hallucinate or misinterpret sources. Always verify important claims." },
                    { q: "Can students use Perplexity?", a: "Yes, it's excellent for discovering sources and understanding topics, provided students actually read the cited primary sources." },
                    { q: "Can Perplexity replace Google?", a: "No. While it replaces many informational queries, Google is still necessary for navigation, shopping, and visual discovery." },
                    { q: "Can Perplexity replace academic research?", a: "No. It is a discovery and synthesis tool. Serious academic work still requires manual reading of primary peer-reviewed literature." }
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
                  <li><a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center">Perplexity Official Site <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://blog.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center">Perplexity Blog & Updates <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                </ul>
              </section>

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* QUICK VERDICT */}
              {/* NOTE: Normal document flow, no sticky/fixed/absolute positioning to prevent overlap */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-teal-500/5 relative">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-teal-500" /> Quick Verdict
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                  Perplexity is one of the most useful AI tools for research because it combines conversational answers with web search and citations, making it easier to check where information came from.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Best for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Students & Researchers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Writers & Journalists</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Content creators</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Developers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Professionals</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Not ideal for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Tasks requiring guaranteed accuracy</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Replacing primary sources completely</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> High-stakes decisions without verification</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Completely offline workflows</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2">Contentian Editorial Score</div>
                  <div className="flex text-amber-400 mb-1">
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-zinc-500 italic">This is NOT an official Perplexity rating.</p>
                </div>
              </div>

              {/* CONTENTIAN'S TAKE */}
              <div className="bg-teal-50 dark:bg-teal-900/10 p-6 rounded-3xl border border-teal-100 dark:border-teal-800/30">
                <h3 className="text-lg font-bold text-teal-900 dark:text-teal-200 mb-4">Contentian&apos;s Take</h3>
                <div className="space-y-4 text-sm text-teal-800 dark:text-teal-300">
                  <div>
                    <strong className="block mb-1">What stands out:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Research-first experience</li>
                      <li>In-line citations</li>
                      <li>Current web information</li>
                      <li>Useful follow-up workflow</li>
                      <li>Strong research features</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block mb-1">Keep in mind:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Always inspect citations</li>
                      <li>Don&apos;t confuse citations with proof</li>
                      <li>Limits vary by plan</li>
                      <li>Feature set changes quickly</li>
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
                    <li>+ Excellent for research</li>
                    <li>+ Web-first approach</li>
                    <li>+ Citations make source checking easier</li>
                    <li>+ Good for current information</li>
                    <li>+ Strong research workflows</li>
                    <li>+ Multiple model options (on paid)</li>
                    <li>+ Useful file workflows</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Cons
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>- Citations still need verification</li>
                    <li>- Answers can contain errors</li>
                    <li>- Advanced features have limits</li>
                    <li>- Not a replacement for primary sources</li>
                    <li>- Search quality dictates answer quality</li>
                  </ul>
                </div>
              </div>

              {/* PRICING */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Pricing Overview</h3>
                <ul className="space-y-3 mb-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex flex-col border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <span className="font-bold text-zinc-900 dark:text-white">Free / Standard</span>
                    <span className="text-zinc-500 text-xs">Useful for basic search and exploration.</span>
                  </li>
                  <li className="flex flex-col border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <span className="font-bold text-zinc-900 dark:text-white">Pro</span>
                    <span className="text-zinc-500 text-xs">Advanced search, higher limits, additional features.</span>
                  </li>
                  <li className="flex flex-col border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <span className="font-bold text-zinc-900 dark:text-white">Max</span>
                    <span className="text-zinc-500 text-xs">For heavier users needing max access.</span>
                  </li>
                  <li className="flex flex-col border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <span className="font-bold text-zinc-900 dark:text-white">Education Pro</span>
                    <span className="text-zinc-500 text-xs">Available to verified eligible users where offered.</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-bold text-zinc-900 dark:text-white">Enterprise</span>
                    <span className="text-zinc-500 text-xs">For organizations requiring admin & security.</span>
                  </li>
                </ul>
                <a href="https://www.perplexity.ai/pro" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 mt-2 text-center rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-sm font-bold transition-colors">
                  View Current Pricing
                </a>
              </div>

              {/* HOW TO GET STARTED */}
              <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">How to Get Started</h3>
                <ol className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 mb-4 font-medium">
                  <li>1. Open Perplexity</li>
                  <li>2. Enter a clear question</li>
                  <li>3. Review the generated answer</li>
                  <li>4. Open the citations</li>
                  <li>5. Ask follow-up questions</li>
                </ol>
                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                  <p className="text-xs text-red-500 uppercase font-bold mb-1">Instead of:</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">&quot;AI marketing&quot;</p>
                  <p className="text-xs text-green-500 uppercase font-bold mb-1">Use:</p>
                  <p className="text-sm font-mono text-zinc-900 dark:text-zinc-300">&quot;What are the biggest AI marketing trends in 2026? Compare the top five trends and cite reliable sources.&quot;</p>
                </div>
              </div>

              {/* FINAL VERDICT */}
              <div className="bg-zinc-900 text-white p-6 rounded-3xl border border-zinc-800 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-center">Is Perplexity Worth Using?</h3>
                <p className="text-zinc-300 text-sm text-center mb-6">
                  Yes — especially if your work involves research, current information, source discovery or comparing information from across the web.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Research</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Source Discovery</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Current Info</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Ease of Use</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Writing</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Coding</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4"/></div>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-4 text-center italic">Contentian Editorial Scores. NOT official ratings.</p>
              </div>

            </div>
          </div>

          {/* RELATED CONTENT */}
          <div className="border-t border-zinc-200 dark:border-white/10 pt-12 pb-16">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Learn More</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/ai-hub/basics/what-is-prompt-engineering" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-teal-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">Prompt Engineering</h4>
                <p className="text-sm text-zinc-500 mt-1">Learn how to communicate with AI effectively.</p>
              </Link>
              <Link href="/ai-hub/basics/what-are-large-language-models" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-teal-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">What Are LLMs?</h4>
                <p className="text-sm text-zinc-500 mt-1">Understand the technology behind Perplexity.</p>
              </Link>
              <Link href="/ai-hub/basics/what-is-artificial-intelligence" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-teal-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">What Is AI?</h4>
                <p className="text-sm text-zinc-500 mt-1">A beginner-friendly guide to artificial intelligence.</p>
              </Link>
              <Link href="/ai-hub/basics/what-is-generative-ai" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-teal-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">Generative AI</h4>
                <p className="text-sm text-zinc-500 mt-1">Explore the broader landscape of AI generation.</p>
              </Link>
              <Link href="/ai-hub/basics/what-are-ai-agents" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-teal-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">What Are AI Agents?</h4>
                <p className="text-sm text-zinc-500 mt-1">Learn how models use tools and autonomy.</p>
              </Link>
              <Link href="/ai-hub/basics/what-is-rag" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-teal-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">What is RAG?</h4>
                <p className="text-sm text-zinc-500 mt-1">How AI retrieves external data to answer questions.</p>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
