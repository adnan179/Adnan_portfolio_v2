"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import curveArrow from "../public/mystory/curve-down-arrow.png";
import { Loading } from "@/utils/LoadingSpinner";
import Hero from "@/components/mystory/Hero";
import LinksContainer from "@/components/mystory/LinksContainer";
import TheResume from "@/components/mystory/TheResume";
import MyTechStack from "@/components/mystory/MyTechStack";
import Certifications from "@/components/mystory/Certifications";
import MyJourneySoFar from "@/components/mystory/MyJourneySoFar";
import MyUniverse from "@/components/mystory/myUniverse";

const MyStory = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <h1 className="font-Montez text-[96px] text-white">My Universe</h1>
            <Image
              src={curveArrow}
              alt="curve-down-arrow"
              className="w-32 h-32 object-contain"
            />
          </div>
          <MyUniverse />
        </>
      )}
    </section>
  );
};

export default MyStory;
