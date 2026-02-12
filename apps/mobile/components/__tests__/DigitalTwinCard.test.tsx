import { render, screen } from '@testing-library/react';
import { DigitalTwinCard } from '../DigitalTwinCard';

describe('DigitalTwinCard', () => {
  const candidate = {
    name: 'Jane Doe',
    title: 'Senior Engineer',
    skills: ['React', 'Node.js'],
    verified: true,
    zkpTime: 0.98,
    avatar: 'https://example.com/avatar.jpg',
  };

  it('renders candidate name, title, and skills', () => {
    render(<DigitalTwinCard candidate={candidate} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Senior Engineer')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('shows ZKP verified badge if verified', () => {
    render(<DigitalTwinCard candidate={candidate} />);
    expect(screen.getByText(/ZKP Verified/i)).toBeInTheDocument();
    expect(screen.getByText(/0.98s/)).toBeInTheDocument();
  });
});
