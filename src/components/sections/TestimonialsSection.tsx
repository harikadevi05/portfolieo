"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "@/data/portfolioData";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const { testimonials } = portfolioData;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Endorsements"
          title="Peer & Mentor Feedback"
          subtitle="Testimonials from academic department leaders and technical internship mentors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-500/40" />

                <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/40 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-100">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role} • <span className="text-blue-400 font-medium">{t.organization}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
