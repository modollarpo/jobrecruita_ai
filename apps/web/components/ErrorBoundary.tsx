import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service here
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="p-8 text-center text-red-700 bg-red-50 rounded-xl mt-8">
          <h2 className="text-2xl font-bold mb-2">Something went wrong.</h2>
          <p className="mb-4">Please refresh the page or contact support if the problem persists.</p>
          {this.state.error && <pre className="text-xs text-red-500 bg-red-100 p-2 rounded overflow-x-auto">{this.state.error.message}</pre>}
        </div>
      );
    }
    return this.props.children;
  }
}
