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
import ionarcThumbnail1 from "../app/public/projects/ionarc thumbnail.png";
import ionarcThumbnail2 from "../app/public/projects/ionarc thumbnail_2.png";
import ionarcThumbnail3 from "../app/public/projects/ionarc thumbnail_3.png";
import morning1 from "../app/public/projects/morning_buddy.png";
import morningLaptopView from "../app/public/projects/morning_buddy_laptop_view.png";
import linkedin1 from "../app/public/projects/Linkedin_revamp.png";
import linkedinLaptopView from "../app/public/projects/linkedin1-laptop-view.png";
import projectsSection from "../app/public/projects/projects-section-image.png";
import projectsSectionLaptopView from "../app/public/projects/projects_section_laptop_view.png";
import final1 from "../app/public/projects/final_year_project_1.png";
import final2 from "../app/public/projects/final_year_project_2.png";
import final3 from "../app/public/projects/final_year_project_3.png";
import final4 from "../app/public/projects/final_year_project_4.png";
import final5 from "../app/public/projects/final_year_project_5.png";
import final6 from "../app/public/projects/final_year_project_6.png";
import final7 from "../app/public/projects/final_year_project_7.png";
import scrapper from "../app/public/projects/scrapper.png";
import bite1 from "../app/public/projects/bite_speed_1.png";
import bite2 from "../app/public/projects/bite_speed_2.png";
import bite3 from "../app/public/projects/bite_speed_3.png";
import three1 from "../app/public/projects/three-js-1.png";
import three2 from "../app/public/projects/three-js-2.png";
import three3 from "../app/public/projects/three-js-3.png";
import threeGuide1 from "../app/public/projects/three-guide-1.png";
import threeGuide2 from "../app/public/projects/three-guide-2.png";
import threeGuide3 from "../app/public/projects/three-guide-3.png";

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
    colorPalette: [
      "#34E89E",
      "#1D2671",
      "#FFFFFF",
      "#0C1240",
      "#00000",
      "#D7D5D5",
    ],
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
    colorPalette: ["#0F0F0F", "#808080", "#FFFFFF", "#021EED", "#FB0D0D"],
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
    colorPalette: [
      "#083E73",
      "#38434F",
      "#1B1F23",
      "#000000",
      "#E7A33E",
      "#F8C77E",
      "#F8F8FF",
    ],
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
    colorPalette: ["#000000", "#F8F8FF", "#808080", "#4949E5"],
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
    colorPalette: ["#981F2A", "#FFFFFF", "#1E1E1E", "#E5DFDF"],
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

