import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
 

  logoColor,
  JoinSolutions,
  carrent,
  jobit,
  tripguide,
  threejs,
  csharp,
  dotnet,
  sqlserver,
  wordpress,
  mysql,
  bootstrap,
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
    title: ".Net Developer" ,
    icon: creator,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
 
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Dotnet",
    icon: dotnet,
  },
  {
    name: "Wordpress",
    icon: wordpress,
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
    name: "React JS",
    icon: reactjs,
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
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "MySQL",
    icon: mysql,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: logoColor,
    iconBg: "#383E56",
    date: "March 2021 - Present",
    points: [
      "Developing and maintaining  web applications using React, Javascript, Html, CSS, Boostrap, Sass, WordPress and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Utilizing best practices in web development and adhering to industry standards to ensure robust and scalable web solutions.",
      "Optimizing web applications for performance and speed, employing techniques such as code minification and image optimization.",
      "Integrating third-party APIs and services to enhance functionality and user experience.",
      "Troubleshooting and debugging issues to maintain the stability and reliability of web applications.",
      "Staying abreast of emerging technologies and trends in web development, and incorporating them into projects when appropriate.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Join Solutions",
    icon: JoinSolutions,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [

      "Developing and maintaining backend applications using .Net and other related technologies.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Implementing migrations to the newest versions of .Net.",
      "Maintaining the invoicing system for an insurance company built in Windows Forms",
      "Participating in code reviews and providing constructive feedback to other developers.",
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

export {  services, technologies, experiences, testimonials, projects };