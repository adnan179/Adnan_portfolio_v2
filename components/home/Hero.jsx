"use client";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import hero from "../../app/public/home/hero_image_portfolio.jpg";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-row md:justify-between items-center lg:px-16 md:px-12 px-6">
      <div className="bg-[#2B0CFD]/50 absolute top-[-6rem] -z-10 md:right-[8rem] right-0 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

      <div className="flex flex-col gap-5 text-white font-medium md:w-[65%] w-full h-full justify-between items-start">
        <h1 className="font-MajorMonoDisplay sm:text-[76px] text-[56px]">
          Hey👋
        </h1>
        <h2 className="font-inter sm:text-[1.7rem] text-[1.3rem]">
          Welcome to my digital living room where caffeine burns into code &
          design —
        </h2>
        <h2 className="flex sm:flex-row flex-col gap-2 font-inter text-[24px]">
          I&apos;m a{" "}
          <div
            id="front-end"
            className="bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D] bg-clip-text text-transparent sm:-rotate-2 sm:text-[24px] text-[36px]"
          >
            front-end developer
          </div>{" "}
          &{" "}
          <div className="bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D] bg-clip-text text-transparent sm:rotate-3 sm:text-[24px] text-[36px]">
            UI/UX Designer
          </div>
        </h2>
        <h2 className="font-inter sm:text-[1.4rem] text-[1.1rem]">
          {" "}
          with a flair for creating immersive web magic!
        </h2>
        <a
          href="/CV.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="relative bg-transparent font-MajorMonoDisplay text-white text-[20px] flex flex-row gap-2 items-center hover:scale-105 transition ease-in-out duration-300 group"
        >
          View Resume
          <span>
            <GoArrowRight color="white" className="w-9 h-9" />
          </span>
          <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white rounded-sm"></span>
        </a>
      </div>
      <div className="md:w-[35%] hidden md:flex h-full justify-center items-center">
        <div className="flex w-[300px] h-[500px] rounded-[200px] shadow-lg bg-gradient-to-b from-[#685731] to-[#06040E] rotate-6">
          <Image
            src={hero}
            alt="my handsome face lol!"
            className="z-30 w-full h-full p-[10px] rounded-[200px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-20 rounded-[200px] z-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
