import React from 'react';
import { render, screen } from '@testing-library/react';
import { DigitalTwinCard } from '../DigitalTwinCard';

describe('DigitalTwinCard', () => {
  const candidate = {
    name: 'John Smith',
    title: 'Data Scientist',
    skills: ['Python', 'ML'],
    verified: true,
    zkpTime: 1.11,
    avatar: 'https://example.com/avatar.jpg',
  };

  it('renders candidate name, title, and skills', () => {
    render(<DigitalTwinCard candidate={candidate} />);
    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.getByText('Data Scientist')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('ML')).toBeInTheDocument();
  });

  it('shows ZKP verified badge if verified', () => {
    render(<DigitalTwinCard candidate={candidate} />);
    expect(screen.getByText(/ZKP Verified/i)).toBeInTheDocument();
    expect(screen.getByText(/1.11s/)).toBeInTheDocument();
  });
});
