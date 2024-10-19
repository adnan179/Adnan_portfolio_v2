"use client";
import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import hero from "../../app/public/home/hero_image_portfolio.jpg";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#hero-section-1 > *",
      { x: "-150%" },
      { x: "0%", duration: 1, ease: "power1.inOut", delay: 0.7, stagger: 0.4 }
    )
      .fromTo(
        "#hero-image",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power1.inOut" }
      )
      .to("#hey-text", {
        rotation: 10,
        y: 15,
        yoyo: true,
        repeat: -1,
        duration: 0.8,
        ease: "power1.inOut",
        delay: 0.5,
      });
  }, []);

  return (
    <section className="relative w-full min-h-screen flex md:flex-row md:justify-between justify-center items-center lg:px-16 md:px-8 px-6 md:-mt-[200px] lg:mt-0">
      <div className="bg-[#2B0CFD]/50 absolute top-[-6rem] -z-10 md:right-[8rem] right-0 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

      <div
        id="hero-section-1"
        className="flex flex-col lg:gap-5 md:gap-3 gap-5 text-white font-medium md:w-[55%] lg:w-[65%] w-full h-full items-start"
      >
        <h1
          id="hey-text"
          className="font-MajorMonoDisplay lg:text-[76px] text-[48px]"
        >
          Hey👋
        </h1>
        <h2 className="font-inter lg:text-[27px] text-[18px]">
          Welcome to my digital living room where caffeine burns into code &
          design—
        </h2>
        <h2 className="flex sm:flex-row md:flex-col flex-col gap-2 font-inter text-[24px]">
          I&apos;m a{" "}
          <div
            id="front-end"
            className="bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D] bg-clip-text text-transparent lg:-rotate-2 lg:text-[24px] text-[30px]"
          >
            front-end developer
          </div>{" "}
          &{" "}
          <div className="bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D] bg-clip-text text-transparent lg:-rotate-2 lg:text-[24px] text-[30px]">
            UI/UX Designer
          </div>
        </h2>
        <h2 className="font-inter lg:text-[27px] text-[18px]">
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
      <div className="lg:w-[35%] md:w-[45%] hidden md:flex h-full justify-center items-center">
        <div
          id="hero-image"
          className="flex lg:w-[300px] lg:h-[500px] w-[200px] h-[400px] rounded-[200px] shadow-lg bg-gradient-to-b from-[#685731] to-[#06040E] rotate-6"
        >
          <Image
            src={hero}
            alt="my handsome face lol!"
            className="z-30 w-full h-full p-[10px] rounded-[200px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-20 rounded-[200px] z-40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
