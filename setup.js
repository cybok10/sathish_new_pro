const fs = require('fs');
const path = require('path');

// --- Helper to write files ---
function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content.trim());
  console.log(`✅ Updated: ${filePath}`);
}

// --- FILE CONTENTS ---

const packageJson = `{
  "name": "my-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.3",
    "lucide-react": "^0.378.0",
    "framer-motion": "^11.1.7",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0",
    "next-themes": "^0.3.0",
    "gray-matter": "^4.0.3",
    "next-mdx-remote": "^4.4.1",
    "@emailjs/browser": "^4.3.3",
    "@google/generative-ai": "^0.12.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "@tailwindcss/typography": "^0.5.13"
  }
}`;

const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Commented out to enable Dynamic API Routes for Chatbot
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
`;

const tailwindConfig = `
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
`;

const globalsCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* LIGHT MODE */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.75rem;
  }
 
  .dark {
    /* DARK MODE */
    --background: 0 0% 0%; 
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground transition-colors duration-300; }
}

@layer utilities {
  .glass-card { @apply bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-xl; }
  .text-gradient { @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-cyan-400 dark:to-violet-500; }
  .animate-blob { animation: blob 7s infinite; }
  .animate-wave { animation: wave 2.5s infinite; transform-origin: 70% 70%; display: inline-block; }
  .animate-blink { animation: blink 1s step-end infinite; }
  
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
}
`;

// --- DATA & CONTENT ---

const utils = `
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
`;

const portfolioData = `
import { 
  GraduationCap, Code, Layers, User, Mail, Phone, Linkedin, Github, Globe, Shield, Terminal, Cpu, Cloud, BookOpen 
} from "lucide-react";

export const portfolioData = {
  personalInfo: {
    name: "Sathish M",
    role: "Certified Penetration Tester | Ethical Hacker",
    tagline: "Securing the digital world through offensive security and intelligent automation.",
    email: "sathish1012cybok@gmail.com",
    phone: "+91 95971 24881",
    address: "Viluppuram, Tamil Nadu, India",
    website: "https://sathish-tau.vercel.com",
    social: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/amsathish", label: "LinkedIn" },
      { icon: Github, url: "https://github.com/cybok10", label: "GitHub" },
      { icon: Globe, url: "https://sathish-tau.vercel.com", label: "Portfolio" },
    ]
  },
  hero: {
    stats: [
      { label: "Certifications", value: "8+" },
      { label: "Internships", value: "3" },
      { label: "CGPA", value: "8.6" },
    ]
  },
  about: {
    title: "About Me",
    description: "I am a passionate Computer Science student skilled in Python development and cybersecurity fundamentals. I have hands-on experience in scripting, automation, and secure coding practices.",
    details: [
      { label: "Name", value: "Sathish M" },
      { label: "Education", value: "B.E. CSE (DSEC)" },
      { label: "Phone", value: "+91 95971 24881" },
      { label: "Email", value: "sathish1012cybok@gmail.com" },
      { label: "Location", value: "Viluppuram, Tamil Nadu" },
    ]
  },
  education: {
    title: "Education Path",
    items: [
      { degree: "Bachelor of Engineering (CSE)", institution: "Dhanalakshmi Srinivasan Engineering College", period: "2022 - Present", description: "CGPA: 9.3 (Autonomous)" },
      { degree: "Higher Secondary (HSC)", institution: "St. Joseph's Matric. Hr. Sec. School", period: "2020 - 2022", description: "Grade: 89%" }
    ]
  },
  skills: {
    title: "Skills & Expertise",
    categories: [
      { name: "Offensive Security", icon: Shield, skills: ["Penetration Testing", "Vulnerability Assessment", "Metasploit", "Burp Suite Pro", "Nmap", "Wireshark", "OWASP Top 10"] },
      { name: "Programming & Scripting", icon: Terminal, skills: ["Python", "Core Java", "C/C++", "Bash Scripting", "HTML/CSS", "JavaScript", "SQL"] },
      { name: "IoT & Cloud Security", icon: Cloud, skills: ["AWS Fundamentals", "GCP", "Wazuh SIEM", "IoT Security", "Arduino/Raspberry Pi", "MQTT Protocol"] }
    ]
  },
  experience: {
    title: "Experience",
    items: [
      { company: "The Red Users", role: "Intern", period: "Nov 2024 - Dec 2024", description: "Completed comprehensive cybersecurity internship focusing on threat analysis." },
      { company: "Cyber Nerd", role: "Penetration Testing Intern", period: "Aug 2025 - Oct 2025", description: "Practical experience in Ethical Hacking and System Hardening." },
      { company: "Internship Studio", role: "Ethical Hacking Intern", period: "Jun 2024 - Aug 2024", description: "Conducted vulnerability assessments and digital footprinting." }
    ]
  },
  certifications: {
    title: "Certifications",
    items: [
      { name: "Certified Penetration Testing", issuer: "RedTeam Hacker Academy", date: "Ongoing" },
      { name: "Advanced Ethical Hacking", issuer: "GUVI", date: "Oct 2025" },
      { name: "Cybersecurity and Ethical Hacking", issuer: "Internship Studio", date: "Aug 2024" },
      { name: "Wireshark & Metasploit", issuer: "Infosys Springboard", date: "Dec 2024" },
      { name: "Diploma in C & C++ Programming", issuer: "TCEDS", date: "Sep 2022" },
      { name: "Linux, Network Security, Nmap", issuer: "Udemy", date: "2024" },
    ]
  },
  achievements: {
    title: "Activities & Workshops",
    items: [
      { title: "CTF Player", description: "Actively practicing cybersecurity challenges on TryHackMe and PicoCTF." },
      { title: "IIT Madras Workshop", description: "Attended Python Workshop conducted by TopEngineers at IIT Madras." },
      { title: "OWASP Meetup", description: "Participated in OWASP Community Meetup, Coimbatore." },
    ]
  },
  projects: {
    title: "Featured Projects",
    items: [
      { title: "AI-driven NIDS", description: "Intelligent Network Intrusion Detection System using ML.", techStack: ["Python", "Scikit-learn", "Snort"], link: "#" },
      { title: "Centralized Log Monitoring", description: "Log monitoring using GCP and Wazuh SIEM.", techStack: ["GCP", "Wazuh", "Apache"], link: "#" },
      { title: "SigHunter Bot", description: "Telegram bot to detect and prevent malware.", techStack: ["Python", "Telegram API"], link: "#" }
    ]
  }
};
`;

