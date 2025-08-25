"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import cat from "../app/public/home/black-cat-on-book.jpg";
import { socialLinks } from "@/data/socialLinksData";
import Link from "next/link";
import _ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(_ScrollTrigger);

const Footer = () => {

  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "top 100%",
        toggleActions: "play none none reset",
      },
      defaults: { ease: "power4.out" },
    });

    tl.fromTo("#footer", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 })
      .fromTo(
        "#footer-heading",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35 },
        "<0.1"
      )
      .fromTo(
        "#footer-input",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35 },
        "<0.1"
      )
      .fromTo(
        "#footer-input > *",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 },
        "<0.05"
      )
      .fromTo(
        "#footer-links > *",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 },
        "<0.05"
      )
      .fromTo(
        "#black-cat",
        { y: 30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5 },
        "<0.1"
      )
      .fromTo(
        "#copy-rights",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "<0.05"
      );
  }, []);

  return (
    <footer
      id="footer"
      className="flex sm:flex-row flex-col-reverse gap-5 p-3 md:p-5 md:pl-6 lg:pl-10 justify-between items-center w-full bg-[#101012] rounded-[36px] shadow-[inset_0_4px_4px_rgba(0,0,0,0.2),_inset_0_4px_4px_rgba(0,0,0,0.1),_0_4px_4px_rgba(0,0,0,0.25)]"
    >
      <div className="w-auto flex flex-col md:gap-7 gap-5">
        <h1
          id="footer-heading"
          className="xl:text-[2rem] md:text-[1.5rem] text-[1rem] text-white/90 font-bold font-robot"
        >
          Got a concept brewing? Let’s turn it into reality!
        </h1>
        <div
          id="footer-input"
        >
          <p className="text-white/90 font-medium text-[1rem]">Reach out to me on my mail: adnanshaik179@gmail.com</p>
          
        </div>
        <div id="footer-links" className="flex gap-5 flex-wrap">
          {socialLinks.map((sl, idx) => (
            <Link
              key={idx}
              href={
                sl.name === "Gmail"
                  ? `mailto:${sl.gmail}`
                  : sl.link
              }
              target={sl.name === "Gmail" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-[#171717] rounded-[10px] justify-center items-center"
            >
              {sl.icon}
            </Link>
          ))}
        </div>
        <p id="copy-rights" className="text-white/90 text-sm lg:text-lg">
          Copy rights @Adnan Shaik{" "}
          <span className="font-light text-[10px] md:text-sm text-white/60">
            (front-end developer & UI/UX designer)
          </span>
        </p>
      </div>
      <div id="black-cat">
        <Image
          src={cat}
          alt="black cat on a book"
          className="md:w-[300px] md:h-[300px] object-contain rounded-[24px] drop-shadow-sm"
        />
      </div>
    </footer>
  );
};

export default Footer;
