// Super-admin Dashboard main component
import { Card } from './Card';
import { Table } from './Table';
import { Button } from './Button';

export function SuperAdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Admins">5</Card>
        <Card title="Tenants">3</Card>
        <Card title="Pending Approvals">2</Card>
      </div>

      <div className="rounded-2xl border border-gray-border bg-white shadow-premium p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-heading">Admin Management</h2>
          <Button type="button">Add Admin</Button>
        </div>
        <div className="mt-4">
          <Table columns={["name", "role", "status"]} data={[]} />
        </div>
      </div>

      <div className="rounded-2xl border border-gray-border bg-white shadow-premium p-6">
        <h2 className="text-lg font-semibold text-gray-heading mb-2">Logs</h2>
        {/* Logs table or viewer here */}
        <p className="text-sm text-gray-body">Connect the audit log pipeline to view events.</p>
      </div>

      <div className="rounded-2xl border border-gray-border bg-white shadow-premium p-6">
        <h2 className="text-lg font-semibold text-gray-heading mb-2">Multi-tenant Controls</h2>
        {/* Multi-tenant management UI here */}
        <p className="text-sm text-gray-body">Tenant limits, approvals, and policy enforcement.</p>
      </div>
    </div>
  );
}
