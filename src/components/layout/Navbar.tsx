"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = portfolioData.navLinks.map((link) => link.href);
  const activeSection = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/75 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-black/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              J
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-500 transition-colors tracking-tight text-base sm:text-lg">
                {portfolioData.developer.name}
              </span>
              <span className="text-[11px] text-blue-500 dark:text-blue-400 font-medium tracking-wider uppercase -mt-0.5 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {portfolioData.navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full z-0 shadow-sm shadow-blue-500/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={portfolioData.developer.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-blue-500/25 border border-blue-400/30 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-xl bg-slate-800/70 border border-slate-700/60 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-3">
              {portfolioData.navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={portfolioData.developer.resumeUrl}
                  download
                  className="w-full text-center inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
