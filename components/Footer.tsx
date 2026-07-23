"use client";

import React from 'react';
import { Mail, Globe, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profileData } from '@/data/profile';
import { GlassCard } from './GlassCard';

export const Footer = () => {
  return (
    <footer id="contact" className="relative pt-28 pb-12 px-6 border-t border-slate-900/10 bg-[#F6F4EF]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-800 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={12} className="text-amber-500" /> Let's Talk
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-2 mb-6 leading-tight font-heading text-slate-900">
              LET'S GET IN <br />
              <span className="text-slate-500 underline decoration-slate-300 decoration-wavy decoration-2">
                TOUCH ✌️
              </span>
            </h2>

            <p className="text-slate-600 text-base mb-10 leading-relaxed max-w-md">
              Available for collaborations on production AI systems, LLM infrastructure, and complex backend architectures.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-700 group">
                <div className="p-3.5 bg-white border border-slate-900/10 rounded-2xl group-hover:border-slate-900 transition-all shadow-sm">
                  <Mail className="text-slate-900" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Direct Email</p>
                  <a href={`mailto:${profileData.email}`} className="text-lg font-bold text-slate-900 hover:underline">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-700 group">
                <div className="p-3.5 bg-white border border-slate-900/10 rounded-2xl group-hover:border-slate-900 transition-all shadow-sm">
                  <Globe className="text-slate-900" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-lg font-bold text-slate-900">{profileData.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 md:p-10 border-slate-900/15">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">Say Hello</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Your Name *</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address *</label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
                  <input
                    type="text"
                    placeholder="Production AI Collaboration"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01]"
                >
                  SEND MESSAGE <Send size={16} />
                </button>
              </form>
            </GlassCard>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 border-t border-slate-900/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs font-medium">
          <p>© 2024–2027 • {profileData.name} {profileData.lastName}. All rights reserved.</p>
          <p className="italic">Designed & Engineered for Production AI</p>
          <div className="flex gap-6">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
              <GithubIcon size={18} />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
