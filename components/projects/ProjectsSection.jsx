"use client";
import React, { useEffect, useState } from "react";
import linkIcon from "../../app/public/icons/icons8-link-64.png";
import Link from "next/link";
import Image from "next/image";
import _ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { allProjectsData as projectsData } from "@/data";
import { GoArrowRight } from "react-icons/go";

gsap.registerPlugin(_ScrollTrigger);

const ProjectsSection = () => {
  const [selectedProjectName, setSelectedProjectName] =
    useState("Form Generator");
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  // Function to handle selection of project through links
  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setSelectedProjectName(project.projectName);
  };

  // GSAP animations for initial load
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      "#project-links",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
    ).fromTo(
      "#line",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
    );

    // Only run animations for project details if it's not the initial render
    if (!isInitialRender) {
      tl.fromTo(
        "#project-heading > *",
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut", stagger: 0.3 }
      )
        .fromTo(
          "#project-period",
          { y: 200, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
        )
        .fromTo(
          "#project-desc-heading",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
        )
        .fromTo(
          "#project-desc",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
        )
        .fromTo(
          "#tech-color",
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          "#journey",
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
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
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          "#visit-the-projects-page",
          { y: 200, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
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
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut", stagger: 0.3 }
      )
        .fromTo(
          "#project-period",
          { y: 200, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
        )
        .fromTo(
          "#project-desc-heading",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
        )
        .fromTo(
          "#project-desc",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
        )
        .fromTo(
          "#tech-color",
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          "#journey",
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
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
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          "#visit-the-projects-page",
          { y: 200, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
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
      className="w-full min-h-screen xl:px-10 sm:px-4 px-3 mt-0 lg:mt-10 xl:mt-0"
    >
      {/* main container */}
      <div className="flex lg:flex-row flex-col w-full h-full justify-center items-center ">
        {/* links container */}
        <div className="flex md:flex-row flex-col gap-2 xl:w-1/6 lg:w-1/5 w-full h-full">
          <div
            id="project-links"
            className="flex lg:flex-col flex-row flex-wrap md:gap-4 gap-2 md:items-end items-center xl:p-6 lg:p-4 p-6 bg-[#171717] rounded-[36px] drop-shadow-lg"
          >
            {projectsData.map((project, index) => (
              <h2
                onClick={() => handleSelectProject(project)}
                key={index}
                className={`flex font-inter font-medium text-[12px] cursor-pointer ${
                  selectedProjectName === project.projectName
                    ? "glowing-text "
                    : "text-[#808080]/80"
                }`}
              >
                {project.projectName}
              </h2>
            ))}
          </div>
        </div>
        {/* links container */}
        {/* project content container */}
        <div className="flex flex-col md:gap-4 gap-2 xl:w-5/6 lg:w-4/5 w-full md:mt-0 mt-5 lg:mt-0 lg:px-0 px-4">
          {/* heading,link and period */}
          <div className="flex flex-col gap-1">
            <div
              id="project-heading"
              className="flex flex-row gap-3 items-center"
            >
              <h1 className="text-[#808080] font-medium xl:text-[36px] lg:text-[32px] text-[22px]">
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
              className="text-white text-[14px] xl:text-[16px]"
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
            className="text-white text-[12px] xl:text-[14px]"
          >
            {selectedProject.projectDescription}
          </p>
          {/* description */}
          {/* tech stack, color palette and the journey */}
          <div
            id="tech-color"
            className="flex md:flex-row flex-col gap-3 w-full justify-between drop-shadow-lg"
          >
            {/* tech stack */}
            <div className="flex flex-col gap-3 md:w-1/3 w-full bg-[#171717] rounded-[36px] xl:p-5 lg:p-4 p-5">
              <div className="flex flex-col w-full md:gap-3 gap-1">
                <h2 className="text-[#808080] font-medium">Tech Stack:</h2>
                <div className="flex flex-row flex-wrap gap-2 pl-2">
                  {selectedProject.techStack.map((ts, index) => (
                    <p
                      key={index}
                      className="text-white xl:text-[14px] text-[12px] px-3 py-1 rounded-[36px] bg-black/50"
                    >
                      {ts}
                    </p>
                  ))}
                </div>
              </div>
              {/* tech stack */}
              {/* color palette */}
              <div className="flex flex-col w-full md:gap-3 gap-1">
                <h2 className="text-[#808080] font-medium">Color Palette:</h2>
                <div className="flex flex-row flex-wrap gap-2 pl-4">
                  {selectedProject.colorPalette.map((cp) => (
                    <div key={cp} className="flex flex-row gap-1">
                      <div
                        className="flex w-4 h-4 border border-white"
                        style={{ backgroundColor: cp }}
                      ></div>
                      <p className="text-white xl:text-[14px] text-[12px]">
                        {cp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* color palette */}
            </div>

            <div
              id="journey"
              className="flex flex-col md:gap-3 gap-1 md:w-2/3 w-full bg-[#171717] p-5 rounded-[36px] drop-shadow-lg"
            >
              <h2 className="text-[#808080] font-medium">The Journey:</h2>
              <div className="flex items-center justify-center mt-2">
                <ul className="flex flex-row gap-2 flex-wrap items-center">
                  {selectedProject.theJourney.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex flex-row gap-1 items-center md:text-sm text-[10px] text-white bg-black/50 p-2 rounded-[14px]"
                    >
                      {step}
                      <span>
                        <GoArrowRight className="text-white w-5 h-5" />
                      </span>
                    </li>
                  ))}
                </ul>
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
                className="w-[500px] h-[250px] rounded-[24px] drop-shadow-lg  object-contain"
              />
            ))}
          </div>
          {/* images container */}
        </div>
        {/* project content container */}
      </div>
      {/* main container */}
    </section>
  );
};

export default ProjectsSection;
