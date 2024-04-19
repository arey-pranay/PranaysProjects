"use client";
import React from "react";
import { PinContainer1 } from "./ui/3d-pin";

export default function LHS() {
  return (
    <div className="h-fit w-[80vw] sm:w-full flex items-center justify-center hover:scale-110 transition-all 2s">
      <PinContainer1 title="pranayparikh.in" href="https://pranayparikh.in">
        <div className="flex overflow-hidden basis-full flex-col p-0 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-1/2 sm:w-[40rem] sm:h-[30rem] ">
          {/* <iframe   style={{ border: "none",overflow: "hidden" }} src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7159057117583179776?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>   */}
          <iframe
            className="h-full"
            src="https://www.youtube.com/embed/UeRczNVnteg?autoplay=1&muted=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <h1
            onClick={() => {
              window.open("https://pranayparikh.in", "_blank");
            }}
            className="text-4xl font-bold text-black my-4 text-center hover:underline"
          >
            Pranay&apos;s Portfolio
          </h1>
          <p className="text-lg text-black text-center hidden sm:block">
            An amazing 3D website made primarily with React.js,
            React-three-fiber, blender and framer-motion. Looks{" "}
            <i>mind-blowing</i> but might take a while to load depending on
            network and cache.
          </p>{" "}
          <p className="text-lg text-black text-center sm:hidden block">
            An amazing 3D website made primarily with React.js,
            React-three-fiber, blender and framer-motion.
          </p>{" "}
        </div>
      </PinContainer1>
    </div>
  );
}
