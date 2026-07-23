import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ExternalLink, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { credentialsData } from '@/data/credentials';
import { GlassCard } from '@/components/GlassCard';

export function generateStaticParams() {
  return credentialsData.map((cred) => ({
    slug: cred.slug,
  }));
}

export default async function CredentialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const credential = credentialsData.find((c) => c.slug === slug);

  if (!credential) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-slate-900 py-16 px-6 max-w-4xl mx-auto">
      {/* Back Link */}
      <Link
        href="/credentials"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 mb-8 transition-colors"
      >
        <ChevronLeft size={16} /> Back to Credentials
      </Link>

      {/* Real Certificate Image Frame */}
      <div className="rounded-3xl overflow-hidden border border-slate-900/15 shadow-2xl bg-slate-950 mb-10 group relative">
        <img
          src={credential.imageUrl}
          alt={credential.title}
          className="w-full h-auto object-contain max-h-[600px] mx-auto block"
        />
        <div className="p-4 bg-slate-900 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div>
            Credential ID: <strong className="text-white">{credential.credentialId}</strong>
          </div>
          <div>
            Earned on: <strong className="text-white">{credential.issueDate}</strong>
          </div>
          {credential.verifyUrl && (
            <a
              href={credential.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-cyan-400 text-slate-950 font-bold uppercase tracking-widest text-xs hover:bg-cyan-300 transition-all inline-flex items-center gap-1.5 shadow-md font-sans"
            >
              Verify on Microsoft Learn <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Title & Info Header */}
      <GlassCard className="p-8 md:p-10 border-slate-900/15 mb-8">
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 border border-slate-200 text-slate-800">
            {credential.issuer} • {credential.category}
          </span>
          <span className="text-slate-500 font-mono text-sm font-semibold">{credential.issueDate}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 font-heading leading-tight">
          {credential.title}
        </h1>

        <p className="text-slate-700 text-lg leading-relaxed mb-6">{credential.description}</p>
      </GlassCard>

      {/* Skills & Details Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <GlassCard className="p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 font-heading">
            <ShieldCheck className="text-slate-900" /> Skills Validated
          </h3>
          <ul className="space-y-3">
            {credential.skillsAssessed.map((skill, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                <CheckCircle2 size={16} className="text-slate-900 shrink-0" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 font-heading">
            <Award className="text-slate-900" /> Assessment Overview
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {credential.description}
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono">
            {credential.evaluationSummary}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
