// Analytics Dashboard main component
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('./Chart').then(mod => ({ default: mod.Chart })), { ssr: false });

export function AnalyticsDashboard() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-border bg-white shadow-premium p-6">
        <h2 className="text-lg font-semibold text-gray-heading mb-4">KPIs</h2>
        {/* KPI cards here */}
      </div>

      <div className="rounded-2xl border border-gray-border bg-white shadow-premium p-6">
        <h2 className="text-lg font-semibold text-gray-heading mb-4">Candidate-Job Trends</h2>
        <Chart type="line" data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            {
              label: 'Candidates',
              data: [5, 10, 8, 12],
              borderColor: 'rgba(16,185,129,1)',
              backgroundColor: 'rgba(16,185,129,0.2)',
            },
          ],
        }} />
      </div>
    </div>
  );
}
