"use client";
import { footerLinks } from "@/data";
import LoadingSpinner from "@/utils/LoadingSpinner";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

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

    const serviceKey = "service_kx3jypm";
    const templateId = "template_d1jz9n7";
    const publicKey = "IxMNoToC0PWyLli8Q";

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
          toast.error("Error sending email");
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      toast.error("Unexpected error sending email!");
      setLoading(false);
    }
  };

  return (
    // main container
    <div
      id="footer"
      className=" mt-[200px] relative bottom-0 flex flex-col w-full xl:p-10 md:p-8 p-5 bg-gradient-to-r from-[#0F0F0F] to-[#171717] md:rounded-t-[120px] rounded-t-[60px] items-center font-inter"
    >
      {/* contact form heading */}
      <div className="absolute top-0 md:left-[115px] px-4 py-2 text-xl xl:text-2xl font-Montserrat bg-white font-bold text-black">
        Contact Form
      </div>
      {/* contact form heading */}
      {/* inside container containing form and links */}
      <div className="flex md:flex-row flex-col-reverse mt-12 md:mt-0 gap-[2rem] md:gap-[5rem] xl:px-20 md:px-14 px-10 justify-between items-center w-full">
        {/* message and links */}
        <div className="flex flex-col gap-7 md:w-1/2 md:mt-10 items-stretch h-full">
          <h2 className="text-white/80 text-[16px] xl:text-xl font-medium">
            You can either drop me a message here or reach out through the links
            below—your choice, I’m always a click away! 💻✉️
          </h2>
          <div className="flex flex-row gap-3 flex-wrap w-[250px] items-center">
            {footerLinks.map((fl, index) => (
              <a
                key={index}
                href={
                  fl.name === "Gmail"
                    ? `mailto:${fl.gmail}` // 'mailto:' to open the mail client
                    : fl.link // For other links
                }
                target={fl.name === "Gmail" ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                <Image
                  src={fl.icon}
                  alt={fl.name}
                  className="w-10 h-10 object-cover"
                />
              </a>
            ))}
          </div>
          <p className="text-white/90 text-sm md:text-lg">
            Copy rights @Adnan Shaik{" "}
            <span className="font-light text-[10px] md:text-sm text-white/60">
              (front-end developer & UI/UX designer)
            </span>
          </p>
        </div>
        {/* message and links */}
        {/* form */}
        <div className="flex flex-col gap-3 w-full md:w-1/2">
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
              className="relative border-white border-[2px] text-white/80 px-4 py-2 rounded-[22px] font-medium text-lg xl:text-xl overflow-hidden group transition duration-300 ease-in-out"
              onClick={handleCancel}
            >
              <span className="absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-black/80 transition-colors duration-300 ease-in-out">
                Reset
              </span>
            </button>
            <button
              onClick={handleSubmit}
              className="bg-black/80 text-white shadow-md rounded-[22px] w-[100px] h-[50px] text-lg xl:text-xl font-medium border-none relative overflow-hidden group transition duration-300 ease-in-out flex items-center justify-center"
              disabled={loading}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#2B0CFD] to-[#FB0D0D] transition-transform duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                {loading ? <LoadingSpinner /> : "Send"}
              </span>
            </button>
          </div>
          {/* buttons container */}
        </div>
        {/* form */}
      </div>
      {/* inside container containing form and links */}
    </div>
    // main container
  );
};

export default Footer;
