import React from 'react';
import { render, screen } from '@testing-library/react';
import { AnalyticsDashboard } from '../AnalyticsDashboard';

describe('AnalyticsDashboard', () => {
  it('renders analytics dashboard heading', () => {
    render(<AnalyticsDashboard />);
    expect(screen.getByRole('heading', { name: /Analytics Dashboard/i })).toBeInTheDocument();
  });
});
