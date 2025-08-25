"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export function ProjectToggle({ active, onChange }){
  const indicatorRef = useRef(null);
  const btnrefs = {
    freelance: useRef(null),
    personal: useRef(null),
  };

  useEffect(() => {
    if(indicatorRef.current && btnrefs[active].current){
      const btn = btnrefs[active].current;
      const { offsetLeft, offsetWidth } = btn;

      gsap.to(indicatorRef.current,{
        x:offsetLeft,
        width:offsetWidth,
        duration:0.8,
        ease:"elastic.out(1,0.6)",
      });
    }
  },[active]);


  return(
    <div className="relative flex w-[280px] rounded-full p-1 bg-[#171717] border border-gray-50">
      {/*Animated Indicator*/ }
      <div ref={indicatorRef} className="absolute top-1 bottom-1 rounded-full bg-white shadow-md" style={{width:"50%",left:0}}></div>

      {/* buttons */}
      <button ref={btnrefs.freelance} onClick={() => onChange("freelance")} className={`relative z-10 flex-1 rounded-full py-2 text-center font-semibold transition-colors duration-300 ${active === "freelance" ? "bg-white/90 text-[#171717]":"text-white"}`}>
        Freelance
      </button>
      <button ref={btnrefs.personal} onClick={() => onChange("personal")} className={`relative z-10 flex-1 rounded-full py-2 text-center font-semibold transition-colors duration-300 ${active === "personal" ? "bg-white/90 text-[#171717]":"text-white"}`}>
        Personal
      </button>
    </div>
  );
}