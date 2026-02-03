// Super-admin Dashboard: admin management, logs, approvals, multi-tenant controls
import { SuperAdminDashboard } from '../../components/SuperAdminDashboard';
import { AppShell } from '../../components/AppShell';
import { PageHeader } from '../../components/PageHeader';

export default function SuperAdminDashboardPage() {
  return (
    <AppShell
      title="Super-admin – JobRecruita"
      description="Enterprise super-admin dashboard for multi-tenant management, logs, and approvals."
    >
      <PageHeader
        title="Super-admin"
        subtitle="Multi-tenant controls, approvals, and audit oversight."
      />
      <SuperAdminDashboard />
    </AppShell>
  );
}
