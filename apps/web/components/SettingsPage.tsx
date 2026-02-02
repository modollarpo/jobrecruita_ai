// Settings main page
import { Button } from '../../shared/components/Button';
import { useState } from 'react';

export function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="p-8 space-y-8 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg">Dark Mode</span>
        <input type="checkbox" checked={darkMode} onChange={e => setDarkMode(e.target.checked)} />
      </div>
      <Button>Save Changes</Button>
    </div>
  );
}
