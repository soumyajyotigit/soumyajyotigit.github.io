"use client";

import React from "react";
import { skillGroups } from "@/data/skills";
import { LucideIcon, Code2, Monitor, Server, Database, Cloud, BrainCircuit, Network, GitFork } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  "Languages": Code2,
  "Frontend": Monitor,
  "Backend & APIs": Server,
  "Databases": Database,
  "Cloud & DevOps": Cloud,
  "AI & Machine Learning": BrainCircuit,
  "System Architecture": Network,
  "Core Concepts": GitFork,
};

export default function Skills() {
  return (
    <section id="skills" className="section px-6 relative">
      <div className="absolute inset-0 bg-radial-gradient-glow pointer-events-none opacity-40" />

      <div className="mx-auto max-w-6xl relative z-10">
        <FadeIn>
          <div className="section-heading mb-12">
            <p className="eyebrow">Capabilities</p>
            <h2 className="text-white">A Practical Toolkit for End-to-End Delivery</h2>
            <p className="mt-4 text-slate-400 max-w-2xl">
              A comprehensive directory of my technical toolkit, structured across languages, frontend systems, cloud orchestration, architectures, and intelligent services.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {skillGroups.map((group, idx) => {
            const Icon = iconMap[group.label] || Code2;
            return (
              <FadeIn key={group.label} delay={idx * 0.05} className="h-full">
                <motion.article 
                  whileHover={{ y: -3 }}
                  className="surface p-6 h-full flex flex-col justify-between border-white/[0.06] hover:border-indigo-500/40 hover:bg-[#0e0f1d]/50 backdrop-blur-sm rounded-xl transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-2.5 pb-4 border-b border-white/[0.04] mb-5">
                      <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-300">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-300 font-bold">
                        {group.label}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span 
                          className="skill text-xs font-mono select-none px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/5 text-slate-300 hover:border-indigo-500/50 hover:text-white transition-all duration-200" 
                          key={skill}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </FadeIn>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
