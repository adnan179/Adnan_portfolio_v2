"use client";
import { allProjectsData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectsPart = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const handlePagination = () => {
    setVisibleProjects((prev) => prev + 2);
  };

  return (
    <div className="flex flex-col gap-10 w-full min-h-screen lg:px-10 md:px-8 px-4 pb-[100px]">
      {/* projects */}
      {allProjectsData.slice(0, visibleProjects).map((project, idx) => (
        <div key={idx} className="flex flex-col">
          {/* heading and period */}
          <div className="flex flex-row gap-2 items-center">
            <h1 className="text-white text-[36px] font-bold font-Montserrat">
              {project.projectHeading}
            </h1>
            <h3 className="text-white/80 text-[14px] font-medium">
              {project.period}
            </h3>
          </div>
          {/* heading and period */}
          <div className="flex flex-row lg:gap-10 gap-4">
            {/* description, tech-stack, color palette, the journey */}
            <div className="flex flex-col gap-2 justify-start">
              <h3 className="text-[15px] text-[#808080] font-bold">
                Description:
              </h3>
              <p className="text-[16px] text-white">
                {project.projectDescription}
              </p>
              <div className="flex flex-col p-5 gap-2 rounded-[24px] drop-shadow-lg bg-[#171717]">
                <h3 className="text-[15px] text-[#808080] font-bold">
                  Tech Stack:
                </h3>
                <div className="flex flex-row gap-2">
                  {project.techStack.map((ts, idx) => (
                    <p key={idx} className="text-[16px] font-medium">
                      {ts}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col p-5 gap-2 rounded-[24px] drop-shadow-lg bg-[#171717]">
                <h3 className="text-[15px] text-[#808080] font-bold">
                  Color Palette:
                </h3>
                <div className="flex flex-row gap-2">
                  {project.colorPalette.map((cp) => (
                    <div key={cp} className="flex flex-row gap-1 items-center">
                      <div
                        className="flex w-4 h-4 border border-white"
                        style={{ backgroundColor: cp }}
                      ></div>
                      <p className="text-[16px] font-medium">{cp}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col p-5 gap-2 rounded-[24px] drop-shadow-lg bg-[#171717]">
                <h3 className="text-[15px] text-[#808080] font-bold">
                  The Journey:
                </h3>
                <div className="flex flex-row flex-wrap">
                  {project.theJourney.map((tj) => (
                    <p key={tj} className="text-[16px] font-medium">
                      {tj}-&gt;
                    </p>
                  ))}
                </div>
              </div>

              <Link
                href={project.projectLink}
                className="text-[16px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D]"
              >
                Visit the Site
              </Link>
            </div>
            {/* description, tech-stack, color palette, the journey */}
            {/* images */}
            <div className="flex lg:flex-col flex-row lg:h-[500px] gap-2 overflow-auto min-w-[450px] custom-scrollbar-3">
              {project.projectImages.map((pm, i) => (
                <Image
                  src={pm}
                  alt="project-images"
                  key={i}
                  className="rounded-[24px] h-[200px]"
                />
              ))}
            </div>
            {/* images */}
          </div>
        </div>
      ))}
      {/* projects */}
      {/* view more btn */}
      <div className="flex w-full justify-center items-center">
        {visibleProjects < allProjectsData.length && (
          <button
            onClick={handlePagination}
            className="font-medium text-[14px] text-[#808080] hover:text-white hover:scale-105 transition ease-in-out duration-200"
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectsPart;
