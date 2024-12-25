"use client";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Loading } from "@/utils/LoadingSpinner";
import { useNav } from "@/context/NavContext";

//lazy load components
const Hero = lazy(() => import("@/components/projects/Hero"));
const ProjectsSection = lazy(() =>
  import("@/components/projects/ProjectsSection")
);

const ProjectsPage = () => {
  const { isLoading, setIsLoading } = useNav();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <section className="w-full min-h-screen text-white pb-[100px]">
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Hero />
          <ProjectsSection />
        </Suspense>
      )}
    </section>
  );
};

export default ProjectsPage;
