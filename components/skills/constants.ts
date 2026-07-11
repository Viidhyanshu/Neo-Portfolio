import type { SkillCategory } from "./types";

export const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const ACCENT_COLORS   = ["bg-cyan-400", "bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400"];
export const SUBTITLE_COLORS = ["bg-yellow-400", "bg-cyan-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-orange-400"];
export const SQUARE_COLORS   = ["bg-cyan-400", "bg-yellow-400", "bg-[#8b5cf6]", "bg-[#fa5b8d]", "bg-emerald-400"];

export const DOODLE_COLORS = [
  "text-[#fa5b8d]",
  "text-[#8b5cf6]",
  "text-yellow-500",
  "text-emerald-500",
  "text-orange-500",
  "text-blue-500",
];

export const DOODLE_DATA = [
  { type: "star", style: { top: "5%", left: "3%" }, rotate: "rotate-[12deg]" },
  { type: "plus", style: { top: "8%", left: "20%" }, rotate: "rotate-[-5deg]" },
  { type: "zigzag", style: { top: "25%", left: "2%" }, rotate: "rotate-[45deg]" },
  { type: "chevron", style: { bottom: "8%", left: "5%" }, rotate: "rotate-[90deg]" },
  { type: "x", style: { bottom: "3%", left: "18%" }, rotate: "rotate-[-20deg]" },
  { type: "spiral", style: { top: "6%", right: "22%" }, rotate: "rotate-[15deg]" },
  { type: "triangle", style: { top: "30%", right: "3%" }, rotate: "rotate-[35deg]" },
  { type: "star", style: { bottom: "6%", right: "15%" }, rotate: "rotate-[-10deg]" },
  { type: "plus", style: { bottom: "2%", right: "5%" }, rotate: "rotate-[25deg]" },
  { type: "circle", style: { top: "12%", left: "45%" }, rotate: "rotate-[0deg]" },
  { type: "star", style: { bottom: "12%", left: "30%" }, rotate: "rotate-[40deg]" },
  { type: "x", style: { bottom: "14%", right: "35%" }, rotate: "rotate-[-15deg]" },
  { type: "chevron", style: { top: "45%", left: "52%" }, rotate: "rotate-[-90deg]" },
  { type: "plus", style: { top: "16%", left: "10%" }, rotate: "rotate-[0deg]" },
  { type: "zigzag", style: { top: "65%", left: "45%" }, rotate: "rotate-[0deg]" },
  { type: "spiral", style: { top: "20%", right: "38%" }, rotate: "rotate-[0deg]" },
  { type: "circle", style: { bottom: "20%", right: "36%" }, rotate: "rotate-[0deg]" },
  { type: "chevron", style: { top: "4%", left: "35%" }, rotate: "rotate-[180deg]" },
  { type: "x", style: { top: "4%", right: "32%" }, rotate: "rotate-[45deg]" },
  { type: "star", style: { top: "50%", left: "1%" }, rotate: "rotate-[-30deg]" },
  { type: "plus", style: { top: "55%", right: "1%" }, rotate: "rotate-[10deg]" },
  { type: "zigzag", style: { bottom: "4%", left: "50%" }, rotate: "rotate-[-10deg]" },
  { type: "triangle", style: { bottom: "3%", left: "38%" }, rotate: "rotate-[75deg]" },
  { type: "chevron", style: { bottom: "3%", right: "28%" }, rotate: "rotate-[45deg]" },
];

