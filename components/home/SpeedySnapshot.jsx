import React from "react";
import SectionHeading from "../SectionHeading";
import closeUp from "../../app/public/home/portfolio_profile_close_up.jpg";
import Image from "next/image";
import { degreeAndDeeds, footerLinks, hobbies, skills } from "@/data";
import world from "../../app/public/home/world.gif";
import Link from "next/link";
import resume from "../../app/public/icons/resume_icon.ico";

const SpeedySnapshot = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:px-8 px-4">
      <div className="flex w-full justify-start items-center">
        <SectionHeading heading={"Speedy Snapshot"} />
      </div>
      {/* first row */}
      <div className="flex md:flex-row flex-col md:gap-8 gap-4 w-full justify-center items-center mt-5">
        {/* first row first col */}
        <div className="bg-[#171717] rounded-[24px] p-4 shadow-lg flex flex-row gap-3 drop-shadow-lg sm:w-[600px] w-full">
          <Image
            src={closeUp}
            alt="another weird look of mine lol!"
            className="lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px] w-[130px] h-[130px] md:rounded-bl-[64px] md:rounded-tr-[64px] rounded-bl-[36px] rounded-tr-[36px] shadow-lg"
          />
          <div className="flex flex-col gap-2 justify-center">
            <h2 className="text-white lg:text-[20px] md:text-[16px] text-[14px] font-bold">
              Adnan Shaik
            </h2>
            <p className="text-[#808080] lg:text-[16px] md:text-[14px] text-[12px] font-medium">
              A Front-end developer & UI/UX designer
            </p>
            <p className="text-white font-light lg:text-sm md:text-[12px] text-[10px]">
              Crafting pixels and code into seamless, eye-catching
              experiences—guess who’s behind your next favorite website?
            </p>
          </div>
        </div>
        {/* first row first col */}
        {/* first col second col */}
        <div className="flex flex-col gap-4">
          <div className="flex md:flex-row flex-col md:gap-2 gap-4">
            {/* social links */}
            <div className="bg-[#171717] rounded-[24px] drop-shadow-lg lg:w-[150px] lg:h-[130px] md:w-[120px] md:h-[90px] w-full flex-row flex md:px-2 px-4 py-3 flex-wrap md:gap-1 gap-3 justify-center items-center">
              {footerLinks.map((fl, index) => (
                <a
                  href={fl.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <Image
                    src={fl.icon}
                    alt={fl.name}
                    className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-12 h-12"
                  />
                </a>
              ))}
              <a href="/CV.pdf" rel="noopener noreferrer" target="_blank">
                <Image
                  src={resume}
                  alt="resume"
                  className="lg:w-8 lg:h-8 w-12 h-12"
                />
              </a>
            </div>
            {/* social links */}
            {/* click me cont */}
            <div className="lg:w-[250px] lg:h-[130px] h-[90px] w-full flex flex-col lg:gap-4 md:gap-1 gap-2 bg-gradient-to-r from-[#021EED] to-[#FB0D0D] rounded-[24px] drop-shadow-lg justify-center items-center lg:p-4 p-2">
              <h2 className="text-white lg:text-[14px] md:text-[12px]">
                Have a plan? Let&apos;s get started!
              </h2>
              <Link
                href="/services"
                className="text-white px-4 py-2 bg-black/70 rounded-2xl drop-shadow-md md:text-[12px]"
              >
                Click me!
              </Link>
            </div>
            {/* click me cont */}
          </div>
          {/* hobbies */}
          <div className="relative flex flex-row drop-shadow-lg lg:w-[400px] lg:h-[130px] md:w-[330px] sm:h-[90px] h-[150px] w-full">
            {hobbies.map((h, index) => (
              <div
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
        <div className="lg:w-[500px] lg:h-[200px] h-[200px] w-full rounded-[24px] bg-[#171717] flex flex-col gap-2 p-4 drop-shadow-lg">
          <h3 className="text-white font-medium text-[18px]">
            Degree and deeds
          </h3>
          <div className="flex items-center justify-center mt-6">
            <div className="relative flex items-center justify-between w-full">
              <div className="absolute top-[48%] left-0 right-0 h-[1.5px] bg-[#808080]"></div>
              {degreeAndDeeds.map((d, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <span className="sm:text-[10px] text-[8px] text-center text-white font-medium">
                    {d.period}
                  </span>
                  <div className="mt-2 relative flex items-center justify-center w-4 h-4 bg-white rounded-full"></div>
                  <span className="sm:text-[9px] text-[8px] text-center text-white">
                    {d.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* degree and deeds */}
        {/* skills */}
        <div className="lg:w-[360px] h-[200px] w-full rounded-[24px] bg-[#171717] flex flex-col gap-2 p-3 overflow-y-auto custom-scrollbar drop-shadow-lg">
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
          href="/mystory"
          className="lg:w-[200px] w-full h-[200px] rounded-[24px] bg-[#171717] flex flex-col items-center justify-center p-4 drop-shadow-lg"
        >
          <p className="text-white font-medium text-lg md:text-sm">
            Intrigued? Let&apos;s dive into my world!{" "}
          </p>
          <Image
            src={world}
            alt="world"
            width={120}
            height={120}
            className="object-cover"
            priority
          />
        </Link>
      </div>
      {/* second col second row */}
    </div>
  );
};

export default SpeedySnapshot;
