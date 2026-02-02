// Super-admin Dashboard: admin management, logs, approvals, multi-tenant controls
import Head from 'next/head';
import { SuperAdminDashboard } from '../../components/SuperAdminDashboard';

export default function SuperAdminDashboardPage() {
  return (
    <>
      <Head>
        <title>Super-admin Dashboard – JobRecruita</title>
        <meta name="description" content="Enterprise super-admin dashboard for multi-tenant management, logs, and approvals." />
      </Head>
      <div className="animate-fade-in">
        <SuperAdminDashboard />
      </div>
      <style jsx global>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </>
  );
}
