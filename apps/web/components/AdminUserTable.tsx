import { User } from '../../shared/types/user';

interface AdminUserTableProps {
  users: User[];
}

export function AdminUserTable({ users }: AdminUserTableProps) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3">Email</th>
          <th className="px-6 py-3">Role</th>
          <th className="px-6 py-3">Created</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-6 py-4">{user.email}</td>
            <td className="px-6 py-4">{user.role}</td>
            <td className="px-6 py-4">{user.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
