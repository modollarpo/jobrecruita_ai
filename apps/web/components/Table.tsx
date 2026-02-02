// Shared Table component (web)
import React from 'react';

export function Table({ columns, data }: { columns: string[]; data: any[] }) {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="bg-white dark:bg-gray-800">
            {columns.map((col) => (
              <td key={col} className="px-4 py-2 whitespace-nowrap">{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
