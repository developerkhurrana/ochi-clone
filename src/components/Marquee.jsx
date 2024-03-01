import { motion, AnimatePresence } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-10 rounded-tr-3xl rounded-tl-3xl bg-[#004d43]"
    >
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] whitespace-nowrap pr-24 leading-none font-['Impact'] font-light uppercase"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] whitespace-nowrap pr-24 leading-none font-['Impact'] font-light uppercase"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] whitespace-nowrap pr-24 leading-none font-['Impact'] font-light uppercase"
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
