import { certificationsData } from "@/data";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
const Certifications = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#certificates-cont",
        start: "top 70%",
      },
    });
    tl.fromTo(
      "#certificates-cont",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    ).fromTo(
      "#certificates > a",
      {
        y: 100,
        opacity: 0,
      },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.3, ease: "power3.inOut" }
    );
  }, []);

  return (
    <div
      id="certificates-cont"
      className="flex flex-col gap-2 md:p-4 p-3 bg-[#101012] border border-[#808080]/10 drop-shadow-lg rounded-[24px] md:w-[320px] w-full"
    >
      <h1 className="text-white font-bold font-Montserrat text-[20px]">
        Certifications
      </h1>
      <div id="certificates" className="flex flex-wrap flex-row gap-2">
        {certificationsData.map((cer, idx) => (
          <a
            target="_blank"
            href={cer.link}
            key={idx}
            className="flex flex-col rounded-[16px] p-3"
            style={{ backgroundColor: cer.colors[0] }}
          >
            <h2
              style={{ color: cer.colors[1] ? cer.colors[1] : "white" }}
              className="text-sm font-medium"
            >
              {cer.provider}
            </h2>
            <h3 className="text-white text-[10px]">{cer.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
