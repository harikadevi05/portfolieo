"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "@/data/portfolioData";
import { ProjectItem } from "@/types/portfolio";
import { Github, ExternalLink, Sparkles, X, Layers } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "Data Science & AI",
    "Cloud & Web",
    "Database & Analytics",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Innovations"
          title="Projects & Implementations"
          subtitle="Explore hands-on data science models, AWS cloud architectures, and database analytical platforms."
        />

        {/* Category Filters */}
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

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={project.id}
                whileHover={{ y: -8 }}
                className="group rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative w-full h-56 overflow-hidden bg-slate-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Featured Pill */}
                    {project.featured && (
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-blue-600/90 text-white shadow-md border border-blue-400/30 backdrop-blur-md">
                        <Sparkles className="w-3 h-3" /> Featured Project
                      </span>
                    )}

                    {/* Quick Link Buttons on Hover */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 shadow-lg backdrop-blur-md transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Project Demo"
                        className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 border border-blue-400/40 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-2xl text-xs font-bold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Project Details</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 text-slate-200"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2 pr-8">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Architecture & Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Technologies Implemented
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live Demo</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
