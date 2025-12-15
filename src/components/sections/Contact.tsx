'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const { personalInfo } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setIsSubmitting(true); setErrorMessage('');
    const formData = new FormData(e.currentTarget); const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("https://formsubmit.co/ajax/sathish1012cybok@gmail.com", { method: "POST", headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) });
      if (response.ok) { setIsSuccess(true); setIsSubmitting(false); setTimeout(() => setIsSuccess(false), 5000); } 
      else { setErrorMessage("Something went wrong. Please try again."); setIsSubmitting(false); }
    } catch (error) { setErrorMessage("Network error. Please try again later."); setIsSubmitting(false); }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get In Touch" subtitle="Let's discuss your next project" />
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">I am currently available for freelance work and internship opportunities.</p>
            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors group"><div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700"><Mail size={20} /></div><div><div className="text-sm text-muted-foreground">Email</div><div className="font-medium">{personalInfo.email}</div></div></a>
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300 group"><div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700"><MapPin size={20} /></div><div><div className="text-sm text-muted-foreground">Location</div><div className="font-medium">{personalInfo.address}</div></div></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            {isSuccess ? (<div className="h-full flex flex-col items-center justify-center text-center py-10"><div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4"><CheckCircle size={32} /></div><h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3><Button className="mt-6" variant="outline" onClick={() => setIsSuccess(false)}>Send Another</Button></div>) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="_honey" className="hidden" /><input type="hidden" name="_captcha" value="false" />
                <div className="grid md:grid-cols-2 gap-6"><div className="space-y-2"><label className="text-sm font-medium text-muted-foreground">Name</label><input type="text" name="name" required className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your Name" /></div><div className="space-y-2"><label className="text-sm font-medium text-muted-foreground">Email</label><input type="email" name="email" required className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" /></div></div>
                <div className="space-y-2"><label className="text-sm font-medium text-muted-foreground">Subject</label><input type="text" name="subject" required className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-blue-500 transition-colors" placeholder="Project Inquiry" /></div>
                <div className="space-y-2"><label className="text-sm font-medium text-muted-foreground">Message</label><textarea name="message" required rows={4} className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell me about your project..." /></div>
                {errorMessage && <p className="text-red-400 text-sm text-center">{errorMessage}</p>}
                <Button className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>{isSubmitting ? <>Sending... <Loader2 className="ml-2 w-4 h-4 animate-spin" /></> : <>Send Message <Send className="ml-2 w-4 h-4" /></>}</Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};