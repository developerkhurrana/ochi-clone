import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textStructure mt-52">
        {["We create", "eye Opening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] h-[5.5vw] rounded-xl relative top-[.75vw] ml-20 -mr-[3vw] bg-red-500"
                  ></motion.div>
                )}
                <h1 className='px-20 uppercase leading-none tracking-tight text-[7vw] font-["Impact"]'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between py-5 px-20 items-center">
        {[
          "For the public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] rounded-full font-light uppercase text-md border-zinc-500">
            Start the Project
          </div>
          <div className="rounded-full flex items-center justify-center p-3 border-zinc-500 border-[1px] rotate-45">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
