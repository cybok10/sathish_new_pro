'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Trophy, Star } from 'lucide-react';

export const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title={achievements.title} subtitle="Recognition & continuous learning" />

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-colors" />

              <div className="flex items-start gap-4">
                <div className="mt-1 text-yellow-500">
                  {index === 0 ? <Trophy size={28} /> : <Star size={28} />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};