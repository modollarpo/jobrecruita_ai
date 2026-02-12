import React from 'react';
import { render, screen } from '@testing-library/react';
import { AdminDashboard } from '../AdminDashboard';

describe('AdminDashboard', () => {
  it('renders dashboard heading', () => {
    render(<AdminDashboard />);
    expect(screen.getByRole('heading', { name: /Admin Dashboard/i })).toBeInTheDocument();
  });
});
