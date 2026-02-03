import Head from 'next/head';
import { AppShell } from '../../components/AppShell';
import { PageHeader } from '../../components/PageHeader';
import { AnalyticsDashboard as AnalyticsDashboardContent } from '../../components/AnalyticsDashboard';

export default function DashboardAnalyticsPage() {
  return (
    <>
      <Head>
        <title>Dashboard • Analytics – JobRecruita</title>
        <meta name="description" content="Analytics dashboard for JobRecruita. View KPIs, charts, and trends." />
      </Head>

      <AppShell title="Dashboard • Analytics – JobRecruita" description="Analytics dashboard for JobRecruita.">
        <PageHeader title="Dashboard • Analytics" subtitle="Fast visibility into growth and matching performance." />
        <AnalyticsDashboardContent />
      </AppShell>
    </>
  );
}
