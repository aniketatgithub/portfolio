export const profile = {
  name: "Aniket Tikariha",
  role: "Production Engineer",
  company: "Meta",
  location: "Sunnyvale, California",
  email: "aniketcse1@gmail.com",
  github: "https://github.com/aniketatgithub",
  linkedin: "https://www.linkedin.com/in/aniket-tikariha/",
  tagline:
    "I build AI-native product systems — backend services, distributed systems, and internal APIs that ship fast and stay reliable.",
  about: [
    "I'm a Production Engineer at Meta, where I work on AI-native product systems: backend services, internal REST APIs, and the large-scale distributed systems behind them.",
    "Before Meta, I built secure communications systems at Viasat, storage infrastructure at NetApp, and zero-to-one consumer Android apps at Cheeni Labs. I hold an M.S. in Software Engineering from San José State University.",
    "I care about end-to-end ownership — ambiguous idea in, reliable production system out — with the observability to prove it.",
  ],
  facts: [
    { label: "Current", value: "Production Engineer @ Meta" },
    { label: "Location", value: "Sunnyvale, CA" },
    { label: "Education", value: "M.S. Software Engineering, SJSU '25" },
    { label: "Focus", value: "AI-native systems · Backend · Distributed systems" },
  ],
};


export type Project = {
  title: string;
  kind: string;
  dates: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
};

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  type: string;
  line: string;
  metrics: Metric[];
  tags: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Meta",
    role: "Production Engineer",
    dates: "May 2025 — Now",
    type: "Full-time",
    current: true,
    line: "I ship backend services, internal REST APIs, and distributed systems for AI-native product workflows.",
    metrics: [
      { value: 18, prefix: "−", suffix: "%", label: "end-to-end latency on async service integrations" },
      { value: 35, prefix: "−", suffix: "%", label: "debugging time via deeper observability" },
    ],
    tags: ["Distributed Systems", "REST APIs", "Observability"],
  },
  {
    company: "NetApp",
    role: "Software Engineer Intern",
    dates: "Feb — Apr 2025",
    type: "Internship",
    line: "I built core backend components in Java and C++ for distributed storage that hold up under load.",
    metrics: [
      { value: 45, prefix: "−", suffix: "%", label: "failure rate under sustained production load" },
      { value: 10, suffix: "k+", label: "records per cycle on storage workflows" },
    ],
    tags: ["Java", "C++", "Linux"],
  },
  {
    company: "Viasat",
    role: "Software Engineer",
    dates: "Jun — Dec 2024",
    type: "Full-time",
    line: "I built secure communication services — then made them fast.",
    metrics: [
      { value: 37, prefix: "+", suffix: "%", label: "message delivery reliability" },
      { value: 52, prefix: "−", suffix: "%", label: "ANRs via CPU/memory profiling" },
    ],
    tags: ["REST APIs", "Performance", "Security"],
  },
  {
    company: "Cheeni Labs",
    role: "Software Engineer",
    dates: "2022 — 2023",
    type: "Full-time",
    line: "I shipped a zero-to-one Android app in Kotlin that people actually used.",
    metrics: [
      { value: 42, prefix: "+", suffix: "%", label: "engagement on zero-to-one Android" },
      { value: 34, prefix: "−", suffix: "%", label: "message latency" },
    ],
    tags: ["Kotlin", "Android", "Firebase"],
  },
];

export const projects: Project[] = [
  {
    title: "Rally",
    kind: "Side project · Live",
    dates: "2026",
    description:
      "Group event coordination app — realtime chat, polls, and RSVPs with an offline-first PWA engine. Live in production.",
    tags: ["Next.js", "Supabase", "PWA", "Realtime"],
    live: "https://rally-tau-blush.vercel.app",
    repo: "https://github.com/aniketatgithub/rally",
  },
  {
    title: "JobSync",
    kind: "Open source",
    dates: "2026",
    description:
      "Chrome extension that saves jobs from LinkedIn, Simplify, and careers pages into a local tracker with statuses and CSV export. No accounts, no tracking.",
    tags: ["TypeScript", "Chrome Extensions", "Web Scraping"],
    repo: "https://github.com/aniketatgithub/jobsync",
  },
  {
    title: "AI Feature Experimentation Studio",
    kind: "Academic",
    dates: "Jan 2025 — May 2025",
    description:
      "AI-native full-stack app to rapidly prototype customer-facing workflows, run A/B tests, and capture structured feedback — cutting feature validation time 41%. Integrated LLM features, prompt versioning, and REST evaluation pipelines.",
    tags: ["React", "TypeScript", "Python", "LLMs"],
  },
  {
    title: "AI-Powered Customer Insights Workspace",
    kind: "Academic",
    dates: "Aug 2024 — Dec 2024",
    description:
      "Scalable full-stack app analyzing product usage signals into actionable insights — manual analysis time down 38%. Microservices on AWS with Docker for low-latency AI workflows.",
    tags: ["React", "TypeScript", "Python", "SQL", "AWS", "Docker"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "C++", "C", "Kotlin", "Swift", "Java"],
  },
  {
    group: "Backend",
    items: ["REST API Design", "Microservices", "Distributed Systems", "System Design", "High Availability"],
  },
  {
    group: "AI",
    items: ["Generative AI", "AI Integration", "LLM Features", "Semantic Search", "Rapid Prototyping"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Azure", "Kubernetes", "Docker", "CI/CD"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "SQL", "NoSQL", "Query Optimization", "Indexing"],
  },
  {
    group: "Engineering",
    items: ["Reliability", "Observability", "Monitoring", "Performance", "Testing", "Code Reviews"],
  },
];

export const education = [
  {
    school: "San José State University",
    degree: "M.S. Software Engineering",
    dates: "Aug 2023 — May 2025",
    location: "San Jose, CA",
  },
  {
    school: "GITAM Deemed University",
    degree: "B.E. Computer Science",
    dates: "Aug 2018 — May 2022",
    location: "Visakhapatnam, India",
  },
];

export const publications = [
  {
    title: "A Review on Machine Learning Tools and Techniques",
    venue: "IJRASET",
    dates: "Jun 2022",
    description:
      "Survey of key machine learning tools for modeling, visualization, and problem-solving.",
  },
  {
    title: "Automatic Pulmonary Nodule Detection in CT Scans",
    venue: "IRJET",
    dates: "Apr 2022",
    description:
      "CNN-based deep learning model for lung nodule detection, handling data diversity and imbalance.",
  },
];

export const marqueeItems = [
  "Distributed Systems",
  "REST APIs",
  "TypeScript",
  "Python",
  "React",
  "AI-Native Products",
  "Observability",
  "Kubernetes",
  "PostgreSQL",
  "System Design",
  "LLM Features",
  "CI/CD",
];
