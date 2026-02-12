import { render, screen } from '@testing-library/react';
import { VerificationSignal } from '../VerificationSignal';

describe('VerificationSignal', () => {
  it('shows ZKP verified badge when verified', () => {
    render(<VerificationSignal verified={true} zkpTime={1.23} />);
    expect(screen.getByText(/ZKP Verified/i)).toBeInTheDocument();
    expect(screen.getByText(/1.23s/)).toBeInTheDocument();
  });
  it('does not show badge when not verified', () => {
    render(<VerificationSignal verified={false} />);
    expect(screen.queryByText(/ZKP Verified/i)).not.toBeInTheDocument();
  });
});
