'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GraduationCap, Calendar, CheckCircle2, Flag, Box, Cpu, Cloud } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const EducationSkills = () => {
  const { education, skills } = portfolioData;

  // Added 'link' property to each item
  const trainingPlatforms = [
    { 
      name: "TryHackMe", 
      description: "Active CTF Player", 
      icon: Flag, 
      color: "text-red-400", 
      bg: "bg-red-500/20",
      link: "https://tryhackme.com/p/cybok" // <--- REPLACE THIS WITH YOUR REAL PROFILE LINK
    },
    { 
      name: "HackTheBox", 
      description: "Penetration Testing", 
      icon: Box, 
      color: "text-green-400", 
      bg: "bg-green-500/20",
      link: "https://app.hackthebox.com/profile/your-id" // Optional: Add your HTB link
    },
    { 
      name: "IoT Development", 
      description: "Arduino & Raspberry Pi", 
      icon: Cpu, 
      color: "text-blue-400", 
      bg: "bg-blue-500/20",
      link: "#"
    },
    { 
      name: "Cloud Security", 
      description: "AWS, GCP, Azure", 
      icon: Cloud, 
      color: "text-orange-400", 
      bg: "bg-orange-500/20",
      link: "#" 
    },
  ];

  return (
    <section id="education-skills" className="py-20 relative overflow-hidden">
      {/* Animated Background Decoration */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" 
      />

      <div className="container mx-auto px-6">
        <SectionHeading title="Education & Skills" subtitle="My academic foundation and technical arsenal" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto items-start mb-20">
          
          {/* ==================== LEFT COLUMN: EDUCATION ==================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <GraduationCap size={24} />
              </div>
              Education Path
            </motion.h3>

            <div className="space-y-8 border-l-2 border-slate-800 ml-4 pl-8 relative">
              {education.items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] top-1 flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-slate-950 border-4 border-blue-500"></span>
                  </span>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="group cursor-default"
                  >
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {item.degree}
                    </h4>
                    <div className="text-blue-400 font-medium text-sm mb-1">{item.institution}</div>
                    
                    <div className="flex items-center gap-3 text-sm text-slate-500 mt-2">
                      <span className="flex items-center gap-1 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50 text-slate-400 group-hover:border-blue-500/30 transition-colors">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                      <span className="text-slate-500 group-hover:text-slate-300 transition-colors">
                        {item.description}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* ==================== RIGHT COLUMN: SKILLS ==================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg text-violet-400">
                <CheckCircle2 size={24} />
              </div>
              Skills & Expertise
            </motion.h3>

            <div className="space-y-6">
              {skills.categories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 40px -10px rgba(124, 58, 237, 0.1)",
                    borderColor: "rgba(139, 92, 246, 0.3)"
                  }}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm"
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-slate-800 rounded-lg text-violet-400 border border-slate-700 group-hover:bg-violet-500/10">
                      <category.icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      {category.name}
                    </h4>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => (
                      <motion.span 
                        key={idx}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)", color: "#fff" }}
                        className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-md transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ==================== BOTTOM ROW: TRAINING PLATFORMS ==================== */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
           <h3 className="text-center text-xl font-semibold text-slate-300 mb-8 opacity-80">Training Platforms & Competitions</h3>
           
           <motion.div 
             whileHover={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
             className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 lg:p-12 backdrop-blur-md shadow-2xl"
           >
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {trainingPlatforms.map((platform, index) => (
                  // Changed from motion.div to motion.a to make it clickable
                  <motion.a 
                    key={index} 
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-16 h-16 mb-4 rounded-2xl ${platform.bg} flex items-center justify-center shadow-lg group-hover:rotate-6 transition-all duration-300`}>
                      <platform.icon size={32} className={platform.color} />
                    </div>
                    <h4 className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">{platform.name}</h4>
                    <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">{platform.description}</p>
                  </motion.a>
                ))}
             </div>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
};