// Analytics Dashboards: charts, KPIs, candidate-job trends
import { AnalyticsDashboard } from '../../components/AnalyticsDashboard';
import { AppShell } from '../../components/AppShell';
import { PageHeader } from '../../components/PageHeader';

export default function AnalyticsDashboardPage() {
  return (
    <AppShell title="Analytics – JobRecruita" description="Enterprise analytics: KPIs, trends, and operational insights.">
      <PageHeader title="Analytics" subtitle="KPIs, trends, and operational signals across the platform." />
      <AnalyticsDashboard />
    </AppShell>
  );
}
