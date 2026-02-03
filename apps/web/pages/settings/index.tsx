// Settings and profile management
import Head from 'next/head';
import { SettingsPage } from '../../components/SettingsPage';
import { AppShell } from '../../components/AppShell';

export default function SettingsIndexPage() {
  return (
    <>
      <Head>
        <title>Settings – JobRecruita</title>
        <meta name="description" content="Manage your account and preferences. Enterprise-grade settings and profile management." />
      </Head>
      <AppShell title="Settings – JobRecruita" description="Manage your account and preferences.">
        <SettingsPage />
      </AppShell>
    </>
  );
}
