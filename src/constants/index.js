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
  dpwh,
  subway,
  coffeebean,
  tims,
  centennial,
  ncst,
  gov,
  santiago,
  wandersphere,
  netflix,
  messenger,
  wimtach, 
  adobe,
  mvp,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Team Member",
    company_name: "Tim Hortons - Concord, Ontario",
    icon: tims,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Work effectively as part of a team, communicating and collaborating with other staff members to ensure excellent.",
      "Pleasantly greeted customers and addressing their concerns",
      "Prepare and serve a variety of hot and cold beverages, including coffee, tea, and specialty drinks.",
      "Take customer orders and make recommendations based on their preferences.",
    ],
  },
  {
    title: "Team Member",
    company_name: "Subway Restaurant - Toronto, Ontario",
    icon: subway,
    iconBg: "#E6DEDD",
    date: "September 2022 - Decemeber 2022",
    points: [
      "Work effectively as part of a team, communicating and collaborating with other staff members to ensure excellent.",
      "Pleasantly greeted customers and addressing their concerns",
      "Prepare and serve a variety of hot and cold beverages, including coffee, tea, and specialty drinks.",
      "Take customer orders and make recommendations based on their preferences.",,
    ],
  },
  {
    title: "Engineering Coordinator",
    company_name: "Department of Public Works - Trece Martires, Philippines",
    icon: dpwh,
    iconBg: "#383E56",
    date: "August 2018 - September 2022",
    points: [
      "Preparation of administrative reports. Monitoring and conducting meeting schedule. Documentation and implementation of build plan.",
      "Testing quality construction materials for building highways, buildings, bridges, drainage system, and mountain slopes. ",
      "Inspection of on-site project and auditing resource allocations.",
      "Reports to section chief as part of secretarial duties.",
      "Creating quality assurance program. Coordinating documentation to various accredited testing centers for material quality assessment",
      "Documenting on- site progress. Issue documentation for contractors to get budget for projects. ",
      "Tracking documentation of all released project funds.",
      "Auditing project funds. ",
      "Collaborating and coordinating documents to other regional/district government branch",
      "Program support officer for project concerns. Testing unit officer: for various core materials (Asphalt) to build roads, highways, and infrastructures.",
      "Measuring strengths, density, flexibility and size of concretes use to maintain efficacy of public roads and highways, as well as for other government infrastructure building.",
      "Officer in charge of assessing strength and reinforcement of steelworks of infrastructure. Officer in charge of testing of plasticity of soils",

    ],
  },
  {
    title: "Barista",
    company_name: "Coffee Bean and Tea Leaf",
    icon: coffeebean,
    iconBg: "#E6DEDD",
    date: "June 2018 - September 2022",
    points: [
      "Provide exceptional customer service by greeting and assisting customers, taking orders, and recommending beverages based on their preferences.",
      "Prepare and serve a variety of hot and cold beverages, including coffee and espresso, tea, smoothies, and specialty",
      "Process cash, credit, and mobile payments accurately, and handle cash register operations while maintaining cash drawer integrity.",
      "Maintain a clean and organized work area, including equipment, counters, tables, and seating areas. Adhere to health and safety guidelines in food handling and sanitation.",
      " Effectively communicate with team members and collaborate efficient service and smooth operations during peak hours.",
    ],
  },
];

const educations = [
  {
    title: "Software Engineering Technician - Fast Track",
    school_name: "Centennial College - Progress, Scarborough, Ontario",
    icon: centennial,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Expected GPA: 3.5 ",
      ,
    ],
  },
  {
    title: "Bachelor of Science in Computer Engineering",
    school_name: "National College of Science and Technology - Dasmariñas City, Cavite, Philippines",
    icon: ncst,
    iconBg: "#E6DEDD",
    date: "August 2019 - September 2022",
    points: [
      "GPA: 3.5",
      
    ],
  },
  {
    title: "Computer Programming",
    school_name: "Governor Ferrer National School - General Trias City, Cavite, Philippines",
    icon: gov,
    iconBg: "#383E56",
    date: "June 2018 - May 2020",
    points: [
      "3.4",

    ],
  },
  {
    title: "Computer Hardware Servicing",
    school_name: "Santiago National HIgh School",
    icon: santiago,
    iconBg: "#E6DEDD",
    date: "June 2014 - May 2018",
    points: [
      "GPA: 3.3",
    ],
  },
];
  
const achievements = [
  {
    achievement:
      "WIMTACH - HACKATHON 1ST PLACE - Scarborough, Toronto, Canada",
      icon: wimtach,
  },
  {
    achievement:
      "ADOBE PHOTOSHOP 1ST PLACE - General Trias, Cavite, Philippines",
      icon: adobe,
  },
  {
    achievement:
      "MVP - SCHOOL BASKETBALL VARSITY - Dasmariñas, Cavite, Philippines",
      icon: mvp,
  },
];

const projects = [
  {
    name: "Wandersphere",
    description:
      "An efficient hotel booking app for hassle-free lodging reservations worldwide, with personalized recommendations.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient"
      },
      {
        name: "NextAuth",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      }
    ],
    image: wandersphere,
    source_code_link: "https://github.com/Danyeel12/wanderSphere",
    browser_code_link: "https://wander-sphere.vercel.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "A web streaming service resembling Netflix, with extensive content and personalized viewing options.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "NextAuth",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      }
    ],
    image: netflix,
    source_code_link: "https://github.com/Danyeel12/ytclone",
    browser_code_link: "https://netflixcloneee.onrender.com/",
  },
  {
    name: "Messenger",
    description:
      "A messenger app for real-time text and multimedia communication, emphasizing user privacy and seamless interactions",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient"
      },
      {
        name: "NextAuth",
        color: "pink-text-gradient",
      },
      {
        name: "Pusher",
        color: "blue-text-gradient",
      }
    ],
    image: messenger,
    source_code_link: "https://github.com/Danyeel12/Messenger",
    browser_code_link: "https://messengerapp-gray.vercel.app/",
  },
];

export { services, technologies, experiences, educations, achievements, projects };
