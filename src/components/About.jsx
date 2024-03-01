import { motion } from "framer-motion";
import React from "react";

function About() {
  
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full p-20 bg-[#cdea68] rounded-tr-3xl rounded-tl-3xl text-black "
    >
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight ">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full border-t-[1px] pt-10 mt-20 flex border-[#9aaa64]">
        <div className="w-1/2">
          <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
            Our Approach:
          </h1>
          <button className="px-10 uppercase flex gap-10 items-center mt-10 py-6 bg-zinc-900 rounded-full text-white">
            Read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-red-400 rounded-3xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="aboutus"
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
