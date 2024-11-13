import { storySocialLinks } from "@/data";
import gsap from "gsap";
import React, { useEffect } from "react";

const LinksContainer = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#links-cont",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    ).fromTo(
      "#links-cont > *",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.inOut", stagger: 0.3 }
    );
  }, []);
  return (
    <div
      id="links-cont"
      className="sm:flex hidden flex-col gap-2  fixed z-50 lg:top-1/2 top-1/3 lg:right-3 right-0 transform -translate-y-1/2 p-[8px] rounded-[24px] drop-shadow-lg bg-[#040404] justify-center"
    >
      {storySocialLinks.map((fl, index) => (
        <a
          key={index}
          href={
            fl.name === "Gmail"
              ? `mailto:${fl.gmail}` // 'mailto:' to open the mail client
              : fl.link // For other links
          }
          target={fl.name === "Gmail" ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="flex p-[5px] bg-black/30 rounded-[10px] justify-center items-center"
        >
          {fl.icon}
        </a>
      ))}
    </div>
  );
};

export default LinksContainer;
