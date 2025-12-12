'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { User, Sparkles } from 'lucide-react';

export const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 relative bg-slate-900/20">
      <div className="container mx-auto px-6">
        <SectionHeading title={about.title} subtitle="Get to know me better" />

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <User size={120} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="text-blue-400" />
                Who I am
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {about.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-4">
              {about.details.map((detail, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 rounded-xl flex items-center justify-between hover:bg-slate-800/80 transition-colors border-l-4 border-l-blue-500"
                >
                  <span className="text-slate-400 font-medium">{detail.label}</span>
                  <span className="text-white font-semibold text-right">{detail.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};