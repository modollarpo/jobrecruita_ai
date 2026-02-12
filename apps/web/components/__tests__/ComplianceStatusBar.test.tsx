import React from 'react';
import { render, screen } from '@testing-library/react';
import { ComplianceStatusBar } from '../ComplianceStatusBar';

describe('ComplianceStatusBar', () => {
  it('renders compliance percentage and label', () => {
    render(<ComplianceStatusBar compliance={92} />);
    expect(screen.getByText(/92%/)).toBeInTheDocument();
    expect(screen.getByText(/Compliance/i)).toBeInTheDocument();
  });

  it('shows correct color for high compliance', () => {
    render(<ComplianceStatusBar compliance={99} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveStyle('background: linear-gradient');
  });
});
