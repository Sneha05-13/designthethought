import Link from "next/link";
import Navbar from "@/components/ai-hub/AIHubNavbar";
import Footer from "@/components/ai-hub/AIHubFooter";
import { 
  ChevronRight, ChevronLeft, ExternalLink, Star, CheckCircle2, XCircle, 
  Info, Zap, AlertTriangle, Layers, MessageSquare, BookOpen, 
  LibraryBig, Layout, Code, MonitorPlay, Sparkles, Terminal, FileCode, Bug, Cloud, Settings, Compass
} from "lucide-react";

export default function CursorReviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Cursor",
            applicationCategory: "Developer Tool / AI Coding"
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
            <span className="text-zinc-900 dark:text-white truncate">Cursor</span>
          </nav>

          {/* HERO SECTION */}
          <div className="mb-12 border-b border-zinc-200/60 dark:border-white/10 pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10">
                    AI Coding / Developer Tools
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
                  Cursor
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mb-8 leading-relaxed">
                  An AI-first coding environment that helps developers understand, build, edit and debug software with AI.
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
                    Pricing: Freemium
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <a 
                    href="https://cursor.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/25 text-lg"
                  >
                    Visit Cursor <ExternalLink className="w-5 h-5" />
                  </a>
                  <Link 
                    href="/ai-hub/tools" 
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold transition-all text-lg"
                  >
                    Back to AI Tools
                  </Link>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> Features, model access and usage limits may vary by plan and can change over time.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
            <div className="lg:col-span-2 space-y-12">
              
              {/* WHAT IS CURSOR? */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">What is Cursor?</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none text-lg mb-6">
                  <p>
                    Cursor is an AI-first coding environment designed completely around modern software development. Unlike traditional editors that added an AI chatbot as an afterthought, Cursor is built from the ground up to deeply understand your codebase.
                  </p>
                  <p>
                    Instead of only asking an AI, <em>&quot;How do I write this function?&quot;</em>, developers can give Cursor much larger goals, such as: <em>&quot;Build a responsive login page,&quot;</em> or <em>&quot;Find why this API request is failing and fix it.&quot;</em>
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono mt-6">
                  <div className="bg-zinc-100 dark:bg-zinc-800/50 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700">
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2"><Layout className="w-4 h-4"/> Traditional Coding</h4>
                    <div className="flex flex-col gap-1 text-zinc-600 dark:text-zinc-400">
                      <span>Think</span><span className="text-zinc-400">&darr;</span>
                      <span>Write code</span><span className="text-zinc-400">&darr;</span>
                      <span>Run</span><span className="text-zinc-400">&darr;</span>
                      <span>Debug</span><span className="text-zinc-400">&darr;</span>
                      <span className="text-zinc-900 dark:text-white font-bold">Repeat</span>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-800/50">
                    <h4 className="font-bold text-indigo-900 dark:text-indigo-400 mb-3 flex items-center gap-2"><Sparkles className="w-4 h-4"/> AI-Assisted Coding</h4>
                    <div className="flex flex-col gap-1 text-indigo-800 dark:text-indigo-300">
                      <span>Describe task</span><span className="text-indigo-600/50">&darr;</span>
                      <span>AI understands context</span><span className="text-indigo-600/50">&darr;</span>
                      <span>AI edits code</span><span className="text-indigo-600/50">&darr;</span>
                      <span>Run / test</span><span className="text-indigo-600/50">&darr;</span>
                      <span>Review</span><span className="text-indigo-600/50">&darr;</span>
                      <span className="text-indigo-900 dark:text-indigo-200 font-bold">Iterate</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* WHY CURSOR IS DIFFERENT */}
              <section className="bg-gradient-to-br from-zinc-50 to-indigo-50 dark:from-zinc-900 dark:to-indigo-900/10 p-8 rounded-3xl border border-zinc-200 dark:border-indigo-800/30">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Why Cursor is Different</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Cursor is designed around AI actively <em>participating</em> in the development workflow, rather than simply autocompleting the next line of code or forcing you to copy-paste from a browser window.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3"><Sparkles className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>AI coding agent:</strong> Autonomous capabilities.</span></div>
                  <div className="flex items-start gap-3"><Layers className="w-5 h-5 text-purple-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Codebase context:</strong> Understands your whole project.</span></div>
                  <div className="flex items-start gap-3"><FileCode className="w-5 h-5 text-blue-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Multi-file editing:</strong> Modifies several files at once.</span></div>
                  <div className="flex items-start gap-3"><Bug className="w-5 h-5 text-red-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Debugging:</strong> Finds and fixes complex errors.</span></div>
                  <div className="flex items-start gap-3"><Terminal className="w-5 h-5 text-green-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Terminal workflows:</strong> Runs commands natively.</span></div>
                  <div className="flex items-start gap-3"><Settings className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Planning:</strong> Architects solutions before writing.</span></div>
                  <div className="flex items-start gap-3"><Cloud className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Cloud Agents:</strong> Remote task execution.</span></div>
                  <div className="flex items-start gap-3"><Zap className="w-5 h-5 text-amber-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Faster iteration:</strong> Rapid prototyping & review.</span></div>
                </div>
              </section>

              {/* HOW CURSOR WORKS */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">How Cursor Works</h2>
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm mb-6">
                  <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                    Cursor&apos;s Agent can inspect the codebase, make changes, run commands, and help verify the result. 
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                    <span>Understand</span> &rarr;
                    <span>Plan</span> &rarr;
                    <span>Edit</span> &rarr;
                    <span>Run</span> &rarr;
                    <span>Test</span> &rarr;
                    <span>Review</span> &rarr;
                    <span className="text-indigo-600 dark:text-indigo-400">Iterate</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4 italic border-l-2 border-amber-500 pl-3">
                    Important: Do not imply that every task is automatically correct. The AI handles the heavy lifting, but human review is still absolutely vital.
                  </p>
                </div>
              </section>

              {/* AGENT MODE */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-indigo-500" /> Agent Mode
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6 text-lg">
                  Agent mode is what makes Cursor feel like a pair programmer rather than just an autocomplete tool. 
                </p>
                
                <div className="bg-zinc-900 text-white p-6 rounded-3xl shadow-xl border border-zinc-800 mb-6">
                  <h3 className="font-bold mb-4 text-indigo-300">Cursor Agent can:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-300 list-disc pl-4 mb-6">
                    <li>Search the entire codebase</li>
                    <li>Read and analyze files</li>
                    <li>Understand component relationships</li>
                    <li>Edit multiple files simultaneously</li>
                    <li>Run terminal commands</li>
                    <li>Build net-new features</li>
                    <li>Refactor legacy code</li>
                    <li>Write and execute tests</li>
                  </ul>
                  
                  <div className="bg-zinc-800 p-4 rounded-xl mb-4 border border-zinc-700">
                    <span className="text-xs font-bold uppercase text-zinc-400 block mb-2">User Prompt:</span>
                    <p className="text-sm font-mono text-zinc-200">&quot;Add a dark mode toggle to my dashboard.&quot;</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-400">
                    <span>Understand project</span> &rarr;
                    <span>Find components</span> &rarr;
                    <span>Plan changes</span> &rarr;
                    <span>Edit files</span> &rarr;
                    <span>Run checks</span> &rarr;
                    <span className="text-white border border-zinc-600 px-2 py-1 rounded">Review result</span>
                  </div>
                </div>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-200 dark:border-amber-800/30">
                  <strong>Disclaimer:</strong> Agent does not complete tasks perfectly every time. Its output heavily depends on prompt quality, codebase structure, the underlying AI model, project complexity, and thorough human review.
                </p>
              </section>

              {/* AGENTIC CODING */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Agentic Coding</h2>
                <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium">
                  &quot;Agentic coding means directing an AI agent to perform software-development tasks rather than manually writing every line yourself.&quot;
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl">
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-2 text-sm uppercase tracking-wider">1. You Provide</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">Goal + Context + Constraints</p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/30 p-5 rounded-2xl">
                    <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2 text-sm uppercase tracking-wider">2. Agent Executes</h4>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400 font-mono">Plans + Searches + Edits + Runs + Verifies</p>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/30 p-5 rounded-2xl">
                    <h4 className="font-bold text-emerald-900 dark:text-emerald-300 mb-2 text-sm uppercase tracking-wider">3. Developer Finalizes</h4>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 font-mono">Reviews + Tests + Approves</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-zinc-500 bg-zinc-100 dark:bg-zinc-800 p-6 rounded-2xl mt-4">
                  <span className="bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-lg shadow-sm">Goal</span> &rarr;
                  <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 px-3 py-1.5 rounded-lg shadow-sm">AI Agent</span> &rarr;
                  <span className="bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-lg shadow-sm">Tools</span> &rarr;
                  <span className="bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-lg shadow-sm">Code Changes</span> &rarr;
                  <span className="bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-lg shadow-sm">Verification</span> &rarr;
                  <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 px-3 py-1.5 rounded-lg shadow-sm">Developer Review</span>
                </div>

                <p className="text-sm mt-4">
                  <Link href="/ai-hub/basics/what-are-ai-agents" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium inline-flex items-center gap-1">
                    Learn more about AI Agents <ChevronRight className="w-4 h-4" />
                  </Link>
                </p>
              </section>

              {/* CORE FEATURES (Context, Gen, Debug, Refactor, Terminal) */}
              <section className="space-y-12 pt-8">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Layers className="w-6 h-6 text-purple-500" /> Codebase Understanding
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    A normal browser chatbot might only see: <em>&quot;Fix this React error.&quot;</em> Cursor, however, works directly with the project context, allowing it to find related files, trace dependencies, locate implementations, and make intelligent changes across multiple files.
                  </p>
                  <p className="text-xs text-zinc-500 italic">Note: Context windows are large, but do not claim unlimited understanding. Massive codebases still require precise prompting.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <FileCode className="w-6 h-6 text-blue-500" /> Code Generation & Editing
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Cursor generates components, APIs, forms, tests, and configuration files efficiently. Giving project-specific constraints yields significantly better results.
                  </p>
                  <div className="bg-zinc-900 text-zinc-300 p-4 rounded-xl font-mono text-sm border border-zinc-800">
                    <span className="text-blue-400 mr-2">Prompt:</span> &quot;Create a responsive pricing section using the existing card components and typography in this project.&quot;
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Bug className="w-6 h-6 text-red-500" /> Debugging
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Debugging with Cursor follows a natural workflow: encounter an error, ask Cursor to inspect the relevant code, let it find the likely cause, apply the fix, and run the test.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30 text-sm font-mono text-red-800 dark:text-red-300 mb-4">
                    &quot;Users are being redirected to /login after successful authentication. Find the cause and fix it without changing the authentication flow.&quot;
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">Developers must always inspect the diffs before accepting them.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-teal-500" /> Refactoring
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Cursor excels at improving existing code. You can ask it to remove duplication, break down massive components, improve typings, or simplify logic.
                  </p>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg text-sm font-mono text-zinc-700 dark:text-zinc-300 mb-3 border border-zinc-200 dark:border-zinc-700">
                    &quot;Refactor this component without changing its current behavior or UI.&quot;
                  </div>
                  <div className="flex gap-2 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                    <span>Preserve behavior</span> + <span>Targeted changes</span> + <span>Review diff</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Terminal className="w-6 h-6 text-green-500" /> Terminal & Development Workflow
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Cursor Agent can interact directly with the terminal to install dependencies, run dev servers, execute tests, and inspect stack traces.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border-l-4 border-amber-500">
                    <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                      <strong>Important:</strong> Users must understand what commands do before allowing the AI to execute potentially destructive operations (like deleting databases or forcing git pushes). Do not encourage blindly running unknown commands.
                    </p>
                  </div>
                </div>
              </section>

              {/* MODES COMPARISON */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Plan / Ask / Debug Modes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl">
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2"><MessageSquare className="w-4 h-4 text-blue-500"/> ASK</h4>
                    <p className="text-xs font-bold text-zinc-500 uppercase mb-2">Best for:</p>
                    <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                      <li>Understanding code</li>
                      <li>General questions</li>
                      <li>Exploration</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl">
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2"><Compass className="w-4 h-4 text-teal-500"/> PLAN</h4>
                    <p className="text-xs font-bold text-zinc-500 uppercase mb-2">Best for:</p>
                    <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                      <li>Large changes</li>
                      <li>Architecture design</li>
                      <li>Before implementation</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/30 p-5 rounded-2xl">
                    <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-3 flex items-center gap-2"><Sparkles className="w-4 h-4 text-indigo-500"/> AGENT</h4>
                    <p className="text-xs font-bold text-indigo-400 uppercase mb-2">Best for:</p>
                    <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
                      <li>Building net-new</li>
                      <li>Editing files</li>
                      <li>Multi-file changes</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl">
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2"><Bug className="w-4 h-4 text-red-500"/> DEBUG</h4>
                    <p className="text-xs font-bold text-zinc-500 uppercase mb-2">Best for:</p>
                    <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                      <li>Difficult issues</li>
                      <li>Reproducing bugs</li>
                      <li>Finding root causes</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* CLOUD AGENTS & MULTI-AGENT */}
              <section className="bg-zinc-900 text-white p-8 rounded-3xl shadow-2xl border border-zinc-800">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-cyan-400" /> Cloud Agents
                </h2>
                <p className="text-zinc-300 mb-6">
                  Cursor&apos;s background cloud agents can run coding tasks remotely. You hand off a task, the agent provisions a cloud environment, works on the problem, and returns with changes and validation artifacts (like screenshots or logs).
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-400 bg-zinc-800 p-4 rounded-xl mb-6">
                  <span>Your task</span> &rarr;
                  <span>Cloud environment</span> &rarr;
                  <span>Agent works</span> &rarr;
                  <span className="text-cyan-400">Changes + Artifacts</span> &rarr;
                  <span className="text-white">Review</span>
                </div>
                
                <div className="border-t border-zinc-700 pt-6">
                  <h3 className="text-xl font-bold mb-3">Multi-Agent Development</h3>
                  <p className="text-sm text-zinc-300 mb-4">
                    The future of AI IDEs involves multiple agents running in parallel. Imagine one agent building UI, another writing unit tests, a third investigating a bug, and you—the developer—acting as the technical lead coordinating and reviewing their work.
                  </p>
                  <p className="text-xs text-zinc-500 italic">
                    Note: This adds workflow complexity. Cloud Agent availability and limits are subject to specific Cursor pricing plans.
                  </p>
                </div>
              </section>

              {/* AUDIENCES */}
              <section className="space-y-10">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Who is Cursor For?</h2>
                
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Cursor for Beginners & Students</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-sm">
                    Beginners should <strong>not</strong> start by asking, <em>&quot;Build me a complete startup.&quot;</em> Instead, use it to accelerate learning. Ask it to explain unfamiliar files, build one component at a time, or debug specific assignments.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono bg-zinc-100 dark:bg-zinc-800/50 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 mb-3">
                    <span>Learn basics</span> &rarr; <span>Build small project</span> &rarr; <span>Use Cursor</span> &rarr; <span>Read generated code</span> &rarr; <span>Test</span> &rarr; <span className="text-indigo-600 dark:text-indigo-400 font-bold">Improve</span>
                  </div>
                  <p className="text-sm font-mono bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/30 text-indigo-800 dark:text-indigo-300">
                    &quot;Explain this React component line by line, then suggest one small improvement.&quot;
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Cursor for Developers</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-2 text-sm">
                    Experienced engineers use Cursor for feature development, bug fixing, refactoring, generating boilerplate, writing tests, and updating documentation. It drastically reduces repetitive engineering tasks while keeping the developer in full control of the architecture.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Cursor for Building Projects</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-sm">
                    When building full applications (like a Next.js portfolio or a startup MVP), break the architecture down. 
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-bold text-zinc-500 mb-4">
                    <span>Idea</span> &rarr; <span>Requirements</span> &rarr; <span>Plan</span> &rarr; <span>Build</span> &rarr; <span>Test</span> &rarr; <span>Debug</span> &rarr; <span>Deploy</span>
                  </div>
                </div>
              </section>

              {/* REAL USE CASES */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Real Use Cases</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { task: "Build a React component", prompt: "Create a responsive sidebar navigation using Tailwind and Lucide icons.", why: "Scaffolds standard UI instantly." },
                    { task: "Fix a TypeScript error", prompt: "Fix the type mismatch in the user profile interface.", why: "Infers types from surrounding context." },
                    { task: "Debug API integration", prompt: "The POST request to /api/users is failing with a 500 error. Why?", why: "Traces logic across frontend and backend files." },
                    { task: "Refactor large component", prompt: "Extract the form logic from this component into a custom hook.", why: "Handles tedious state-moving safely." },
                    { task: "Write tests", prompt: "Write unit tests for the authentication utility functions.", why: "Generates boilerplate mocks easily." },
                    { task: "Improve accessibility", prompt: "Update this form to ensure it meets ARIA standards.", why: "Applies standard best practices quickly." }
                  ].map((uc, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col h-full hover:border-indigo-500/50 transition-colors">
                      <h4 className="font-bold text-zinc-900 dark:text-white mb-2 text-sm">{uc.task}</h4>
                      <p className="text-xs font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded mb-3 flex-grow border border-indigo-100 dark:border-indigo-800/30">
                        &quot;{uc.prompt}&quot;
                      </p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium"><strong>Why it helps:</strong> {uc.why}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* HOW TO PROMPT */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">How to Prompt Cursor</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Agentic coding requires structured prompting. A vague prompt yields fragile code.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">The Formula</h3>
                    <div className="flex flex-col gap-2 font-mono text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                      <span className="font-bold">Goal</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Context</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Files to focus on</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Constraints</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Expected result</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">Excellent Prompt</h3>
                    <p className="text-sm font-mono bg-zinc-900 p-4 rounded-xl text-zinc-300 border border-zinc-700 leading-relaxed">
                      &quot;Add a responsive mobile navigation to this Next.js website. Use the existing navbar component. Do not change the desktop design. Use Tailwind CSS. Keep the current color system. First explain your approach, then implement it.&quot;
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Constraints prevent the AI from importing unnecessary libraries or rewriting functioning code. 
                  <Link href="/ai-hub/basics/what-is-prompt-engineering" className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1">Learn more about Prompt Engineering.</Link>
                </p>
              </section>

              {/* EXAMPLE WORKFLOW */}
              <section className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Example Workflow</h2>
                <div className="mb-6 bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 inline-block">
                  <span className="text-xs font-bold text-indigo-500 uppercase block mb-1">The Task</span>
                  <span className="font-mono text-sm text-zinc-900 dark:text-white">&quot;Add a contact form to my portfolio.&quot;</span>
                </div>
                <ol className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300 relative border-l-2 border-indigo-200 dark:border-indigo-800 ml-3 pl-6">
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-indigo-300 dark:border-indigo-700">1</span>
                    <strong>Ask Cursor to inspect the project.</strong> Identify existing UI components.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-indigo-300 dark:border-indigo-700">2</span>
                    <strong>Ask it to create a plan.</strong> How will it handle state and API routes?
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-indigo-300 dark:border-indigo-700">3</span>
                    <strong>Review the plan.</strong> Make manual adjustments if necessary.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-indigo-300 dark:border-indigo-700">4</span>
                    <strong>Let Agent implement the feature.</strong> It writes the frontend component and backend route.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-indigo-300 dark:border-indigo-700">5</span>
                    <strong>Run the project.</strong> Test the form manually in the browser.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-indigo-300 dark:border-indigo-700">6</span>
                    <strong>Ask Cursor to fix errors.</strong> Paste any server logs into the chat.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[33px] top-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-indigo-300 dark:border-indigo-700">7</span>
                    <strong>Review the final diff.</strong> Accept the changes and commit.
                  </li>
                </ol>
                <p className="mt-6 text-sm font-medium text-indigo-900 dark:text-indigo-300 bg-indigo-100/50 dark:bg-indigo-900/30 p-3 rounded-lg text-center">
                  Takeaway: AI does the heavy lifting, but the developer remains in control.
                </p>
              </section>

              {/* COMPARISONS */}
              <section className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Cursor vs GitHub Copilot</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Feature</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Cursor</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">GitHub Copilot</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Core Philosophy</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">AI-first environment; AI acts as an autonomous agent.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">AI assistant plugged into your existing IDE (VS Code/Visual Studio).</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Codebase Context</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Deep integration and file searching natively built-in.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Strong enterprise GitHub integration, improving workspace context.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Multi-file Edits</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Can autonomously edit multiple files at once.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Historically focused on single-file suggestions, though evolving rapidly.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm mt-3 text-zinc-600 dark:text-zinc-400 italic">The best choice depends entirely on your enterprise requirements and workflow preferences.</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Cursor vs Claude Code</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Focus</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Cursor</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Claude Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Environment</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Full Visual Studio Code fork (GUI).</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Command-line interface (CLI) terminal tool.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Beginner Friendliness</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Very high. Visual diffs and chat UI.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Requires comfort with terminal workflows.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm mt-3 text-zinc-600 dark:text-zinc-400">Cursor is an AI-first editor, while Claude Code is primarily a coding agent experience designed exclusively for the terminal.</p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Cursor vs ChatGPT</h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                    <Link href="/ai-hub/tools/chatgpt" className="text-indigo-600 dark:text-indigo-400 hover:underline font-bold">ChatGPT</Link> is excellent for explaining concepts, planning architecture, and discussing code logic in a vacuum.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                    <strong>Cursor</strong> is designed to work directly inside your development environment, reading your actual files and executing the plan directly. Together, they complement each other perfectly.
                  </p>
                </div>
              </section>

              {/* DESIGN THE THOUGHT WORKFLOW */}
              <section className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">From Learning AI to Building With AI</h3>
                <p className="text-sm text-indigo-800 dark:text-indigo-400 mb-4">
                  Design The Thought AI Hub is designed to help beginners learn core concepts like <Link href="/ai-hub/basics/what-are-ai-agents" className="underline hover:text-indigo-600">Agents</Link> and <Link href="/ai-hub/basics/what-are-large-language-models" className="underline hover:text-indigo-600">LLMs</Link>. Cursor is the perfect example of taking those concepts out of the browser and putting them directly into a practical software development workflow.
                </p>
              </section>

              {/* LIMITATIONS & RESPONSIBLE AI */}
              <section className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" /> Limitations & Responsible AI
                  </h2>
                  <ul className="text-sm text-zinc-700 dark:text-zinc-300 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 list-disc pl-4">
                    <li>AI can hallucinate APIs that do not exist.</li>
                    <li>Generated code can introduce subtle bugs.</li>
                    <li>Security vulnerabilities can be introduced.</li>
                    <li>AI may misunderstand complex requirements.</li>
                    <li>Tests are still absolutely necessary.</li>
                  </ul>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="text-sm text-red-800 dark:text-red-200 font-bold">
                      Developers remain entirely responsible for deployed software. Never blindly accept AI-generated code in production systems without review.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "What is Cursor?", a: "Cursor is an AI-first code editor designed to help developers write, edit, and debug software using advanced AI agents." },
                    { q: "Is Cursor an AI code editor?", a: "Yes, it is a fork of VS Code, meaning it feels immediately familiar but has powerful AI tools deeply integrated into the interface." },
                    { q: "Is Cursor free?", a: "Cursor offers a freemium model. There is a free tier for basic usage, and paid tiers for access to premium models and Cloud Agents." },
                    { q: "What is Cursor Agent?", a: "An autonomous mode where the AI can plan changes, search the codebase, edit multiple files, and run terminal commands to complete a task." },
                    { q: "What is agentic coding?", a: "The process of directing an AI to perform coding tasks autonomously (planning, writing, and testing) rather than typing out every line yourself." },
                    { q: "Can Cursor build websites?", a: "Yes, it is highly effective at scaffolding React, Next.js, and HTML/CSS projects when given clear instructions." },
                    { q: "Can Cursor fix bugs?", a: "Yes, you can paste error logs into the chat or highlight broken code, and Cursor will inspect the context to suggest and apply fixes." },
                    { q: "Can Cursor edit multiple files?", a: "Yes, Agent mode is capable of coordinating logic changes across several interconnected files simultaneously." },
                    { q: "Can Cursor understand an entire codebase?", a: "It uses advanced search and retrieval to understand relevant parts of your project, though massive enterprise monoliths still require guided prompting." },
                    { q: "Can beginners use Cursor?", a: "Yes, it's fantastic for beginners, provided they use it to learn and explain code, rather than generating entire applications they don't understand." },
                    { q: "Is Cursor better than GitHub Copilot?", a: "They serve different workflows. Copilot is an excellent assistant within your existing IDE; Cursor is an entirely new AI-first IDE." },
                    { q: "Is Cursor better than ChatGPT for coding?", a: "For actual implementation, yes. Cursor applies changes directly to your files, whereas ChatGPT requires copying and pasting." },
                    { q: "What are Cursor Cloud Agents?", a: "Remote instances where Cursor can run complex, long-running agent tasks in the background without tying up your local machine." },
                    { q: "Can Cursor replace a developer?", a: "No. It is a powerful tool that makes developers faster, but it still requires a human to architect, review, test, and deploy the logic securely." },
                    { q: "Is Cursor good for students?", a: "Yes, it is an incredible tutor. Students can highlight confusing syntax and ask, 'Explain exactly how this loop works.'" }
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
                  <li><a href="https://cursor.com/features" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center">Cursor Features & Capabilities <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://docs.cursor.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center">Official Cursor Documentation <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://cursor.com/pricing" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center">Cursor Pricing Details <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                </ul>
              </section>

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* QUICK VERDICT */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-indigo-500/5 relative">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-500" /> Quick Verdict
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                  Cursor is one of the most interesting AI-first development environments for developers who want AI to participate directly in the software-building process rather than simply provide code suggestions.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Best for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Developers & Engineers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Coding students</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Web developers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Startup builders</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> People building with AI</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Not ideal for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> People who do not work with code</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Simple chatbot requirements</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Beginners expecting unreviewed perfect software</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2">Design The Thought Editorial Score</div>
                  <div className="flex text-amber-400 mb-1">
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-zinc-500 italic">This is NOT an official Cursor rating.</p>
                </div>
              </div>

              {/* EDITORIAL TAKE */}
              <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-800/30">
                <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-200 mb-4">Design The Thought Take</h3>
                <p className="text-sm text-indigo-800 dark:text-indigo-300 mb-4 italic">
                  Cursor is particularly interesting because it moves AI from a chat window directly into the development workflow.
                </p>
                <div className="space-y-4 text-sm text-indigo-900 dark:text-indigo-300">
                  <div>
                    <strong className="block mb-1">What stands out:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>AI-first development experience</li>
                      <li>Strong agent workflows</li>
                      <li>Multi-file editing</li>
                      <li>Superb codebase context</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block mb-1">Keep in mind:</strong>
                    <ul className="list-disc pl-4 space-y-1 text-indigo-800/80 dark:text-indigo-300/80">
                      <li>AI is not infallible</li>
                      <li>Test and review everything</li>
                      <li>Large autonomous tasks need strict supervision</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-indigo-400 mt-4 text-center">Design The Thought Editorial Take</p>
              </div>

              {/* PROS & CONS */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <div className="mb-6">
                  <h3 className="font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Pros
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>+ Strong AI-first development workflow</li>
                    <li>+ Agent can work across multiple files</li>
                    <li>+ Retains massive codebase context</li>
                    <li>+ Can run and verify terminal commands</li>
                    <li>+ Unmatched for debugging & refactoring</li>
                    <li>+ Cloud Agent workflows expand automation</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Cons
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>- AI-generated code will contain bugs</li>
                    <li>- Complex tasks require human supervision</li>
                    <li>- Usage limits and premium models paywalled</li>
                    <li>- Beginners can become dependent</li>
                  </ul>
                </div>
              </div>

              {/* PRICING */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Pricing Overview</h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-4">
                  Cursor offers free/freemium and paid plans, with usage limits and premium AI model access varying heavily by tier.
                </p>
                <p className="text-xs text-zinc-500 mb-4 italic">
                  Pricing, model availability, and usage limits can change over time.
                </p>
                <a href="https://cursor.com/pricing" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 text-center rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-sm font-bold transition-colors">
                  Check Current Pricing
                </a>
              </div>

              {/* HOW TO GET STARTED */}
              <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">How to Get Started</h3>
                <ol className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 mb-6 font-medium">
                  <li>1. Install Cursor</li>
                  <li>2. Open an existing project (or make one)</li>
                  <li>3. Let Cursor index the project</li>
                  <li>4. Start with a small task</li>
                  <li>5. Review the changes visually</li>
                  <li>6. Run and test the application</li>
                </ol>
                <div className="bg-white dark:bg-zinc-900 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <span className="text-xs font-bold text-indigo-500 uppercase block mb-1">First Prompt Idea</span>
                  <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                    &quot;Explain the structure of this project and tell me which files I should understand first.&quot;
                  </p>
                </div>
              </div>

              {/* FINAL VERDICT */}
              <div className="bg-zinc-900 text-white p-6 rounded-3xl border border-zinc-800 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-center">Is Cursor Worth Using?</h3>
                <p className="text-zinc-300 text-sm text-center mb-6">
                  Yes — especially if you build software and want AI to become part of your actual development workflow. Its biggest advantage is helping you move from an idea to implementation, debugging, and iteration.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">AI Coding</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Agent Workflow</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Codebase Context</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Beginner Friendly</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Debugging</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Advanced Dev</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-4 text-center italic">Design The Thought Editorial Scores. NOT official ratings.</p>
              </div>

            </div>
          </div>

          {/* RELATED CONTENT */}
          <div className="border-t border-zinc-200 dark:border-white/10 pt-12 pb-16">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Related Content</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/ai-hub/basics/what-are-ai-agents" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">What are AI Agents?</h4>
              </Link>
              <Link href="/ai-hub/basics/what-is-prompt-engineering" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Prompt Engineering</h4>
              </Link>
              <Link href="/ai-hub/basics/what-are-large-language-models" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">What Are LLMs?</h4>
              </Link>
              <Link href="/ai-hub/tools/chatgpt" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">ChatGPT Review</h4>
              </Link>
              <Link href="/ai-hub/tools/claude" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Claude Review</h4>
              </Link>
              <Link href="/ai-hub/tools/gemini" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Gemini Review</h4>
              </Link>
              <Link href="/ai-hub/tools/perplexity" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Perplexity Review</h4>
              </Link>
              <Link href="/ai-hub/tools/canva" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Canva Review</h4>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
