import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  className?: string;
}

export default function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const styles = {
    primary: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    secondary: "bg-slate-500/10 border-slate-500/20 text-slate-300",
    success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    warning: "bg-amber-500/10 border-amber-500/20 text-amber-300",
    danger: "bg-rose-500/10 border-rose-500/20 text-rose-300",
    info: "bg-sky-500/10 border-sky-500/20 text-sky-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-medium transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
