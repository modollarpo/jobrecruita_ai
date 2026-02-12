import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CandidatesManagement } from '../CandidatesManagement';

describe('CandidatesManagement', () => {
  it('renders heading and add button', () => {
    render(<CandidatesManagement />);
    expect(screen.getByRole('main')).toHaveTextContent('Candidates Management');
    expect(screen.getByRole('button', { name: /add candidate/i })).toBeInTheDocument();
  });

  it('opens modal on add button click', () => {
    render(<CandidatesManagement />);
    fireEvent.click(screen.getByRole('button', { name: /add candidate/i }));
    expect(screen.getByLabelText(/add candidate modal/i)).toBeInTheDocument();
  });
});
