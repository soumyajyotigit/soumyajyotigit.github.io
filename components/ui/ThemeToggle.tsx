"use client";

import { Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <div
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] text-slate-400 font-mono text-[10px]"
      title="System locked to Cyber-Dark theme"
    >
      <Moon size={12} className="text-indigo-400" />
      <span>DARK_MODE</span>
    </div>
  );
}
