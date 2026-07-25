"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "@/data/portfolioData";
import { Award, Sparkles, Cloud, MessageSquare, CheckCircle2, ExternalLink } from "lucide-react";

const iconMap: Record<string, any> = {
  Sparkles,
  Cloud,
  MessageSquare,
  Award,
};

export default function CertificationsSection() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 lg:py-28 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Credentials"
          title="Certifications & Training"
          subtitle="Validated certifications across Artificial Intelligence, AWS Cloud, and Professional Communication."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || Award;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-xl shadow-xl flex flex-col justify-between space-y-6 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-lg">
                      {cert.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-blue-400 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-400 pt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Covered Skills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-1 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Credential Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
