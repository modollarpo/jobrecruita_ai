import React from 'react';
import Head from 'next/head';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Logo } from '../components/Logo';
import { HeroIllustration } from '../components/HeroIllustration';
import { ComplianceStatusBar } from '../components/ComplianceStatusBar';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>JobRecruita – Intelligent Hiring for Modern Enterprises</title>
        <meta name="description" content="JobRecruita: Enterprise-grade AI-powered talent matching, automated workflows, and a next-gen ATS for modern hiring teams. Attract, delight, and convert top talent with trust-centric, compliance-ready design." />
        <meta name="keywords" content="enterprise hiring, AI recruiting, talent matching, ATS, compliance, automation, candidate experience, job matching, HR tech, recruitment platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06b6d4" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="JobRecruita – Intelligent Hiring for Modern Enterprises" />
        <meta property="og:description" content="Enterprise-grade AI-powered talent matching, automated workflows, and a next-gen ATS for modern hiring teams." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jobrecruita.com/" />
        <meta property="og:image" content="https://jobrecruita.com/og-image.png" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JobRecruita – Intelligent Hiring for Modern Enterprises" />
        <meta name="twitter:description" content="Enterprise-grade AI-powered talent matching, automated workflows, and a next-gen ATS for modern hiring teams." />
        <meta name="twitter:image" content="https://jobrecruita.com/og-image.png" />
        <meta name="twitter:site" content="@JobRecruita" />
        {/* Canonical and Robots */}
        <link rel="canonical" href="https://jobrecruita.com/" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/* JSON-LD Schema.org Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'JobRecruita',
          url: 'https://jobrecruita.com/',
          description: 'Enterprise-grade AI-powered talent matching, automated workflows, and a next-gen ATS for modern hiring teams.',
          publisher: {
            '@type': 'Organization',
            name: 'JobRecruita',
            logo: {
              '@type': 'ImageObject',
              url: 'https://jobrecruita.com/logo.png',
            },
          },
          sameAs: [
            'https://twitter.com/JobRecruita',
            'https://www.linkedin.com/company/jobrecruita',
          ],
        }) }} />
      </Head>
      <div className="min-h-screen flex flex-col bg-white text-gray-900" role="main" aria-label="JobRecruita Landing Page">
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-6" role="banner">
          <Logo />
          <nav className="hidden md:flex gap-10 font-medium" aria-label="Main navigation">
            <a href="/about" className="text-gray-700 hover:text-teal-600" tabIndex={0} aria-label="About">About</a>
            <a href="/auth/login" className="text-gray-700 hover:text-teal-600" tabIndex={0} aria-label="Login">Login</a>
            <a href="/auth/register" className="px-4 py-2 rounded-lg bg-teal-500 text-white shadow hover:bg-teal-600 transition" tabIndex={0} aria-label="Get Started">Get Started</a>
          </nav>
        </header>
        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center text-center px-6 pt-16 pb-24" id="content" tabIndex={-1} aria-label="Main content">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 via-white to-white" aria-hidden="true" />
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-3xl tracking-tight" tabIndex={0} aria-label="Enterprise-Grade AI Hiring. Built for Trust & Compliance">
            Enterprise-Grade AI Hiring<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Built for Trust & Compliance</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-10" tabIndex={0} aria-label="Platform description">
            JobRecruita is the only platform that combines high-signal AI matching, instant ZKP verification, and compliance-driven workflows. Delight candidates, empower recruiters, and ensure every hire is a win for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="/auth/register" className="px-8 py-3 text-lg shadow-md hover:scale-105 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors" tabIndex={0} aria-label="Request Enterprise Demo">Request Enterprise Demo</a>
            <a href="#how" className="px-8 py-3 text-lg border border-teal-300 hover:scale-105 rounded bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors" tabIndex={0} aria-label="See Platform in Action">See Platform in Action</a>
          </div>
          <HeroIllustration className="w-full max-w-4xl mx-auto drop-shadow-xl animate-fade-in" />
          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-20 bg-white/90 rounded-xl shadow-premium p-6" aria-label="Platform Features">
            <Card title="AI-Powered Matching">
              <p>Surface only the highest-signal candidates with explainable AI. Our platform delivers precision, transparency, and actionable insights for every match.</p>
            </Card>
            <Card title="Automated Hiring Flows">
              <p>Automate compliance, communication, and scheduling. Never miss a regulatory update or candidate touchpoint with our workflow engine.</p>
            </Card>
            <Card title="Enterprise Insights">
              <p>Real-time analytics, compliance health, and diversity metrics. Make data-driven decisions with confidence and clarity.</p>
            </Card>
            <Card title="Modern ATS Platform">
              <p>Delight your team with a glassmorphic, mobile-native ATS. Designed for scale, security, and seamless integrations.</p>
            </Card>
          </section>
          {/* How it Works */}
          <section id="how" className="max-w-4xl mx-auto text-center mt-32" aria-label="How JobRecruita Works">
            <h2 className="text-3xl font-bold mb-10">How JobRecruita Works</h2>
            <ol className="grid grid-cols-1 md:grid-cols-4 gap-12" aria-label="Platform Steps">
              {["Post Jobs", "AI Match", "Interview", "Hire"].map((step, i) => (
                <li key={i} className="flex flex-col items-center" tabIndex={0} aria-label={step}>
                  <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-3 shadow-sm font-bold text-lg text-teal-600">{i + 1}</div>
                  <span className="font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </main>
        {/* Footer */}
        <footer className="border-t py-10 text-center text-gray-500 text-sm" role="contentinfo">
          © {new Date().getFullYear()} JobRecruita · All Rights Reserved
        </footer>
        <ComplianceStatusBar daysRemaining={32} />
      </div>
    </>
  );
}
