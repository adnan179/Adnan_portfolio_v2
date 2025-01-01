"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import cat from "../app/public/home/black-cat-on-book.jpg";
import { socialLinks } from "@/data";
import Link from "next/link";
import _ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(_ScrollTrigger);
const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  //function to send email message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error(`Please enter a proper email`);
      return;
    }

    setLoading(true); // Activate loading animation immediately

    const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY;

    const templateParams = {
      from_email: email,
      to_name: "Adnan Shaik",
    };

    // Send email
    emailjs
      .send(serviceKey, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setEmail(""); // Reset email input
        toast.success("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email", error);
        toast.error(`Error sending email: ${error}`);
      })
      .finally(() => {
        setLoading(false); // Deactivate loading animation after completion
      });
  };

  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "top 100%",
        toggleActions: "play none none reset",
      },
    });
    tl.fromTo(
      "#footer",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    )
      .fromTo(
        "#footer-heading",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#footer-input",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.3, ease: "power3.inOut" }
      )
      .fromTo(
        "#footer-input > *",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.3, ease: "power3.inOut" }
      )
      .fromTo(
        "#footer-links > *",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.3, ease: "power3.inOut" }
      )
      .fromTo(
        "#black-cat",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power3.inOut" }
      )
      .fromTo(
        "#copy-rights",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.3, ease: "power3.inOut" }
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
          className="sm:w-[450px] flex items-center bg-[#171717] border border-[#808080]/50 rounded-[64px] overflow-hidden focus-within:shadow-[0_0_5px_1px_rgba(255,255,255,0.8)] focus-within:border-white"
        >
          <input
            type="email"
            placeholder="name@gmail.com"
            className="bg-[#171717] text-white flex-1 sm:p-4 p-3 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-white text-[#040404] flex items-center justify-center  font-bold sm:px-5 sm:py-[10px] px-3 py-[8px] rounded-[64px] focus:outline-none sm:mr-2 mr-1 hover:scale-125 duration-300 ease-in-out"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? "Loading..." : "Send"}
          </button>
        </div>
        <div id="footer-links" className="flex gap-5 flex-wrap">
          {socialLinks.map((sl, idx) => (
            <Link
              key={idx}
              href={
                sl.name === "Gmail"
                  ? `mailto:${sl.gmail}` // 'mailto:' to open the mail client
                  : sl.link // For other links
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
