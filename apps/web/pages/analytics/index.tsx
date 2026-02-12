import Head from 'next/head';
import { AnalyticsDashboard } from '../../components/AnalyticsDashboard';
import { AppShell } from '../../components/AppShell';
import { PageHeader } from '../../components/PageHeader';

export default function AnalyticsDashboardPage() {
  return (
    <>
      <Head>
        <title>Analytics & Insights – JobRecruita</title>
        <meta name="description" content="Enterprise analytics: KPIs, trends, compliance, and operational insights for data-driven hiring." />
        <meta name="keywords" content="analytics, KPIs, hiring trends, compliance, HR insights, enterprise analytics, JobRecruita" />
      </Head>
      <AppShell title="Analytics – JobRecruita" description="Enterprise analytics: KPIs, trends, and operational insights.">
        <PageHeader title="Analytics & Insights" subtitle="KPIs, compliance, and operational signals across your hiring platform." />
        <AnalyticsDashboard />
      </AppShell>
    </>
  );
}