export const CATEGORIES: SkillCategory[] = [
  {
    label: "Frontend",
    accent: "bg-cyan-400",
    skills: [
      { name: "HTML",        icon: `${DEVICON}/html5/html5-original.svg`,               accent: "bg-orange-400"  },
      { name: "CSS",         icon: `${DEVICON}/css3/css3-original.svg`,                 accent: "bg-blue-500"    },
      { name: "Tailwind",    icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,   accent: "bg-cyan-400"    },
      { name: "JavaScript",  icon: `${DEVICON}/javascript/javascript-original.svg`,     accent: "bg-yellow-400"  },
      { name: "TypeScript",  icon: `${DEVICON}/typescript/typescript-original.svg`,     accent: "bg-blue-600"    },
      { name: "React",       icon: `${DEVICON}/react/react-original.svg`,               accent: "bg-cyan-400"    },
      { name: "Next.js",     icon: `${DEVICON}/nextjs/nextjs-original.svg`,             accent: "bg-black"       },
      { name: "Sass",        icon: `${DEVICON}/sass/sass-original.svg`,                 accent: "bg-pink-400"    },
    ],
  },
  {
    label: "Backend",
    accent: "bg-emerald-400",
    skills: [
      { name: "Node.js",     icon: `${DEVICON}/nodejs/nodejs-original.svg`,             accent: "bg-green-600"   },
      { name: "Express.js",  icon: `${DEVICON}/express/express-original.svg`,           accent: "bg-gray-600"    },
      { name: "Spring Boot", icon: "/springboot-icon.svg",                               accent: "bg-green-500"   },
      { name: "GraphQL",     icon: `${DEVICON}/graphql/graphql-plain.svg`,               accent: "bg-pink-500"    },
      { name: "Firebase",    icon: `${DEVICON}/firebase/firebase-original.svg`,         accent: "bg-yellow-500"  },
      { name: "PostgreSQL",  icon: `${DEVICON}/postgresql/postgresql-original.svg`,     accent: "bg-blue-700"    },
      { name: "MongoDB",     icon: `${DEVICON}/mongodb/mongodb-original.svg`,           accent: "bg-green-500"   },
      { name: "Redis",       icon: `${DEVICON}/redis/redis-original.svg`,               accent: "bg-red-600"     },
    ],
  },
  {
    label: "Cloud / DevOps",
    accent: "bg-blue-400",
    skills: [
      { name: "AWS",         icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, accent: "bg-orange-400" },
      { name: "Docker",      icon: `${DEVICON}/docker/docker-original.svg`,             accent: "bg-blue-500"    },
      { name: "Kubernetes",  icon: `${DEVICON}/kubernetes/kubernetes-original.svg`,     accent: "bg-blue-500"    },
    ],
  },
  {
    label: "Languages",
    accent: "bg-yellow-400",
    skills: [
      { name: "C",           icon: `${DEVICON}/c/c-original.svg`,                       accent: "bg-blue-500"    },
      { name: "C++",         icon: `${DEVICON}/cplusplus/cplusplus-original.svg`,       accent: "bg-blue-600"    },
      { name: "Java",        icon: `${DEVICON}/java/java-original.svg`,                 accent: "bg-red-500"     },
      { name: "Rust",        icon: `${DEVICON}/rust/rust-original.svg`,                 accent: "bg-orange-600"  },
      { name: "Python",      icon: `${DEVICON}/python/python-original.svg`,             accent: "bg-yellow-400"  },
      { name: "Go",          icon: `${DEVICON}/go/go-original.svg`,                     accent: "bg-cyan-500"    },
    ],
  },
  {
    label: "Developer Tools",
    accent: "bg-[#8b5cf6]",
    skills: [
      { name: "Git",         icon: `${DEVICON}/git/git-original.svg`,                   accent: "bg-orange-500"  },
      { name: "GitHub",      icon: `${DEVICON}/github/github-original.svg`,             accent: "bg-gray-800"    },
      { name: "npm",         icon: `${DEVICON}/npm/npm-original-wordmark.svg`,           accent: "bg-red-500"     },
      { name: "Linux",       icon: `${DEVICON}/linux/linux-original.svg`,               accent: "bg-yellow-400"  },
      { name: "VS Code",     icon: `${DEVICON}/vscode/vscode-original.svg`,             accent: "bg-blue-500"    },
      { name: "Jasmine",     icon: `${DEVICON}/jasmine/jasmine-original.svg`,           accent: "bg-purple-600"  },
      { name: "Eclipse",     icon: `${DEVICON}/eclipse/eclipse-original.svg`,           accent: "bg-purple-700"  },
      { name: "Figma",       icon: `${DEVICON}/figma/figma-original.svg`,               accent: "bg-purple-500"  },
    ],
  },
];
