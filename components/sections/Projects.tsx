"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, Cpu, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import TagList from "@/components/ui/TagList";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="section px-6 relative">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Selected work"
            title="Systems designed for the real world."
            description="Representative work across real-time applications, cloud infrastructure, enterprise platforms, and automated AI systems. Click any card to expand a detailed case study."
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 grid-cols-1">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.article
                layout="position"
                className={`project-card border transition-all duration-300 ${
                  isExpanded
                    ? "bg-[#0f1122]/90 border-indigo-500 shadow-[0_10px_30px_rgba(99,102,241,0.15)]"
                    : "bg-[#0b0c16]/95 border-white/[0.06] hover:border-indigo-500/50 hover:bg-[#0e0f1d]/80"
                } rounded-xl overflow-hidden`}
                key={project.title}
              >
                {/* Main Card Header (Visible Area) */}
                <div
                  onClick={() => toggleExpand(index)}
                  className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase font-bold">
                        CASE {project.number}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-slate-600" />
                      <span className="text-xs text-sky-400 font-medium uppercase tracking-wider">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl md:text-2xl font-semibold text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-4 shrink-0">
                    <span className="text-[11px] font-mono text-slate-500 block">
                      {project.impact}
                    </span>
                    <button
                      className={`project-arrow flex items-center justify-center h-10 w-10 rounded-full border transition-all ${
                        isExpanded
                          ? "bg-indigo-600 border-indigo-500 text-white"
                          : "border-white/10 text-slate-400 group-hover:text-white"
                      }`}
                      aria-label={isExpanded ? "Collapse details" : "Expand details"}
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                {/* Expandable Case Study Area */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden border-t border-white/5 bg-black/30"
                    >
                      <div className="p-6 md:p-8 space-y-8">
                        {/* Section 1: System Topology / Architecture */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Cpu size={15} className="text-indigo-400" />
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                              System Architecture Topology
                            </h4>
                          </div>
                          <pre className="bg-[#05060b] border border-white/[0.03] rounded-lg p-4 font-mono text-[11px] md:text-xs text-sky-200/90 leading-relaxed overflow-x-auto select-all max-w-full">
                            <code>{project.architecture}</code>
                          </pre>
                        </div>

                        {/* Section 2: Challenge & Solution */}
                        <div className="grid gap-6 md:grid-cols-2">
                          <div className="bg-[#b91c1c]/[0.02] border border-[#ef4444]/10 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2 text-rose-400">
                              <AlertCircle size={15} />
                              <h5 className="text-xs font-mono font-bold uppercase tracking-wider">
                                Technical Bottleneck / Challenge
                              </h5>
                            </div>
                            <p className="text-xs md:text-sm leading-relaxed text-slate-300">
                              {project.challenge}
                            </p>
                          </div>

                          <div className="bg-[#10b981]/[0.02] border border-[#10b981]/10 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2 text-emerald-400">
                              <CheckCircle2 size={15} />
                              <h5 className="text-xs font-mono font-bold uppercase tracking-wider">
                                Engineering Solution
                              </h5>
                            </div>
                            <p className="text-xs md:text-sm leading-relaxed text-slate-300">
                              {project.solution}
                            </p>
                          </div>
                        </div>

                        {/* Section 3: Performance Metrics */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp size={15} className="text-indigo-400" />
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                              Key Performance Metrics
                            </h4>
                          </div>
                          <ul className="grid gap-3 sm:grid-cols-3">
                            {project.metrics.map((metric, idx) => (
                              <li
                                key={idx}
                                className="bg-white/[0.015] border border-white/5 rounded-lg p-3 text-xs md:text-sm text-slate-300 leading-relaxed flex gap-2.5 items-start"
                              >
                                <span className="text-indigo-400 font-mono mt-0.5">↳</span>
                                <span>{metric}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Section 4: Infrastructure & Container Spec */}
                        {project.containerSpec && (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Cpu size={15} className="text-indigo-400" />
                              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                                Container Spec & Service Config
                              </h4>
                            </div>
                            <div className="rounded-lg overflow-hidden border border-white/10 bg-[#06070d]/90 shadow-2xl">
                              <div className="bg-[#121424]/90 px-4 py-2 border-b border-white/5 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                                </div>
                                <span className="text-[10px] font-mono text-slate-400 select-all truncate max-w-[120px] sm:max-w-none">
                                  {project.containerSpec.label}
                                </span>
                                <span className="text-[9px] font-mono bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold shrink-0">
                                  {project.containerSpec.tool}
                                </span>
                              </div>
                              <pre className="p-4 overflow-x-auto text-[11px] md:text-xs font-mono leading-relaxed text-emerald-400/90 max-h-[300px] overflow-y-auto bg-black/40 select-all">
                                <code>{project.containerSpec.code}</code>
                              </pre>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
