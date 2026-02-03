// Settings main page
import React from 'react';
import { useTheme } from './ThemeProvider';
import { PageHeader } from './PageHeader';

export function SettingsPage() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="space-y-10">
      <PageHeader
        title="Settings"
        subtitle="Control appearance, preferences, and enterprise account defaults."
      />

      <section className="rounded-xl border border-gray-border bg-white shadow-premium">
        <div className="border-b border-gray-border px-6 py-4">
          <h2 className="text-sm font-semibold text-gray-heading">Appearance</h2>
          <p className="mt-1 text-sm text-gray-body">Choose how JobRecruita looks on this device.</p>
        </div>

        <div className="px-6 py-6">
          <div className="grid gap-2 sm:grid-cols-3">
            {(
              [
                { value: 'system', label: 'System' },
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
              ] as const
            ).map((opt) => {
              const active = theme === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setTheme(opt.value)}
                  className={
                    'rounded-lg border px-4 py-3 text-left transition ' +
                    (active
                      ? 'border-brand-primary bg-blue-50 text-gray-heading'
                      : 'border-gray-border bg-white text-gray-body hover:bg-blue-50 hover:text-gray-heading')
                  }
                >
                  <div className="text-sm font-semibold">{opt.label}</div>
                  <div className="mt-1 text-xs text-gray-body">{opt.value === 'system' ? `Currently: ${resolvedTheme}` : ' '}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
