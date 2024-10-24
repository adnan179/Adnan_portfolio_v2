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
import morning1 from "../app/public/home/morning_buddy.png";
import morningLaptopView from "../app/public/home/morning_buddy_laptop_view.png";
import linkedin1 from "../app/public/home/Linkedin_revamp.png";
import linkedinLaptopView from "../app/public/home/linkedin1-laptop-view.png";
import projectsSection from "../app/public/projects-section-image.png";
import projectsSectionLaptopView from "../app/public/home/projects_section_laptop_view.png";
import final1 from "../app/public/home/final_year_project_1.png";
import final2 from "../app/public/home/final_year_project_2.png";
import final3 from "../app/public/home/final_year_project_3.png";
import final4 from "../app/public/home/final_year_project_4.png";
import final5 from "../app/public/home/final_year_project_5.png";
import final6 from "../app/public/home/final_year_project_6.png";
import final7 from "../app/public/home/final_year_project_7.png";

export const socialLinks = [
  {
    name: "Linkedin",
    icon: (
      <FaLinkedin className="lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[40px] h-[40px] text-white" />
    ),
    link: "https://www.linkedin.com/in/adnanshaik179",
  },
  {
    name: "Instagram",
    icon: (
      <FaInstagram className="lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[40px] h-[40px] text-white" />
    ),
    link: "https://www.instagram.com/_adnan179",
  },
  {
    name: "Github",
    icon: (
      <FaGithub className="lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[40px] h-[40px] text-white" />
    ),
    link: "https://www.github.com/adnan179",
  },
  {
    name: "Dribbble",
    icon: (
      <FaDribbble className="lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[40px] h-[40px] text-white" />
    ),
    link: "https://www.dribbble.com/adnan179",
  },
  {
    name: "Gmail",
    icon: (
      <MdOutlineMail className="lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[40px] h-[40px] text-white" />
    ),
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
      "A dynamic and engaging digital platform 🌐 designed to showcase the client’s expertise and services 💼. The website delivers a seamless user experience with its modern, responsive design 📱, ensuring visitors can easily navigate and access key information 🔍. Crafted to highlight industry-leading solutions 🏆, the site combines professional aesthetics with intuitive functionality 🎨, positioning the client as a trusted consultancy partner 🤝 while effectively capturing the attention of potential clients 👥.",
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
    projectName: "Projects Section",
    projectHeading: "Portfolio Projects Section",
    period: "October 2024 - Present",
    projectLink:
      "https://dribbble.com/shots/24987554-Portfolio-s-Projects-section",
    projectDescription:
      "A sleek and immersive projects section, designed with a modern color palette featuring a midnight background 🌌, white for clarity ⚪, and gray for headings and sub-headings 🌫️. This layout is crafted to showcase portfolios in a professional and visually appealing way 🎨, enhancing readability 📖 and engagement 🚀.",
    techStack: ["Figma"],
    thingsUsed: [],
    theJourney: [
      "User Research",
      "Design & wire framing",
      "Development",
      "Testing & deployment",
    ],
    projectImages: [projectsSection, projectsSectionLaptopView],
  },
  {
    projectName: "LinkedIn Re-design",
    projectHeading: "LinkedIn Home Page Re-design",
    period: "September 2024 - September 2024",
    projectLink:
      "https://dribbble.com/shots/24944391-LinkedIn-Home-Page-Refresh",
    projectDescription:
      "A refreshed look for LinkedIn’s homepage, focused on improving user experience through subtle yet impactful changes. ✨ The design streamlines the interface for smoother navigation 🧭, introduces tweaks to enhance visual clarity and flow 🎨, and ensures better accessibility for all users 🌐. These updates prioritize user-friendly interactions, while maintaining core functionality, resulting in a more intuitive and polished browsing experience.",
    techStack: ["Figma"],
    thingsUsed: [],
    theJourney: ["User Research", "Wire framing", "Design"],
    projectImages: [linkedin1, linkedinLaptopView],
  },
  {
    projectName: "Morning Buddy",
    projectHeading: "Morning Buddy (Your every day instant news bud!)",
    projectLink: "https://dribbble.com/shots/24895816-Morning-Buddy",
    period: "September 2024 - September 2024",
    projectDescription:
      "Introducing Morning Buddy – your go-to app for staying updated every morning! 🌅📲 Morning Buddy is a sleek, user-friendly news app designed to keep you informed with the latest news from various categories at your fingertips. 📰✨ Whether it's world events, sports, or entertainment, it helps users effortlessly browse and stay connected with what's happening around the globe 🌍. Perfect for those who love starting their day with a quick news catch-up! ☕",
    techStack: ["Figma"],
    thingsUsed: [],
    theJourney: ["User Research", "Wire framing", "Design"],
    projectImages: [morning1, morningLaptopView],
  },
  {
    projectName: "Final Year Project",
    projectHeading: "College Project Submission Portal",
    period: "July 2023 - July 2024",
    projectLink: "https://github.com/adnan179/final_year_project",
    projectDescription:
      "A comprehensive college project submission portal designed for efficient project management! 🎓✨ Students can easily upload their projects with detailed documentation 📂, track their submission status 📊, and receive valuable feedback 💬. Reviewers can evaluate projects, leave insightful comments 📝, and assign grades ⭐, while admins oversee the entire system, managing submissions, deadlines ⏰, and approvals ✅. This portal ensures smooth collaboration between students, reviewers, and administrators, making the project submission and evaluation process more organized and transparent! 🔍🌐",
    techStack: [
      "React",
      "tailwind CSS",
      "Figma",
      "Postman",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Mongoose",
    ],
    thingsUsed: [],
    theJourney: [
      "Understanding the problem",
      "Requirement Analysis",
      "Design & wire framing",
      "Development",
      "User Research",
      "Testing & deployment",
    ],
    projectImages: [final1, final2, final3, final4, final5, final6, final7],
  },
];

export const feedbackData = [
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
  {
    name: "Adnan Shaik",
    email: "adnanshaik179@gmail.com",
    message:
      "Wowza! 💥 This portfolio is smoother than my morning coffee ☕ (and that's saying something)! The design is chef’s kiss 👨‍🍳💋, and the functionality is like butter on a hot pancake 🥞—smooth, satisfying, and leaves me wanting more! If this portfolio were a snack, it'd be a 10/10 nacho platter 🧀. Keep it up, you're coding magic 🧙‍♂️!",
  },
];
