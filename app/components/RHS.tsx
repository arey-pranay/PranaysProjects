"use client";
import React from "react";
import { PinContainer1 } from "./ui/3d-pin";

export default function RHS() {
  return (
    <div className="h-fit w-[80vw] sm:w-[10vw] flex items-center justify-center hover:scale-110 transition-all 2s">
      <PinContainer1
        title="pranay-firework"
        href="https://pranay-firework.vercel.app/"
      >
        <div className="flex overflow-hidden basis-full flex-col p-0 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-1/2 sm:w-[30rem] sm:h-[30rem] ">
          {/* <iframe   style={{ border: "none",overflow: "hidden" }} src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7159057117583179776?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>   */}
          <iframe
            className="h-full"
            src="https://www.youtube.com/embed/B4bLq-PRsSc;?autoplay=1&muted=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <h1
            onClick={() => {
              window.open("https://pranay-firework.vercel.app", "_blank");
            }}
            className="text-4xl font-bold text-black my-4 text-center hover:underline"
          >
            Pranay&apos;s FireWork
          </h1>
          <p className="text-lg text-black text-center hidden sm:block">
            A platform to showcase Pranay&apos;s projects and allow other
            developers to collab and propose new ones. Developed using using
            Next.js, TypeScript and MongoDB. Also used Clerk and Stripe APIs for
            auth and payments.
          </p>{" "}
          <p className="text-lg text-black text-center sm:hidden block">
            A platform to showcase Pranay&apos;s projects and allow other
            developers to collab and propose new ones.
          </p>{" "}
        </div>
      </PinContainer1>
    </div>
  );
}
