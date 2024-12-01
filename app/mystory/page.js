"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import coffee from "../public/coffee-brewing-gif.gif";
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
          <Image
            src={coffee}
            alt="brewing coffee"
            className="w-[600px] h-[300px] object-cover rounded-lg shadow-md shadow-blue-600"
          />
          <h1 className="font-QwitcherGrypen font-medium text-white sm:text-[3rem] text-[2rem] mt-4">
            Whipping up some experimental coffee magic—because why settle for
            good when you can have{" "}
            <span className="text-blue-700">legendary</span>&quot;
          </h1>
        </>
      )}
    </section>
  );
};

export default MyStory;
