import React from "react";
import {FaArrowUpLong} from 'react-icons/fa6'

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-52">
        {["We create", "eye Opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker">
                <div className="w-fit flex items-center"><h1 className='px-20 uppercase leading-none tracking-tight text-[7vw] font-["Impact"]'>
                {item}
              </h1></div>
              
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between py-5 px-20 items-center">
        {[
          "For the public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
        <div className="px-5 py-2 border-[1px] rounded-full font-light uppercase text-md border-zinc-500">Start the Project</div>
        <div className="rounded-full flex items-center justify-center p-3 border-zinc-500 border-[1px] rotate-45"><FaArrowUpLong /></div>
      </div>
      </div>
      
    </div>
  );
}

export default LandingPage;
