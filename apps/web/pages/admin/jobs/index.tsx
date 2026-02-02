import { useEffect, useState } from 'react';
import { Table } from '../../../../shared/components/Table';
import { apiFetch } from '../../../../shared/utils/api';
import { Job } from '../../../../shared/types/job';

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<Job[]>('/api/admin-jobs')
      .then(setJobs)
      .catch(() => setError('Failed to load jobs'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-black p-8">
      <h1 className="text-3xl font-bold mb-6">Admin: Jobs</h1>
      {loading ? (
        <div className="h-32 flex items-center justify-center text-gray-400">Loading...</div>
      ) : error ? (
        <div className="h-32 flex items-center justify-center text-red-500">{error}</div>
      ) : (
        <Table columns={["title", "company", "postedBy", "createdAt"]} data={jobs} />
      )}
    </main>
  );
}
