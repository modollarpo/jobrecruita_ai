// Settings and profile management
import Head from 'next/head';
import { SettingsPage } from '../../components/SettingsPage';

export default function SettingsIndexPage() {
  return (
    <>
      <Head>
        <title>Settings – JobRecruita</title>
        <meta name="description" content="Manage your account and preferences. Enterprise-grade settings and profile management." />
      </Head>
      <div className="animate-fade-in">
        <SettingsPage />
      </div>
      <style jsx global>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </>
  );
}
