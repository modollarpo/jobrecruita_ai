import { useState } from 'react';
import { useRouter } from 'next/router';
import { apiFetch } from '../../../shared/utils/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    try {
      const res = await apiFetch<{ token: string; user: any }>('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem('token', res.token);
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
      <form className="bg-white dark:bg-gray-900 p-8 rounded shadow w-full max-w-md" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <input className="w-full mb-4 p-2 border rounded" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="w-full mb-4 p-2 border rounded" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold" type="submit">Login</button>
      </form>
    </main>
  );
}
