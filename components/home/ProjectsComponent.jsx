"use client";
import React, { useState } from "react";
import SectionHeading from "../SectionHeading";
import { projectsData } from "@/data";
import linkIcon from "../../app/public/icons/icons8-link-64.png";
import Link from "next/link";
import Image from "next/image";

const ProjectsComponent = () => {
  const [selectedProjectName, setSelectedProjectName] = useState("IonArc");
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  //function to handle selection of project through links
  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setSelectedProjectName(project.projectName);
  };

  return (
    <section className="flex flex-col w-full min-h-screen lg:px-16 px-3">
      <SectionHeading heading="Projects" />
      {/* main container */}
      <div className="flex md:flex-row flex-col w-full h-full justify-center items-center md:mt-0 mt-7">
        {/* links container */}
        <div className="flex md:flex-row flex-col gap-2 md:w-1/6 w-full h-full">
          <div className="relative flex md:flex-col flex-row gap-4 md:items-end items-center md:py-16 px-6">
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
            <div className="absolute flex md:top-0 -bottom-2 right-0 md:-right-4 md:w-[1.5px] md:h-full w-full h-[1.5px] bg-gradient-to-b from-[#808080]/50 via-[#808080] to-[#808080]/50"></div>
          </div>
        </div>
        {/* links container */}
        {/* project content container */}
        <div className="flex flex-col md:gap-4 gap-2 md:w-5/6 w-full mt-5 md:mt-0 md:px-0 px-4">
          {/* heading,link and period */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-3 items-center">
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
            <h3 className="text-white text-[14px] lg:text-[16px]">
              {selectedProject.period}
            </h3>
          </div>
          {/* heading,link and period */}
          {/* description */}
          <h3 className="text-[#808080] font-medium text-[16px]">
            Description:
          </h3>
          <p className="text-white text-[12px] md:text-[14px]">
            {selectedProject.projectDescription}
          </p>
          {/* description */}
          {/* tech stack and the journey */}
          <div className="flex md:flex-row flex-col gap-3 w-full justify-between">
            <div className="flex flex-col md:w-1/3 w-full md:gap-3 gap-1">
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
            <div className="flex flex-col md:gap-3 gap-1 md:w-2/3 w-full">
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
          <div className="w-full flex flex-row gap-3 overflow-x-auto custom-scrollbar-2 md:mt-2 mt-4">
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
      <Link href="/projects" className="flex mt-5">
        <h2 className="font-medium bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D] bg-clip-text text-transparent md:text-[20px] text-[14px]">
          Visit the projects page
        </h2>
      </Link>
    </section>
  );
};

export default ProjectsComponent;
