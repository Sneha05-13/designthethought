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
    <section id="newsletter" className="py-20 sm:py-24 bg-neutral-100/60 dark:bg-[#0E111A] border-t border-neutral-200 dark:border-neutral-800 scroll-mt-24 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-2xs font-mono uppercase tracking-widest font-bold text-neutral-500 dark:text-neutral-400 block mb-3">
          The Weekly Dispatch
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 dark:text-neutral-50 tracking-tight mb-4">
          Thoughtful Perspectives, Delivered Weekly
        </h2>
        
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Join founders, engineers, and digital operators who read our Tuesday briefing on frontier AI developments, lean business economics, and digital product craft.
        </p>

        {status === "success" ? (
          <div className="p-8 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#131722] text-neutral-900 dark:text-white max-w-lg mx-auto">
            <span className="text-2xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
              Subscription Confirmed
            </span>
            <h4 className="font-serif text-xl font-bold mb-2">Welcome to Design The Thought</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              You are on the list. Check your inbox every Tuesday morning for original essays, data models, and founder playbooks.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
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
                className={`w-full px-4 py-3 bg-white dark:bg-[#131722] border ${
                  status === "error"
                    ? "border-red-500 focus:ring-red-500"
                    : "border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100"
                } text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm focus:outline-hidden rounded-xs transition-colors`}
              />
              {status === "error" && (
                <p className="text-xs text-red-500 mt-1 pl-1">{errorMsg}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-950 font-mono uppercase tracking-wider text-xs font-bold transition-colors disabled:opacity-50 shrink-0 cursor-pointer rounded-xs"
            >
              {status === "submitting" ? "Joining..." : "Subscribe"}
            </button>
          </form>
        )}

        <p className="text-2xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mt-4">
          No spam • Unsubscribe anytime with one click
        </p>

      </div>
    </section>
  );
}
