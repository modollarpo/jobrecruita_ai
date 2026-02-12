import React from 'react';
import { render, screen } from '@testing-library/react';
import { JobsManagement } from '../JobsManagement';

describe('JobsManagement', () => {
  it('renders jobs management heading', () => {
    render(<JobsManagement />);
    expect(screen.getByRole('heading', { name: /Jobs Management/i })).toBeInTheDocument();
  });
});
