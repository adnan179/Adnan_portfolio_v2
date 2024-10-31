"use client";
import Hero from "@/components/home/Hero";
import ProjectsComponent from "@/components/home/ProjectsComponent";
import SpeedySnapshot from "@/components/home/SpeedySnapshot";

import ShareYourThoughts from "@/components/home/ShareYourThoughts";
import { useEffect, useState } from "react";
import { Loading } from "@/utils/LoadingSpinner";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen -mt-[80px]">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <SpeedySnapshot />
          <ProjectsComponent />
          <ServicesSection />
          <ShareYourThoughts />
        </>
      )}
    </div>
  );
}
