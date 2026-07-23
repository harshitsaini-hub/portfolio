import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Award, CheckCircle2 } from 'lucide-react';
import { certificatesData } from '@/data/certificates';
import { GlassCard } from '@/components/GlassCard';

export function generateStaticParams() {
  return certificatesData.map((cert) => ({
    slug: cert.slug,
  }));
}

export default async function CertificateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const certificate = certificatesData.find((c) => c.slug === slug);

  if (!certificate) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-slate-900 py-16 px-6 max-w-4xl mx-auto">
      {/* Back Link */}
      <Link
        href="/certificates"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 mb-8 transition-colors"
      >
        <ChevronLeft size={16} /> Back to Certificates
      </Link>

      {/* Real Certificate Image Frame */}
      <div className="rounded-3xl overflow-hidden border border-slate-900/15 shadow-2xl bg-slate-950 mb-10 group relative">
        <img
          src={certificate.imageUrl}
          alt={certificate.title}
          className="w-full h-auto object-contain max-h-[600px] mx-auto block"
        />
        <div className="p-4 bg-slate-900 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div>
            Issuer: <strong className="text-white font-sans">{certificate.issuer}</strong>
          </div>
          {certificate.credentialId && (
            <div>
              Certificate ID: <strong className="text-white">{certificate.credentialId}</strong>
            </div>
          )}
          <div>
            Date: <strong className="text-white">{certificate.issueDate}</strong>
          </div>
        </div>
      </div>

      {/* Header Info */}
      <GlassCard className="p-8 md:p-10 border-slate-900/15 mb-8">
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 border border-slate-200 text-slate-800">
            {certificate.issuer} • {certificate.category}
          </span>
          <span className="text-slate-500 font-mono text-sm font-semibold">{certificate.issueDate}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 font-heading leading-tight">
          {certificate.title}
        </h1>

        <p className="text-slate-700 text-lg leading-relaxed mb-6">{certificate.description}</p>
      </GlassCard>

      {/* Topics & Course Breakdown */}
      <div className="grid md:grid-cols-2 gap-8">
        <GlassCard className="p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 font-heading">
            <Award className="text-slate-900" /> Topics Mastered
          </h3>
          <ul className="space-y-3">
            {certificate.skillsLearned.map((skill, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                <CheckCircle2 size={16} className="text-slate-900 shrink-0" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        {certificate.courseOutline && (
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Course Breakdown</h3>
            <ul className="space-y-3">
              {certificate.courseOutline.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                  <span className="font-mono text-slate-900 font-bold">{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        )}
      </div>
    </div>
  );
}
