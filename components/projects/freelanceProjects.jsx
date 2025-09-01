"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { freelanceProjectsData } from "@/data";
import linkIcon from "../../app/public/icons/icons8-link-64.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FreelanceProjects = () => {
  const [selectedProject, setSelectedProject] = useState(freelanceProjectsData[0]);
  const [selectedProjectName, setSelectedProjectName] = useState(
    freelanceProjectsData[0].projectName
  );

  // refs
  const sectionRef = useRef(null);
  const linksRef = useRef(null);
  const contentRef = useRef(null);
  const bulletPointsRef = useRef([]);
  const imagesRef = useRef([]);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setSelectedProjectName(project.projectName);
  };

  // 👉 Initial section animations when scrolling in
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // animate when 80% of section enters viewport
          toggleActions: "play none none none",
        },
      });

      tl.from(linksRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          contentRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          bulletPointsRef.current,
          {
            x: -20,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 👉 Animate bullet points and images when switching projects
  useEffect(() => {
    if (bulletPointsRef.current.length > 0) {
      gsap.fromTo(
        bulletPointsRef.current,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }

    if (selectedProject.projectImages?.length > 0) {
      const validImages = imagesRef.current.filter(Boolean);
      if (validImages.length > 0) {
        gsap.fromTo(
          validImages,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.15,
            delay: 0.1,
          }
        );
      }
    }

    // reset refs
    imagesRef.current = [];
    bulletPointsRef.current = [];
  }, [selectedProject]);

  return (
    <section ref={sectionRef}>
      <div className="flex lg:flex-row flex-col gap-3 w-full h-full md:mt-0 mt-5">
        {/* links container */}
        <div className="flex md:flex-row flex-col gap-2 lg:w-1/6 w-full h-full">
          <div
            ref={linksRef}
            id="project-links"
            className="flex lg:flex-col flex-row gap-4 flex-wrap bg-[#101012] xl:p-6 lg:p-4 p-5 rounded-[36px] drop-shadow-lg"
          >
            {freelanceProjectsData.map((project, index) => (
              <h2
                onClick={() => handleSelectProject(project)}
                key={index}
                className={`flex font-inter font-medium md:text-sm text-[12px] cursor-pointer ${
                  selectedProjectName === project.projectName
                    ? "glowing-text"
                    : "text-[#808080]/80"
                }`}
              >
                {project.projectName}
              </h2>
            ))}
          </div>
        </div>

        {/* project content container */}
        <div
          ref={contentRef}
          className="flex flex-col md:gap-4 gap-2 lg:w-5/6 w-full md:mt-0 mt-5 lg:px-0 px-4"
        >
          {/* heading, link and period */}
          <div className="flex flex-col gap-1">
            <div id="project-heading" className="flex flex-row gap-3 items-center">
              <h1 className="text-[#808080] font-medium xl:text-[36px] text-[22px]">
                {selectedProject.projectHeading}
              </h1>
              {selectedProject.projectLink && (
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
              )}
            </div>
            <h3 id="project-period" className="text-white text-[14px] xl:text-[16px]">
              {selectedProject.period}
            </h3>
          </div>

          {/* highlights */}
          <h3 id="project-desc-heading" className="text-[#808080] font-medium text-[16px]">
            Highlights:
          </h3>
          <ul className="flex flex-col gap-2 text-white text-[12px] xl:text-[14px] list-disc pl-6">
            {selectedProject.bulletPoints.map((point, idx) => (
              <li key={idx} ref={(el) => (bulletPointsRef.current[idx] = el)}>
                {point}
              </li>
            ))}
          </ul>

          {/* tech stack */}
          <div className="flex flex-col gap-3 w-full bg-[#171717] rounded-[36px] xl:p-5 lg:p-3 p-5 drop-shadow-lg mt-4">
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

          {/* images container */}
          {selectedProject.projectImages?.length > 0 && (
            <div
              id="project-images"
              className="w-full flex flex-row gap-3 overflow-x-auto custom-scrollbar-2 mt-4"
            >
              {selectedProject.projectImages.map((i, idx) => (
                <Image
                  src={i}
                  alt="project image"
                  key={idx}
                  ref={(el) => (imagesRef.current[idx] = el)}
                  className="sm:w-[500px] w-full sm:h-[250px] h-[150px] rounded-[24px] drop-shadow-lg"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* visit projects link */}
      <Link id="visit-the-projects-page" href="/projects" className="flex mt-5">
        <h2 className="font-medium bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D] bg-clip-text text-transparent md:text-[20px] text-[14px]">
          Visit the projects page
        </h2>
      </Link>
    </section>
  );
};

export default FreelanceProjects;
