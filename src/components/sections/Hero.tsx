'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Download, Mail, Terminal, Cpu, Shield, 
  Globe, Code, Wifi, Smartphone, Database, Lock, Search 
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolio';

export const Hero = () => {
  const { personalInfo } = portfolioData;
  
  // Rotating Roles State
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);
  const period = 2000;
  
  const roles = [ "Cybersecurity Researcher", "Investigator", "Ethical Hacker", "Pentester" ];

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta(prev => prev / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    } else {
      setDelta(100);
    }
  };

  // "App Icon" Style Floating Elements (Positioned to match the constellation look)
  // Using solid squares with rounded corners to mimic the reference logos
  const floatingIcons = [
    { Icon: Terminal, color: "text-green-500", x: -220, y: -80, size: 14 },   // Top Left (Far)
    { Icon: Shield, color: "text-orange-500", x: 230, y: -60, size: 16 },     // Top Right (Burp Suite vibe)
    { Icon: Code, color: "text-yellow-400", x: -200, y: 80, size: 12 },       // Left (Python vibe)
    { Icon: Cpu, color: "text-cyan-400", x: 240, y: 120, size: 14 },          // Right (Arduino vibe)
    { Icon: Smartphone, color: "text-green-400", x: -100, y: 200, size: 16 }, // Bottom Left (Android)
    { Icon: Lock, color: "text-red-500", x: 140, y: 190, size: 14 },          // Bottom Right (John the Ripper vibe)
    { Icon: Database, color: "text-purple-400", x: 180, y: 40, size: 12 },    // Mid Right
    { Icon: Search, color: "text-blue-400", x: -160, y: -160, size: 12 },     // Top Left High
    { Icon: Wifi, color: "text-pink-500", x: 0, y: -210, size: 14 },          // Top Center
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      
      {/* Background Glows (Subtle and localized) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* ================= LEFT COLUMN: TEXT ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-20"
          >
            {/* Greeting Pill */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800">
               <span className="text-xl animate-wave">👋</span>
               <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Hi, I'm {personalInfo.name}</span>
            </div>
            
            {/* Massive Headline */}
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-foreground">
              {text}
              <span className="inline-block w-1 h-10 lg:h-16 ml-1 bg-violet-500 animate-blink align-middle"></span>
            </h1>

            {/* Cyan Underline Decoration */}
            <div className="w-24 h-2 bg-cyan-400 rounded-full mb-8 mx-auto lg:mx-0 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {personalInfo.tagline} specializing in <strong className="text-foreground">ethical hacking</strong>, securing platforms like Android OS, Google, and Microsoft.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-10">
              {personalInfo.social.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-violet-600 transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:scale-110 hover:-translate-y-1 shadow-lg"
                >
                  <social.icon size={22} />
                </a>
              ))}
              <a href={`mailto:${personalInfo.email}`} className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-violet-600 transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:scale-110 hover:-translate-y-1 shadow-lg">
                 <Mail size={22} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-10 py-7 text-lg shadow-xl shadow-violet-500/20">
                View Roadmaps
              </Button>
            </div>
          </motion.div>


          {/* ================= RIGHT COLUMN: PROFILE & CONSTELLATION ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative flex items-center justify-center"
          >
            {/* Constellation Container */}
            <div className="relative w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] flex items-center justify-center">
              
              {/* Profile Image with ORGANIC LIQUID BLOB */}
              <div className="relative w-72 h-72 lg:w-[420px] lg:h-[420px] z-20">
                 {/* The Liquid Purple Blob */}
                 <div className="absolute inset-0 bg-violet-600 rounded-[54%_46%_42%_58%/40%_48%_52%_60%] animate-blob opacity-100 shadow-[0_0_60px_-15px_rgba(124,58,237,0.5)]" />
                 
                 {/* The Image Mask */}
                 <div className="absolute inset-2 bg-background rounded-[54%_46%_42%_58%/40%_48%_52%_60%] overflow-hidden border-[6px] border-background">
                   <Image 
                     src="/images/me.jpg" 
                     alt={personalInfo.name}
                     fill
                     className="object-cover scale-110" 
                     priority
                   />
                 </div>
              </div>

              {/* Floating "App Icons" */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  // Styling to match "App Icons": Dark square with rounded corners
                  className="absolute z-10 w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl"
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{ 
                    x: item.x, 
                    y: item.y, 
                    opacity: 1,
                    y: [item.y - 8, item.y + 8, item.y - 8] // Gentle bobbing
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    y: {
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }
                  }}
                >
                  <item.Icon className={`${item.color}`} size={32} />
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};