import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import gsap from "gsap";
import React, { useEffect } from "react";

//data for timeline
const timelineItems = [
  {
    period: "Feb 2025 - Present",
    desc: "Dev Trainee at TechnoIdentity.",
  },
  {
    period: "NOV 2023 - APR 2024",
    desc: "UI/UX Designer at Github Community GITAM",
  },
  {
    period: "JUL 2023 - NOV 2023",
    desc: "QA Intern at Reverr.",
  },
  {
    period: "AUG 2020 - APR 2024",
    desc: "Student at GITAM University Bangalore.",
  },
];

const MyJourneySoFar = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#my-journey-so-far-cont",
        start: "top 70%",
      },
    });
    tl.fromTo(
      "#my-journey-so-far-cont",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    );
  }, []);

  return (
    <div
      id="my-journey-so-far-cont"
      className="md:w-[320px] w-full p-4 flex flex-col bg-[#101012] rounded-[24px] drop-shadow-md font-inter border border-[#808080]/10"
    >
      <h1 className="font-robot text-[14px] font-bold text-white">
        My Journey So Far!
      </h1>
      <Timeline>
        {timelineItems.map((item, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent
              sx={{
                display: "flex",
                justifyContent: "end",
                padding: "2px",
                fontSize: "10px",
                fontWeight: 300, // equivalent to Tailwind's `font-light`
                color: "rgba(255, 255, 255, 0.8)", // equivalent to `text-white/80`
              }}
            >
              {item.period}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                fontSize: "10px",
                fontWeight: 500, // equivalent to Tailwind's `font-medium`
                color: "rgba(255, 255, 255)", // equivalent to `text-white`
              }}
            >
              {item.desc}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default MyJourneySoFar;
