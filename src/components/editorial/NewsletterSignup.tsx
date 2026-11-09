"use client";

import React, { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic frontend email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // Local client-side storage simulation for integration readiness
    setTimeout(() => {
      try {
        if (typeof window !== "undefined") {
          const stored = JSON.parse(localStorage.getItem("tdt_newsletter_subscribers") || "[]");
          if (!stored.includes(email.trim())) {
            stored.push(email.trim());
            localStorage.setItem("tdt_newsletter_subscribers", JSON.stringify(stored));
          }
        }
      } catch {
        // Fallback gracefully
      }
      setStatus("success");
      setEmail("");
    }, 400);
  };

  return (
    <section id="newsletter" className="py-16 sm:py-20 bg-gray-50 dark:bg-[#0B0F19] border-y border-gray-200 dark:border-gray-800/80 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/40 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
          <span>Weekly Intelligence</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Ideas. Innovation. Growth.
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Join thousands of founders, engineers, and digital designers receiving our weekly briefing on AI breakthroughs, micro-SaaS case studies, and creative growth strategies.
        </p>

        {status === "success" ? (
          <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-emerald-500/30 text-gray-900 dark:text-white max-w-lg mx-auto shadow-sm">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
              ✓
            </div>
            <h4 className="text-lg font-bold mb-1">You are subscribed!</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Welcome to The Design Tech weekly briefing. Check your inbox every Tuesday morning for fresh analysis.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
            <div className="flex-1 text-left">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter your email address..."
                aria-label="Email address for newsletter"
                required
                className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#111827] border ${
                  status === "error"
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
                } text-gray-900 dark:text-white placeholder:text-gray-400 text-sm focus:outline-hidden focus:ring-2 transition-all shadow-xs`}
              />
              {status === "error" && (
                <p className="text-xs text-red-500 mt-1 pl-1">{errorMsg}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-sm disabled:opacity-50 shrink-0 cursor-pointer"
            >
              {status === "submitting" ? "Subscribing..." : "Subscribe Free"}
            </button>
          </form>
        )}

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          Strictly no spam. Unsubscribe anytime with a single click.
        </p>

      </div>
    </section>
  );
}
