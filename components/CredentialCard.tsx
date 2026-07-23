import React from 'react';
import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Credential } from '@/data/credentials';
import { GlassCard } from './GlassCard';

export const CredentialCard = ({ credential }: { credential: Credential }) => {
  return (
    <GlassCard className="flex flex-col justify-between h-full p-6 md:p-8 relative overflow-hidden group">
      <div>
        {/* Real Certificate Image Container */}
        <div className="rounded-2xl overflow-hidden border border-slate-900/10 bg-slate-900 shadow-md mb-6 relative group/img aspect-[4/3]">
          <img
            src={credential.imageUrl}
            alt={credential.title}
            className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white font-semibold">
            <span className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              ID: {credential.credentialId.slice(0, 8)}...
            </span>
            <span className="bg-emerald-500/90 text-slate-950 font-bold px-2.5 py-1 rounded-full">
              ✓ Verified
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading group-hover:text-slate-700 transition-colors">
          {credential.title}
        </h3>

        {/* Issued Date */}
        <p className="text-xs font-mono text-slate-500 mb-4">
          Earned on: <strong className="text-slate-800">{credential.issueDate}</strong>
        </p>

        {/* Description */}
        <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3">
          {credential.description}
        </p>

        {/* Skills Assessed */}
        <div className="space-y-2 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">Skills Assessed</span>
          <div className="flex flex-wrap gap-1.5">
            {credential.skillsAssessed.slice(0, 3).map((skill) => (
              <span key={skill} className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium">
                {skill}
              </span>
            ))}
            {credential.skillsAssessed.length > 3 && (
              <span className="px-2 py-0.5 text-xs text-slate-400 font-mono">
                +{credential.skillsAssessed.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
        <Link
          href={`/credentials/${credential.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-slate-600 transition-colors group/btn"
        >
          View Badge Page <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        {credential.verifyUrl && (
          <a
            href={credential.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 text-xs font-bold transition-all flex items-center gap-1 shadow-xs"
          >
            Verify <ExternalLink size={12} />
          </a>
        )}
      </div>
    </GlassCard>
  );
};
