import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GlassCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "relative group rounded-3xl border border-slate-900/10 bg-white p-7 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:border-slate-900/25 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1",
      className
    )}
  >
    {children}
  </div>
);
