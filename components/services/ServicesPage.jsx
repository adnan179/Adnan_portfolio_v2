"use client";
import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

const services = [
  {
    name: "Full-stack Web Development",
    desc: "Offering complete web development services, including front-end, back-end, and database solutions tailored to your business needs.",
    serviceList: [
      "Front-end development",
      "Back-end development",
      "Database design & integration",
    ],
  },
  {
    name: "Web & App Design",
    desc: "Providing expert web and app design services focused on creating seamless and engaging user experiences.",
    serviceList: [
      "Wire-framing",
      "UI/UX Design",
      "User Experience Optimization",
    ],
  },
];

gsap.registerPlugin(_ScrollTrigger);

const ServicesPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [proposal, setProposal] = useState("");
  const [loading, setLoading] = useState(false);
  const [requestedServices, setRequestedServices] = useState([]);

  // Function to toggle service in requestedServices array
  const toggleService = (service) => {
    if (requestedServices.includes(service)) {
      setRequestedServices(requestedServices.filter((s) => s !== service));
    } else {
      setRequestedServices([...requestedServices, service]);
    }
  };

  // Function to reset the form inputs
  const handleReset = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setProposal("");
    setRequestedServices([]);
  };

  // Function to send email message
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID_2;
    const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY;

    // Collect the empty field errors
    let missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!phoneNumber) missingFields.push("phone number");
    if (!proposal) missingFields.push("proposal");
    if (requestedServices.length === 0) missingFields.push("requestedServices");

    if (missingFields.length > 0) {
      toast.error(`Please enter ${missingFields.join(", ")}`);
      setLoading(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Adnan Shaik",
      from_phone_number: phoneNumber,
      message: proposal,
      requested_services: requestedServices.join(", "),
    };

    // Proceed with sending email
    try {
      emailjs
        .send(serviceKey, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully", response);
          handleReset();
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

  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services-section",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      "#services-sec-heading",
      {
        y: -100,
        opacity: 0,
      },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    )
      .fromTo(
        "#services-cont",
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", stagger: 0.3 }
      )
      .fromTo(
        "#services-form > *",
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", stagger: 0.3 }
      )
      .fromTo(
        "#services-notes > *",
        {
          x: -100,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", stagger: 0.3 }
      );
  }, []);

  return (
    <section
      id="services-section"
      className="flex flex-col gap-10 lg:py-[50px] lg:px-12 px-4 w-full min-h-screen justify-center items-center mt-[80px] pb-[50px]"
    >
      {/* headiing */}
      <h1
        id="services-sec-heading"
        className="bg-gradient-to-r from-[#808080]/50 via-[#808080] to-[#808080]/50  bg-clip-text text-transparent font-Montserrat font-semibold drop-shadow-lg lg:text-[36px] flex justify-center items-center w-full"
      >
        Your Vision, My Expertise: Web Dev, App Design, and Flawless UX!
      </h1>
      {/* heading */}
      {/* main container */}
      <div className="flex xl:gap-10 gap-4 md:flex-row flex-col justify-center items-center">
        {/* services container */}
        <div
          id="services-cont"
          className="flex sm:flex-row flex-col sm:gap-3 xl:gap-5 gap-2"
        >
          {services.map((serv, idx) => (
            <div
              onClick={() => toggleService(serv.name)}
              key={idx}
              className={`flex flex-col xl:w-[300px] lg:w-[250px] md:w-[200px] w-full gap-2 p-5 drop-shadow-lg rounded-[36px] cursor-pointer
                ${
                  requestedServices.includes(serv.name)
                    ? "bg-white text-black bg-opacity-100"
                    : "text-white bg-[#050505] bg-opacity-25"
                }`}
            >
              <h1 className="font-medium lg:text-[20px] text-[15px]">
                {serv.name}
              </h1>
              <p className="lg:text-[16px] text-[12px] font-light">
                {serv.desc}
              </p>
              <p className="lg:text-[16px] text-[13px]">Includes:</p>
              <ul className="pl-2 ">
                {serv.serviceList.map((sl, i) => (
                  <li key={i} className="lg:text-[14px] text-[12px]">
                    {sl}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* services container */}
        {/* form */}
        <form
          id="services-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2"
        >
          <p className="font-medium text-[#808080] text-[14px]">
            Please select a service from the menu by clicking on the desired
            option
          </p>
          <input
            required
            type="text"
            placeholder="Name"
            className="lg:w-[500px] w-full h-[50px] px-4 py-2 text-[#808080] font-medium bg-[#171717] rounded-[12px] drop-shadow-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex flex-row gap-2">
            <input
              required
              type="email"
              placeholder="Email"
              className="lg:w-[245px] w-1/2 h-[50px] px-4 py-2 text-[#808080] font-medium bg-[#171717] rounded-[12px] drop-shadow-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Phone number"
              className="lg:w-[245px] w-1/2 h-[50px] px-4 py-2 text-[#808080] font-medium bg-[#171717] rounded-[12px] drop-shadow-lg"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <textarea
            required
            minLength={100}
            maxLength={1000}
            rows={5}
            placeholder="Your brilliant master plan!"
            className="lg:w-[500px] w-full  px-4 py-2 text-[#808080] font-medium bg-[#171717] rounded-[12px] drop-shadow-lg"
            value={proposal}
            onChange={(e) => setProposal(e.target.value)}
          />

          <div className="flex flex-row gap-2">
            <button
              onClick={handleReset}
              className="text-white border border-white rounded-[36px] font-medium drop-shadow-lg w-[100px] h-[50px]"
            >
              Reset
            </button>
            <button
              disabled={loading}
              type="submit"
              className="flex justify-center items-center text-black bg-white rounded-[36px] font-bold drop-shadow-lg w-[100px] h-[50px]"
            >
              {loading ? <LoadingSpinner color={"black"} /> : "Submit"}
            </button>
          </div>
        </form>
        {/* form */}
      </div>
      <p
        id="services-notes"
        className="text-[#808080] font-medium xl:text-[14px] text-[10px]"
      >
        Note: Pricing is flexible and will be tailored based on the specific
        project requirements and services requested.
      </p>
      {/* main container */}
    </section>
  );
};

export default ServicesPage;
