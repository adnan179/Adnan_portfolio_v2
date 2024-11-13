import React, { useEffect } from "react";
import IconCloud from "../ui/icon-cloud";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(_ScrollTrigger);
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "firebase",
  "vercel",
  "jest",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "tailwindcss",
];
const MyTechStack = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#my-tech-stack",
        start: "top 50%",
      },
    });
    tl.fromTo(
      "#my-tech-stack",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    )
      .fromTo(
        "#my-tech-stack > h1",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#tech-slugs",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      );
  }, []);
  return (
    <div
      id="my-tech-stack"
      className="flex flex-col gap-3 rounded-[36px] bg-[#040404]/80 border border-gray-600/50 drop-shadow-lg md:w-[300px] lg:w-[400px] 
    md:h-[400px] lg:h-[400px] w-full h-[350px] p-5"
    >
      <h1 className="font-Montserrat font-bold text-[1rem] text-white">
        My Tech Stack
      </h1>
      <div
        id="tech-slugs"
        className="relative flex size-full items-center justify-center overflow-hidden bg-transparent"
      >
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

export default MyTechStack;
