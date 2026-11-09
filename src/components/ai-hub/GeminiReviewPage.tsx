import Link from "next/link";
import Navbar from "@/components/ai-hub/AIHubNavbar";
import Footer from "@/components/ai-hub/AIHubFooter";
import { 
  ChevronRight, ChevronLeft, ExternalLink, Star, CheckCircle2, XCircle, 
  Info, PenTool, GraduationCap, Code, Search, Image as ImageIcon, 
  FileText, Zap, AlertTriangle, Box, Link2, 
  Layers, MessageSquare, MonitorPlay, FileImage, BrainCircuit
} from "lucide-react";

export default function GeminiReviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Gemini",
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
            <span className="text-zinc-900 dark:text-white truncate">Gemini</span>
          </nav>

          {/* HERO SECTION */}
          <div className="mb-12 border-b border-zinc-200/60 dark:border-white/10 pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10">
                    AI Assistant / Productivity / Multimodal AI
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                    Google
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
                  Gemini
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mb-8 leading-relaxed">
                  Google&apos;s AI assistant for learning, writing, research, multimodal tasks and productivity across the Google ecosystem.
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
                    Pricing: Free + Paid Plans
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <a 
                    href="https://gemini.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold transition-all shadow-lg shadow-blue-500/25 text-lg"
                  >
                    Visit Gemini <ExternalLink className="w-5 h-5" />
                  </a>
                  <Link 
                    href="/ai-hub/tools" 
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold transition-all text-lg"
                  >
                    Back to AI Tools
                  </Link>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> Features and availability may vary by plan, account, device and region.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
            <div className="lg:col-span-2 space-y-12">
              
              {/* WHAT IS GEMINI? */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">What is Gemini?</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none text-lg">
                  <p>
                    Gemini is Google&apos;s family of AI models and AI assistant experiences designed to work across text, images, files, voice and other inputs depending on the product and available features.
                  </p>
                  <p>
                    Instead of just processing text, Gemini is built to be truly &quot;multimodal.&quot; This means you can interact with it using various types of media simultaneously, and it seamlessly connects with existing Google Workspace applications to boost your productivity.
                  </p>
                </div>
              </section>

              {/* WHAT CAN GEMINI DO? */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">What can Gemini do?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <PenTool className="w-5 h-5" />, title: "Writing", desc: "Draft emails, outlines, and documents.", useCase: "Writing a polished cover letter." },
                    { icon: <GraduationCap className="w-5 h-5" />, title: "Learning", desc: "Explain concepts and create study plans.", useCase: "Explaining quantum physics simply." },
                    { icon: <Search className="w-5 h-5" />, title: "Research", desc: "Explore topics and summarize findings.", useCase: "Gathering sources for an essay." },
                    { icon: <ImageIcon className="w-5 h-5" />, title: "Image Understanding", desc: "Analyze and explain uploaded photos.", useCase: "Explaining a complex chart." },
                    { icon: <FileImage className="w-5 h-5" />, title: "Image Generation", desc: "Create new visuals from text prompts.", useCase: "Generating a blog post cover." },
                    { icon: <FileText className="w-5 h-5" />, title: "File Analysis", desc: "Read and extract data from documents.", useCase: "Summarizing a 50-page PDF." },
                    { icon: <Link2 className="w-5 h-5" />, title: "Google Workspace", desc: "Integrate directly with Docs, Drive, and Gmail.", useCase: "Summarizing your recent emails." },
                    { icon: <Layers className="w-5 h-5" />, title: "Deep Research", desc: "Multi-step, structured research capabilities.", useCase: "Creating a 10-page market report." },
                    { icon: <Box className="w-5 h-5" />, title: "Canvas", desc: "Interactive workspace for editing content.", useCase: "Refining a long-form article." },
                    { icon: <BrainCircuit className="w-5 h-5" />, title: "Gems", desc: "Customized assistants for specific tasks.", useCase: "A dedicated math tutor Gem." },
                    { icon: <MessageSquare className="w-5 h-5" />, title: "Voice", desc: "Engage in spoken, conversational interactions.", useCase: "Practicing a language hands-free." },
                    { icon: <MonitorPlay className="w-5 h-5" />, title: "Connected Apps", desc: "Interact with YouTube and Maps.", useCase: "Summarizing a YouTube video." },
                  ].map((feature, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl hover:border-blue-500/50 transition-colors shadow-sm">
                      <div className="flex items-center gap-3 mb-2 text-blue-600 dark:text-blue-400">
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

              {/* MULTIMODAL AI */}
              <section className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-800/30">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <ImageIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  Multimodal AI
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Gemini was built from the ground up to be multimodal. This means it natively understands and works with combinations of text, images, voice, files, and camera input simultaneously, making it incredibly powerful for mixed-media tasks.
                </p>
                
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
                  <p className="text-xs text-zinc-500 font-bold uppercase mb-2">Example Workflow</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-bold border border-blue-200 dark:border-blue-800/50">Upload:</span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-white">An image of a complex sales chart.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded text-xs font-bold border border-indigo-200 dark:border-indigo-800/50">Ask:</span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-white">&quot;Explain this chart in simple language and find the highest revenue month.&quot;</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 bg-white/50 dark:bg-black/20 p-2 rounded-lg"><CheckCircle2 className="w-4 h-4 text-green-500" /> Photo &rarr; Explanation</div>
                  <div className="flex items-center gap-2 bg-white/50 dark:bg-black/20 p-2 rounded-lg"><CheckCircle2 className="w-4 h-4 text-green-500" /> PDF &rarr; Summary</div>
                  <div className="flex items-center gap-2 bg-white/50 dark:bg-black/20 p-2 rounded-lg"><CheckCircle2 className="w-4 h-4 text-green-500" /> Screenshot &rarr; Troubleshooting</div>
                  <div className="flex items-center gap-2 bg-white/50 dark:bg-black/20 p-2 rounded-lg"><CheckCircle2 className="w-4 h-4 text-green-500" /> Image &rarr; Creative Analysis</div>
                </div>
                <p className="text-xs text-zinc-500 mt-4 italic">*Capabilities vary by product and availability.</p>
              </section>

              {/* GOOGLE ECOSYSTEM */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Link2 className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                  Google Workspace / Connected Apps
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  This is Gemini&apos;s main differentiator. It can connect directly with supported Google services and apps (depending on your account and availability) to seamlessly process your own data.
                </p>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {['Gmail', 'Google Drive', 'Google Docs', 'Google Calendar', 'Google Maps', 'YouTube'].map(app => (
                    <li key={app} className="bg-zinc-100 dark:bg-zinc-800/50 px-4 py-2 rounded-lg text-sm font-medium text-zinc-900 dark:text-zinc-200 text-center border border-zinc-200 dark:border-zinc-700">{app}</li>
                  ))}
                </ul>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                  <span className="text-xs font-bold uppercase text-zinc-500 block mb-2">Practical Prompt Example</span>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">&quot;Find the emails from my manager last week and summarize the main action items, then check my Drive for the related project brief.&quot;</p>
                </div>
              </section>

              {/* GEMINI FOR RESEARCH & DEEP RESEARCH */}
              <section className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Gemini for Research</h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Gemini is a powerful research assistant that excels at topic exploration, summarization, comparing information, and sourcing discovery. Because it is connected to Google Search, it can fetch current, up-to-date web information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Layers className="w-6 h-6 text-purple-500" /> Deep Research
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Deep Research is a specialized capability designed for multi-step research tasks that go far beyond a simple question. It autonomously searches, synthesizes, and compiles data over several minutes to produce structured reports.
                  </p>
                  <div className="bg-zinc-900 text-purple-400 p-4 rounded-2xl font-mono text-sm mb-4">
                    <span className="opacity-50 mr-2">Input:</span> &quot;Research the current AI content creation landscape, compare the top 3 tools by pricing, and organize the findings into a structured report.&quot;
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Question</span> &rarr;
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Research</span> &rarr;
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Gather information</span> &rarr;
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Synthesize</span> &rarr;
                    <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Report</span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-4 italic">Note: Availability and limits for Deep Research vary by plan.</p>
                </div>
              </section>

              {/* GEMINI FOR WRITING & CODING */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-indigo-500" /> For Writing
                  </h3>
                  <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2 list-disc pl-4">
                    <li>Drafting emails</li>
                    <li>Blog outlines</li>
                    <li>Rewriting and editing</li>
                    <li>Summarization</li>
                    <li>Brainstorming ideas</li>
                    <li>Social media content</li>
                    <li>Translation</li>
                  </ul>
                </div>

                <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-emerald-500" /> For Coding
                  </h3>
                  <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2 list-disc pl-4 mb-4">
                    <li>Explain complex code</li>
                    <li>Debug errors step-by-step</li>
                    <li>Generate boilerplate</li>
                    <li>Refactor functions</li>
                    <li>Analyze repositories (where supported)</li>
                  </ul>
                  <p className="text-xs text-amber-600 dark:text-amber-400 italic">Always test and verify generated code locally.</p>
                </div>
              </section>

              {/* GEMINI FOR STUDENTS */}
              <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-7 h-7 text-blue-500" />
                  Gemini for Students
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Gemini serves as a highly capable tutor. Use it for study plans, concept explanations, generating practice questions, summarizing long PDFs, creating flashcards, building quizzes, and aiding in academic research.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
                  <span>Topic</span> &rarr;
                  <span>Explanation</span> &rarr;
                  <span>Questions</span> &rarr;
                  <span>Practice</span> &rarr;
                  <span>Feedback</span>
                </div>
              </section>

              {/* IMAGES, CANVAS, GEMS, MEMORY */}
              <section className="space-y-10">
                
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Images & Creative Work</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Gemini offers impressive capabilities to generate new images from text prompts, edit existing visuals, analyze photos, brainstorm creative concepts, and assist in creative ideation. (Capabilities vary based on the specific account and tier).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Box className="w-6 h-6 text-indigo-500" /> Canvas
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Where available, Canvas serves as an interactive workspace directly next to the chat. It allows you to create, edit, and refine documents, code, study materials, or prototypes seamlessly without constantly regenerating the entire text in the chat feed.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <BrainCircuit className="w-6 h-6 text-purple-500" /> Gems
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    A Gem is a specialized, customized version of Gemini configured around a specific task or instruction set. You can build a &quot;Study Tutor&quot; Gem, a &quot;Coding Helper&quot; Gem, or a &quot;Writing Assistant&quot; Gem, allowing the AI to adopt a highly specific persona and workflow instantly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Personalization & Memory</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Gemini can provide a personalized experience through available settings, memory features, and connected Google account information. 
                  </p>
                  <p className="text-sm text-amber-600 dark:text-amber-400 mt-2 font-medium">
                    Important: Do not assume Gemini remembers everything you&apos;ve ever said. Memory constraints exist, and its ability to recall depends on settings, context windows, and feature availability.
                  </p>
                </div>

              </section>

              {/* HOW TO GET STARTED & GET BETTER RESULTS */}
              <section className="bg-zinc-900 text-white p-8 rounded-3xl mt-12 shadow-2xl">
                <h2 className="text-3xl font-bold mb-6">How to get started</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-4">The Workflow</h3>
                    <ol className="space-y-3 text-zinc-300 font-medium text-sm">
                      <li className="flex gap-3"><span className="text-blue-500">1.</span> Open Gemini and sign in</li>
                      <li className="flex gap-3"><span className="text-blue-500">2.</span> Define your goal clearly</li>
                      <li className="flex gap-3"><span className="text-blue-500">3.</span> Give context</li>
                      <li className="flex gap-3"><span className="text-blue-500">4.</span> Add files/images if needed</li>
                      <li className="flex gap-3"><span className="text-blue-500">5.</span> Review the response</li>
                      <li className="flex gap-3"><span className="text-blue-500">6.</span> Refine your prompt</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-4">Better Prompting</h3>
                    <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
                      <p className="text-xs text-red-400 uppercase font-bold mb-1">Weak Prompt:</p>
                      <p className="text-sm text-zinc-300 mb-4">&quot;Explain AI.&quot;</p>
                      <p className="text-xs text-green-400 uppercase font-bold mb-1">Better Prompt:</p>
                      <p className="text-sm text-zinc-300 font-mono">&quot;I&apos;m a BCA student learning AI from scratch. Explain AI in simple language, give me 3 real-world examples and then quiz me with 5 beginner questions.&quot;</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
                  <Link href="/ai-hub/basics/what-is-prompt-engineering" className="text-blue-400 hover:text-blue-300 font-bold inline-flex items-center">
                    Learn more about Prompt Engineering <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </section>

              {/* GEMINI VS CHATGPT VS CLAUDE */}
              <section className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Gemini vs ChatGPT</h2>
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
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Gemini natively integrates with Docs, Drive, and Gmail. ChatGPT does not.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">General-purpose use</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Both are extremely capable everyday productivity assistants.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Multimodal tasks</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Gemini was built specifically to process video, images, and audio seamlessly alongside text.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Coding & Research</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Both offer strong coding, document, and Deep Research capabilities depending on the plan.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Gemini vs Claude</h2>
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
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Many users prefer Claude&apos;s writing tone for creative and long-form outputs.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Long documents</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Both have massive context windows, making them excellent for analyzing large files.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">General productivity</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Gemini often edges out Claude for users who rely heavily on Google Workspace integrations.</td>
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
                    { task: "Summarize Gmail content", prompt: "Find the emails about the Q3 budget and summarize the key decisions." },
                    { task: "Analyze a PDF", prompt: "Extract all statistical data from this uploaded annual report." },
                    { task: "Research a topic", prompt: "Compare the specs of the top 3 electric SUVs currently on the market." },
                    { task: "Explain an image", prompt: "What architectural style is the building in this photo?" },
                    { task: "Create study notes", prompt: "Create detailed study notes based on this textbook chapter." },
                    { task: "Plan a trip", prompt: "Plan a 4-day itinerary for Tokyo with hotel recommendations on Maps." },
                    { task: "Draft an email", prompt: "Draft a polite email declining this meeting invitation." },
                    { task: "Brainstorm content", prompt: "Give me 5 catchy titles for a video about productivity apps." },
                    { task: "Analyze a chart", prompt: "What is the primary trend shown in this line graph?" },
                    { task: "Study for an exam", prompt: "Quiz me on modern European history." }
                  ].map((uc, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{uc.task}</h4>
                      <p className="text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10 p-2 rounded mb-0">
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
                  Gemini can occasionally produce hallucinations or outdated information. Users must be aware of:
                </p>
                <ul className="text-sm text-red-800 dark:text-red-300 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-0 list-disc pl-4">
                  <li>Inconsistent feature availability across regions</li>
                  <li>Privacy considerations with sensitive data</li>
                  <li>Connected-app permissions required for Workspace</li>
                  <li>The risk of over-reliance on AI outputs</li>
                  <li>The absolute necessity to verify important facts</li>
                </ul>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "What is Gemini?", a: "Google's family of AI models and assistant experiences designed for text, images, and voice interaction." },
                    { q: "Is Gemini free?", a: "Yes, there is a free tier available, as well as paid Google AI plans offering advanced features." },
                    { q: "What can Gemini do?", a: "It can draft content, summarize documents, analyze images, generate code, and connect with Google Workspace apps." },
                    { q: "Is Gemini better than ChatGPT?", a: "It depends on your workflow. Gemini is often preferred by those deeply embedded in the Google ecosystem." },
                    { q: "Can Gemini analyze images?", a: "Yes, its multimodal capabilities allow it to process and explain uploaded photos and charts." },
                    { q: "Can Gemini analyze files?", a: "Yes, you can upload PDFs and documents for summarization and analysis." },
                    { q: "What is Deep Research?", a: "A multi-step, autonomous research feature that synthesizes large amounts of data into structured reports." },
                    { q: "What is Gemini Canvas?", a: "An interactive workspace for creating and refining documents and code alongside the chat." },
                    { q: "What are Gems?", a: "Customized versions of Gemini configured around specific tasks, like a writing assistant or study tutor." },
                    { q: "Can Gemini connect to Google apps?", a: "Yes, it can integrate with Gmail, Drive, Docs, Calendar, and Maps, depending on your account permissions." },
                    { q: "Is Gemini good for students?", a: "Yes, it's highly effective for creating study plans, explaining concepts, and building quizzes." },
                    { q: "Can Gemini write code?", a: "Yes, it is capable of generating, explaining, and debugging code in multiple languages." },
                    { q: "Is Gemini always accurate?", a: "No. Like all AI, it can hallucinate or make mistakes, so information should always be verified." }
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
                  <li><a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">Google Gemini Official Page <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://support.google.com/gemini" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">Google Gemini Help Center <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                </ul>
              </section>

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* QUICK VERDICT */}
              {/* NOTE: Kept in normal document flow (no sticky/fixed) to prevent overlaps */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-blue-500/5">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" /> Quick Verdict
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                  Gemini is particularly useful for people already using Google services and for workflows involving text, images, files, research and connected productivity tools.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Best for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Google Workspace users</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Students</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Researchers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Creators</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Professionals</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Multimodal tasks</li>
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
                  <p className="text-xs text-zinc-500 italic">This is The Design Tech&apos;s editorial assessment.</p>
                </div>
              </div>

              {/* EDITORIAL TAKE */}
              <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-100 dark:border-blue-800/30">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-4">The Design Tech Take</h3>
                <div className="space-y-4 text-sm text-blue-800 dark:text-blue-300">
                  <div>
                    <strong className="block mb-1">What stands out:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Google ecosystem integration</li>
                      <li>Multimodal capabilities</li>
                      <li>Research features</li>
                      <li>Useful learning workflows</li>
                      <li>Broad productivity use cases</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block mb-1">Keep in mind:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Features vary by plan/account/region</li>
                      <li>AI responses can be inaccurate</li>
                      <li>Important information should be verified</li>
                      <li>Connected services require appropriate permissions</li>
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
                    <li>+ Strong Google ecosystem integration</li>
                    <li>+ Multimodal capabilities</li>
                    <li>+ Useful research features</li>
                    <li>+ Strong productivity workflows</li>
                    <li>+ Helpful for students and creators</li>
                    <li>+ Broad range of capabilities</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Cons
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>- Feature availability varies</li>
                    <li>- Usage limits apply</li>
                    <li>- AI can make mistakes</li>
                    <li>- Some advanced features require paid access</li>
                    <li>- Users should review important outputs</li>
                  </ul>
                </div>
              </div>

              {/* PRICING */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Pricing Overview</h3>
                <ul className="space-y-3 mb-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-center justify-between">
                    <span className="font-medium text-zinc-900 dark:text-white">Free Access</span>
                    <span className="text-zinc-500">Available</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium text-zinc-900 dark:text-white">Paid Google AI Plans</span>
                    <span className="text-zinc-500">Available</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium text-zinc-900 dark:text-white">Organizational offerings</span>
                    <span className="text-zinc-500">Available</span>
                  </li>
                </ul>
                <p className="text-xs text-zinc-500 mb-4">
                  Plans, limits and available features can change. Check Google&apos;s official Gemini pricing information for current details.
                </p>
              </div>

              {/* FINAL VERDICT */}
              <div className="bg-zinc-900 text-white p-6 rounded-3xl border border-zinc-800 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-center">Is Gemini Worth Using?</h3>
                <p className="text-zinc-300 text-sm text-center mb-6">
                  Gemini is a strong option for users who want an AI assistant closely connected to Google&apos;s ecosystem and who regularly work with text, images, files, research and productivity workflows.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Multimodal</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Research</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Learning</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Productivity</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
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
              <Link href="/ai-hub/basics/what-are-large-language-models" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-blue-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">What Are LLMs?</h4>
                <p className="text-sm text-zinc-500 mt-1">Understand the technology behind Gemini.</p>
              </Link>
              <Link href="/ai-hub/basics/what-is-prompt-engineering" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-blue-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Prompt Engineering</h4>
                <p className="text-sm text-zinc-500 mt-1">Learn how to communicate with AI effectively.</p>
              </Link>
              <Link href="/ai-hub/basics/what-is-artificial-intelligence" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-blue-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">What Is AI?</h4>
                <p className="text-sm text-zinc-500 mt-1">A beginner-friendly guide to artificial intelligence.</p>
              </Link>
              <Link href="/ai-hub/basics/what-is-generative-ai" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-blue-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Generative AI</h4>
                <p className="text-sm text-zinc-500 mt-1">Explore the broader landscape of AI generation.</p>
              </Link>
              <Link href="/ai-hub/basics/what-are-ai-agents" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-blue-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">What Are AI Agents?</h4>
                <p className="text-sm text-zinc-500 mt-1">Learn how models use tools and autonomy.</p>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
