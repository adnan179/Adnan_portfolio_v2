"use client";
import React, { useState } from "react";
import SectionHeading from "../SectionHeading";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ServicesComponent = () => {
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

  return (
    <section className="flex flex-col gap-5 w-full lg:py-[50px] lg:px-12 px-4">
      {/* heading & sub-heading */}
      <div className="flex flex-col">
        <SectionHeading heading="Services" />
        <h2 className="pl-6 text-white font-bold lg:text-[14px] text-[10px]">
          Your Vision, My Expertise: Web Dev, App Design, and Flawless UX!
        </h2>
      </div>
      {/* heading & sub-heading */}
      {/* main container */}
      <div className="flex gap-10 md:flex-row flex-col justify-center items-center">
        {/* services container */}
        <div className="flex flex-col gap-2">
          <div
            onClick={() => toggleService("Web Development")}
            className={` flex lg:w-[600px] w-full h-[50px] justify-start  border border-white items-center rounded-[16px] drop-shadow-lg px-4 py-2 cursor-pointer ${
              requestedServices.includes("Web Development")
                ? "bg-white text-black"
                : "bg-transparent text-white"
            }`}
          >
            <h2 className="font-medium lg:text-[18px] text-sm">
              Web Development
            </h2>
          </div>
          <div className="flex flex-row gap-2">
            <div
              onClick={() => toggleService("Design")}
              className={`flex flex-col justify-start lg:w-[245px] w-1/2 h-[100px] border border-white rounded-[16px] drop-shadow-lg px-4 py-2 cursor-pointer ${
                requestedServices.includes("Design")
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              }`}
            >
              <h2 className="font-medium lg:text-[18px] text-[14px]">Design</h2>
            </div>
            <div
              onClick={() => toggleService("User Experience Design")}
              className={`flex flex-col justify-start lg:w-[345px] w-1/2 h-[100px] border border-white rounded-[16px] drop-shadow-lg px-4 py-2 cursor-pointer ${
                requestedServices.includes("User Experience Design")
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              }`}
            >
              <h2 className="font-medium lg:text-[18px] text-[14px]">
                User Experience Design
              </h2>
            </div>
          </div>
        </div>
        {/* services container */}
        {/* form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
      {/* main container */}
    </section>
  );
};

export default ServicesComponent;
