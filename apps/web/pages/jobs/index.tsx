import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Table } from '../../components/Table';
import { Button } from '../../components/Button';
import { apiFetch } from '../../../shared/utils/api';
import { Job } from '../../../shared/types/job';

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [matchScores, setMatchScores] = useState<Record<string, number | null>>({});

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

      const [applying, setApplying] = useState<string | null>(null);
      const [applyMsg, setApplyMsg] = useState<string | null>(null);

      async function handleApply(jobId: string) {
        setApplying(jobId);
        setApplyMsg(null);
        try {
          // For demo, use a hardcoded candidateId or fetch from user context
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
        <>
          <Head>
            <title>Jobs – JobRecruita</title>
            <meta name="description" content="Browse and apply to jobs with AI-powered matching. Enterprise-grade job board." />
          </Head>
          <main className="min-h-screen bg-white dark:bg-black p-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">Jobs</h1>
            {loading ? (
              <div className="h-32 flex items-center justify-center text-gray-400 animate-pulse">Loading...</div>
            ) : error ? (
              <div className="h-32 flex items-center justify-center text-red-500 animate-fade-in">{error}</div>
            ) : (
              <Table
                columns={["title", "company", "matchScore", "actions"]}
                data={jobs.map(job => ({
                  title: job.title,
                  company: job.company,
                  matchScore: matchScores[job.id] !== undefined ? `${matchScores[job.id]?.toFixed(1)}%` : '—',
                  actions: (
                    <Button
                      onClick={() => handleApply(job.id)}
                      disabled={applying === job.id}
                      className="px-4 py-2 text-sm shadow hover:scale-105 transition-transform"
                    >
                      {applying === job.id ? 'Applying...' : 'Apply'}
                    </Button>
                  ),
                }))}
              />
            )}
            {applyMsg && (
              <div className="mt-4 text-center text-blue-600 font-medium animate-fade-in">{applyMsg}</div>
            )}
          </main>
          <style jsx global>{`
            .animate-fade-in { animation: fadeIn 1s ease; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          `}</style>
        </>
      );
    }
