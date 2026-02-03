import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from './Logo';

type NavItem = {
  href: string;
  label: string;
};

const NAV: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/candidates', label: 'Candidates' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/settings', label: 'Settings' },
];

export function AppShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 rounded bg-white px-4 py-2 shadow-premium border border-gray-border"
      >
        Skip to content
      </a>

      <div className="min-h-screen bg-brand-surface text-gray-heading">
        <header className="sticky top-0 z-40 border-b border-gray-border bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {NAV.map((item) => {
                const active = router.pathname === item.href || router.pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      'rounded-lg px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 ' +
                      (active ? 'text-gray-heading bg-blue-50' : 'text-gray-body hover:text-gray-heading hover:bg-blue-50')
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/auth/login"
                className="text-sm font-medium text-gray-body hover:text-gray-heading rounded-lg px-3 py-2 hover:bg-blue-50 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="text-sm font-semibold text-white bg-brand-primary hover:opacity-90 rounded-lg px-4 py-2 shadow-premium transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>

        <main id="main" className="mx-auto w-full max-w-7xl px-6 py-10">
          {children}
        </main>

        <footer className="border-t border-gray-border bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-body">
            © {new Date().getFullYear()} JobRecruita. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
