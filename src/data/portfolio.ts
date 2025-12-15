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
    description: "I am a passionate Computer Science student with a strong foundation in Python development and cybersecurity fundamentals. I have hands-on experience in scripting, automation, secure coding practices, and basic vulnerability assessment through labs and practical exercises. I am a quick learner with strong problem-solving skills and a keen interest in building secure and efficient software solutions.",
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
      { company: "Cyber Nerd", role: "Penetration Testing Intern", period: "Aug 2025 - Oct 2025", description: "Practical experience in Ethical Hacking and System Hardening." },
      { company: "Internship Studio", role: "Ethical Hacking Intern", period: "Jun 2024 - Aug 2024", description: "Conducted vulnerability assessments and digital footprinting." },
      { company: "The Red Users", role: "Intern", period: "Nov 2024 - Dec 2024", description: "Completed comprehensive cybersecurity internship focusing on threat analysis." }
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
      { title: "WiFi Jammer Project", description: "Educational project to demonstrate WiFi jamming concepts and wireless network disruption techniques in a controlled environment.", techStack: ["Python", "Linux", "Wireless Networking"], link: "#" }

    ]
  }
};