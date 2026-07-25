"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "@/data/portfolioData";
import {
  Code2,
  Database,
  Cloud,
  Terminal,
  Sparkles,
  LayoutDashboard,
  BarChart3,
  Server,
  HardDrive,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  FileSpreadsheet,
  Table,
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, any> = {
  Code2,
  Database,
  Cloud,
  Terminal,
  Sparkles,
  LayoutDashboard,
  BarChart3,
  Server,
  HardDrive,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  FileSpreadsheet,
  Table,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Data Science & AI",
    "Databases",
    "Cloud",
    "Tools",
    "Backend",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? portfolioData.skills
      : portfolioData.skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Expertise"
          title="Skills & Capabilities"
          subtitle="Specialized in data analysis, relational databases, cloud architecture, and modern AI toolkits."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800/80 hover:bg-slate-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Skill Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.iconName] || Code2;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  key={skill.name}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-xl shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-medium text-slate-400">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
                      {skill.level}%
                    </span>
                  </div>

                  {skill.description && (
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>
                  )}

                  {/* Animated Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
