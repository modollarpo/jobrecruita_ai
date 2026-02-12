import { render, screen } from '@testing-library/react';
import { ComplianceStatusBar } from '../ComplianceStatusBar';

describe('ComplianceStatusBar', () => {
  it('renders compliance percentage and label', () => {
    render(<ComplianceStatusBar compliance={85} />);
    expect(screen.getByText(/85%/)).toBeInTheDocument();
    expect(screen.getByText(/Compliance/i)).toBeInTheDocument();
  });

  it('shows correct color for high compliance', () => {
    render(<ComplianceStatusBar compliance={95} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveStyle('background: linear-gradient');
  });
});
