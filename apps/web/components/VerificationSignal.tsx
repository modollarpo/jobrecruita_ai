import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface VerificationSignalProps {
  active?: boolean;
  latencyMs?: number;
}

export function VerificationSignal({ active = true, latencyMs = 1020 }: VerificationSignalProps) {
  const latencySeconds = (latencyMs / 1000).toFixed(2);

  return (
    <div
      className={
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-mono ' +
        (active
          ? 'border-emerald-400/70 bg-emerald-500/10 text-emerald-200 shadow-[0_0_20px_rgba(45,212,191,0.45)]'
          : 'border-slate-600/80 bg-slate-900 text-slate-300')
      }
    >
      <span
        className={
          'flex h-5 w-5 items-center justify-center rounded-full border ' +
          (active
            ? 'border-emerald-300/70 bg-emerald-500/20 text-emerald-100 animate-pulse'
            : 'border-slate-600 bg-slate-900 text-slate-400')
        }
      >
        <ShieldCheck className="h-3.5 w-3.5" />
      </span>
      <span className="uppercase tracking-[0.16em]">ZKP verified</span>
      <span className="text-[10px] text-emerald-100/80">{latencySeconds}s</span>
    </div>
  );
}
