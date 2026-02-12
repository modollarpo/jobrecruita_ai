import { render, screen } from '@testing-library/react';
import { JobSwipeCard } from '../JobSwipeCard';

describe('JobSwipeCard', () => {
  const job = {
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'Remote',
    skills: ['React', 'TypeScript'],
    logo: 'https://example.com/logo.png',
  };

  it('renders job title, company, and location', () => {
    render(<JobSwipeCard job={job} />);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Tech Corp')).toBeInTheDocument();
    expect(screen.getByText('Remote')).toBeInTheDocument();
  });

  it('renders job skills', () => {
    render(<JobSwipeCard job={job} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});
