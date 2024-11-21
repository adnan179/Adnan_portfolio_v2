import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(_ScrollTrigger);
const TheResume = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#the-resume",
        start: "top 50%",
      },
    });
    tl.fromTo(
      "#the-resume",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    )
      .fromTo(
        "#the-resume-heading",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#the-resume > p",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      );
  }, []);

  return (
    <div
      id="the-resume"
      className="flex flex-col sm:w-[700px] md:w-[400px] lg:w-[450px] w-full gap-2 p-5 md:p-3 lg:p-5 bg-[#040404]/80 border border-gray-600/50 text-pretty rounded-[36px] drop-shadow-lg"
    >
      <h1
        id="the-resume-heading"
        className="xl:text-[48px] text-[36px] font-Montez text-[#0055D2]"
      >
        the resume
      </h1>
      <p className="text-[18px] font-medium text-gray-600">
        A passionate front-end developer skilled in React, Next.js, and
        JavaScript with a strong foundation in UI/UX design. With hands-on
        experience in building responsive, user-friendly web applications, I
        bring creativity and precision to every project. I’m committed to
        staying updated with industry trends and thrive in environments where I
        can adapt quickly and collaborate effectively to deliver impactful
        digital experiences.
      </p>
    </div>
  );
};

export default TheResume;
