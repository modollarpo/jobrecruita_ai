import React from 'react';
// Settings and profile management
import Head from 'next/head';
import { SettingsPage } from '../../components/SettingsPage';
import { AppShell } from '../../components/AppShell';

export default function SettingsIndexPage() {
  return (
    <>
      <Head>
        <title>Settings & Compliance – JobRecruita</title>
        <meta name="description" content="Manage your account, preferences, and compliance settings. Enterprise-grade security and privacy controls." />
        <meta name="keywords" content="settings, compliance, privacy, account management, enterprise HR, JobRecruita" />
      </Head>
      <AppShell title="Settings – JobRecruita" description="Manage your account and preferences.">
        <SettingsPage />
      </AppShell>
    </>
  );
}
