"use client";
import React, { useEffect, useRef, useState } from "react";
import { ProjectToggle } from "./projectToggle";
import PersonalProjects from "./personalProjects";
import FreelanceProjects from "./freelanceProjects";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

const ProjectsComponent = () => {
  const [selected, setSelected] = useState("freelance");

  const containerRef = useRef(null);

  // Animate section transitions
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [selected]);


  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      "#projects-sec-heading",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3, ease: "power2.inOut" }
    )    
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col gap-5 w-full min-h-screen xl:px-16 lg:px-8 md:px-10 px-4"
    >
      <h1
        id="projects-sec-heading"
        className="bg-gradient-to-r from-[#808080]/50 via-[#808080] to-[#808080]/50  bg-clip-text text-transparent font-Montserrat font-semibold drop-shadow-lg lg:text-[48px] text-[36px]"
      >
        Projects
      </h1>
      <ProjectToggle active={selected} onChange={setSelected}/>
      {/* Section Switcher */}
      <div ref={containerRef} key={selected}>
        {selected === "personal" ? <PersonalProjects /> : <FreelanceProjects />}
      </div>
      

    </section>
  );
};

export default ProjectsComponent;
