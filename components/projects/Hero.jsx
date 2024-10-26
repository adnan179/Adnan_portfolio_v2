import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col font-Montserrat justify-start">
        <h1 className="xl:text-[120px] lg:text-[84px] md:text-[76px] sm:text-[56px] text-[48px]">
          PROJECTS
        </h1>
        <h1 className="font-medium xl:text-[64px] lg:text-[56px] md:text-[48px] sm:text-[36px] text-[32px] md:-mt-6 -mt-2">
          selection
        </h1>
      </div>
      <div className="flex w-full justify-end lg:-mt-8 md:-mt-4 sm:-mt-2 mt-4">
        <p className="xl:w-[500px] lg:w-[450px] md:w-[400px] font-inter font-medium xl:text-[22px] lg:text-[20px] text-[16px] text-justify">
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
    </div>
  );
};

export default Hero;
