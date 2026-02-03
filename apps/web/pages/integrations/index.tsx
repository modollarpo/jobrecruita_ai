// Integration pages: LinkedIn, Glassdoor, Indeed, API connections
import { IntegrationsPage } from '../../components/IntegrationsPage';
import { AppShell } from '../../components/AppShell';

export default function IntegrationsIndexPage() {
  return (
    <AppShell title="Integrations – JobRecruita" description="Connect sourcing channels and automate workflows.">
      <IntegrationsPage />
    </AppShell>
  );
}
