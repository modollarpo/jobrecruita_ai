import React, { useEffect, useState } from 'react';
import { AppShell } from '../../../components/AppShell';
import { PageHeader } from '../../../components/PageHeader';
import { Table } from '../../../components/Table';
import { apiFetch } from '../../../utils/api';

export default function AdminLogsPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<any[]>('/api/logs')
      .then(setLogs)
      .catch(() => setError('Failed to load logs'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppShell title="Admin • Logs – JobRecruita" description="System activity logs for auditing and troubleshooting.">
      <PageHeader title="Admin • Logs" subtitle="Audit actions and operational events." />

      <section className="rounded-2xl border border-gray-border bg-white shadow-premium">
        <div className="px-6 py-4 border-b border-gray-border">
          <p className="text-sm text-gray-body">Showing {logs.length} events</p>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="h-32 flex items-center justify-center text-gray-400">Loading...</div>
          ) : error ? (
            <div className="h-32 flex items-center justify-center text-red-500">{error}</div>
          ) : (
            <Table columns={["userId", "action", "createdAt"]} data={logs} />
          )}
        </div>
      </section>
    </AppShell>
  );
}
