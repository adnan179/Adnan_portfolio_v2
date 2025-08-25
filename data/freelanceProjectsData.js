import dash1 from "../app/public/projects/veggie_dashboard_1.png";
import dash2 from "../app/public/projects/veggie_dashboard_2.png";
import dash3 from "../app/public/projects/veggie_dashboard_3.png";
import dash4 from "../app/public/projects/veggie_dashboard_4.png";
import dash5 from "../app/public/projects/veggie_dashboard_5.png";

import ionarcThumbnail1 from "../app/public/projects/ionarc thumbnail.png";
import ionarcThumbnail2 from "../app/public/projects/ionarc thumbnail_2.png";
import ionarcThumbnail3 from "../app/public/projects/ionarc thumbnail_3.png";


export const freelanceProjectsData = [
  {
      projectName: "Store Dashboard",
      projectHeading: "Retail Vegetable store Dashboard",
      projectLink: "",
      period: "Feb 2025 - Feb 2025",
      bulletPoints:[
        "Designed and developed a MERN stack dashboard for a vegetable retail store, streamlining sales, customer, and inventory management, reducing manual record-keeping time by 60%.",
        "Implemented real-time updates using WebSockets, ensuring instant synchronization across all user systems, improving operational efficiency by 40%.",
        "Designed role-based access control, allowing admins to manage operators while ensuring secure authentication, reducing unauthorized access incidents by 90%.",
        "Integrated an audit log to track user activities, including additions, modifications, and deletions with timestamps, cutting down auditing time by 50%.", "Enabled credit tracking, allowing customers to pay their outstanding balance, which is stored and updated in the system, reducing missed payments by 35%.","Developed a billing system, allowing admins to generate formatted bills and send them directly to customers via WhatsApp,cutting billing processing time by 70%.",
        "Added a sales recovery feature, allowing users to restore deleted sales records for improved data integrity, reducing accidental data loss by 80%.",
      ],
      techStack: ["Figma","React","Tailwind CSS","Node JS","Express JS","MongoDB","WhatsApp API","Socket.io","Material UI","Mongoose"],
      projectImages: [dash1, dash2, dash3, dash4, dash5],
    },
    {
      projectName: "Dental Dashboard",
      projectHeading: "Dental Clinic Management Dashboard",
      projectLink: "",
      period: "Aug 2025 - Aug 2025",
      bulletPoints:[
        "Designed and developed a complete MERN stack dashboard for a dental clinic to streamline appointment scheduling, patient profile creation, and medical history tracking, reducing administrative workload by 65%.",
        "Implemented appointment rescheduling with real-time updates using WebSockets, improving coordination between reception staff and dentists by 40%.",
        "Built a secure patient records module storing treatment history, prescriptions, and billing details, enhancing patient data accessibility and reducing record retrieval time by 70%.",
        "Integrated a billing system with printable and email-based invoices, reducing billing time by 60%.",
        "Added role-based access control to differentiate permissions for admins, dentists, and receptionists, minimizing unauthorized data access incidents by 95%.",
        "Developed a patient reminder system via WhatsApp API, improving appointment attendance by 35%."
      ],
      techStack: ["Figma","React","Tailwind CSS","Node JS","Express JS","MongoDB","WhatsApp API","Socket.io","Material UI","Mongoose", "firebase"],
      projectImages: [],
    },
    {
      projectName: "IonArc",
      projectHeading: "IonArc Consultancy Website",
      period: "July 2024 - July 2024",
      projectLink: "https://ionarc-website.vercel.app/",
      bulletPoints:[
        "Developed and deployed a responsive consultancy website using React, Tailwind CSS, and Figma, achieving a 30% increase in client inquiries through improved UI/UX design.",
        "Designed wireframes, integrated APIs, and ensured cross-browser compatibility, optimizing device performance and responsiveness.",
        "Collaborated closely with clients to meet requirements, demonstrating strong project management and communication skills throughout the lifecycle."
      ],
      techStack: ["React", "tailwind CSS", "Figma", "Postman"],
      projectImages: [ionarcThumbnail1, ionarcThumbnail2, ionarcThumbnail3],
  }
]