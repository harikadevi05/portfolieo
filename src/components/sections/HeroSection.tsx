"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Download, Mail, Github, Linkedin, Twitter, Sparkles, ArrowRight, Code2, Database } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const { name, title, tagline, summary, resumeUrl, socials } = portfolioData.developer;

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Main Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Data Engineering & Cloud Roles</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent">{name}</span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-blue-500 dark:text-blue-400 tracking-tight pt-1">
                {title}
              </p>
            </div>

            {/* Intro Summary */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {tagline} {summary.slice(0, 220)}...
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {["Python", "SQL", "MySQL", "AWS Cloud", "Power BI", "Generative AI"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/60 text-slate-300 border border-slate-800 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs & Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 border border-blue-400/30 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={resumeUrl}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 shadow-md backdrop-blur-md transition-all"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </motion.a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4 border-t border-slate-800/60">
              <span className="text-xs text-slate-400 font-medium">Connect:</span>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {socials.twitter && (
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              <a
                href={`mailto:${socials.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Avatar & Floating Card Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 opacity-30 blur-2xl animate-pulse" />
              
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl shadow-blue-500/10">
                <Image
                  src={portfolioData.developer.avatarUrl}
                  alt={name}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Badge 1 - AWS & Cloud */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AWS Cloud Certified</div>
                  <div className="text-[10px] text-slate-400">EC2 • S3 • IAM</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Gen AI */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Microsoft Gen AI</div>
                  <div className="text-[10px] text-slate-400">DigiSaksham Certified</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
