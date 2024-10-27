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
    projectHeading: "IonArc Consultancy Website",
    period: "July 2024 - July 2024",
    projectLink: "https://ionarc-website.vercel.app/",
    projectDescription:
      "The IonArc project is a dynamic digital platform 🚀, tailored to showcase the client’s expertise and comprehensive range of services with maximum impact. This website is crafted with a sleek, responsive design 📱💻, adapting seamlessly across all devices to deliver a smooth and intuitive user experience. Key information is thoughtfully organized for effortless navigation 🧭, guiding visitors through the client’s industry-leading solutions and reinforcing their reputation as a trusted consultancy partner 🤝. The site combines professional aesthetics 🎨 with functional design elements to ensure ease of use, positioning IonArc at the forefront of their field. With an inviting yet sophisticated layout, this platform captures potential clients' attention 🔍 and conveys the client’s authority, building confidence and encouraging deeper exploration of their offerings.",
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
    projectHeading: "Portfolio Projects Section",
    period: "October 2024 - Present",
    projectLink:
      "https://dribbble.com/shots/24987554-Portfolio-s-Projects-section",
    projectDescription:
      "An elegant and immersive projects section, crafted to captivate and inform 🌟. Designed with a modern color palette, this layout sets a striking midnight background 🌌, contrasted by crisp white elements for clarity ⚪ and complemented by soft gray accents for headings and subheadings 🌫️. The professional design layout is thoughtfully curated to showcase portfolios in a visually compelling way 🎨, drawing attention to each project while enhancing readability 📖 and user engagement 🚀. With a balance of style and substance, this section invites visitors to dive deeper, highlighting the quality and professionalism of each showcased piece 💼✨.",
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
    projectHeading: "LinkedIn Home Page Re-design",
    period: "September 2024 - September 2024",
    projectLink:
      "https://dribbble.com/shots/24944391-LinkedIn-Home-Page-Refresh",
    projectDescription:
      "A refreshed, user-centric update for LinkedIn’s homepage, bringing impactful changes for an optimized browsing experience ✨. This design reimagines the interface to streamline navigation 🧭, making it easier and faster for users to connect and explore. Thoughtful tweaks enhance visual clarity 🎨, with cleaner layouts and better spacing, guiding the eye naturally and allowing content to shine. Accessibility improvements 🌐 ensure a more inclusive experience for all users, with responsive adjustments that maintain readability across devices. These refined updates create a polished, intuitive experience, allowing users to interact seamlessly while retaining LinkedIn’s familiar functionality 🔗💼. It’s a sophisticated enhancement designed to keep users engaged, connected, and informed like never before! 🚀📈",
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
    projectHeading: "Morning Buddy (Your every day instant news bud!)",
    projectLink: "https://dribbble.com/shots/24895816-Morning-Buddy",
    period: "September 2024 - September 2024",
    projectDescription:
      "Introducing **Morning Buddy** – your ultimate companion for daily updates! 🌅📲 This sleek, user-friendly app is crafted to make catching up on news a breeze every morning. With Morning Buddy, you’ll have the latest headlines from a variety of categories like world events, sports, tech, and entertainment, all at your fingertips 📰✨. The intuitive interface allows users to seamlessly browse top stories, trending news, and even personalized recommendations, ensuring you’re always in the loop 🌍. Whether you’re sipping your coffee ☕ or on the go 🚶, Morning Buddy makes staying informed easy and enjoyable. Ideal for anyone who loves to kickstart their day with a dose of current events, it’s the perfect way to stay connected and updated—anytime, anywhere! 🚀📈",
    techStack: ["Figma"],
    colorPalette: ["#000000", "#F8F8FF", "#808080", "#4949E5"],
    theJourney: ["User Research", "Wire framing", "Design"],
    projectImages: [morning1, morningLaptopView],
  },
  {
    projectHeading: "College Project Submission Portal",
    period: "July 2023 - July 2024",
    projectLink: "https://github.com/adnan179/final_year_project",
    projectDescription:
      "Introducing a **Comprehensive College Project Submission Portal** – crafted for seamless and efficient project management! 🎓✨ This robust platform empowers students to upload their projects with ease 📂, complete with detailed documentation, while allowing them to track their submission status in real-time 📊 and access insightful feedback 💬 to enhance their work. For reviewers, the portal offers a structured interface for evaluating projects 📝, enabling them to leave constructive comments, assign grades ⭐, and streamline the feedback process. Admins, meanwhile, can oversee the entire workflow, from managing deadlines ⏰ and handling approvals ✅ to tracking progress, ensuring everything stays on track and organized.With dedicated features for every user group, this portal fosters collaboration and transparency, connecting students, reviewers, and administrators in a shared space 🔍🌐. It simplifies the project submission and evaluation journey, setting a new standard for efficiency and accessibility in academic project management! 🚀📚",
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
    projectHeading: "College Project Submission Portal",
    period: "July 2023 - July 2024",
    projectLink: "https://github.com/adnan179/final_year_project",
    projectDescription:
      "Introducing a **Comprehensive College Project Submission Portal** – crafted for seamless and efficient project management! 🎓✨ This robust platform empowers students to upload their projects with ease 📂, complete with detailed documentation, while allowing them to track their submission status in real-time 📊 and access insightful feedback 💬 to enhance their work. For reviewers, the portal offers a structured interface for evaluating projects 📝, enabling them to leave constructive comments, assign grades ⭐, and streamline the feedback process. Admins, meanwhile, can oversee the entire workflow, from managing deadlines ⏰ and handling approvals ✅ to tracking progress, ensuring everything stays on track and organized.With dedicated features for every user group, this portal fosters collaboration and transparency, connecting students, reviewers, and administrators in a shared space 🔍🌐. It simplifies the project submission and evaluation journey, setting a new standard for efficiency and accessibility in academic project management! 🚀📚",
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
