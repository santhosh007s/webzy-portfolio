

"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

interface HoverExpandProps {
  images: string[]
  links: string[] // Custom links to open on click
  initialSelectedIndex?: number
  thumbnailHeight?: number
  maxThumbnails?: number
}

export default function HoverExpand({
  images,
  links,
  initialSelectedIndex = 0,
  thumbnailHeight = 200,
  maxThumbnails = 300,
}: HoverExpandProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex)

  return (
    <div className="relative">
      <div className="mx-auto flex w-fit gap-1 rounded-md pb-20 pt-10 md:gap-2">
        {images.slice(0, maxThumbnails).map((imageUrl, i) => (
          <div
            key={`image-container-${i}`}
            className={`group relative md:h-140  h-60 overflow-hidden rounded-2xl transition-all duration-300 ${
              selectedIndex === i ? "sm:w-240 w-50" : "w-6 sm:w-5 md:w-8 xl:w-40"
            }`}
            onMouseEnter={() => setSelectedIndex(i)}
            onMouseLeave={() => setSelectedIndex(i)}
            onClick={() => {
              const targetLink = links[i]
              if (targetLink) {
                window.open(targetLink, "_blank", "noopener,noreferrer")
              }
            }}
            // style={{ height: thumbnailHeight }}
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
  )
}
