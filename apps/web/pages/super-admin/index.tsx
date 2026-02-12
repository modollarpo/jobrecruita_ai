
import Head from 'next/head';
import { SuperAdminDashboard } from '../../components/SuperAdminDashboard';
import { AppShell } from '../../components/AppShell';
import { PageHeader } from '../../components/PageHeader';

export default function SuperAdminDashboardPage() {
  return (
    <>
      <Head>
        <title>Super Admin – JobRecruita</title>
        <meta name="description" content="Enterprise super-admin dashboard for multi-tenant management, audit logs, and compliance approvals." />
        <meta name="keywords" content="super admin, multi-tenant, audit logs, compliance, enterprise HR, JobRecruita" />
      </Head>
      <AppShell
        title="Super-admin – JobRecruita"
        description="Enterprise super-admin dashboard for multi-tenant management, logs, and approvals."
      >
        <PageHeader
          title="Super Admin"
          subtitle="Multi-tenant controls, compliance approvals, and audit oversight."
        />
        <SuperAdminDashboard />
      </AppShell>
    </>
  );
}
