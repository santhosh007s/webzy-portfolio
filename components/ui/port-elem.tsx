"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HoverExpandProps {
  images: string[];
  links: string[];
  initialSelectedIndex?: number;
  thumbnailHeight?: number;
  maxThumbnails?: number;
}

export default function HoverExpand({
  images,
  links,
  initialSelectedIndex = 0,
  thumbnailHeight = 200,
  maxThumbnails = 300,
}: HoverExpandProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouchDevice);
  }, []);

  const handleClick = (i: number) => {
    if (isMobile) {
      if (selectedIndex === i) {
        const targetLink = links[i];
        if (targetLink) {
          window.open(targetLink, "_blank", "noopener,noreferrer");
        }
      } else {
        setSelectedIndex(i);
      }
    } else {
      const targetLink = links[i];
      if (targetLink) {
        window.open(targetLink, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <div className="relative">
      <div className="mx-auto flex w-fit gap-1 rounded-md pb-20 pt-10 md:gap-2">
        {images.slice(0, maxThumbnails).map((imageUrl, i) => (
          <div
            key={`image-container-${i}`}
            className={`group relative md:h-140 h-60 overflow-hidden rounded-2xl transition-all duration-300 ${
              selectedIndex === i
                ? "sm:w-200 w-65"
                : "w-6 sm:w-5 md:w-8 xl:w-30"
            }`}
            onMouseEnter={() => !isMobile && setSelectedIndex(i)}
            onMouseLeave={() => !isMobile && setSelectedIndex(i)}
            onClick={() => handleClick(i)}
          >
            <motion.div
              layoutId={`image-${i}`}
              className="absolute inset-0 size-full"
            >
              <img
                src={imageUrl}
                alt={`Image ${i + 1}`}
                className="size-full object-cover transition-transform duration-300"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
