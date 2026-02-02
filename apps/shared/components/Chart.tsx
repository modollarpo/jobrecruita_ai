// Shared Chart component (stub)
import React from 'react';
import { Line } from 'react-chartjs-2';

export function Chart({ type, data }: { type: string; data: any }) {
  if (type === 'line') {
    return <Line data={data} />;
  }
  return null;
}
