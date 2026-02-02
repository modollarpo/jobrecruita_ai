import { AdminUserTable } from '../../../components/AdminUserTable';


import { useEffect, useState } from 'react';
import { apiFetch } from '../../../../shared/utils/api';
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
    <main className="min-h-screen bg-white dark:bg-black p-8">
      <h1 className="text-3xl font-bold mb-6">Admin: Users</h1>
      {loading ? (
        <div className="h-32 flex items-center justify-center text-gray-400">Loading...</div>
      ) : error ? (
        <div className="h-32 flex items-center justify-center text-red-500">{error}</div>
      ) : (
        <AdminUserTable users={users} />
      )}
    </main>
  );
}
