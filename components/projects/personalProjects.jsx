"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { projectsData } from "@/data";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import linkIcon from "../../app/public/icons/icons8-link-64.png";

const PersonalProjects = () => {
  const [selectedProjectName, setSelectedProjectName] =
    useState("Neural Nexus");
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
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      "#project-links",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.25, ease: "power3.out" }
    )
      .fromTo(
        "#line",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, ease: "power3.out" },
        "-=0.15"
      );

    if (!isInitialRender) {
      tl.fromTo(
        "#project-heading > *",
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.25,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.1"
      )
        .fromTo(
          "#project-period",
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.25, ease: "power3.out" },
          "-=0.15"
        )
        .fromTo(
          "#project-desc-heading",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.25, ease: "power3.out" },
          "-=0.15"
        )
        .fromTo(
          "#project-desc",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.25, ease: "power3.out" },
          "-=0.15"
        )
        .fromTo(
          "#tech-color",
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.15"
        )
        .fromTo(
          "#journey",
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.15"
        )
        .fromTo(
          "#project-images",
          { y: 120, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.15"
        )
        .fromTo(
          "#visit-the-projects-page",
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.25, ease: "power3.out" },
          "-=0.15"
        );
    }
  }, [isInitialRender]);

  // GSAP animation when the selected project changes
  useEffect(() => {
    if (!isInitialRender) {
      const tl = gsap.timeline();

      tl.fromTo(
        "#project-heading > *",
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.25,
          ease: "power3.out",
          stagger: 0.1,
        }
      )
        .fromTo(
          "#project-period",
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.25, ease: "power3.out" },
          "-=0.15"
        )
        .fromTo(
          "#project-desc-heading",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.25, ease: "power3.out" },
          "-=0.15"
        )
        .fromTo(
          "#project-desc",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.25, ease: "power3.out" },
          "-=0.15"
        )
        .fromTo(
          "#tech-color",
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.15"
        )
        .fromTo(
          "#journey",
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.15"
        )
        .fromTo(
          "#project-images",
          { y: 120, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.15"
        )
        .fromTo(
          "#visit-the-projects-page",
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.25, ease: "power3.out" },
          "-=0.15"
        );
    }
  }, [selectedProjectName]);

  // Mark the first render as done after initial load
  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  return (
    <section>
      {/* main container */}
      <div className="flex lg:flex-row flex-col gap-3 w-full h-full md:mt-0 mt-5">
        {/* links container */}
        <div className="flex md:flex-row flex-col gap-2 lg:w-1/6 w-full h-full">
          <div
            id="project-links"
            className="flex lg:flex-col flex-row gap-4 flex-wrap bg-[#101012]  xl:p-6 lg:p-4 p-5 rounded-[36px] drop-shadow-lg"
          >
            {projectsData?.map((project, index) => (
              <h2
                onClick={() => handleSelectProject(project)}
                key={index}
                className={`flex font-inter font-medium md:text-sm text-[12px] cursor-pointer ${
                  selectedProjectName === project.projectName
                    ? "glowing-text "
                    : "text-[#808080]/80"
                }`}
              >
                {project?.projectName}
              </h2>
            ))}
          </div>
        </div>
        {/* project content container */}
        <div className="flex flex-col md:gap-4 gap-2 lg:w-5/6 w-full md:mt-0 mt-5 lg:mt-0 lg:px-0 px-4">
          {/* heading, link and period */}
          <div className="flex flex-col gap-1">
            <div
              id="project-heading"
              className="flex flex-row gap-3 items-center"
            >
              <h1 className="text-[#808080] font-medium xl:text-[36px] text-[22px]">
                {selectedProject?.projectHeading}
              </h1>
              <Link
                href={selectedProject?.projectLink}
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
              className="text-white  text-[14px] xl:text-[16px]"
            >
              {selectedProject?.period}
            </h3>
          </div>
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
            {selectedProject?.projectDescription}
          </p>
          {/* tech stack, color palette and the journey */}
          <div
            id="tech-color"
            className="flex md:flex-row flex-col gap-3 w-full justify-between drop-shadow-lg"
          >
            {/* tech stack */}
            <div className="flex flex-col gap-3 md:w-1/2 w-full bg-[#171717] rounded-[36px] xl:p-5 lg:p-3 p-5">
              <div className="flex flex-col w-full md:gap-3 gap-1">
                <h2 className="text-[#808080] font-medium">Tech Stack:</h2>
                <div className="flex flex-row flex-wrap gap-2 pl-2">
                  {selectedProject?.techStack.map((ts, index) => (
                    <p
                      key={index}
                      className="text-white xl:text-[14px] text-[12px] px-3 py-1 rounded-[36px] bg-black/50"
                    >
                      {ts}
                    </p>
                  ))}
                </div>
              </div>
              {/* color palette */}
              <div className="flex flex-col w-full md:gap-3 gap-1">
                <h2 className="text-[#808080] font-medium">Color Palette:</h2>
                <div className="flex flex-row flex-wrap gap-2 pl-4">
                  {selectedProject?.colorPalette.map((cp) => (
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
              className="flex flex-col md:gap-3 gap-1 md:w-1/2 w-full bg-[#171717] p-5 rounded-[36px] drop-shadow-lg"
            >
              <h2 className="text-[#808080] font-medium">The Journey:</h2>
              <div className="flex items-center mt-2">
                <ul className="flex flex-row gap-2 flex-wrap items-center">
                  {selectedProject?.theJourney.map((step, idx) => (
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
          {/* images container */}
          <div
            id="project-images"
            className="w-full flex flex-row gap-3 overflow-x-auto custom-scrollbar-2 mt-2"
          >
            {selectedProject?.projectImages.map((i, idx) => (
              <Image
                src={i}
                alt="project image"
                key={idx}
                className="sm:w-[500px] w-full sm:h-[250px] h-[150px] rounded-[24px] drop-shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
      <Link id="visit-the-projects-page" href="/projects" className="flex mt-5">
        <h2 className="font-medium bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D] bg-clip-text text-transparent md:text-[20px] text-[14px]">
          Visit the projects page
        </h2>
      </Link>
    </section>
  );
};

export default PersonalProjects;
