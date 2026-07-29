"use client";

import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import BackgroundCanvas from "@/components/animations/BackgroundCanvas";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

const proof = [
  ["03+", "years of building"],
  ["10K+", "monthly users supported"],
  ["AWS", "cloud-native delivery"],
];

export default function Hero() {
  return (
    <section className="hero relative overflow-hidden px-6 pb-20 pt-32 sm:pt-40 bg-[#06070e]">
      {/* Dynamic drifting canvas nodes (representing containers/pods) */}
      <BackgroundCanvas />
      
      {/* Background radial overlays for a premium gradient depth */}
      <div className="absolute inset-0 bg-radial-gradient-glow pointer-events-none" />
      <div className="hero-grid absolute inset-0 pointer-events-none opacity-40" />

      <div className="relative mx-auto max-w-6xl z-10">
        <FadeIn direction="none" duration={0.8}>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.18em] text-slate-400">
            <span className="availability-dot" />
            Available for meaningful work · {profile.location}
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
          <div>
            <FadeIn direction="up" delay={0.15}>
              <p className="eyebrow mb-5 font-bold">Full-stack developer / cloud engineer / AI builder</p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.25} duration={0.7}>
              <h1 className="hero-title max-w-4xl font-bold tracking-tight">
                Engineering clarity into <span>complex systems.</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.35}>
              <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-slate-300">
                I’m {profile.name}, a full-stack developer who turns complex workflows into fast, resilient web applications—from engaging interfaces and AI-assisted experiences to dependable AWS infrastructure.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.45}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="button button-primary" href="#projects">
                  Explore selected work <ArrowDownRight size={17} />
                </a>
                <a className="button button-secondary" href={`mailto:${profile.email}`}>
                  Let’s talk <Mail size={16} />
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.5} duration={0.8}>
            <div className="system-card bg-gradient-to-br from-[#121425]/95 to-[#0b0c16]/98 border border-indigo-500/20 shadow-2xl p-6 rounded-2xl relative overflow-hidden backdrop-blur-md hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="font-mono text-[10px] uppercase tracking-[.18em] text-cyan-400 font-bold">
                  System overview
                </p>
                <span className="system-live flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Operational
                </span>
              </div>
              <div className="system-layers mt-6 space-y-3">
                <div className="system-layer flex items-center justify-between p-3 bg-white/[0.015] border border-white/5 rounded-lg hover:bg-white/[0.04] transition-all">
                  <span className="text-[10px] font-mono font-bold bg-[#1b203c] text-indigo-300 px-2 py-0.5 rounded">01</span>
                  <div className="flex-1 pl-4 text-left">
                    <p className="text-sm font-semibold text-white">Experience</p>
                    <small className="text-[11px] text-slate-400 mt-0.5 block">React · Next.js · TypeScript</small>
                  </div>
                </div>
                <div className="system-layer flex items-center justify-between p-3 bg-white/[0.015] border border-white/5 rounded-lg hover:bg-white/[0.04] transition-all">
                  <span className="text-[10px] font-mono font-bold bg-[#1b203c] text-indigo-300 px-2 py-0.5 rounded">02</span>
                  <div className="flex-1 pl-4 text-left">
                    <p className="text-sm font-semibold text-white">Services</p>
                    <small className="text-[11px] text-slate-400 mt-0.5 block">Node.js · REST APIs · OpenAI</small>
                  </div>
                </div>
                <div className="system-layer flex items-center justify-between p-3 bg-white/[0.015] border border-white/5 rounded-lg hover:bg-white/[0.04] transition-all">
                  <span className="text-[10px] font-mono font-bold bg-[#1b203c] text-indigo-300 px-2 py-0.5 rounded">03</span>
                  <div className="flex-1 pl-4 text-left">
                    <p className="text-sm font-semibold text-white">Cloud</p>
                    <small className="text-[11px] text-slate-400 mt-0.5 block">AWS · Docker · Kubernetes</small>
                  </div>
                </div>
              </div>
              <p className="mt-6 border-t border-white/10 pt-5 text-[13px] leading-relaxed text-slate-400">
                Designing systems where the product, data, and infrastructure work together—not in isolation.
              </p>
              <div className="mt-6 flex gap-2">
                <a
                  aria-label="GitHub profile"
                  className="social-link flex items-center justify-center border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-400 hover:text-white rounded-lg p-2 transition-all"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                </a>
                <a
                  aria-label="LinkedIn profile"
                  className="social-link flex items-center justify-center border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-400 hover:text-white rounded-lg p-2 transition-all"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  aria-label="Email Soumyajyoti"
                  className="social-link flex items-center justify-center border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-400 hover:text-white rounded-lg p-2 transition-all"
                  href={`mailto:${profile.email}`}
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.6} duration={0.8}>
          <div className="hero-proof mt-16 grid gap-px overflow-hidden border border-white/10 rounded-xl sm:grid-cols-3">
            {proof.map(([value, label]) => (
              <div className="bg-[#0b0c16]/80 px-6 py-5" key={label}>
                <p className="text-2xl font-bold tracking-tight text-white">{value}</p>
                <p className="mt-1 text-[10px] uppercase font-mono tracking-widest text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
