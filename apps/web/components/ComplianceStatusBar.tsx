import React from 'react';

interface ComplianceStatusBarProps {
  compliance?: number; // percentage
}

export function ComplianceStatusBar({ compliance = 92 }: ComplianceStatusBarProps) {
  // Color logic for high compliance
  const barColor = compliance >= 95
    ? 'bg-green-500'
    : compliance >= 80
    ? 'bg-yellow-400'
    : 'bg-red-500';
  const barStyle = {
    width: `${compliance}%`,
    backgroundImage: compliance >= 95
      ? 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)'
      : compliance >= 80
      ? 'linear-gradient(90deg, #facc15 0%, #f59e42 100%)'
      : 'linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)',
    height: '8px',
    borderRadius: '6px',
    transition: 'width 0.3s',
  };
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 pb-4">
      <div className="flex w-full max-w-3xl items-center justify-between gap-4 rounded-2xl border border-amber-300/60 bg-amber-950/90 px-4 py-2 text-xs text-amber-50 shadow-[0_18px_40px_rgba(15,23,42,0.75)]">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[11px] font-semibold text-amber-950">
              !
            </span>
            <span className="font-semibold tracking-wide uppercase text-[10px] text-amber-200/90">Compliance</span>
            <span className="font-mono text-[13px] text-amber-100">{compliance}%</span>
          </div>
          <div className="w-full bg-amber-900/60 rounded-md h-2 mt-1" style={{ position: 'relative' }}>
            <div role="progressbar" aria-valuenow={compliance} aria-valuemin={0} aria-valuemax={100} style={barStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}
