const {
  IconBrandLinkedin,
  
  IconBrandX,
  IconBrandGithub,
  
} = require("@tabler/icons-react");
import { Mail } from "lucide-react";

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
    href: "https://www.linkedin.com/in/salmanahmad18/",
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
  "Express",
  "MongoDB",
  "Docker",
  "Redis",
  "Mongoose",
  "OpenAI",
  "LangChain",
];

export const education = [
  {
    degree: "Master's of Computer Application",
    name: "Jamia Millia Islamia, New Delhi",
    image: "/jamia.png",
    link: "https://jmi.ac.in/",
  },
  {
    degree: "Bachelor's of Computer Application",
    name: "KMC Language University, Lucknow",
    image: "/KmcIcon.png",
    link: "https://kmclu.ac.in/",
  },
];


// projects.js


export const projects = [
  {
    title: "AI Course Generator ",
    logo: "/AIcourseIcon.png",
   
    description: "Custom Course crafted for your needs.",
    duration: "2024",
    info: `
      <ul class='custom-disc'>
       <li> Mobile app that generates personalized AI learning courses using Google Gemini AI </li>
       <li> Uses Firebasefor user authentication, data storage, and real-time updates.</li>
       <li> Offers course recommendations and progress tracking in a sleek React Native interface.</li>
       <li> Link : <a href="https://github.com/blacxtar/CourseGenerator" target='_blank'> https://github.com/blacxtar/CourseGenerator <a/> </li>
      </ul>
    `,
  },
  {
    title: "Full Stack Chat App",
    logo: "/chatappIcon.webp",
    
    description: "Real-time chat app with MERN stack & WebSockets",
    duration: "2024",
    info: `
      <ul class='custom-disc'>
        <li>Developed a responsive real-time chat app using MERN stack, Socket.IO, and TailwindCSS.</li>
        <li>Implemented private messaging, typing indicators, and online/offline status tracking.</li>
        <li>Deployed backend on Render and optimized WebSocket events for performance.</li>
        <li> Link : <a href="https://mern-chat-app-ix3z.onrender.com/" target='_blank'> https://mern-chat-app-ix3z.onrender.com/<a/> </li>
      </ul>
    `,
  },

  {
    title: "Personal Portfolio with RAG-based chatbot",
    logo: "/portfolioIcon.png",
    link:"https://salmannahmad.com",

    description: "Retrieval-Augmented Generation AI Assistant",
    duration: "2025",
    info: `
      <ul class='custom-disc'>
          <li>Modern and minimal portfolio showcasing your skills, projects.</li>
          <li> Uses Next.js frontend for a smooth UI/UX.</li>
          <li>Includes an embedded RAG-Based Chatbot feature.
          <li>Connects to OpenAI API for AI-powered conversational responses.</li>
          <li>Utilizes document embeddings and Pinecone vector database to provide relevant, contextual data.</li>
          <li> Link : <a href="https://salmannahmad.com" target='_blank'> https://salmannahmad.com <a/> </li>

      </ul>
    `,
  },

  {
    title: "Crypto Crash Game",
    logo: "/stockgame.png",
    link:"https://crypto-crash.netlify.app",
    description: "Interactive multiplayer crypto crash game",
    duration: "2025",
    info: `
      <ul class='custom-disc'>
        <li>Built a modern, gamified UI in React integrated with WebSocket-powered backend API.</li>
        <li>Implemented real-time game state updates, player leaderboard, and responsive design.</li>
        <li>Focused on smooth animations, low latency updates, and scalable event handling.</li>
        <li> Link : <a href="https://crypto-crash.netlify.app" target='_blank'> https://crypto-crash.netlify.app <a/> </li>

      </ul>
    `,
  },
  {
    title: "Browser Extension for Word Meaning Lookup",
    logo: "/dictionary.png",

    description: "Double click to find instant meaning",
    duration: "Ongoing",
    info: `
      <ul class='custom-disc'>
        <li>Chrome extension that lets users select a word on any webpage and get its meaning instantly.</li>
        <li>Uses Dictionary API definitions.</li>
        <li>Injects UI elements dynamically on pages.</li>
      </ul>
    `,
  },
];

