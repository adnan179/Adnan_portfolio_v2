import React from "react";
import SectionHeading from "../SectionHeading";

const ShareYourThoughts = () => {
  return (
    <section className="flex flex-col w-full min-h-screen lg:px-12 px-4 md:mt-0 mt-10">
      <SectionHeading heading="Share Your Thoughts" />
      <div className="flex flex-col gap-3 md:w-[40%] w-full md:pl-10 pl-5">
        <h2 className="font-medium text-white lg:text-[16px] text-[12px]">
          Post your thoughts 💬, make it fun 👀 (yes, add the negatives too 🤔);
          see what others think—oh, the puns 😶‍🌫️!
        </h2>
        <button className=" w-[200px] bg-transparent border-[1.5px] border-white text-white font-bold text-[14px] px-4 py-2 rounded-[24px]">
          Drop Your Wisdom
        </button>
      </div>
    </section>
  );
};

export default ShareYourThoughts;
