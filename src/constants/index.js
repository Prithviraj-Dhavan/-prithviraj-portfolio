import {
  mobile, backend, creator, web,
  javascript, typescript, reactjs, tailwind, nodejs, mongodb, git, docker,
  cplusplus, express, nextjs, sql, threejs,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "MERN Developer", icon: web },
  { title: "AI Integration Engineer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Problem Solver : DSA", icon: creator },
];

const technologies = [
  { name: "C++", icon: cplusplus },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "MongoDB", icon: mongodb },
  { name: "SQL", icon: sql },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Softron",
    icon: web,
    iconBg: "#383E56",
    date: "November 2025 – February 2026",
    points: [
      "Developed a full-featured MERN stack E-commerce platform supporting 3 user roles, with an admin panel enabling real-time product, user, and order management.",
      "Built and optimized RESTful APIs using Node.js & Express.js that handled 1000+ concurrent requests/sec, achieving 30% faster response time.",
      "Reduced critical bugs by 40% through extensive debugging and accelerated user satisfaction by 25% via refined code and testing.",
    ],
  },
];

const extracurriculars = [
  {
    title: "SSB Interview",
    subtitle: "National Defence Academy",
    date: "Multiple Attempts",
    icon: "⚔️",
    iconBg: "#1a1a3e",
    points: [
      "Cleared the SSB (Services Selection Board) Interview 5 times, demonstrating exceptional leadership, psychological resilience, and group task performance.",
      "Qualified for the National Defence Academy (NDA), one of India's most prestigious and competitive military entrance processes.",
      "Developed strong communication, decision-making, and team coordination skills through the rigorous multi-day selection process.",
    ],
  },
  {
    title: "Smart India Hackathon",
    subtitle: "Government of India",
    date: "2024 & 2025",
    icon: "🏆",
    iconBg: "#1a3e1a",
    points: [
      "Participated twice in Smart India Hackathon (SIH), India's largest national-level hackathon organized by the Government of India.",
      "Collaborated with cross-functional teams to build innovative tech solutions addressing real-world government and social challenges.",
      "Developed problem-solving, rapid prototyping, and teamwork skills under 36-hour hackathon conditions.",
    ],
  },
  {
    title: "Google Gen AI Study Jam",
    subtitle: "@Google",
    date: "2024",
    icon: "🏅",
    iconBg: "#3e1a1a",
    points: [
      "Earned 15+ badges in Generative AI through Google's official structured learning program covering LLMs, Gemini, and AI fundamentals.",
      "Completed hands-on labs and quests on Google Cloud Skills Boost platform, gaining practical AI/ML implementation experience.",
      "Applied Gen AI knowledge to real projects including the Neuro-Fit AI fitness trainer built with Gemini LLM.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Neuro-Fit AI",
    description:
      "Full-stack AI Fitness Trainer that generates personalized workout and diet plans using voice AI interaction and LLM-based recommendations. Integrated Convex database, Gemini LLM, and Clerk authentication.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Gemini AI", color: "green-text-gradient" },
      { name: "Convex", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/360x230/1d1836/ffffff?text=Neuro-Fit+AI",
    source_code_link: "https://github.com/Prithviraj-Dhavan/Neuro-Fit-AI",
  },
  {
    name: "Job Alert Bot",
    description:
      "Full-stack Job Alert Automation platform that processes resumes and preferences to fetch 1,000+ real-time job opportunities with automated email notifications on daily, weekly, and custom schedules.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "REST APIs", color: "green-text-gradient" },
      { name: "Email Automation", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/360x230/1d1836/ffffff?text=Job+Alert+Bot",
    source_code_link: "https://github.com/Prithviraj-Dhavan/job-alert-bot",
  },
  {
    name: "Wall Calendar",
    description:
      "Responsive web-based Wall Calendar with dynamic date rendering, month/year navigation, and real-time date highlighting. Built with reusable React components and efficient state management.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: "https://placehold.co/360x230/1d1836/ffffff?text=Wall+Calendar",
    source_code_link: "https://github.com/Prithviraj-Dhavan/wall-calendar",
  },
];

export { services, technologies, experiences, extracurriculars, testimonials, projects };
