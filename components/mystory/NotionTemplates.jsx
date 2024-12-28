import gsap from "gsap";
import React, { useEffect } from "react";
import { SiNotion } from "react-icons/si";
const NotionTemplates = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#notion-templates",
        start: "top 70%",
      },
    });
    tl.fromTo(
      "#notion-templates",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.inOut" }
    );
  }, []);
  return (
    <div
      id="notion-templates"
      className="flex w-full h-[200px] md:h-full flex-col p-4 rounded-[24px] border border-[#808080]/10 bg-[#101012] drop-shadow-md"
    >
      <div className="flex gap-3 items-center">
        <div className="rounded-md bg-white p-[2px]">
          <SiNotion className="w-[30px] h-[30px]" />
        </div>
        <h1 className="font-semibold font-robot text-white text-[20px]">
          Notion Templates
        </h1>
      </div>
      <p className="flex justify-center items-center h-full w-full font-robot text-gray-600">
        Coming Soon!
      </p>
    </div>
  );
};

export default NotionTemplates;
