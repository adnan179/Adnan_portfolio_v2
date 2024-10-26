"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import site from "../public/construction-site.gif";
import { Loading } from "@/utils/LoadingSpinner";
import Hero from "@/components/projects/Hero";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="flex flex-col w-full min-h-screen text-white xl:px-24 lg:px-16 md:px-10 sm:px-8 px-6">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Hero />
        </>
      )}
    </section>
  );
};

export default Projects;
