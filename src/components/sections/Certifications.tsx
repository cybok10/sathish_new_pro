'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Award, CheckCircle2 } from 'lucide-react';

export const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <SectionHeading title={certifications.title} subtitle="Credentials & Qualifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.items.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl border-l-4 border-l-violet-500 hover:bg-slate-800 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400 group-hover:text-violet-300 transition-colors">
                  <Award size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">
                  {cert.date}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">
                {cert.name}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                <CheckCircle2 size={14} className="text-green-500" />
                {cert.issuer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};