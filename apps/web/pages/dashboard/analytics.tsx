import Head from 'next/head';

export default function AnalyticsDashboard() {
  return (
    <>
      <Head>
        <title>Analytics Dashboard – JobRecruita</title>
        <meta name="description" content="Enterprise analytics dashboard for JobRecruita. View KPIs, charts, and trends." />
      </Head>
      <main className="min-h-screen bg-white dark:bg-black p-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
        {/* TODO: Add charts, KPIs, and analytics tables */}
        <div className="h-32 flex items-center justify-center text-gray-400 animate-pulse">Analytics charts and KPIs coming soon...</div>
      </main>
      <style jsx global>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </>
  );
}
