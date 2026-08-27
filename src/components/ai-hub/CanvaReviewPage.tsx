import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ChevronRight, ChevronLeft, ExternalLink, Star, CheckCircle2, XCircle, 
  Info, FileText, Zap, AlertTriangle, 
  MessageSquare, BookOpen, Compass, LibraryBig,
  BrainCircuit, PenTool, Code,
  Palette, Image as ImageIcon, Video, Sparkles, LayoutTemplate, Type
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/10">
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
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold transition-all shadow-lg shadow-purple-500/25 text-lg"
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
                    Canva is a visual communication and design platform that lets users easily create social media posts, presentations, posters, videos, documents, websites, logos, marketing materials, educational content, and branded assets.
                  </p>
                  <p>
                    While Canva has always been incredibly popular for its drag-and-drop templates, <strong>AI has fundamentally expanded its workflow.</strong>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono mt-6">
                  <div className="bg-zinc-100 dark:bg-zinc-800/50 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700">
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2"><LayoutTemplate className="w-4 h-4"/> Traditional Canva</h4>
                    <div className="flex flex-col gap-1 text-zinc-600 dark:text-zinc-400">
                      <span>Template / Blank Design</span><span className="text-zinc-400">&darr;</span>
                      <span>Manual Editing</span><span className="text-zinc-400">&darr;</span>
                      <span className="text-zinc-900 dark:text-white font-bold">Export</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/10 p-5 rounded-2xl border border-purple-200 dark:border-purple-800/50">
                    <h4 className="font-bold text-purple-900 dark:text-purple-400 mb-3 flex items-center gap-2"><Sparkles className="w-4 h-4"/> AI-assisted Canva</h4>
                    <div className="flex flex-col gap-1 text-purple-800 dark:text-purple-300">
                      <span>Idea / Prompt</span><span className="text-purple-600/50">&darr;</span>
                      <span className="font-bold">Generate</span><span className="text-purple-600/50">&darr;</span>
                      <span>Edit &amp; Customize</span><span className="text-purple-600/50">&darr;</span>
                      <span>Apply Brand</span><span className="text-purple-600/50">&darr;</span>
                      <span className="text-purple-900 dark:text-purple-200 font-bold">Export / Publish</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* WHY CANVA IS DIFFERENT */}
              <section className="bg-gradient-to-br from-zinc-50 to-purple-50 dark:from-zinc-900 dark:to-purple-900/10 p-8 rounded-3xl border border-zinc-200 dark:border-purple-800/30">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Why Canva is Different</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                  Canva combines AI features directly into a visual editor packed with templates, design elements, and content workflows. You generate a starting point and immediately manually edit the individual layers, text, and graphics.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3"><Palette className="w-5 h-5 text-purple-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Design:</strong> Visual layer-based editing.</span></div>
                  <div className="flex items-start gap-3"><Sparkles className="w-5 h-5 text-purple-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>AI creation:</strong> Generate from text prompts.</span></div>
                  <div className="flex items-start gap-3"><Type className="w-5 h-5 text-purple-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>AI writing:</strong> Draft copy inside designs.</span></div>
                  <div className="flex items-start gap-3"><ImageIcon className="w-5 h-5 text-purple-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Image generation:</strong> Text-to-image tools.</span></div>
                  <div className="flex items-start gap-3"><Video className="w-5 h-5 text-purple-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Video creation:</strong> Timelines and animations.</span></div>
                  <div className="flex items-start gap-3"><MessageSquare className="w-5 h-5 text-purple-500 shrink-0 mt-0.5"/><span className="text-zinc-800 dark:text-zinc-200"><strong>Social content:</strong> Formats built for every network.</span></div>
                </div>
              </section>

              {/* CANVA AI */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                  <BrainCircuit className="w-8 h-8 text-indigo-500" />
                  Canva AI
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-4">
                  Canva AI turns design into a conversational creative workflow. Users can start with an idea, a prompt, a rough concept, a goal, or existing content, and refine the result through conversation and visual editing.
                </p>
                <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 mb-6">
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Example Prompt</div>
                  <div className="text-sm font-medium text-zinc-900 dark:text-white mb-4">
                    &quot;I need an Instagram launch post for my new digital planner. Make it minimal, premium and targeted at students.&quot;
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
                    <span className="bg-white dark:bg-zinc-900 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Generate</span> &rarr;
                    <span className="bg-white dark:bg-zinc-900 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Review</span> &rarr;
                    <span className="bg-white dark:bg-zinc-900 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Edit layout</span> &rarr;
                    <span className="bg-white dark:bg-zinc-900 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Adjust text</span> &rarr;
                    <span className="bg-white dark:bg-zinc-900 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">Apply brand</span> &rarr;
                    <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 px-2 py-1 rounded border border-indigo-200 dark:border-indigo-700">Export</span>
                  </div>
                </div>
                <p className="text-xs text-amber-600 dark:text-amber-400 italic">
                  Note: Distinguish current Canva AI conversational capabilities from older Magic Studio individual tools.
                </p>
              </section>

              {/* MAGIC STUDIO & MAGIC WRITE */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl shadow-sm">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    Magic Studio
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    Magic Studio is Canva&apos;s collection of AI-powered creative tools that are injected throughout the editor.
                  </p>
                  <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1 list-disc pl-4 mb-4">
                    <li>Magic Design</li>
                    <li>Magic Edit &amp; Eraser</li>
                    <li>Magic Animate</li>
                    <li>AI image generation</li>
                  </ul>
                  <p className="text-xs text-zinc-500 italic">*Available tools and usage limits can change over time.</p>
                </div>
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl shadow-sm">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Type className="w-5 h-5 text-indigo-500" />
                    Magic Write
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    Canva&apos;s AI writing capabilities let you draft text directly inside a visual design.
                  </p>
                  <div className="bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 mb-4">
                    <p className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
                      &quot;Write 5 Instagram captions for a new digital planner. Tone: friendly, aesthetic and concise.&quot;
                    </p>
                  </div>
                </div>
              </section>

              {/* AI IMAGE GENERATION & EDITING */}
              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <ImageIcon className="w-6 h-6 text-pink-500" /> AI Image Generation
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Canva features AI-powered text-to-image creation capabilities built directly into the sidebar. It is perfect for social media visuals, blog graphics, marketing images, moodboards, product concepts, and backgrounds.
                  </p>
                  <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-xl border border-pink-100 dark:border-pink-800/30">
                    <p className="text-sm font-medium text-pink-900 dark:text-pink-300 mb-3">
                      &quot;Create a soft pastel illustration of a laptop, coffee and notebook on a minimal desk.&quot;
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-pink-700 dark:text-pink-400">
                      <span>Prompt</span> &rarr; <span>Generate</span> &rarr; <span>Choose result</span> &rarr; <span>Edit</span> &rarr; <span>Export</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <PenTool className="w-6 h-6 text-amber-500" /> AI Photo Editing
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    AI-assisted editing makes professional photo manipulation accessible to anyone. Exact AI editing capabilities and limits vary by plan.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                      <h4 className="font-bold text-sm mb-1">Background Remover</h4>
                      <p className="text-xs text-zinc-500">Instantly isolates subjects. Best for product photos.</p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                      <h4 className="font-bold text-sm mb-1">Magic Eraser</h4>
                      <p className="text-xs text-zinc-500">Removes unwanted objects cleanly from photos.</p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                      <h4 className="font-bold text-sm mb-1">Magic Edit</h4>
                      <p className="text-xs text-zinc-500">Swap or add elements into a photo using a text prompt.</p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                      <h4 className="font-bold text-sm mb-1">Magic Expand</h4>
                      <p className="text-xs text-zinc-500">Extends the borders of an image (outpainting).</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* VIDEO, CODE & DATA */}
              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Video className="w-6 h-6 text-red-500" /> AI Video & Animation
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                    Canva combines video, images, text, audio, animations, and transitions into a timeline editor. AI assists with automatic beat-syncing, Magic Animate, and generating video clips.
                  </p>
                  <p className="text-sm text-zinc-500">Use cases: Reels, short-form videos, marketing videos, and animated posts.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Code className="w-6 h-6 text-indigo-500" /> Canva Code
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                    Canva Code allows users to create interactive experiences using natural-language instructions rather than traditional coding. It is perfect for interactive widgets, mini tools, and quizzes.
                  </p>
                  <div className="bg-zinc-900 text-zinc-300 p-4 rounded-xl font-mono text-sm mb-3 border border-zinc-800">
                    <span className="text-indigo-400">&gt;</span> &quot;Create an interactive quiz about AI basics.&quot;
                  </div>
                  <p className="text-xs text-zinc-500 italic">
                    Note: Canva introduced Canva Code as part of its AI creative workflow, but it does not replace professional software development.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-green-500" /> Canva Sheets & Data
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Canva features AI-assisted spreadsheet and data workflows. You can analyze data, find patterns, generate formulas, and turn data into charts or presentations automatically. 
                  </p>
                </div>
              </section>

              {/* CONTENTIAN + CANVA WORKFLOW */}
              <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-8 rounded-3xl shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Contentian + Canva: From Idea to Publish</h2>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1 space-y-4">
                    <p className="text-indigo-100 text-sm">
                      Contentian is useful when you specifically need platform-focused titles, descriptions, and hashtags, while Canva is useful for turning that content into visual designs.
                    </p>
                    <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                      <p className="text-xs font-bold text-indigo-200 mb-1">Input Idea:</p>
                      <p className="text-sm italic mb-4">&quot;I want to create a Pinterest post about a cute strawberry picnic wallpaper.&quot;</p>
                      
                      <p className="text-xs font-bold text-indigo-200 mb-1">1. Contentian:</p>
                      <p className="text-sm mb-4">Generates Title + Description + Hashtags.</p>

                      <p className="text-xs font-bold text-indigo-200 mb-1">2. Canva:</p>
                      <p className="text-sm">Creates the visual Pinterest design.</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Link href="/generator" className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-colors">
                      Try the Generator
                    </Link>
                  </div>
                </div>
              </section>

              {/* TARGET AUDIENCES */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Who is Canva For?</h2>
                
                {/* BRAND WORKFLOWS & BUSINESSES */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <LibraryBig className="w-5 h-5 text-indigo-500"/> For Businesses & Brand Workflows
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-3">
                    Without brand consistency, every post looks different. With a Brand System (Colors + Fonts + Templates), content is always consistent. Canva is perfect for marketing campaigns, internal documents, reports, and brand materials.
                  </p>
                </div>

                {/* SOCIAL MEDIA */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-pink-500"/> For Social Media
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-2">
                    Use cases: Instagram Posts, Carousels, Stories, Pinterest Pins, YouTube Thumbnails, LinkedIn Posts, Reels, and Social campaigns.
                  </p>
                </div>

                {/* STUDENTS */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500"/> For Students
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-3">
                    Presentations, assignments, infographics, study notes, posters, educational videos, and resumes. Example: <em>&quot;Create a presentation explaining the Incremental Model in Software Engineering.&quot;</em>
                  </p>
                </div>

                {/* CREATORS */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-amber-500"/> For Creators
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-3">
                    Digital products, ebooks, social media kits, media kits, lead magnets.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono bg-zinc-100 dark:bg-zinc-800/50 p-2 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <span>Idea</span> &rarr; <span>Content</span> &rarr; <span>Design</span> &rarr; <span>Brand</span> &rarr; <span>Publish</span>
                  </div>
                </div>
              </section>

              {/* HOW TO WRITE BETTER QUERIES */}
              <section className="bg-zinc-50 dark:bg-zinc-800/30 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-700 mt-12">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">How to Use Canva AI Effectively</h2>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-6">Prompting for visual design is different than prompting for text. Use this formula:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3">The Visual Formula</h3>
                    <div className="flex flex-col gap-2 font-mono text-sm text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                      <span className="font-bold">Goal</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Format</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Audience</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Style</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold">Content</span>
                      <span className="text-zinc-400">+</span>
                      <span className="font-bold text-purple-600 dark:text-purple-400">Constraints</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3">Example</h3>
                    <p className="text-sm font-mono bg-white dark:bg-zinc-900 p-4 rounded-xl text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                      &quot;Create a Pinterest pin for a printable budget planner. Audience: college students. Style: minimal, pastel, clean. Format: vertical Pinterest pin. Headline: Simple Budget Planner.&quot;
                    </p>
                    <p className="text-xs text-zinc-500 mt-3">This is vastly better than just asking &quot;Make a planner.&quot;</p>
                  </div>
                </div>
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
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Templates</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Massive ecosystem of community &amp; pro templates.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">High quality, professionally designed templates.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">AI Features</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Magic Studio (Text, Image, Video).</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Adobe Firefly (Extremely strong image generation).</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Integration</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Great standalone all-in-one platform.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Ties into the broader Adobe Creative Cloud ecosystem.</td>
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
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Broad visual content creation (Social, Print, Presentation).</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">UI/UX design, prototyping, and product design.</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700 font-medium">Ease of Use</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Extremely easy, template-driven.</td>
                          <td className="p-3 border border-zinc-200 dark:border-zinc-700">Steeper learning curve, highly professional.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-sm">
                  <h3 className="font-bold text-lg mb-3">Canva vs ChatGPT</h3>
                  <p className="text-zinc-300 text-sm mb-4">
                    <strong>ChatGPT:</strong> Great for thinking, writing, and planning.<br/>
                    <strong>Canva:</strong> Great for turning ideas into visual content.
                  </p>
                  <p className="text-zinc-100 text-sm font-bold">
                    Together: Idea &rarr; Content &rarr; Design
                  </p>
                </div>
              </section>

              {/* REAL USE CASES */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Real Use Cases</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { task: "Create an Instagram carousel", query: "Design a 5-slide carousel about marketing tips.", why: "Instant layouts you can populate with text." },
                    { task: "Design a Pinterest pin", query: "Vertical pin for a healthy recipe blog post.", why: "Optimized sizing and aesthetic templates." },
                    { task: "Create a YouTube thumbnail", query: "Gaming thumbnail with a neon glowing background.", why: "Remove background tool + text effects." },
                    { task: "Design a resume", query: "Clean, modern, ATS-friendly software engineer resume.", why: "Hundreds of professional templates." },
                    { task: "Create a product launch campaign", query: "Brand kit for a new skincare line.", why: "Applies colors and fonts across multiple assets." },
                    { task: "Build a classroom presentation", query: "10-slide presentation on the solar system for kids.", why: "Generates outline and graphics instantly." }
                  ].map((uc, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col h-full">
                      <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{uc.task}</h4>
                      <p className="text-xs font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/10 p-2 rounded mb-3 flex-grow">
                        &quot;{uc.query}&quot;
                      </p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium"><strong>Why Canva helps:</strong> {uc.why}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* LIMITATIONS & PRIVACY */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-2xl">
                  <h3 className="text-lg font-bold text-red-900 dark:text-red-400 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> Limitations & Responsible AI
                  </h3>
                  <ul className="text-xs text-red-800 dark:text-red-300 space-y-2 list-disc pl-4">
                    <li>AI-generated content can contain mistakes.</li>
                    <li>Images often need manual correction.</li>
                    <li>Text output requires editing.</li>
                    <li>AI doesn&apos;t understand every brand perfectly.</li>
                    <li>Copyright/licensing considerations matter.</li>
                    <li>Users should understand Canva&apos;s AI Product Terms.</li>
                  </ul>
                </div>
                
                <div className="bg-zinc-100 dark:bg-zinc-800/50 border-l-4 border-zinc-500 p-6 rounded-r-2xl">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">Privacy</h3>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 mb-2">
                    Users should understand how their content is handled. Canva states that content is not used to improve AI-powered features when inconsistent with applicable privacy controls.
                  </p>
                  <p className="text-xs text-zinc-500 italic">Always check current official Canva privacy documentation.</p>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "What is Canva?", a: "A visual communication and design platform that lets users easily create social media posts, presentations, videos, and documents." },
                    { q: "Is Canva free?", a: "Yes, it has a generous free tier. Paid plans offer premium templates, assets, and advanced AI features." },
                    { q: "What is Canva AI?", a: "A suite of generative AI tools integrated directly into Canva's editor to generate text, images, and designs." },
                    { q: "What is Magic Studio?", a: "Canva's branded collection of AI tools like Magic Write, Magic Edit, and Magic Design." },
                    { q: "Can Canva generate images?", a: "Yes, it includes built-in text-to-image generation tools." },
                    { q: "Can Canva write content?", a: "Yes, Magic Write can draft text, summarize, and rewrite copy directly on your canvas." },
                    { q: "Can Canva remove backgrounds?", a: "Yes, the Background Remover is one of its most popular paid features." },
                    { q: "Can Canva create videos?", a: "Yes, it features a full video timeline editor with AI-assisted generation and animations." },
                    { q: "What is Canva Code?", a: "A feature allowing users to create interactive web experiences and widgets using natural-language instructions." },
                    { q: "Can Canva create presentations with AI?", a: "Yes, it can generate full presentation outlines and slides from a single prompt." },
                    { q: "Is Canva good for social media?", a: "It is widely considered the industry standard tool for quick social media content creation." },
                    { q: "Is Canva good for students?", a: "Yes, it is excellent for assignments, presentations, and study materials." },
                    { q: "Can Canva replace Photoshop?", a: "For quick edits and social graphics, yes. For complex professional image manipulation, no." },
                    { q: "Can Canva replace Figma?", a: "No. Figma is specialized for UI/UX product design, while Canva is for broad visual content." },
                    { q: "Can Canva be used for digital products?", a: "Yes, many creators use it to design ebooks, planners, and templates." }
                  ].map((faq, i) => (
                    <div key={i}>
                      <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{faq.q}</h3>
                      <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SOURCES */}
              <section className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-12">
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-4">Sources & Further Reading</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.canva.com/magic/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center">Canva Magic Studio Official Site <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                  <li><a href="https://www.canva.com/help/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center">Canva Help Center & AI Guidelines <ExternalLink className="w-3 h-3 ml-1" /></a></li>
                </ul>
              </section>

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* QUICK VERDICT */}
              {/* NOTE: Normal document flow, no sticky/fixed/absolute positioning to prevent overlap */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-purple-500/5 relative">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-500" /> Quick Verdict
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                  Canva is one of the easiest ways for beginners and creators to combine traditional design tools with AI-assisted content creation in one visual workspace.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Best for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Social media creators</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Students & Beginners</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Marketers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Small businesses</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Non-designers</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Not ideal for:</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Specialized professional design workflows</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Complete control over every vector detail</li>
                    <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Replacing professional designers for complex projects</li>
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
              <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-3xl border border-purple-100 dark:border-purple-800/30">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-200 mb-4">Contentian&apos;s Take</h3>
                <div className="space-y-4 text-sm text-purple-800 dark:text-purple-300">
                  <div>
                    <strong className="block mb-1">What stands out:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Extremely accessible</li>
                      <li>Great for visual content</li>
                      <li>Strong AI + design combination</li>
                      <li>Excellent for social media</li>
                      <li>Good workflow from idea to design</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block mb-1">Keep in mind:</strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Don&apos;t rely entirely on templates</li>
                      <li>AI output needs human review</li>
                      <li>Advanced features have limits</li>
                      <li>It is broad rather than specialized</li>
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
                    <li>+ Huge range of visual formats</li>
                    <li>+ Strong social media workflows</li>
                    <li>+ Easy manual editing after AI generation</li>
                    <li>+ Useful branding workflows</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Cons
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>- Advanced features require paid plans</li>
                    <li>- AI usage limits may apply</li>
                    <li>- Less specialized than pro software</li>
                    <li>- Templates can look generic without editing</li>
                  </ul>
                </div>
              </div>

              {/* PRICING */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Pricing Overview</h3>
                <ul className="space-y-3 mb-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex flex-col border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <span className="font-bold text-zinc-900 dark:text-white">Free</span>
                  </li>
                  <li className="flex flex-col border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <span className="font-bold text-zinc-900 dark:text-white">Paid individual plans (Canva Pro)</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-bold text-zinc-900 dark:text-white">Business / Organization offerings</span>
                  </li>
                </ul>
                <p className="text-xs text-zinc-500 mb-4">
                  Canva offers free and paid plans. AI access, usage limits and premium features vary by plan and can change.
                </p>
                <a href="https://www.canva.com/pricing/" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 text-center rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-sm font-bold transition-colors">
                  View Current Canva Pricing
                </a>
              </div>

              {/* HOW TO GET STARTED */}
              <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4">How to Get Started</h3>
                <ol className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                  <li>1. Create a Canva account</li>
                  <li>2. Choose what you want to create</li>
                  <li>3. Start with a template, blank design or AI prompt</li>
                  <li>4. Generate your first draft</li>
                  <li>5. Customize the design manually</li>
                  <li>6. Export or publish</li>
                </ol>
              </div>

              {/* FINAL VERDICT */}
              <div className="bg-zinc-900 text-white p-6 rounded-3xl border border-zinc-800 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-center">Is Canva Worth Using?</h3>
                <p className="text-zinc-300 text-sm text-center mb-6">
                  Yes — especially for creators, students, marketers, small businesses and beginners who want to move from an idea to polished visual content without learning complex design software.
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
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Learn More</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/ai-hub/basics/what-is-prompt-engineering" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-purple-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">Prompt Engineering</h4>
                <p className="text-sm text-zinc-500 mt-1">Learn how to instruct tools like Canva effectively.</p>
              </Link>
              <Link href="/ai-hub/basics/what-is-generative-ai" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-purple-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">Generative AI</h4>
                <p className="text-sm text-zinc-500 mt-1">Understand how AI images and text are created.</p>
              </Link>
              <Link href="/ai-hub/basics/what-are-large-language-models" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-purple-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">What Are LLMs?</h4>
                <p className="text-sm text-zinc-500 mt-1">The text models powering features like Magic Write.</p>
              </Link>
              <Link href="/ai-hub/tools/chatgpt" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-purple-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">ChatGPT Review</h4>
                <p className="text-sm text-zinc-500 mt-1">Compare AI assistants to visual design tools.</p>
              </Link>
              <Link href="/ai-hub/tools/claude" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-purple-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">Claude Review</h4>
                <p className="text-sm text-zinc-500 mt-1">Explore Anthropic&apos;s powerful AI assistant.</p>
              </Link>
              <Link href="/ai-hub/tools/perplexity" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-purple-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">Perplexity Review</h4>
                <p className="text-sm text-zinc-500 mt-1">Discover AI-powered research and search.</p>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
