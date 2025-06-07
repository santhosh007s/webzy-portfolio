"use client";

import { motion } from "framer-motion";

export default function SimpleServices() {
  return (
    <div className="text-white py-8 text-center overflow-hidden whitespace-nowrap">
      {/* <p className="text-sm mb-4">Trusted by 30+ businesses worldwide</p> */}
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex space-x-8 sm:text-xl text-lg font-[MyFont2]"
          initial={{ x: "-10%" }}
          animate={{ x: "-55%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 45, // Adjust speed here
          }}
        >
          {/* Repeating business names for seamless effect */}
          <span>Website Development</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Tailwind CSS</span>
          <span>Next.js</span>
          <span>Figma to Code</span>
          <span>Portfolio Websites</span>
          <span>Landing Pages</span>
          <span>UI/UX Design</span>
          <span>Responsive Design</span>
          <span>Performance Optimization</span>
          <span>Website Development</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Tailwind CSS</span>
          <span>Next.js</span>
          <span>Figma to Code</span>
          <span>Portfolio Websites</span>
          <span>Landing Pages</span>
          <span>UI/UX Design</span>
          <span>Responsive Design</span>
          <span>Performance Optimization</span>
          {/* Duplicate for smooth looping effect */}
        </motion.div>
      </div>
    </div>
  );
}
