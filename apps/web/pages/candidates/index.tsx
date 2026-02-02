
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Table } from '../../components/Table';
import { CandidateProfile } from '../../../shared/types/candidate';
import { apiFetch } from '../../../shared/utils/api';

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState<CandidateProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<CandidateProfile[]>('/api/candidates')
      .then(setCandidates)
      .catch(() => setError('Failed to load candidates'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>Candidates – JobRecruita</title>
        <meta name="description" content="Browse and manage candidates. Enterprise-grade candidate profiles and AI video pitches." />
      </Head>
      <main className="min-h-screen bg-white dark:bg-black p-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Candidates</h1>
        {loading ? (
          <div className="h-32 flex items-center justify-center text-gray-400 animate-pulse">Loading...</div>
        ) : error ? (
          <div className="h-32 flex items-center justify-center text-red-500 animate-fade-in">{error}</div>
        ) : (
          <Table
            columns={["user.email", "user.role", "cvUrl", "videoPitch"]}
            data={candidates.map(c => ({
              'user.email': c.user.email,
              'user.role': c.user.role,
              cvUrl: c.cvUrl || '',
              videoPitch: c.videoPitch || '',
            }))}
          />
        )}
      </main>
      <style jsx global>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </>
  );
}
