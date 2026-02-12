import React from 'react';
import { render, screen } from '@testing-library/react';
import { CandidatesManagement } from '../CandidatesManagement';

describe('CandidatesManagement', () => {
  it('renders candidates management heading', () => {
    render(<CandidatesManagement />);
    expect(screen.getByRole('heading', { name: /Candidates Management/i })).toBeInTheDocument();
  });
});
