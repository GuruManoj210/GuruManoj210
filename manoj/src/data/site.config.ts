export type Social = {
  platform: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'facebook' | 'youtube' | 'devto' | 'medium' | 'hashnode' | 'stackOverflow' | 'email' | 'website';
  url: string;
  handle?: string;
};

export type DownloadItem = {
  title: string;
  description?: string;
  file: string; // path under /public or absolute URL
};

export type Experience = {
  company: string;
  role: string;
  employmentType?: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
  location?: string;
  startDate: string; // YYYY-MM
  endDate?: string; // YYYY-MM or 'Present'
  summary?: string;
  achievements?: string[];
  tech?: string[];
  links?: { label: string; url: string }[];
};

export type Education = {
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startDate: string; // YYYY-MM
  endDate?: string; // YYYY-MM or 'Present'
  gpa?: string;
  coursework?: string[];
  honors?: string[];
};

export type Project = {
  name: string;
  description: string;
  highlights?: string[];
  stack?: string[];
  image?: string; // /images/projects/...
  url?: string;
  repo?: string;
  role?: string;
  startDate?: string;
  endDate?: string;
};

export type Skill = {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  keywords?: string[];
};

export type Certification = {
  name: string;
  issuer?: string;
  date?: string;
  url?: string;
};

export type Publication = {
  title: string;
  outlet: 'medium' | 'devto' | 'hashnode' | 'linkedin' | 'arxiv' | 'journal' | 'conference' | 'other';
  url: string;
  date?: string;
};

export type SiteConfig = {
  site: {
    title: string;
    description: string;
    keywords: string[];
    themeColor: string;
    locale: string;
    author: string;
    baseUrl?: string;
  };
  profile: {
    name: string;
    headline: string;
    subheadline?: string;
    location?: string;
    avatar?: string; // /images/avatar.jpg
    summary: string;
  };
  contact: {
    email?: string;
    phone?: string;
    address?: string;
    formspreeId?: string; // e.g. "meqwkxyz"
  };
  socials: Social[];
  skills: Skill[];
  certifications?: Certification[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  publications?: Publication[];
  downloads?: DownloadItem[];
};

const config: SiteConfig = {
  site: {
    title: 'Manoj | Portfolio',
    description: 'Space-themed, minimal, and fast portfolio built with Astro.',
    keywords: ['Manoj', 'Portfolio', 'Developer', 'Projects', 'Science', 'Space'],
    themeColor: '#0b1020',
    locale: 'en-IN',
    author: 'Manoj',
    baseUrl: 'https://example.com'
  },
  profile: {
    name: 'Manoj',
    headline: 'Software Engineer',
    subheadline: 'Building fast, elegant experiences',
    location: 'India',
    avatar: '/images/avatar.png',
    summary: 'Short professional summary. Replace with your own summary to pass ATS and describe achievements with metrics.'
  },
  contact: {
    email: 'you@example.com',
    phone: '+91-0000000000',
    address: 'City, State, Country',
    formspreeId: 'YOUR_FORMSPREE_ID'
  },
  socials: [
    { platform: 'github', url: 'https://github.com/your-handle', handle: 'your-handle' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/your-handle', handle: 'your-handle' },
    { platform: 'twitter', url: 'https://x.com/your-handle', handle: 'your-handle' },
    { platform: 'instagram', url: 'https://instagram.com/your-handle' },
    { platform: 'facebook', url: 'https://facebook.com/your-handle' },
    { platform: 'medium', url: 'https://medium.com/@your-handle' },
    { platform: 'devto', url: 'https://dev.to/your-handle' },
    { platform: 'website', url: 'https://your-site.com' },
  ],
  skills: [
    { name: 'TypeScript', level: 'advanced', keywords: ['Astro', 'React', 'Node.js'] },
    { name: 'Python', level: 'advanced', keywords: ['Data', 'Automation'] },
    { name: 'Cloud', level: 'intermediate', keywords: ['Vercel', 'AWS'] },
  ],
  certifications: [
    { name: 'Certification Name', issuer: 'Issuer', date: '2024-05', url: 'https://example.com' }
  ],
  experience: [
    {
      company: 'Company A',
      role: 'Software Engineer',
      employmentType: 'full-time',
      location: 'Remote',
      startDate: '2023-01',
      endDate: 'Present',
      summary: 'Worked on X. Improved Y by Z%.',
      achievements: [
        'Led migration to Astro islands for 40% faster TTFB',
        'Built automation saving 10+ hours/week'
      ],
      tech: ['Astro', 'React', 'TypeScript'],
      links: [{ label: 'Website', url: 'https://example.com' }]
    }
  ],
  education: [
    {
      institution: 'University Name',
      degree: 'B.Tech',
      fieldOfStudy: 'Computer Science',
      startDate: '2019-08',
      endDate: '2023-05',
      gpa: '8.5/10',
      coursework: ['DSA', 'OS', 'DBMS'],
      honors: ['Top 10%']
    }
  ],
  projects: [
    {
      name: 'Project One',
      description: 'Short description.',
      highlights: ['Did something measurable'],
      stack: ['Astro', 'Tailwind'],
      image: '/images/projects/project1.png',
      url: 'https://example.com',
      repo: 'https://github.com/you/project-one'
    }
  ],
  publications: [
    { title: 'Post on Medium', outlet: 'medium', url: 'https://medium.com/@you/post', date: '2024-02-10' },
    { title: 'Article on LinkedIn', outlet: 'linkedin', url: 'https://linkedin.com/posts/...' }
  ],
  downloads: [
    { title: 'Resume', description: 'PDF', file: '/downloads/resume.pdf' },
    { title: 'Biodata', description: 'PDF', file: '/downloads/biodata.pdf' }
  ]
};

export default config;