const themeProvider = `"use client"
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
`;

const button = `
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'outline' | 'ghost'; size?: 'sm' | 'md' | 'lg'; }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  return (
    <button ref={ref} className={twMerge(clsx('inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:pointer-events-none', { 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25': variant === 'primary', 'border border-slate-700 bg-transparent text-slate-600 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-white': variant === 'outline', 'text-slate-400 hover:text-white hover:bg-slate-800/50': variant === 'ghost', 'text-sm px-4 py-2': size === 'sm', 'text-base px-6 py-3': size === 'md', 'text-lg px-8 py-4': size === 'lg' }, className))} {...props} />
  );
});
Button.displayName = 'Button';
`;

const sectionHeading = `'use client';
import React from 'react';
import { motion } from 'framer-motion';
export const SectionHeading = ({ title, subtitle, className = "" }: { title: string; subtitle?: string; className?: string }) => {
  return (
    <div className={\`text-center mb-16 \${className}\`}>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gradient border-b-2 border-blue-500/30 pb-2 inline-block">{title}</span>
      </motion.h2>
      {subtitle && <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{subtitle}</motion.p>}
    </div>
  );
};
`;

const navbar = `
'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useTheme } from 'next-themes';

const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Education', href: '/#education-skills' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); const handleScroll = () => setIsScrolled(window.scrollY > 50); window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll); }, []);

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${isScrolled ? 'py-4' : 'py-6'}\`}>
        <div className="container mx-auto px-6">
          <div className={\`mx-auto max-w-6xl rounded-full px-6 py-3 transition-all duration-300 border \${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-lg' : 'bg-transparent border-transparent'}\`}>
            <div className="flex items-center justify-between">
              <a href="/" className="text-xl font-bold font-mono tracking-tighter text-slate-800 dark:text-slate-100 hover:text-blue-500 transition-colors">&lt;Sathish /&gt;</a>
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (<a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">{link.name}</a>))}
                {mounted && (<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300">{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}</button>)}
                <Button variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView()}>Hire Me</Button>
              </div>
              <div className="flex items-center gap-4 md:hidden">
                 {mounted && (<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}</button>)}
                <button className="text-slate-600 dark:text-slate-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X /> : <Menu />}</button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-24 px-6 md:hidden">
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (<a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white">{link.name}</a>))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
`;

const hero = `
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-2 tracking-tighter">
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
              <a href={\`mailto:\${personalInfo.email}\`} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-cyan-600 transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:scale-110 hover:-translate-y-1 shadow-md"><Mail size={20} /></a>
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
                   <Image src="/images/profile.jpg" alt={personalInfo.name} fill className="object-cover scale-110" priority />
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
`;

const educationSkills = `
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
                        <div className={\`w-14 h-14 mb-3 rounded-2xl \${platform.bg} flex items-center justify-center shadow-sm group-hover:rotate-6 transition-all duration-300\`}>
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
`;

