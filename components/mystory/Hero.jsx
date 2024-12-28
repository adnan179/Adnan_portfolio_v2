"use client";
import { ImagesArray as OriginalImagesArray } from "@/data/MyUniverseData";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import blackCat from "../../app/public/mystory/black-cat-bag.png";
import gsap from "gsap";

const Hero = () => {
  const [randomizedImages, setRandomizedImages] = useState([]);
  const carouselRef = useRef(null);

  //carousel effect
  useEffect(() => {
    // Randomize the ImagesArray every time the component mounts
    const shuffledImages = [...OriginalImagesArray].sort(
      () => 0.5 - Math.random()
    );
    setRandomizedImages(shuffledImages);

    // Infinite scrolling logic
    const scrollCarousel = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1; // Adjust speed by changing the increment
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0; // Reset to start for infinite scrolling
        }
      }
    };

    const interval = setInterval(scrollCarousel, 25); // Adjust speed by changing interval
    return () => clearInterval(interval);
  }, []);

  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#black-cat > *",
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.inOut", stagger: 0.3 }
    )
      .fromTo(
        "#story-heading",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.inOut" }
      )
      .fromTo(
        "#story-location",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.inOut" }
      )
      .fromTo(
        "#carousel",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.inOut" }
      )
      .fromTo(
        "#story-heading-2",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.inOut" }
      );
  }, []);

  return (
    <section className="font-mono font-medium flex flex-col gap-5 w-full md:mt-[150px]">
      {/* greeting */}
      <div id="black-cat" className="flex items-center">
        <Image
          src={blackCat}
          alt="black-cat in bag"
          className="object-contain w-[120px] h-[120px] flex"
        />
        <h1 className="font-Montez text-white text-[48px]">Hello</h1>
      </div>
      {/* greeting */}
      {/* Heading */}
      <h1 id="story-heading" className="text-white md:text-[24px] text-justify">
        I&apos;m Adnan Shaik, a 22-year-old front-end developer, passionate
        about crafting user-centric, immersive websites.
      </h1>
      {/* Heading */}
      <h2 id="story-location" className="md:text-[20px] text-gray-800">
        Based in Bengaluru
      </h2>
      {/* Image Carousel */}
      <div
        id="carousel"
        ref={carouselRef}
        className="relative flex w-full overflow-hidden h-[300px]"
      >
        <div className="flex gap-8">
          {randomizedImages.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[300px] h-[300px] overflow-hidden rounded-lg"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={300}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
          {/* Repeat the images for seamless looping */}
          {randomizedImages.map((item, idx) => (
            <div
              key={`loop-${idx}`}
              className="flex-shrink-0 w-[300px] h-[300px] overflow-hidden rounded-lg"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={300}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Image Carousel */}
      <h2
        id="story-heading-2"
        className="text-gray-700 md:text-[20px] text-justify font-bold"
      >
        🌐✨ When I&apos;m not building digital experiences, you’ll find me 🍳
        experimenting in the kitchen, 🏍️ hitting the open road on my bike, ⛰️
        conquering trekking trails, or 💪 powering through a gym session.
      </h2>
    </section>
  );
};

export default Hero;
