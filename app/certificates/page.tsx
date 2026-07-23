import React from 'react';
import { certificatesData } from '@/data/certificates';
import { CertificateCard } from '@/components/CertificateCard';

export const metadata = {
  title: "Certificates & Specializations | Harshit Saini",
  description: "Academic coursework and specializations from DeepLearning.AI, Google Cloud, and Coursera.",
};

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-[#F6F4EF] text-slate-900 py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-800 bg-slate-900/5 border border-slate-900/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
          Academic & Coursework
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4 font-heading">
          Certificates & Specializations
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl">
          Verified academic specializations and comprehensive coursework across NLP, Generative AI, and Machine Learning Systems.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {certificatesData.map((cert) => (
          <CertificateCard key={cert.slug} certificate={cert} />
        ))}
      </div>
    </div>
  );
}
