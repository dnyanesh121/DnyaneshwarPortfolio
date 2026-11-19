export const site = {
  name: "Dnyaneshwar Arun Gaikwad",
  shortName: "Dnyaneshwar Gaikwad",
  initials: "DG",
  role: "Frontend Developer",
  alternativeRoles: ["React & Next.js Developer", "Full-Stack Enthusiast", "Programmer", "Lifelong Learner"],
  location: "India",
  email: "dnyaneshg121@gmail.com",
  resume:
    "https://drive.google.com/file/d/1T1D9HSRyerSTDNlIJSsbZhktcTbbKrbG/view?usp=sharing",
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
    { value: "4+", label: "Projects shipped" },
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
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Know Your Restaurant",
    category: "Full-stack web app",
    description:
      "A React application that fetches and displays restaurant data from a public API. Users can search for restaurants and recipes, register, sign in and explore real-time data.",
    features: ["Search restaurants & recipes", "User register / sign in", "Real-time API calls", "Responsive UI"],
    tech: ["React", "Redux", "Bootstrap", "HTML5", "CSS3"],
    live: "https://know-your-restaurants.netlify.app/",
    image: "/images/know-your-restaurant.webp",
    accent: "from-teal-400/25 to-emerald-500/5",
  },
  {
    title: "COVID-19 Tracker",
    category: "Data dashboard",
    description:
      "A responsive dashboard built with the corona database API. Track COVID-19 statistics country by country with live data and a clean, readable interface.",
    features: ["Country-wise tracking", "Real-time API calls", "Fully responsive", "Data visualisation"],
    tech: ["React", "Redux", "Bootstrap", "HTML5", "CSS3"],
    live: "https://swati-covid-19-app.netlify.app/",
    image: "/images/covid-tracker.webp",
    accent: "from-sky-400/25 to-blue-600/5",
  },
  {
    title: "GitHub Jobs",
    category: "Search platform",
    description:
      "A job discovery portal powered by the GitHub Jobs API. Search developer roles and browse results fetched live, with a fast and focused user experience.",
    features: ["Search jobs", "Live API results", "Responsive layout", "Clean job cards"],
    tech: ["React", "Redux", "Bootstrap", "HTML5", "CSS3"],
    live: "https://swati-githubjobsportal.netlify.app/",
    image: "/images/github-jobs.webp",
    accent: "from-violet-400/25 to-fuchsia-600/5",
  },
  {
    title: "All Countries Info",
    category: "API explorer",
    description:
      "A JavaScript application that pulls data from a public countries API and lets users search and explore information about any country in the world.",
    features: ["Search any country", "Real-time API calls", "Detailed country data", "Mobile friendly"],
    tech: ["JavaScript", "Bootstrap", "HTML5", "CSS3"],
    live: "https://swati-allcountryinformation.netlify.app/",
    image: "/images/all-countries.webp",
    accent: "from-amber-400/25 to-orange-600/5",
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
