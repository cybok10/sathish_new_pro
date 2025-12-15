'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GraduationCap, Calendar, CheckCircle2, Flag, Box } from 'lucide-react';

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } } };

export const EducationSkills = () => {
  const { education, skills } = portfolioData;
  const trainingPlatforms = [
    { name: "TryHackMe", description: "Active CTF Player", icon: Flag, color: "text-red-500", bg: "bg-red-100 dark:bg-red-500/20", link: "https://tryhackme.com" },
    { name: "HackTheBox", description: "Penetration Testing", icon: Box, color: "text-green-500", bg: "bg-green-100 dark:bg-green-500/20", link: "https://app.hackthebox.com" },
  ];

  return (
    <section id="education-skills" className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading title="Education & Skills" subtitle="My academic foundation and technical arsenal" />
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto items-start mb-20">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            
            {/* Education Block */}
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                <GraduationCap size={24} />
              </div>
              Education Path
            </motion.h3>
            
            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-8 relative mb-16">
              {education.items.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <span className="absolute -left-[41px] top-1 flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-background border-4 border-blue-500"></span>
                  </span>
                  <motion.div whileHover={{ x: 5 }} className="group cursor-default">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors duration-300">{item.degree}</h4>
                    <div className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-1">{item.institution}</div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/50 px-2 py-1 rounded border border-slate-200 dark:border-slate-700/50">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                      <span>{item.description}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Training Platforms Block (Moved Here) */}
            <motion.div variants={itemVariants}>
               <h3 className="text-xl font-semibold text-muted-foreground mb-6 opacity-80">Training Platforms</h3>
               <motion.div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-sm dark:shadow-2xl">
                 <div className="grid grid-cols-2 gap-4 text-center">
                    {trainingPlatforms.map((platform, index) => (
                      <motion.a key={index} href={platform.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group cursor-pointer p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" whileHover={{ scale: 1.02 }}>
                        <div className={`w-14 h-14 mb-3 rounded-2xl ${platform.bg} flex items-center justify-center shadow-sm group-hover:rotate-6 transition-all duration-300`}>
                          <platform.icon size={28} className={platform.color} />
                        </div>
                        <h4 className="text-foreground font-bold mb-1 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{platform.name}</h4>
                        <p className="text-xs text-muted-foreground">{platform.description}</p>
                      </motion.a>
                    ))}
                 </div>
               </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Skills */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="p-2 bg-violet-100 dark:bg-violet-500/20 rounded-lg text-violet-600 dark:text-violet-400">
                <CheckCircle2 size={24} />
              </div>
              Skills & Expertise
            </motion.h3>
            <div className="space-y-6">
              {skills.categories.map((category, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, borderColor: "rgba(139, 92, 246, 0.3)" }} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm shadow-sm dark:shadow-none">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-violet-600 dark:text-violet-400 border border-slate-200 dark:border-slate-700">
                      <category.icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{category.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => (
                      <motion.span key={idx} whileHover={{ scale: 1.05 }} className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md transition-all cursor-default">
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};