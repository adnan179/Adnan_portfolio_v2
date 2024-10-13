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
    <section className="flex flex-col w-full min-h-screen lg:px-16 px-4">
      <SectionHeading heading="Projects" />
      {/* main container */}
      <div className="flex flex-row w-full h-full justify-center items-center">
        {/* links container */}
        <div className="flex flex-row gap-2 w-1/6 h-full">
          <div className="relative flex flex-col gap-2 items-end py-16">
            {projectsData.map((project, index) => (
              <h2
                onClick={() => handleSelectProject(project)}
                key={index}
                className={`font-inter font-medium text-sm cursor-pointer ${
                  selectedProjectName === project.projectName
                    ? "glowing-text "
                    : "text-[#808080]/80"
                }`}
              >
                {project.projectName}
              </h2>
            ))}
            {/* line */}
            <div className="absolute flex top-0 -right-4 w-[1.5px] h-full bg-gradient-to-b from-[#808080]/50 via-[#808080] to-[#808080]/50"></div>
          </div>
        </div>
        {/* links container */}
        {/* project content container */}
        <div className="flex flex-col gap-4 w-5/6">
          {/* heading,link and period */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-3 items-center">
              <h1 className="text-[#808080] font-medium text-[36px]">
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
                  className="w-7 h-7 object-contain"
                />
              </Link>
            </div>
            <h3 className="text-white">{selectedProject.period}</h3>
          </div>
          {/* heading,link and period */}
          {/* description */}
          <h3 className="text-[#808080] font-medium text-[16px]">
            Description:
          </h3>
          <p className="text-white">{selectedProject.projectDescription}</p>
          {/* description */}
          {/* tech stack and the journey */}
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col w-1/3 gap-3">
              <h2 className="text-[#808080] font-medium">Tech Stack:</h2>
              <div className="flex flex-row flex-wrap gap-2">
                {selectedProject.techStack.map((ts, index) => (
                  <p key={index} className="text-white font-light">
                    {ts}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 w-2/3">
              <h2 className="text-[#808080] font-medium">The Journey:</h2>
              <div className="flex items-center justify-center mt-6">
                <div className="relative flex items-center justify-between w-full">
                  <div className="absolute top-3/4 left-0 right-0 h-[1.5px] bg-[#808080]"></div>

                  {selectedProject.theJourney.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="text-sm text-center text-white">
                        {step}
                      </span>
                      <div className="mt-2 relative flex items-center justify-center w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* tech stack and the journey */}
          {/* images container */}
          <div className="w-full flex flex-row gap-3 overflow-x-auto custom-scrollbar-2">
            {selectedProject.projectImages.map((i, idx) => (
              <Image
                src={i}
                alt="project image"
                key={idx}
                className="w-[700px] h-[200px] rounded-[24px] drop-shadow-lg  object-fill"
              />
            ))}
          </div>
          {/* images container */}
        </div>
        {/* project content container */}
      </div>
      {/* main container */}
      <Link href="/projects" className="flex mt-5">
        <h2 className="font-medium bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D] bg-clip-text text-transparent text-[20px]">
          Visit the projects page
        </h2>
      </Link>
    </section>
  );
};

export default ProjectsComponent;
