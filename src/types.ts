export interface Section {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Skill {
  name: string;
  category: string;
  level: string;
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  bulletPoints: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  category: string;
  github: string;
  demo: string;
  imageAlt: string;

  featured?: boolean;
  metrics?: string[];
}

export interface Achievement {
  title: string;
  description: string;

  year?: string;
  badge?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface HeroBadge {
  text: string;
  icon?: string;
}

export interface HeroCard {
  title: string;
  subtitle: string;
  achievements: string[];
}