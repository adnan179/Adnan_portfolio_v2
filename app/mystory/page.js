"use client";
import React, { useEffect, useState } from "react";
import { Loading } from "@/utils/LoadingSpinner";
import Hero from "@/components/mystory/Hero";
import Certifications from "@/components/mystory/Certifications";
import MyJourneySoFar from "@/components/mystory/MyJourneySoFar";
import MyTechStack from "@/components/mystory/MyTechStack";
import SpotifyEmbed from "@/components/mystory/SpotifyEmbed";
import NotionTemplates from "@/components/mystory/NotionTemplates";

const MyStory = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col w-full min-h-screen pb-[100px] xl:px-20 lg:px-14 md:px-14 sm:px-12 px-5">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <div className="flex flex-row flex-wrap gap-3 mt-10 justify-center">
            <MyJourneySoFar />
            <MyTechStack />
            <Certifications />
          </div>
          <div className="w-full flex md:flex-row flex-col gap-3 mt-5 justify-center">
            <div className="md:w-[50%] w-full">
              <SpotifyEmbed />
            </div>
            <div className="w-full md:w-[25%]">
              <NotionTemplates />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default MyStory;
