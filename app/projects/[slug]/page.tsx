import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ExternalLink, ChevronRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { projectsData } from '@/data/projects';
import { GlassCard } from '@/components/GlassCard';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-slate-900 py-16 px-6 max-w-5xl mx-auto">
      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 mb-8 transition-colors"
      >
        <ChevronLeft size={16} /> Back to Projects
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-2 font-heading">
          {project.title}
        </h1>
        <p className="text-slate-600 font-mono text-lg mb-6">{project.subtitle}</p>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all flex items-center gap-2 shadow-md"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white border border-slate-200 font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all flex items-center gap-2 text-slate-800 shadow-sm"
            >
              GitHub Repository <GithubIcon size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Metrics Grid */}
      {project.metrics && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {project.metrics.map((m, idx) => (
            <GlassCard key={idx} className="p-6 text-center border-slate-200">
              <span className="text-xs text-slate-500 uppercase font-bold tracking-widest block mb-2">{m.label}</span>
              <span className="text-3xl font-black text-slate-900 font-heading">{m.value}</span>
            </GlassCard>
          ))}
        </div>
      )}

      {/* Deep-Dive Overview */}
      <GlassCard className="p-8 md:p-10 border-slate-900/15 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Project Overview</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">{project.fullDescription}</p>

        <h3 className="text-lg font-bold text-slate-900 mb-4 font-heading">Key System Features</h3>
        <div className="space-y-3 mb-8">
          {project.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
              <CheckCircle2 size={18} className="text-slate-900 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {project.architectureOverview && (
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">Architecture & Pipeline</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{project.architectureOverview}</p>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
