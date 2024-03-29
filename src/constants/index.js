import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  evonik,
  dh,
  tpearls,
  express,
  mySQL,
  firebase,
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
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "Fluent English",
    icon: mobile,
  },
  {
    title: "Quick Learner",
    icon: backend,
  },
  {
    title: "Modern Frameworks",
    icon: creator,
  },
];

const bio =
  "FullStack Developer with nearly two years of experience building projects with JavaScript and its frameworks such as Node JS, Express JS, and React JS. I am a problem solver, bringing fresh ideas and solutions to real-life challenges.";

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "My SQL",
    icon: mySQL,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "DIGITAL HOUSE SUMANTI",
    icon: dh,
    iconBg: "#383E56",
    date: "June 2022 - April 2023",
    points: [
      "Development of a FullStack e-commerce under the corporate agreement SUMANTI- Fondo Protección in the city of Medellín.",
      "Working with agile methods for quality products.",
      "While studying and training alongside a group of +30 students, Our team successfully completed and deployed the project.",
      " I graduated as one of the top-performing students in this agreement.",
    ],
  },
  {
    title: "Accounting Analyst",
    company_name: "Evonik",
    icon: evonik,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Current Position",
    points: [
      "AP process Leader for intercompany and in-country vendors payments.",
      "Cost Accounting Expert.",
      "Inventories & Fixed Assets analyst.",
    ],
  },
  {
    title: "Finance Executive",
    company_name: "TenPearls",
    icon: tpearls,
    iconBg: "#383E56",
    date: "May 2021 - Dec 2022",
    points: [
      "AP for in-country and offshore contracts and bills",
      "Accounting and local tax processes in the company",
      "Budgeting / Costing.",
      "Payroll and Benefits",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, bio };
