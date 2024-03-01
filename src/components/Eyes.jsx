import React, { useState, useRef, useEffect } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let diffX = mouseX - window.innerWidth / 2;
      let diffY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(diffY, diffX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.7"
        className="relative w-full h-full bg-[url('https://images.pexels.com/photos/459277/pexels-photo-459277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"
      >
        <div className="absolute flex gap-10  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full flex items-center justify-center bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  h-10"
              >
                <div className="w-10 h-10  rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full flex items-center justify-center bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  h-10"
              >
                <div className="w-10 h-10  rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
