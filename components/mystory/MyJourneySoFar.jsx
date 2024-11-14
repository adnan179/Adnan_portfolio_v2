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
        start: "top 70%",
      },
    });
    tl.fromTo(
      "#my-journey-so-far",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.inOut" }
    )
      .fromTo(
        "#my-journey-so-far > h2",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#experiences > *",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.inOut", stagger: 0.3 }
      );
  }, []);
  return (
    <div
      id="my-journey-so-far"
      className="flex flex-col gap-3 drop-shadow-lg rounded-[36px] bg-[#040404]/80 border border-gray-600/50 w-auto sm:p-5 p-4"
    >
      <h2 className="font-medium font-Montserrat text-white sm:text-[24px] text-[16px]">
        My Journey So Far!
      </h2>
      <div id="experiences" className="flex flex-col gap-2 w-full">
        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-row justify-between items-center w-full"
          >
            <div className="flex flex-row gap-1 w-[70%] flex-wrap">
              {exp.icon && (
                <Image
                  src={exp.icon}
                  alt={exp.company}
                  className="w-8 h-8 object-contain rounded-lg"
                />
              )}

              <div className="flex flex-col gap-1">
                <h3 className="text-white font-medium text-sm">
                  {exp.position}
                </h3>
                <h4 className="text-gray-600 text-[12px]">{exp.company}</h4>
              </div>
            </div>
            <h2 className="text-white font-medium text-[10px]">{exp.period}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyJourneySoFar;
