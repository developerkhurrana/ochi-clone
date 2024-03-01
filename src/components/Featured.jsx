import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const all = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    all[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    all[index].start({ y: "100%" });
  };

  return (
    <div data-scroll data-scroll-section className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-8 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex  left-full top-1/2 -translate-y-1/2 -translate-x-1/2 tracking-tight leading-none font-[Impact] text-[#cdea68] z-50 text-8xl overflow-hidden">
              {"FIDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={all[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" card w-full h-full   rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden right-full top-1/2 -translate-y-1/2 translate-x-1/2 tracking-tight leading-none font-[Impact] text-[#cdea68] z-50 text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={all[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden  rounded-xl">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
