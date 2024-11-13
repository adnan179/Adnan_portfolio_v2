"use client";
import React, { useEffect, useState } from "react";
import { Loading } from "@/utils/LoadingSpinner";
import Hero from "@/components/projects/Hero";
import ProjectsSection from "@/components/projects/ProjectsSection";

const ProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full min-h-screen text-white pb-[100px]">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <ProjectsSection />
        </>
      )}
    </section>
  );
};

export default ProjectsPage;
