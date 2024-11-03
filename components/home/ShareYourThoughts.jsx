"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoIosCloseCircle } from "react-icons/io";
import { db } from "@/utils/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { feedbackData } from "@/data";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(_ScrollTrigger);
const ShareYourThoughts = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //func to open feedback form
  const openForm = () => {
    setIsFormOpen(true);
  };

  //func to close feedback form
  const closeForm = () => {
    setIsFormOpen(false);
  };

  //func to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //func to reset the form input handles to null
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  //func to handle submit feedback to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "feedbacks"), formData);
      setFeedbacks([...feedbacks, formData]);
      toast.success("feedback submitted successfully");
      closeForm();
    } catch (error) {
      toast.error("Error submitting feedback:", error.message);
      console.log("Error adding document to the firebase", error);
    }
  };

  //function to fetch feedbacks from firebase
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const feedbacksCollection = collection(db, "feedbacks");
      const feedbackSnapshot = await getDocs(feedbacksCollection);
      const feedbackList = feedbackSnapshot.docs.map((doc) => doc.data());
      setFeedbacks(feedbackList);
    };
    fetchFeedbacks();
  }, []);

  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#share-your-thoughts",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      "#feedbacks-sec-heading",
      {
        x: -100,
        opacity: 0,
      },
      { x: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    )
      .fromTo(
        "#feedbacks-sub-heading",
        {
          x: -100,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#drop-your-wisdom",
        {
          x: -100,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      );
  }, []);
  return (
    <section
      id="share-your-thoughts"
      className="flex flex-col w-full min-h-screen lg:px-12 px-4 md:mt-0 mt-10"
    >
      {/* Heading, sub-heading and drop your wisdom button */}
      <h1
        id="feedbacks-sec-heading"
        className="bg-gradient-to-r from-[#808080]/50 via-[#808080] to-[#808080]/50  bg-clip-text text-transparent font-Montserrat font-semibold drop-shadow-lg lg:text-[48px] text-[36px]"
      >
        Share Your Thoughts
      </h1>
      <div className="flex flex-col gap-3 lg:w-[60%] md:w-[40%] w-full md:pl-10 pl-5">
        <h2
          id="feedbacks-sub-heading"
          className="font-medium text-white lg:text-[16px] text-[12px]"
        >
          Post your thoughts 💬, make it fun 👀 (yes, add the negatives too 🤔);
          see what others think—oh, the puns 😶‍🌫️!
        </h2>
        <button
          id="drop-your-wisdom"
          className=" w-[200px] bg-transparent border-[1.5px] border-white text-white font-bold text-[14px] px-4 py-2 rounded-[24px]"
          onClick={openForm}
        >
          Drop Your Wisdom
        </button>
      </div>
      {/* Heading, sub-heading and drop your wisdom button */}

      {feedbacks.length > 0 ? (
        <>
          {/* Display feedback messages */}
          <div className="flex overflow-hidden w-full mt-3">
            <div className="flex flex-row overflow-x-auto">
              {feedbacks.map((fd, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-1 p-4 m-2 bg-black/50 text-white rounded-lg shadow-white shadow sm:w-[400px] w-[320px]"
                >
                  <h3 className="font-bold text-[16px]">{fd.name}</h3>
                  <p className="font-medium text-[#808080] text-[12px]">
                    {fd.email}
                  </p>
                  <p className="font-light text-[14px]">{fd.message}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Display feedback messages */}
        </>
      ) : (
        <div className="flex w-full justify-center items-center h-full">
          <p className="text-white text-lg mt-4 font-Montserrat">
            The feedback vault is still empty. Guess everyone’s keeping their
            secrets! 🤐 Be the first to spill the tea!
          </p>
        </div>
      )}

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Black overlay */}
          <div className="fixed inset-0 bg-black/70" onClick={closeForm}></div>

          {/* Feedback form */}
          <div className="relative z-10 bg-[#171717] p-6 rounded-[36px] shadow-lg w-[90%] max-w-[500px] drop-shadow-lg">
            <button
              className="absolute top-4 right-4 text-white hover:scale-110 transition ease-in-out duration-150"
              onClick={closeForm}
            >
              <IoIosCloseCircle className="w-7 h-7" />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-[#808080]">
              Thoughts Form
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="px-4 py-2 shadow-lg rounded-[10px] bg-black/80 text-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="px-4 py-2 shadow-lg rounded-[10px] bg-black/80 text-white"
              />
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="px-4 py-2 shadow-lg rounded-[10px] bg-black/80 text-white"
              />
              <button
                type="submit"
                className="bg-white text-black p-2 rounded-lg font-medium hover:scale-105 transition ease-in-out duration-300"
              >
                Submit Feedback
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-transparent text-white border border-white p-2 rounded-lg font-medium hover:scale-105 transition ease-in-out duration-300"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Form Modal */}
    </section>
  );
};

export default ShareYourThoughts;
