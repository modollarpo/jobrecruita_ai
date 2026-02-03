// Shared Table component (web)
import React from 'react';

export function Table({ columns, data }: { columns: string[]; data: any[] }) {
  const formatLabel = (key: string) =>
    key
      .replace(/_/g, ' ')
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/^./, (c) => c.toUpperCase());

  const renderCell = (value: any): React.ReactNode => {
    if (value === null || value === undefined) return <span className="text-gray-body">—</span>;
    if (React.isValidElement(value)) return value;

    const valueType = typeof value;
    if (valueType === 'string') return value;
    if (valueType === 'number') return Number.isFinite(value) ? value.toLocaleString() : String(value);
    if (valueType === 'boolean') return value ? 'Yes' : 'No';

    if (value instanceof Date) return value.toLocaleString();

    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-border text-sm">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-body"
            >
              {formatLabel(col)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="bg-white hover:bg-blue-50/60">
            {columns.map((col) => (
              <td key={col} className="px-4 py-3 whitespace-nowrap text-gray-heading">
                {renderCell(row?.[col])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}
