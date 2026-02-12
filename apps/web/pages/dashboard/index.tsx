import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AppShell } from '../../components/AppShell';
import { PageHeader } from '../../components/PageHeader';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Enterprise Dashboard – JobRecruita</title>
        <meta name="description" content="Real-time recruiting KPIs, pipeline health, and operational insights for enterprise hiring teams." />
        <meta name="keywords" content="dashboard, recruiting KPIs, pipeline, analytics, enterprise HR, JobRecruita" />
      </Head>
      <AppShell
        title="Dashboard – JobRecruita"
        description="Enterprise recruiting dashboard with KPIs and operational insights."
      >
        <PageHeader
          title="Enterprise Dashboard"
          subtitle="A real-time view of pipeline health, job performance, and operational signals."
        />

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Users', value: '1,234', href: '/admin/users' },
            { label: 'Jobs', value: '567', href: '/admin/jobs' },
            { label: 'Workflows', value: '42', href: '/admin/workflow' },
            { label: 'Logs', value: '8,900', href: '/admin/logs' },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-gray-border bg-white p-6 shadow-premium">
              <div className="text-sm font-semibold text-gray-body">{kpi.label}</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-gray-heading">{kpi.value}</div>
              <div className="mt-4">
                <Link
                  href={kpi.href}
                  className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-heading hover:bg-blue-50 transition"
                >
                  Open
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-xl border border-gray-border bg-white shadow-premium">
          <div className="border-b border-gray-border px-6 py-4">
            <div className="text-sm font-semibold text-gray-heading">Analytics Overview</div>
            <div className="mt-1 text-sm text-gray-body">Enterprise-grade analytics, conversion metrics, and compliance signals for your entire hiring pipeline.</div>
          </div>
          <div className="px-6 py-10 text-center text-sm text-gray-body">
            <span className="font-semibold text-brand-primary">All analytics are updated in real time. Export, filter, and drill down for actionable insights.</span>
          </div>
        </section>
      </AppShell>
    </>
  );
}
