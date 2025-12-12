'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <SectionHeading title={experience.title} subtitle="My professional journey" />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-800" />

          <div className="space-y-12">
            {experience.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot on the line */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-950 z-10 mt-1.5" />

                {/* Content Card */}
                <div className="flex-1 ml-6 md:ml-0">
                  <div className={`glass-card p-6 rounded-xl hover:border-blue-500/30 transition-colors ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <div className={`flex items-center gap-2 mb-2 text-blue-400 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <Briefcase size={16} />
                      <span className="font-semibold">{item.company}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{item.role}</h3>
                    
                    <div className={`flex items-center gap-2 text-sm text-slate-500 mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <Calendar size={14} />
                      {item.period}
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for the other side of the timeline */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};