'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title={education.title} subtitle="My Academic Journey" />

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
            {education.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-5 h-5 bg-slate-950 border-4 border-blue-500 rounded-full" />
                
                <div className="glass-card p-6 rounded-xl hover:border-blue-500/30 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.degree}
                    </h3>
                    <div className="flex items-center text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded border border-slate-800">
                      <Calendar size={12} className="mr-1" />
                      {item.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 mb-4 text-sm font-medium">
                    <GraduationCap size={16} className="text-blue-500" />
                    {item.institution}
                  </div>
                  
                  <div className="inline-block bg-blue-500/10 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-500/20">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};