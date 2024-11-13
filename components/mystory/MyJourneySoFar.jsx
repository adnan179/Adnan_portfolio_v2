import { experienceData } from "@/data";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

const MyJourneySoFar = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#my-journey-so-far",
        start: "top 100%",
      },
    });
    tl.fromTo(
      "#my-journey-so-far > *",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.inOut", stagger: 0.3 }
    );
  }, []);
  return (
    <div
      id="my-journey-so-far"
      className="flex flex-col gap-3 drop-shadow-lg rounded-[36px] bg-[#040404]/80 border border-gray-600/50 lg:w-[600px] md:w-[400px] w-full sm:h-[330px] h-[400px] overflow-y-auto custom-scrollbar sm:p-5 p-4"
    >
      <h2 className="font-medium font-Montserrat text-white sm:text-[24px] text-[16px]">
        My Journey So Far!
      </h2>
      {experienceData.map((exp, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-2 p-4 bg-[#171717]/50 rounded-[24px] "
        >
          <div className="flex flex-row justify-between items-center text-white font-medium font-inter">
            <div className="flex flex-row gap-1 items-center">
              {exp.icon && (
                <Image
                  src={exp.icon}
                  className="w-8 h-8 object-contain rounded-md"
                  alt={exp.company}
                />
              )}
              <div className="flex flex-col">
                <h2 className="text-[12px] xl:text-[16px]">{exp.position}</h2>
                <p className="text-gray-400 font-normal text-[10px] xl:text-[13px]">
                  {exp.company}
                </p>
              </div>
            </div>

            <h2 className="text-[12px] xl:text-[16px]">{exp.period}</h2>
          </div>
          <p className="bg-[#050505] text-white/80 font-inter p-2 rounded-[16px] text-[12px] xl:text-[16px]">
            {exp.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyJourneySoFar;
