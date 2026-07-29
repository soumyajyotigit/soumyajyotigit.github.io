import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export default function Card({ children, className = "", hoverGlow = true }: CardProps) {
  return (
    <div
      className={`bg-gradient-to-br from-white/[0.02] to-white/[0.005] border border-white/[0.06] rounded-xl p-6 ${
        hoverGlow
          ? "hover:border-indigo-500/30 hover:shadow-[0_8px_30px_rgba(99,102,241,0.05)] transition-all duration-300"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
