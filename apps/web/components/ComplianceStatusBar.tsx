import React from 'react';

interface ComplianceStatusBarProps {
  daysRemaining?: number;
}

export function ComplianceStatusBar({ daysRemaining = 32 }: ComplianceStatusBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 pb-4">
      <div className="flex w-full max-w-3xl items-center justify-between gap-4 rounded-2xl border border-amber-300/60 bg-amber-950/90 px-4 py-2 text-xs text-amber-50 shadow-[0_18px_40px_rgba(15,23,42,0.75)]">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[11px] font-semibold text-amber-950">
            !
          </span>
          <div>
            <p className="font-semibold tracking-wide uppercase text-[10px] text-amber-200/90">Compliance status: active</p>
            <p className="text-[11px] text-amber-100/90">Ontario Working for Workers compliance · ghosting fines avoided</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-mono text-[11px] text-amber-100">{daysRemaining} days</p>
          <p className="text-[10px] text-amber-200/80">until next mandatory candidate status update</p>
        </div>
      </div>
    </div>
  );
}
