import { 
  GraduationCap, 
  Code, 
  Layers, 
  User, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Globe, 
  Shield, 
  Terminal, 
  Cpu, 
  Cloud,
  BookOpen
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
    description: "I am a passionate Computer Science student skilled in Python development and cybersecurity fundamentals. I have hands-on experience in scripting, automation, and secure coding practices. I am eager to contribute to real-world projects through efficient coding and proactive problem-solving, with a strong focus on penetration testing and threat analysis.",
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
      {
        degree: "Bachelor of Engineering (CSE)",
        institution: "Dhanalakshmi Srinivasan Engineering College",
        period: "2022 - Present",
        description: "CGPA: 9.3 (Autonomous)"
      },
      {
        degree: "Higher Secondary (HSC)",
        institution: "St. Joseph's Matric. Hr. Sec. School",
        period: "2020 - 2022",
        description: "Grade: 89%"
      },
      {
        degree: "Secondary School (SSLC)",
        institution: "St. Joseph's Matric. Hr. Sec. School",
        period: "2018 - 2020",
        description: "Grade: 99%"
      }
    ]
  },

  skills: {
    title: "Skills & Expertise",
    categories: [
      {
        name: "Offensive Security",
        icon: Shield,
        skills: ["Penetration Testing", "Vulnerability Assessment", "Metasploit", "Burp Suite Pro", "Nmap", "Wireshark", "OWASP Top 10"]
      },
      {
        name: "Programming & Scripting",
        icon: Terminal,
        skills: ["Python", "Core Java", "C/C++", "Bash Scripting", "HTML/CSS", "JavaScript", "SQL"]
      },
      {
        name: "IoT & Cloud Security",
        icon: Cloud,
        skills: ["AWS Fundamentals", "GCP", "Wazuh SIEM", "IoT Security", "Arduino/Raspberry Pi", "MQTT Protocol"]
      }
    ]
  },

  experience: {
    title: "Experience",
    items: [
      {
        company: "The Red Users",
        role: "Intern",
        period: "Nov 2024 - Dec 2024",
        description: "Completed comprehensive cybersecurity internship focusing on threat analysis, vulnerability assessment, and security protocols. Gained hands-on experience with enterprise security tools."
      },
      {
        company: "Cyber Nerd",
        role: "Penetration Testing Intern",
        period: "Aug 2025 - Oct 2025",
        description: "Practical experience in Ethical Hacking, System Hardening, and Security Tools usage including Metasploit, Nmap, and Burp Suite."
      },
      {
        company: "Internship Studio",
        role: "Ethical Hacking Intern",
        period: "Jun 2024 - Aug 2024",
        description: "Conducted vulnerability assessments, penetration testing, and digital footprinting using Recon-ng and other security tools."
      }
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
      { title: "CTF Player", description: "Actively practicing cybersecurity challenges on TryHackMe, OverTheWire, PortSwigger Labs, and PicoCTF." },
      { title: "IIT Madras Workshop", description: "Attended Python Workshop conducted by TopEngineers at IIT Madras." },
      { title: "OWASP Meetup", description: "Participated in OWASP Community Meetup, Coimbatore." },
    ]
  },

  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "AI-driven Network Intrusion Detection System",
        description: "Developed an intelligent NIDS leveraging machine learning to identify and prevent malicious network activities in real-time.",
        techStack: ["Python", "Scikit-learn", "TensorFlow", "Snort", "Wireshark"],
        link: "#"
      },
      {
        title: "Centralized Log Monitoring System",
        description: "Designed a centralized log monitoring solution using Google Cloud Platform and Wazuh SIEM for incident detection.",
        techStack: ["GCP", "Wazuh", "Apache", "Ubuntu Linux"],
        link: "#"
      },
      {
        title: "SigHunter Bot", 
        description: "A Telegram bot designed to detect and prevent malware in real-time (Previous Work).",
        techStack: ["Python", "Telegram API", "Cybersecurity"],
        link: "#"
      }
    ]
  }
};