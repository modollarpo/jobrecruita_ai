import React from 'react';
import { User } from '../../shared/types/user';

interface AdminUserTableProps {
  users: User[];
}

export function AdminUserTable({ users }: AdminUserTableProps) {
  return (
    <table className="min-w-full divide-y divide-gray-border">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-body">Email</th>
          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-body">Role</th>
          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-body">Created</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-blue-50/60">
            <td className="px-6 py-4 text-sm text-gray-heading">{user.email}</td>
            <td className="px-6 py-4 text-sm text-gray-body">{user.role}</td>
            <td className="px-6 py-4 text-sm text-gray-body">
              {typeof user.createdAt === 'string' || typeof user.createdAt === 'number'
                ? new Date(user.createdAt).toLocaleDateString()
                : String(user.createdAt)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
