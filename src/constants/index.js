import {
  backend,
  web,
  mobile,
  coding,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  threejs,
  virtualvista,
  portfolio,
  gradup,
  haweli,
  cpp,
  next,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Coding Enthusiast",
    icon: coding,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "GradUp",
    icon: gradup,
    iconBg: "#383E56",
    date: "January 2024 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js, Next,js, Tailwind CSS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked on many small projects with GradUp's parent company Teksila Pvt. Ltd.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D_Portfolio",
    description:
      "Discover a captivating 3D portfolio experience, showcasing interactive designs and immersive visuals for a unique browsing journey.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "VirtualVista",
    description:
      "Experience seamless virtual meetings with instant, scheduled, and recorded sessions, including easy access to past meetings for streamlined collaboration.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "stream",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: virtualvista,
    source_code_link: "https://github.com/",
  },
  {
    name: "The Haweli Resort",
    description:
      "Explore my resort app for room availability, delectable menus, nearby attractions, and top-notch amenities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: haweli,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
