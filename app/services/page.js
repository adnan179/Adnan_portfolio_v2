"use client";
import { Loading } from "@/utils/LoadingSpinner";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import site from "../public/construction-site.gif";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen text-white font-bold text-[20px] justify-center items-center gap-5">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Image
            src={site}
            alt="construction-site"
            className="w-[250xp] h-[250px] object-contain"
            priority
          />
          <h1>
            The Services page is still under construction, hammering out the
            details—hang tight for the grand reveal!
          </h1>
        </>
      )}
    </div>
  );
};

export default Services;