const experience = `
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';
export const Experience = () => {
  const { experience } = portfolioData;
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <SectionHeading title={experience.title} subtitle="My professional journey" />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800" />
          <div className="space-y-12">
            {experience.items.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className={\`relative flex flex-col md:flex-row gap-8 \${index % 2 === 0 ? 'md:flex-row-reverse' : ''}\`}>
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] w-3 h-3 bg-blue-500 rounded-full border-4 border-white dark:border-slate-950 z-10 mt-1.5 shadow-md" />
                <div className="flex-1 ml-6 md:ml-0">
                  <div className={\`bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:border-blue-500/30 transition-colors \${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}\`}>
                    <div className={\`flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400 \${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}\`}><Briefcase size={16} /><span className="font-semibold">{item.company}</span></div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.role}</h3>
                    <div className={\`flex items-center gap-2 text-sm text-muted-foreground mb-4 \${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}\`}><Calendar size={14} />{item.period}</div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
`;

const projects = `
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Github, FolderGit2 } from 'lucide-react';
export const Projects = () => {
  const { projects } = portfolioData;
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title={projects.title} subtitle="Real-world applications & experiments" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.items.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col h-full hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-none transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-violet-500" />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400"><FolderGit2 size={24} /></div>
                  <div className="flex gap-2"><a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-foreground transition-colors"><Github size={20} /></a></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">{project.techStack.map((tech, i) => (<span key={i} className="text-xs font-mono text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded border border-blue-100 dark:border-blue-500/20">{tech}</span>))}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
`;

const about = `
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { User, Sparkles } from 'lucide-react';
export const About = () => {
  const { about } = portfolioData;
  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6">
        <SectionHeading title={about.title} subtitle="Get to know me better" />
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><User size={120} /></div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2"><Sparkles className="text-blue-500" />Who I am</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{about.description}</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}><div className="grid gap-4">{about.details.map((detail, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card p-4 rounded-xl flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors border-l-4 border-l-blue-500"><span className="text-muted-foreground font-medium">{detail.label}</span><span className="text-foreground font-semibold text-right">{detail.value}</span></motion.div>))}</div></motion.div>
        </div>
      </div>
    </section>
  );
};
`;

const certifications = `
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Award, CheckCircle2 } from 'lucide-react';
export const Certifications = () => {
  const { certifications } = portfolioData;
  return (
    <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        <SectionHeading title={certifications.title} subtitle="Credentials & Qualifications" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.items.map((cert, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="glass-card p-6 rounded-xl border-l-4 border-l-violet-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group">
              <div className="flex justify-between items-start mb-4"><div className="p-3 bg-violet-100 dark:bg-violet-500/10 rounded-lg text-violet-600 dark:text-violet-400 group-hover:text-violet-500 dark:group-hover:text-violet-300 transition-colors"><Award size={24} /></div><span className="text-xs font-mono text-muted-foreground border border-slate-200 dark:border-slate-700 px-2 py-1 rounded">{cert.date}</span></div>
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{cert.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2"><CheckCircle2 size={14} className="text-green-500" />{cert.issuer}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
`;

const envLocal = `GEMINI_API_KEY=""`;

// --- WRITE FILES ---
writeFile('package.json', packageJson);
writeFile('next.config.mjs', nextConfig);
writeFile('tailwind.config.ts', tailwindConfig);
writeFile('src/app/globals.css', globalsCss);
writeFile('src/lib/utils.ts', utils);
writeFile('src/lib/blog.ts', blogHelper);
writeFile('src/data/portfolio.ts', portfolioData);
writeFile('src/components/providers/ThemeProvider.tsx', themeProvider);
writeFile('src/components/ui/Button.tsx', button);
writeFile('src/components/ui/SectionHeading.tsx', sectionHeading);
writeFile('src/components/ui/ChatBot.tsx', chatBotComponent);
writeFile('src/components/layout/Navbar.tsx', navbar);
writeFile('src/components/layout/Footer.tsx', footer);
writeFile('src/components/sections/Hero.tsx', hero);
writeFile('src/components/sections/About.tsx', about);
writeFile('src/components/sections/EducationSkills.tsx', educationSkills);
writeFile('src/components/sections/Experience.tsx', experience);
writeFile('src/components/sections/Projects.tsx', projects);
writeFile('src/components/sections/Certifications.tsx', certifications);
writeFile('src/components/sections/Contact.tsx', contact);
writeFile('src/app/api/chat/route.ts', chatRoute);
writeFile('src/app/layout.tsx', layout);
writeFile('src/app/page.tsx', homePage);
writeFile('src/app/blog/page.tsx', blogPage);
writeFile('src/app/blog/[slug]/page.tsx', blogPostPage);
writeFile('content/blogs/getting-started.mdx', sampleBlog1);
writeFile('content/blogs/ctf-platforms.mdx', sampleBlog2);
writeFile('.env.local', envLocal);

console.log("🎉 Project Setup Complete! Don't forget to create .env.local with GEMINI_API_KEY");