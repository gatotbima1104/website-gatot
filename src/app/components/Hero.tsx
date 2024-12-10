"use client";

import React from "react";
import { PiArrowBendRightDownBold } from "react-icons/pi";

export default function Hero() {

  // handle mail
  const handleMail = () => {
    const mail = "gatotbima2002@gmail.com"
    location.href = "mailto:"+mail
  }

  return (
    <div className="bg-[#0A192F] w-full min-h-screen flex justify-center items-center font-geist-mono py-5" id="home">
      <div className="flex flex-col border w-[85%] min-h-[500px] rounded border-dashed p-10 space-y-5">
        <p className="text-[#c6eae2] underline pb-3">Hi, I'm</p>
        <h2 className="text-white sm:text-3xl lg:text-5xl font-semibold">
          Muhamad Gatot.
        </h2>
        <h2 className="md:text-xl lg:text-2xl font-semibold flex items-center gap-5 text-[#59E3C6] tracking-tighter">
          A Software Enginer focusing at <PiArrowBendRightDownBold size={40} />
        </h2>
        <h2 className="text-white sm:text-2xl md:text-5xl lg:text-7xl font-semibold pb-5 tracking-tighter">
          Web Scraping & Automation
        </h2>
        <p className="w-[80%] text-white pb-10">
          <span className="md:text-3xl lg:text-4xl font-extrabold">2+ </span> Years experienced
          with{" "}
          <span className="text-[#59E3C6] underline sm:text-base lg:text-2xl">
            Web Scraping & Automation
          </span>
          <br />
          <span className="md:text-3xl lg:text-4xl font-extrabold">15+</span> Clients{" "}
          <span className="text-[#59E3C6] underline sm:text-base lg:text-2xl">
            Completed & Satisfied
          </span>
          <br />
          <span className="md:text-3xl lg:text-4xl font-extrabold">30+</span> Script &{" "}
          <span className="text-[#59E3C6] underline sm:text-base lg:text-2xl">
            Application built
          </span>
        </p>

        <button
         onClick={handleMail}
         className="p-3 rounded-lg border-[#59E3C6] border border-dashed hover:border-dotted hover:text-[#59E3C6] w-[150px] text-white sm:mx-auto lg:ml-0">Contact Me</button>
      </div>
    </div>
  );
}
