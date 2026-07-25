export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
  phone?: string;
  location: string;
  leetcode?: string;
  hackerrank?: string;
}

export interface DeveloperInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  objective: string;
  resumeUrl: string;
  avatarUrl: string;
  socials: SocialLinks;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: "Frontend" | "Backend" | "Databases" | "Cloud" | "DevOps" | "Tools" | "Data Science & AI";
  iconName: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  category: "All" | "Data Science & AI" | "Cloud & Web" | "Database & Analytics";
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: "Internship" | "Full-time" | "Contract" | "Project";
  responsibilities: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string; // e.g. "CGPA: 8.3/10"
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skillsCovered: string[];
  icon: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: "Award" | "Hackathon" | "Certifications" | "Coding Profile";
  date: string;
  description: string;
  metric?: string;
  link?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  avatar: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface PortfolioData {
  developer: DeveloperInfo;
  stats: StatItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  testimonials: TestimonialItem[];
  navLinks: { name: string; href: string }[];
}
