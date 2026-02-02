// Shared Heatmap component (stub)
import React from 'react';

export function Heatmap({ data }: { data: number[][] }) {
  return (
    <div className="grid grid-cols-5 gap-1">
      {data.flat().map((val, idx) => (
        <div key={idx} className={`w-6 h-6 rounded ${val > 80 ? 'bg-green-500' : val > 50 ? 'bg-yellow-400' : 'bg-gray-300'}`}></div>
      ))}
    </div>
  );
}
