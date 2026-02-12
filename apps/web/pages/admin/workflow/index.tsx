import React, { useEffect, useState } from 'react';
import { AppShell } from '../../../components/AppShell';
import { PageHeader } from '../../../components/PageHeader';
import { Table } from '../../../components/Table';
import { apiFetch } from '../../../utils/api';

export default function AdminWorkflowPage() {
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<any[]>('/api/workflows')
      .then(setWorkflows)
      .catch(() => setError('Failed to load workflows'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppShell title="Admin • Workflow – JobRecruita" description="Workflow monitoring and KPI snapshots.">
      <PageHeader title="Admin • Workflow" subtitle="Monitor key workflow KPIs and state." />

      <section className="rounded-2xl border border-gray-border bg-white shadow-premium">
        <div className="px-6 py-4 border-b border-gray-border">
          <p className="text-sm text-gray-body">Showing {workflows.length} KPI snapshots</p>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="h-32 flex items-center justify-center text-gray-400">Loading...</div>
          ) : error ? (
            <div className="h-32 flex items-center justify-center text-red-500">{error}</div>
          ) : (
            <Table columns={["kpi", "value", "createdAt"]} data={workflows} />
          )}
        </div>
      </section>
    </AppShell>
  );
}
