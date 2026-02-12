import React from 'react';
import Link from 'next/link';

// Liquid Lux Glassmorphism Navbar
export function LiquidLuxNavbar() {
  return (
    <nav className="backdrop-blur-lg ring-1 ring-white/20 bg-white/60 fixed w-full z-50 top-0 left-0 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <span className="font-heroic-bold text-2xl text-primary-blue tracking-tight">JobRecruita</span>
        </div>
        <div className="flex gap-6">
          {/* A-Z Navigation */}
          {Array.from({ length: 10 }, (_, i) => ['A','B','C','D','E','F','G','H','I','J'][i]).map((letter) => (
            <Link key={letter} href={`/${letter.toLowerCase()}`}
              className="font-semibold text-gray-900 hover:text-primary-teal transition-colors px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
            >
              {letter}
            </Link>
          ))}
          <span className="text-gray-400 font-bold">...</span>
        </div>
      </div>
    </nav>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue/10 to-primary-teal/10 font-proxima-nova pt-20">
      <LiquidLuxNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
