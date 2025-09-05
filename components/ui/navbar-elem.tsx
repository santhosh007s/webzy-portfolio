"use client";
import Link from "next/link";

import React, { useEffect } from "react";
import Image from "next/image";
import { animate } from "framer-motion";

const NavBar = () => {
  useEffect(() => {
    animate([[".nav", { opacity: 1, y: 0 }]]);
  }, []);

  return (
    <>
      <div className="nav w-full z-40 fixed top-12 md:top-12 flex items-center justify-center opacity-0 -translate-y-5 transition-all duration-500">
        <div className="min-w-20 w-[80%] xl:w-[27%] md:h-[64px] h-[50%]
      noise-pattern bg-repeat border border-white/10 bg-white/5 backdrop-blur-2xl px-4 py-4 flex items-center
      justify-between rounded-xl shadow-lg"
        >
          <div className="flex items-center justify-start w-1/4 pr-2 sm:pr-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                priority
                unoptimized
                className="cursor-pointer object-contain w-12 sm:w-16 h-auto"
              />
            </Link>
          </div>

          {/* Navigation Buttons */}
          <div className="w-3/4 flex justify-around items-center space-x-2 sm:space-x-6 text-sm sm:text-base font-semibold">
            <a
              href="#services"
              className="text-gray-400 drop-shadow-md hover:text-[#4B8AEF] transition-all"
            >
              Services
            </a>
            <a
              href="#works"
              className="text-gray-400 drop-shadow-md hover:text-[#4B8AEF] transition-all"
            >
              Works
            </a>
            <a
              href="#contact"
              className="text-gray-400 drop-shadow-md hover:text-[#4B8AEF] transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
