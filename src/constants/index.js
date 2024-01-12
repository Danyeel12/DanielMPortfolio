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
  internship,
  tims,
  freelance,
  centennial,
  ncst,
  gov,
  santiago,
  wandersphere,
  ontario,
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
    title: "UI/UX Designer",
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
    title: "Freelancer",
    company_name: "Self Employed - Toronto, Ontario",
    icon: freelance,
    iconBg: "#383E56",
    date: "August 2021 - Present",
    points: [
      "As a freelance software developer, I specialize in delivering custom software solutions across various industries. My expertise lies in Java, C#, and web development technologies. I manage all aspects of the software development lifecycle, from initial consultation and design to development, testing, and support. Renowned for delivering projects on time, I ensure each solution is tailored to meet client needs, emphasizing quality, efficiency, and user-friendly design..",
    ],
  },
  {
    title: "Team Member",
    company_name: "Tim Hortons - Concord, Ontario",
    icon: tims,
    iconBg: "#383E56",
    date: "October 2023 - Present",
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
    title: "Software Developer",
    company_name: "Department of Public Works -  Philippines",
    icon: dpwh,
    iconBg: "#383E56",
    date: "August 2020 - September 2022",
    points: [
      "Collaborated with cross-functional teams to design, develop, and maintain software solutions that enhance the efficiency and effectiveness of DPWH's civil engineering projects.",
      "Provided technical support to DPWH staff, addressing software-related issues and ensuring smooth operation of critical systems ",
      "Led the design, development, and maintenance of full-stack software applications that addressed critical needs within the department",
      "Designed intuitive user interfaces and user experiences (UI/UX) to ensure ease of use for non-technical staff.",
      "Developed and maintained APIs to facilitate data exchange and integration with external systems and databases.",
      "Embraced Agile methodologies, such as Scrum or Kanban, to manage software development projects efficiently ",
      "Participated in sprint planning, daily stand-ups, and retrospectives to ensure project milestones were met",

    ],
  },
  {
    title: "Software Developer - Internship",
    company_name: "Department of Public Works -  Philippines",
    icon: internship,
    iconBg: "#E6DEDD",
    date: "June 2018 - September 2022",
    points: [
      "Collaborated with senior frontend developers and UX designers to create visually appealing and user-friendly web interfaces for software applications used by DPWH staff.",
      "Gained proficiency in writing clean, semantic HTML and CSS code to implement frontend designs.",
      "Gained exposure to JavaScript programming to enhance website interactivity and functionality.",
    ],
  },
];

const educations = [
  {
    title: "Diploma of Software Engineering - Fast Track",
    school_name: "Centennial College - Progress, Scarborough, Ontario",
    icon: centennial,
    iconBg: "#383E56",
    date: "September 2022 - December 2023",
    points: [
      "GPA: 3.5 ",
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
      "GPA: 3.6",
      
    ],
  },
  {
    title: "TVL - Computer Programming IV",
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
    name: "Premier of Ontario",
    description:
      "Explore Ontario's political legacy with our 'Ontario Premier List.' This user-friendly C# GUI app provides an organized list of all past and present Premiers.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "GUI",
        color: "green-text-gradient",
      },
      {
        name: "Windows Form",
        color: "pink-text-gradient",
      },
    
    ],
    image: ontario,
    source_code_link: "https://github.com/Danyeel12/PremierGui.git",
    
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
