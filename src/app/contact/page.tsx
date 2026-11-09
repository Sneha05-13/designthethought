"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const contactEmail = "editor@thedesigntech.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `[The Design Tech Inquiry] ${subject || "Editorial Pitch"}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <Navbar />

      <main className="flex-1">
        
        {/* Header */}
        <section className="pt-16 pb-12 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D121F] transition-colors">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 mb-2 block">
              Editorial Inquiries
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-2xl">
              We welcome thoughtful notes, guest pitches, constructive technical critique, tool suggestions, and reader correspondence.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Column: Direct Info */}
            <div className="md:col-span-5 space-y-6">
              
              <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 shadow-2xs">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Direct Editorial Email</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  For the fastest response, reach out to our desk directly:
                </p>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 text-xs font-mono text-gray-900 dark:text-white">
                  <span className="truncate mr-2">{contactEmail}</span>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="text-xs font-sans text-indigo-600 dark:text-indigo-400 font-bold hover:underline shrink-0"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 shadow-2xs">
                <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-3">
                  Inquiry Guidelines
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                    <span><strong>Article Pitches:</strong> Outlines covering AI tooling, startups, or design systems.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                    <span><strong>Corrections:</strong> Technical errors or verification updates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                    <span><strong>AI Hub Feedback:</strong> Recommendations for software to review or workflows to benchmark.</span>
                  </li>
                </ul>
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed p-2">
                <em>Note:</em> We do not accept paid link insertions or undisclosed native advertising. All evaluations reflect practitioner assessments.
              </div>

            </div>

            {/* Right Column: Compose Note */}
            <div className="md:col-span-7">
              <div className="p-8 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 shadow-2xs">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-normal">
                  Complete the fields below to launch your default email client with your note pre-addressed.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-[#0B0F19] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-[#0B0F19] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Article Pitch / Technical Inquiry"
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-[#0B0F19] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your pitch or question..."
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-[#0B0F19] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-colors duration-200 cursor-pointer shadow-xs"
                  >
                    Launch Email Client &rarr;
                  </button>
                  <p className="text-[11px] text-gray-400 text-center">
                    Dispatches directly to {contactEmail} with no intermediate data tracking.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
