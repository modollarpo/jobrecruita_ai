// Integrations main page
import React from 'react';
import { Card } from './Card';
import { PageHeader } from './PageHeader';

export function IntegrationsPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Integrations"
        subtitle="Connect your sourcing channels and automate workflows with trusted providers."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card title="LinkedIn">
          <p className="text-sm text-gray-body">Connect to LinkedIn for sourcing and pipeline enrichment.</p>
        </Card>
        <Card title="Glassdoor">
          <p className="text-sm text-gray-body">Import company context to improve candidate alignment.</p>
        </Card>
        <Card title="Indeed">
          <p className="text-sm text-gray-body">Sync jobs and track conversions across campaigns.</p>
        </Card>
        <Card title="API">
          <p className="text-sm text-gray-body">Custom integrations for enterprise HRIS and ATS tooling.</p>
        </Card>
      </div>

      <div className="rounded-xl border border-gray-border bg-white px-6 py-5 shadow-premium">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-heading">Connect a new integration</div>
            <div className="mt-1 text-sm text-gray-body">Provision keys in Azure Key Vault and map scopes per workspace.</div>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-premium hover:opacity-90 transition"
          >
            Add Integration
          </a>
        </div>
      </div>
    </div>
  );
}
