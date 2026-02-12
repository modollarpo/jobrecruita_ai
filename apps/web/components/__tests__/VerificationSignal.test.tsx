import React from 'react';
import { render, screen } from '@testing-library/react';
import { VerificationSignal } from '../VerificationSignal';

describe('VerificationSignal', () => {
  it('shows ZKP verified badge when active', () => {
    render(<VerificationSignal active={true} latencyMs={2340} />);
    expect(screen.getByText(/ZKP Verified/i)).toBeInTheDocument();
    expect(screen.getByText(/2.34s/)).toBeInTheDocument();
  });
  it('does not show badge when not active', () => {
    render(<VerificationSignal active={false} />);
    expect(screen.queryByText(/ZKP Verified/i)).not.toBeInTheDocument();
  });
});
