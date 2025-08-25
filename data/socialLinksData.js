import { FaInstagram, FaLinkedin, FaGithub, FaBehance } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


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
    name: "Behance",
    icon: <FaBehance className="w-[30px] h-[30px] text-white" />,
    link: "https://www.behance.net/adnanshaik4",
  },
  {
    name: "Gmail",
    icon: <MdOutlineMail className="w-[30px] h-[30px] text-white" />,
    gmail: "adnanshaik179@gmail.com",
  },
];