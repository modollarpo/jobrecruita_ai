import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AppShell } from '../../components/AppShell';
import { PageHeader } from '../../components/PageHeader';
import { Table } from '../../components/Table';
import { CandidateProfile } from '../../../shared/types/candidate';
import { apiFetch } from '../../utils/api';

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState<CandidateProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<unknown>('/api/candidates')
      .then((payload) => {
        const arrayPayload = Array.isArray(payload)
          ? payload
          : Array.isArray((payload as any)?.candidates)
          ? (payload as any).candidates
          : [];
        setCandidates(arrayPayload as CandidateProfile[]);
      })
      .catch(() => setError('Failed to load candidates'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>Candidates & Digital Twins – JobRecruita</title>
        <meta name="description" content="Enterprise-grade candidate directory. Review digital twins, AI insights, and compliance signals for every applicant." />
        <meta name="keywords" content="candidates, digital twin, AI insights, compliance, HR directory, JobRecruita" />
      </Head>
      <AppShell
        title="Candidates – JobRecruita"
        description="Browse and manage candidates. Enterprise-grade profiles and AI insights."
      >
        <PageHeader
          title="Candidates & Digital Twins"
          subtitle="Review digital twins, AI insights, and compliance signals for every applicant."
        />

        <section className="rounded-xl border border-gray-border bg-white shadow-premium">
          <div className="border-b border-gray-border px-6 py-4">
            <div className="text-sm font-semibold text-gray-heading">Directory</div>
            <div className="mt-1 text-sm text-gray-body">{loading ? 'Loading candidates…' : `${candidates.length} candidates`}</div>
          </div>
          <div className="px-6 py-6">
            {loading ? (
              <div className="h-32 flex items-center justify-center text-gray-body">Loading…</div>
            ) : error ? (
              <div className="h-32 flex items-center justify-center text-red-600">{error}</div>
            ) : Array.isArray(candidates) && candidates.length > 0 ? (
              <Table
                columns={["user.email", "user.role", "cvUrl", "videoPitch"]}
                data={candidates.map((c) => ({
                  'user.email': c.user.email,
                  'user.role': c.user.role,
                  cvUrl: c.cvUrl || '—',
                  videoPitch: c.videoPitch || '—',
                }))}
              />
            ) : (
              <div className="h-32 flex items-center justify-center text-gray-body">No candidates yet.</div>
            )}
          </div>
        </section>
      </AppShell>
    </>
  );
}
