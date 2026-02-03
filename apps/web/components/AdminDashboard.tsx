// Admin Dashboard main component
import { Card } from './Card';
import { Table } from './Table';
import { Button } from './Button';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('./Chart').then(mod => ({ default: mod.Chart })), { ssr: false });

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Users">128</Card>
        <Card title="Jobs">42</Card>
        <Card title="Active Workflows">7</Card>
      </div>

      <div className="rounded-2xl border border-gray-border bg-white shadow-premium p-6">
        <h2 className="text-lg font-semibold text-gray-heading mb-4">System Metrics</h2>
        <Chart type="line" data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            {
              label: 'System Load',
              data: [10, 20, 15, 30],
              borderColor: 'rgba(37,99,235,1)',
              backgroundColor: 'rgba(37,99,235,0.2)',
            },
          ],
        }} />
      </div>

      <div className="rounded-2xl border border-gray-border bg-white shadow-premium p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-heading">User Management</h2>
          <Button type="button">Add User</Button>
        </div>
        <div className="mt-4">
          <Table columns={["name", "role", "status"]} data={[]} />
        </div>
      </div>

      <div className="rounded-2xl border border-gray-border bg-white shadow-premium p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-heading">Job Management</h2>
          <Button type="button">Add Job</Button>
        </div>
        <div className="mt-4">
          <Table columns={["title", "company", "status"]} data={[]} />
        </div>
      </div>
    </div>
  );
}
