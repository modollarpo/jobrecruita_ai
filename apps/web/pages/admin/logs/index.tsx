import { useEffect, useState } from 'react';
import { Table } from '../../../components/Table';
import { apiFetch } from '../../../../shared/utils/api';

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
    <main className="min-h-screen bg-white dark:bg-black p-8">
      <h1 className="text-3xl font-bold mb-6">Admin: Logs</h1>
      {loading ? (
        <div className="h-32 flex items-center justify-center text-gray-400">Loading...</div>
      ) : error ? (
        <div className="h-32 flex items-center justify-center text-red-500">{error}</div>
      ) : (
        <Table columns={["userId", "action", "createdAt"]} data={logs} />
      )}
    </main>
  );
}
