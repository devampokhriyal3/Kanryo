import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Arrow() {
  return (
    <span className="inline-flex overflow-hidden" aria-hidden>
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: Props) {
  const styles = {
    primary:
      "bg-blue text-white shadow-[0_10px_30px_-12px_var(--glow)] hover:bg-[#0f6aee]",
    ghost:
      "bg-white/70 text-ink border border-[var(--line)] hover:border-[#1677FF]/35 hover:bg-white",
    dark: "bg-blue-deep text-white hover:bg-[#0a3270]",
  }[variant];

  const cls = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold tracking-[-0.01em] transition-all duration-300",
    styles,
    className,
  );

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
