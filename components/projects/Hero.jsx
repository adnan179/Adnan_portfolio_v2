import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import blackCatLaptop from "../../app/public/projects/black-cat-laptop.jpg";

const Hero = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      "#main-heading",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4 }
    )
      .fromTo(
        "#sub-heading",
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.35 },
        "<0.1" // start slightly overlapping previous
      )
      .fromTo(
        "#black-cat-image",
        { y: 50, opacity: 0, scale: 0.7 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6 },
        "<0.15" // overlap for smoothness
      )
      .fromTo(
        "#desc",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "<0.1" // slight overlap for natural flow
      );
  }, []);

  return (
    <section
      id="projects-hero"
      className="flex flex-col w-full xl:px-24 lg:px-16 md:px-10 sm:px-8 px-6 pt-10 pb-20"
    >
      <div className="flex flex-col font-Montserrat justify-start">
        <div className="w-full flex flex-row justify-between md:items-center">
          <div className="flex flex-col">
            <h1
              id="main-heading"
              className="xl:text-[120px] lg:text-[84px] md:text-[76px] sm:text-[54px] text-[36px]"
            >
              PROJECTS
            </h1>
            <h1
              id="sub-heading"
              className="font-medium xl:text-[64px] lg:text-[56px] md:text-[48px] sm:text-[30px] text-[28px] md:-mt-6 -mt-2"
            >
              selection
            </h1>
          </div>

          <Image
            id="black-cat-image"
            src={blackCatLaptop}
            alt="Buddy working on a new project!"
            className="flex object-cover lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[75px] h-[75px] rounded-lg shadow-inner"
          />
        </div>
      </div>
      <div className="flex w-full justify-end mt-10">
        <p
          id="desc"
          className="xl:w-[500px] lg:w-[450px] md:w-[400px] font-inter xl:text-[22px] lg:text-[20px] text-[16px] text-justify"
        >
          Over the past two years, I’ve <strong>helped</strong> businesses and individuals <strong>turn</strong> their ideas into functional, user-friendly digital products. Whether it’s a dashboard to <strong>simplify</strong> daily operations, a platform to <strong>manage</strong> customers and sales in real time, or a sleek website that <strong>elevates</strong> brand presence, I focus on <strong>delivering</strong> solutions that work and scale. I <strong>handle</strong> everything end-to-end — from <strong>designing</strong> intuitive interfaces in Figma to <strong>developing</strong> responsive, interactive applications with React, Next.js, Node.js, and MongoDB. My goal is simple: <strong>build</strong> tools that <strong>save</strong> you time, <strong>improve</strong> efficiency, and <strong>create</strong> seamless experiences for your users.
        </p>
      </div>
    </section>
  );
};

export default Hero;
