import React, { useEffect, useState } from 'react';
import { AppShell } from '../../../components/AppShell';
import { PageHeader } from '../../../components/PageHeader';
import { Table } from '../../../components/Table';
import { apiFetch } from '../../../utils/api';
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
    <AppShell title="Admin • Jobs – JobRecruita" description="Admin job inventory and moderation.">
      <PageHeader title="Admin • Jobs" subtitle="Review job listings and basic metadata." />

      <section className="rounded-2xl border border-gray-border bg-white shadow-premium">
        <div className="px-6 py-4 border-b border-gray-border">
          <p className="text-sm text-gray-body">Showing {jobs.length} jobs</p>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="h-32 flex items-center justify-center text-gray-400">Loading...</div>
          ) : error ? (
            <div className="h-32 flex items-center justify-center text-red-500">{error}</div>
          ) : (
            <Table columns={["title", "company", "postedBy", "createdAt"]} data={jobs} />
          )}
        </div>
      </section>
    </AppShell>
  );
}