export const allProjectsData = [
  {
    projectName: "IonArc",
    projectHeading: "IonArc Consultancy Website",
    period: "July 2024 - July 2024",
    projectLink: "https://ionarc-website.vercel.app/",
    projectDescription:
      "A dynamic and engaging digital platform 🌐 designed to showcase the client’s expertise and services 💼. The website delivers a seamless user experience with its modern, responsive design 📱, ensuring visitors can easily navigate and access key information 🔍. Crafted to highlight industry-leading solutions 🏆, the site combines professional aesthetics with intuitive functionality 🎨, positioning the client as a trusted consultancy partner 🤝 while effectively capturing the attention of potential clients 👥.",
    techStack: ["React", "tailwind CSS", "Figma", "Postman"],
    colorPalette: [
      "#34E89E",
      "#1D2671",
      "#FFFFFF",
      "#0C1240",
      "#00000",
      "#D7D5D5",
    ],
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
    colorPalette: ["#0F0F0F", "#808080", "#FFFFFF", "#021EED", "#FB0D0D"],
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
    colorPalette: [
      "#083E73",
      "#38434F",
      "#1B1F23",
      "#000000",
      "#E7A33E",
      "#F8C77E",
      "#F8F8FF",
    ],
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
    colorPalette: ["#000000", "#F8F8FF", "#808080", "#4949E5"],
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
    colorPalette: ["#981F2A", "#FFFFFF", "#1E1E1E", "#E5DFDF"],
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
  {
    projectName: "Scrapper/Summarizer",
    projectHeading: "Web Scraper & Summarizer Project",
    period: "June 2024 - June 2024",
    projectLink: "https://github.com/adnan179/Asva_summarizer_assignment",
    projectDescription:
      "  This powerful **Web Scraper & Summarizer** tool lets users efficiently extract content from any web URL and summarize it with ease. 🌐✨ With both **front-end and back-end integration**, the project provides a seamless experience—allowing users to choose between a straightforward summarization method or an AI-powered option for deeper insights. The **back-end** incorporates a robust proxy server to enable content scraping from diverse sources, securely processing user requests for summarization. 🔒💻 Users simply enter a URL, and the platform retrieves the page content, which is then displayed in an interactive interface reminiscent of the familiar **ChatGPT design** 🖥️. Icons throughout the interface guide users through each function, offering a user-friendly and visually engaging experience. Responsive design ensures that the site adjusts beautifully across devices, making this tool accessible from desktop to mobile 📱📊.",
    techStack: [
      "React",
      "tailwind CSS",
      "Node JS",
      "Express JS",
      "mongoose",
      "mongodb",
      "jsonwebtoken",
    ],
    colorPalette: ["#030712", "#FFFFFF", "#4B5563", "#81878E", "#111827"],
    theJourney: [
      "Understanding the problem",
      "Requirement Analysis",
      "Design",
      "Development",
      "Testing & deployment",
    ],
    projectImages: [scrapper],
  },
  {
    projectName: "Chat-flow Builder",
    projectHeading: "Chat flow builder using React-flow",
    period: "April 2024 - April 2024",
    projectLink:
      "https://chat-flowbuilder-jpvb3hfmp-adnan179s-projects.vercel.app/",
    projectDescription:
      "Chat Flow Builder is a sleek, intuitive tool crafted with React, React Flow, and Tailwind CSS 🎨💻, designed to streamline the creation and customization of chat flows. With a user-friendly interface, you can effortlessly add new text nodes 📝 to the canvas, adjust the text within each node ✏️, and visually organize the flow of your conversation. The tool offers smooth drag-and-drop functionality, allowing you to shape complex conversations with ease 🖱️⚡.Whether starting a new flow or refining an existing one, Chat Flow Builder lets you save your progress along the way 💾 and even restore previous states to maintain flexibility and control over your work 🔄. Built with responsiveness in mind, it adapts seamlessly across devices, making it perfect for on-the-go adjustments 📱💼.",
    techStack: ["React", "tailwind CSS", "React-flow"],
    colorPalette: ["#60A5FA", "#FFFFFF", "#0D9488", "#000000", "#6B7280"],
    theJourney: [
      "Understanding the problem",
      "Requirement Analysis",
      "Design",
      "Development",
      "Testing & deployment",
    ],
    projectImages: [bite1, bite2, bite3],
  },
  {
    projectName: "React-three-fiber guide",
    projectHeading: "Three.js and Gsap practice project 2",
    period: "April 2024 - present",
    projectLink: "https://react-three-fiber-guide.vercel.app/",
    projectDescription:
      "This project is a step-by-step guide for those diving into React-Three-Fiber—from initial setup 🛠️ to mastering the basics and beyond! Built with Three.js and GSAP animations, this interactive walkthrough takes users on a journey through core concepts, helping them understand how to leverage 3D in React for engaging web experiences 🌐✨. With easy-to-follow steps, users can explore everything from installation to creating simple 3D elements, learning how to control scenes and add animations along the way 🎥🔄.Each section is crafted to make learning intuitive and fun, setting a solid foundation for those ready to bring 3D visuals into their projects!",
    techStack: [
      "React",
      "tailwind CSS",
      "React-three-fiber",
      "Three.js",
      "Gsap",
    ],
    colorPalette: ["#808080", "#FFFFFF", "#000319", "#070A1F"],
    theJourney: [
      "Understanding the problem",
      "Requirement Analysis",
      "Development",
      "Testing & deployment",
    ],
    projectImages: [threeGuide1, threeGuide2, threeGuide3],
  },
  {
    projectName: "Three.JS practice project",
    projectHeading: "Three.js and Gsap practice project 1 (iPhone 15 website)",
    period: "April 2024 - April 2024",
    projectLink: "https://three-js-practice-1.vercel.app/",
    projectDescription:
      "In this practice project, I set out to replicate the sleek iPhone 15 web page, complete with captivating 3D animations and interactive effects 🎥📱. Using Three.js, React-Three-Fiber, and GSAP, I brought the visuals to life, crafting smooth, realistic animations that make each element pop 🌐✨. This project served as a deep dive into learning complex animation techniques and understanding 3D space within the web environment. From dynamic scroll effects to object interactions, every detail was carefully recreated to match the immersive experience Apple is known for.This hands-on project enhanced my skills in both 3D modeling and animation control while pushing the limits of web interactivity. It’s a peek into the power of modern front-end technologies, blending design and code to create experiences that feel alive 🎨🚀",
    techStack: [
      "React",
      "tailwind CSS",
      "React-three-fiber",
      "Three.js",
      "Gsap",
    ],
    colorPalette: ["#808080", "#FFFFFF", "#2997FF", "#000000"],
    theJourney: [
      "Understanding the problem",
      "Requirement Analysis",
      "Development",
      "Testing & deployment",
    ],
    projectImages: [three1, three2, three3],
  },
];
