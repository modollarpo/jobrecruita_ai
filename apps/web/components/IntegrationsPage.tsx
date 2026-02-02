// Integrations main page
import { Card } from './Card';
import { Button } from './Button';

export function IntegrationsPage() {
  return (
    <div className="p-8 space-y-8 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Integrations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="LinkedIn">Connect to LinkedIn for sourcing and auto-apply.</Card>
        <Card title="Glassdoor">Integrate Glassdoor for reviews and jobs.</Card>
        <Card title="Indeed">Sync with Indeed for job posting and auto-apply.</Card>
        <Card title="API">Custom API connections for your workflows.</Card>
      </div>
      <Button>Connect New Integration</Button>
    </div>
  );
}
