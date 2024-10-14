//hobbies imports
import gym from "../app/public/home/gym.jpg";
import bike from "../app/public/home/bike ride.jpg";
import cooking from "../app/public/home/cooking.jpg";
import hiking from "../app/public/home/hiking.jpg";
import coding from "../app/public/home/coding.jpg";

//icons imports
import { FaInstagram, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

//projects imports
import ionarcThumbnail1 from "../app/public/home/ionarc thumbnail.png";
import ionarcThumbnail2 from "../app/public/home/ionarc thumbnail_2.png";
import ionarcThumbnail3 from "../app/public/home/ionarc thumbnail_3.png";
import thumb from "../app/public/home/bike ride.jpg";
export const socialLinks = [
  {
    name: "Linkedin",
    icon: <FaLinkedin className="w-[30px] h-[30px] text-white" />,
    link: "https://www.linkedin.com/in/adnanshaik179",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="w-[30px] h-[30px] text-white" />,
    link: "https://www.instagram.com/_adnan179",
  },
  {
    name: "Github",
    icon: <FaGithub className="w-[30px] h-[30px] text-white" />,
    link: "https://www.github.com/adnan179",
  },
  {
    name: "Dribbble",
    icon: <FaDribbble className="w-[30px] h-[30px] text-white" />,
    link: "https://www.dribbble.com/adnan179",
  },
  {
    name: "Gmail",
    icon: <MdOutlineMail className="w-[30px] h-[30px] text-white" />,
    gmail: "adnanshaik179@gmail.com",
  },
];

export const hobbies = [
  {
    name: "Gym",
    img: gym,
  },
  {
    name: "Riding",
    img: bike,
  },
  {
    name: "Coding",
    img: coding,
  },
  {
    name: "Cooking",
    img: cooking,
  },
  {
    name: "Hiking",
    img: hiking,
  },
];

export const degreeAndDeeds = [
  {
    name: "Student at GITAM university, Bangalore",
    period: "Aug 2020 - Apr 2024",
  },
  {
    name: "Quality Assurance Intern at Reverr",
    period: "Jul 2023 - Nov 2023",
  },
  {
    name: "UI/UX designer at GITAM’s github community",
    period: "Nov 2023 - Apr 2024",
  },
  {
    name: "Freelancing with eyes open for exciting roles",
    period: "Present",
  },
];

export const skills = [
  {
    skillSet: "Front-end",
    skills: [
      "React",
      "Next.JS",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS",
      "GSAP",
      "Three JS",
      "Redux",
      "Framer Motion",
      "Material UI",
    ],
  },
  {
    skillSet: "Back-end",
    skills: ["Node JS", "Express JS"],
  },
  {
    skillSet: "Database",
    skills: ["MongoDB", "Google Firebase", "SQL"],
  },
  {
    skillSet: "Other skills & tools",
    skills: [
      "Figma",
      "Jira",
      "Postman",
      "Vercel",
      "git & github",
      "Wire framing",
    ],
  },
];

export const projectsData = [
  {
    projectName: "IonArc",
    projectHeading: "IonArc Consultancy Website",
    period: "July 2024 - July 2024",
    projectLink: "https://ionarc-website.vercel.app/",
    projectDescription:
      "A dynamic and engaging digital platform designed to showcase the client’s expertise and services. The website delivers a seamless user experience with its modern, responsive design, ensuring visitors can easily navigate and access key information. Crafted to highlight industry-leading solutions, the site combines professional aesthetics with intuitive functionality, positioning the client as a trusted consultancy partner while effectively capturing the attention of potential clients.",
    techStack: ["React", "tailwind CSS", "Figma", "Postman"],
    thingsUsed: [],
    theJourney: [
      "Client consultation",
      "User Research",
      "Design & wire framing",
      "Development",
      "Testing & deployment",
    ],
    projectImages: [
      ionarcThumbnail1,
      ionarcThumbnail2,
      ionarcThumbnail3,
      thumb,
    ],
  },
  {
    projectName: "Projects Section",
    projectHeading: "Portfolio Projects Section",
    period: "October 2024 - Present",
    projectLink:
      "https://dribbble.com/shots/24987554-Portfolio-s-Projects-section",
    projectDescription:
      "A dynamic and engaging digital platform designed to showcase the client’s expertise and services. The website delivers a seamless user experience with its modern, responsive design, ensuring visitors can easily navigate and access key information. Crafted to highlight industry-leading solutions, the site combines professional aesthetics with intuitive functionality, positioning the client as a trusted consultancy partner while effectively capturing the attention of potential clients.",
    techStack: ["React", "tailwind CSS", "Figma", "Postman"],
    thingsUsed: [],
    theJourney: [
      "Client consultation",
      "User Research",
      "Design & wire framing",
      "Development",
      "Testing & deployment",
    ],
    projectImages: [ionarcThumbnail1, ionarcThumbnail2, ionarcThumbnail3],
  },
  {
    projectName: "LinkedIn Re-design",
    projectHeading: "LinkedIn Home Page Re-design",
    period: "September 2024 - September 2024",
    projectLink:
      "https://dribbble.com/shots/24944391-LinkedIn-Home-Page-Refresh",
    projectDescription:
      "A dynamic and engaging digital platform designed to showcase the client’s expertise and services. The website delivers a seamless user experience with its modern, responsive design, ensuring visitors can easily navigate and access key information. Crafted to highlight industry-leading solutions, the site combines professional aesthetics with intuitive functionality, positioning the client as a trusted consultancy partner while effectively capturing the attention of potential clients.",
    techStack: ["React", "tailwind CSS", "Figma", "Postman"],
    thingsUsed: [],
    theJourney: [
      "Client consultation",
      "User Research",
      "Design & wire framing",
      "Development",
      "Testing & deployment",
    ],
    projectImages: [ionarcThumbnail1, ionarcThumbnail2, ionarcThumbnail3],
  },
  {
    projectName: "Morning Buddy",
    projectHeading: "Morning Buddy (Your every day instant news bud!)",
    projectLink: "https://dribbble.com/shots/24895816-Morning-Buddy",
    period: "September 2024 - September 2024",
    projectDescription:
      "A dynamic and engaging digital platform designed to showcase the client’s expertise and services. The website delivers a seamless user experience with its modern, responsive design, ensuring visitors can easily navigate and access key information. Crafted to highlight industry-leading solutions, the site combines professional aesthetics with intuitive functionality, positioning the client as a trusted consultancy partner while effectively capturing the attention of potential clients.",
    techStack: ["React", "tailwind CSS", "Figma", "Postman"],
    thingsUsed: [],
    theJourney: [
      "Client consultation",
      "User Research",
      "Design & wire framing",
      "Development",
      "Testing & deployment",
    ],
    projectImages: [ionarcThumbnail1, ionarcThumbnail2, ionarcThumbnail3],
  },
  {
    projectName: "Final Year Project",
    projectHeading: "College Project Submission Portal",
    period: "July 2023 - July 2024",
    projectLink: "https://github.com/adnan179/final_year_project",
    projectDescription:
      "A dynamic and engaging digital platform designed to showcase the client’s expertise and services. The website delivers a seamless user experience with its modern, responsive design, ensuring visitors can easily navigate and access key information. Crafted to highlight industry-leading solutions, the site combines professional aesthetics with intuitive functionality, positioning the client as a trusted consultancy partner while effectively capturing the attention of potential clients.",
    techStack: ["React", "tailwind CSS", "Figma", "Postman"],
    thingsUsed: [],
    theJourney: [
      "Client consultation",
      "User Research",
      "Design & wire framing",
      "Development",
      "Testing & deployment",
    ],
    projectImages: [ionarcThumbnail1, ionarcThumbnail2, ionarcThumbnail3],
  },
];
