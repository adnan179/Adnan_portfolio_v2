"use client";
import { useEffect } from "react";
import { Loading } from "@/utils/LoadingSpinner";
import { lazy, Suspense } from "react";
import { useNav } from "@/context/NavContext";

// Lazy load components
const Hero = lazy(() => import("@/components/home/Hero"));
const ProjectsComponent = lazy(() =>
  import("@/components/projects/ProjectsComponent")
);
const SpeedySnapshot = lazy(() => import("@/components/home/SpeedySnapshot"));

export default function Home() {
  const { isLoading, setIsLoading } = useNav();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="w-full min-h-screen -mt-[80px] pb-[50px] overflow-hidden">
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Hero />
          <SpeedySnapshot />
          <ProjectsComponent />
        </Suspense>
      )}
    </div>
  );
}
