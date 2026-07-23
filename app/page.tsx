"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, ExternalLink, ChevronRight, Code2, Cpu, Database, Globe, 
  Terminal, ShieldCheck, Award, ArrowUpRight, UserCheck, Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';
import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';
import { credentialsData } from '@/data/credentials';
import { certificatesData } from '@/data/certificates';
import { GlassCard } from '@/components/GlassCard';
import { CredentialCard } from '@/components/CredentialCard';
import { CertificateCard } from '@/components/CertificateCard';

const SectionHeader = ({ 
  title, 
  subtitle, 
  badge 
}: { 
  title: string; 
  subtitle?: string; 
  badge?: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-14"
  >
    {badge && (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-800 text-xs font-bold uppercase tracking-widest mb-4">
        <Sparkles size={12} className="text-amber-500" /> {badge}
      </div>
    )}
    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4 font-heading">
      {title}
    </h2>
    {subtitle && <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
  </motion.div>
);

const skillIconMap: Record<string, any> = {
  Cpu,
  Database,
  Terminal,
  Globe,
  ShieldCheck,
};

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const featuredCredentials = credentialsData.filter((c) => c.featured);
  const featuredCertificates = certificatesData.filter((c) => c.featured).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-slate-900 overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <header className="relative min-h-[90vh] flex items-center px-6 pt-8 pb-24 max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full relative">
          
          {/* Oversized Background Outline Watermark Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-stroke-light uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none z-0 opacity-40 font-heading">
            APPLIED AI ENGINEER ✦
          </div>

          {/* Hero Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative z-10"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              {profileData.status}
            </div>

            {/* Name */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-[0.9] text-slate-900 font-heading">
              {profileData.name.toUpperCase()} <span className="text-slate-400">{profileData.lastName.toUpperCase()}</span> ✦
            </h1>

            {/* Role */}
            <p className="text-2xl md:text-3xl font-bold text-slate-700 mb-6 font-mono">
              {profileData.role}
            </p>

            {/* Positioning Statement */}
            <p className="text-lg md:text-xl text-slate-800 font-semibold mb-8 max-w-2xl leading-relaxed">
              "{profileData.tagline}"
              <br />
              <span className="text-slate-600 text-base font-normal mt-2 block">
                {profileData.positioningStatement}
              </span>
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/projects"
                className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-slate-800 hover:scale-105 transition-all shadow-xl flex items-center gap-2"
              >
                EXPLORE PROJECTS <ChevronRight size={16} />
              </Link>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-white border border-slate-900/15 text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
              >
                GET IN TOUCH <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-slate-600">
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-slate-900 transition-colors p-2 bg-white rounded-full border border-slate-900/10 shadow-sm">
                <GithubIcon size={20} />
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-slate-900 transition-colors p-2 bg-white rounded-full border border-slate-900/10 shadow-sm">
                <LinkedinIcon size={20} />
              </a>
              <a href={`mailto:${profileData.email}`} title="Email" className="hover:text-slate-900 transition-colors p-2 bg-white rounded-full border border-slate-900/10 shadow-sm">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Profile Picture Placeholder Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 flex justify-center relative z-10"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="relative h-full w-full rounded-3xl border-2 border-slate-900/15 p-3 bg-white shadow-2xl flex flex-col items-center justify-center text-center group hover:border-slate-900 transition-all">
                <div className="w-24 h-24 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-4 group-hover:scale-105 transition-transform shadow-inner">
                  <UserCheck size={44} className="text-slate-900" />
                </div>
                <span className="text-slate-900 font-bold text-lg font-heading">Profile Image Area</span>
                <span className="text-slate-500 text-xs mt-1 max-w-[200px]">
                  Place <code className="text-slate-900 font-bold">profile.jpg</code> in <code className="text-slate-900 font-bold">/public</code> to render your photo here.
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* 2. ABOUT & EDUCATION SECTION (Lavender Color Block #ECEEFA) */}
      <section id="about" className="relative py-28 px-6 bg-[#ECEEFA] border-y border-slate-900/10 overflow-hidden">
        
        {/* Rotated Vertical Watermark Label */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 writing-mode-vertical text- stroke-light font-black text-8xl md:text-9xl tracking-tighter opacity-15 select-none pointer-events-none font-heading hidden lg:block text-slate-900">
          ABOUT
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7"
            >
              <SectionHeader
                badge="Background & Philosophy"
                title="System Architect"
                subtitle="Bridging research and production-grade engineering."
              />

              {/* Hand-drawn Arrow SVG Decorative Accent */}
              <div className="flex items-center gap-3 mb-6">
                <svg width="40" height="24" viewBox="0 0 50 30" fill="none" stroke="currentColor" className="text-slate-700">
                  <path d="M5 25 Q 25 5, 45 20 M 35 22 L 45 20 L 42 10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-700">Crafting Wonderful Digital Experiences</span>
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                {profileData.bio}
              </p>

              {/* Languages */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Linguistics & Proficiency</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {profileData.languages.map((l) => (
                    <div key={l.language} className="p-4 bg-white border border-slate-900/10 rounded-2xl shadow-sm">
                      <p className="font-bold text-slate-900 text-sm font-heading">{l.language}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{l.proficiency}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education Log Card */}
            <div className="md:col-span-5">
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-900/15 shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-mono text-slate-900">
                  <Terminal size={20} className="text-slate-800" />
                  &gt; education.log
                </h3>
                <div className="relative border-l-2 border-slate-900/20 pl-6 ml-2 space-y-6">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-white shadow-md" />
                    <h4 className="text-slate-900 font-bold text-lg font-heading">{profileData.education.degree}</h4>
                    <p className="text-slate-700 text-sm font-medium">{profileData.education.field}</p>
                    <p className="text-slate-500 text-sm mt-1">{profileData.education.institution}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-mono text-slate-700 font-semibold">
                      Exp. Graduation: {profileData.education.expectedGraduation}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE ARSENAL SECTION (Sage Green Block #E8EDE9) */}
      <section id="skills" className="relative py-28 px-6 bg-[#E8EDE9] border-b border-slate-900/10 overflow-hidden">
        
        {/* Rotated Vertical Watermark Label */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 writing-mode-vertical text-stroke-light font-black text-8xl md:text-9xl tracking-tighter opacity-15 select-none pointer-events-none font-heading hidden lg:block text-slate-900">
          SKILLS
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge="Technical Capabilities"
            title="I MAKE THE INFRASTRUCTURE BETTER. ✦"
            subtitle="Expertise across AI models, backend infrastructure, and cloud SDKs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((cat, idx) => {
              const IconComp = skillIconMap[cat.iconName] || Cpu;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* High contrast dark rounded card container */}
                  <div className="h-full rounded-3xl bg-slate-900 text-white p-8 shadow-xl flex flex-col justify-between hover:scale-[1.02] transition-transform">
                    <div>
                      <IconComp className="text-amber-400 mb-6" size={36} />
                      <h3 className="text-xl font-bold text-white mb-6 font-heading">{cat.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-slate-200 font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SECTION (Off-White Block #F9F8F6) */}
      <section id="projects" className="relative py-28 px-6 bg-[#F9F8F6] border-b border-slate-900/10 overflow-hidden">
        
        {/* Rotated Vertical Watermark Label */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 writing-mode-vertical text-stroke-light font-black text-8xl md:text-9xl tracking-tighter opacity-15 select-none pointer-events-none font-heading hidden lg:block text-slate-900">
          WORK
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeader
              badge="Production AI Labs"
              title="Selected Work"
              subtitle="Architected for scalable AI integration and measurable performance."
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-md"
            >
              VIEW ALL WORK →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <GlassCard key={project.slug} className="flex flex-col justify-between h-full p-8 md:p-10">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1 font-heading">{project.title}</h3>
                  <p className="text-slate-500 font-mono text-xs mb-4">{project.subtitle}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.shortDescription}</p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-slate-600 flex items-center gap-1 font-heading"
                  >
                    View Case Study <ChevronRight size={14} />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CREDENTIALS PREVIEW SECTION (Warm Cream #F5F2EB) */}
      <section id="credentials" className="relative py-28 px-6 bg-[#F5F2EB] border-b border-slate-900/10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeader
              badge="Applied Skill Badges"
              title="Professional Credentials"
              subtitle="Validated hands-on lab achievements across Microsoft, Azure, and Foundry."
            />
            <Link
              href="/credentials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-md"
            >
              VIEW ALL CREDENTIALS →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCredentials.map((cred) => (
              <CredentialCard key={cred.slug} credential={cred} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATES PREVIEW SECTION (Cool Gray #F0F2F5) */}
      <section id="certificates" className="relative py-28 px-6 bg-[#F0F2F5] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeader
              badge="Academic Coursework"
              title="Certificates & Specializations"
              subtitle="Verified academic specializations from DeepLearning.AI, Google Cloud, and Coursera."
            />
            <Link
              href="/certificates"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-md"
            >
              VIEW ALL CERTIFICATES →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredCertificates.map((cert) => (
              <CertificateCard key={cert.slug} certificate={cert} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}