import React, { useEffect, useState } from 'react';
import { AppShell } from '../../components/AppShell';
import { PageHeader } from '../../components/PageHeader';
import { Table } from '../../components/Table';
import { apiFetch } from '../../utils/api';
import { Job } from '../../../shared/types/job';

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [matchScores, setMatchScores] = useState<Record<string, number | null>>({});
  const [applying, setApplying] = useState<string | null>(null);
  const [applyMsg, setApplyMsg] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<Job[]>('/api/jobs')
      .then(async (jobs) => {
        setJobs(jobs);
        // For demo, use a hardcoded candidateId or fetch from user context
        const candidateId = 'demo-candidate-id';
        const scores: Record<string, number | null> = {};
        await Promise.all(
          jobs.map(async (job) => {
            try {
              const res = await apiFetch<{ score: number }>(
                '/api/ai-match',
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ jobId: job.id, candidateId }),
                }
              );
              scores[job.id] = res.score;
            } catch {
              scores[job.id] = null;
            }
          })
        );
        setMatchScores(scores);
      })
      .catch(() => setError('Failed to load jobs'))
      .finally(() => setLoading(false));
  }, []);

  async function handleApply(jobId: string) {
    setApplying(jobId);
    setApplyMsg(null);
    try {
      const candidateId = 'demo-candidate-id';
      await apiFetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobId, candidateId }),
      });
      setApplyMsg('Application submitted!');
    } catch {
      setApplyMsg('Failed to apply.');
    } finally {
      setApplying(null);
    }
  }

  return (
    <AppShell title="Jobs – JobRecruita" description="Browse and apply to jobs with AI-powered matching.">
      <PageHeader
        title="Jobs"
        subtitle="Explore roles and apply with AI-assisted matching signals."
        right={
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-premium hover:opacity-90 transition"
          >
            Post a Job
          </a>
        }
      />

      <section className="rounded-xl border border-gray-border bg-white shadow-premium">
        <div className="border-b border-gray-border px-6 py-4">
          <div className="text-sm font-semibold text-gray-heading">Open roles</div>
          <div className="mt-1 text-sm text-gray-body">{loading ? 'Loading jobs…' : `${jobs.length} jobs`}</div>
        </div>

        <div className="px-6 py-6">
          {loading ? (
            <div className="h-32 flex items-center justify-center text-gray-body">Loading…</div>
          ) : error ? (
            <div className="h-32 flex items-center justify-center text-red-600">{error}</div>
          ) : (
            <>
              <Table
                columns={["title", "company", "matchScore", "actions"]}
                data={jobs.map((job) => ({
                  title: job.title,
                  company: job.company,
                  matchScore:
                    matchScores[job.id] !== undefined && matchScores[job.id] !== null
                      ? `${matchScores[job.id]!.toFixed(1)}%`
                      : '—',
                  actions: (
                    <button
                      type="button"
                      onClick={() => handleApply(job.id)}
                      disabled={applying === job.id}
                      className={
                        'inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold shadow-premium transition ' +
                        (applying === job.id
                          ? 'bg-gray-100 text-gray-body cursor-not-allowed'
                          : 'bg-brand-primary text-white hover:opacity-90')
                      }
                    >
                      {applying === job.id ? 'Applying…' : 'Apply'}
                    </button>
                  ),
                }))}
              />
              {applyMsg ? <div className="mt-4 text-center text-sm font-medium text-brand-secondary">{applyMsg}</div> : null}
            </>
          )}
        </div>
      </section>
    </AppShell>
  );
}
