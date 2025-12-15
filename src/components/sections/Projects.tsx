'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const { projects } = portfolioData;

  // Guard clause in case data is missing entirely
  if (!projects || !projects.items) return null;

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <SectionHeading title={projects.title} subtitle="What I've been working on" />

        {/* Grid Layout: 1 col mobile, 2 col tablet, 3 col desktop (lg:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.items.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111111] rounded-2xl overflow-hidden border border-white/5 group hover:border-violet-500/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Preview Area (Top Half - Purple Gradient) */}
              <div className="h-56 w-full bg-gradient-to-br from-violet-900/80 to-indigo-900/80 relative flex items-center justify-center overflow-hidden shrink-0">
                 {/* Overlay Gradient for depth */}
                 <div className="absolute inset-0 bg-black/20" />
                 
                 {/* Text Placeholder */}
                 <h3 className="relative z-10 text-xl font-bold text-white/90 drop-shadow-md select-none group-hover:scale-105 transition-transform duration-500">
                    {project.title} Preview
                 </h3>
              </div>

              {/* Content Area (Bottom Half) */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack with Safety Check (|| []) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(project.technologies || []).map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold border border-slate-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="flex gap-6 mt-auto pt-4 border-t border-white/5">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors"
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};