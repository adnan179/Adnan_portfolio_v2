"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Loading } from "@/utils/LoadingSpinner";
import coffee from "../public/coffee-brewing-gif.gif";
import Hero from "@/components/mystory/Hero";
import LinksContainer from "@/components/mystory/LinksContainer";
import TheResume from "@/components/mystory/TheResume";
import MyTechStack from "@/components/mystory/MyTechStack";
import Certifications from "@/components/mystory/Certifications";
import MyJourneySoFar from "@/components/mystory/MyJourneySoFar";

const MyStory = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col w-full min-h-screen justify-center items-center pb-[100px] xl:px-20 lg:px-14 md:px-14 sm:px-12 px-5">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <LinksContainer />
          <div className="flex md:flex-row flex-col gap-3 mt-14">
            <MyTechStack />
            <TheResume />
          </div>
          <div className="sm:mt-5 mt-2 flex md:flex-row flex-col-reverse gap-3">
            <Certifications />
            <MyJourneySoFar />
          </div>
        </>
      )}
    </section>
  );
};

export default MyStory;
