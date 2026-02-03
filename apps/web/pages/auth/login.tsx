import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Logo } from '../../components/Logo';
import { apiFetch } from '../../utils/api';

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
    <>
      <Head>
        <title>Login – JobRecruita</title>
        <meta name="description" content="Login to JobRecruita." />
      </Head>

      <div className="min-h-screen bg-brand-surface text-gray-heading">
        <header className="border-b border-gray-border bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/auth/register"
                className="text-sm font-semibold text-white bg-brand-primary hover:opacity-90 rounded-lg px-4 py-2 shadow-premium transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-16">
          <form
            className="w-full max-w-md rounded-2xl border border-gray-border bg-white shadow-premium p-8"
            onSubmit={handleLogin}
          >
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="mt-2 text-sm text-gray-body">Sign in to your workspace.</p>

            <div className="mt-8 space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-body">Email</span>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-border bg-white px-3 py-2 text-sm text-gray-heading placeholder:text-gray-body/60"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-body">Password</span>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-border bg-white px-3 py-2 text-sm text-gray-heading placeholder:text-gray-body/60"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </label>

              {error ? <div className="text-sm text-red-600">{error}</div> : null}

              <button
                className="w-full rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white shadow-premium transition hover:opacity-90"
                type="submit"
              >
                Login
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-body">
              New here?{' '}
              <Link href="/auth/register" className="font-semibold text-gray-heading hover:underline">
                Create an account
              </Link>
            </p>
          </form>
        </main>
      </div>
    </>
  );
}
