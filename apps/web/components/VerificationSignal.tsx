import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface VerificationSignalProps {
  active?: boolean;
  latencyMs?: number;
}

export function VerificationSignal({ active = true, latencyMs = 1020 }: VerificationSignalProps) {
  const latencySeconds = (latencyMs / 1000).toFixed(2);
  if (!active) return null;
  return (
    <div
      className={
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-mono transition-all duration-500 ' +
        'border-emerald-400/80 bg-emerald-500/10 text-emerald-200 shadow-[0_0_24px_2px_rgba(45,212,191,0.45)] animate-pulse'
      }
      style={{ boxShadow: '0 0 16px 2px #2dd4bf, 0 0 0 2px #0f766e inset' }}
    >
      <span
        className={
          'flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-500 ' +
          'border-emerald-300/80 bg-emerald-500/30 text-emerald-100 animate-pulse shadow-[0_0_12px_2px_rgba(45,212,191,0.45)]'
        }
        style={{ boxShadow: '0 0 8px 2px #2dd4bf' }}
      >
        <ShieldCheck className="h-3.5 w-3.5" />
      </span>
      <span className="uppercase tracking-[0.16em] font-mono text-[11px]">ZKP Verified</span>
      <span className="text-[11px] font-mono text-emerald-100/90">{latencySeconds}s</span>
    </div>
  );
}
