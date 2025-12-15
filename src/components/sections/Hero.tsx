'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Cpu, Shield, Code, Wifi, Smartphone, Database, Lock, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolio';

export const Hero = () => {
  const { personalInfo } = portfolioData;
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);
  const period = 2000;
  const roles = [ "Cybersecurity Researcher", "Investigator", "Ethical Hacker", "Pentester" ];

  useEffect(() => { let ticker = setInterval(() => tick(), delta); return () => clearInterval(ticker); }, [text, delta]);

  const tick = () => {
    let i = loopNum % roles.length; let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) setDelta(prev => prev / 2);
    if (!isDeleting && updatedText === fullText) { setIsDeleting(true); setDelta(period); } 
    else if (isDeleting && updatedText === '') { setIsDeleting(false); setLoopNum(loopNum + 1); setDelta(150); } 
    else { setDelta(100); }
  };

  const floatingIcons = [
    { Icon: Terminal, color: "text-green-600 dark:text-green-500", x: -200, y: -90 },
    { Icon: Shield, color: "text-orange-600 dark:text-orange-500", x: 220, y: -70 },
    { Icon: Code, color: "text-yellow-600 dark:text-yellow-400", x: -180, y: 90 },
    { Icon: Cpu, color: "text-cyan-600 dark:text-cyan-400", x: 210, y: 120 },
    { Icon: Smartphone, color: "text-purple-600 dark:text-purple-400", x: -100, y: 190 },
    { Icon: Lock, color: "text-red-600 dark:text-red-500", x: 140, y: 180 },
    { Icon: Database, color: "text-blue-600 dark:text-blue-400", x: 170, y: 20 },
    { Icon: Wifi, color: "text-pink-600 dark:text-pink-500", x: 0, y: -200 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 text-center lg:text-left z-20">
            <div className="inline-flex items-center gap-2 mb-4">
               <span className="text-3xl animate-wave">👋</span>
               <span className="text-xl font-medium text-muted-foreground">Hi, I'm</span>
            </div>
            {/* Added font-hero class here */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-2 tracking-tighter font-hero">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-500 dark:to-violet-600 drop-shadow-2xl">
                {personalInfo.name.toUpperCase()}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-foreground/80 mb-8 h-[36px] flex items-center justify-center lg:justify-start">
              <span>{text}</span><span className="w-1 h-6 bg-cyan-500 dark:bg-cyan-400 ml-1 animate-blink"></span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {personalInfo.tagline} specializing in <strong className="text-cyan-600 dark:text-cyan-400">offensive security</strong>, protecting platforms like Android OS and Google from critical vulnerabilities.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              {personalInfo.social.map((social, index) => (<a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-cyan-600 transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:scale-110 hover:-translate-y-1 shadow-md"><social.icon size={20} /></a>))}
              <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-cyan-600 transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:scale-110 hover:-translate-y-1 shadow-md"><Mail size={20} /></a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView()} className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-full px-8 py-5 text-base shadow-lg shadow-cyan-500/20">Contact Me <ArrowRight className="ml-2 w-4 h-4" /></Button>
              <Button variant="outline" size="lg" onClick={() => window.open('/resume.pdf', '_blank')} className="rounded-full border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-5 text-base text-foreground">Download Resume <Download className="ml-2 w-4 h-4" /></Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 relative flex items-center justify-center mt-10 lg:mt-0">
            <div className="relative w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] flex items-center justify-center">
              <div className="relative w-72 h-72 lg:w-[400px] lg:h-[400px] z-20">
                 <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-blue-600 rounded-[54%_46%_42%_58%/40%_48%_52%_60%] animate-blob opacity-100 shadow-[0_0_60px_-15px_rgba(124,58,237,0.6)]" />
                 <div className="absolute inset-3 bg-background rounded-[54%_46%_42%_58%/40%_48%_52%_60%] overflow-hidden border-[6px] border-background transition-colors duration-300">
                   <Image src="/images/me.jpg" alt={personalInfo.name} fill className="object-cover scale-110" priority />
                 </div>
              </div>
              {floatingIcons.map((item, index) => (
                <motion.div key={index} className="absolute z-10 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-sm" initial={{ x: 0, y: 0, opacity: 0 }} animate={{ x: item.x, y: item.y, opacity: 1, y: [item.y - 8, item.y + 8, item.y - 8] }} transition={{ duration: 0.5, delay: index * 0.1, y: { duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }}>
                  <item.Icon className={item.color} size={28} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};