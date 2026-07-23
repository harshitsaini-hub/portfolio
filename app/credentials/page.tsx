import React from 'react';
import { credentialsData } from '@/data/credentials';
import { CredentialCard } from '@/components/CredentialCard';

export const metadata = {
  title: "Professional Credentials | Harshit Saini",
  description: "Verified Applied Skill Badges across Microsoft, Azure PostgreSQL, and Foundry MCP.",
};

export default function CredentialsPage() {
  return (
    <div className="min-h-screen bg-[#F6F4EF] text-slate-900 py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-800 bg-slate-900/5 border border-slate-900/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
          Verified Skill Badges
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4 font-heading">
          Professional Credentials
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl">
          Practical, hands-on lab achievements proving real-world execution across cloud engineering, database tuning, and AI protocols.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {credentialsData.map((cred) => (
          <CredentialCard key={cred.slug} credential={cred} />
        ))}
      </div>
    </div>
  );
}
