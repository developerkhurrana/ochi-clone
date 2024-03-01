import React from "react";

function Cards() {
  return (
    <div className="h-screen w-full flex gap-8 px-20 justify-center items-center bg-zinc-900">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center w-full rounded-xl h-full bg-[#004d43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 border-[#cdea68] text-[#cdea68] rounded-full border-[#] left-10 bottom-10 ">
            &copy;2019-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-8 h-[50vh] w-1/2">
        <div className="card flex justify-center items-center relative w-1/2 rounded-xl h-full bg-[#06231f]">
        <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 border-zinc-100 text-zinc-100 rounded-full  left-10 bottom-10 ">
            &copy;2019-2024
          </button>
        </div>
        <div className="card flex justify-center items-center relative w-1/2 rounded-xl h-full bg-[#06231f]">
        <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 border-zinc-100 text-zinc-100 rounded-full border-[#] left-10 bottom-10 ">
            &copy;2019-2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
