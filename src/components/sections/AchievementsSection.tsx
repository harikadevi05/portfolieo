"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "@/data/portfolioData";
import { Trophy, Flame, Code, Sparkles, Globe } from "lucide-react";

export default function AchievementsSection() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Recognition & Milestones"
          title="Achievements & Coding Profiles"
          subtitle="Honors, competitive excellence, and coding highlights."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-amber-500/40 backdrop-blur-xl shadow-xl flex flex-col justify-between space-y-6 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="w-6 h-6" />
                  </div>
                  {item.metric && (
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {item.metric}
                    </span>
                  )}
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                    {item.category} • {item.date}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
