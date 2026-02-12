// Analytics Dashboard main component
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('./Chart').then(mod => ({ default: mod.Chart })), { ssr: false });

import { useRef } from 'react';
export function AnalyticsDashboard() {
  const chartRef = useRef<any>(null);
  // Demo data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Candidates',
        data: [5, 10, 8, 12],
        borderColor: 'rgba(16,185,129,1)',
        backgroundColor: 'rgba(16,185,129,0.2)',
      },
    ],
  };
  // Export handler (CSV)
  function handleExport() {
    const csv = [
      ['Month', ...chartData.datasets.map((d) => d.label)].join(','),
      ...chartData.labels.map((label, i) => [label, ...chartData.datasets.map((d) => d.data[i])].join(',')),
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'analytics.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-border bg-white shadow-premium p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-heading mb-2">KPIs</h2>
          <div className="flex flex-wrap gap-4">
            <div className="rounded-xl bg-blue-50 px-4 py-2 text-blue-700 font-bold text-lg">Avg. Time to Fill: 12d</div>
            <div className="rounded-xl bg-emerald-50 px-4 py-2 text-emerald-700 font-bold text-lg">Compliance Rate: 99.8%</div>
            <div className="rounded-xl bg-cyan-50 px-4 py-2 text-cyan-700 font-bold text-lg">AI Match Accuracy: 97.2%</div>
            <div className="rounded-xl bg-amber-50 px-4 py-2 text-amber-700 font-bold text-lg">Ghosting Fines Avoided: $100,000+</div>
          </div>
        </div>
        <button
          onClick={handleExport}
          className="rounded-lg bg-gradient-to-r from-sky-500 to-emerald-400 px-5 py-2 font-bold text-white shadow-lg hover:scale-105 transition-transform"
        >
          Export CSV
        </button>
      </div>

      <div className="rounded-2xl border border-gray-border bg-white shadow-premium p-6">
        <h2 className="text-lg font-semibold text-gray-heading mb-4">Candidate-Job Trends</h2>
        <Chart type="line" data={chartData} />
      </div>

      <div className="rounded-2xl border border-amber-300/60 bg-amber-950/90 shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="font-bold text-amber-200 text-lg mb-1">Compliance Health</div>
          <div className="text-amber-100/90 text-sm">Ontario Working for Workers compliance is active. All candidates are up-to-date. No ghosting fines risk.</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-[13px] font-semibold text-amber-950">!</span>
          <span className="font-mono text-amber-100/90 text-xs">Next update: 32 days</span>
        </div>
      </div>

      <div className="rounded-2xl border border-cyan-300/40 bg-white shadow-premium p-6">
        <h2 className="text-lg font-semibold text-cyan-700 mb-4">Integrations Showcase</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-cyan-900 font-semibold">LinkedIn</div>
          <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-cyan-900 font-semibold">Glassdoor</div>
          <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-cyan-900 font-semibold">Indeed</div>
          <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-cyan-900 font-semibold">API / HRIS</div>
        </div>
        <div className="mt-3 text-xs text-cyan-700">Provision, monitor, and audit all integrations from a single dashboard.</div>
      </div>
    </div>
  );
}
