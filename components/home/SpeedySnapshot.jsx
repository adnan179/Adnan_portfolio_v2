"use client";
import React, { useEffect } from "react";
import profileImage from "../../app/public/home/Media.jpeg";
import Image from "next/image";
import {
  skills,
  hobbies,
  socialLinks,
  essentialToolsData,
  degreeAndDeeds,
} from "@/data";
import world from "../../app/public/home/world.gif";
import Link from "next/link";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(_ScrollTrigger);

const SpeedySnapshot = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#speedy-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      "#speedy-heading",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
    )
      .fromTo(
        "#bio-cont",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        "-=0.15"
      )
      .fromTo(
        "#social-links",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(
        "#essential-tools",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(
        "#hobbies",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out", stagger: 0.1 },
        "-=0.1"
      )
      .fromTo(
        "#degree-and-deeds",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(
        "#skills",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(
        "#world",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" },
        "-=0.15"
      );
  }, []);

  return (
    <section
      id="speedy-section"
      className="w-full min-h-screen flex flex-col xl:px-8 md:px-6 px-4"
    >
      {/* heading */}
      <div className="flex w-full justify-start items-center">
        <h1
          id="speedy-heading"
          className="bg-gradient-to-r from-[#808080]/50 via-[#808080] to-[#808080]/50  bg-clip-text text-transparent font-Montserrat font-semibold drop-shadow-lg lg:text-[48px] text-[36px]"
        >
          Speedy Snapshots
        </h1>
      </div>
      {/* heading */}
      {/* first row */}
      <div className="flex md:flex-row flex-col md:gap-6 gap-4 w-full justify-center items-center mt-5">
        {/* first row first col */}
        <div
          id="bio-cont"
          className="bg-[#101012] rounded-[24px] p-4 shadow-lg flex flex-row gap-3 drop-shadow-lg sm:w-[600px] w-full"
        >
          <Image
            src={profileImage}
            alt="just a bit-emoji of me and my cat!"
            className="xl:w-[250px] xl:h-[250px] md:w-[150px] md:h-[150px] w-[130px] h-[130px] md:rounded-bl-[64px] md:rounded-tr-[64px] rounded-bl-[24px] rounded-tr-[24px] shadow-lg object-contain"
          />
          <div className="flex flex-col gap-2 justify-center">
            <h2 className="text-white lg:text-[20px] md:text-[16px] text-[14px] font-bold">
              Adnan Shaik
            </h2>
            <p className="text-[#808080] lg:text-[16px] md:text-[14px] text-[12px] font-medium">
              A Front-end developer & UI/UX designer
            </p>
            <p className="text-white font-light lg:text-sm md:text-[12px] text-[10px]">
            <strong>Need a website that looks stunning and actually works for you?</strong> That’s where I come in — crafting <strong>seamless, user-friendly solutions</strong> that <strong>save time</strong> and <strong>grow your business</strong>.
            </p>
          </div>
        </div>
        {/* first row first col */}
        {/* first col second col */}
        <div className="flex flex-col gap-3">
          <div className="flex md:flex-row flex-col md:gap-2 gap-4">
            {/* social links */}
            <div
              id="social-links"
              className="w-full flex-row flex flex-wrap bg-[#101012] rounded-[24px] drop-shadow-lg justify-center items-center lg:w-[200px] lg:h-[150px] md:w-[120px] md:h-[90px] gap-2 p-3"
            >
              {socialLinks.map((fl, index) => (
                <a
                  key={index}
                  href={
                    fl.name === "Gmail"
                      ? `mailto:${fl.gmail}` // 'mailto:' to open the mail client
                      : fl.link // For other links
                  }
                  target={fl.name === "Gmail" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex p-[5px] bg-black/30 rounded-[10px] justify-center items-center hover:scale-125 transition duration-200 ease-in-out"
                >
                  {fl.icon}
                </a>
              ))}
            </div>
            {/* social links */}
            {/* essential tools icons */}
            <div
              id="essential-tools"
              className="flex flex-col gap-2 w-full md:w-[300px] p-4 rounded-[24px] bg-[#101012] drop-shadow-md"
            >
              <h1 className="text-white font-bold font-robot text-[20px]">
                Essential Tools
              </h1>
              <p className="text-[#808080] text-[10px] font-inter">
                A Comprehensive Collection of Useful Tools to Support and
                Optimize My Workflow
              </p>
              <div className="flex flex-wrap gap-3">
                {essentialToolsData.map((i, idx) => (
                  <Image
                    src={i.icon}
                    alt={i.name}
                    key={idx}
                    className="w-[30px] h-[30px] object-fill rounded-md"
                  />
                ))}
              </div>
            </div>
            {/* essential tools icons */}
          </div>
          {/* hobbies */}
          <div className="relative flex flex-row drop-shadow-lg lg:w-[450px] lg:h-[130px] md:w-[330px] sm:h-[90px] h-[150px] w-full">
            {hobbies.map((h, index) => (
              <div
                id="hobbies"
                key={index}
                className="relative w-1/5 h-full justify-center items-center first:rounded-l-[24px] last:rounded-r-[24px] overflow-hidden"
              >
                <h3 className="absolute inset-0 flex justify-center items-center font-QwitcherGrypen text-white text-center z-10">
                  {h.name}
                </h3>
                <Image
                  src={h.img}
                  alt={h.name}
                  className="object-cover w-full h-full"
                />
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-30 z-5"></div>
              </div>
            ))}
          </div>
          {/* hobbies */}
        </div>
        {/* first col second col */}
      </div>
      {/* first col first col */}
      {/* second col second row */}
      <div className="flex md:flex-row flex-col gap-4 w-full justify-center items-center mt-5">
        {/* degree and deeds */}
        <div
          id="degree-and-deeds"
          className="xl:w-[500px] xl:h-[200px] lg:w-[400px] sm:h-[200px] w-full rounded-[24px] bg-[#101012]  flex flex-col gap-2 p-4 drop-shadow-lg"
        >
          <h3 className="text-white font-medium text-[18px]">
            Degree and deeds
          </h3>
          <div className="flex items-center justify-center mt-2">
            <div className="flex flex-row gap-2 items-center w-full">
              {degreeAndDeeds.map((d, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-black/50 w-1/4 sm:h-[130px] h-[90px] text-white sm:p-3 p-2 rounded-[24px] justify-center items-center gap-1 font-bold"
                >
                  <span className="sm:text-[10px] text-[6.5px] text-center">
                    {d.period}
                  </span>
                  <div className="flex w-full h-[1.5px] bg-[#808080]"></div>

                  <span className="sm:text-[10px] text-[6.5px] text-center font-medium">
                    {d.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* degree and deeds */}
        {/* skills */}
        <div
          id="skills"
          className="lg:w-[360px] h-[200px] w-full rounded-[24px] bg-[#101012]  flex flex-col gap-2 p-3 overflow-y-auto custom-scrollbar drop-shadow-lg"
        >
          {skills.map((sk, index) => (
            <div key={index} className="flex flex-col gap-1 px-2 w-full">
              <h3 className="text-[#808080] font-medium text-[14px]">
                {sk.skillSet}
              </h3>
              <div className="w-full h-[2px] bg-gradient-to-r from-[#808080]/50 via-[#808080] to-[#808080]/50 rounded-md"></div>
              <div className="flex flex-row flex-wrap gap-2">
                {sk.skills.map((s, i) => (
                  <p key={i} className="text-white font-light text-[12px]">
                    {s}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* skills */}

        <Link
          id="world"
          href="/mystory"
          className="lg:w-[200px] w-full h-[200px] rounded-[24px] bg-[#101012]  flex flex-col items-center justify-center p-4 drop-shadow-lg:"
        >
          <p className="text-white font-medium text-lg md:text-sm">
            Intrigued? Let&apos;s dive into my world!{" "}
          </p>
          <Image
            src={world}
            alt="world"
            width={120}
            height={120}
            className="object-cover hover:scale-150 transition duration-300 ease-in-out"
            priority
          />
        </Link>
      </div>
      {/* second col second row */}
    </section>
  );
};

export default SpeedySnapshot;
