"use client";
import { Loading } from "@/utils/LoadingSpinner";
import React, { useEffect, useState } from "react";
import ServicesPage from "@/components/services/ServicesPage";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center gap-5 mt-[-80px]">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ServicesPage />
        </>
      )}
    </div>
  );
};

export default Services;
