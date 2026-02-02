// Analytics Dashboard main component
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('./Chart').then(mod => ({ default: mod.Chart })), { ssr: false });

export function AnalyticsDashboard() {
  return (
    <div className="p-8 space-y-8 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">KPIs</h2>
        {/* KPI cards here */}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Candidate-Job Trends</h2>
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
