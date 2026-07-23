import React from 'react';
import Link from 'next/link';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { projectsData } from '@/data/projects';
import { GlassCard } from '@/components/GlassCard';

export const metadata = {
  title: "Projects Gallery | Harshit Saini",
  description: "Production-grade AI systems, LLM applications, and adversarial machine learning projects.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F6F4EF] text-slate-900 py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-800 bg-slate-900/5 border border-slate-900/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
          Production AI Labs
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4 font-heading">
          Selected Projects Gallery
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl">
          Detailed case studies, system architectures, and benchmarks for production AI applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <GlassCard key={project.slug} className="flex flex-col justify-between h-full p-8 md:p-10">
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
                    {t}
                  </span>
                ))}
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl font-bold text-slate-900 mb-1 font-heading">{project.title}</h2>
              <p className="text-slate-500 font-mono text-xs mb-4">{project.subtitle}</p>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {project.shortDescription}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">Key Highlights</span>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-slate-900 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
              <Link
                href={`/projects/${project.slug}`}
                className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-md flex items-center gap-1.5"
              >
                View Case Study <ChevronRight size={14} />
              </Link>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 p-2">
                    <GithubIcon size={18} />
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 p-2">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
