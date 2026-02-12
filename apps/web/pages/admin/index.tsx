// Admin Dashboard: system metrics, user management, job management, workflow overview
import Head from 'next/head';
import { AdminDashboard } from '../../components/AdminDashboard';
import { AppShell } from '../../components/AppShell';
import { PageHeader } from '../../components/PageHeader';
import { ComplianceStatusBar } from '../../components/ComplianceStatusBar';

export default function AdminDashboardPage() {
  return (
    <>
      <Head>
        <title>Admin Console – JobRecruita</title>
        <meta name="description" content="Enterprise admin dashboard: system health, user management, compliance, and operational excellence." />
        <meta name="keywords" content="admin dashboard, enterprise HR, compliance, user management, system health, JobRecruita" />
      </Head>
      <AppShell title="Admin – JobRecruita" description="Admin console overview and system health.">
        <PageHeader title="Admin Console" subtitle="Enterprise system health, user management, and compliance insights." />
        <AdminDashboard />
        <ComplianceStatusBar />
      </AppShell>
    </>
  );
}
