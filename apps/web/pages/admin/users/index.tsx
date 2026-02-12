import React, { useEffect, useState } from 'react';
import { AdminUserTable } from '../../../components/AdminUserTable';
import { AppShell } from '../../../components/AppShell';
import { PageHeader } from '../../../components/PageHeader';
import { apiFetch } from '../../../utils/api';
import { User } from '../../../../shared/types/user';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<User[]>('/api/users')
      .then(setUsers)
      .catch(() => setError('Failed to load users'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppShell title="Admin • Users – JobRecruita" description="Admin user directory and account management.">
      <PageHeader
        title="Admin • Users"
        subtitle="Review accounts, roles, and account creation dates."
      />

      <section className="rounded-2xl border border-gray-border bg-white shadow-premium">
        <div className="px-6 py-4 border-b border-gray-border">
          <p className="text-sm text-gray-body">Showing {users.length} users</p>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="h-32 flex items-center justify-center text-gray-400">Loading...</div>
          ) : error ? (
            <div className="h-32 flex items-center justify-center text-red-500">{error}</div>
          ) : (
            <AdminUserTable users={users} />
          )}
        </div>
      </section>
    </AppShell>
  );
}
