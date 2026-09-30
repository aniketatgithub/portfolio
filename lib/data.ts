export const profile = {
  name: "Aniket Tikariha",
  role: "Production Engineer",
  company: "Meta",
  location: "Sunnyvale, California",
  email: "aniketcse1@gmail.com",
  github: "https://github.com/aniketatgithub",
  linkedin: "https://www.linkedin.com/in/aniket-tikariha/",
  line: "I build backend systems that ship fast and stay up.",
  about:
    "Production Engineer at Meta. Previously NetApp, Viasat, Cheeni Labs. M.S. Software Engineering, SJSU '25. Ambiguous idea in, reliable system out.",
  facts: [
    { label: "Based", value: "Sunnyvale, CA" },
    { label: "Focus", value: "Backend · Distributed systems · AI products" },
    { label: "Status", value: "Open to SDE2 roles" },
  ],
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

export type Project = {
  title: string;
  kind: string;
  line: string;
  tags: string[];
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Rally",
    kind: "Side project",
    line: "Group plans without the chaos. Realtime chat, polls, RSVPs — live in production.",
    tags: ["Next.js", "Supabase", "PWA"],
    live: "https://rally-tau-blush.vercel.app",
    repo: "https://github.com/aniketatgithub/rally",
  },
  {
    title: "JobSync",
    kind: "Open source",
    line: "Save jobs from LinkedIn, Simplify, anywhere. Local-first — no accounts, no tracking.",
    tags: ["TypeScript", "Chrome"],
    repo: "https://github.com/aniketatgithub/jobsync",
  },
  {
    title: "AI Experimentation Studio",
    kind: "Academic",
    line: "Prototype AI features, A/B test them, ship. Validation time −41%.",
    tags: ["React", "Python", "LLMs"],
  },
  {
    title: "Customer Insights Workspace",
    kind: "Academic",
    line: "Product signals → actionable insights. Manual analysis −38%.",
    tags: ["React", "AWS", "Docker"],
  },
];

export const skills: { group: string; items: string }[] = [
  { group: "Languages", items: "TypeScript · Python · C++ · Kotlin · Java · Swift · C" },
  { group: "Backend", items: "REST APIs · Microservices · Distributed systems · System design" },
  { group: "AI", items: "LLM features · AI integration · Semantic search · Prototyping" },
  { group: "Cloud", items: "AWS · Azure · Kubernetes · Docker · CI/CD" },
  { group: "Data", items: "PostgreSQL · SQL · NoSQL · Query optimization" },
  { group: "Craft", items: "Reliability · Observability · Performance · Testing" },
];

export const education = [
  {
    school: "San José State University",
    degree: "M.S. Software Engineering — 2025",
    place: "San Jose, CA",
  },
  {
    school: "GITAM Deemed University",
    degree: "B.E. Computer Science — 2022",
    place: "Visakhapatnam, India",
  },
];

export const publications = [
  {
    title: "A Review on Machine Learning Tools and Techniques",
    meta: "IJRASET · 2022",
  },
  {
    title: "Automatic Pulmonary Nodule Detection in CT Scans",
    meta: "IRJET · 2022",
  },
];

export const marqueeItems = [
  "Backend systems",
  "Distributed",
  "AI-native",
  "REST APIs",
  "Observability",
  "Reliability",
];
