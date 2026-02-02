

import Head from 'next/head';
import { Button } from '@shared/components/Button';
import { Card } from '@shared/components/Card';
import { Logo } from '../components/Logo';
import { HeroIllustration } from '../components/HeroIllustration';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>JobRecruita – Intelligent Hiring for Modern Enterprises</title>
        <meta name="description" content="AI-powered talent matching, automated workflows, and a next-gen ATS designed for enterprise hiring teams." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06b6d4" />
      </Head>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-6">
          <Logo />
          <nav className="hidden md:flex gap-10 font-medium">
            <a href="/about" className="text-gray-700 hover:text-teal-600">About</a>
            <a href="/auth/login" className="text-gray-700 hover:text-teal-600">Login</a>
            <a href="/auth/register" className="px-4 py-2 rounded-lg bg-teal-500 text-white shadow hover:bg-teal-600 transition">Get Started</a>
          </nav>
        </header>
        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center text-center px-6 pt-16 pb-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 via-white to-white" />
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-3xl tracking-tight">
            Intelligent Hiring<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">For Modern Enterprises</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-10">
            JobRecruita helps you attract, match, and hire top talent using advanced AI, automation, and enterprise-ready workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="/auth/register" className="px-8 py-3 text-lg shadow-md hover:scale-105 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Start Free</a>
            <a href="#how" className="px-8 py-3 text-lg border border-teal-300 hover:scale-105 rounded bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors">How It Works</a>
          </div>
          <HeroIllustration className="w-full max-w-4xl mx-auto drop-shadow-xl animate-fade-in" />
          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-20">
            <Card title="AI-Powered Matching">
              <p>Match candidates to roles with precision using intelligent scoring algorithms.</p>
            </Card>
            <Card title="Automated Hiring Flows">
              <p>Eliminate repetitive HR tasks and streamline your recruitment cycles.</p>
            </Card>
            <Card title="Enterprise Insights">
              <p>Actionable analytics and reporting tools to improve hiring decisions.</p>
            </Card>
            <Card title="Modern ATS Platform">
              <p>A beautifully designed Applicant Tracking System built for scale.</p>
            </Card>
          </section>
          {/* How it Works */}
          <section id="how" className="max-w-4xl mx-auto text-center mt-32">
            <h2 className="text-3xl font-bold mb-10">How JobRecruita Works</h2>
            <ol className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {["Post Jobs", "AI Match", "Interview", "Hire"].map((step, i) => (
                <li key={i} className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-3 shadow-sm font-bold text-lg text-teal-600">{i + 1}</div>
                  <span className="font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </main>
        {/* Footer */}
        <footer className="border-t py-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} JobRecruita · All Rights Reserved
        </footer>
      </div>
    </>
  );
}
