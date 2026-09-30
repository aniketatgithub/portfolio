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

export type Experience = {
  company: string;
  role: string;
  dates: string;
  type: string;
  summary: string;
  points: string[];
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
    summary: "AI-native product systems. Async integrations, −18% latency.",
    points: [
      "Accelerated asynchronous service integrations — end-to-end latency down 18%.",
      "Expanded monitoring and release validation — debugging time down 35%.",
    ],
    tags: ["Distributed Systems", "REST APIs", "Observability"],
  },
  {
    company: "NetApp",
    role: "Software Engineer Intern",
    dates: "Feb — Apr 2025",
    type: "Internship",
    summary: "Distributed storage backend. Failure rate −45%.",
    points: [
      "Backend components in Java and C++ for storage workflows, 10k+ records per cycle.",
      "Killed crash paths and contention hotspots — failure rate down 45% under load.",
    ],
    tags: ["Java", "C++", "Linux"],
  },
  {
    company: "Viasat",
    role: "Software Engineer",
    dates: "Jun — Dec 2024",
    type: "Full-time",
    summary: "Secure comms. ANRs −52%, delivery reliability +37%.",
    points: [
      "Secure communication services with authenticated REST APIs — delivery reliability up 37%.",
      "CPU/memory profiling and concurrency tuning — ANRs down 52%.",
    ],
    tags: ["REST APIs", "Performance", "Security"],
  },
  {
    company: "Cheeni Labs",
    role: "Software Engineer",
    dates: "2022 — 2023",
    type: "Full-time",
    summary: "Zero-to-one Android. Engagement +42%, latency −34%.",
    points: [
      "Consumer Android features in Kotlin for a zero-to-one product — engagement up 42%, message latency down 34%.",
      "Biometric auth, encrypted credentials, FCM notifications at 97% delivery reliability.",
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
