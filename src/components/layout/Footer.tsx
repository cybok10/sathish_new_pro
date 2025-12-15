import React from 'react';
import { portfolioData } from '@/data/portfolio';
export const Footer = () => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground mb-4">Designed & Built with <span className="text-red-500">♥</span> by {personalInfo.name}</p>
        <div className="flex justify-center gap-6">{personalInfo.social.map((social, index) => (<a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"><social.icon size={20} /></a>))}</div>
        <p className="text-xs text-slate-500 mt-8">© {currentYear} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};