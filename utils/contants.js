const {
  IconBrandLinkedin,
  
  IconBrandX,
  IconBrandGithub,
  
} = require("@tabler/icons-react");
import { Mail } from "lucide-react";
import jamia from "../public/jamia.png";
import kmc from "../public/kmc.png";
export const links = [
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/blacxtar",
  },
  
  {
    title: "Email",
    icon: (
      <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:salmanmohammad399@gmail.com",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://linkedin.com/salmanahmad18",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  }
  
];

export const words = [
  {
    text: "Hey",
    className: " text-lg",
  },
  {
    text: "I'm",
    className: " text-lg",
  },
  {
    text: "Salman",
    className: " text-lg text-blue-500",
  },
  {
    text: "Ahmad",
    className: " text-lg text-blue-500",
  },
];

export const tech = [
  "Javascript",
  "Reactjs",
  "Nextjs",
  "TailwindCss",
  "Nodejs",
  "MongoDB",
  "Express.js",
  "Mongoose",
  "OpenAI",
  "LangChain",
];

export const education = [
  {
    degree: "Master's of Computer Application",
    name: "Jamia Millia Islamia, New Delhi",
    image: jamia,
    link: "",
  },
  {
    degree: "Bachelor's of Computer Application",
    name: "KMC Language University, Lucknow",
    image: kmc,
    link: "",
  },
];

// projects.js

export const projects = [
  {
    title: "Full Stack Chat App",

    description: "Real-time chat app with MERN stack & WebSockets",
    duration: "2024",
    info: `
      <ul class='custom-disc'>
        <li>Developed a responsive real-time chat app using MERN stack, Socket.IO, and TailwindCSS.</li>
        <li>Implemented private messaging, typing indicators, and online/offline status tracking.</li>
        <li>Deployed backend on Render and optimized WebSocket events for performance.</li>
      </ul>
    `,
  },

  {
    title: "AI Chatbot with RAG",

    description: "Retrieval-Augmented Generation AI Assistant",
    duration: "2025",
    info: `
      <ul class='custom-disc'>
        <li>Built an AI chatbot using OpenAI, LangChain, and LangGraph for contextual responses.</li>
        <li>Integrated Pinecone for vector search and document retrieval.</li>
        <li>Designed chat UI in React with Markdown rendering and code highlighting.</li>
      </ul>
    `,
  },
  {
    title: "Crypto Crash Game",

    description: "Interactive multiplayer crypto crash game",
    duration: "2025",
    info: `
      <ul class='custom-disc'>
        <li>Built a modern, gamified UI in React integrated with WebSocket-powered backend API.</li>
        <li>Implemented real-time game state updates, player leaderboard, and responsive design.</li>
        <li>Focused on smooth animations, low latency updates, and scalable event handling.</li>
      </ul>
    `,
  },
  {
    title: "Portfolio Website",

    description: "Personal portfolio showcasing projects & skills",
    duration: "Ongoing",
    info: `
      <ul class='custom-disc'>
        <li>Developed a responsive portfolio using Next.js, TailwindCSS, and Framer Motion.</li>
        <li>Integrated animations, smooth scrolling, and reusable components.</li>
        <li>Showcases professional projects, skills, and experience.</li>
      </ul>
    `,
  },
];
