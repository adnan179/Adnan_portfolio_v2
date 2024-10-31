"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Loading } from "@/utils/LoadingSpinner";
import coffee from "../public/coffee-brewing-gif.gif";

const MyStory = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen  justify-center items-center gap-5 mt-[-80px]">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Image
            src={coffee}
            alt="brewing-coffee"
            className="object-contain w-[300px] h-[200px]"
            priority
          />

          <h1 className="text-white font-bold text-[16px] font-MajorMonoDisplay">
            My story’s still brewing—pouring in the details for the perfect cup!
            ☕ Hang tight for the full flavor reveal!
          </h1>
        </>
      )}
    </div>
  );
};

export default MyStory;
