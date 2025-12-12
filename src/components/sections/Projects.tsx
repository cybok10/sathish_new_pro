'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <SectionHeading title={projects.title} subtitle="Real-world applications & experiments" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden flex flex-col h-full group hover:border-blue-500/50 transition-colors duration-300"
            >
              {/* Card Header (Decoration) */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-violet-500" />

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <FolderGit2 size={24} />
                  </div>
                  <div className="flex gap-2">
                    {/* If you have a GitHub link, this button appears. Currently using placeholders */}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono text-blue-300 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};