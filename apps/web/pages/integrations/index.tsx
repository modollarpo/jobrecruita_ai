import React from 'react';
// Integration pages: LinkedIn, Glassdoor, Indeed, API connections
import { IntegrationsPage } from '../../components/IntegrationsPage';
import { AppShell } from '../../components/AppShell';
import Head from 'next/head';
export default function IntegrationsIndexPage() {
  return (
    <>
      <Head>
        <title>Integrations & Automation – JobRecruita</title>
        <meta name="description" content="Connect LinkedIn, Glassdoor, Indeed, and more. Automate sourcing, compliance, and reporting with enterprise integrations." />
        <meta name="keywords" content="integrations, automation, sourcing, LinkedIn, Glassdoor, Indeed, HR tech, JobRecruita" />
      </Head>
      <AppShell title="Integrations – JobRecruita" description="Connect sourcing channels and automate workflows.">
        <IntegrationsPage />
      </AppShell>
    </>
  );
}
