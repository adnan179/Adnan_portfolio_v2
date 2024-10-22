"use client";
import { socialLinks } from "@/data";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //function to reset the input tags to empty string
  const handleCancel = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setLoading(false);
  };

  //function to send email message
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY;

    // Collect the empty field errors
    let missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!message) missingFields.push("message");

    if (missingFields.length > 0) {
      toast.error(`Please enter ${missingFields.join(", ")}`);
      setLoading(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Adnan Shaik",
      message: message,
    };

    // Proceed with sending email
    try {
      emailjs
        .send(serviceKey, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully", response);
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Email sent successfully");
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error sending email", error);
          toast.error(`Error sending email: ${error}`);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      toast.error("Unexpected error sending email!");
      setLoading(false);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer > *",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      "#footer",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    )
      .fromTo(
        "#contact-heading",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#footer-message",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#footer-social-links > a",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", stagger: 0.2 }
      )
      .fromTo(
        "#copy-rights",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      ) // Form fields
      .fromTo(
        "#footer-form > *",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", stagger: 0.4 }
      );
  }, []);
  return (
    // main container
    <footer
      id="footer"
      className="relative bottom-0 flex flex-col w-full xl:p-10 md:p-8 p-5 bg-gradient-to-r from-[#0F0F0F] to-[#171717] md:rounded-t-[120px] rounded-t-[60px] items-center font-inter"
    >
      {/* contact form heading */}
      <div
        id="contact-heading"
        className="absolute top-0 md:left-[115px] px-4 py-2 text-xl xl:text-2xl font-Montserrat bg-white font-bold text-black"
      >
        Contact Form
      </div>
      {/* contact form heading */}
      {/* inside container containing form and links */}
      <div className="flex md:flex-row flex-col-reverse mt-12 md:mt-0 gap-[2rem] md:gap-[5rem] xl:px-20 md:px-14 px-10 justify-between items-center w-full">
        {/* message and links */}
        <div className="flex flex-col gap-7 md:w-1/2 md:mt-10 items-stretch h-full">
          <h2
            id="footer-message"
            className="text-white/80 text-[16px] xl:text-xl font-medium"
          >
            You can either drop me a message here or reach out through the links
            below—your choice, I’m always a click away! 💻✉️
          </h2>
          <div
            id="footer-social-links"
            className="flex flex-row gap-3 flex-wrap w-[250px] items-center"
          >
            {socialLinks.map((fl, index) => (
              <a
                key={index}
                href={
                  fl.name === "Gmail"
                    ? `mailto:${fl.gmail}` // 'mailto:' to open the mail client
                    : fl.link // For other links
                }
                target={fl.name === "Gmail" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex w-[40px] h-[40px] bg-[#171717] rounded-[10px] justify-center items-center"
              >
                {fl.icon}
              </a>
            ))}
          </div>
          <p id="copy-rights" className="text-white/90 text-sm md:text-lg">
            Copy rights @Adnan Shaik{" "}
            <span className="font-light text-[10px] md:text-sm text-white/60">
              (front-end developer & UI/UX designer)
            </span>
          </p>
        </div>
        {/* message and links */}
        {/* form */}
        <form
          id="footer-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-full md:w-1/2"
        >
          {/* name box */}
          <input
            className="form-input"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* email box */}
          <input
            className="form-input"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* message box */}
          <textarea
            className="form-message-box"
            rows={5}
            placeholder="Message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {/* buttons container */}
          <div className="flex flex-row gap-4 mt-4">
            <button
              type="button"
              className="relative border-white border-[2px] text-white/80 px-4 py-2 rounded-[22px] font-medium text-lg xl:text-xl overflow-hidden group transition duration-300 ease-in-out"
              onClick={handleCancel}
            >
              <span className="absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-black/80 transition-colors duration-300 ease-in-out">
                Reset
              </span>
            </button>
            <button
              type="submit"
              className="bg-black/80 text-white shadow-md rounded-[22px] w-[100px] h-[50px] text-lg xl:text-xl font-medium border-none relative overflow-hidden group transition duration-300 ease-in-out flex items-center justify-center"
              disabled={loading}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D] transition-transform duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                {loading ? <LoadingSpinner color={"white"} /> : "Send"}
              </span>
            </button>
          </div>
          {/* buttons container */}
        </form>
        {/* form */}
      </div>
      {/* inside container containing form and links */}
    </footer>
    // main container
  );
};

export default Footer;
