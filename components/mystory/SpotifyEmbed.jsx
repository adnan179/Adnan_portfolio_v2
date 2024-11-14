import React from "react";

const SpotifyEmbed = () => {
  return (
    <div
      className="mt-5 relative w-full"
      style={{
        paddingTop: "50%",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://open.spotify.com/embed/playlist/3zZcyMPiylDnjboqLWldGY?utm_source=generator"
        className="absolute top-0 left-0 w-full h-[300px]"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
