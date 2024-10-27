"use client";
import React, { useEffect, useState } from "react";
import { Loading } from "@/utils/LoadingSpinner";
import Hero from "@/components/projects/Hero";
import ProjectsPart from "@/components/projects/ProjectsPart";

const ProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="w-full min-h-screen text-white xl:px-24 lg:px-16 md:px-10 sm:px-8 px-6">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-2">
          <Hero />
          <ProjectsPart />
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
