export const site = {
  name: "Dnyaneshwar Arun Gaikwad",
  shortName: "Dnyaneshwar Gaikwad",
  initials: "DG",
  role: "Frontend Developer",
  alternativeRoles: ["React & Next.js Developer", "Full-Stack Enthusiast", "Programmer", "Lifelong Learner"],
  location: "India",
  email: "dnyaneshg121@gmail.com",
  resume: "/Dnyaneshwar_Gaikwad_Resume.pdf",
  github: "https://github.com/dnyanesh121",
  linkedin: "https://www.linkedin.com/in/dnyaneshwar-gaikwad-3a664021a/",
  url: "https://symphonious-lokum-3a18d6.netlify.app/",
  description:
    "Portfolio of Dnyaneshwar Arun Gaikwad — a frontend developer building fast, accessible and beautiful web experiences with React, Next.js and TypeScript.",
} as const;

export const about = {
  eyebrow: "About me",
  title: "I build digital experiences that feel effortless.",
  paragraphs: [
    "Hi, I'm Dnyaneshwar — a passionate programmer and coach, born and brought up in India. I work as a Front End Developer with React.js and Next.js as my core tech stack.",
    "In 2022 I completed my M.Sc. with a specialization in Computer Science. Since then I've been turning complex ideas into clean, scalable and delightful interfaces.",
    "Working with clients, my goal is always to deliver an amazing experience backed by the best level of quality and service. I also mentor people on their journey to becoming professional programmers.",
    "I love learning about new technologies, the problems they solve, and how I can use them to build better products.",
  ],
  stats: [
    { value: "4", label: "Projects shipped" },
    { value: "2022", label: "M.Sc. Computer Science" },
    { value: "10+", label: "Technologies" },
    { value: "∞", label: "Curiosity" },
  ],
} as const;

export type SkillGroup = {
  title: string;
  icon: "code" | "server" | "cloud" | "tool";
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 84 },
      { name: "JavaScript", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 86 },
      { name: "Bootstrap", level: 88 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    title: "Backend & Data",
    icon: "server",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "MS SQL", level: 72 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "Deployment & Tools",
    icon: "cloud",
    skills: [
      { name: "Vercel", level: 84 },
      { name: "Netlify", level: 88 },
      { name: "Git & GitHub", level: 90 },
      { name: "Heroku", level: 76 },
      { name: "GitHub Pages", level: 82 },
    ],
  },
];

export const techMarquee = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Vercel",
  "Netlify",
  "Git & GitHub",
];

export type Project = {
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  live: string;
  github?: string;
  image: string;
  accent: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "DhartiGrain",
    category: "Main project · Marketplace",
    description:
      "A farm-to-fork marketplace that connects Indian farmers directly with buyers. Verified sellers, evidence-reviewed organic claims, clear price-per-kg, a smooth cart and checkout, seller onboarding and an admin review dashboard — with a multilingual interface.",
    features: [
      "Verified farmer onboarding",
      "Evidence-reviewed organic claims",
      "Transparent price per kg",
      "Cart, orders & checkout",
      "Seller + admin dashboards",
      "Multilingual (i18n) UI",
    ],
    tech: ["React", "TypeScript", "Vite", "Framer Motion", "Netlify"],
    live: "https://dharti-grain.netlify.app/",
    image: "/images/dharti-grain.webp",
    accent: "from-emerald-400/25 to-lime-500/5",
    featured: true,
  },
  {
    title: "First Advisors — Loans",
    category: "React web app",
    description:
      "A complete React rebuild of the First Advisors loans site. Compare personal, home, car, education and business loans from partner banks and NBFCs with transparent charges, calculators and a quick-apply flow.",
    features: [
      "16 loan products",
      "EMI & eligibility calculators",
      "Rates and charges breakdown",
      "Quick apply & tracking",
      "Mega-menu navigation",
    ],
    tech: ["React", "Vite", "React Router", "Framer Motion", "CSS3"],
    live: "https://first-advisor-loans.netlify.app/",
    github: "https://github.com/dnyanesh121/first-advisor-loans",
    image: "/images/first-advisor-loans.webp",
    accent: "from-sky-400/25 to-blue-600/5",
  },
  {
    title: "First Advisors — Real Estate",
    category: "React web app",
    description:
      "A property marketplace for buying, selling, leasing and investing across Mumbai, Thane, Navi Mumbai and Pune, with powerful search, property comparison, galleries, agent details and visit scheduling.",
    features: [
      "Property search & filters",
      "Compare properties",
      "Photo lightbox gallery",
      "Schedule site visits",
      "Enquiry forms & agent cards",
    ],
    tech: ["React", "Vite", "React Router", "Framer Motion", "CSS3"],
    live: "https://first-advisor-real-estate.netlify.app/",
    github: "https://github.com/dnyanesh121/first-advisor-real-estate",
    image: "/images/first-advisor-real-estate.webp",
    accent: "from-amber-400/25 to-orange-600/5",
  },
  {
    title: "First Advisors — Mutual Funds",
    category: "React web app",
    description:
      "A mutual-fund discovery and planning platform. Explore equity, debt, hybrid and index funds, study NAV charts and returns, compare funds, build a watchlist and plan SIP goals starting from ₹100.",
    features: [
      "Fund explorer & filters",
      "NAV charts & returns calculator",
      "Compare funds & watchlist",
      "SIP goal calculator",
      "AMC directory & learn hub",
    ],
    tech: ["React", "Vite", "React Router", "Framer Motion", "CSS3"],
    live: "https://first-advisor-mutual-fund.netlify.app/",
    github: "https://github.com/dnyanesh121/first-advisor-mutual-fund",
    image: "/images/first-advisor-mutual-fund.webp",
    accent: "from-violet-400/25 to-fuchsia-600/5",
  },
];

export const timeline = [
  {
    period: "2022 — Present",
    title: "Frontend Developer & Coach",
    place: "Freelance / Self-driven",
    description:
      "Building responsive web applications with React, Next.js and TypeScript, while mentoring aspiring developers and working with clients on quality-driven digital products.",
  },
  {
    period: "2022",
    title: "M.Sc. in Computer Science",
    place: "University",
    description:
      "Completed postgraduate studies with a specialization in Computer Science, strengthening foundations in software engineering, databases and web technologies.",
  },
  {
    period: "Earlier",
    title: "Programming Journey",
    place: "India",
    description:
      "Started as a passionate learner, exploring HTML, CSS, JavaScript and Java — and never stopped building, breaking and rebuilding things on the web.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];
