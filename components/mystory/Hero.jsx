import Image from "next/image";
import React, { useEffect } from "react";
import world from "../../app/public/home/world.gif";
import gsap from "gsap";

const Hero = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#my-story-hero > *",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", stagger: 0.4 }
    ).fromTo(
      "#world",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.inOut" }
    );
  }, []);

  return (
    <section className="w-full h-full flex md:flex-row flex-col justify-start items-center">
      <div
        id="my-story-hero"
        className="flex flex-col text-white font-MajorMonoDisplay xl:text-[84px] lg:text-[64px] text-[48px]"
      >
        <h1>Welcome to my</h1>
        <h1>World</h1>
        <h1>I&apos;m</h1>
        <h1 className="font-bold font-Montserrat">Adnan Shaik</h1>
      </div>
      <div className="flex sm:w-[400px] sm:h-[400px] w-[250px] h-[250px]">
        <Image
          id="world"
          src={world}
          className="w-full h-full object-contain"
          alt="my world"
        />
      </div>
    </section>
  );
};

export default Hero;
