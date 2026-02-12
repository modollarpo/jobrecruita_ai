import React from 'react';
import { render, screen } from '@testing-library/react';
import { JobSwipeCard } from '../JobSwipeCard';

describe('JobSwipeCard', () => {
  const job = {
    title: 'Backend Developer',
    company: 'Data Inc',
    location: 'Berlin',
    skills: ['Node.js', 'PostgreSQL'],
    logo: 'https://example.com/logo.png',
  };

  it('renders job title, company, and location', () => {
    render(<JobSwipeCard job={job} />);
    expect(screen.getByText('Backend Developer')).toBeInTheDocument();
    expect(screen.getByText('Data Inc')).toBeInTheDocument();
    expect(screen.getByText('Berlin')).toBeInTheDocument();
  });

  it('renders job skills', () => {
    render(<JobSwipeCard job={job} />);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
  });
});
