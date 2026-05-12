export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  github: string;
  demo?: string;
  tags: string[];
  category: 'distributed-systems' | 'backend' | 'ai' | 'real-time';
  architecture: {
    description: string;
    nodes: { id: string; label: string; type: string }[];
    connections: { from: string; to: string; label?: string }[];
  };
  poster: string;
  scalabilityInsights: string[];
  highlights: string[];
  challenges: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  logo?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  status: string;
  college: string;
  graduationYear: string;
  location: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
  codingProfiles: {
    leetcode: string;
    codeforces: string;
    hackerrank: string;
  };
  leetcodeStats?: {
    solved: number;
    easy: number;
    medium: number;
    hard: number;
    ranking: string;
    contestRating: number;
    globalRanking: string;
    topPercentage: string;
    acceptanceRate: string;
    submissions: number;
    activeDays: number;
    maxStreak: number;
    recentSubmissions: string[];
    recentBadge: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
}

