import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Admin Dashboard – JobRecruita</title>
        <meta name="description" content="Enterprise admin dashboard for JobRecruita. Manage users, jobs, workflows, and logs." />
      </Head>
      <main className="min-h-screen bg-white dark:bg-black p-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-transform focus-within:ring-2 focus-within:ring-blue-400">
            <h2 className="text-lg font-semibold">Users</h2>
            <p className="text-2xl font-bold">1,234</p>
            <Link href="/admin/users" className="text-blue-700 dark:text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-400">Manage</Link>
          </div>
          <div className="bg-green-100 dark:bg-green-900 p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-transform focus-within:ring-2 focus-within:ring-green-400">
            <h2 className="text-lg font-semibold">Jobs</h2>
            <p className="text-2xl font-bold">567</p>
            <Link href="/admin/jobs" className="text-green-700 dark:text-green-300 underline focus:outline-none focus:ring-2 focus:ring-green-400">Manage</Link>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-transform focus-within:ring-2 focus-within:ring-yellow-400">
            <h2 className="text-lg font-semibold">Workflows</h2>
            <p className="text-2xl font-bold">42</p>
            <Link href="/admin/workflow" className="text-yellow-700 dark:text-yellow-300 underline focus:outline-none focus:ring-2 focus:ring-yellow-400">View</Link>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-transform focus-within:ring-2 focus-within:ring-gray-400">
            <h2 className="text-lg font-semibold">Logs</h2>
            <p className="text-2xl font-bold">8,900</p>
            <Link href="/admin/logs" className="text-gray-700 dark:text-gray-300 underline focus:outline-none focus:ring-2 focus:ring-gray-400">View</Link>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Analytics Overview</h2>
          {/* TODO: Add charts and KPIs here */}
          <div className="h-32 flex items-center justify-center text-gray-400 animate-pulse">Analytics charts coming soon...</div>
        </div>
      </main>
      <style jsx global>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </>
  );
}
