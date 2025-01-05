import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import blackCatLaptop from "../../app/public/projects/black-cat-laptop.jpg";

const Hero = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#main-heading",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    )
      .fromTo(
        "#sub-heading",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#black-cat-image",
        { z: -200, opacity: 0, scale: 0.5 },
        { z: 0, opacity: 1, scale: 1.2, duration: 1, ease: "power3.inOut" }
      )
      .fromTo(
        "#desc",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
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
          className="xl:w-[500px] lg:w-[450px] md:w-[400px] font-inter font-medium xl:text-[22px] lg:text-[20px] text-[16px] text-justify"
        >
          Over the past two years, I have embarked on an exciting journey with
          JavaScript, honing my skills in both the design and development of
          websites. Through various projects and hands-on experience, I’ve
          developed proficiency in frameworks and technologies like React,
          Next.js, Node.js, Express.js, and MongoDB. My technical expertise
          extends to Firebase for backend services, and I bring interactivity to
          life with GSAP and Three.js. In addition to development, I design
          seamless, user-centric web applications using Figma. This blend of
          design and development has fueled my freelance journey, enabling me to
          deliver impactful, engaging solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
