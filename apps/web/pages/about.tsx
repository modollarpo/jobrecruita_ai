import React from 'react';
import Head from 'next/head';
import { AppShell } from '../components/AppShell';
import { PageHeader } from '../components/PageHeader';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us – JobRecruita</title>
        <meta name="description" content="Learn about JobRecruita's mission, vision, and enterprise-grade hiring solutions." />
        <meta name="keywords" content="about, company, mission, vision, enterprise hiring, JobRecruita" />
      </Head>
      <AppShell title="About Us – JobRecruita" description="Learn about JobRecruita's mission, vision, and enterprise-grade hiring solutions.">
        <PageHeader title="About Us" subtitle="Our mission: Elevate hiring with trust, intelligence, and compliance." />
        <section className="max-w-3xl mx-auto mt-10 text-lg text-gray-heading bg-white rounded-xl shadow-premium p-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-6">JobRecruita was founded to solve the biggest challenges in enterprise hiring: signal quality, compliance, and candidate experience. Our platform leverages AI, glassmorphic design, and zero-knowledge proofs to deliver trust-centric, high-impact results for modern organizations.</p>
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Integrity & Trust</li>
            <li>Enterprise-Grade Security</li>
            <li>Compliance-Driven Innovation</li>
            <li>Delightful User Experience</li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Email: <a href="mailto:hello@jobrecruita.com" className="text-blue-600 underline">hello@jobrecruita.com</a></p>
        </section>
      </AppShell>
    </>
  );
}
