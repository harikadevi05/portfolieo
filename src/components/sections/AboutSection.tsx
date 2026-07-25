"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "@/data/portfolioData";
import { Target, Award, Brain, Rocket, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const { summary, objective } = portfolioData.developer;
  const { stats } = portfolioData;

  return (
    <section id="about" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Background & Vision"
          title="About Me"
          subtitle="Combining strong Computer Science fundamentals with practical data engineering and cloud execution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Bio & Career Objective */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 flex flex-col justify-between"
          >
            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-400" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {summary}
              </p>
            </div>

            {/* Objective Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-950/40 via-slate-900/80 to-purple-950/30 border border-blue-500/20 backdrop-blur-xl shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-400" />
                <span>Career Objective</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {objective}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                {[
                  "Data Pipeline Design",
                  "Cloud Infrastructure",
                  "Generative AI Workflows",
                  "Analytics Dashboards",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Stats Counters Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl flex flex-col justify-center text-center group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                  <span className="text-purple-400 text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}

            {/* Language Pill Card */}
            <div className="col-span-2 p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Multilingual Proficiency</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["English (Professional)", "Telugu (Native)", "Hindi (Fluent)"].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
