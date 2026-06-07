import type { Achievement, ExperienceItem, Project, Skill, SocialLink, Testimonial } from '../types';

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/srichaitanyavarma', icon: 'FiGithub' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/srichaitanyavarmamudunoori', icon: 'FiLinkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/', icon: 'SiLeetcode' },
  { label: 'Email', href: 'mailto:chaitanyavarmamudunoori@gmail.com', icon: 'FiMail' }
];

export const roles = ['Frontend Developer', 'React Developer', 'Software Engineer', 'Problem Solver'];

export const stats = [
  {
    label: "Projects",
    value: "10+"
  },
  {
    label: "CGPA",
    value: "9.33"
  },
  {
    label: "GATE",
    value: "2x"
  },
  {
    label: "Internship",
    value: "1+"
  }
];
export const skills: Skill[] = [
  { name: 'HTML', category: 'Frontend', level: 'Advanced', icon: 'SiHtml5' },
  { name: 'CSS', category: 'Frontend', level: 'Strong', icon: 'SiCss3' },
  { name: 'JavaScript', category: 'Frontend', level: 'Advanced', icon: 'SiJavascript' },
  { name: 'React', category: 'Frontend', level: 'Advanced', icon: 'SiReact' },
  { name: 'Tailwind', category: 'Frontend', level: 'Advanced', icon: 'SiTailwindcss' },
  { name: 'Redux', category: 'Frontend', level: 'Intermediate', icon: 'SiRedux' },
  { name: 'Node.js', category: 'Backend', level: 'Intermediate', icon: 'SiNodedotjs' },
  { name: 'Express', category: 'Backend', level: 'Intermediate', icon: 'SiExpress' },
  { name: 'Firebase', category: 'Backend', level: 'Intermediate', icon: 'SiFirebase' },
  { name: 'MongoDB', category: 'Database', level: 'Intermediate', icon: 'SiMongodb' },
  { name: 'Firestore', category: 'Database', level: 'Intermediate', icon: 'SiFirebase' },
  { name: 'Git', category: 'Tools', level: 'Advanced', icon: 'SiGit' },
  { name: 'GitHub', category: 'Tools', level: 'Advanced', icon: 'SiGithub' },
  { name: 'VS Code', category: 'Tools', level: 'Advanced', icon: 'SiVisualstudiocode' },
  { name: 'Postman', category: 'Tools', level: 'Intermediate', icon: 'SiPostman' }
];

export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer Intern',
    company: 'nDMatrix private Limited',
    period: 'Mar 2026 - May 2026',
    bulletPoints: [
      'Built reusable React components and modular page layouts.',
      'Integrated REST APIs to deliver responsive data experiences.',
      'Resolved UI regressions and improved render performance.',
      'Collaborated with design and QA teams through agile sprints.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'AI-Based Disaster Relief Demand Prediction',
    description: 'Predict disaster relief demand using machine learning and NLP for faster relief planning.',
    techStack: ['Python', 'Machine Learning', 'NLP', 'React'],
    category: 'AI',
    github: 'https://github.com/',
    demo: '#',
    imageAlt: 'AI disaster relief dashboard'
  },
  {
    title: 'CertiChain',
    description: 'A certificate generation and verification platform built with blockchain-inspired integrity checks.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    category: 'Blockchain',
    github: 'https://github.com/',
    demo: '#',
    imageAlt: 'CertiChain certificate system'
  },
  {
    title: 'Seminar Hall Booking System',
    description: 'Faculty hall booking system with approval workflows and seat management.',
    techStack: ['MERN Stack'],
    category: 'Full Stack',
    github: 'https://github.com/',
    demo: '#',
    imageAlt: 'Seminar hall approval workflow'
  },
  {
    title: 'GATEwayForSuccess',
    description: 'Personalized learning roadmap platform for GATE aspirants with progress tracking.',
    techStack: ['React', 'Firebase'],
    category: 'EdTech',
    github: 'https://github.com/',
    demo: '#',
    imageAlt: 'GATEwayForSuccess dashboard'
  },
  {
    title: 'FastLane',
    description: 'A transportation-focused hackathon project that improves emergency response routing.',
    techStack: ['React', 'Firebase'],
    category: 'Hackathon',
    github: 'https://github.com/',
    demo: '#',
    imageAlt: 'FastLane response system'
  }
];

export const achievements = [
  {
    title: "GATE 2026 Qualified",
    description:
      "Secured a rank within the top 7% of candidates nationwide."
  },
  {
    title: "GATE 2025 Qualified",
    description:
      "Successfully qualified the national-level GATE examination."
  },
  {
    title: "2nd Place - GDSC WoW Hackathon",
    description:
      "Led a 4-member team among 800+ participants."
  },
  {
    title: "HackWave 2.0 Finalist",
    description:
      "National-level finalist in a 36-hour hackathon."
  },
  {
    title: "Academic Excellence",
    description:
      "Achieved CGPA of 9.33 in Computer Science Engineering."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Hiring Manager',
    role: 'Startup Recruiter',
    quote: 'Sri delivers polished frontend experiences and quickly adapts to team workflows.'
  },
  {
    name: 'Project Mentor',
    role: 'Software Engineering Coach',
    quote: 'He builds scalable UI solutions with a strong attention to design and quality.'
  }
];
export const heroBadges = [
  {
    text: "React Developer Intern"
  },
  {
    text: "GATE 2026 Qualified"
  },
  {
    text: "9.33 CGPA"
  },
  {
    text: "Hackathon Finalist"
  }
];

export const heroStats = [
  {
    value: "10+",
    label: "Projects"
  },
  {
    value: "9.33",
    label: "CGPA"
  },
  {
    value: "2x",
    label: "GATE Qualified"
  },
  {
    value: "1+",
    label: "Internship"
  }
];

export const floatingTech = [
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Tailwind"
];
export const skillDashboard = [
  {
    title: "Frontend Systems",
    level: 95,
    color: "blue",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "Redux"
    ]
  },
  {
    title: "Backend Systems",
    level: 80,
    color: "purple",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs"
    ]
  },
  {
    title: "AI / ML",
    level: 70,
    color: "orange",
    skills: [
      "NLP",
      "Scikit-learn",
      "Sentiment Analysis",
      "Data Preprocessing"
    ]
  },
  {
    title: "Database Systems",
    level: 75,
    color: "green",
    skills: [
      "MongoDB",
      "MySQL",
      "PL/SQL",
      "Firestore"
    ]
  },
  {
    title: "Tools & Workflow",
    level: 90,
    color: "cyan",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Google Colab",
      "Agile"
    ]
  }
];