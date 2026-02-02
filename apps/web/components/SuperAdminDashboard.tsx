// Super-admin Dashboard main component
import { Card } from '../../shared/components/Card';
import { Table } from '../../shared/components/Table';
import { Button } from '../../shared/components/Button';

export function SuperAdminDashboard() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Super-admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Admins">5</Card>
        <Card title="Tenants">3</Card>
        <Card title="Pending Approvals">2</Card>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Admin Management</h2>
        <Table columns={["Name", "Role", "Status"]} data={[]} />
        <Button>Add Admin</Button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Logs</h2>
        {/* Logs table or viewer here */}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Multi-tenant Controls</h2>
        {/* Multi-tenant management UI here */}
      </div>
    </div>
  );
}
