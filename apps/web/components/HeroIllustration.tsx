import React from 'react';

export const HeroIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <div className={(className ?? '') + ' flex justify-center items-center'}>
    <div className="relative w-full max-w-3xl">
      {/* Glassmorphism card */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-300/60 bg-white/10 px-8 py-6 shadow-[0_24px_80px_rgba(15,23,42,0.28)] backdrop-blur-md" style={{boxShadow:'0 8px 48px 0 rgba(31,182,255,0.18), 0 1.5px 0 0 #0099A8'}}>
        {/* Glassy gradient background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-emerald-400/20" />

        {/* Pulsing nodes with animated glow */}
        <div className="relative flex items-center justify-between">
          <div className="relative flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-sky-400/40 blur-2xl animate-pulse" />
              <span className="block h-11 w-11 rounded-full bg-sky-500/90 shadow-[0_0_32px_8px_rgba(56,189,248,0.85)] animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-100/90">Candidate signal</p>
              <p className="text-sm font-bold text-slate-50">Senior Product Engineer</p>
            </div>
          </div>

          <div className="relative flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100/90">Role context</p>
              <p className="text-sm font-bold text-slate-50">AI Hiring Lead · Toronto</p>
            </div>
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-2xl animate-pulse" />
              <span className="block h-11 w-11 rounded-full bg-emerald-500/90 shadow-[0_0_32px_8px_rgba(52,211,153,0.85)] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Match line + score */}
        <div className="mt-6 flex items-center justify-between text-xs">
          <div className="relative h-[3px] flex-1 rounded-full bg-slate-800/80">
            <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 shadow-[0_0_20px_rgba(56,189,248,0.55)] animate-pulse" />
          </div>
          <div className="ml-4 rounded-full border border-cyan-300/60 bg-slate-900/80 px-3 py-1 font-mono text-[11px] text-cyan-100 shadow-[0_0_12px_2px_rgba(31,182,255,0.25)] animate-pulse">
            92.4% match · 1.31s decision
          </div>
        </div>
      </div>
    </div>
  </div>
);
