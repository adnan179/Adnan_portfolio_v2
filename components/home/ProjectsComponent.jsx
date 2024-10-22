"use client";
import React, { useEffect, useState } from "react";
import { projectsData } from "@/data";
import linkIcon from "../../app/public/icons/icons8-link-64.png";
import Link from "next/link";
import Image from "next/image";
import _ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const ProjectsComponent = () => {
  const [selectedProjectName, setSelectedProjectName] = useState("IonArc");
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  // Function to handle selection of project through links
  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setSelectedProjectName(project.projectName);
  };

  // GSAP animations for initial load
  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      "#projects-sec-heading",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
    )
      .fromTo(
        "#project-links",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
      )
      .fromTo(
        "#line",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
      );

    // Only run animations for project details if it's not the initial render
    if (!isInitialRender) {
      tl.fromTo(
        "#project-heading > *",
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut", stagger: 0.3 }
      )
        .fromTo(
          "#project-period",
          { y: 200, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
        )
        .fromTo(
          "#project-desc-heading",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
        )
        .fromTo(
          "#project-desc",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
        )
        .fromTo(
          "#tech-stack > *",
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          "#journey > *",
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          "#project-images",
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          "#visit-the-projects-page",
          { y: 200, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
        );
    }
  }, [isInitialRender]);

  // GSAP animation when the selected project changes
  useEffect(() => {
    // Only apply animations after the initial render
    if (!isInitialRender) {
      const tl = gsap.timeline();

      tl.fromTo(
        "#project-heading > *",
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut", stagger: 0.3 }
      )
        .fromTo(
          "#project-period",
          { y: 200, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
        )
        .fromTo(
          "#project-desc-heading",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
        )
        .fromTo(
          "#project-desc",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
        )
        .fromTo(
          "#tech-stack > *",
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          "#journey > *",
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          "#project-images",
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          "#visit-the-projects-page",
          { y: 200, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
        );
    }
  }, [selectedProjectName]);

  // Mark the first render as done after initial load
  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col w-full min-h-screen lg:px-16 px-3"
    >
      <h1
        id="projects-sec-heading"
        className="bg-gradient-to-r from-[#808080]/50 via-[#808080] to-[#808080]/50  bg-clip-text text-transparent font-Montserrat font-semibold drop-shadow-lg lg:text-[48px] text-[36px]"
      >
        Projects
      </h1>
      {/* main container */}
      <div className="flex md:flex-row flex-col w-full h-full justify-center items-center md:mt-0 mt-7">
        {/* links container */}
        <div className="flex md:flex-row flex-col gap-2 md:w-1/6 w-full h-full">
          <div
            id="project-links"
            className="relative flex md:flex-col flex-row gap-4 md:items-end items-center md:py-16 px-6"
          >
            {projectsData.map((project, index) => (
              <h2
                onClick={() => handleSelectProject(project)}
                key={index}
                className={`flex font-inter font-medium md:text-sm text-[12px] cursor-pointer ${
                  selectedProjectName === project.projectName
                    ? "glowing-text "
                    : "text-[#808080]/80"
                }`}
              >
                {project.projectName}
              </h2>
            ))}
            {/* line */}
            <div
              id="line"
              className="absolute flex md:top-0 -bottom-2 right-0 md:-right-4 md:w-[1.5px] md:h-full w-full h-[1.5px] bg-gradient-to-b from-[#808080]/50 via-[#808080] to-[#808080]/50"
            ></div>
          </div>
        </div>
        {/* links container */}
        {/* project content container */}
        <div className="flex flex-col md:gap-4 gap-2 md:w-5/6 w-full mt-5 md:mt-0 md:px-0 px-4">
          {/* heading,link and period */}
          <div className="flex flex-col gap-1">
            <div
              id="project-heading"
              className="flex flex-row gap-3 items-center"
            >
              <h1 className="text-[#808080] font-medium lg:text-[36px] text-[22px]">
                {selectedProject.projectHeading}
              </h1>
              <Link
                href={selectedProject.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkIcon}
                  alt="link to the project"
                  className="sm:w-7 sm:h-7 w-5 h-5 object-contain"
                />
              </Link>
            </div>
            <h3
              id="project-period"
              className="text-white text-[14px] lg:text-[16px]"
            >
              {selectedProject.period}
            </h3>
          </div>
          {/* heading,link and period */}
          {/* description */}
          <h3
            id="project-desc-heading"
            className="text-[#808080] font-medium text-[16px]"
          >
            Description:
          </h3>
          <p
            id="project-desc"
            className="text-white text-[12px] md:text-[14px]"
          >
            {selectedProject.projectDescription}
          </p>
          {/* description */}
          {/* tech stack and the journey */}
          <div className="flex md:flex-row flex-col gap-3 w-full justify-between">
            <div
              id="tech-stack"
              className="flex flex-col md:w-1/3 w-full md:gap-3 gap-1"
            >
              <h2 className="text-[#808080] font-medium">Tech Stack:</h2>
              <div className="flex flex-row flex-wrap gap-2 pl-4">
                {selectedProject.techStack.map((ts, index) => (
                  <p
                    key={index}
                    className="text-white font-light lg:text-[14px] text-[12px]"
                  >
                    {ts}
                  </p>
                ))}
              </div>
            </div>
            <div
              id="journey"
              className="flex flex-col md:gap-3 gap-1 md:w-2/3 w-full"
            >
              <h2 className="text-[#808080] font-medium">The Journey:</h2>
              <div className="flex items-center justify-center md:mt-4 mt-2">
                <div className="relative flex items-center justify-between w-full">
                  <div className="absolute md:top-3/4 top-[25px] left-0 right-0 h-[1.5px] bg-[#808080]"></div>

                  {selectedProject.theJourney.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="md:text-sm text-[8px] text-center text-white">
                        {step}
                      </span>
                      <div className="mt-2 relative flex items-center justify-center md:w-6 md:h-6 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* tech stack and the journey */}
          {/* images container */}
          <div
            id="project-images"
            className="w-full flex flex-row gap-3 overflow-x-auto custom-scrollbar-2 md:mt-2 mt-4"
          >
            {selectedProject.projectImages.map((i, idx) => (
              <Image
                src={i}
                alt="project image"
                key={idx}
                className="md:w-[700px] md:h-[200px] w-[500px] h-[150px] rounded-[24px] drop-shadow-lg  object-fill"
              />
            ))}
          </div>
          {/* images container */}
        </div>
        {/* project content container */}
      </div>
      {/* main container */}
      <Link id="visit-the-projects-page" href="/projects" className="flex mt-5">
        <h2 className="font-medium bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D] bg-clip-text text-transparent md:text-[20px] text-[14px]">
          Visit the projects page
        </h2>
      </Link>
    </section>
  );
};

export default ProjectsComponent;
