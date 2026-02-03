// Admin Dashboard: system metrics, user management, job management, workflow overview
import { AdminDashboard } from '../../components/AdminDashboard';
import { AppShell } from '../../components/AppShell';
import { PageHeader } from '../../components/PageHeader';
import { ComplianceStatusBar } from '../../components/ComplianceStatusBar';

export default function AdminDashboardPage() {
  return (
    <AppShell title="Admin – JobRecruita" description="Admin console overview and system health.">
      <PageHeader title="Admin" subtitle="System overview, metrics, and operational shortcuts." />
      <AdminDashboard />
      <ComplianceStatusBar />
    </AppShell>
  );
}
