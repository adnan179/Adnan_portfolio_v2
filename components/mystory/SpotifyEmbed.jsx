import gsap from "gsap";
import React, { useEffect } from "react";

const SpotifyEmbed = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#spotify",
        start: "top 70%",
      },
    });
    tl.fromTo(
      "#spotify",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    );
  }, []);
  return (
    <div
      id="spotify"
      className="flex w-full justify-center items-center p-4 border border-[#808080]/10 rounded-[24px] bg-[#101012]"
    >
      <iframe
        style={{
          borderRadius: "20px",
        }}
        src="https://open.spotify.com/embed/playlist/1OXN1VgUccZQFoe4r8wJ3j?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
