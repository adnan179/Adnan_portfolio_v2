import Image from "next/image";
import React from "react";
import heroImage from "../../app/public/home/hero_image_portfolio.jpg";
import Typewriter from "typewriter-effect";

const Hero1 = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <div className="flex gap-4 items-center p-2 md:p-3 rounded-[64px] border border-[#808080]/50 bg-[#101012]">
        <Image
          src={heroImage}
          alt="just me!"
          className="rounded-full md:w-[50px] md:h-[50px] w-[30px] h-[30px]"
        />
        <h1 className="font-Montez text-white md:text-[2rem] text-[1rem] md:pr-5 pr-3">
          I&apos;m Adnan Shaik
        </h1>
      </div>
      <div className="font-robot text-white font-medium md:text-[4rem] sm:text-[2rem] text-[1.5rem]">
        <Typewriter
          options={{
            strings: ["FRONT-END DEVELOPER", "UI/UX DESIGNER"],
            autoStart: true,
            loop: true,
            deleteSpeed: 70,
            delay: 50,
            pauseFor: 800,
          }}
        />
      </div>
      <h1 className="bg-gradient-to-r from-[#808080]/50 via-[#808080] to-[#808080]/50  bg-clip-text text-transparent font-Montserrat font-semibold drop-shadow-lg lg:text-[4.5rem] md:text-[4rem] sm:text-[3rem] text-[1.7rem]">
        Design. Develop. Deliver.
      </h1>
      <p className="text-white font-inter md:text-[22px] text-[8px] text-center font-light">
        Self-taught front-end developer from{" "}
        <span className="text-blue-900 font-bold">Bengaluru</span>, crafting
        immersive websites while <br /> diving deep into UI/UX and product
        design—where creativity meets code!
      </p>
      <button className="bg-white text-[#040404] font-semibold font-robot px-4 py-2 rounded-[36px] shadow-[0_0_15px_2px_rgba(255,255,255,0.5)]">
        Dive Into My Projects
      </button>
    </section>
  );
};

export default Hero1;
