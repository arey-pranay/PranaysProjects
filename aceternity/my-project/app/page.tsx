"use client";
import React from "react";
import LHS from "./components/LHS";
import "./styles.css";
import { Boxes } from "./components/ui/background-boxes";
import RHS from "./components/RHS";
export default function Home() {
  return (
    <>
      {/* <BackgroundBoxesDemo /> */}
      <div className="w-full h-screen ">
        <div className="h-full relative w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full  bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none h-screen" />

          <Boxes />
          <div className="sm:justify-center justify-around  items-center flex sm:flex-row flex-col overflow-x-hidden md:overflow-y-hidden w-screen h-full">
            <LHS />
            <RHS />
          </div>
        </div>
      </div>
    </>
  );
}
