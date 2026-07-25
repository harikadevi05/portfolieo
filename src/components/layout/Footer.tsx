"use client";

import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail, Twitter, ArrowUp, Sparkles, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 text-slate-400 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow-md shadow-blue-500/20">
                J
              </div>
              <span className="font-bold text-slate-100 text-lg">
                {portfolioData.developer.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {portfolioData.developer.tagline} Focused on Data Science, Python, SQL, Cloud Architecture, and Generative AI solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.developer.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.developer.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {portfolioData.developer.socials.twitter && (
                <a
                  href={portfolioData.developer.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              <a
                href={`mailto:${portfolioData.developer.socials.email}`}
                aria-label="Email"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {portfolioData.navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Secondary Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Credentials
            </h3>
            <ul className="space-y-2 text-xs">
              {portfolioData.navLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            © {currentYear} {portfolioData.developer.name}. All rights reserved. Crafted with{" "}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> using Next.js 15 & Tailwind CSS.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
