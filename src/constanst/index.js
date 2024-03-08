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
  wordpress,
  mysql,
  apiweb,
  isasoul,
  efconsulting,
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
      title: "Dotnet Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: backend,
    },  
  {
    title: "Wordpress Developer" ,
    icon: creator,
  },
  {
    title: "maintenance and support",
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
    name: "Sales System Backend",
    description:
      "The sales system backend serves as the backbone of a comprehensive sales solution, managing the core functionalities required for efficient sales operations.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Asp Net Core 7.0",
        color: "green-text-gradient",
      },
      {
        name: "Sql Server",
        color: "pink-text-gradient",
      },
    ],
    image: apiweb,
    source_code_link: "https://github.com/isasoul?tab=repositories",
  },
  {
    name: "EF Consulting",
    description:
      "EF Consulting website provides a comprehensive range of services tailored specifically to the needs of the aviation industry, serving as a trusted advisor for airlines businesses.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: efconsulting,
    source_code_link: "https://github.com/isasoul?tab=repositories",
  },
  {
    name: "Isa Soul",
    description:
    "Isa's Soul website showcases the work of a soulful singer and songwriter. Here, you'll find all the information you need to know about Isa, including her latest releases, upcoming events, and more.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
    ],
    image: isasoul,
    source_code_link: "https://github.com/isasoul?tab=repositories",
  },

];

export {  services, technologies, experiences, testimonials, projects };