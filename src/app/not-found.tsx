import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 mb-3 inline-block">
            404 Error
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Page Not Found
          </h1>

          <p className="text-base text-gray-600 dark:text-gray-400 font-normal leading-relaxed mb-8">
            The story or resource you requested does not exist, has been moved, or is no longer available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              Return Home
            </Link>
            <Link
              href="/ai-hub"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 hover:border-indigo-500 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Explore AI Hub
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
