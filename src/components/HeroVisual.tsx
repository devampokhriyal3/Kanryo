"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

function Sparkline() {
  return (
    <svg viewBox="0 0 220 72" className="h-16 w-full" aria-hidden>
      <defs>
        <linearGradient id="fillLine" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1677FF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#1677FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 54 C 18 52, 28 40, 44 42 C 62 44, 70 22, 90 24 C 112 26, 118 12, 140 16 C 162 20, 170 8, 190 10 C 204 11, 212 18, 220 14 L 220 72 L 0 72 Z"
        fill="url(#fillLine)"
      />
      <path
        d="M0 54 C 18 52, 28 40, 44 42 C 62 44, 70 22, 90 24 C 112 26, 118 12, 140 16 C 162 20, 170 8, 190 10 C 204 11, 212 18, 220 14"
        fill="none"
        stroke="#1677FF"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function NodeField() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 520" aria-hidden>
      <g stroke="#1677FF" strokeOpacity="0.18" fill="none">
        <path d="M80 120 C 160 80, 240 200, 320 140" />
        <path d="M120 300 C 200 240, 280 360, 400 280" />
        <path d="M60 240 C 180 220, 260 80, 420 120" />
      </g>
      {[
        [80, 120],
        [320, 140],
        [120, 300],
        [400, 280],
        [420, 120],
        [240, 210],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 5 ? 5 : 3.5} fill="#1677FF" fillOpacity={0.45} />
      ))}
    </svg>
  );
}

export function HeroVisual() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const layerA = useTransform(sx, [-20, 20], [-8, 8]);
  const layerB = useTransform(sy, [-16, 16], [6, -6]);
  const layerC = useTransform(sx, [-20, 20], [10, -10]);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 36;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 28;
    mx.set(x);
    my.set(y);
  }

  return (
    <div
      className="relative mx-auto aspect-[1.02/1] w-full max-w-[560px]"
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="orb absolute left-[12%] top-[8%] h-52 w-52 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,transparent_55%),radial-gradient(circle_at_70%_70%,#1677FF,transparent_62%)] opacity-80 blur-2xl" />
      <div className="absolute right-[6%] top-[18%] h-36 w-36 rounded-full bg-[#D9EEFF] blur-xl" />
      <NodeField />

      <motion.div
        style={reduce ? undefined : { x: layerA, y: layerB }}
        className="float-a absolute left-[8%] top-[16%] z-20 w-[72%] overflow-hidden rounded-[18px] border border-white/80 bg-white/90 shadow-[0_30px_60px_-32px_rgba(11,59,120,0.45)]"
      >
        <div className="flex items-center gap-1.5 border-b border-[var(--line)] bg-[#F7FAFC] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
          <span className="h-2 w-2 rounded-full bg-[#ffd43b]" />
          <span className="h-2 w-2 rounded-full bg-[#69db7c]" />
          <span className="ml-2 truncate text-[11px] text-muted">app.kanryo.studio / growth</span>
        </div>
        <div className="grid gap-3 p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Pipeline</p>
              <p className="mt-1 text-2xl font-semibold tracking-[-0.04em]">$184k</p>
            </div>
            <span className="rounded-full bg-ice px-2 py-1 text-[11px] font-semibold text-blue">+18.4%</span>
          </div>
          <Sparkline />
          <div className="grid grid-cols-3 gap-2">
            {["Sessions", "Leads", "Close"].map((label, i) => (
              <div key={label} className="rounded-xl bg-bg px-2.5 py-2">
                <p className="text-[10px] text-muted">{label}</p>
                <p className="text-sm font-semibold">{["42.1k", "1,204", "9.8%"][i]}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        style={reduce ? undefined : { x: layerC }}
        className="float-b absolute right-0 top-[6%] z-30 w-[46%] rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_20px_40px_-24px_rgba(11,59,120,0.4)]"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Acquisition</p>
        <p className="mt-1 text-lg font-semibold tracking-[-0.04em]">−22% CAC</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ice">
          <div className="h-full w-[68%] rounded-full bg-blue" />
        </div>
        <p className="mt-2 text-[11px] text-muted">Paid + organic, same loop</p>
      </motion.div>

      <motion.div
        style={reduce ? undefined : { y: layerB }}
        className="float-c absolute bottom-[8%] left-[2%] z-30 w-[48%] rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_20px_40px_-24px_rgba(11,59,120,0.4)]"
      >
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Launch</p>
          <span className="h-1.5 w-1.5 rounded-full bg-blue" />
        </div>
        <p className="mt-2 text-sm font-semibold leading-5">Product live. Demand live. Same week.</p>
      </motion.div>

      <div className="float-a absolute bottom-[18%] right-[4%] z-10 hidden h-24 w-24 rounded-[28px] border border-[#1677FF]/15 bg-gradient-to-br from-white to-ice sm:block" />
    </div>
  );
}
