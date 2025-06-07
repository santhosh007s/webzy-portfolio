"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { animate } from "framer-motion";

const NavBar = () => {
  useEffect(() => {
    animate([[".nav", { opacity: 1, y: 0 }]]);
  }, []);

  return (
<>
  <div className="nav w-full z-40 fixed top-12 md:top-15 flex items-center justify-center opacity-0 -translate-y-5 transition-all duration-500">
    <div
      className="min-w-80 w-[85%] sm:w-[70%] xl:w-[30%] h-[80px]
      noise-pattern bg-repeat border border-white/10 bg-white/5 backdrop-blur-2xl px-4 py-4 flex items-center
      justify-between rounded-xl shadow-lg">
      
      <div className="flex items-center justify-start w-1/4 pr-2 sm:pr-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          priority
          unoptimized
          className="cursor-pointer object-contain w-12 sm:w-16 h-auto"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="w-3/4 flex justify-around items-center space-x-2 sm:space-x-6 text-sm sm:text-base font-semibold">
        <button className="text-gray-400 drop-shadow-md hover:text-[#4B8AEF] transition-all">
          Services
        </button>
        <button className="text-gray-400 drop-shadow-md hover:text-[#4B8AEF] transition-all">
          Works
        </button>
        <button className="text-gray-400 drop-shadow-md hover:text-[#4B8AEF] transition-all">
          Contact
        </button>
      </div>
    </div>
  </div>
</>

  );
};

export default NavBar;
