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

export type Experience = {
  company: string;
  role: string;
  team: string;
  type: string;
  dates: string;
  points: string[];
  tags: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Meta",
    role: "Full-Stack Software Engineer",
    team: "AI-Native Product Systems",
    type: "Full-time",
    dates: "May 2025 — Present",
    current: true,
    points: [
      "Ship improvements across backend services, internal REST APIs, and large-scale distributed systems powering AI-native product workflows in a high-ambiguity environment.",
      "Accelerated asynchronous service integrations, lowering end-to-end latency by 18% and improving responsiveness of product-facing experiences.",
      "Expanded monitoring, observability, and release validation — cutting debugging and root-cause analysis time by 35%.",
    ],
    tags: ["Distributed Systems", "REST APIs", "Observability", "AI-Native Products"],
  },
  {
    company: "NetApp",
    role: "Full-Stack Software Engineer",
    team: "Cloud and Distributed Product Systems",
    type: "Internship",
    dates: "Feb 2025 — Apr 2025",
    points: [
      "Implemented core backend components in Java and C++ for enterprise distributed storage workflows handling 10k+ records per cycle.",
      "Eliminated crash paths and contention hotspots in Unix/Linux services, reducing failure rates by 45% under sustained production load.",
    ],
    tags: ["Java", "C++", "Distributed Systems", "Linux"],
  },
  {
    company: "Viasat Global",
    role: "Full-Stack Software Engineer",
    team: "Secure Communications Product Systems",
    type: "Full-time",
    dates: "Jun 2024 — Dec 2024",
    points: [
      "Developed secure communication services with authenticated REST APIs and resilient client-server integrations — message delivery reliability up 37%.",
      "Cut ANRs by 52% through CPU/memory profiling, concurrency tuning, and removing blocking execution paths.",
      "Raised pre-release defect detection 33% with automated testing, diagnostics, and deployment validation.",
    ],
    tags: ["REST APIs", "Performance", "Testing", "Security"],
  },
  {
    company: "Cheeni Labs",
    role: "Full-Stack Software Engineer",
    team: "Zero-to-One Product Applications",
    type: "Full-time",
    dates: "Jun 2022 — Jul 2023",
    points: [
      "Launched consumer-facing Android features in Kotlin for a zero-to-one product: engagement +42%, message latency −34%.",
      "Designed notification workflows with Firebase Cloud Messaging and internal REST APIs at 97% delivery reliability.",
      "Shipped biometric auth and encrypted credential storage; raised test coverage to 88% and cut UI defects 32%.",
    ],
    tags: ["Kotlin", "Android", "Firebase", "REST APIs"],
  },
];

export type Project = {
  title: string;
  kind: string;
  dates: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
};

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
