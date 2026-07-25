"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`space-y-3 mb-12 sm:mb-16 ${center ? "text-center max-w-3xl mx-auto" : ""}`}
    >
      <div
        className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-md shadow-sm ${
          center ? "mx-auto" : ""
        }`}
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span className="uppercase tracking-wider">{badge}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
