"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Credentials"
          title="Education & Qualifications"
          subtitle="Strong academic foundation in Computer Science and analytical sciences."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/40 backdrop-blur-xl shadow-xl flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {edu.score}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-100 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 pt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    {edu.location}
                  </span>
                </div>

                {edu.highlights && (
                  <ul className="space-y-2 pt-2 border-t border-slate-800">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
