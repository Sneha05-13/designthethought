import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ChevronRight, ChevronLeft, ExternalLink, Star, CheckCircle2, XCircle, 
  Info, FileText, Zap, AlertTriangle, Layers, 
  MessageSquare, BookOpen, LibraryBig, Layout, Wand2, Palette, Image as ImageIcon,
  Video, Code, FileSpreadsheet, PenTool, CheckSquare, Sparkles, MonitorPlay, Type
} from "lucide-react";

export default function CanvaReviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a]">
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Canva",
            applicationCategory: "Design / AI / Content Creation"
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
            <span className="text-zinc-900 dark:text-white truncate">Canva</span>
          </nav>

          {/* HERO SECTION */}
          <div className="mb-12 border-b border-zinc-200/60 dark:border-white/10 pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10">
                    AI Design / Content Creation / Visual Design
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
                  Canva
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mb-8 leading-relaxed">
                  An all-in-one visual creation platform with AI tools for designing, writing, editing and creating content.
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
                    href="https://www.canva.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold transition-all shadow-lg shadow-cyan-500/25 text-lg"
                  >
                    Visit Canva <ExternalLink className="w-5 h-5" />
                  </a>
                  <Link 
                    href="/ai-hub/tools" 
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold transition-all text-lg"
                  >
                    Back to AI Tools
                  </Link>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> Features, AI access and usage limits may vary by plan.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
            <div className="lg:col-span-2 space-y-12">
              
              {/* WHAT IS CANVA? */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">What is Canva?</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none text-lg mb-6">
                  <p>
                    Canva is a visual communication and design platform that lets users create a massive variety of content, including social media posts, presentations, posters, videos, documents, websites, logos, and branded marketing materials.
                  </p>
                  <p>
                    While it started as a template-driven design tool, the introduction of AI has fundamentally expanded the Canva workflow. 
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono mt-6">
                  <div className="bg-zinc-100 dark:bg-zinc-800/50 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700">
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2"><Layout className="w-4 h-4"/> Traditional Canva</h4>
                    <div className="flex flex-col gap-1 text-zinc-600 dark:text-zinc-400">
                      <span>Template / Blank Design</span><span className="text-zinc-400">&darr;</span>
                      <span>Manual Editing</span><span className="text-zinc-400">&darr;</span>
                      <span className="text-zinc-900 dark:text-white font-bold">Export</span>
                    </div>
                  </div>
                  <div className="bg-cyan-50 dark:bg-cyan-900/10 p-5 rounded-2xl border border-cyan-200 dark:border-cyan-800/50">
                    <h4 className="font-bold text-cyan-900 dark:text-cyan-400 mb-3 flex items-center gap-2"><Sparkles className="w-4 h-4"/> AI-Assisted Canva</h4>
                    <div className="flex flex-col gap-1 text-cyan-800 dark:text-cyan-300">
                      <span>Idea / Prompt</span><span className="text-cyan-600/50">&darr;</span>
                      <span>Generate</span><span className="text-cyan-600/50">&darr;</span>
                      <span>Edit</span><span className="text-cyan-600/50">&darr;</span>
                      <span>Customize & Brand</span><span className="text-cyan-600/50">&darr;</span>
                      <span className="text-cyan-900 dark:text-cyan-200 font-bold">Export / Publish</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* WHY CANVA IS DIFFERENT */}
              <section className="bg-gradient-to-br from-zinc-50 to-cyan-50 dark:from-zinc-900 dark:to-cyan-900/10 p-8 rounded-3xl border border-zinc-200 dark:border-cyan-800/30">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Why Canva is Different</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Canva combines AI features directly within a powerful visual editor containing templates, design elements, and content workflows. This means users can generate something with AI and then manually edit individual design elements immediately.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3"><Palette className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Design:</strong> Drag-and-drop intuitive editor.</span></div>
                  <div className="flex items-start gap-3"><Sparkles className="w-5 h-5 text-purple-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>AI creation:</strong> Generate from prompts.</span></div>
                  <div className="flex items-start gap-3"><Type className="w-5 h-5 text-blue-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>AI writing:</strong> Built-in text generation.</span></div>
                  <div className="flex items-start gap-3"><ImageIcon className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Image generation:</strong> Create custom visuals.</span></div>
                  <div className="flex items-start gap-3"><Video className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Video creation:</strong> AI-assisted video editing.</span></div>
                  <div className="flex items-start gap-3"><MessageSquare className="w-5 h-5 text-pink-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Social content:</strong> Optimized for all platforms.</span></div>
                  <div className="flex items-start gap-3"><Layout className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Presentations:</strong> Deck generation & styling.</span></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Branding:</strong> Strict brand kit application.</span></div>
                </div>
              </section>

              {/* CANVA AI */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Canva AI</h2>
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm mb-6">
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Think of Canva AI as a conversational creative workflow. You can start with an idea, a prompt, a rough concept, a goal, or even existing content, and refine the result through conversation and manual editing.
                  </p>
                  <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 mb-4">
                    <span className="text-xs font-bold uppercase text-zinc-500 block mb-2">Example Concept</span>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">&quot;I need an Instagram launch post for my new digital planner. Make it minimal, premium and targeted at students.&quot;</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Generate</span> &rarr;
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Review</span> &rarr;
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Edit</span> &rarr;
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Change layout</span> &rarr;
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Adjust text</span> &rarr;
                    <span className="bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 px-2 py-1 rounded">Apply brand</span> &rarr;
                    <span className="bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 px-2 py-1 rounded border border-cyan-200 dark:border-cyan-700">Export</span>
                  </div>
                </div>
                <p className="text-sm text-amber-600 dark:text-amber-400 italic">
                  Important: Canva is rapidly iterating its AI capabilities. Distinguish current features from older &quot;Magic Studio&quot; functionality, as tools are continually consolidated into the core AI workflow.
                </p>
              </section>

              {/* MAGIC STUDIO & CORE FEATURES */}
              <section className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                    <Wand2 className="w-6 h-6 text-purple-500" /> Magic Studio
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Magic Studio is Canva&apos;s collection of AI-powered creative tools built directly into the editor. Examples include Magic Write, Magic Design, Magic Edit, Magic Eraser, Magic Animate, AI background tools, and native AI image generation.
                  </p>
                  <p className="text-xs text-zinc-500 italic">Note: Available tools and usage limits can change over time. Not all features are available on every plan.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                    <Layout className="w-6 h-6 text-indigo-500" /> AI-Powered Design
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Canva can generate complete designs from a simple prompt—perfect for Instagram posts, presentations, posters, flyers, and social campaigns. 
                  </p>
                  <div className="bg-zinc-900 text-purple-400 p-4 rounded-2xl font-mono text-sm mb-4">
                    <span className="opacity-50 mr-2">Input:</span> &quot;Create a modern Instagram carousel explaining 5 beginner AI tools. Use a clean purple and white visual style.&quot;
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Crucially, the resulting design is fully editable. You can click on the text, move the images, and change the fonts, giving you control that flat image generators lack.
                  </p>
                </div>
              </section>

              {/* AI IMAGE GENERATION */}
              <section className="bg-zinc-900 text-white p-8 rounded-3xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <ImageIcon className="w-6 h-6 text-cyan-400" /> AI Image Generation
                </h2>
                <p className="text-zinc-300 mb-4">
                  Canva includes native AI-powered image creation capabilities, ideal for social media visuals, blog graphics, marketing images, moodboards, and product concepts.
                </p>
                <div className="bg-zinc-800 p-4 rounded-xl text-sm font-mono text-zinc-300 mb-6">
                  &quot;Create a soft pastel illustration of a laptop, coffee and notebook on a minimal desk.&quot;
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-400 mb-6">
                  <span>Prompt</span> &rarr;
                  <span>Generate</span> &rarr;
                  <span>Choose result</span> &rarr;
                  <span className="text-white">Edit</span> &rarr;
                  <span className="text-white">Add text</span> &rarr;
                  <span className="text-cyan-400">Export</span>
                </div>
                <p className="text-xs text-zinc-500 italic">Note: Check current official Canva documentation for specific underlying image models, as capabilities are frequently updated.</p>
              </section>

              {/* MAGIC WRITE */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Type className="w-6 h-6 text-pink-500" /> Magic Write
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Canva&apos;s AI writing capabilities allow you to generate captions, headlines, descriptions, blog drafts, presentation copy, and summaries directly onto your canvas.
                </p>
                <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 mb-6">
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">&quot;Write 5 Instagram captions for a new digital planner. Tone: friendly, aesthetic and concise.&quot;</p>
                </div>
                
                {/* CONTENTIAN CONNECTION */}
                <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/30 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="text-sm text-indigo-900 dark:text-indigo-200">
                    <strong>Contentian</strong> is highly useful when you specifically need platform-focused titles, descriptions and hashtags, while <strong>Canva</strong> is perfect for placing that generated text directly into visual designs.
                  </div>
                  <Link href="/generator" className="shrink-0 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors text-sm text-center">
                    Try Contentian
                  </Link>
                </div>
              </section>

              {/* BACKGROUND & IMAGE TOOLS */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Background & Image Tools</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  AI-assisted photo editing transforms how users modify images, from removing objects to generating entirely new backgrounds. (Exact capabilities vary by plan).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { tool: "Background Remover", desc: "Instantly removes the background from a photo.", use: "Product photography, headshots, and transparent assets." },
                    { tool: "Magic Eraser", desc: "Brush over unwanted objects to remove them seamlessly.", use: "Cleaning up messy backgrounds or removing photobombers." },
                    { tool: "Magic Edit", desc: "Brush an area and prompt the AI to replace it.", use: "Changing a shirt color or adding an object to a desk." },
                    { tool: "Magic Expand", desc: "AI outpainting that expands the borders of an image.", use: "Fixing tightly cropped photos to fit a wider layout." }
                  ].map((feature, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-xl">
                      <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{feature.tool}</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{feature.desc}</p>
                      <p className="text-xs text-zinc-500 font-medium bg-zinc-50 dark:bg-zinc-800 p-2 rounded"><strong>Best for:</strong> {feature.use}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* VIDEO, CODE, SHEETS */}
              <section className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <MonitorPlay className="w-6 h-6 text-red-500" /> AI Video & Animation
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                    Canva&apos;s video workflow is designed for Reels, short-form content, and marketing videos. You can seamlessly combine video clips, images, text, and audio with AI-assisted animations and transitions in a straightforward timeline editor.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Code className="w-6 h-6 text-emerald-500" /> Canva Code
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                    Canva Code introduces a way to create interactive experiences (like widgets, quizzes, and mini tools) using natural-language instructions rather than traditional coding.
                  </p>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg text-sm font-mono text-zinc-700 dark:text-zinc-300 mb-3">
                    &quot;Create an interactive quiz about AI basics.&quot;
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-bold text-zinc-500 mb-3">
                    <span>Prompt</span> &rarr; <span>Generate experience</span> &rarr; <span>Preview</span> &rarr; <span>Iterate</span> &rarr; <span>Customize</span>
                  </div>
                  <p className="text-xs text-zinc-500 italic">Canva Code does not replace professional software development, but it drastically lowers the barrier for interactive content.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <FileSpreadsheet className="w-6 h-6 text-green-500" /> Canva Sheets & Data
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                    AI-assisted spreadsheet workflows allow you to analyze data, find patterns, generate formulas, and instantly turn data into compelling visualizations and presentations. 
                  </p>
                  <div className="flex gap-2 text-xs font-bold text-zinc-500">
                    <span>Data</span> &rarr; <span>AI analysis</span> &rarr; <span>Insights</span> &rarr; <span>Visualization</span>
                  </div>
                </div>
              </section>

              {/* BRAND WORKFLOWS */}
              <section className="bg-zinc-900 text-white p-8 rounded-3xl shadow-lg border border-zinc-800">
                <h2 className="text-2xl font-bold mb-4">Brand Workflows</h2>
                <p className="text-zinc-300 mb-6">
                  For creators and businesses, AI is only useful if it aligns with your visual identity. Canva excels by applying brand colors, fonts, templates, and strict style rules to AI-generated assets.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/30 text-red-200">
                    <strong className="block text-red-400 mb-2">Without a Brand System:</strong>
                    Every AI-generated post looks different, chaotic, and disconnected from your identity.
                  </div>
                  <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/30 text-emerald-200">
                    <strong className="block text-emerald-400 mb-2">With Canva Branding:</strong>
                    Colors + Fonts + Templates + AI Style = Highly consistent professional content.
                  </div>
                </div>
              </section>

              {/* TARGET AUDIENCES */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Who is Canva For?</h2>
                
                {/* SOCIAL MEDIA */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-pink-500"/> Social Media & Content Creators
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-3 text-sm">
                    Perfect for Instagram carousels, Pinterest pins, YouTube thumbnails, Reels, digital products, and media kits. The ability to resize templates for different platforms instantly is a massive time-saver.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono bg-zinc-100 dark:bg-zinc-800/50 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <span>Idea</span> &rarr; <span>Content</span> &rarr; <span>Design</span> &rarr; <span>Brand</span> &rarr; <span>Publish</span>
                  </div>
                </div>

                {/* STUDENTS */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-500"/> Students & Educators
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-2">
                    Use Canva for engaging presentations, assignments, infographics, study notes, posters, and project documentation. 
                  </p>
                  <p className="text-xs font-mono bg-zinc-50 dark:bg-zinc-800 p-2 rounded text-zinc-700 dark:text-zinc-300 inline-block">
                    &quot;Create a presentation explaining the Incremental Model in Software Engineering.&quot;
                  </p>
                </div>

                {/* BUSINESSES */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <LibraryBig className="w-5 h-5 text-teal-500"/> Businesses
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-2">
                    Highly effective for marketing campaigns, internal documents, reports, ads, and product launches while maintaining strict brand consistency across collaborative teams.
                  </p>
                </div>
              </section>

              {/* CONTENTIAN + CANVA WORKFLOW */}
              <section className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800/30 mt-12">
                <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-6">Contentian + Canva: From Idea to Publish</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm">
                      <div className="text-xs font-bold text-indigo-500 uppercase mb-1">1. Describe Idea</div>
                      <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">&quot;I want to create a Pinterest post about a cute strawberry picnic wallpaper.&quot;</p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border-l-4 border-indigo-500">
                      <div className="text-xs font-bold text-indigo-500 uppercase mb-1">2. Contentian</div>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">Generates optimized Title + Description + Hashtags perfectly formatted for the platform.</p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border-l-4 border-cyan-500">
                      <div className="text-xs font-bold text-cyan-500 uppercase mb-1">3. Canva</div>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">Take that text into Canva to create, customize, and export the beautiful visual design.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* HOW TO USE CANVA AI EFFECTIVELY */}
              <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">How to Use Canva AI Effectively</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Prompting for visual design is different than prompting a chatbot. You need to be highly specific about aesthetics and layout.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">The Formula</h3>
                    <div className="flex flex-col gap-2 font-mono text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
                      <span className="font-bold">Goal</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Format</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Audience</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Style</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Content constraints</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">Good Example</h3>
                    <p className="text-sm font-mono bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-xl text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      &quot;Create a Pinterest pin for a printable budget planner. Audience: college students. Style: minimal, pastel, clean. Format: vertical Pinterest pin. Headline: Simple Budget Planner.&quot;
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">
                  This is significantly better than a generic prompt like &quot;Make a planner,&quot; because it anchors the AI in a specific visual aesthetic and physical constraint. 
                  <Link href="/ai-hub/basics/what-is-prompt-engineering" className="text-cyan-600 dark:text-cyan-400 hover:underline ml-1">Learn more about Prompt Engineering.</Link>
                </p>
              </section>

              {/* COMPARISONS */}
              <section className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Canva vs Adobe Express</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Feature</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Canva</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Adobe Express</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Ease of Use</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Unmatched beginner friendliness.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Very easy, slightly more pro-leaning UI.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">AI Features</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Magic Studio handles writing, images, and video.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Powered by Adobe Firefly (excellent for safe commercial AI images).</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Ecosystem</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Massive standalone template library.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Connects seamlessly to Photoshop & Illustrator.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Canva vs Figma</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Focus</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Canva</th>
                          <th className="p-3 border border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">Figma</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Primary Use</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Broad visual content creation, social media, marketing.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">UI/UX design, app prototyping, product design.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Professional Workflows</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Template-driven, highly accessible.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Advanced vector editing, complex design systems, developer handoff.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Canva vs ChatGPT</h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                    <strong>ChatGPT</strong> is great for thinking, writing, formatting data, and planning logic. 
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                    <strong>Canva</strong> is great for turning those ideas into visual, publishable content.
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <strong>Together:</strong> Idea (ChatGPT) &rarr; Content (Contentian) &rarr; Design (Canva).
                  </p>
                </div>
              </section>

              {/* REAL USE CASES */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Real Use Cases</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { task: "Instagram Carousel", prompt: "Create a 5-slide post about healthy habits.", why: "Automatically generates multiple cohesive slides." },
                    { task: "Pinterest Pin", prompt: "Minimal aesthetic pin for a budget planner.", why: "Pre-sized exactly for Pinterest's vertical aspect ratio." },
                    { task: "YouTube Thumbnail", prompt: "Tech review thumbnail with bold red text.", why: "Easy background removal for headshots." },
                    { task: "Presentation", prompt: "10-slide startup pitch deck for a SaaS tool.", why: "Generates the outline and applies a unified theme." },
                    { task: "Product Launch", prompt: "Instagram stories for a new candle launch.", why: "Ensures brand colors and fonts match across all assets." },
                    { task: "Interactive Quiz", prompt: "Create a simple quiz about typography.", why: "Canva Code makes it interactive without programming." }
                  ].map((uc, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col h-full hover:border-cyan-500/50 transition-colors">
                      <h4 className="font-bold text-zinc-900 dark:text-white mb-2 text-sm">{uc.task}</h4>
                      <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/10 p-2 rounded mb-3 flex-grow">
                        &quot;{uc.prompt}&quot;
                      </p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium"><strong>Why it helps:</strong> {uc.why}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* LIMITATIONS & PRIVACY */}
              <section className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 my-8 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" /> Limitations & Responsible AI
                  </h2>
                  <ul className="text-sm text-zinc-700 dark:text-zinc-300 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-0 list-disc pl-4">
                    <li>AI-generated content can contain visual artifacts or text mistakes.</li>
                    <li>Images often need manual correction.</li>
                    <li>AI does not understand every brand perfectly out of the box.</li>
                    <li>Generated text must be proofread.</li>
                    <li>Always review copyright/licensing considerations for commercial use.</li>
                  </ul>
                  <p className="text-xs text-zinc-500 mt-4 italic">
                    Note: Canva&apos;s AI products are subject to its official AI Product Terms and Acceptable Use Policy. This is not legal advice.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-700">
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Privacy</h2>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    Users should understand how their content is handled. Canva states that user content is not used to improve AI-powered features when it is inconsistent with applicable privacy controls. Always review Canva&apos;s current privacy settings if you are working with sensitive or proprietary business data.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "What is Canva?", a: "A highly accessible visual communication and design platform for creating social media graphics, presentations, and documents." },
                    { q: "Is Canva free?", a: "Yes, there is a very capable free tier. A Pro subscription is available for premium templates, brand kits, and advanced AI features." },
                    { q: "What is Canva AI?", a: "The suite of tools built into Canva that lets you generate, write, and edit visual content using conversational prompts." },
                    { q: "What is Magic Studio?", a: "Canva's collective brand name for its AI-powered features, including Magic Write, Magic Edit, and Magic Design." },
                    { q: "Can Canva generate images?", a: "Yes, it has built-in AI image generators that let you turn text descriptions into custom visuals." },
                    { q: "Can Canva write content?", a: "Yes, using Magic Write, you can generate captions, outlines, and copy directly onto your designs." },
                    { q: "Can Canva remove backgrounds?", a: "Yes, the Background Remover is one of its most popular (and powerful) features, usually requiring a Pro plan." },
                    { q: "Can Canva create videos?", a: "Yes, it has a simple video editor capable of handling Reels, TikToks, and basic animations." },
                    { q: "What is Canva Code?", a: "A feature that allows users to create interactive web experiences or widgets using natural-language prompts instead of traditional coding." },
                    { q: "Can Canva create presentations with AI?", a: "Yes, it can generate full presentation drafts with layouts and text based on a topic prompt." },
                    { q: "Is Canva good for social media?", a: "It is arguably the industry standard for non-designers creating social media graphics." },
                    { q: "Is Canva good for students?", a: "Yes, it's incredibly popular for school projects, group presentations, and study materials." },
                    { q: "Can Canva replace Photoshop?", a: "No. It is not designed for pixel-perfect, highly specialized raster editing, retouching, or complex composites." },
                    { q: "Can Canva replace Figma?", a: "No. Figma is built for UI/UX design and professional app prototyping, whereas Canva is built for broad visual content." },
                    { q: "Can Canva be used for digital products?", a: "Yes, many creators use it to design ebooks, planners, and templates to sell online." }
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
                  <li><a href="https://www.canva.com/magic/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center">Canva Magic Studio Official Site <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://www.canva.com/newsroom/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center">Canva Newsroom & Updates <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://www.canva.com/policies/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center">Canva Policies & Privacy <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                </ul>
              </section>

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* QUICK VERDICT */}
              {/* NOTE: Normal document flow, no sticky/fixed/absolute positioning to prevent overlap */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-cyan-500/5 relative">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-500" /> Quick Verdict
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                  Canva is one of the easiest ways for beginners and creators to combine traditional design tools with AI-assisted content creation in one visual workspace.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Best for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Social media creators</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Students & Beginners</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Small businesses & Marketers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Presentation designers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Non-designers</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Not ideal for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Highly specialized professional workflows</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Complete control over every vector detail</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Replacing expert designers for complex work</li>
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
                  <p className="text-xs text-zinc-500 italic">This is NOT an official Canva rating.</p>
                </div>
              </div>

              {/* CONTENTIAN'S TAKE */}
              <div className="bg-cyan-50 dark:bg-cyan-900/10 p-6 rounded-3xl border border-cyan-100 dark:border-cyan-800/30">
                <h3 className="text-lg font-bold text-cyan-900 dark:text-cyan-200 mb-4">Contentian&apos;s Take</h3>
                <div className="space-y-4 text-sm text-cyan-800 dark:text-cyan-300">
                  <div>
                    <strong className="block mb-1">What stands out:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Extremely accessible UI</li>
                      <li>Strong AI + design combination</li>
                      <li>Excellent for social media</li>
                      <li>Great idea-to-publish workflow</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block mb-1">Keep in mind:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Customize templates to avoid looking generic</li>
                      <li>AI output still needs human review</li>
                      <li>Advanced features have limits</li>
                      <li>It is a broad, not specialized, tool</li>
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
                    <li>+ Extremely beginner-friendly</li>
                    <li>+ Combines design and AI seamlessly</li>
                    <li>+ Huge range of visual content formats</li>
                    <li>+ Strong social media workflows</li>
                    <li>+ Easy manual editing after generation</li>
                    <li>+ Excellent branding workflows</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Cons
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>- Advanced features require paid access</li>
                    <li>- AI usage limits apply</li>
                    <li>- Less specialized than pro software</li>
                    <li>- Template-heavy designs can look generic</li>
                  </ul>
                </div>
              </div>

              {/* PRICING */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Pricing Overview</h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-4">
                  Canva offers free and paid plans. AI access, usage limits, and premium features vary heavily by plan and can change over time.
                </p>
                <ul className="space-y-3 mb-4 text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                  <li>&bull; Free Plan</li>
                  <li>&bull; Paid Individual Plans (Canva Pro)</li>
                  <li>&bull; Business / Organization Offerings</li>
                </ul>
                <a href="https://www.canva.com/pricing/" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 mt-2 text-center rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-sm font-bold transition-colors">
                  View Current Pricing
                </a>
              </div>

              {/* HOW TO GET STARTED */}
              <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">How to Get Started</h3>
                <ol className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 mb-4 font-medium">
                  <li>1. Create a Canva account</li>
                  <li>2. Choose what you want to create</li>
                  <li>3. Start with a template or AI prompt</li>
                  <li>4. Generate your first draft</li>
                  <li>5. Customize the design manually</li>
                  <li>6. Export or publish directly</li>
                </ol>
              </div>

              {/* FINAL VERDICT */}
              <div className="bg-zinc-900 text-white p-6 rounded-3xl border border-zinc-800 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-center">Is Canva Worth Using?</h3>
                <p className="text-zinc-300 text-sm text-center mb-6">
                  Yes — especially for creators, students, marketers, small businesses and beginners who want to move from an idea to polished visual content without learning complex software.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Ease of Use</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Visual Design</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">AI Features</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Social Media</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Branding</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Advanced Design</span>
                    <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4"/></div>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-4 text-center italic">Contentian Editorial Scores. NOT official ratings.</p>
              </div>

            </div>
          </div>

          {/* RELATED CONTENT */}
          <div className="border-t border-zinc-200 dark:border-white/10 pt-12 pb-16">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Related Content</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/ai-hub/basics/what-is-prompt-engineering" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-cyan-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">Prompt Engineering</h4>
              </Link>
              <Link href="/ai-hub/basics/what-is-generative-ai" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-cyan-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">Generative AI</h4>
              </Link>
              <Link href="/ai-hub/basics/what-are-large-language-models" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-cyan-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">What Are LLMs?</h4>
              </Link>
              <Link href="/ai-hub/basics/what-are-ai-agents" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-cyan-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">AI Agents</h4>
              </Link>
              <Link href="/ai-hub/tools/chatgpt" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-cyan-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">ChatGPT Review</h4>
              </Link>
              <Link href="/ai-hub/tools/claude" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-cyan-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">Claude Review</h4>
              </Link>
              <Link href="/ai-hub/tools/gemini" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-cyan-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">Gemini Review</h4>
              </Link>
              <Link href="/ai-hub/tools/perplexity" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-cyan-500 transition-colors group">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">Perplexity Review</h4>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
