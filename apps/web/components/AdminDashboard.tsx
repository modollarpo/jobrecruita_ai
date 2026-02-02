// Admin Dashboard main component
import { Card } from './Card';
import { Table } from './Table';
import { Button } from './Button';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('./Chart').then(mod => ({ default: mod.Chart })), { ssr: false });

export function AdminDashboard() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Users">128</Card>
        <Card title="Jobs">42</Card>
        <Card title="Active Workflows">7</Card>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">System Metrics</h2>
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
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">User Management</h2>
        <Table columns={["Name", "Role", "Status"]} data={[]} />
        <Button>Add User</Button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Job Management</h2>
        <Table columns={["Title", "Company", "Status"]} data={[]} />
        <Button>Add Job</Button>
      </div>
    </div>
  );
}
