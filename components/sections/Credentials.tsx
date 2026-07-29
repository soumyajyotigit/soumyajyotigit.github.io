"use client";

import React from "react";
import { Award, Trophy, Star, CheckCircle2, GraduationCap, Code2, Sparkles } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Data Science: Building Machine Learning Models",
    issuer: "Harvard University",
    icon: GraduationCap,
    gradient: "from-[#ef4444]/15 via-[#b91c1c]/5 to-transparent",
    borderColor: "border-[#ef4444]/20 hover:border-[#ef4444]/40",
    badgeColor: "text-rose-400 bg-rose-400/10 border-rose-400/20"
  },
  {
    title: "Docker and Kubernetes for Containerized Application Deployment",
    issuer: "Udemy Certificate",
    icon: Award,
    gradient: "from-[#38bdf8]/15 via-[#0369a1]/5 to-transparent",
    borderColor: "border-[#0284c7]/20 hover:border-[#0284c7]/40",
    badgeColor: "text-sky-400 bg-sky-400/10 border-sky-400/20"
  },
  {
    title: "Full-Stack Web Development with Node.js, Express.js, and React",
    issuer: "Udemy Certificate",
    icon: Award,
    gradient: "from-[#6366f1]/15 via-[#4338ca]/5 to-transparent",
    borderColor: "border-[#6366f1]/20 hover:border-[#6366f1]/40",
    badgeColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20"
  }
];

const achievements = [
  {
    label: "Mathematics Talent Search Exam",
    detail: "Rank 1 among 2,000+ students in the State-Level Mathematics Talent Search Examination.",
    metric: "Rank 1",
    subMetric: "State-Level",
    progress: 100,
    accent: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    barColor: "bg-gradient-to-r from-amber-500 to-yellow-400"
  },
  {
    label: "HackerRank Ratings",
    detail: "5-Star ratings in Java and C++ programming categories.",
    metric: "5-Star",
    subMetric: "Java & C++",
    progress: 95,
    accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    barColor: "bg-gradient-to-r from-emerald-500 to-teal-400"
  },
  {
    label: "CodeChef & Codeforces",
    detail: "Solved 150+ problems. (Highest rating of 980 reached).",
    metric: "Peak 980",
    subMetric: "150+ Solved",
    progress: 75,
    accent: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    barColor: "bg-gradient-to-r from-violet-500 to-purple-400"
  },
  {
    label: "LeetCode Practice",
    detail: "Solved 100+ problems covering arrays, trees, dynamic programming, and graphs.",
    metric: "100+ Solved",
    subMetric: "DSA Mastery",
    progress: 68,
    accent: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    barColor: "bg-gradient-to-r from-cyan-500 to-sky-400"
  }
];

export default function Credentials() {
  return (
    <section id="credentials" className="section px-6 relative bg-gradient-radial-glow">
      {/* Visual background overlay */}
      <div className="absolute inset-0 bg-radial-gradient-glow pointer-events-none opacity-50" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <FadeIn>
          <div className="section-heading mb-12">
            <p className="eyebrow">Credentials & Milestones</p>
            <h2 className="mt-2 text-white">Certifications and Competitive Achievements</h2>
            <p className="mt-4 text-slate-400 max-w-2xl">
              Professional training credentials alongside quantitative milestones in algorithms, data structures, and mathematical problem-solving.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] mt-12">
          {/* Certifications Section */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-indigo-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-300 font-bold">
                  Verified Certifications
                </h3>
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-4">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <motion.article
                    key={cert.title}
                    whileHover={{ y: -3 }}
                    className={`p-5 rounded-xl border bg-gradient-to-br ${cert.gradient} ${cert.borderColor} bg-black/25 backdrop-blur-sm transition-all duration-300 shadow-lg`}
                  >
                    <div className="flex gap-4 items-start">
                      <div className="p-3 bg-white/[0.03] border border-white/5 rounded-lg text-indigo-300">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-start gap-2">
                          <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${cert.badgeColor}`}>
                            {cert.issuer}
                          </span>
                          <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-400">
                            <CheckCircle2 size={10} /> Verified
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-100 leading-snug pt-1">
                          {cert.title}
                        </h4>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Achievements Section */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-2 mb-4">
                <Trophy size={18} className="text-indigo-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-300 font-bold">
                  Competitive Milestones & Ranks
                </h3>
              </div>
            </FadeIn>

            <div className="grid gap-4 sm:grid-cols-2">
              {achievements.map((ach, index) => (
                <FadeIn key={ach.label} delay={0.15 + index * 0.05} className="h-full">
                  <article className="surface p-5 h-full flex flex-col justify-between border-white/[0.06] hover:border-indigo-500/40 hover:bg-[#0e0f1d]/50 backdrop-blur-sm rounded-xl">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <h4 className="text-xs font-bold text-slate-300 font-mono tracking-tight">
                          {ach.label}
                        </h4>
                        <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 border rounded-full ${ach.accent}`}>
                          {ach.metric}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal">
                        {ach.detail}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.04]">
                      <div className="flex justify-between text-[9px] font-mono text-slate-500 mb-1.5">
                        <span>Index Rank / Solved</span>
                        <span className="text-slate-300">{ach.subMetric}</span>
                      </div>
                      <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${ach.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full rounded-full ${ach.barColor}`}
                        />
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
